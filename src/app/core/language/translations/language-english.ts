import { Language } from '../language';
/* tslint:disable */
export class English implements Language {
    // GENERAL VARIABLES
    LANGUAGE_ISO = 'english'
    // Utils
    add = 'Add'
    adm1 = 'Province'
    adm2 = 'District'
    adm3 = 'Commune'
    adm4 = 'Village'
    administrative_settings = 'Administrative Settings'
    back = 'Back'
    beneficiaries = 'Beneficiaries'
    beneficiary = 'Beneficiary'
    cancel = 'Cancel'
    characters = 'Characters'
    close = 'Close'
    create = 'Create'
    delete = 'Delete'
    details = 'Details'
    distribution = 'Distribution'
    distributions = 'Distributions'
    done = 'Done'
    email = 'Email'
    export = 'Export'
    export_codes = 'Export booklet codes'
    gender = 'Gender'
    general_settings = 'Configuration'
    home = 'Home'
    households = 'Household'
    id = 'ID'
    import = 'Import'
    individual = 'Individual'
    is_required = 'is required'
    location = 'Location'
    new = 'New'
    next = 'Next'
    no_data = 'No data'
    phone = 'Phone'
    project = 'Project'
    projects = 'Projects'
    reports = 'Reports'
    rights = 'Rights'
    save = 'Save'
    settings = 'Settings'
    the = 'the'
    this = 'this'
    summary = 'Summary'
    update = 'Update'
    voucher = 'Vouchers'

    // Error
    back_to_homepage = 'Go back to homepage'
    error_interceptor_msg = 'An error occured, request has failed (Empty back response).'
    forbidden = 'Forbidden Page'
    forbidden_message = 'Sorry, you don\'t have permission to access this page'
    not_connected_error = 'Please log in'
    not_found = 'Page Not Found'
    not_found_message = 'Sorry, this page could not be found'

    // Role
    role_user_admin = 'Administrator'
    role_user_country_manager = 'Country manager'
    role_user_field_officer = 'Field officer'
    role_user_project_manager = 'Project manager'
    role_user_project_officer = 'Project officer'
    role_user_regional_manager = 'Regional manager'

    // Months
    months_short = [
      'Jan' ,
      'Feb' ,
      'Mar' ,
      'Apr' ,
      'May' ,
      'Jun' ,
      'Jul' ,
      'Aug' ,
      'Sep' ,
      'Oct' ,
      'Nov' ,
      'Dec'
    ]

    // SPECIFIC VARIABLES

    // Add beneficiary
    add_beneficiary_done = 'Summary of Household to create'
    add_beneficiary_getAddressNumber = 'Address Number'
    add_beneficiary_getAddressPostcode = 'Address Postcode'
    add_beneficiary_getAddressStreet = 'Address Street'
    add_beneficiary_getDateOfBirth = 'Date of Birth'
    add_beneficiary_getFamilyName = 'Family Name'
    add_beneficiary_getGivenName = 'Given Name'
    add_beneficiary_getNationalID = 'ID Number'
    add_beneficiary_getOccupation = 'Livelihood'
    add_beneficiary_getTypeNationalId = 'ID Type'
    add_beneficiary_getTypePhone = 'Type'
    add_beneficiary_res_address = 'Resident Address'
    add_beneficiary_step1 = 'Information'
    add_beneficiary_step2 = 'Head'
    add_beneficiary_step3 = 'Members'
    add_beneficiary_title = 'add beneficiary'
    add_beneficiary_code = 'Ext'

    // Add beneficiary options
    national_id_passport = 'Passport'
    national_id_card = 'ID Card'
    national_id_license = 'Driver\'s License'
    national_id_family_registry = 'Family Registry'
    national_id_other = 'Other'

