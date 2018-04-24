import { Injectable } from '@angular/core';


@Injectable()

export class indiaStateService {

    category = [
        {
            code: "Actors wanted",
            parent: '',

        },
        {
            parent: "Actors wanted",
            code: 'Agency Scouts',

        },
        {
            parent: "Actors wanted",
            code: 'Entertainers',

        },
        {
            parent: "Actors wanted",
            code: 'Events & Promotions',

        },
        {
            parent: "Actors wanted",
            code: 'Feature Films',

        },
        {
            parent: "Actors wanted",
            code: 'Music videos',

        },
        {
            parent: "Actors wanted",
            code: 'Presenters',

        },
        {
            parent: "Actors wanted",
            code: 'Short Films',

        },
        {
            parent: "Actors wanted",
            code: 'Theatre & Musicals',

        },
        {
            parent: "Actors wanted",
            code: 'TV commercials',

        },
        {
            parent: "Actors wanted",
            cdoe: 'TV Series',

        },
        {
            parent: "Actors wanted",
            code: 'Voiceover & Radio',

        },
        {
            parent: "Actors wanted",
            code: 'Web',

        },
        {
            parent: "Actors wanted",
            code: 'Other',

        },
        {
            code: "Extras wanted",
            parent: '',

        },
        {
            code: "Agency Scouts",
            parent: 'Extras wanted',

        },
        {
            code: "Feature Films",
            parent: 'Extras wanted',

        },
        {
            code: "Music videos",
            parent: 'Extras wanted',

        }, {
            code: "Short Films",
            parent: 'Extras wanted',

        }, {
            code: "TV commercials",
            parent: 'Extras wanted',

        }, {
            code: "TV Series",
            parent: 'Extras wanted',

        }, {
            code: "Web",
            parent: 'Extras wanted',

        }, {
            code: "Other",
            parent: 'Extras wanted',

        }, {
            code: "Models wanted",
            parent: '',

        }, {
            code: "Catwalk",
            parent: 'Models wanted',

        }, {
            code: "Agency Scouts",
            parent: 'Models wanted',

        }, {
            code: "Competitions & Pageants",
            parent: 'Models wanted',

        }, {
            code: "Events & Promotions",
            parent: 'Models wanted',

        }, {
            code: "Fitting",
            parent: 'Models wanted',

        }, {
            code: "Hair models",
            parent: 'Models wanted',

        }, {
            code: "Music videos",
            parent: 'Models wanted',

        }, {
            code: "Presenters",
            parent: 'Models wanted',

        }, {
            code: "Print",
            parent: 'Models wanted',

        }, {
            code: "TV commercials",
            parent: 'Models wanted',

        },
        {
            code: "TV commercials",
            parent: 'Other',

        },
        {
            code: "Musicians wanted",
            parent: '',

        },
        {
            code: "Bands",
            parent: 'Musicians wanted',

        },
        {
            code: "Bass Guitarists",
            parent: 'Musicians wanted',

        },
        {
            code: "Composers",
            parent: 'Musicians wanted',

        }, {
            code: "DJs",
            parent: 'Musicians wanted',

        }, {
            code: "Drummers",
            parent: 'Musicians wanted',

        }, {
            code: "Guitarists",
            parent: 'Musicians wanted',

        }, {
            code: "Keyboards",
            parent: 'Musicians wanted',

        }, {
            code: "Production",
            parent: 'Musicians wanted',

        },
        {
            code: "Rapper",
            parent: 'Musicians wanted',

        },
        {
            code: "Singers",
            parent: 'Musicians wanted',

        },
        {
            code: "Other",
            parent: 'Musicians wanted',

        },
        {
            code: "Photographers wanted",
            parent: '',

        },
        {
            code: "Photographers wanted",
            parent: 'DONE!',

        },
        {
            code: "TV & Reality",
            parent: '',

        }, {
            code: "Audiences",
            parent: 'TV & Reality',

        }, {
            code: "Documentaries & Factual",
            parent: 'TV & Reality',

        }, {
            code: "Game shows",
            parent: 'TV & Reality',

        }, {
            code: "Reality TV",
            parent: 'TV & Reality',

        }, {
            code: "Dancers wanted",
            parent: '',

        }, {
            code: "Teachers & Choreographers",
            parent: 'Dancers wanted',

        }, {
            code: "Dancers",
            parent: 'Dancers wanted',

        }, {
            code: "Film & Stage Crew wanted",
            parent: '',

        }, {
            code: "Art Department & Costume",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Camera Crew",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Lighting Crew",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Post Production & Editing",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Production Management",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Runners & Assistants",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Sound Crew",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Writing & Directing",
            parent: 'Film & Stage Crew wanted',

        }, {
            code: "Other",
            parent: 'Film & Stage Crew wanted',

        },
        {
            code: "Hair, Makeup & Stylists wanted",
            parent: '',

        },
        {
            code: "Fashion Stylists",
            parent: 'Hair, Makeup & Stylists wanted',

        },
        {
            code: "Hair Stylists",
            parent: 'Hair, Makeup & Stylists wanted',

        },

        {
            code: "Makeup Artists",
            parent: 'Hair, Makeup & Stylists wanted',

        },
        {
            code: "Staff/Temps",
            parent: '',

        },
        {
            code: "Customer Service",
            parent: 'Staff/Temps',

        }, {
            code: "Hospitality",
            parent: 'Staff/Temps',

        }, {
            code: "Marketing",
            parent: 'Staff/Temps',

        }, {
            code: "Office and Admin",
            parent: 'Staff/Temps',

        }, {
            code: "Sales",
            parent: 'Staff/Temps',

        }, {
            code: "Other",
            parent: 'Staff/Temps',

        },


    ];

