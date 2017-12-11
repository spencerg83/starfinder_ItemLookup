import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';



@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Products List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter = value;
      this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];


    products: IProduct[] = [
 {
   "productName": "Unarmed Strike",
   "productLevel": "-",
   "productPrice": "-",
   "productDamage": "1d3 B",
   "productCritical": "-",
   "productBulk": "-",
   "productSpecial": "Archaic, nonlethal"
 },
 {
   "productName": "Club",
   "productLevel": "0",
   "productPrice": "-",
   "productDamage": "1d6 B",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, archaic"
 },
 {
   "productName": "Baton, tactical",
   "productLevel": "1",
   "productPrice": "90",
   "productDamage": "1d4 B",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, operative"
 },
 {
   "productName": "Battleglove, cestus",
   "productLevel": "1",
   "productPrice": "100",
   "productDamage": "1d4 B",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog"
 },
 {
   "productName": "Knife, survival",
   "productLevel": "1",
   "productPrice": "95",
   "productDamage": "1d4 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, operative"
 },
 {
   "productName": "Dueling sword, tactical",
   "productLevel": "2",
   "productPrice": "475",
   "productDamage": "1d6 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog"
 },
 {
   "productName": "Knife, tactical",
   "productLevel": "7",
   "productPrice": "6000",
   "productDamage": "2d4 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, operative"
 },
 {
   "productName": "Dueling sword, buzzblade",
   "productLevel": "8",
   "productPrice": "9500",
   "productDamage": "2d6 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Incapacitator",
   "productLevel": "9",
   "productPrice": "14200",
   "productDamage": "3d4 B",
   "productCritical": "Staggered",
   "productBulk": "L",
   "productSpecial": "Nonlethal, operative, powered (capacity 20, usage 2)"
 },
 {
   "productName": "Battleglove, power",
   "productLevel": "10",
   "productPrice": "16100",
   "productDamage": "2d8 B",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Dueling sword, ultrathin",
   "productLevel": "11",
   "productPrice": "26000",
   "productDamage": "3d6 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog"
 },
 {
   "productName": "Dagger, ultrathin",
   "productLevel": "12",
   "productPrice": "32800",
   "productDamage": "4d4 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, operative"
 },
 {
   "productName": "Battleglove, nova",
   "productLevel": "13",
   "productPrice": "52500",
   "productDamage": "3d10 B",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Dagger, zero-edge",
   "productLevel": "14",
   "productPrice": "64400",
   "productDamage": "6d4 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, operative"
 },
 {
   "productName": "Dueling sword, ripper",
   "productLevel": "15",
   "productPrice": "109250",
   "productDamage": "7d6 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Peacemaker",
   "productLevel": "16",
   "productPrice": "185300",
   "productDamage": "6d6 B",
   "productCritical": "Knockdown",
   "productBulk": "L",
   "productSpecial": "Operative, powered (capacity 20, usage 2), stun"
 },
 {
   "productName": "Battleglove, gravity",
   "productLevel": "17",
   "productPrice": "214850",
   "productDamage": "5d10 B",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Dagger, molecular rift",
   "productLevel": "17",
   "productPrice": "275000",
   "productDamage": "10d4 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, operative"
 },
 {
   "productName": "Dueling sword, molecular rift",
   "productLevel": "18",
   "productPrice": "331200",
   "productDamage": "10d6 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog"
 },
 {
   "productName": "Baton, advanced",
   "productLevel": "19",
   "productPrice": "540000",
   "productDamage": "8d6 B",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Operative, powered (capacity 20, usage 1)"
 },
 {
   "productName": "Spear, tactical",
   "productLevel": "1",
   "productPrice": "375",
   "productDamage": "1d6 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, block, thrown (20 ft.)"
 },
 {
   "productName": "Staff, battle",
   "productLevel": "1",
   "productPrice": "80",
   "productDamage": "1d4 B",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Analog, block"
 },
 {
   "productName": "Staff, carbon",
   "productLevel": "7",
   "productPrice": "6150",
   "productDamage": "1d8 B",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Analog, block"
 },
 {
   "productName": "Spear, sentinel",
   "productLevel": "8",
   "productPrice": "10000",
   "productDamage": "2d6 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, block, thrown (20 ft.)"
 },
 {
   "productName": "Spear, buzzblade",
   "productLevel": "11",
   "productPrice": "22650",
   "productDamage": "3d6 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Block, powered (capacity 40, usage 2), thrown (20 ft.)"
 },
 {
   "productName": "Spear, zero-edge",
   "productLevel": "15",
   "productPrice": "107350",
   "productDamage": "7d6 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog block, thrown (20 ft.)"
 },
 {
   "productName": "Staff, hardlight",
   "productLevel": "18",
   "productPrice": "320800",
   "productDamage": "8d8 B",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Analog block"
 },
 {
   "productName": "Spear, gravity",
   "productLevel": "19",
   "productPrice": "552000",
   "productDamage": "12d6 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Block, powered (capacity 40, usage 2), thrown (20 ft.)"
 },
 {
   "productName": "Skyfire sword, tactical",
   "productLevel": "7",
   "productPrice": "6120",
   "productDamage": "2d4 F",
   "productCritical": "Burn 1d8",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2)"
 },
 {
   "productName": "Skyfire sword, inferno",
   "productLevel": "17",
   "productPrice": "246000",
   "productDamage": "7d8 F",
   "productCritical": "Burn 4d12",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Plasma sword, tactical",
   "productLevel": "9",
   "productPrice": "14550",
   "productDamage": "2d8 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2)"
 },
 {
   "productName": "Plasma sword, red star",
   "productLevel": "13",
   "productPrice": "54300",
   "productDamage": "4d8 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 40, usage 4)"
 },
 {
   "productName": "Plasma sword, yellow star",
   "productLevel": "15",
   "productPrice": "127000",
   "productDamage": "5d8 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 40, usage 4)"
 },
 {
   "productName": "Plasma sword, white star",
   "productLevel": "18",
   "productPrice": "415600",
   "productDamage": "8d8 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 40, usage 4)"
 },
 {
   "productName": "Plasma sword, blue star",
   "productLevel": "20",
   "productPrice": "920250",
   "productDamage": "10d8 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 40, usage 4)"
 },
 {
   "productName": "Shock truncheon, static",
   "productLevel": "8",
   "productPrice": "9150",
   "productDamage": "1d12 E",
   "productCritical": "Arc 1d4",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2), stun"
 },
 {
   "productName": "Shock truncheon, aurora",
   "productLevel": "11",
   "productPrice": "23000",
   "productDamage": "2d12 E",
   "productCritical": "Arc 2d4",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2), stun"
 },
 {
   "productName": "Shock truncheon, storm",
   "productLevel": "16",
   "productPrice": "80200",
   "productDamage": "3d12 E",
   "productCritical": "Arc 3d4",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 40, usage 4), stun"
 },
 {
   "productName": "Shock truncheon, tempest",
   "productLevel": "19",
   "productPrice": "545000",
   "productDamage": "6d12 E",
   "productCritical": "Arc 6d4",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 40, usage 4), stun"
 },
 {
   "productName": "Pulse gauntlet, thunderstrike",
   "productLevel": "2",
   "productPrice": "475",
   "productDamage": "1d6 B & So",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Pulse gauntlet, LFD",
   "productLevel": "7",
   "productPrice": "7340",
   "productDamage": "2d6 B & So",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Pulse gauntlet, HFD",
   "productLevel": "12",
   "productPrice": "31300",
   "productDamage": "5d6 B & So",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Pulse gauntlet, banshee",
   "productLevel": "16",
   "productPrice": "148200",
   "productDamage": "10d6 B & So",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Hammer, assault",
   "productLevel": "1",
   "productPrice": "95",
   "productDamage": "1d6 B",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Longsword",
   "productLevel": "1",
   "productPrice": "375",
   "productDamage": "1d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Starknife, tactical",
   "productLevel": "1",
   "productPrice": "110",
   "productDamage": "1d4 P",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, thrown (20 ft)"
 },
 {
   "productName": "Taclash, standard",
   "productLevel": "1",
   "productPrice": "240",
   "productDamage": "1d4 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, disarm, nonlethal, reach, trip"
 },
 {
   "productName": "Injection glove",
   "productLevel": "2",
   "productPrice": "490",
   "productDamage": "1d4 P",
   "productCritical": "Injection DC +2",
   "productBulk": "L",
   "productSpecial": "Analog, injection"
 },
 {
   "productName": "Fangblade",
   "productLevel": "7",
   "productPrice": "5430",
   "productDamage": "1d12 S",
   "productCritical": "Bleed 1d8",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Longsword, sintered",
   "productLevel": "7",
   "productPrice": "8420",
   "productDamage": "2d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Starknife, sintered",
   "productLevel": "8",
   "productPrice": "9810",
   "productDamage": "4d4 P",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, thrown (50 ft.)"
 },
 {
   "productName": "Longsword, microserrated",
   "productLevel": "9",
   "productPrice": "12100",
   "productDamage": "2d10 S",
   "productCritical": "Bleed 2d6",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Hammer, comet",
   "productLevel": "10",
   "productPrice": "16900",
   "productDamage": "4d6 B",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2)"
 },
 {
   "productName": "Longsword, ultrathin",
   "productLevel": "11",
   "productPrice": "26300",
   "productDamage": "4d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Taclash, rumbling",
   "productLevel": "11",
   "productPrice": "24800",
   "productDamage": "5d4 S",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Disarm, powered (capacity 20, usage 2), reach, stun, trip"
 },
 {
   "productName": "Starknife, accelerated",
   "productLevel": "12",
   "productPrice": "40400",
   "productDamage": "4d8 F & P",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Powered (capacity 20, usage 1), thrown (30 ft.)"
 },
 {
   "productName": "Grindblade",
   "productLevel": "13",
   "productPrice": "45700",
   "productDamage": "4d10 S",
   "productCritical": "Bleed 2d8",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Longsword, zero-edge",
   "productLevel": "14",
   "productPrice": "79500",
   "productDamage": "7d8 S",
   "productCritical": "Severe Wound",
   "productBulk": "L",
   "productSpecial": "Analog"
 },
 {
   "productName": "Monowhip",
   "productLevel": "15",
   "productPrice": "107000",
   "productDamage": "10d4 S",
   "productCritical": "Severe Wound",
   "productBulk": "L",
   "productSpecial": "Analog, disarm, reach, trip"
 },
 {
   "productName": "Hammer, meteoric",
   "productLevel": "16",
   "productPrice": "164500",
   "productDamage": "11d6 B",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Starknife, lightspeed",
   "productLevel": "16",
   "productPrice": "183400",
   "productDamage": "8d8 F & P",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Powered (capacity 40, usage 2)"
 },
 {
   "productName": "Longsword, molecular rift",
   "productLevel": "17",
   "productPrice": "245200",
   "productDamage": "10d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, thrown (80 ft.)"
 },
 {
   "productName": "Longsword, ultraserrated",
   "productLevel": "18",
   "productPrice": "368100",
   "productDamage": "8d10 S",
   "productCritical": "Bleed 6d6",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Hammer, gravity well",
   "productLevel": "19",
   "productPrice": "551000",
   "productDamage": "15d6 B",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 40, usage 2)"
 },
 {
   "productName": "Starknife, dimensional slice",
   "productLevel": "19",
   "productPrice": "602200",
   "productDamage": "8d12 P",
   "productCritical": "-",
   "productBulk": "L",
   "productSpecial": "Analog, thrown (80 ft.)"
 },
 {
   "productName": "Longsword, dimensional slice",
   "productLevel": "20",
   "productPrice": "727300",
   "productDamage": "14d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Cryopike, tactical",
   "productLevel": "5",
   "productPrice": "3360",
   "productDamage": "1d8 C",
   "productCritical": "-",
   "productBulk": "2",
   "productSpecial": "Powered (capacity 40, usage 2), reach"
 },
 {
   "productName": "Cryopike, advanced",
   "productLevel": "12",
   "productPrice": "34800",
   "productDamage": "2d8 C",
   "productCritical": "Staggered",
   "productBulk": "2",
   "productSpecial": "Powered (capacity 40, usage 2), reach"
 },
 {
   "productName": "Flame doshko, ember",
   "productLevel": "2",
   "productPrice": "750",
   "productDamage": "1d8 F",
   "productCritical": "Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Flame doshko, blaze",
   "productLevel": "8",
   "productPrice": "8500",
   "productDamage": "2d8 F",
   "productCritical": "Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Flame doshko, inferno",
   "productLevel": "13",
   "productPrice": "53200",
   "productDamage": "5d8 F",
   "productCritical": "Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Flame doshko, solar flare",
   "productLevel": "19",
   "productPrice": "595000",
   "productDamage": "10d8 F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1)"
 },
 {
   "productName": "Plasma doshko, red star",
   "productLevel": "6",
   "productPrice": "4650",
   "productDamage": "1d10 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2)"
 },
 {
   "productName": "Plasma doshko, yellow star",
   "productLevel": "10",
   "productPrice": "17000",
   "productDamage": "2d10 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2)"
 },
 {
   "productName": "Plasma doshko, white star",
   "productLevel": "15",
   "productPrice": "126800",
   "productDamage": "5d10 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2)"
 },
 {
   "productName": "Plasma doshko, blue star",
   "productLevel": "18",
   "productPrice": "364100",
   "productDamage": "7d10 E & F",
   "productCritical": "Severe Wound",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 2)"
 },
 {
   "productName": "Doshko, tactical",
   "productLevel": "1",
   "productPrice": "240",
   "productDamage": "1d12 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, unwieldy"
 },
 {
   "productName": "Pike, tactical",
   "productLevel": "2",
   "productPrice": "475",
   "productDamage": "1d8 P",
   "productCritical": "-",
   "productBulk": "2",
   "productSpecial": "Analog, reach"
 },
 {
   "productName": "Curve blade, carbon steel",
   "productLevel": "4",
   "productPrice": "2230",
   "productDamage": "1d10 S",
   "productCritical": "Bleed 1d6",
   "productBulk": "2",
   "productSpecial": "Analog"
 },
 {
   "productName": "Swoop hammer, tactical",
   "productLevel": "5",
   "productPrice": "3360",
   "productDamage": "1d10 B",
   "productCritical": "Knockdown",
   "productBulk": "2",
   "productSpecial": "Analog, reach, unwieldy"
 },
 {
   "productName": "Devastation blade, wrack",
   "productLevel": "7",
   "productPrice": "5500",
   "productDamage": "2d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Doshko, advanced",
   "productLevel": "7",
   "productPrice": "5300",
   "productDamage": "2d12 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, unwieldy"
 },
 {
   "productName": "Staff, sentinel",
   "productLevel": "7",
   "productPrice": "6320",
   "productDamage": "1d10 B",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Block, powered (capacity 20, usage 1), stun"
 },
 {
   "productName": "Pike, advanced",
   "productLevel": "9",
   "productPrice": "12200",
   "productDamage": "2d8 P",
   "productCritical": "Bleed 1d8",
   "productBulk": "2",
   "productSpecial": "Analog, reach"
 },
 {
   "productName": "Swoop hammer, advanced",
   "productLevel": "9",
   "productPrice": "14300",
   "productDamage": "3d10 B",
   "productCritical": "Knockdown",
   "productBulk": "2",
   "productSpecial": "Analog, reach, unwieldy"
 },
 {
   "productName": "Curve blade, ultrathin",
   "productLevel": "10",
   "productPrice": "18100",
   "productDamage": "3d10 S",
   "productCritical": "Bleed 2d6",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Doshko, ultrathin",
   "productLevel": "11",
   "productPrice": "24600",
   "productDamage": "4d12 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, unwieldy"
 },
 {
   "productName": "Devastation blade, ruin",
   "productLevel": "13",
   "productPrice": "43900",
   "productDamage": "5d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Staff, repeller",
   "productLevel": "13",
   "productPrice": "45200",
   "productDamage": "3d8 B",
   "productCritical": "Knockdown",
   "productBulk": "1",
   "productSpecial": "Block, powered (capacity 20, usage 1), stun"
 },
 {
   "productName": "Swoop hammer, mach 1",
   "productLevel": "13",
   "productPrice": "44100",
   "productDamage": "5d10 B",
   "productCritical": "Knockdown",
   "productBulk": "2",
   "productSpecial": "Powered (capacity 40, usage 4), reach, unwieldy"
 },
 {
   "productName": "Doshko, zero-edge",
   "productLevel": "14",
   "productPrice": "71500",
   "productDamage": "7d12 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, unwieldy"
 },
 {
   "productName": "Pike, elite",
   "productLevel": "15",
   "productPrice": "95700",
   "productDamage": "7d8 P",
   "productCritical": "Bleed 3d8",
   "productBulk": "2",
   "productSpecial": "Analog, reach"
 },
 {
   "productName": "Curve blade, buzzblade",
   "productLevel": "16",
   "productPrice": "184300",
   "productDamage": "8d10 S",
   "productCritical": "Bleed 5d6",
   "productBulk": "2",
   "productSpecial": "Powered (capacity 40, usage 2)"
 },
 {
   "productName": "Doshko, molecular rift",
   "productLevel": "17",
   "productPrice": "248000",
   "productDamage": "10d12 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Powered (capacity 20, usage 1), unwieldy"
 },
 {
   "productName": "Swoop hammer, mach 2",
   "productLevel": "17",
   "productPrice": "273000",
   "productDamage": "10d10 B",
   "productCritical": "Knockdown",
   "productBulk": "2",
   "productSpecial": "Analog, reach, unwieldy"
 },
 {
   "productName": "Devastation blade, apocalypse",
   "productLevel": "18",
   "productPrice": "410200",
   "productDamage": "12d8 S",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog"
 },
 {
   "productName": "Doshko, dimensional blade",
   "productLevel": "19",
   "productPrice": "546100",
   "productDamage": "13d12 P",
   "productCritical": "-",
   "productBulk": "1",
   "productSpecial": "Analog, unwieldy"
 },
 {
   "productName": "Curve blade, dimensional slice",
   "productLevel": "20",
   "productPrice": "815000",
   "productDamage": "12d10 S",
   "productCritical": "Bleed 6d6",
   "productBulk": "2",
   "productSpecial": "Powered (capacity 40, usage 2)"
 },
 {
   "productName": "Swoop hammer, mach 3",
   "productLevel": "20",
   "productPrice": "905700",
   "productDamage": "14d10 B & F",
   "productCritical": "Knockdown",
   "productBulk": "2",
   "productSpecial": "Powered (capacity 40, usage 4), reach, unwieldy"
 }
];

    constructor() {
      this.filteredProducts = this.products;
      this.listFilter = '';
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      console.log('In OnInit');
    }

}