    // Add distribution
    add_distribution_advanced_option = 'Advanced options'
    add_distribution_beneficiaries_reached = 'Beneficiaries reached'
    add_distribution_check_date = 'Error while saving the date, check that the format is like dd-mm-yyyy'
    add_distribution_check_fields = 'Fill new distribution\'s information before, including the commodity and a minimum selection score\'s value greater than 0.'
    add_distribution_commodities_delivered = 'to be delivered'
    add_distribution_created = ' was created'
    add_distribution_date_inside_project = 'Error while creating new distribution, your distribution date have to be inside the project dates'
    add_distribution_distributed_commodity = 'distributed commodity'
    add_distribution_error_creating = 'Error while creating new distribution'
    add_distribution_female = 'Woman'
    add_distribution_households_reached = 'Households reached'
    add_distribution_male = 'Man'
    add_distribution_missing_commodity = 'A commodity is missing'
    add_distribution_missing_date = 'The date is missing'
    add_distribution_missing_location = 'Add a Province'
    add_distribution_missing_selection_criteria = 'A selection criterion is missing'
    add_distribution_missing_threshold = 'The minimum selection score\'s value should be greater than 0'
    add_distribution_multiple_modalities = 'You can\'t have two different modalities in the same distribution'
    add_distribution_no_beneficiaries = 'The number of reached beneficiaries/households must be positive'
    add_distribution_selection_criteria = 'selection criteria'
    add_distribution_text_explanation = 'The system will only select beneficiaries/households that have a score higher than the minimum selection score'
    add_distribution_threshold = 'Minimum selection score'
    add_distribution_zero = 'The number of households reached or the amount to be distributed is 0'

    // Add project
    add_project_title = 'new project'
    add_project_new_distribution = 'new distribution'

    // Benficiary form errors
    beneficiary_error_location = 'You must select a location'
    beneficiairy_error_address_number = 'You must enter an address number'
    beneficiary_error_address_postcode = 'You must enter an address postcode'
    beneficiary_error_address_street = 'You must enter an address street'
    beneficiairy_error_head = 'the head of household'
    beneficiary_error_member = ' member'
    beneficiary_error_family_name = 'You must enter a family name for '
    beneficiary_error_given_name = 'You must enter a given name for '
    beneficiairy_error_gender = 'You must select a gender for '
    beneficiary_error_phone = 'Phone can only be composed of digits for '
    beneficiary_error_existing_country_code = 'Please select an existing country code from the list for '
    beneficiary_error_country_code = 'Please select a country code for the phone number for '
    beneficiairy_error_birth_date = 'Please select a valid birth date for '
    beneficiairy_error_project = 'You must select at least one project'

    // Beneficiaries
    beneficiaries_add_distribution = 'Add beneficiaries to this distribution'
    beneficiaries_add_list = 'Add this list to a project'
    beneficiaries_add_project = 'Please select the project(s) in which you would like to add the'
    beneficiaries_added = 'Beneficiairies added to the selected project'
    beneficiaries_advanced_research = 'Advanced search'
    beneficiaries_clear_all_research = 'Clear all'
    beneficiaries_full_address = 'Full household address'
    beneficiaries_head = 'Head'
    beneficiaries_household_info = 'Household information summary'
    beneficiaries_import_addFile = 'add file or drag and drop'
    beneficiaries_import_addModal = 'add file'
    beneficiaries_import_api = 'import from external data source'
    beneficiaries_import_beneficiaries_imported = ' beneficiaries inserted'
    beneficiaries_import_canceled = 'import canceled'
    beneficiaries_import_check_fields = 'A field is empty or unset, please fill all inputs and select a project'
    beneficiaries_import_csv = 'download template'
    beneficiaries_import_convert = 'convert file'
    beneficiaries_import_error_importing = 'Error while importing data'
    beneficiaries_import_error_file = 'You must select a file'
    beneficiaries_import_error_selection = 'You must select at least one choice'
    beneficiaries_import_file = 'import from file'
    beneficiaries_import_response = 'Get ready to recover the file'
    beneficiaries_import_select_location = 'You must select a location'
    beneficiaries_import_select_project = 'You must select a project and add a file before uploading'
    beneficiaries_import_title = 'import beneficiary data'
    beneficiaries_import_warning = 'Warning: if the provided file is incomplete, the resulting one may need to be completed for the import to succeed.'
    beneficiaries_location = 'Household Location'
    beneficiaries_member = 'Member'
    beneficiaries_missing_selected_project = 'You must select a project before uploading'
    beneficiaries_proxy = 'Proxy'
    beneficiaries_residency_refugee = 'Refugee'
    beneficiaries_residency_idp = 'IDP'
    beneficiaries_residency_resident = 'Resident'

