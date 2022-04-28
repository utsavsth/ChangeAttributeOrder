"use strict";
var BPA = BPA || {};

BPA.Report = (function (){


let _reportField = {
  Office: [
    {
      ReportField: "Office",
      ElementId: "",
      ElementLabel: "",
      FormLabel: "Stage testing",
      FormId: "f4848956-a8ac-4011-8714-065e9811af53",
      FormSection: [
        {
          id: "section_637ca8e2-d068-4969-8b00-ec769aa6ea0c",
          index: 0,
          label: "Personal Form Section",
          value: "section_637ca8e2-d068-4969-8b00-ec769aa6ea0c",
          options: [
            {
              label: "Name",
              value: "textinput_1df92b61-8a7d-4b01-869f-c291cde567ff",
              id: "textinput_1df92b61-8a7d-4b01-869f-c291cde567ff"
            },
            {
              label: "Address",
              value: "textinput_b224d976-af0a-4628-9a33-18efc35dd9cc",
              id: "textinput_b224d976-af0a-4628-9a33-18efc35dd9cc"
            },
            {
              label: "Suburb",
              value: "textinput_0941e2ba-891e-46f4-a654-0adbb20bbcfc",
              id: "textinput_0941e2ba-891e-46f4-a654-0adbb20bbcfc"
            },
            {
              label: "Postcode",
              value: "textinput_306bf5d5-2647-4705-8a88-d6a265de12f7",
              id: "textinput_306bf5d5-2647-4705-8a88-d6a265de12f7"
            },
            {
              label: "File Upload",
              value: "fileupload_a89f379b-a3bc-408a-919f-8a744c161169",
              id: "fileupload_a89f379b-a3bc-408a-919f-8a744c161169"
            },
            {
              label: "Approver",
              value: "peoplepicker_b1ffa152-a7da-4946-b061-97c5a2cbd075",
              id: "peoplepicker_b1ffa152-a7da-4946-b061-97c5a2cbd075"
            },
            {
              label: "Applied Date",
              value: "datepicker_f66e5f3e-6bbd-40e1-ae2d-c3d43fee4aeb",
              id: "datepicker_f66e5f3e-6bbd-40e1-ae2d-c3d43fee4aeb"
            }
          ]
        },
        {
          id: "section_e10bfd97-52cf-48e6-abe5-e09ffa765d8a",
          index: 1,
          label: "Approve Section",
          value: "section_e10bfd97-52cf-48e6-abe5-e09ffa765d8a",
          options: [
            {
              label: "Approved Date",
              value: "datepicker_cc150b6f-875b-47ab-bc6e-11955c13bf31",
              id: "datepicker_cc150b6f-875b-47ab-bc6e-11955c13bf31"
            },
            {
              label: "Approved By",
              value: "peoplepicker_d06ff464-17a4-468b-945f-d99d16600b3e",
              id: "peoplepicker_d06ff464-17a4-468b-945f-d99d16600b3e"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Office",
      ElementId: "",
      ElementLabel: "",
      FormLabel: "IT Form",
      FormId: "e57896f3-3f26-4b75-8cb7-89fbb1c1f548",
      FormSection: [
        {
          id: "section_73900243-5803-4077-8d08-1321c5747061",
          index: 0,
          label: "Request Details",
          value: "section_73900243-5803-4077-8d08-1321c5747061",
          options: [
            {
              label: "Name from Textbox",
              value: "textinput_2ef7fb46-d6ba-4973-8b4d-5851c00eb1d5",
              id: "textinput_2ef7fb46-d6ba-4973-8b4d-5851c00eb1d5"
            },
            {
              label: "Name from Peoplepicker",
              value: "textinput_a76e57c6-dc39-48c7-9a24-3f477647c591",
              id: "textinput_a76e57c6-dc39-48c7-9a24-3f477647c591"
            },
            {
              label: "Device Required",
              value: "yesno_33bd779f-03d7-4a39-a73c-f2a2cbb6192f",
              id: "yesno_33bd779f-03d7-4a39-a73c-f2a2cbb6192f"
            },
            {
              label: "Devices",
              value: "checkboxes_20e67b3c-ded8-4462-8f85-df132d6635cb",
              id: "checkboxes_20e67b3c-ded8-4462-8f85-df132d6635cb"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Office",
      ElementId: "textinput_23c2ef5b-c29f-4856-9dcf-0009968c9e4b",
      ElementLabel: "Text Input",
      FormLabel: "Parallel Stage Testing",
      FormId: "dcb066f3-28df-4d19-befc-fd18c0eec15b",
      FormSection: [
        {
          id: "section_15750fea-6b87-49da-b6a7-43d60611fc74",
          index: 0,
          label: "All Controls",
          value: "section_15750fea-6b87-49da-b6a7-43d60611fc74",
          options: [
            {
              label: "My Detail",
              value: "textinput_0a318580-db1b-40a6-a35f-ecb47ad9ccdb",
              id: "textinput_0a318580-db1b-40a6-a35f-ecb47ad9ccdb"
            },
            {
              label: "People Picker",
              value: "peoplepicker_fa65c036-44ff-4080-b9aa-9a8ed57774c7",
              id: "peoplepicker_fa65c036-44ff-4080-b9aa-9a8ed57774c7"
            },
            {
              label: "Dropdown",
              value: "dropdown_261e9e86-02b6-4f05-9e62-d741c98fb713",
              id: "dropdown_261e9e86-02b6-4f05-9e62-d741c98fb713"
            },
            {
              label: "Currency Input",
              value: "currencyinput_2a906ac1-24cd-43e6-9f3d-27b2f52a7a61",
              id: "currencyinput_2a906ac1-24cd-43e6-9f3d-27b2f52a7a61"
            },
            {
              label: "Yes/No Input",
              value: "yesno_a4be9395-1caf-4c1c-a835-7c7c3e1b90a2",
              id: "yesno_a4be9395-1caf-4c1c-a835-7c7c3e1b90a2"
            },
            {
              label: "Radio Buttons",
              value: "RadioButtons_6aa7b230-0d83-4b69-9fd5-e9461d6c77c5",
              id: "RadioButtons_6aa7b230-0d83-4b69-9fd5-e9461d6c77c5"
            },
            {
              label: "Checkboxes",
              value: "checkboxes_07bc9cbb-fb83-41f2-99a5-b2e84f375eaf",
              id: "checkboxes_07bc9cbb-fb83-41f2-99a5-b2e84f375eaf"
            }
          ]
        },
        {
          id: "section_f3c6750d-8c35-4585-ba94-4299c63eb9de",
          index: 1,
          label: "IT",
          value: "section_f3c6750d-8c35-4585-ba94-4299c63eb9de",
          options: [
            {
              label: "IT Input Field",
              value: "textinput_812d58c3-3bdb-444c-8645-ac6a76537b7b",
              id: "textinput_812d58c3-3bdb-444c-8645-ac6a76537b7b"
            }
          ]
        },
        {
          id: "section_fa4b63f5-753d-4a35-ae5d-d65270817a4f",
          index: 2,
          label: "Finance",
          value: "section_fa4b63f5-753d-4a35-ae5d-d65270817a4f",
          options: [
            {
              label: "Finance Input Field",
              value: "textinput_4415ddc2-10cf-438d-b332-e71fc9b7ece4",
              id: "textinput_4415ddc2-10cf-438d-b332-e71fc9b7ece4"
            }
          ]
        },
        {
          id: "section_b11f5e92-5d79-4d70-a1bf-8b486e59f65f",
          index: 3,
          label: "HR",
          value: "section_b11f5e92-5d79-4d70-a1bf-8b486e59f65f",
          options: [
            {
              label: "Text Input",
              value: "textinput_808cd003-aa49-4de0-8ac6-c8f41ca72cb6",
              id: "textinput_808cd003-aa49-4de0-8ac6-c8f41ca72cb6"
            }
          ]
        },
        {
          id: "section_4499274a-30da-4d2e-b1d6-0c86222c3152",
          index: 4,
          label: "CFO",
          value: "section_4499274a-30da-4d2e-b1d6-0c86222c3152",
          options: [
            {
              label: "Text Input",
              value: "textinput_23c2ef5b-c29f-4856-9dcf-0009968c9e4b",
              id: "textinput_23c2ef5b-c29f-4856-9dcf-0009968c9e4b"
            }
          ]
        },
        {
          id: "section_334b4174-e417-438a-b738-2b948237f630",
          index: 5,
          label: "CEO",
          value: "section_334b4174-e417-438a-b738-2b948237f630",
          options: [
            {
              label: "Text Input",
              value: "textinput_38bd3d63-bf6c-41aa-b503-a1a6ca1eb996",
              id: "textinput_38bd3d63-bf6c-41aa-b503-a1a6ca1eb996"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Office",
      ElementId: "",
      ElementLabel: "",
      FormLabel: "poputating submission answers",
      FormId: "9eb55a3b-b4ee-4c2a-83f9-00b3c702ba47",
      FormSection: [
        {
          id: "section_c3fef25f-1398-46f4-891d-03468e70e4c4",
          index: 0,
          label: "Section",
          value: "section_c3fef25f-1398-46f4-891d-03468e70e4c4",
          options: [
            {
              label: "question",
              value: "textinput_b8fd7393-3e96-43cd-92ad-b568eca81fe8",
              id: "textinput_b8fd7393-3e96-43cd-92ad-b568eca81fe8"
            },
            {
              label: "Import Answers",
              value: "importanswers_1850cc21-c85b-4e5b-9ba2-fbcf2aab1536",
              id: "importanswers_1850cc21-c85b-4e5b-9ba2-fbcf2aab1536"
            },
            {
              label: "Lookup with filter",
              value: "listlookup_e090e5dc-d9db-4b63-b5e4-4c1141d40878",
              id: "listlookup_e090e5dc-d9db-4b63-b5e4-4c1141d40878"
            },
            {
              label: "Lookup without filter",
              value: "listlookup_25bff521-4bd4-4c08-96dc-dce4fe60b887",
              id: "listlookup_25bff521-4bd4-4c08-96dc-dce4fe60b887"
            }
          ]
        }
      ]
    }
  ],
  Name: [
    {
      ReportField: "Name",
      ElementId: "textinput_b224d976-af0a-4628-9a33-18efc35dd9cc",
      ElementLabel: "Address",
      FormLabel: "Stage testing",
      FormId: "f4848956-a8ac-4011-8714-065e9811af53",
      FormSection: [
        {
          id: "section_637ca8e2-d068-4969-8b00-ec769aa6ea0c",
          index: 0,
          label: "Personal Form Section",
          value: "section_637ca8e2-d068-4969-8b00-ec769aa6ea0c",
          options: [
            {
              label: "Name",
              value: "textinput_1df92b61-8a7d-4b01-869f-c291cde567ff",
              id: "textinput_1df92b61-8a7d-4b01-869f-c291cde567ff"
            },
            {
              label: "Address",
              value: "textinput_b224d976-af0a-4628-9a33-18efc35dd9cc",
              id: "textinput_b224d976-af0a-4628-9a33-18efc35dd9cc"
            },
            {
              label: "Suburb",
              value: "textinput_0941e2ba-891e-46f4-a654-0adbb20bbcfc",
              id: "textinput_0941e2ba-891e-46f4-a654-0adbb20bbcfc"
            },
            {
              label: "Postcode",
              value: "textinput_306bf5d5-2647-4705-8a88-d6a265de12f7",
              id: "textinput_306bf5d5-2647-4705-8a88-d6a265de12f7"
            },
            {
              label: "File Upload",
              value: "fileupload_a89f379b-a3bc-408a-919f-8a744c161169",
              id: "fileupload_a89f379b-a3bc-408a-919f-8a744c161169"
            },
            {
              label: "Approver",
              value: "peoplepicker_b1ffa152-a7da-4946-b061-97c5a2cbd075",
              id: "peoplepicker_b1ffa152-a7da-4946-b061-97c5a2cbd075"
            },
            {
              label: "Applied Date",
              value: "datepicker_f66e5f3e-6bbd-40e1-ae2d-c3d43fee4aeb",
              id: "datepicker_f66e5f3e-6bbd-40e1-ae2d-c3d43fee4aeb"
            }
          ]
        },
        {
          id: "section_e10bfd97-52cf-48e6-abe5-e09ffa765d8a",
          index: 1,
          label: "Approve Section",
          value: "section_e10bfd97-52cf-48e6-abe5-e09ffa765d8a",
          options: [
            {
              label: "Approved Date",
              value: "datepicker_cc150b6f-875b-47ab-bc6e-11955c13bf31",
              id: "datepicker_cc150b6f-875b-47ab-bc6e-11955c13bf31"
            },
            {
              label: "Approved By",
              value: "peoplepicker_d06ff464-17a4-468b-945f-d99d16600b3e",
              id: "peoplepicker_d06ff464-17a4-468b-945f-d99d16600b3e"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Name",
      ElementId: "yesno_33bd779f-03d7-4a39-a73c-f2a2cbb6192f",
      ElementLabel: "Device Required",
      FormLabel: "IT Form",
      FormId: "e57896f3-3f26-4b75-8cb7-89fbb1c1f548",
      FormSection: [
        {
          id: "section_73900243-5803-4077-8d08-1321c5747061",
          index: 0,
          label: "Request Details",
          value: "section_73900243-5803-4077-8d08-1321c5747061",
          options: [
            {
              label: "Name from Textbox",
              value: "textinput_2ef7fb46-d6ba-4973-8b4d-5851c00eb1d5",
              id: "textinput_2ef7fb46-d6ba-4973-8b4d-5851c00eb1d5"
            },
            {
              label: "Name from Peoplepicker",
              value: "textinput_a76e57c6-dc39-48c7-9a24-3f477647c591",
              id: "textinput_a76e57c6-dc39-48c7-9a24-3f477647c591"
            },
            {
              label: "Device Required",
              value: "yesno_33bd779f-03d7-4a39-a73c-f2a2cbb6192f",
              id: "yesno_33bd779f-03d7-4a39-a73c-f2a2cbb6192f"
            },
            {
              label: "Devices",
              value: "checkboxes_20e67b3c-ded8-4462-8f85-df132d6635cb",
              id: "checkboxes_20e67b3c-ded8-4462-8f85-df132d6635cb"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Name",
      ElementId: "",
      ElementLabel: "",
      FormLabel: "Parallel Stage Testing",
      FormId: "dcb066f3-28df-4d19-befc-fd18c0eec15b",
      FormSection: [
        {
          id: "section_15750fea-6b87-49da-b6a7-43d60611fc74",
          index: 0,
          label: "All Controls",
          value: "section_15750fea-6b87-49da-b6a7-43d60611fc74",
          options: [
            {
              label: "My Detail",
              value: "textinput_0a318580-db1b-40a6-a35f-ecb47ad9ccdb",
              id: "textinput_0a318580-db1b-40a6-a35f-ecb47ad9ccdb"
            },
            {
              label: "People Picker",
              value: "peoplepicker_fa65c036-44ff-4080-b9aa-9a8ed57774c7",
              id: "peoplepicker_fa65c036-44ff-4080-b9aa-9a8ed57774c7"
            },
            {
              label: "Dropdown",
              value: "dropdown_261e9e86-02b6-4f05-9e62-d741c98fb713",
              id: "dropdown_261e9e86-02b6-4f05-9e62-d741c98fb713"
            },
            {
              label: "Currency Input",
              value: "currencyinput_2a906ac1-24cd-43e6-9f3d-27b2f52a7a61",
              id: "currencyinput_2a906ac1-24cd-43e6-9f3d-27b2f52a7a61"
            },
            {
              label: "Yes/No Input",
              value: "yesno_a4be9395-1caf-4c1c-a835-7c7c3e1b90a2",
              id: "yesno_a4be9395-1caf-4c1c-a835-7c7c3e1b90a2"
            },
            {
              label: "Radio Buttons",
              value: "RadioButtons_6aa7b230-0d83-4b69-9fd5-e9461d6c77c5",
              id: "RadioButtons_6aa7b230-0d83-4b69-9fd5-e9461d6c77c5"
            },
            {
              label: "Checkboxes",
              value: "checkboxes_07bc9cbb-fb83-41f2-99a5-b2e84f375eaf",
              id: "checkboxes_07bc9cbb-fb83-41f2-99a5-b2e84f375eaf"
            }
          ]
        },
        {
          id: "section_f3c6750d-8c35-4585-ba94-4299c63eb9de",
          index: 1,
          label: "IT",
          value: "section_f3c6750d-8c35-4585-ba94-4299c63eb9de",
          options: [
            {
              label: "IT Input Field",
              value: "textinput_812d58c3-3bdb-444c-8645-ac6a76537b7b",
              id: "textinput_812d58c3-3bdb-444c-8645-ac6a76537b7b"
            }
          ]
        },
        {
          id: "section_fa4b63f5-753d-4a35-ae5d-d65270817a4f",
          index: 2,
          label: "Finance",
          value: "section_fa4b63f5-753d-4a35-ae5d-d65270817a4f",
          options: [
            {
              label: "Finance Input Field",
              value: "textinput_4415ddc2-10cf-438d-b332-e71fc9b7ece4",
              id: "textinput_4415ddc2-10cf-438d-b332-e71fc9b7ece4"
            }
          ]
        },
        {
          id: "section_b11f5e92-5d79-4d70-a1bf-8b486e59f65f",
          index: 3,
          label: "HR",
          value: "section_b11f5e92-5d79-4d70-a1bf-8b486e59f65f",
          options: [
            {
              label: "Text Input",
              value: "textinput_808cd003-aa49-4de0-8ac6-c8f41ca72cb6",
              id: "textinput_808cd003-aa49-4de0-8ac6-c8f41ca72cb6"
            }
          ]
        },
        {
          id: "section_4499274a-30da-4d2e-b1d6-0c86222c3152",
          index: 4,
          label: "CFO",
          value: "section_4499274a-30da-4d2e-b1d6-0c86222c3152",
          options: [
            {
              label: "Text Input",
              value: "textinput_23c2ef5b-c29f-4856-9dcf-0009968c9e4b",
              id: "textinput_23c2ef5b-c29f-4856-9dcf-0009968c9e4b"
            }
          ]
        },
        {
          id: "section_334b4174-e417-438a-b738-2b948237f630",
          index: 5,
          label: "CEO",
          value: "section_334b4174-e417-438a-b738-2b948237f630",
          options: [
            {
              label: "Text Input",
              value: "textinput_38bd3d63-bf6c-41aa-b503-a1a6ca1eb996",
              id: "textinput_38bd3d63-bf6c-41aa-b503-a1a6ca1eb996"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Name",
      ElementId: "textinput_b8fd7393-3e96-43cd-92ad-b568eca81fe8",
      ElementLabel: "question",
      FormLabel: "poputating submission answers",
      FormId: "9eb55a3b-b4ee-4c2a-83f9-00b3c702ba47",
      FormSection: [
        {
          id: "section_c3fef25f-1398-46f4-891d-03468e70e4c4",
          index: 0,
          label: "Section",
          value: "section_c3fef25f-1398-46f4-891d-03468e70e4c4",
          options: [
            {
              label: "question",
              value: "textinput_b8fd7393-3e96-43cd-92ad-b568eca81fe8",
              id: "textinput_b8fd7393-3e96-43cd-92ad-b568eca81fe8"
            },
            {
              label: "Import Answers",
              value: "importanswers_1850cc21-c85b-4e5b-9ba2-fbcf2aab1536",
              id: "importanswers_1850cc21-c85b-4e5b-9ba2-fbcf2aab1536"
            },
            {
              label: "Lookup with filter",
              value: "listlookup_e090e5dc-d9db-4b63-b5e4-4c1141d40878",
              id: "listlookup_e090e5dc-d9db-4b63-b5e4-4c1141d40878"
            },
            {
              label: "Lookup without filter",
              value: "listlookup_25bff521-4bd4-4c08-96dc-dce4fe60b887",
              id: "listlookup_25bff521-4bd4-4c08-96dc-dce4fe60b887"
            }
          ]
        }
      ]
    }
  ],
  Address: [
    {
      ReportField: "Address",
      ElementId: "textinput_0941e2ba-891e-46f4-a654-0adbb20bbcfc",
      ElementLabel: "Suburb",
      FormLabel: "Stage testing",
      FormId: "f4848956-a8ac-4011-8714-065e9811af53",
      FormSection: [
        {
          id: "section_637ca8e2-d068-4969-8b00-ec769aa6ea0c",
          index: 0,
          label: "Personal Form Section",
          value: "section_637ca8e2-d068-4969-8b00-ec769aa6ea0c",
          options: [
            {
              label: "Name",
              value: "textinput_1df92b61-8a7d-4b01-869f-c291cde567ff",
              id: "textinput_1df92b61-8a7d-4b01-869f-c291cde567ff"
            },
            {
              label: "Address",
              value: "textinput_b224d976-af0a-4628-9a33-18efc35dd9cc",
              id: "textinput_b224d976-af0a-4628-9a33-18efc35dd9cc"
            },
            {
              label: "Suburb",
              value: "textinput_0941e2ba-891e-46f4-a654-0adbb20bbcfc",
              id: "textinput_0941e2ba-891e-46f4-a654-0adbb20bbcfc"
            },
            {
              label: "Postcode",
              value: "textinput_306bf5d5-2647-4705-8a88-d6a265de12f7",
              id: "textinput_306bf5d5-2647-4705-8a88-d6a265de12f7"
            },
            {
              label: "File Upload",
              value: "fileupload_a89f379b-a3bc-408a-919f-8a744c161169",
              id: "fileupload_a89f379b-a3bc-408a-919f-8a744c161169"
            },
            {
              label: "Approver",
              value: "peoplepicker_b1ffa152-a7da-4946-b061-97c5a2cbd075",
              id: "peoplepicker_b1ffa152-a7da-4946-b061-97c5a2cbd075"
            },
            {
              label: "Applied Date",
              value: "datepicker_f66e5f3e-6bbd-40e1-ae2d-c3d43fee4aeb",
              id: "datepicker_f66e5f3e-6bbd-40e1-ae2d-c3d43fee4aeb"
            }
          ]
        },
        {
          id: "section_e10bfd97-52cf-48e6-abe5-e09ffa765d8a",
          index: 1,
          label: "Approve Section",
          value: "section_e10bfd97-52cf-48e6-abe5-e09ffa765d8a",
          options: [
            {
              label: "Approved Date",
              value: "datepicker_cc150b6f-875b-47ab-bc6e-11955c13bf31",
              id: "datepicker_cc150b6f-875b-47ab-bc6e-11955c13bf31"
            },
            {
              label: "Approved By",
              value: "peoplepicker_d06ff464-17a4-468b-945f-d99d16600b3e",
              id: "peoplepicker_d06ff464-17a4-468b-945f-d99d16600b3e"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Address",
      ElementId: "",
      ElementLabel: "",
      FormLabel: "IT Form",
      FormId: "e57896f3-3f26-4b75-8cb7-89fbb1c1f548",
      FormSection: [
        {
          id: "section_73900243-5803-4077-8d08-1321c5747061",
          index: 0,
          label: "Request Details",
          value: "section_73900243-5803-4077-8d08-1321c5747061",
          options: [
            {
              label: "Name from Textbox",
              value: "textinput_2ef7fb46-d6ba-4973-8b4d-5851c00eb1d5",
              id: "textinput_2ef7fb46-d6ba-4973-8b4d-5851c00eb1d5"
            },
            {
              label: "Name from Peoplepicker",
              value: "textinput_a76e57c6-dc39-48c7-9a24-3f477647c591",
              id: "textinput_a76e57c6-dc39-48c7-9a24-3f477647c591"
            },
            {
              label: "Device Required",
              value: "yesno_33bd779f-03d7-4a39-a73c-f2a2cbb6192f",
              id: "yesno_33bd779f-03d7-4a39-a73c-f2a2cbb6192f"
            },
            {
              label: "Devices",
              value: "checkboxes_20e67b3c-ded8-4462-8f85-df132d6635cb",
              id: "checkboxes_20e67b3c-ded8-4462-8f85-df132d6635cb"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Address",
      ElementId: "",
      ElementLabel: "",
      FormLabel: "Parallel Stage Testing",
      FormId: "dcb066f3-28df-4d19-befc-fd18c0eec15b",
      FormSection: [
        {
          id: "section_15750fea-6b87-49da-b6a7-43d60611fc74",
          index: 0,
          label: "All Controls",
          value: "section_15750fea-6b87-49da-b6a7-43d60611fc74",
          options: [
            {
              label: "My Detail",
              value: "textinput_0a318580-db1b-40a6-a35f-ecb47ad9ccdb",
              id: "textinput_0a318580-db1b-40a6-a35f-ecb47ad9ccdb"
            },
            {
              label: "People Picker",
              value: "peoplepicker_fa65c036-44ff-4080-b9aa-9a8ed57774c7",
              id: "peoplepicker_fa65c036-44ff-4080-b9aa-9a8ed57774c7"
            },
            {
              label: "Dropdown",
              value: "dropdown_261e9e86-02b6-4f05-9e62-d741c98fb713",
              id: "dropdown_261e9e86-02b6-4f05-9e62-d741c98fb713"
            },
            {
              label: "Currency Input",
              value: "currencyinput_2a906ac1-24cd-43e6-9f3d-27b2f52a7a61",
              id: "currencyinput_2a906ac1-24cd-43e6-9f3d-27b2f52a7a61"
            },
            {
              label: "Yes/No Input",
              value: "yesno_a4be9395-1caf-4c1c-a835-7c7c3e1b90a2",
              id: "yesno_a4be9395-1caf-4c1c-a835-7c7c3e1b90a2"
            },
            {
              label: "Radio Buttons",
              value: "RadioButtons_6aa7b230-0d83-4b69-9fd5-e9461d6c77c5",
              id: "RadioButtons_6aa7b230-0d83-4b69-9fd5-e9461d6c77c5"
            },
            {
              label: "Checkboxes",
              value: "checkboxes_07bc9cbb-fb83-41f2-99a5-b2e84f375eaf",
              id: "checkboxes_07bc9cbb-fb83-41f2-99a5-b2e84f375eaf"
            }
          ]
        },
        {
          id: "section_f3c6750d-8c35-4585-ba94-4299c63eb9de",
          index: 1,
          label: "IT",
          value: "section_f3c6750d-8c35-4585-ba94-4299c63eb9de",
          options: [
            {
              label: "IT Input Field",
              value: "textinput_812d58c3-3bdb-444c-8645-ac6a76537b7b",
              id: "textinput_812d58c3-3bdb-444c-8645-ac6a76537b7b"
            }
          ]
        },
        {
          id: "section_fa4b63f5-753d-4a35-ae5d-d65270817a4f",
          index: 2,
          label: "Finance",
          value: "section_fa4b63f5-753d-4a35-ae5d-d65270817a4f",
          options: [
            {
              label: "Finance Input Field",
              value: "textinput_4415ddc2-10cf-438d-b332-e71fc9b7ece4",
              id: "textinput_4415ddc2-10cf-438d-b332-e71fc9b7ece4"
            }
          ]
        },
        {
          id: "section_b11f5e92-5d79-4d70-a1bf-8b486e59f65f",
          index: 3,
          label: "HR",
          value: "section_b11f5e92-5d79-4d70-a1bf-8b486e59f65f",
          options: [
            {
              label: "Text Input",
              value: "textinput_808cd003-aa49-4de0-8ac6-c8f41ca72cb6",
              id: "textinput_808cd003-aa49-4de0-8ac6-c8f41ca72cb6"
            }
          ]
        },
        {
          id: "section_4499274a-30da-4d2e-b1d6-0c86222c3152",
          index: 4,
          label: "CFO",
          value: "section_4499274a-30da-4d2e-b1d6-0c86222c3152",
          options: [
            {
              label: "Text Input",
              value: "textinput_23c2ef5b-c29f-4856-9dcf-0009968c9e4b",
              id: "textinput_23c2ef5b-c29f-4856-9dcf-0009968c9e4b"
            }
          ]
        },
        {
          id: "section_334b4174-e417-438a-b738-2b948237f630",
          index: 5,
          label: "CEO",
          value: "section_334b4174-e417-438a-b738-2b948237f630",
          options: [
            {
              label: "Text Input",
              value: "textinput_38bd3d63-bf6c-41aa-b503-a1a6ca1eb996",
              id: "textinput_38bd3d63-bf6c-41aa-b503-a1a6ca1eb996"
            }
          ]
        }
      ]
    },
    {
      ReportField: "Address",
      ElementId: "",
      ElementLabel: "",
      FormLabel: "poputating submission answers",
      FormId: "9eb55a3b-b4ee-4c2a-83f9-00b3c702ba47",
      FormSection: [
        {
          id: "section_c3fef25f-1398-46f4-891d-03468e70e4c4",
          index: 0,
          label: "Section",
          value: "section_c3fef25f-1398-46f4-891d-03468e70e4c4",
          options: [
            {
              label: "question",
              value: "textinput_b8fd7393-3e96-43cd-92ad-b568eca81fe8",
              id: "textinput_b8fd7393-3e96-43cd-92ad-b568eca81fe8"
            },
            {
              label: "Import Answers",
              value: "importanswers_1850cc21-c85b-4e5b-9ba2-fbcf2aab1536",
              id: "importanswers_1850cc21-c85b-4e5b-9ba2-fbcf2aab1536"
            },
            {
              label: "Lookup with filter",
              value: "listlookup_e090e5dc-d9db-4b63-b5e4-4c1141d40878",
              id: "listlookup_e090e5dc-d9db-4b63-b5e4-4c1141d40878"
            },
            {
              label: "Lookup without filter",
              value: "listlookup_25bff521-4bd4-4c08-96dc-dce4fe60b887",
              id: "listlookup_25bff521-4bd4-4c08-96dc-dce4fe60b887"
            }
          ]
        }
      ]
    }
  ]
};



  let _moveObjectElement = function (currentKey, afterKey, obj) {
    if(obj === undefined){
      obj = _reportField;
    }
    var result = {};
    var val = obj[currentKey];
    delete obj[currentKey];
    var next = -1;
    var i = 0;
    if(typeof afterKey === 'undefined' || afterKey == null) afterKey = '';
    $.each(obj, function(k, v) {
        if((afterKey === '' && i === 0) || next === 1) {
            result[currentKey] = val; 
            next = 0;
        }
        if(k === afterKey) { next = 1; }
        result[k] = v;
        ++i;
    });
    if(next === 1) {
        result[currentKey] = val; 
    }
    if(next !== -1) return result; else return obj;
  };


  let data = {
    "office": [
      {
          "id": "1",
          "name": "sdf"
      },
      {
          "id": "2",
          "name": "dfdf"
      },
      {
          "id": "3",
          "name": "dfgdf"
      }
    ],
    "name": [
      {
        "id": "4",
        "name": "sdfa"
      },
      {
          "id": "5",
          "name": "dfdfa"
      },
      {
          "id": "6",
          "name": "dfgdfa"
      }
    ],
    "age": [
      {
        "id": "7",
        "name": "sdfadas"
      },
      {
          "id": "8",
          "name": "dfdhgfa"
      },
      {
          "id": "9",
          "name": "dfgkjhdfa"
      }
    ]
  }

  
  let _dragAndDropElement = function (from, to){
    //const propertyNames = Object.keys(data);

   // const arr = Object.entries(data);

    console.log('inital', data);
    _buildHtml(data, "initial");
    const fromIndex = from;
    const toIndex = to;

    let output = Object.entries(data)
    .filter(([k, v]) => {
      return true; // some irrelevant conditions here
    })

    const element = output.splice(fromIndex, 1)[0];

    output.splice(toIndex, 0, element);

    output = output.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    console.log('output ->', output);

    _buildHtml(output, "output"); ;
  };

  let _convertArrayToObject = function () {
    console.log('inital', data);

    let output = Object.entries(data)
    .filter(([k, v]) => {
      return true; // some irrelevant conditions here
    })
    output = output.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    console.log('output', output);
  };

  function _buildHtml(data, divId){
    const propertyNames = Object.keys(data);

    var result = document.getElementById(divId);

    propertyNames.forEach((d) => {
      let div = document.createElement("div");
      div.innerHTML = 'Name: ' + d;

      result.appendChild(div);
    });
  }

  return {
    data: data,
    reportField: _reportField,
    moveObjectElement: _moveObjectElement,
    dragAndDropElement: _dragAndDropElement,
    convertArrayToObject: _convertArrayToObject,
    buildHtml: _buildHtml
  };

})();