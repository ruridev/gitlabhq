import { GlEmptyState } from '@gitlab/ui';
import { mount, shallowMount } from '@vue/test-utils';
import JiraImportProgress from '~/jira_import/components/jira_import_progress.vue';

const illustration = 'illustration.svg';
const importProject = 'JIRAPROJECT';
const issuesPath = 'gitlab-org/gitlab-test/-/issues';

describe('JiraImportProgress', () => {
  let wrapper;

  const getGlEmptyStateAttribute = attribute => wrapper.find(GlEmptyState).attributes(attribute);

  const getParagraphText = () => wrapper.find('p').text();

  const mountComponent = ({ mountType = 'shallowMount' } = {}) => {
    const mountFunction = mountType === 'shallowMount' ? shallowMount : mount;
    return mountFunction(JiraImportProgress, {
      propsData: {
        illustration,
        importInitiator: 'Jane Doe',
        importProject,
        importTime: '2020-04-08T12:17:25+00:00',
        issuesPath,
      },
    });
  };

  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });

  describe('empty state', () => {
    beforeEach(() => {
      wrapper = mountComponent();
    });

    it('contains illustration', () => {
      expect(getGlEmptyStateAttribute('svgpath')).toBe(illustration);
    });

    it('contains a title', () => {
      const title = 'Import in progress';
      expect(getGlEmptyStateAttribute('title')).toBe(title);
    });

    it('contains button text', () => {
      expect(getGlEmptyStateAttribute('primarybuttontext')).toBe('View issues');
    });

    it('contains button url', () => {
      const expected = `${issuesPath}?search=${importProject}`;
      expect(getGlEmptyStateAttribute('primarybuttonlink')).toBe(expected);
    });
  });

  describe('description', () => {
    beforeEach(() => {
      wrapper = mountComponent({ mountType: 'mount' });
    });

    it('shows who initiated the import', () => {
      expect(getParagraphText()).toContain('Import started by: Jane Doe');
    });

    it('shows the time of import', () => {
      expect(getParagraphText()).toContain('Time of import: Apr 8, 2020 12:17pm GMT+0000');
    });

    it('shows the project key of the import', () => {
      expect(getParagraphText()).toContain('Jira project: JIRAPROJECT');
    });
  });
});