    beneficiaries_select_api = 'Select API'
    beneficiaries_selected_project = 'selected beneficiaries:'

    // Cache
    cache_distribution_added = 'Distribution and beneficiaries of the project added to the cache'
    cache_store_beneficiaries = 'Offline Mode'
    cache_stored_beneficiaries = 'Saved For Offline Mode'
    cache_no_distribution = 'This distribution isn\'t stored in the cache, you can\'t access it offline'

    // Commodities tooltips
    commodity_cash = 'Mobile Money'
    commodity_qr_voucher = 'QR Code Voucher'
    commodity_paper_voucher = 'Paper Voucher'
    commodity_bread = 'Bread'
    commodity_loan = 'Loan'
    commodity_food = 'Food'
    commodity_wash = 'WASH Kit'
    commodity_agriculture = 'Agricultural Kit'
    commodity_rte = 'RTE Kit'

    // Countries
    country_khm = 'Cambodia'
    country_syr = 'Syria'

    // Dashboard
    dashboard_distribution_map = 'distribution map'
    dashboard_recent_distributions = 'upcoming distributions'
    dashboard_summary = 'summary'
    dashboard_summary_1 = 'total registrations'
    dashboard_summary_2 = 'active projects'
    dashboard_summary_3 = 'enrolled beneficiaries'
    dashboard_summary_4 = 'total value transactions'

    // Data verification
    data_verification_chip_actual = 'Household targeted'
    data_verification_chip_add = 'To add'
    data_verification_chip_existing = 'Existing'
    data_verification_chip_remove = 'To remove'
    data_verification_description_duplicates = 'The duplicate check page displays any potential duplicate beneficiary records in the database. If the existing beneficiary is not a head of household, you can overwrite their information, ignored the changes, or save both as different beneficiaries if you are sure they are different people.'
    data_verification_description_less = 'We found records which you’ve indicated you wish to remove from the database. Please select those which you wish to remove.'
    data_verification_description_more = 'We found records that do not appear to exist in the database already. Please select those that you wish to add to the project database.'
    data_verification_description_typos = 'This panel will display any suspected data entry errors found in the imported beneficiary data. Please choose whether to keep the existing one, update it with the imported data or save both as separate beneficiary records.'
    data_verification_description_end = 'Modifications will NOT be added to the database until the end of the validation process'
    data_verification_done = 'Your data has been verified'
    data_verification_error = 'Error processing data'
    data_verification_just_now = 'Just now'
    data_verification_last_updated = 'Last updated'
    data_verification_send = 'Update'
    data_verification_snackbar_duplicate_corrected = 'Duplicate issues corrected'
    data_verification_snackbar_duplicate_no_corrected = 'Not all duplicated have been corrected'
    data_verification_snackbar_less_corrected = 'Beneficiaries removed with success'
    data_verification_snackbar_more_corrected = 'Beneficiaries added with success'
    data_verification_snackbar_typo_corrected = 'Typo issues corrected'
    data_verification_snackbar_typo_no_corrected = 'Not all typo issues have been corrected'
    data_verification_step_info = 'Step info'
    data_verification_step_duplicates = 'Check for Duplicates'
    data_verification_step_less = 'Remove Beneficiaries'
    data_verification_step_more = 'Add Beneficiaries'
    data_verification_step_typos = 'Data Entry Inconsistencies'
    data_verification_title = 'data verification and validation'

