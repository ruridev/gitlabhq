# frozen_string_literal: true

Grape::Validations.register_validator(:absence, ::API::Validations::Validators::Absence)
Grape::Validations.register_validator(:file_path, ::API::Validations::Validators::FilePath)
Grape::Validations.register_validator(:git_ref, ::API::Validations::Validators::GitRef)
Grape::Validations.register_validator(:git_sha, ::API::Validations::Validators::GitSha)
Grape::Validations.register_validator(:integer_none_any, ::API::Validations::Validators::IntegerNoneAny)
Grape::Validations.register_validator(:array_none_any, ::API::Validations::Validators::ArrayNoneAny)
Grape::Validations.register_validator(:check_assignees_count, ::API::Validations::Validators::CheckAssigneesCount)
