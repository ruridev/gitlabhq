require 'rails_helper'

RSpec.describe Geo::PushEvent, type: :model do
  describe 'relationships' do
    it { is_expected.to belong_to(:project) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:project) }
  end

  describe '#source' do
    it { is_expected.to define_enum_for(:source).with([:repository, :wiki]) }
  end
end