    // Distribution
    distribution_accept_changed = 'Accept Changes'
    distribution_add_beneficiaries = 'Add beneficiaries to this distribution'
    distribution_beneficiary_added = 'Beneficiary added'
    distribution_beneficiary_not_added = 'Beneficiary could not be added'
    distribution_cant_update = 'You can\'t update this distribution.'
    distribution_details_export = 'distribution list'
    distribution_details_import = 'import & compare'
    distribution_details_random = 'export random sample'
    distribution_details_sample_size = 'Sample size'
    distribution_details_validate = 'validate & lock'
    distribution_distribute = 'set as distributed'
    distribution_edit = 'Edit distribution'
    distribution_error_validate = 'The distribution is empty, please fill it before to validate it'
    distribution_no_beneficiaries = 'No beneficiaries have been added or removed. Any changes made to the imported beneficiaries will be updated in the system.'
    distribution_no_random_sample = 'Random sample can\'t be generated...'
    distribution_no_right_transaction = 'You haven\'t the right to realize the transaction, ask to your project manager or your country manager'
    distribution_no_right_validate = 'You haven\'t the right to validate the distribution, ask to your project manager'
    distribution_no_valid_commodity = 'No valid commodity detected for this distribution.'
    distribution_not_modified = 'This distribution has not been modified so far.'
    distribution_not_validated = 'Distribution could not be validated'
    distribution_request_logs = 'Send transaction logs by email'
    distribution_select_beneficiaries = 'Please select the beneficiaries from the project'
    distribution_show_data = 'Show data anyway'
    distribution_validate = 'Validate'
    distribution_validated = 'Distribution has been validated'
    distribution_validated_title = 'Validated distribution'
    distribution_want_add = 'that you want to add to the '

    // Header
    'header_add-beneficiaries' = 'Add Beneficiaries'
    'header_add-distribution' = 'Add Distribution'
    'header_administrative-settings' = 'Administrative Settings'
    header_beneficiaries = 'Beneficiaries'
    header_disconnect = 'log out'
    'header_distributions' = 'Distribution'
    'header_data-validation' = 'Data Validation'
    'header_general-settings' = 'Configuration'
    header_home = 'Home'
    header_import = 'Import beneficiary data'
    header_imported = 'Imported beneficiaries data'
    header_language = 'language'
    header_profile = 'Profile'
    header_projects = 'Projects'
    header_reports = 'Reports'
    header_settings = 'Settings'
    'header_update-beneficiary' = 'Update Beneficiaries'
    header_vouchers = 'Vouchers'

    // Import
    import_added = 'Added from existing beneficiaries'
    import_back_to_beneficiaries = 'Back to Beneficiaries'
    import_back_to_project = 'Back to Project'
    import_created = 'Newly created'
    import_deleted = 'Will be deleted'
    import_description = 'Import the file that contains the modified distribution. The database will be updated with the new list of beneficiaries for this distribution when you will click on "update" after importing.'
    import_distribution_no_right_update = 'لا يحق لك تحديث التوزيع ، اسأل مدير المشروع الخاص بك'
    import_distribution_updated = 'Distribution updated'
    import_select_new = 'Select all new'
    import_select_old = 'Select all old'
    import_updated = 'Will be updated'

