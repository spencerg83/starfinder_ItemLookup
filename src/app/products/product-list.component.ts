import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    pageTitle: string = 'Products List';
    imageWidth: number = 50;
    imageMargin: number = 2;
     products: any[] = //[
    //     {
    //     "productId": 1,
    //     "productName": "Leaf Rake",
    //     "productCode": "GDN-0011",
    //     "releaseDate": "March 19, 2016",
    //     "description": "Leaf rake with 48-inch wooden handle.",
    //     "price": 19.95,
    //     "starRating": 3.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // },
    // {
    //     "productId": 2,
    //     "productName": "Garden Cart",
    //     "productCode": "GDN-0023",
    //     "releaseDate": "March 18, 2016",
    //     "description": "15 gallon capacity rolling garden cart",
    //     "price": 32.99,
    //     "starRating": 4.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    // },
    // {
    //     "productId": 5,
    //     "productName": "Hammer",
    //     "productCode": "TBX-0048",
    //     "releaseDate": "May 21, 2016",
    //     "description": "Curved claw steel hammer",
    //     "price": 8.9,
    //     "starRating": 4.8,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    // }
    // ]
    [
 {
   "Name": "Unarmed Strike",
   "Level": "-",
   "Price": "-",
   "Damage": "1d3 B",
   "Critical": "-",
   "Bulk": "-",
   "Special": "Archaic, nonlethal"
 },
 {
   "Name": "Club",
   "Level": "0",
   "Price": "-",
   "Damage": "1d6 B",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, archaic"
 },
 {
   "Name": "Baton, tactical",
   "Level": "1",
   "Price": "90",
   "Damage": "1d4 B",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, operative"
 },
 {
   "Name": "Battleglove, cestus",
   "Level": "1",
   "Price": "100",
   "Damage": "1d4 B",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog"
 },
 {
   "Name": "Knife, survival",
   "Level": "1",
   "Price": "95",
   "Damage": "1d4 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, operative"
 },
 {
   "Name": "Dueling sword, tactical",
   "Level": "2",
   "Price": "475",
   "Damage": "1d6 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog"
 },
 {
   "Name": "Knife, tactical",
   "Level": "7",
   "Price": "6000",
   "Damage": "2d4 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, operative"
 },
 {
   "Name": "Dueling sword, buzzblade",
   "Level": "8",
   "Price": "9500",
   "Damage": "2d6 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Incapacitator",
   "Level": "9",
   "Price": "14200",
   "Damage": "3d4 B",
   "Critical": "Staggered",
   "Bulk": "L",
   "Special": "Nonlethal, operative, powered (capacity 20, usage 2)"
 },
 {
   "Name": "Battleglove, power",
   "Level": "10",
   "Price": "16100",
   "Damage": "2d8 B",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Dueling sword, ultrathin",
   "Level": "11",
   "Price": "26000",
   "Damage": "3d6 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog"
 },
 {
   "Name": "Dagger, ultrathin",
   "Level": "12",
   "Price": "32800",
   "Damage": "4d4 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, operative"
 },
 {
   "Name": "Battleglove, nova",
   "Level": "13",
   "Price": "52500",
   "Damage": "3d10 B",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Dagger, zero-edge",
   "Level": "14",
   "Price": "64400",
   "Damage": "6d4 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, operative"
 },
 {
   "Name": "Dueling sword, ripper",
   "Level": "15",
   "Price": "109250",
   "Damage": "7d6 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Peacemaker",
   "Level": "16",
   "Price": "185300",
   "Damage": "6d6 B",
   "Critical": "Knockdown",
   "Bulk": "L",
   "Special": "Operative, powered (capacity 20, usage 2), stun"
 },
 {
   "Name": "Battleglove, gravity",
   "Level": "17",
   "Price": "214850",
   "Damage": "5d10 B",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Dagger, molecular rift",
   "Level": "17",
   "Price": "275000",
   "Damage": "10d4 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, operative"
 },
 {
   "Name": "Dueling sword, molecular rift",
   "Level": "18",
   "Price": "331200",
   "Damage": "10d6 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog"
 },
 {
   "Name": "Baton, advanced",
   "Level": "19",
   "Price": "540000",
   "Damage": "8d6 B",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Operative, powered (capacity 20, usage 1)"
 },
 {
   "Name": "Spear, tactical",
   "Level": "1",
   "Price": "375",
   "Damage": "1d6 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, block, thrown (20 ft.)"
 },
 {
   "Name": "Staff, battle",
   "Level": "1",
   "Price": "80",
   "Damage": "1d4 B",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Analog, block"
 },
 {
   "Name": "Staff, carbon",
   "Level": "7",
   "Price": "6150",
   "Damage": "1d8 B",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Analog, block"
 },
 {
   "Name": "Spear, sentinel",
   "Level": "8",
   "Price": "10000",
   "Damage": "2d6 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, block, thrown (20 ft.)"
 },
 {
   "Name": "Spear, buzzblade",
   "Level": "11",
   "Price": "22650",
   "Damage": "3d6 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Block, powered (capacity 40, usage 2), thrown (20 ft.)"
 },
 {
   "Name": "Spear, zero-edge",
   "Level": "15",
   "Price": "107350",
   "Damage": "7d6 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog block, thrown (20 ft.)"
 },
 {
   "Name": "Staff, hardlight",
   "Level": "18",
   "Price": "320800",
   "Damage": "8d8 B",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Analog block"
 },
 {
   "Name": "Spear, gravity",
   "Level": "19",
   "Price": "552000",
   "Damage": "12d6 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Block, powered (capacity 40, usage 2), thrown (20 ft.)"
 },
 {
   "Name": "Skyfire sword, tactical",
   "Level": "7",
   "Price": "6120",
   "Damage": "2d4 F",
   "Critical": "Burn 1d8",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2)"
 },
 {
   "Name": "Skyfire sword, inferno",
   "Level": "17",
   "Price": "246000",
   "Damage": "7d8 F",
   "Critical": "Burn 4d12",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Plasma sword, tactical",
   "Level": "9",
   "Price": "14550",
   "Damage": "2d8 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2)"
 },
 {
   "Name": "Plasma sword, red star",
   "Level": "13",
   "Price": "54300",
   "Damage": "4d8 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 40, usage 4)"
 },
 {
   "Name": "Plasma sword, yellow star",
   "Level": "15",
   "Price": "127000",
   "Damage": "5d8 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 40, usage 4)"
 },
 {
   "Name": "Plasma sword, white star",
   "Level": "18",
   "Price": "415600",
   "Damage": "8d8 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 40, usage 4)"
 },
 {
   "Name": "Plasma sword, blue star",
   "Level": "20",
   "Price": "920250",
   "Damage": "10d8 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 40, usage 4)"
 },
 {
   "Name": "Shock truncheon, static",
   "Level": "8",
   "Price": "9150",
   "Damage": "1d12 E",
   "Critical": "Arc 1d4",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2), stun"
 },
 {
   "Name": "Shock truncheon, aurora",
   "Level": "11",
   "Price": "23000",
   "Damage": "2d12 E",
   "Critical": "Arc 2d4",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2), stun"
 },
 {
   "Name": "Shock truncheon, storm",
   "Level": "16",
   "Price": "80200",
   "Damage": "3d12 E",
   "Critical": "Arc 3d4",
   "Bulk": "1",
   "Special": "Powered (capacity 40, usage 4), stun"
 },
 {
   "Name": "Shock truncheon, tempest",
   "Level": "19",
   "Price": "545000",
   "Damage": "6d12 E",
   "Critical": "Arc 6d4",
   "Bulk": "1",
   "Special": "Powered (capacity 40, usage 4), stun"
 },
 {
   "Name": "Pulse gauntlet, thunderstrike",
   "Level": "2",
   "Price": "475",
   "Damage": "1d6 B & So",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Pulse gauntlet, LFD",
   "Level": "7",
   "Price": "7340",
   "Damage": "2d6 B & So",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Pulse gauntlet, HFD",
   "Level": "12",
   "Price": "31300",
   "Damage": "5d6 B & So",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Pulse gauntlet, banshee",
   "Level": "16",
   "Price": "148200",
   "Damage": "10d6 B & So",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Hammer, assault",
   "Level": "1",
   "Price": "95",
   "Damage": "1d6 B",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Longsword",
   "Level": "1",
   "Price": "375",
   "Damage": "1d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Starknife, tactical",
   "Level": "1",
   "Price": "110",
   "Damage": "1d4 P",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, thrown (20 ft)"
 },
 {
   "Name": "Taclash, standard",
   "Level": "1",
   "Price": "240",
   "Damage": "1d4 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, disarm, nonlethal, reach, trip"
 },
 {
   "Name": "Injection glove",
   "Level": "2",
   "Price": "490",
   "Damage": "1d4 P",
   "Critical": "Injection DC +2",
   "Bulk": "L",
   "Special": "Analog, injection"
 },
 {
   "Name": "Fangblade",
   "Level": "7",
   "Price": "5430",
   "Damage": "1d12 S",
   "Critical": "Bleed 1d8",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Longsword, sintered",
   "Level": "7",
   "Price": "8420",
   "Damage": "2d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Starknife, sintered",
   "Level": "8",
   "Price": "9810",
   "Damage": "4d4 P",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, thrown (50 ft.)"
 },
 {
   "Name": "Longsword, microserrated",
   "Level": "9",
   "Price": "12100",
   "Damage": "2d10 S",
   "Critical": "Bleed 2d6",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Hammer, comet",
   "Level": "10",
   "Price": "16900",
   "Damage": "4d6 B",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2)"
 },
 {
   "Name": "Longsword, ultrathin",
   "Level": "11",
   "Price": "26300",
   "Damage": "4d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Taclash, rumbling",
   "Level": "11",
   "Price": "24800",
   "Damage": "5d4 S",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Disarm, powered (capacity 20, usage 2), reach, stun, trip"
 },
 {
   "Name": "Starknife, accelerated",
   "Level": "12",
   "Price": "40400",
   "Damage": "4d8 F & P",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Powered (capacity 20, usage 1), thrown (30 ft.)"
 },
 {
   "Name": "Grindblade",
   "Level": "13",
   "Price": "45700",
   "Damage": "4d10 S",
   "Critical": "Bleed 2d8",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Longsword, zero-edge",
   "Level": "14",
   "Price": "79500",
   "Damage": "7d8 S",
   "Critical": "Severe Wound",
   "Bulk": "L",
   "Special": "Analog"
 },
 {
   "Name": "Monowhip",
   "Level": "15",
   "Price": "107000",
   "Damage": "10d4 S",
   "Critical": "Severe Wound",
   "Bulk": "L",
   "Special": "Analog, disarm, reach, trip"
 },
 {
   "Name": "Hammer, meteoric",
   "Level": "16",
   "Price": "164500",
   "Damage": "11d6 B",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Starknife, lightspeed",
   "Level": "16",
   "Price": "183400",
   "Damage": "8d8 F & P",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Powered (capacity 40, usage 2)"
 },
 {
   "Name": "Longsword, molecular rift",
   "Level": "17",
   "Price": "245200",
   "Damage": "10d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, thrown (80 ft.)"
 },
 {
   "Name": "Longsword, ultraserrated",
   "Level": "18",
   "Price": "368100",
   "Damage": "8d10 S",
   "Critical": "Bleed 6d6",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Hammer, gravity well",
   "Level": "19",
   "Price": "551000",
   "Damage": "15d6 B",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Powered (capacity 40, usage 2)"
 },
 {
   "Name": "Starknife, dimensional slice",
   "Level": "19",
   "Price": "602200",
   "Damage": "8d12 P",
   "Critical": "-",
   "Bulk": "L",
   "Special": "Analog, thrown (80 ft.)"
 },
 {
   "Name": "Longsword, dimensional slice",
   "Level": "20",
   "Price": "727300",
   "Damage": "14d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Cryopike, tactical",
   "Level": "5",
   "Price": "3360",
   "Damage": "1d8 C",
   "Critical": "-",
   "Bulk": "2",
   "Special": "Powered (capacity 40, usage 2), reach"
 },
 {
   "Name": "Cryopike, advanced",
   "Level": "12",
   "Price": "34800",
   "Damage": "2d8 C",
   "Critical": "Staggered",
   "Bulk": "2",
   "Special": "Powered (capacity 40, usage 2), reach"
 },
 {
   "Name": "Flame doshko, ember",
   "Level": "2",
   "Price": "750",
   "Damage": "1d8 F",
   "Critical": "Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Flame doshko, blaze",
   "Level": "8",
   "Price": "8500",
   "Damage": "2d8 F",
   "Critical": "Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Flame doshko, inferno",
   "Level": "13",
   "Price": "53200",
   "Damage": "5d8 F",
   "Critical": "Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Flame doshko, solar flare",
   "Level": "19",
   "Price": "595000",
   "Damage": "10d8 F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1)"
 },
 {
   "Name": "Plasma doshko, red star",
   "Level": "6",
   "Price": "4650",
   "Damage": "1d10 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2)"
 },
 {
   "Name": "Plasma doshko, yellow star",
   "Level": "10",
   "Price": "17000",
   "Damage": "2d10 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2)"
 },
 {
   "Name": "Plasma doshko, white star",
   "Level": "15",
   "Price": "126800",
   "Damage": "5d10 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2)"
 },
 {
   "Name": "Plasma doshko, blue star",
   "Level": "18",
   "Price": "364100",
   "Damage": "7d10 E & F",
   "Critical": "Severe Wound",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 2)"
 },
 {
   "Name": "Doshko, tactical",
   "Level": "1",
   "Price": "240",
   "Damage": "1d12 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, unwieldy"
 },
 {
   "Name": "Pike, tactical",
   "Level": "2",
   "Price": "475",
   "Damage": "1d8 P",
   "Critical": "-",
   "Bulk": "2",
   "Special": "Analog, reach"
 },
 {
   "Name": "Curve blade, carbon steel",
   "Level": "4",
   "Price": "2230",
   "Damage": "1d10 S",
   "Critical": "Bleed 1d6",
   "Bulk": "2",
   "Special": "Analog"
 },
 {
   "Name": "Swoop hammer, tactical",
   "Level": "5",
   "Price": "3360",
   "Damage": "1d10 B",
   "Critical": "Knockdown",
   "Bulk": "2",
   "Special": "Analog, reach, unwieldy"
 },
 {
   "Name": "Devastation blade, wrack",
   "Level": "7",
   "Price": "5500",
   "Damage": "2d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Doshko, advanced",
   "Level": "7",
   "Price": "5300",
   "Damage": "2d12 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, unwieldy"
 },
 {
   "Name": "Staff, sentinel",
   "Level": "7",
   "Price": "6320",
   "Damage": "1d10 B",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Block, powered (capacity 20, usage 1), stun"
 },
 {
   "Name": "Pike, advanced",
   "Level": "9",
   "Price": "12200",
   "Damage": "2d8 P",
   "Critical": "Bleed 1d8",
   "Bulk": "2",
   "Special": "Analog, reach"
 },
 {
   "Name": "Swoop hammer, advanced",
   "Level": "9",
   "Price": "14300",
   "Damage": "3d10 B",
   "Critical": "Knockdown",
   "Bulk": "2",
   "Special": "Analog, reach, unwieldy"
 },
 {
   "Name": "Curve blade, ultrathin",
   "Level": "10",
   "Price": "18100",
   "Damage": "3d10 S",
   "Critical": "Bleed 2d6",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Doshko, ultrathin",
   "Level": "11",
   "Price": "24600",
   "Damage": "4d12 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, unwieldy"
 },
 {
   "Name": "Devastation blade, ruin",
   "Level": "13",
   "Price": "43900",
   "Damage": "5d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Staff, repeller",
   "Level": "13",
   "Price": "45200",
   "Damage": "3d8 B",
   "Critical": "Knockdown",
   "Bulk": "1",
   "Special": "Block, powered (capacity 20, usage 1), stun"
 },
 {
   "Name": "Swoop hammer, mach 1",
   "Level": "13",
   "Price": "44100",
   "Damage": "5d10 B",
   "Critical": "Knockdown",
   "Bulk": "2",
   "Special": "Powered (capacity 40, usage 4), reach, unwieldy"
 },
 {
   "Name": "Doshko, zero-edge",
   "Level": "14",
   "Price": "71500",
   "Damage": "7d12 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, unwieldy"
 },
 {
   "Name": "Pike, elite",
   "Level": "15",
   "Price": "95700",
   "Damage": "7d8 P",
   "Critical": "Bleed 3d8",
   "Bulk": "2",
   "Special": "Analog, reach"
 },
 {
   "Name": "Curve blade, buzzblade",
   "Level": "16",
   "Price": "184300",
   "Damage": "8d10 S",
   "Critical": "Bleed 5d6",
   "Bulk": "2",
   "Special": "Powered (capacity 40, usage 2)"
 },
 {
   "Name": "Doshko, molecular rift",
   "Level": "17",
   "Price": "248000",
   "Damage": "10d12 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Powered (capacity 20, usage 1), unwieldy"
 },
 {
   "Name": "Swoop hammer, mach 2",
   "Level": "17",
   "Price": "273000",
   "Damage": "10d10 B",
   "Critical": "Knockdown",
   "Bulk": "2",
   "Special": "Analog, reach, unwieldy"
 },
 {
   "Name": "Devastation blade, apocalypse",
   "Level": "18",
   "Price": "410200",
   "Damage": "12d8 S",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog"
 },
 {
   "Name": "Doshko, dimensional blade",
   "Level": "19",
   "Price": "546100",
   "Damage": "13d12 P",
   "Critical": "-",
   "Bulk": "1",
   "Special": "Analog, unwieldy"
 },
 {
   "Name": "Curve blade, dimensional slice",
   "Level": "20",
   "Price": "815000",
   "Damage": "12d10 S",
   "Critical": "Bleed 6d6",
   "Bulk": "2",
   "Special": "Powered (capacity 40, usage 2)"
 },
 {
   "Name": "Swoop hammer, mach 3",
   "Level": "20",
   "Price": "905700",
   "Damage": "14d10 B & F",
   "Critical": "Knockdown",
   "Bulk": "2",
   "Special": "Powered (capacity 40, usage 4), reach, unwieldy"
 }
];
    

}