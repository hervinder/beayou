import { Injectable } from '@angular/core';


@Injectable()

export class physicalAttributeService {
    heights = [
        {
            name: 'Any',


        },
        {
            name: 'Less than 132 cm / 4ft 4in',


        },
        {
            name: "132 cm / 4ft 4in"
        },
        {
            name: "134 cm / 4ft 5in"
        },
        {
            name: "137 cm / 4ft 6in"
        }, {
            name: "139 cm / 4ft 7in"
        }, {
            name: "142 cm / 4ft 8in"
        }, {
            name: "144 cm / 4ft 9in"
        }, {
            name: "147 cm / 4ft 10in"
        }, {
            name: "149 cm / 4ft 11in"
        }, {
            name: "152 cm / 5ft 0in"
        }, {
            name: "154 cm / 5ft 1in"
        }, {
            name: "157 cm / 5ft 2in"
        }, {
            name: "160 cm / 5ft 3in"
        }, {
            name: "162 cm / 5ft 4in"
        }, {
            name: "165 cm / 5ft 5in"
        }, {
            name: "167 cm / 5ft 6in"
        }, {
            name: "170 cm / 5ft 7in"
        },
        {
            name: "172 cm / 5ft 8in"
        }, {
            name: "175 cm / 5ft 9in"
        }, {
            name: "177 cm / 5ft 10in"
        }, {
            name: "180 cm / 5ft 11in"
        }, {
            name: "182 cm / 6ft 0in"
        }, {
            name: "185 cm / 6ft 1in"
        }, {
            name: "187 cm / 6ft 2in"
        }, {
            name: "190 cm / 6ft 3in"
        }, {
            name: "193 cm / 6ft 4in"
        }, {
            name: "195 cm / 6ft 5in"
        }, {
            name: "198 cm / 6ft 6in"
        }, {
            name: "200 cm / 6ft 7in"
        }, {
            name: "203 cm / 6ft 8in"
        }, {
            name: "205 cm / 6ft 9in"
        }, {
            name: "208 cm / 6ft 10in"
        }, {
            name: "over 208 cm / 6ft 10"
        },
    ]

    weight = [
        {
            name: "Any"
        },
        {
            name: "Less than 40 kg / 88 lbs"
        },
        {
            name: "40 kg / 88 lbs"
        }, {
            name: "41 kg / 90 lbs"
        }, {
            name: "42 kg / 92 lbs"
        }, {
            name: "43 kg / 94 lbs"
        }, {
            name: "44 kg / 96 lbs"
        }, {
            name: "45 kg / 99 lbs"
        }, {
            name: "46 kg / 101 lbs"
        }, {
            name: "47 kg / 103 lbs"
        }, {
            name: "48 kg / 105 lbs"
        }, {
            name: "49 kg / 107 lbs"
        }, {
            name: "50 kg / 110 lbs"
        }, {
            name: "51 kg / 112 lbs"
        }, {
            name: "52 kg / 114 lbs"
        }, {
            name: "53 kg / 116 lbs"
        },
        {
            name: "54 kg / 118 lbs"
        },
        {
            name: "55 kg / 121 lbs"
        }, {
            name: "56 kg / 123 lbs"
        },
        {
            name: "57 kg / 125 lbs"
        }, {
            name: "58 kg / 127 lbs"
        },
        {
            name: "59 kg / 129 lbs"
        }, {
            name: "60 kg / 132 lbs"
        },
        {
            name: "61 kg / 134 lbs"
        }, {
            name: "62 kg / 136 lbs"
        },
        {
            name: "63 kg / 138 lbs"
        }, {
            name: "64 kg / 140 lbs"
        },
        {
            name: "65 kg / 143 lbs"
        }, {
            name: "66 kg / 145 lbs"
        },
        {
            name: "67 kg / 147 lbs"
        },
        {
            name: "68 kg / 149 lbs"
        },
        {
            name: "69 kg / 151 lbs"
        },
        {
            name: "70 kg / 154 lbs"
        },
        {
            name: "71 kg / 156 lbs"
        }, {
            name: "72 kg / 158 lbs"
        },
        {
            name: "73 kg / 160 lbs"
        }, {
            name: "74 kg / 162 lbs"
        },
        {
            name: "75 kg / 165 lbs"
        }, {
            name: "76 kg / 167 lbs"
        },
        {
            name: "77 kg / 169 lbs"
        },
        {
            name: "78 kg / 171 lbs"
        }, {
            name: "79 kg / 173 lbs"
        },
        {
            name: "80 kg / 176 lbs"
        }, {
            name: "81 kg / 178 lbs"
        },
        {
            name: "82 kg / 180 lbs"
        },
        {
            name: "83 kg / 182 lbs"
        }, {
            name: "84 kg / 184 lbs "
        },
        {
            name: "85 kg / 187 lbs"
        }, {
            name: "86 kg / 189 lbs"
        },
        {
            name: "87 kg / 191 lbs"
        },
        {
            name: "88 kg / 193 lbs"
        }, {
            name: "89 kg / 195 lbs"
        },
        {
            name: "90 kg / 198 lbs"
        }, {
            name: "91 kg / 200 lbs"
        },
        {
            name: "92 kg / 202 lbs"
        },
        {
            name: "93 kg / 204 lbs"
        }, {
            name: "94 kg / 206 lbs"
        },
        {
            name: "95 kg / 209 lbs"
        }, {
            name: "96 kg / 211 lbs"
        },
        {
            name: "97 kg / 213 lbs"
        },
        {
            name: "98 kg / 215 lbs"
        }, {
            name: "99 kg / 217 lbs"
        },
        {
            name: "over 100 kg / 220 lbs"
        },
    ];

    waist = [
        {
            name: 'Any'
        },
        {
            name: 'Less than 50 cm / 20 in'
        },
        {
            name: '50 cm / 20in'
        },
        {
            name: '53 cm / 21in'
        }, {
            name: '55 cm / 22in'
        }, {
            name: '58 cm / 23in'
        }, {
            name: '60 cm / 24in'
        }, {
            name: '63 cm / 25in'
        }, {
            name: '66 cm / 26in'
        }, {
            name: '68 cm / 27in'
        }, {
            name: '71 cm / 28in'
        }, {
            name: '73 cm / 29in'
        }, {
            name: '76 cm / 30in'
        },
        {
            name: '78 cm / 31in'
        }, {
            name: '81 cm / 32in'
        }, {
            name: '83 cm / 33in'
        }, {
            name: '86 cm / 34in'
        }, {
            name: '88 cm / 35in'
        }, {
            name: '91 cm / 36in'
        }, {
            name: 'over 91 cm / 36 in'
        },
    ];

    skin_color = [

        {
            name: 'Any',
        },
        {
            name: 'Black',
        }, {
            name: 'Brown',
        }, {
            name: 'Olive',
        }, {
            name: 'Tanned',
        }, {
            name: 'White',
        }, {
            name: 'Other',
        },



    ]



}