    livelihood_livestock = 'Agriculture - Livestock'
    livelihood_crops = 'Agriculture - Crops'
    livelihood_fishing = 'Agriculture – Fishing'
    livelihood_agriculture_other = 'Agriculture – Other'
    livelihood_mining = 'Mining'
    livelihood_construction = 'Construction'
    livelihood_manufacturing = 'Manufacturing'
    livelihood_retail = 'Retail'
    livelihood_transportation = 'Transportation'
    livelihood_education = 'Education'
    livelihood_health = 'Health Care'
    livelihood_tourism = 'Hospitality and Tourism'
    livelihood_legal = 'Legal Services'
    livelihood_home = 'Home Duties'
    livelihood_religious = 'Religious Service'
    livelihood_telecom = 'IT and Telecommunications'
    livelihood_finance = 'Finance and Insurance'
    livelihood_manual = 'Manual Labour'
    livelihood_ngo = 'NGO and Non Profit'
    livelihood_military = 'Military or Police'
    livelihood_government = 'Government and Public Enterprise'
    livelihood_garment = 'Garment Industry'
    livelihood_security = 'Security Industry'
    livelihood_service = 'Service Industry and Other Professionals'
    livelihood_other = 'Other'


    // Login
    login_bms = 'Beneficiary management system'
    login_captcha_invalid = 'The captcha is invalid'
    login_forgot_password = 'Forgot password?'
    login_password = '*********'
    login_prompt = 'Please log in'
    login_title = 'Login'
    login_username = 'Username'

    // Modal
    modal_add_bad_weight = 'The weight should be greater than 0'
    modal_add_check_fields_budget = 'Invalid fields = check you filled every fields and budget is greater than 0'
    modal_add_check_fields_quantity = 'Invalid fields = check you filled every fields and quantity greater than 0'
    modal_add_fail_criteria = 'Failed to create the criteria'
    modal_add_invalid_mail = 'You must define an email'
    modal_add_no_right = 'You must define a right'
    modal_add_no_value = 'You need to enter a value'
    modal_add_title = 'Create a new '
    modal_add_multiple_title = 'Create multiple new'
    modal_check_date = 'Invalid fields = Your start date cannot be older than the end date'
    modal_check_fields = 'Invalid fields = check you filled every field'
    modal_delete_sentence = 'You are about to delete '
    modal_details_title = 'Details of this'
    modal_edit_title = 'Edit this'
    modal_delete_sentence_2 = '. Are you sure? '
    modal_email_is = 'Email is'
    modal_failure = 'Failure'
    modal_leave = 'Leave'
    modal_language_actual = 'Current language '
    modal_leave_sentence = 'Do you really want to leave with unsaved changes?'
    modal_language_title = 'Language'
    modal_no_country = 'You must define a country with that role'
    modal_no_password = 'You must define a password'
    modal_not_enough_strong = 'The password is not strong enough... Minimum required = 8 characters, 1 lowercase, 1 uppercase, 1 numeric'
    modal_no_project = 'You must define at least a project with that role'
    modal_password_required = 'You must define a password'
    modal_pending_requests = 'Pending Requests'
    modal_project_name_characters_limit = 'do not exceed'
    modal_required = 'required'
    modal_save_language_as_default = 'Set this as my default language'
    modal_success = 'Success'
    modal_valid_email = 'Please enter a valid email address'
    modal_values_format_error = 'If you want to set individual values, type numeric values separated by commas (max 5)'
    modal_warning_pending_requests_1 = 'Find the requests you created during your offline time below, you can send those you want to apply to modify the database.'
    modal_warning_pending_requests_2 = 'WARNING = Requests linked to an item you created offline will fail !'
    modal_no_file = 'No file chosen'