    STEPS = [
        {
            "code": "AN",
            "name": "Andaman and Nicobar Islands"
        },
        {
            "code": "AP",
            "name": "Andhra Pradesh"
        },
        {
            "code": "AR",
            "name": "Arunachal Pradesh"
        },
        {
            "code": "AS",
            "name": "Assam"
        },
        {
            "code": "BR",
            "name": "Bihar"
        },
        {
            "code": "CG",
            "name": "Chandigarh"
        },
        {
            "code": "CH",
            "name": "Chhattisgarh"
        },
        {
            "code": "DH",
            "name": "Dadra and Nagar Haveli"
        },
        {
            "code": "DD",
            "name": "Daman and Diu"
        },
        {
            "code": "DL",
            "name": "Delhi"
        },
        {
            "code": "GA",
            "name": "Goa"
        },
        {
            "code": "GJ",
            "name": "Gujarat"
        },
        {
            "code": "HR",
            "name": "Haryana"
        },
        {
            "code": "HP",
            "name": "Himachal Pradesh"
        },
        {
            "code": "JK",
            "name": "Jammu and Kashmir"
        },
        {
            "code": "JH",
            "name": "Jharkhand"
        },
        {
            "code": "KA",
            "name": "Karnataka"
        },
        {
            "code": "KL",
            "name": "Kerala"
        },
        {
            "code": "LD",
            "name": "Lakshadweep"
        },
        {
            "code": "MP",
            "name": "Madhya Pradesh"
        },
        {
            "code": "MH",
            "name": "Maharashtra"
        },
        {
            "code": "MN",
            "name": "Manipur"
        },
        {
            "code": "ML",
            "name": "Meghalaya"
        },
        {
            "code": "MZ",
            "name": "Mizoram"
        },
        {
            "code": "NL",
            "name": "Nagaland"
        },
        {
            "code": "OR",
            "name": "Odisha"
        },
        {
            "code": "PY",
            "name": "Puducherry"
        },
        {
            "code": "PB",
            "name": "Punjab"
        },
        {
            "code": "RJ",
            "name": "Rajasthan"
        },
        {
            "code": "SK",
            "name": "Sikkim"
        },
        {
            "code": "TN",
            "name": "Tamil Nadu"
        },
        {
            "code": "TS",
            "name": "Telangana"
        },
        {
            "code": "TR",
            "name": "Tripura"
        },
        {
            "code": "UP",
            "name": "Uttar Pradesh"
        },
        {
            "code": "UK",
            "name": "Uttarakhand"
        },
        {
            "code": "WB",
            "name": "West Bengal"
        }
    ]

}