    // Model
    model_beneficiaries_dependents = 'Members'
    model_beneficiaries_nationalids = 'ID Number'
    model_beneficiaries_phone_no = 'Phone No. '
    model_beneficiaries_status = 'Status'
    model_booklet = 'Booklet'
    model_booklet_password_pattern = 'The password must be four digits'
    model_code = 'Code'
    model_commodity = 'Commodity'
    model_commodity_kgs = 'Kgs'
    model_commodity_kit = 'Kit'
    model_commodity_modality = 'Modality'
    model_commodity_unit = 'Unit'
    model_commodity_value = 'Quantity'
    model_countryIso3 = 'Country'
    model_country_specific = 'Country specific option'
    model_country_specific_field = 'Field'
    model_criteria = 'Criteria'
    model_criteria_operator = 'Condition'
    model_criteria_weight = 'Score weight'
    model_currency = 'Currency'
    model_dateofbirth = 'Date of birth'
    model_deactivated = 'Deactivated'
    model_define_password = 'Define a password'
    model_update_password = 'Update the password'
    model_distributed = 'Distributed'
    model_distribution_beneficiary = 'Beneficiary\'s distribution'
    model_distribution_date = 'Date of Distribution'
    model_distribution_name = 'Name'
    model_distribution_type = 'Target'
    model_donor = 'Donor'
    model_donor_fullname = 'Donor\'s name'
    model_donor_shortname = 'Shortname'
    model_familyName = 'Family name'
    model_firstName = 'First name'
    model_individual_to_all = 'Set vouchers value individually'
    model_individual_value = 'Individual value'
    model_notes = 'Notes'
    model_product_name = 'Name'
    model_product_unit = 'Unit'
    model_product_image = 'Image'
    model_number_booklets = 'Quantity of booklets'
    model_number_vouchers = 'Quantity of vouchers'
    model_project_donors_name = 'Donors'
    model_project_end_date = 'End Date'
    model_project_name = 'Project\'s name'
    model_project_number_of_households = 'Number of Households'
    model_project_start_date = 'Start Date'
    model_project_value = 'Total Target Beneficiaries'
    model_residencystatus = 'Residency status'
    model_sector = 'Sector'
    model_sectors_name = 'Sectors'
    model_transaction_message = 'Message'
    model_transaction_pickupDate = 'Pick up date'
    model_state = 'Status'
    model_type = 'Type'
    model_type_shop = 'Description'
    model_unassigned = 'Unassigned'
    model_used = 'Used'
    model_user = 'User'
    model_password = 'Password'
    model_value = 'Value'
    model_vendors_address = 'Address'
    model_vendor = 'Vendor'
    model_vulnerabilities = 'Vulnerabilities'

    // Null values
    null_none = 'none'
    null_not_yet = 'not yet'
    null_not_distributed = 'not distributed'
    null_not_yet_defined = 'not yet defined'

    // Number suffixes
    number_suffix_first = 'st'
    number_suffix_second = 'nd'
    number_suffix_third = 'rd'
    number_suffix_other = 'th'

    // Phone
    phone_type_landline = 'Landline'
    phone_type_mobile = 'Mobile'

    // Placeholder
    placeholder_one_many = 'Select one or many'

    // Profile
    profile_user_change_password = 'Change password'
    profile_user_hint_new_password = 'New password'
    profile_user_hint_new_password_again = 'Re-enter new password'
    profile_user_hint_old_password = 'Old password'
    profile_user_information = 'User information'
    profile_password_would_not_be_changed = 'The two passwords are identical, ignoring update.'

    // Project
    project_add = 'Please add some projects first! Then you will be able to manage some distributions...'
    project_add_household = 'Please add some beneficiaries first! Then you will be able to manage some distributions...'
    project_click = 'Click on'
    project_create = 'Create a new project'
    project_description = 'You will be able to modify project\'s name until your first distribution.'
    project_go_import_beneficiaries = 'Import Beneficiaries'
    project_no_distribution = 'This project does not contain any distributions. Create your first one !'
    project_no_household = 'This project does not contain any households.'
    project_no_projects = 'This country does not contain any project.'

    // Report
    report_apply = 'apply'
    report_country = 'country'
    report_country_report = 'country report'
    report_distribution_report = 'distribution report'
    report_filter_chose_periode = 'choose period'
    report_filter_per_month = 'per month'
    report_filter_per_quarter = 'per quarter'
    report_filter_per_year = 'per year'
    report_frequency_month = 'Month'
    report_frequency_quarter = 'Quarter'
    report_frequency_year = 'Year'
    report_from = 'from'
    report_loader = 'Loader'
    report_period_selected = 'Period selected'
    report_project = 'project'
    report_project_report = 'project report'
    report_select_frequency = 'Select frequency'
    report_to = 'to'
    report_upcoming_reporting = 'Upcoming reporting'

    // Beneficiary residency status
    residency_resident = 'Resident'
    residency_refugee = 'Refugee'
    residency_idp = 'IDP'

    // Sectors tooltips
    sector_cccm = 'Camp coordination and management'
    sector_recovery = 'Early recovery'
    sector_education = 'Education'
    sector_telecom = 'Emergency telecommunications'
    sector_food = 'Food security'
    sector_health = 'Health'
    sector_logistics = 'Logistics'
    sector_nutrition = 'Nutrition'
    sector_protection = 'Protection'
    sector_shelter = 'Shelter'
    sector_water = 'Water sanitation'

    // Settings
    settings_country_specific_options = 'country specific options'
    settings_created = ' created'
    settings_donors = 'donors'
    settings_financial_provider = 'Third party connections'
    settings_log_button = 'Get user logs by email'
    settings_product = 'Products'
    settings_project_exists = 'A project with this name already exists'
    settings_users = 'users'
    settings_vendors = 'vendors'

    // Snackbar
    snackbar_change_password_done = 'Password has been changed!'
    snackbar_change_password_fail = 'Could not change password...'
    snackbar_change_password_not_possible = 'Password must be longer than 1 character and match with verification'
    snackbar_invalid_transaction_date = 'The transaction\'s deadline is over.'
    snackbar_pickup_error = 'It is currently impossible to check the pickup status'

    // Table
    table_actions = 'Actions'
    table_element_deleted = ' deleted'
    table_element_updated = ' updated'
    table_filter = 'Search by keyword'
    table_first_page = 'First page'
    table_items_per_page = 'Items per page'
    table_last_page = 'Last page'
    table_next_page = 'Next page'
    table_of_page = 'of'
    table_previous_page = 'Previous page'

    // Transaction
    transaction_accept_prevention = 'I agree to these terms.'
    transaction_again = 'Send again'
    transaction_amount_distributed = 'Amount distributed'
    transaction_amount_done = 'Amount sent'
    transaction_amount_total = 'Total amount'
    transaction_amount_used = 'Amount used'
    transaction_amount_waiting = 'Amount picked up'
    transaction_confirm = 'Confirm the transaction'
    transaction_confirm_button = 'Confirm'
    transaction_email_code = 'An email containing your validation code has been sent to:'
    transaction_id_transaction = 'ID Transaction'
    transaction_info_export = 'If the distribution doesn\'t have any transactions, no file will be exported'
    transaction_inProgress = 'Transaction in progress...'
    transaction_paste_code = 'Please paste the code here and click on \'Confirm\' to proceed with the transaction '
    transaction_prevention = 'This platform is still under development and the online cash transaction functionality may not be fully stable yet. The development team denies responsibility for any errors that may occur in terms of money loss. By ticking the box below, you agree to use the system knowing fully well its limitations and take responsibility for the results of the transaction.'
    transaction_progress = 'commodity distribution progress:'
    transaction_refresh = 'Check pickup status'
    transaction_state_not_sent = 'Not sent'
    transaction_state_no_phone = 'No phone'
    transaction_state_sending_failed = 'Sending failed'
    transaction_state_sent = 'Sent' // Means sent during the current transaction (after loading the page)
    transaction_state_already_sent = 'Sent' // Means sent during a previous transaction (before loading the page)
    transaction_state_picked_up = 'Picked up'
    transaction_transaction = 'Start transaction'
    transaction_validate_distribution = 'Do you really want to validate this distribution ? You won\'t be able to modify it anymore.'
    transaction_validation = 'Confirm the validation'
    transaction_no_transaction_sent = 'No completed transaction, cannot export'

    // Tooltip
    tooltip_add_beneficiaries = 'This page is the add beneficiaries\' page. This is a form to add a new household with required fields.'
    tooltip_add_distribution = 'This page is the add distribution\'s page. This is a form to add a new distribution with required fields. You will select households or beneficiaries by sorting them by a selection criteria and add a specific amount of commodities to the distribution.'
    tooltip_beneficiaries = 'This page is the beneficiaries\' page. You can see all households of the country. If you have the right, you can add new households with the "+" button, manage households and research in the list.'
    tooltip_dashboard = 'This page is the dashboard. You have a global view on some numbers about the country and its projects. You have access to a map with distributions of the country and summary of last distributions.'
    tooltip_data = 'This page is the post import beneficiaries\' page. This is a summary of households you have imported.'
    tooltip_data_validation = 'This page is the import beneficiaries\' page using a file. You have to verify your file by following the steps.'
    tooltip_distributions = 'This page is the distribution\'s page. You can see all households of the distribution. If you have the right, you can add new households with a file or by selecting in the list, manage households and validate the distribution to a transaction.'
    tooltip_import = 'This page is the import beneficiaries\' page. You can choose to import new households using a file or the API (the external data source) to import all the household of a specific commune.'
    tooltip_profile = 'This page is the profile\'s page. You can change your password.'
    tooltip_projects = 'This page is the projects\' page. You can see all projects of the country (only thoses that you have the right to see). If you have the right, you can add a new distribution with households whose are in the project, manage distributions and transactions.'
    tooltip_reports = 'This page is the reports\' page. This page is used to see statistics of the country, like the average transactions of a projects, number of distributions...'
    tooltip_settings = 'This page is the settings\' page. In this page, you\'ll be able to add a new user, new country specifics, new donors, a new project and change the credential for the transaction.'
    tooltip_update_beneficiary = 'This page is the update beneficiaries\' page. This is a form to update the selected household with required fields.'

    // Update beneficiary
    update_beneficiary_check_steps = 'Required data incomplete or unvalid = please check all steps'
    update_beneficiary_created_successfully = 'Created successfuly !'
    update_beneficiary_error_creating = 'Error while creating = '
    update_beneficiary_error_updated = 'Error while updating = '
    update_beneficiary_title = 'Update Beneficiary'
    update_beneficiary_updated_successfully = 'Updated successfuly !'

    //Vouchers
    voucher_ask_code = 'Please ask beneficiary to enter his 4 digits code here'
    voucher_assign = 'Assign vouchers'
    voucher_assign_title = 'Assign booklet to a beneficiary'
    voucher_assigned_success = 'The booklet has been assigned to '
    voucher_confirm = 'Booklet assigned to'
    voucher_created = 'The booklet has been created.'
    voucher_define_password = 'Define password for booklet'
    voucher_for = 'for'
    voucher_no_device = 'There is no device detected'
    voucher_no_permission = 'You have denied access to the camera'
    voucher_only_digits = 'Your password must be only 4 digits'
    voucher_password_changed = 'Your password has been changed'
    voucher_scan_text = 'Scan booklet QR code'
    voucher_select_project = 'You have to select a project'
    voucher_select_distribution = 'You have to select a distribution'
    voucher_select_beneficiary = 'You have to select a beneficiary'
    voucher_step5 = 'will be assigned to'
    voucher_print_selection = 'Print selection'
    voucher_print_error = 'You can\'t print a booklet if it has no beneficiary'
    voucher_print_starting = 'Your voucher download is starting'

    // Vulnerability
    vulnerability_pregnant = 'pregnant'
    vulnerability_disabled = 'disabled'
    vulnerability_lactating = 'lactating'
    vulnerability_solo_parent = 'solo parent'
    vulnerability_nutrional = 'nutritional issues'

    // User
    user_only_one_country = 'You can select only one country'

  };
