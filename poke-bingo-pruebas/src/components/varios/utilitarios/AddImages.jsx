import React, { useEffect } from 'react'
import {baseUrl} from '../../../core/constant/constantes.ts';

const pokes = [
    {
      "id": "1",
      "nombre": "bulbasaur",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
      "id": "2",
      "nombre": "ivysaur",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
    },
    {
      "id": "3",
      "nombre": "venusaur",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
    },
    {
      "id": "4",
      "nombre": "charmander",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
      "id": "5",
      "nombre": "charmeleon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
    },
    {
      "id": "6",
      "nombre": "charizard",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
    },
    {
      "id": "7",
      "nombre": "squirtle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
      "id": "8",
      "nombre": "wartortle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
    },
    {
      "id": "9",
      "nombre": "blastoise",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    },
    {
      "id": "10",
      "nombre": "caterpie",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
    },
    {
      "id": "11",
      "nombre": "metapod",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
    },
    {
      "id": "12",
      "nombre": "butterfree",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
    },
    {
      "id": "13",
      "nombre": "weedle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
    },
    {
      "id": "14",
      "nombre": "kakuna",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
    },
    {
      "id": "15",
      "nombre": "beedrill",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
    },
    {
      "id": "16",
      "nombre": "pidgey",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
    },
    {
      "id": "17",
      "nombre": "pidgeotto",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
    },
    {
      "id": "18",
      "nombre": "pidgeot",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
    },
    {
      "id": "19",
      "nombre": "rattata",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
    },
    {
      "id": "20",
      "nombre": "raticate",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
    },
    {
      "id": "21",
      "nombre": "spearow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
    },
    {
      "id": "22",
      "nombre": "fearow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
    },
    {
      "id": "23",
      "nombre": "ekans",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
    },
    {
      "id": "24",
      "nombre": "arbok",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
    },
    {
      "id": "25",
      "nombre": "pikachu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
      "id": "26",
      "nombre": "raichu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
    },
    {
      "id": "27",
      "nombre": "sandshrew",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
    },
    {
      "id": "28",
      "nombre": "sandslash",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
    },
    {
      "id": "29",
      "nombre": "nidoran-f",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
    },
    {
      "id": "30",
      "nombre": "nidorina",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
    },
    {
      "id": "31",
      "nombre": "nidoqueen",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
    },
    {
      "id": "32",
      "nombre": "nidoran-m",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
    },
    {
      "id": "33",
      "nombre": "nidorino",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
    },
    {
      "id": "34",
      "nombre": "nidoking",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
    },
    {
      "id": "35",
      "nombre": "clefairy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
    },
    {
      "id": "36",
      "nombre": "clefable",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
    },
    {
      "id": "37",
      "nombre": "vulpix",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
    },
    {
      "id": "38",
      "nombre": "ninetales",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
    },
    {
      "id": "39",
      "nombre": "jigglypuff",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
    },
    {
      "id": "40",
      "nombre": "wigglytuff",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
    },
    {
      "id": "41",
      "nombre": "zubat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
    },
    {
      "id": "42",
      "nombre": "golbat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
    },
    {
      "id": "43",
      "nombre": "oddish",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
    },
    {
      "id": "44",
      "nombre": "gloom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
    },
    {
      "id": "45",
      "nombre": "vileplume",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
    },
    {
      "id": "46",
      "nombre": "paras",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
    },
    {
      "id": "47",
      "nombre": "parasect",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
    },
    {
      "id": "48",
      "nombre": "venonat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
    },
    {
      "id": "49",
      "nombre": "venomoth",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
    },
    {
      "id": "50",
      "nombre": "diglett",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
    },
    {
      "id": "51",
      "nombre": "dugtrio",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
    },
    {
      "id": "52",
      "nombre": "meowth",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
    },
    {
      "id": "53",
      "nombre": "persian",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
    },
    {
      "id": "54",
      "nombre": "psyduck",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
    },
    {
      "id": "55",
      "nombre": "golduck",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
    },
    {
      "id": "56",
      "nombre": "mankey",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
    },
    {
      "id": "57",
      "nombre": "primeape",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
    },
    {
      "id": "58",
      "nombre": "growlithe",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
    },
    {
      "id": "59",
      "nombre": "arcanine",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
    },
    {
      "id": "60",
      "nombre": "poliwag",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
    },
    {
      "id": "61",
      "nombre": "poliwhirl",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
    },
    {
      "id": "62",
      "nombre": "poliwrath",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
    },
    {
      "id": "63",
      "nombre": "abra",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
    },
    {
      "id": "64",
      "nombre": "kadabra",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
    },
    {
      "id": "65",
      "nombre": "alakazam",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
    },
    {
      "id": "66",
      "nombre": "machop",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
    },
    {
      "id": "67",
      "nombre": "machoke",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
    },
    {
      "id": "68",
      "nombre": "machamp",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
    },
    {
      "id": "69",
      "nombre": "bellsprout",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
    },
    {
      "id": "70",
      "nombre": "weepinbell",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
    },
    {
      "id": "71",
      "nombre": "victreebel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
    },
    {
      "id": "72",
      "nombre": "tentacool",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
    },
    {
      "id": "73",
      "nombre": "tentacruel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
    },
    {
      "id": "74",
      "nombre": "geodude",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
    },
    {
      "id": "75",
      "nombre": "graveler",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
    },
    {
      "id": "76",
      "nombre": "golem",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
    },
    {
      "id": "77",
      "nombre": "ponyta",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
    },
    {
      "id": "78",
      "nombre": "rapidash",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
    },
    {
      "id": "79",
      "nombre": "slowpoke",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
    },
    {
      "id": "80",
      "nombre": "slowbro",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
    },
    {
      "id": "81",
      "nombre": "magnemite",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
    },
    {
      "id": "82",
      "nombre": "magneton",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
    },
    {
      "id": "83",
      "nombre": "farfetchd",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
    },
    {
      "id": "84",
      "nombre": "doduo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
    },
    {
      "id": "85",
      "nombre": "dodrio",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
    },
    {
      "id": "86",
      "nombre": "seel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
    },
    {
      "id": "87",
      "nombre": "dewgong",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
    },
    {
      "id": "88",
      "nombre": "grimer",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
    },
    {
      "id": "89",
      "nombre": "muk",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
    },
    {
      "id": "90",
      "nombre": "shellder",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
    },
    {
      "id": "91",
      "nombre": "cloyster",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
    },
    {
      "id": "92",
      "nombre": "gastly",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
    },
    {
      "id": "93",
      "nombre": "haunter",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
    },
    {
      "id": "94",
      "nombre": "gengar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
    },
    {
      "id": "95",
      "nombre": "onix",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
    },
    {
      "id": "96",
      "nombre": "drowzee",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
    },
    {
      "id": "97",
      "nombre": "hypno",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
    },
    {
      "id": "98",
      "nombre": "krabby",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
    },
    {
      "id": "99",
      "nombre": "kingler",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
    },
    {
      "id": "100",
      "nombre": "voltorb",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
    },
    {
      "id": "101",
      "nombre": "electrode",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
    },
    {
      "id": "102",
      "nombre": "exeggcute",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
    },
    {
      "id": "103",
      "nombre": "exeggutor",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
    },
    {
      "id": "104",
      "nombre": "cubone",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
    },
    {
      "id": "105",
      "nombre": "marowak",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
    },
    {
      "id": "106",
      "nombre": "hitmonlee",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
    },
    {
      "id": "107",
      "nombre": "hitmonchan",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
    },
    {
      "id": "108",
      "nombre": "lickitung",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
    },
    {
      "id": "109",
      "nombre": "koffing",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
    },
    {
      "id": "110",
      "nombre": "weezing",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
    },
    {
      "id": "111",
      "nombre": "rhyhorn",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
    },
    {
      "id": "112",
      "nombre": "rhydon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
    },
    {
      "id": "113",
      "nombre": "chansey",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
    },
    {
      "id": "114",
      "nombre": "tangela",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
    },
    {
      "id": "115",
      "nombre": "kangaskhan",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
    },
    {
      "id": "116",
      "nombre": "horsea",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
    },
    {
      "id": "117",
      "nombre": "seadra",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
    },
    {
      "id": "118",
      "nombre": "goldeen",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
    },
    {
      "id": "119",
      "nombre": "seaking",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
    },
    {
      "id": "120",
      "nombre": "staryu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
    },
    {
      "id": "121",
      "nombre": "starmie",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
    },
    {
      "id": "122",
      "nombre": "mr-mime",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
    },
    {
      "id": "123",
      "nombre": "scyther",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
    },
    {
      "id": "124",
      "nombre": "jynx",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
    },
    {
      "id": "125",
      "nombre": "electabuzz",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
    },
    {
      "id": "126",
      "nombre": "magmar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
    },
    {
      "id": "127",
      "nombre": "pinsir",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
    },
    {
      "id": "128",
      "nombre": "tauros",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
    },
    {
      "id": "129",
      "nombre": "magikarp",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
    },
    {
      "id": "130",
      "nombre": "gyarados",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
    },
    {
      "id": "131",
      "nombre": "lapras",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
    },
    {
      "id": "132",
      "nombre": "ditto",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    },
    {
      "id": "133",
      "nombre": "eevee",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
    },
    {
      "id": "134",
      "nombre": "vaporeon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
    },
    {
      "id": "135",
      "nombre": "jolteon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
    },
    {
      "id": "136",
      "nombre": "flareon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
    },
    {
      "id": "137",
      "nombre": "porygon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
    },
    {
      "id": "138",
      "nombre": "omanyte",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
    },
    {
      "id": "139",
      "nombre": "omastar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
    },
    {
      "id": "140",
      "nombre": "kabuto",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
    },
    {
      "id": "141",
      "nombre": "kabutops",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
    },
    {
      "id": "142",
      "nombre": "aerodactyl",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
    },
    {
      "id": "143",
      "nombre": "snorlax",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
    },
    {
      "id": "144",
      "nombre": "articuno",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
    },
    {
      "id": "145",
      "nombre": "zapdos",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
    },
    {
      "id": "146",
      "nombre": "moltres",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
    },
    {
      "id": "147",
      "nombre": "dratini",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
    },
    {
      "id": "148",
      "nombre": "dragonair",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
    },
    {
      "id": "149",
      "nombre": "dragonite",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
    },
    {
      "id": "150",
      "nombre": "mewtwo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
    },
    {
      "id": "151",
      "nombre": "mew",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
    },
    {
      "id": "152",
      "nombre": "chikorita",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
    },
    {
      "id": "153",
      "nombre": "bayleef",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
    },
    {
      "id": "154",
      "nombre": "meganium",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
    },
    {
      "id": "155",
      "nombre": "cyndaquil",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
    },
    {
      "id": "156",
      "nombre": "quilava",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
    },
    {
      "id": "157",
      "nombre": "typhlosion",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
    },
    {
      "id": "158",
      "nombre": "totodile",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
    },
    {
      "id": "159",
      "nombre": "croconaw",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
    },
    {
      "id": "160",
      "nombre": "feraligatr",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
    },
    {
      "id": "161",
      "nombre": "sentret",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
    },
    {
      "id": "162",
      "nombre": "furret",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
    },
    {
      "id": "163",
      "nombre": "hoothoot",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
    },
    {
      "id": "164",
      "nombre": "noctowl",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
    },
    {
      "id": "165",
      "nombre": "ledyba",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
    },
    {
      "id": "166",
      "nombre": "ledian",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
    },
    {
      "id": "167",
      "nombre": "spinarak",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
    },
    {
      "id": "168",
      "nombre": "ariados",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
    },
    {
      "id": "169",
      "nombre": "crobat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
    },
    {
      "id": "170",
      "nombre": "chinchou",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
    },
    {
      "id": "171",
      "nombre": "lanturn",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
    },
    {
      "id": "172",
      "nombre": "pichu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
    },
    {
      "id": "173",
      "nombre": "cleffa",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
    },
    {
      "id": "174",
      "nombre": "igglybuff",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
    },
    {
      "id": "175",
      "nombre": "togepi",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
    },
    {
      "id": "176",
      "nombre": "togetic",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
    },
    {
      "id": "177",
      "nombre": "natu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
    },
    {
      "id": "178",
      "nombre": "xatu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
    },
    {
      "id": "179",
      "nombre": "mareep",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
    },
    {
      "id": "180",
      "nombre": "flaaffy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
    },
    {
      "id": "181",
      "nombre": "ampharos",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
    },
    {
      "id": "182",
      "nombre": "bellossom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
    },
    {
      "id": "183",
      "nombre": "marill",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
    },
    {
      "id": "184",
      "nombre": "azumarill",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
    },
    {
      "id": "185",
      "nombre": "sudowoodo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
    },
    {
      "id": "186",
      "nombre": "politoed",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
    },
    {
      "id": "187",
      "nombre": "hoppip",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
    },
    {
      "id": "188",
      "nombre": "skiploom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
    },
    {
      "id": "189",
      "nombre": "jumpluff",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
    },
    {
      "id": "190",
      "nombre": "aipom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
    },
    {
      "id": "191",
      "nombre": "sunkern",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
    },
    {
      "id": "192",
      "nombre": "sunflora",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
    },
    {
      "id": "193",
      "nombre": "yanma",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
    },
    {
      "id": "194",
      "nombre": "wooper",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
    },
    {
      "id": "195",
      "nombre": "quagsire",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
    },
    {
      "id": "196",
      "nombre": "espeon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
    },
    {
      "id": "197",
      "nombre": "umbreon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
    },
    {
      "id": "198",
      "nombre": "murkrow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
    },
    {
      "id": "199",
      "nombre": "slowking",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
    },
    {
      "id": "200",
      "nombre": "misdreavus",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
    },
    {
      "id": "201",
      "nombre": "unown",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
    },
    {
      "id": "202",
      "nombre": "wobbuffet",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
    },
    {
      "id": "203",
      "nombre": "girafarig",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
    },
    {
      "id": "204",
      "nombre": "pineco",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
    },
    {
      "id": "205",
      "nombre": "forretress",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
    },
    {
      "id": "206",
      "nombre": "dunsparce",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
    },
    {
      "id": "207",
      "nombre": "gligar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
    },
    {
      "id": "208",
      "nombre": "steelix",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
    },
    {
      "id": "209",
      "nombre": "snubbull",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
    },
    {
      "id": "210",
      "nombre": "granbull",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
    },
    {
      "id": "211",
      "nombre": "qwilfish",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
    },
    {
      "id": "212",
      "nombre": "scizor",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
    },
    {
      "id": "213",
      "nombre": "shuckle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
    },
    {
      "id": "214",
      "nombre": "heracross",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
    },
    {
      "id": "215",
      "nombre": "sneasel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
    },
    {
      "id": "216",
      "nombre": "teddiursa",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
    },
    {
      "id": "217",
      "nombre": "ursaring",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
    },
    {
      "id": "218",
      "nombre": "slugma",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
    },
    {
      "id": "219",
      "nombre": "magcargo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
    },
    {
      "id": "220",
      "nombre": "swinub",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
    },
    {
      "id": "221",
      "nombre": "piloswine",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
    },
    {
      "id": "222",
      "nombre": "corsola",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
    },
    {
      "id": "223",
      "nombre": "remoraid",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
    },
    {
      "id": "224",
      "nombre": "octillery",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
    },
    {
      "id": "225",
      "nombre": "delibird",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
    },
    {
      "id": "226",
      "nombre": "mantine",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
    },
    {
      "id": "227",
      "nombre": "skarmory",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
    },
    {
      "id": "228",
      "nombre": "houndour",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
    },
    {
      "id": "229",
      "nombre": "houndoom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
    },
    {
      "id": "230",
      "nombre": "kingdra",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
    },
    {
      "id": "231",
      "nombre": "phanpy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
    },
    {
      "id": "232",
      "nombre": "donphan",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
    },
    {
      "id": "233",
      "nombre": "porygon2",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
    },
    {
      "id": "234",
      "nombre": "stantler",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
    },
    {
      "id": "235",
      "nombre": "smeargle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
    },
    {
      "id": "236",
      "nombre": "tyrogue",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
    },
    {
      "id": "237",
      "nombre": "hitmontop",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
    },
    {
      "id": "238",
      "nombre": "smoochum",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
    },
    {
      "id": "239",
      "nombre": "elekid",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
    },
    {
      "id": "240",
      "nombre": "magby",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
    },
    {
      "id": "241",
      "nombre": "miltank",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
    },
    {
      "id": "242",
      "nombre": "blissey",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
    },
    {
      "id": "243",
      "nombre": "raikou",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
    },
    {
      "id": "244",
      "nombre": "entei",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
    },
    {
      "id": "245",
      "nombre": "suicune",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
    },
    {
      "id": "246",
      "nombre": "larvitar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
    },
    {
      "id": "247",
      "nombre": "pupitar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
    },
    {
      "id": "248",
      "nombre": "tyranitar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
    },
    {
      "id": "249",
      "nombre": "lugia",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
    },
    {
      "id": "250",
      "nombre": "ho-oh",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
    },
    {
      "id": "251",
      "nombre": "celebi",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
    },
    {
      "id": "252",
      "nombre": "treecko",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
    },
    {
      "id": "253",
      "nombre": "grovyle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
    },
    {
      "id": "254",
      "nombre": "sceptile",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
    },
    {
      "id": "255",
      "nombre": "torchic",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
    },
    {
      "id": "256",
      "nombre": "combusken",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
    },
    {
      "id": "257",
      "nombre": "blaziken",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
    },
    {
      "id": "258",
      "nombre": "mudkip",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
    },
    {
      "id": "259",
      "nombre": "marshtomp",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
    },
    {
      "id": "260",
      "nombre": "swampert",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
    },
    {
      "id": "261",
      "nombre": "poochyena",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
    },
    {
      "id": "262",
      "nombre": "mightyena",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
    },
    {
      "id": "263",
      "nombre": "zigzagoon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
    },
    {
      "id": "264",
      "nombre": "linoone",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
    },
    {
      "id": "265",
      "nombre": "wurmple",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
    },
    {
      "id": "266",
      "nombre": "silcoon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
    },
    {
      "id": "267",
      "nombre": "beautifly",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
    },
    {
      "id": "268",
      "nombre": "cascoon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
    },
    {
      "id": "269",
      "nombre": "dustox",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
    },
    {
      "id": "270",
      "nombre": "lotad",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
    },
    {
      "id": "271",
      "nombre": "lombre",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
    },
    {
      "id": "272",
      "nombre": "ludicolo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
    },
    {
      "id": "273",
      "nombre": "seedot",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
    },
    {
      "id": "274",
      "nombre": "nuzleaf",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
    },
    {
      "id": "275",
      "nombre": "shiftry",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
    },
    {
      "id": "276",
      "nombre": "taillow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
    },
    {
      "id": "277",
      "nombre": "swellow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
    },
    {
      "id": "278",
      "nombre": "wingull",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
    },
    {
      "id": "279",
      "nombre": "pelipper",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
    },
    {
      "id": "280",
      "nombre": "ralts",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
    },
    {
      "id": "281",
      "nombre": "kirlia",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
    },
    {
      "id": "282",
      "nombre": "gardevoir",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
    },
    {
      "id": "283",
      "nombre": "surskit",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
    },
    {
      "id": "284",
      "nombre": "masquerain",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
    },
    {
      "id": "285",
      "nombre": "shroomish",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
    },
    {
      "id": "286",
      "nombre": "breloom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
    },
    {
      "id": "287",
      "nombre": "slakoth",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
    },
    {
      "id": "288",
      "nombre": "vigoroth",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
    },
    {
      "id": "289",
      "nombre": "slaking",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
    },
    {
      "id": "290",
      "nombre": "nincada",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
    },
    {
      "id": "291",
      "nombre": "ninjask",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
    },
    {
      "id": "292",
      "nombre": "shedinja",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
    },
    {
      "id": "293",
      "nombre": "whismur",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
    },
    {
      "id": "294",
      "nombre": "loudred",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
    },
    {
      "id": "295",
      "nombre": "exploud",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
    },
    {
      "id": "296",
      "nombre": "makuhita",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
    },
    {
      "id": "297",
      "nombre": "hariyama",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
    },
    {
      "id": "298",
      "nombre": "azurill",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
    },
    {
      "id": "299",
      "nombre": "nosepass",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
    },
    {
      "id": "300",
      "nombre": "skitty",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
    },
    {
      "id": "301",
      "nombre": "delcatty",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
    },
    {
      "id": "302",
      "nombre": "sableye",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
    },
    {
      "id": "303",
      "nombre": "mawile",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png"
    },
    {
      "id": "304",
      "nombre": "aron",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
    },
    {
      "id": "305",
      "nombre": "lairon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
    },
    {
      "id": "306",
      "nombre": "aggron",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
    },
    {
      "id": "307",
      "nombre": "meditite",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
    },
    {
      "id": "308",
      "nombre": "medicham",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
    },
    {
      "id": "309",
      "nombre": "electrike",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
    },
    {
      "id": "310",
      "nombre": "manectric",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
    },
    {
      "id": "311",
      "nombre": "plusle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
    },
    {
      "id": "312",
      "nombre": "minun",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
    },
    {
      "id": "313",
      "nombre": "volbeat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
    },
    {
      "id": "314",
      "nombre": "illumise",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
    },
    {
      "id": "315",
      "nombre": "roselia",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
    },
    {
      "id": "316",
      "nombre": "gulpin",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
    },
    {
      "id": "317",
      "nombre": "swalot",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
    },
    {
      "id": "318",
      "nombre": "carvanha",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
    },
    {
      "id": "319",
      "nombre": "sharpedo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
    },
    {
      "id": "320",
      "nombre": "wailmer",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
    },
    {
      "id": "321",
      "nombre": "wailord",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
    },
    {
      "id": "322",
      "nombre": "numel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
    },
    {
      "id": "323",
      "nombre": "camerupt",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
    },
    {
      "id": "324",
      "nombre": "torkoal",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
    },
    {
      "id": "325",
      "nombre": "spoink",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
    },
    {
      "id": "326",
      "nombre": "grumpig",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
    },
    {
      "id": "327",
      "nombre": "spinda",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
    },
    {
      "id": "328",
      "nombre": "trapinch",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
    },
    {
      "id": "329",
      "nombre": "vibrava",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
    },
    {
      "id": "330",
      "nombre": "flygon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
    },
    {
      "id": "331",
      "nombre": "cacnea",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
    },
    {
      "id": "332",
      "nombre": "cacturne",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
    },
    {
      "id": "333",
      "nombre": "swablu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
    },
    {
      "id": "334",
      "nombre": "altaria",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
    },
    {
      "id": "335",
      "nombre": "zangoose",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
    },
    {
      "id": "336",
      "nombre": "seviper",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
    },
    {
      "id": "337",
      "nombre": "lunatone",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
    },
    {
      "id": "338",
      "nombre": "solrock",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
    },
    {
      "id": "339",
      "nombre": "barboach",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
    },
    {
      "id": "340",
      "nombre": "whiscash",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
    },
    {
      "id": "341",
      "nombre": "corphish",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
    },
    {
      "id": "342",
      "nombre": "crawdaunt",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
    },
    {
      "id": "343",
      "nombre": "baltoy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
    },
    {
      "id": "344",
      "nombre": "claydol",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
    },
    {
      "id": "345",
      "nombre": "lileep",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
    },
    {
      "id": "346",
      "nombre": "cradily",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
    },
    {
      "id": "347",
      "nombre": "anorith",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
    },
    {
      "id": "348",
      "nombre": "armaldo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
    },
    {
      "id": "349",
      "nombre": "feebas",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
    },
    {
      "id": "350",
      "nombre": "milotic",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
    },
    {
      "id": "351",
      "nombre": "castform",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
    },
    {
      "id": "352",
      "nombre": "kecleon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
    },
    {
      "id": "353",
      "nombre": "shuppet",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
    },
    {
      "id": "354",
      "nombre": "banette",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
    },
    {
      "id": "355",
      "nombre": "duskull",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
    },
    {
      "id": "356",
      "nombre": "dusclops",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
    },
    {
      "id": "357",
      "nombre": "tropius",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
    },
    {
      "id": "358",
      "nombre": "chimecho",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
    },
    {
      "id": "359",
      "nombre": "absol",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
    },
    {
      "id": "360",
      "nombre": "wynaut",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
    },
    {
      "id": "361",
      "nombre": "snorunt",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
    },
    {
      "id": "362",
      "nombre": "glalie",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
    },
    {
      "id": "363",
      "nombre": "spheal",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
    },
    {
      "id": "364",
      "nombre": "sealeo",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
    },
    {
      "id": "365",
      "nombre": "walrein",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
    },
    {
      "id": "366",
      "nombre": "clamperl",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
    },
    {
      "id": "367",
      "nombre": "huntail",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
    },
    {
      "id": "368",
      "nombre": "gorebyss",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
    },
    {
      "id": "369",
      "nombre": "relicanth",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
    },
    {
      "id": "370",
      "nombre": "luvdisc",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
    },
    {
      "id": "371",
      "nombre": "bagon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
    },
    {
      "id": "372",
      "nombre": "shelgon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
    },
    {
      "id": "373",
      "nombre": "salamence",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png"
    },
    {
      "id": "374",
      "nombre": "beldum",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
    },
    {
      "id": "375",
      "nombre": "metang",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
    },
    {
      "id": "376",
      "nombre": "metagross",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
    },
    {
      "id": "377",
      "nombre": "regirock",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
    },
    {
      "id": "378",
      "nombre": "regice",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
    },
    {
      "id": "379",
      "nombre": "registeel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
    },
    {
      "id": "380",
      "nombre": "latias",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png"
    },
    {
      "id": "381",
      "nombre": "latios",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png"
    },
    {
      "id": "382",
      "nombre": "kyogre",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
    },
    {
      "id": "383",
      "nombre": "groudon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
    },
    {
      "id": "384",
      "nombre": "rayquaza",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
    },
    {
      "id": "385",
      "nombre": "jirachi",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
    },
    {
      "id": "386",
      "nombre": "deoxys-normal",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
    },
    {
      "id": "387",
      "nombre": "turtwig",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
    },
    {
      "id": "388",
      "nombre": "grotle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
    },
    {
      "id": "389",
      "nombre": "torterra",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
    },
    {
      "id": "390",
      "nombre": "chimchar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
    },
    {
      "id": "391",
      "nombre": "monferno",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
    },
    {
      "id": "392",
      "nombre": "infernape",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
    },
    {
      "id": "393",
      "nombre": "piplup",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
    },
    {
      "id": "394",
      "nombre": "prinplup",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
    },
    {
      "id": "395",
      "nombre": "empoleon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
    },
    {
      "id": "396",
      "nombre": "starly",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
    },
    {
      "id": "397",
      "nombre": "staravia",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
    },
    {
      "id": "398",
      "nombre": "staraptor",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
    },
    {
      "id": "399",
      "nombre": "bidoof",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
    },
    {
      "id": "400",
      "nombre": "bibarel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
    },
    {
      "id": "401",
      "nombre": "kricketot",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
    },
    {
      "id": "402",
      "nombre": "kricketune",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
    },
    {
      "id": "403",
      "nombre": "shinx",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
    },
    {
      "id": "404",
      "nombre": "luxio",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
    },
    {
      "id": "405",
      "nombre": "luxray",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
    },
    {
      "id": "406",
      "nombre": "budew",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
    },
    {
      "id": "407",
      "nombre": "roserade",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
    },
    {
      "id": "408",
      "nombre": "cranidos",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
    },
    {
      "id": "409",
      "nombre": "rampardos",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
    },
    {
      "id": "410",
      "nombre": "shieldon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
    },
    {
      "id": "411",
      "nombre": "bastiodon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
    },
    {
      "id": "412",
      "nombre": "burmy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
    },
    {
      "id": "413",
      "nombre": "wormadam-plant",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
    },
    {
      "id": "414",
      "nombre": "mothim",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
    },
    {
      "id": "415",
      "nombre": "combee",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
    },
    {
      "id": "416",
      "nombre": "vespiquen",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
    },
    {
      "id": "417",
      "nombre": "pachirisu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
    },
    {
      "id": "418",
      "nombre": "buizel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
    },
    {
      "id": "419",
      "nombre": "floatzel",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
    },
    {
      "id": "420",
      "nombre": "cherubi",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
    },
    {
      "id": "421",
      "nombre": "cherrim",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
    },
    {
      "id": "422",
      "nombre": "shellos",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
    },
    {
      "id": "423",
      "nombre": "gastrodon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
    },
    {
      "id": "424",
      "nombre": "ambipom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
    },
    {
      "id": "425",
      "nombre": "drifloon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
    },
    {
      "id": "426",
      "nombre": "drifblim",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
    },
    {
      "id": "427",
      "nombre": "buneary",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
    },
    {
      "id": "428",
      "nombre": "lopunny",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
    },
    {
      "id": "429",
      "nombre": "mismagius",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
    },
    {
      "id": "430",
      "nombre": "honchkrow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
    },
    {
      "id": "431",
      "nombre": "glameow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
    },
    {
      "id": "432",
      "nombre": "purugly",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
    },
    {
      "id": "433",
      "nombre": "chingling",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
    },
    {
      "id": "434",
      "nombre": "stunky",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
    },
    {
      "id": "435",
      "nombre": "skuntank",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
    },
    {
      "id": "436",
      "nombre": "bronzor",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
    },
    {
      "id": "437",
      "nombre": "bronzong",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
    },
    {
      "id": "438",
      "nombre": "bonsly",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
    },
    {
      "id": "439",
      "nombre": "mime-jr",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
    },
    {
      "id": "440",
      "nombre": "happiny",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
    },
    {
      "id": "441",
      "nombre": "chatot",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
    },
    {
      "id": "442",
      "nombre": "spiritomb",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
    },
    {
      "id": "443",
      "nombre": "gible",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
    },
    {
      "id": "444",
      "nombre": "gabite",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
    },
    {
      "id": "445",
      "nombre": "garchomp",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
    },
    {
      "id": "446",
      "nombre": "munchlax",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
    },
    {
      "id": "447",
      "nombre": "riolu",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
    },
    {
      "id": "448",
      "nombre": "lucario",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
    },
    {
      "id": "449",
      "nombre": "hippopotas",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
    },
    {
      "id": "450",
      "nombre": "hippowdon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
    },
    {
      "id": "451",
      "nombre": "skorupi",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
    },
    {
      "id": "452",
      "nombre": "drapion",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
    },
    {
      "id": "453",
      "nombre": "croagunk",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
    },
    {
      "id": "454",
      "nombre": "toxicroak",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
    },
    {
      "id": "455",
      "nombre": "carnivine",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
    },
    {
      "id": "456",
      "nombre": "finneon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
    },
    {
      "id": "457",
      "nombre": "lumineon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
    },
    {
      "id": "458",
      "nombre": "mantyke",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
    },
    {
      "id": "459",
      "nombre": "snover",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
    },
    {
      "id": "460",
      "nombre": "abomasnow",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
    },
    {
      "id": "461",
      "nombre": "weavile",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
    },
    {
      "id": "462",
      "nombre": "magnezone",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
    },
    {
      "id": "463",
      "nombre": "lickilicky",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
    },
    {
      "id": "464",
      "nombre": "rhyperior",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
    },
    {
      "id": "465",
      "nombre": "tangrowth",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
    },
    {
      "id": "466",
      "nombre": "electivire",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
    },
    {
      "id": "467",
      "nombre": "magmortar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
    },
    {
      "id": "468",
      "nombre": "togekiss",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
    },
    {
      "id": "469",
      "nombre": "yanmega",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
    },
    {
      "id": "470",
      "nombre": "leafeon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
    },
    {
      "id": "471",
      "nombre": "glaceon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
    },
    {
      "id": "472",
      "nombre": "gliscor",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
    },
    {
      "id": "473",
      "nombre": "mamoswine",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
    },
    {
      "id": "474",
      "nombre": "porygon-z",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
    },
    {
      "id": "475",
      "nombre": "gallade",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
    },
    {
      "id": "476",
      "nombre": "probopass",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
    },
    {
      "id": "477",
      "nombre": "dusknoir",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
    },
    {
      "id": "478",
      "nombre": "froslass",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
    },
    {
      "id": "479",
      "nombre": "rotom",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
    },
    {
      "id": "480",
      "nombre": "uxie",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
    },
    {
      "id": "481",
      "nombre": "mesprit",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
    },
    {
      "id": "482",
      "nombre": "azelf",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
    },
    {
      "id": "483",
      "nombre": "dialga",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
    },
    {
      "id": "484",
      "nombre": "palkia",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
    },
    {
      "id": "485",
      "nombre": "heatran",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
    },
    {
      "id": "486",
      "nombre": "regigigas",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
    },
    {
      "id": "487",
      "nombre": "giratina-altered",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
    },
    {
      "id": "488",
      "nombre": "cresselia",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
    },
    {
      "id": "489",
      "nombre": "phione",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
    },
    {
      "id": "490",
      "nombre": "manaphy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
    },
    {
      "id": "491",
      "nombre": "darkrai",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
    },
    {
      "id": "492",
      "nombre": "shaymin-land",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
    },
    {
      "id": "493",
      "nombre": "arceus",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
    },
    {
      "id": "494",
      "nombre": "victini",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
    },
    {
      "id": "495",
      "nombre": "snivy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
    },
    {
      "id": "496",
      "nombre": "servine",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
    },
    {
      "id": "497",
      "nombre": "serperior",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
    },
    {
      "id": "498",
      "nombre": "tepig",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
    },
    {
      "id": "499",
      "nombre": "pignite",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
    },
    {
      "id": "500",
      "nombre": "emboar",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
    },
    {
      "id": "501",
      "nombre": "oshawott",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
    },
    {
      "id": "502",
      "nombre": "dewott",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
    },
    {
      "id": "503",
      "nombre": "samurott",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
    },
    {
      "id": "504",
      "nombre": "patrat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
    },
    {
      "id": "505",
      "nombre": "watchog",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
    },
    {
      "id": "506",
      "nombre": "lillipup",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
    },
    {
      "id": "507",
      "nombre": "herdier",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
    },
    {
      "id": "508",
      "nombre": "stoutland",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
    },
    {
      "id": "509",
      "nombre": "purrloin",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
    },
    {
      "id": "510",
      "nombre": "liepard",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
    },
    {
      "id": "511",
      "nombre": "pansage",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
    },
    {
      "id": "512",
      "nombre": "simisage",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
    },
    {
      "id": "513",
      "nombre": "pansear",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
    },
    {
      "id": "514",
      "nombre": "simisear",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
    },
    {
      "id": "515",
      "nombre": "panpour",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
    },
    {
      "id": "516",
      "nombre": "simipour",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
    },
    {
      "id": "517",
      "nombre": "munna",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
    },
    {
      "id": "518",
      "nombre": "musharna",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
    },
    {
      "id": "519",
      "nombre": "pidove",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
    },
    {
      "id": "520",
      "nombre": "tranquill",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
    },
    {
      "id": "521",
      "nombre": "unfezant",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
    },
    {
      "id": "522",
      "nombre": "blitzle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
    },
    {
      "id": "523",
      "nombre": "zebstrika",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
    },
    {
      "id": "524",
      "nombre": "roggenrola",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
    },
    {
      "id": "525",
      "nombre": "boldore",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
    },
    {
      "id": "526",
      "nombre": "gigalith",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
    },
    {
      "id": "527",
      "nombre": "woobat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
    },
    {
      "id": "528",
      "nombre": "swoobat",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
    },
    {
      "id": "529",
      "nombre": "drilbur",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
    },
    {
      "id": "530",
      "nombre": "excadrill",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
    },
    {
      "id": "531",
      "nombre": "audino",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
    },
    {
      "id": "532",
      "nombre": "timburr",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
    },
    {
      "id": "533",
      "nombre": "gurdurr",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
    },
    {
      "id": "534",
      "nombre": "conkeldurr",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
    },
    {
      "id": "535",
      "nombre": "tympole",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
    },
    {
      "id": "536",
      "nombre": "palpitoad",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
    },
    {
      "id": "537",
      "nombre": "seismitoad",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
    },
    {
      "id": "538",
      "nombre": "throh",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
    },
    {
      "id": "539",
      "nombre": "sawk",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
    },
    {
      "id": "540",
      "nombre": "sewaddle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
    },
    {
      "id": "541",
      "nombre": "swadloon",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
    },
    {
      "id": "542",
      "nombre": "leavanny",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
    },
    {
      "id": "543",
      "nombre": "venipede",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
    },
    {
      "id": "544",
      "nombre": "whirlipede",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
    },
    {
      "id": "545",
      "nombre": "scolipede",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
    },
    {
      "id": "546",
      "nombre": "cottonee",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
    },
    {
      "id": "547",
      "nombre": "whimsicott",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
    },
    {
      "id": "548",
      "nombre": "petilil",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
    },
    {
      "id": "549",
      "nombre": "lilligant",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
    },
    {
      "id": "550",
      "nombre": "basculin-red-striped",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
    },
    {
      "id": "551",
      "nombre": "sandile",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
    },
    {
      "id": "552",
      "nombre": "krokorok",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
    },
    {
      "id": "553",
      "nombre": "krookodile",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
    },
    {
      "id": "554",
      "nombre": "darumaka",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
    },
    {
      "id": "555",
      "nombre": "darmanitan-standard",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
    },
    {
      "id": "556",
      "nombre": "maractus",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
    },
    {
      "id": "557",
      "nombre": "dwebble",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
    },
    {
      "id": "558",
      "nombre": "crustle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
    },
    {
      "id": "559",
      "nombre": "scraggy",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
    },
    {
      "id": "560",
      "nombre": "scrafty",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
    },
    {
      "id": "561",
      "nombre": "sigilyph",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
    },
    {
      "id": "562",
      "nombre": "yamask",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
    },
    {
      "id": "563",
      "nombre": "cofagrigus",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
    },
    {
      "id": "564",
      "nombre": "tirtouga",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
    },
    {
      "id": "565",
      "nombre": "carracosta",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
    },
    {
      "id": "566",
      "nombre": "archen",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
    },
    {
      "id": "567",
      "nombre": "archeops",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
    },
    {
      "id": "568",
      "nombre": "trubbish",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
    },
    {
      "id": "569",
      "nombre": "garbodor",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
    },
    {
      "id": "570",
      "nombre": "zorua",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
    },
    {
      "id": "571",
      "nombre": "zoroark",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
    },
    {
      "id": "572",
      "nombre": "minccino",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
    },
    {
      "id": "573",
      "nombre": "cinccino",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
    },
    {
      "id": "574",
      "nombre": "gothita",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
    },
    {
      "id": "575",
      "nombre": "gothorita",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
    },
    {
      "id": "576",
      "nombre": "gothitelle",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
    },
    {
      "id": "577",
      "nombre": "solosis",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
    },
    {
      "id": "578",
      "nombre": "duosion",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
    },
    {
      "id": "579",
      "nombre": "reuniclus",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
    },
    {
      "id": "580",
      "nombre": "ducklett",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
    },
    {
      "id": "581",
      "nombre": "swanna",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
    },
    {
      "id": "582",
      "nombre": "vanillite",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
    },
    {
      "id": "583",
      "nombre": "vanillish",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
    },
    {
      "id": "584",
      "nombre": "vanilluxe",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
    },
    {
      "id": "585",
      "nombre": "deerling",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
    },
    {
      "id": "586",
      "nombre": "sawsbuck",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
    },
    {
      "id": "587",
      "nombre": "emolga",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
    },
    {
      "id": "588",
      "nombre": "karrablast",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
    },
    {
      "id": "589",
      "nombre": "escavalier",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
    },
    {
      "id": "590",
      "nombre": "foongus",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
    },
    {
      "id": "591",
      "nombre": "amoonguss",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
    },
    {
      "id": "592",
      "nombre": "frillish",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
    },
    {
      "id": "593",
      "nombre": "jellicent",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
    },
    {
      "id": "594",
      "nombre": "alomomola",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
    },
    {
      "id": "595",
      "nombre": "joltik",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
    },
    {
      "id": "596",
      "nombre": "galvantula",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
    },
    {
      "id": "597",
      "nombre": "ferroseed",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
    },
    {
      "id": "598",
      "nombre": "ferrothorn",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
    },
    {
      "id": "599",
      "nombre": "klink",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
    },
    {
      "id": "600",
      "nombre": "klang",
      "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
    }
  ]
    /*const pokes = [
      {
        id: "1",
        nombre: "bulbasaur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      },
      {
        id: "2",
        nombre: "ivysaur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
      },
      {
        id: "3",
        nombre: "venusaur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
      },
      {
        id: "4",
        nombre: "charmander",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      },
      {
        id: "5",
        nombre: "charmeleon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
      },
      {
        id: "6",
        nombre: "charizard",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
      },
      {
        id: "7",
        nombre: "squirtle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
      },
      {
        id: "8",
        nombre: "wartortle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
      },
      {
        id: "9",
        nombre: "blastoise",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
      },
      {
        id: "10",
        nombre: "caterpie",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png"
      },
      {
        id: "11",
        nombre: "metapod",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png"
      },
      {
        id: "12",
        nombre: "butterfree",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png"
      },
      {
        id: "13",
        nombre: "weedle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png"
      },
      {
        id: "14",
        nombre: "kakuna",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png"
      },
      {
        id: "15",
        nombre: "beedrill",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
      },
      {
        id: "16",
        nombre: "pidgey",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
      },
      {
        id: "17",
        nombre: "pidgeotto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png"
      },
      {
        id: "18",
        nombre: "pidgeot",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
      },
      {
        id: "19",
        nombre: "rattata",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
      },
      {
        id: "20",
        nombre: "raticate",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png"
      },
      {
        id: "21",
        nombre: "spearow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png"
      },
      {
        id: "22",
        nombre: "fearow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png"
      },
      {
        id: "23",
        nombre: "ekans",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png"
      },
      {
        id: "24",
        nombre: "arbok",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
      },
      {
        id: "25",
        nombre: "pikachu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
      },
      {
        id: "26",
        nombre: "raichu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
      },
      {
        id: "27",
        nombre: "sandshrew",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png"
      },
      {
        id: "28",
        nombre: "sandslash",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png"
      },
      {
        id: "29",
        nombre: "nidoran-f",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png"
      },
      {
        id: "30",
        nombre: "nidorina",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png"
      },
      {
        id: "31",
        nombre: "nidoqueen",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png"
      },
      {
        id: "32",
        nombre: "nidoran-m",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png"
      },
      {
        id: "33",
        nombre: "nidorino",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png"
      },
      {
        id: "34",
        nombre: "nidoking",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png"
      },
      {
        id: "35",
        nombre: "clefairy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
      },
      {
        id: "36",
        nombre: "clefable",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
      },
      {
        id: "37",
        nombre: "vulpix",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png"
      },
      {
        id: "38",
        nombre: "ninetales",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
      },
      {
        id: "39",
        nombre: "jigglypuff",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
      },
      {
        id: "40",
        nombre: "wigglytuff",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png"
      },
      {
        id: "41",
        nombre: "zubat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png"
      },
      {
        id: "42",
        nombre: "golbat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png"
      },
      {
        id: "43",
        nombre: "oddish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png"
      },
      {
        id: "44",
        nombre: "gloom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png"
      },
      {
        id: "45",
        nombre: "vileplume",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png"
      },
      {
        id: "46",
        nombre: "paras",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png"
      },
      {
        id: "47",
        nombre: "parasect",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png"
      },
      {
        id: "48",
        nombre: "venonat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png"
      },
      {
        id: "49",
        nombre: "venomoth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
      },
      {
        id: "50",
        nombre: "diglett",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png"
      },
      {
        id: "51",
        nombre: "dugtrio",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png"
      },
      {
        id: "52",
        nombre: "meowth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png"
      },
      {
        id: "53",
        nombre: "persian",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png"
      },
      {
        id: "54",
        nombre: "psyduck",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
      },
      {
        id: "55",
        nombre: "golduck",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png"
      },
      {
        id: "56",
        nombre: "mankey",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png"
      },
      {
        id: "57",
        nombre: "primeape",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png"
      },
      {
        id: "58",
        nombre: "growlithe",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png"
      },
      {
        id: "59",
        nombre: "arcanine",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
      },
      {
        id: "60",
        nombre: "poliwag",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png"
      },
      {
        id: "61",
        nombre: "poliwhirl",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png"
      },
      {
        id: "62",
        nombre: "poliwrath",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png"
      },
      {
        id: "63",
        nombre: "abra",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png"
      },
      {
        id: "64",
        nombre: "kadabra",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png"
      },
      {
        id: "65",
        nombre: "alakazam",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
      },
      {
        id: "66",
        nombre: "machop",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png"
      },
      {
        id: "67",
        nombre: "machoke",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png"
      },
      {
        id: "68",
        nombre: "machamp",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
      },
      {
        id: "69",
        nombre: "bellsprout",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png"
      },
      {
        id: "70",
        nombre: "weepinbell",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png"
      },
      {
        id: "71",
        nombre: "victreebel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
      },
      {
        id: "72",
        nombre: "tentacool",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png"
      },
      {
        id: "73",
        nombre: "tentacruel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png"
      },
      {
        id: "74",
        nombre: "geodude",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png"
      },
      {
        id: "75",
        nombre: "graveler",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png"
      },
      {
        id: "76",
        nombre: "golem",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png"
      },
      {
        id: "77",
        nombre: "ponyta",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png"
      },
      {
        id: "78",
        nombre: "rapidash",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
      },
      {
        id: "79",
        nombre: "slowpoke",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png"
      },
      {
        id: "80",
        nombre: "slowbro",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
      },
      {
        id: "81",
        nombre: "magnemite",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png"
      },
      {
        id: "82",
        nombre: "magneton",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png"
      },
      {
        id: "83",
        nombre: "farfetchd",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png"
      },
      {
        id: "84",
        nombre: "doduo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png"
      },
      {
        id: "85",
        nombre: "dodrio",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png"
      },
      {
        id: "86",
        nombre: "seel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png"
      },
      {
        id: "87",
        nombre: "dewgong",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png"
      },
      {
        id: "88",
        nombre: "grimer",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png"
      },
      {
        id: "89",
        nombre: "muk",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png"
      },
      {
        id: "90",
        nombre: "shellder",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png"
      },
      {
        id: "91",
        nombre: "cloyster",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png"
      },
      {
        id: "92",
        nombre: "gastly",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png"
      },
      {
        id: "93",
        nombre: "haunter",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png"
      },
      {
        id: "94",
        nombre: "gengar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
      },
      {
        id: "95",
        nombre: "onix",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png"
      },
      {
        id: "96",
        nombre: "drowzee",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png"
      },
      {
        id: "97",
        nombre: "hypno",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png"
      },
      {
        id: "98",
        nombre: "krabby",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png"
      },
      {
        id: "99",
        nombre: "kingler",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png"
      },
      {
        id: "100",
        nombre: "voltorb",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png"
      },
      {
        id: "101",
        nombre: "electrode",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png"
      },
      {
        id: "102",
        nombre: "exeggcute",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png"
      },
      {
        id: "103",
        nombre: "exeggutor",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png"
      },
      {
        id: "104",
        nombre: "cubone",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
      },
      {
        id: "105",
        nombre: "marowak",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png"
      },
      {
        id: "106",
        nombre: "hitmonlee",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png"
      },
      {
        id: "107",
        nombre: "hitmonchan",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png"
      },
      {
        id: "108",
        nombre: "lickitung",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png"
      },
      {
        id: "109",
        nombre: "koffing",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png"
      },
      {
        id: "110",
        nombre: "weezing",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png"
      },
      {
        id: "111",
        nombre: "rhyhorn",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png"
      },
      {
        id: "112",
        nombre: "rhydon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png"
      },
      {
        id: "113",
        nombre: "chansey",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png"
      },
      {
        id: "114",
        nombre: "tangela",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png"
      },
      {
        id: "115",
        nombre: "kangaskhan",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
      },
      {
        id: "116",
        nombre: "horsea",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png"
      },
      {
        id: "117",
        nombre: "seadra",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png"
      },
      {
        id: "118",
        nombre: "goldeen",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png"
      },
      {
        id: "119",
        nombre: "seaking",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png"
      },
      {
        id: "120",
        nombre: "staryu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png"
      },
      {
        id: "121",
        nombre: "starmie",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
      },
      {
        id: "122",
        nombre: "mr-mime",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png"
      },
      {
        id: "123",
        nombre: "scyther",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png"
      },
      {
        id: "124",
        nombre: "jynx",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png"
      },
      {
        id: "125",
        nombre: "electabuzz",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png"
      },
      {
        id: "126",
        nombre: "magmar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png"
      },
      {
        id: "127",
        nombre: "pinsir",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
      },
      {
        id: "128",
        nombre: "tauros",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
      },
      {
        id: "129",
        nombre: "magikarp",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
      },
      {
        id: "130",
        nombre: "gyarados",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
      },
      {
        id: "131",
        nombre: "lapras",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png"
      },
      {
        id: "132",
        nombre: "ditto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
      },
      {
        id: "133",
        nombre: "eevee",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
      },
      {
        id: "134",
        nombre: "vaporeon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
      },
      {
        id: "135",
        nombre: "jolteon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
      },
      {
        id: "136",
        nombre: "flareon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
      },
      {
        id: "137",
        nombre: "porygon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png"
      },
      {
        id: "138",
        nombre: "omanyte",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png"
      },
      {
        id: "139",
        nombre: "omastar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png"
      },
      {
        id: "140",
        nombre: "kabuto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png"
      },
      {
        id: "141",
        nombre: "kabutops",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png"
      },
      {
        id: "142",
        nombre: "aerodactyl",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
      },
      {
        id: "143",
        nombre: "snorlax",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
      },
      {
        id: "144",
        nombre: "articuno",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
      },
      {
        id: "145",
        nombre: "zapdos",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png"
      },
      {
        id: "146",
        nombre: "moltres",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png"
      },
      {
        id: "147",
        nombre: "dratini",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png"
      },
      {
        id: "148",
        nombre: "dragonair",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png"
      },
      {
        id: "149",
        nombre: "dragonite",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
      },
      {
        id: "150",
        nombre: "mewtwo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
      },
      {
        id: "151",
        nombre: "mew",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
      },
      {
        id: "152",
        nombre: "chikorita",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
      },
      {
        id: "153",
        nombre: "bayleef",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png"
      },
      {
        id: "154",
        nombre: "meganium",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
      },
      {
        id: "155",
        nombre: "cyndaquil",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
      },
      {
        id: "156",
        nombre: "quilava",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png"
      },
      {
        id: "157",
        nombre: "typhlosion",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
      },
      {
        id: "158",
        nombre: "totodile",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
      },
      {
        id: "159",
        nombre: "croconaw",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png"
      },
      {
        id: "160",
        nombre: "feraligatr",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
      },
      {
        id: "161",
        nombre: "sentret",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png"
      },
      {
        id: "162",
        nombre: "furret",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png"
      },
      {
        id: "163",
        nombre: "hoothoot",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png"
      },
      {
        id: "164",
        nombre: "noctowl",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png"
      },
      {
        id: "165",
        nombre: "ledyba",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png"
      },
      {
        id: "166",
        nombre: "ledian",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png"
      },
      {
        id: "167",
        nombre: "spinarak",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png"
      },
      {
        id: "168",
        nombre: "ariados",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
      },
      {
        id: "169",
        nombre: "crobat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png"
      },
      {
        id: "170",
        nombre: "chinchou",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png"
      },
      {
        id: "171",
        nombre: "lanturn",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png"
      },
      {
        id: "172",
        nombre: "pichu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png"
      },
      {
        id: "173",
        nombre: "cleffa",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png"
      },
      {
        id: "174",
        nombre: "igglybuff",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png"
      },
      {
        id: "175",
        nombre: "togepi",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png"
      },
      {
        id: "176",
        nombre: "togetic",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png"
      },
      {
        id: "177",
        nombre: "natu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png"
      },
      {
        id: "178",
        nombre: "xatu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png"
      },
      {
        id: "179",
        nombre: "mareep",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png"
      },
      {
        id: "180",
        nombre: "flaaffy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png"
      },
      {
        id: "181",
        nombre: "ampharos",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
      },
      {
        id: "182",
        nombre: "bellossom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png"
      },
      {
        id: "183",
        nombre: "marill",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png"
      },
      {
        id: "184",
        nombre: "azumarill",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
      },
      {
        id: "185",
        nombre: "sudowoodo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png"
      },
      {
        id: "186",
        nombre: "politoed",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
      },
      {
        id: "187",
        nombre: "hoppip",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png"
      },
      {
        id: "188",
        nombre: "skiploom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png"
      },
      {
        id: "189",
        nombre: "jumpluff",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png"
      },
      {
        id: "190",
        nombre: "aipom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png"
      },
      {
        id: "191",
        nombre: "sunkern",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png"
      },
      {
        id: "192",
        nombre: "sunflora",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png"
      },
      {
        id: "193",
        nombre: "yanma",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png"
      },
      {
        id: "194",
        nombre: "wooper",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/194.png"
      },
      {
        id: "195",
        nombre: "quagsire",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png"
      },
      {
        id: "196",
        nombre: "espeon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
      },
      {
        id: "197",
        nombre: "umbreon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
      },
      {
        id: "198",
        nombre: "murkrow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png"
      },
      {
        id: "199",
        nombre: "slowking",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
      },
      {
        id: "200",
        nombre: "misdreavus",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png"
      },
      {
        id: "201",
        nombre: "unown",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
      },
      {
        id: "202",
        nombre: "wobbuffet",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png"
      },
      {
        id: "203",
        nombre: "girafarig",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png"
      },
      {
        id: "204",
        nombre: "pineco",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png"
      },
      {
        id: "205",
        nombre: "forretress",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
      },
      {
        id: "206",
        nombre: "dunsparce",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png"
      },
      {
        id: "207",
        nombre: "gligar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png"
      },
      {
        id: "208",
        nombre: "steelix",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
      },
      {
        id: "209",
        nombre: "snubbull",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png"
      },
      {
        id: "210",
        nombre: "granbull",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png"
      },
      {
        id: "211",
        nombre: "qwilfish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png"
      },
      {
        id: "212",
        nombre: "scizor",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
      },
      {
        id: "213",
        nombre: "shuckle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
      },
      {
        id: "214",
        nombre: "heracross",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
      },
      {
        id: "215",
        nombre: "sneasel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png"
      },
      {
        id: "216",
        nombre: "teddiursa",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png"
      },
      {
        id: "217",
        nombre: "ursaring",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png"
      },
      {
        id: "218",
        nombre: "slugma",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png"
      },
      {
        id: "219",
        nombre: "magcargo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png"
      },
      {
        id: "220",
        nombre: "swinub",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png"
      },
      {
        id: "221",
        nombre: "piloswine",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png"
      },
      {
        id: "222",
        nombre: "corsola",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png"
      },
      {
        id: "223",
        nombre: "remoraid",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png"
      },
      {
        id: "224",
        nombre: "octillery",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png"
      },
      {
        id: "225",
        nombre: "delibird",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png"
      },
      {
        id: "226",
        nombre: "mantine",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png"
      },
      {
        id: "227",
        nombre: "skarmory",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
      },
      {
        id: "228",
        nombre: "houndour",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png"
      },
      {
        id: "229",
        nombre: "houndoom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
      },
      {
        id: "230",
        nombre: "kingdra",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png"
      },
      {
        id: "231",
        nombre: "phanpy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png"
      },
      {
        id: "232",
        nombre: "donphan",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png"
      },
      {
        id: "233",
        nombre: "porygon2",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png"
      },
      {
        id: "234",
        nombre: "stantler",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png"
      },
      {
        id: "235",
        nombre: "smeargle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png"
      },
      {
        id: "236",
        nombre: "tyrogue",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png"
      },
      {
        id: "237",
        nombre: "hitmontop",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png"
      },
      {
        id: "238",
        nombre: "smoochum",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png"
      },
      {
        id: "239",
        nombre: "elekid",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png"
      },
      {
        id: "240",
        nombre: "magby",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png"
      },
      {
        id: "241",
        nombre: "miltank",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png"
      },
      {
        id: "242",
        nombre: "blissey",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png"
      },
      {
        id: "243",
        nombre: "raikou",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
      },
      {
        id: "244",
        nombre: "entei",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
      },
      {
        id: "245",
        nombre: "suicune",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
      },
      {
        id: "246",
        nombre: "larvitar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png"
      },
      {
        id: "247",
        nombre: "pupitar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png"
      },
      {
        id: "248",
        nombre: "tyranitar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
      },
      {
        id: "249",
        nombre: "lugia",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
      },
      {
        id: "250",
        nombre: "ho-oh",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
      },
      {
        id: "251",
        nombre: "celebi",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png"
      },
      {
        id: "252",
        nombre: "treecko",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png"
      },
      {
        id: "253",
        nombre: "grovyle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png"
      },
      {
        id: "254",
        nombre: "sceptile",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png"
      },
      {
        id: "255",
        nombre: "torchic",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png"
      },
      {
        id: "256",
        nombre: "combusken",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png"
      },
      {
        id: "257",
        nombre: "blaziken",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png"
      },
      {
        id: "258",
        nombre: "mudkip",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png"
      },
      {
        id: "259",
        nombre: "marshtomp",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png"
      },
      {
        id: "260",
        nombre: "swampert",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png"
      },
      {
        id: "261",
        nombre: "poochyena",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png"
      },
      {
        id: "262",
        nombre: "mightyena",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png"
      },
      {
        id: "263",
        nombre: "zigzagoon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png"
      },
      {
        id: "264",
        nombre: "linoone",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png"
      },
      {
        id: "265",
        nombre: "wurmple",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png"
      },
      {
        id: "266",
        nombre: "silcoon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png"
      },
      {
        id: "267",
        nombre: "beautifly",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png"
      },
      {
        id: "268",
        nombre: "cascoon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png"
      },
      {
        id: "269",
        nombre: "dustox",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png"
      },
      {
        id: "270",
        nombre: "lotad",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png"
      },
      {
        id: "271",
        nombre: "lombre",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png"
      },
      {
        id: "272",
        nombre: "ludicolo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png"
      },
      {
        id: "273",
        nombre: "seedot",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png"
      },
      {
        id: "274",
        nombre: "nuzleaf",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png"
      },
      {
        id: "275",
        nombre: "shiftry",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png"
      },
      {
        id: "276",
        nombre: "taillow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png"
      },
      {
        id: "277",
        nombre: "swellow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png"
      },
      {
        id: "278",
        nombre: "wingull",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png"
      },
      {
        id: "279",
        nombre: "pelipper",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
      },
      {
        id: "280",
        nombre: "ralts",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png"
      },
      {
        id: "281",
        nombre: "kirlia",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png"
      },
      {
        id: "282",
        nombre: "gardevoir",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
      },
      {
        id: "283",
        nombre: "surskit",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png"
      },
      {
        id: "284",
        nombre: "masquerain",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png"
      },
      {
        id: "285",
        nombre: "shroomish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png"
      },
      {
        id: "286",
        nombre: "breloom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png"
      },
      {
        id: "287",
        nombre: "slakoth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png"
      },
      {
        id: "288",
        nombre: "vigoroth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png"
      },
      {
        id: "289",
        nombre: "slaking",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png"
      },
      {
        id: "290",
        nombre: "nincada",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png"
      },
      {
        id: "291",
        nombre: "ninjask",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png"
      },
      {
        id: "292",
        nombre: "shedinja",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png"
      },
      {
        id: "293",
        nombre: "whismur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png"
      },
      {
        id: "294",
        nombre: "loudred",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png"
      },
      {
        id: "295",
        nombre: "exploud",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png"
      },
      {
        id: "296",
        nombre: "makuhita",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png"
      },
      {
        id: "297",
        nombre: "hariyama",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png"
      },
      {
        id: "298",
        nombre: "azurill",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png"
      },
      {
        id: "299",
        nombre: "nosepass",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png"
      },
      {
        id: "300",
        nombre: "skitty",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png"
      },
      {
        id: "301",
        nombre: "delcatty",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png"
      },
      {
        id: "302",
        nombre: "sableye",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
      },
      {
        id: "303",
        nombre: "mawile",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png"
      },
      {
        id: "304",
        nombre: "aron",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png"
      },
      {
        id: "305",
        nombre: "lairon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png"
      },
      {
        id: "306",
        nombre: "aggron",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
      },
      {
        id: "307",
        nombre: "meditite",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png"
      },
      {
        id: "308",
        nombre: "medicham",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
      },
      {
        id: "309",
        nombre: "electrike",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png"
      },
      {
        id: "310",
        nombre: "manectric",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
      },
      {
        id: "311",
        nombre: "plusle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png"
      },
      {
        id: "312",
        nombre: "minun",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png"
      },
      {
        id: "313",
        nombre: "volbeat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png"
      },
      {
        id: "314",
        nombre: "illumise",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png"
      },
      {
        id: "315",
        nombre: "roselia",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png"
      },
      {
        id: "316",
        nombre: "gulpin",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png"
      },
      {
        id: "317",
        nombre: "swalot",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png"
      },
      {
        id: "318",
        nombre: "carvanha",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png"
      },
      {
        id: "319",
        nombre: "sharpedo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
      },
      {
        id: "320",
        nombre: "wailmer",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png"
      },
      {
        id: "321",
        nombre: "wailord",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png"
      },
      {
        id: "322",
        nombre: "numel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png"
      },
      {
        id: "323",
        nombre: "camerupt",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
      },
      {
        id: "324",
        nombre: "torkoal",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
      },
      {
        id: "325",
        nombre: "spoink",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png"
      },
      {
        id: "326",
        nombre: "grumpig",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png"
      },
      {
        id: "327",
        nombre: "spinda",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png"
      },
      {
        id: "328",
        nombre: "trapinch",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png"
      },
      {
        id: "329",
        nombre: "vibrava",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png"
      },
      {
        id: "330",
        nombre: "flygon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png"
      },
      {
        id: "331",
        nombre: "cacnea",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png"
      },
      {
        id: "332",
        nombre: "cacturne",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png"
      },
      {
        id: "333",
        nombre: "swablu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png"
      },
      {
        id: "334",
        nombre: "altaria",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
      },
      {
        id: "335",
        nombre: "zangoose",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png"
      },
      {
        id: "336",
        nombre: "seviper",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png"
      },
      {
        id: "337",
        nombre: "lunatone",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png"
      },
      {
        id: "338",
        nombre: "solrock",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png"
      },
      {
        id: "339",
        nombre: "barboach",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png"
      },
      {
        id: "340",
        nombre: "whiscash",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png"
      },
      {
        id: "341",
        nombre: "corphish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png"
      },
      {
        id: "342",
        nombre: "crawdaunt",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png"
      },
      {
        id: "343",
        nombre: "baltoy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png"
      },
      {
        id: "344",
        nombre: "claydol",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png"
      },
      {
        id: "345",
        nombre: "lileep",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png"
      },
      {
        id: "346",
        nombre: "cradily",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png"
      },
      {
        id: "347",
        nombre: "anorith",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png"
      },
      {
        id: "348",
        nombre: "armaldo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png"
      },
      {
        id: "349",
        nombre: "feebas",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png"
      },
      {
        id: "350",
        nombre: "milotic",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
      },
      {
        id: "351",
        nombre: "castform",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
      },
      {
        id: "352",
        nombre: "kecleon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png"
      },
      {
        id: "353",
        nombre: "shuppet",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png"
      },
      {
        id: "354",
        nombre: "banette",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
      },
      {
        id: "355",
        nombre: "duskull",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png"
      },
      {
        id: "356",
        nombre: "dusclops",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png"
      },
      {
        id: "357",
        nombre: "tropius",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png"
      },
      {
        id: "358",
        nombre: "chimecho",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
      },
      {
        id: "359",
        nombre: "absol",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
      },
      {
        id: "360",
        nombre: "wynaut",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png"
      },
      {
        id: "361",
        nombre: "snorunt",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png"
      },
      {
        id: "362",
        nombre: "glalie",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
      },
      {
        id: "363",
        nombre: "spheal",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png"
      },
      {
        id: "364",
        nombre: "sealeo",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png"
      },
      {
        id: "365",
        nombre: "walrein",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png"
      },
      {
        id: "366",
        nombre: "clamperl",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png"
      },
      {
        id: "367",
        nombre: "huntail",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png"
      },
      {
        id: "368",
        nombre: "gorebyss",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png"
      },
      {
        id: "369",
        nombre: "relicanth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png"
      },
      {
        id: "370",
        nombre: "luvdisc",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png"
      },
      {
        id: "371",
        nombre: "bagon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png"
      },
      {
        id: "372",
        nombre: "shelgon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png"
      },
      {
        id: "373",
        nombre: "salamence",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png"
      },
      {
        id: "374",
        nombre: "beldum",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png"
      },
      {
        id: "375",
        nombre: "metang",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png"
      },
      {
        id: "376",
        nombre: "metagross",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png"
      },
      {
        id: "377",
        nombre: "regirock",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png"
      },
      {
        id: "378",
        nombre: "regice",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png"
      },
      {
        id: "379",
        nombre: "registeel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png"
      },
      {
        id: "380",
        nombre: "latias",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png"
      },
      {
        id: "381",
        nombre: "latios",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png"
      },
      {
        id: "382",
        nombre: "kyogre",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png"
      },
      {
        id: "383",
        nombre: "groudon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png"
      },
      {
        id: "384",
        nombre: "rayquaza",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png"
      },
      {
        id: "385",
        nombre: "jirachi",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
      },
      {
        id: "386",
        nombre: "deoxys-normal",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png"
      },
      {
        id: "387",
        nombre: "turtwig",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png"
      },
      {
        id: "388",
        nombre: "grotle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png"
      },
      {
        id: "389",
        nombre: "torterra",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
      },
      {
        id: "390",
        nombre: "chimchar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png"
      },
      {
        id: "391",
        nombre: "monferno",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png"
      },
      {
        id: "392",
        nombre: "infernape",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
      },
      {
        id: "393",
        nombre: "piplup",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png"
      },
      {
        id: "394",
        nombre: "prinplup",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png"
      },
      {
        id: "395",
        nombre: "empoleon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
      },
      {
        id: "396",
        nombre: "starly",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png"
      },
      {
        id: "397",
        nombre: "staravia",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png"
      },
      {
        id: "398",
        nombre: "staraptor",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png"
      },
      {
        id: "399",
        nombre: "bidoof",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png"
      },
      {
        id: "400",
        nombre: "bibarel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png"
      },
      {
        id: "401",
        nombre: "kricketot",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png"
      },
      {
        id: "402",
        nombre: "kricketune",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png"
      },
      {
        id: "403",
        nombre: "shinx",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png"
      },
      {
        id: "404",
        nombre: "luxio",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
      },
      {
        id: "405",
        nombre: "luxray",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
      },
      {
        id: "406",
        nombre: "budew",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png"
      },
      {
        id: "407",
        nombre: "roserade",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
      },
      {
        id: "408",
        nombre: "cranidos",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png"
      },
      {
        id: "409",
        nombre: "rampardos",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
      },
      {
        id: "410",
        nombre: "shieldon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png"
      },
      {
        id: "411",
        nombre: "bastiodon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
      },
      {
        id: "412",
        nombre: "burmy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png"
      },
      {
        id: "413",
        nombre: "wormadam-plant",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png"
      },
      {
        id: "414",
        nombre: "mothim",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png"
      },
      {
        id: "415",
        nombre: "combee",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png"
      },
      {
        id: "416",
        nombre: "vespiquen",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png"
      },
      {
        id: "417",
        nombre: "pachirisu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png"
      },
      {
        id: "418",
        nombre: "buizel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png"
      },
      {
        id: "419",
        nombre: "floatzel",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png"
      },
      {
        id: "420",
        nombre: "cherubi",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png"
      },
      {
        id: "421",
        nombre: "cherrim",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png"
      },
      {
        id: "422",
        nombre: "shellos",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png"
      },
      {
        id: "423",
        nombre: "gastrodon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png"
      },
      {
        id: "424",
        nombre: "ambipom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png"
      },
      {
        id: "425",
        nombre: "drifloon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png"
      },
      {
        id: "426",
        nombre: "drifblim",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png"
      },
      {
        id: "427",
        nombre: "buneary",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png"
      },
      {
        id: "428",
        nombre: "lopunny",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
      },
      {
        id: "429",
        nombre: "mismagius",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png"
      },
      {
        id: "430",
        nombre: "honchkrow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png"
      },
      {
        id: "431",
        nombre: "glameow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png"
      },
      {
        id: "432",
        nombre: "purugly",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png"
      },
      {
        id: "433",
        nombre: "chingling",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png"
      },
      {
        id: "434",
        nombre: "stunky",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png"
      },
      {
        id: "435",
        nombre: "skuntank",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png"
      },
      {
        id: "436",
        nombre: "bronzor",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png"
      },
      {
        id: "437",
        nombre: "bronzong",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png"
      },
      {
        id: "438",
        nombre: "bonsly",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png"
      },
      {
        id: "439",
        nombre: "mime-jr",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png"
      },
      {
        id: "440",
        nombre: "happiny",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png"
      },
      {
        id: "441",
        nombre: "chatot",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png"
      },
      {
        id: "442",
        nombre: "spiritomb",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
      },
      {
        id: "443",
        nombre: "gible",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png"
      },
      {
        id: "444",
        nombre: "gabite",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png"
      },
      {
        id: "445",
        nombre: "garchomp",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
      },
      {
        id: "446",
        nombre: "munchlax",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png"
      },
      {
        id: "447",
        nombre: "riolu",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png"
      },
      {
        id: "448",
        nombre: "lucario",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
      },
      {
        id: "449",
        nombre: "hippopotas",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png"
      },
      {
        id: "450",
        nombre: "hippowdon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
      },
      {
        id: "451",
        nombre: "skorupi",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png"
      },
      {
        id: "452",
        nombre: "drapion",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png"
      },
      {
        id: "453",
        nombre: "croagunk",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png"
      },
      {
        id: "454",
        nombre: "toxicroak",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
      },
      {
        id: "455",
        nombre: "carnivine",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png"
      },
      {
        id: "456",
        nombre: "finneon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png"
      },
      {
        id: "457",
        nombre: "lumineon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png"
      },
      {
        id: "458",
        nombre: "mantyke",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png"
      },
      {
        id: "459",
        nombre: "snover",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png"
      },
      {
        id: "460",
        nombre: "abomasnow",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
      },
      {
        id: "461",
        nombre: "weavile",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
      },
      {
        id: "462",
        nombre: "magnezone",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png"
      },
      {
        id: "463",
        nombre: "lickilicky",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png"
      },
      {
        id: "464",
        nombre: "rhyperior",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
      },
      {
        id: "465",
        nombre: "tangrowth",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png"
      },
      {
        id: "466",
        nombre: "electivire",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png"
      },
      {
        id: "467",
        nombre: "magmortar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png"
      },
      {
        id: "468",
        nombre: "togekiss",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png"
      },
      {
        id: "469",
        nombre: "yanmega",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png"
      },
      {
        id: "470",
        nombre: "leafeon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
      },
      {
        id: "471",
        nombre: "glaceon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
      },
      {
        id: "472",
        nombre: "gliscor",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
      },
      {
        id: "473",
        nombre: "mamoswine",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
      },
      {
        id: "474",
        nombre: "porygon-z",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png"
      },
      {
        id: "475",
        nombre: "gallade",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
      },
      {
        id: "476",
        nombre: "probopass",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png"
      },
      {
        id: "477",
        nombre: "dusknoir",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png"
      },
      {
        id: "478",
        nombre: "froslass",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
      },
      {
        id: "479",
        nombre: "rotom",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
      },
      {
        id: "480",
        nombre: "uxie",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png"
      },
      {
        id: "481",
        nombre: "mesprit",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png"
      },
      {
        id: "482",
        nombre: "azelf",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png"
      },
      {
        id: "483",
        nombre: "dialga",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png"
      },
      {
        id: "484",
        nombre: "palkia",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png"
      },
      {
        id: "485",
        nombre: "heatran",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png"
      },
      {
        id: "486",
        nombre: "regigigas",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png"
      },
      {
        id: "487",
        nombre: "giratina-altered",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png"
      },
      {
        id: "488",
        nombre: "cresselia",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png"
      },
      {
        id: "489",
        nombre: "phione",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png"
      },
      {
        id: "490",
        nombre: "manaphy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png"
      },
      {
        id: "491",
        nombre: "darkrai",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png"
      },
      {
        id: "492",
        nombre: "shaymin-land",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png"
      },
      {
        id: "493",
        nombre: "arceus",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png"
      },
      {
        id: "494",
        nombre: "victini",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png"
      },
      {
        id: "495",
        nombre: "snivy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png"
      },
      {
        id: "496",
        nombre: "servine",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png"
      },
      {
        id: "497",
        nombre: "serperior",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
      },
      {
        id: "498",
        nombre: "tepig",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
      },
      {
        id: "499",
        nombre: "pignite",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png"
      },
      {
        id: "500",
        nombre: "emboar",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
      },
      {
        id: "501",
        nombre: "oshawott",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png"
      },
      {
        id: "502",
        nombre: "dewott",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png"
      },
      {
        id: "503",
        nombre: "samurott",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
      },
      {
        id: "504",
        nombre: "patrat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png"
      },
      {
        id: "505",
        nombre: "watchog",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
      },
      {
        id: "506",
        nombre: "lillipup",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png"
      },
      {
        id: "507",
        nombre: "herdier",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png"
      },
      {
        id: "508",
        nombre: "stoutland",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png"
      },
      {
        id: "509",
        nombre: "purrloin",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png"
      },
      {
        id: "510",
        nombre: "liepard",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
      },
      {
        id: "511",
        nombre: "pansage",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png"
      },
      {
        id: "512",
        nombre: "simisage",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
      },
      {
        id: "513",
        nombre: "pansear",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png"
      },
      {
        id: "514",
        nombre: "simisear",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
      },
      {
        id: "515",
        nombre: "panpour",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png"
      },
      {
        id: "516",
        nombre: "simipour",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
      },
      {
        id: "517",
        nombre: "munna",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png"
      },
      {
        id: "518",
        nombre: "musharna",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png"
      },
      {
        id: "519",
        nombre: "pidove",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png"
      },
      {
        id: "520",
        nombre: "tranquill",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png"
      },
      {
        id: "521",
        nombre: "unfezant",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png"
      },
      {
        id: "522",
        nombre: "blitzle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png"
      },
      {
        id: "523",
        nombre: "zebstrika",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png"
      },
      {
        id: "524",
        nombre: "roggenrola",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png"
      },
      {
        id: "525",
        nombre: "boldore",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png"
      },
      {
        id: "526",
        nombre: "gigalith",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png"
      },
      {
        id: "527",
        nombre: "woobat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png"
      },
      {
        id: "528",
        nombre: "swoobat",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png"
      },
      {
        id: "529",
        nombre: "drilbur",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png"
      },
      {
        id: "530",
        nombre: "excadrill",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
      },
      {
        id: "531",
        nombre: "audino",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
      },
      {
        id: "532",
        nombre: "timburr",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png"
      },
      {
        id: "533",
        nombre: "gurdurr",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png"
      },
      {
        id: "534",
        nombre: "conkeldurr",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
      },
      {
        id: "535",
        nombre: "tympole",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png"
      },
      {
        id: "536",
        nombre: "palpitoad",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png"
      },
      {
        id: "537",
        nombre: "seismitoad",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png"
      },
      {
        id: "538",
        nombre: "throh",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png"
      },
      {
        id: "539",
        nombre: "sawk",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png"
      },
      {
        id: "540",
        nombre: "sewaddle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png"
      },
      {
        id: "541",
        nombre: "swadloon",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png"
      },
      {
        id: "542",
        nombre: "leavanny",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png"
      },
      {
        id: "543",
        nombre: "venipede",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png"
      },
      {
        id: "544",
        nombre: "whirlipede",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png"
      },
      {
        id: "545",
        nombre: "scolipede",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png"
      },
      {
        id: "546",
        nombre: "cottonee",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png"
      },
      {
        id: "547",
        nombre: "whimsicott",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
      },
      {
        id: "548",
        nombre: "petilil",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png"
      },
      {
        id: "549",
        nombre: "lilligant",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png"
      },
      {
        id: "550",
        nombre: "basculin-red-striped",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png"
      },
      {
        id: "551",
        nombre: "sandile",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png"
      },
      {
        id: "552",
        nombre: "krokorok",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png"
      },
      {
        id: "553",
        nombre: "krookodile",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
      },
      {
        id: "554",
        nombre: "darumaka",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png"
      },
      {
        id: "555",
        nombre: "darmanitan-standard",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png"
      },
      {
        id: "556",
        nombre: "maractus",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png"
      },
      {
        id: "557",
        nombre: "dwebble",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png"
      },
      {
        id: "558",
        nombre: "crustle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png"
      },
      {
        id: "559",
        nombre: "scraggy",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png"
      },
      {
        id: "560",
        nombre: "scrafty",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png"
      },
      {
        id: "561",
        nombre: "sigilyph",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png"
      },
      {
        id: "562",
        nombre: "yamask",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png"
      },
      {
        id: "563",
        nombre: "cofagrigus",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
      },
      {
        id: "564",
        nombre: "tirtouga",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png"
      },
      {
        id: "565",
        nombre: "carracosta",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png"
      },
      {
        id: "566",
        nombre: "archen",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png"
      },
      {
        id: "567",
        nombre: "archeops",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png"
      },
      {
        id: "568",
        nombre: "trubbish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png"
      },
      {
        id: "569",
        nombre: "garbodor",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
      },
      {
        id: "570",
        nombre: "zorua",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png"
      },
      {
        id: "571",
        nombre: "zoroark",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
      },
      {
        id: "572",
        nombre: "minccino",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png"
      },
      {
        id: "573",
        nombre: "cinccino",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png"
      },
      {
        id: "574",
        nombre: "gothita",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png"
      },
      {
        id: "575",
        nombre: "gothorita",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png"
      },
      {
        id: "576",
        nombre: "gothitelle",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png"
      },
      {
        id: "577",
        nombre: "solosis",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png"
      },
      {
        id: "578",
        nombre: "duosion",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png"
      },
      {
        id: "579",
        nombre: "reuniclus",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
      },
      {
        id: "580",
        nombre: "ducklett",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png"
      },
      {
        id: "581",
        nombre: "swanna",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png"
      },
      {
        id: "582",
        nombre: "vanillite",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png"
      },
      {
        id: "583",
        nombre: "vanillish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png"
      },
      {
        id: "584",
        nombre: "vanilluxe",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
      },
      {
        id: "585",
        nombre: "deerling",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png"
      },
      {
        id: "586",
        nombre: "sawsbuck",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png"
      },
      {
        id: "587",
        nombre: "emolga",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
      },
      {
        id: "588",
        nombre: "karrablast",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png"
      },
      {
        id: "589",
        nombre: "escavalier",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png"
      },
      {
        id: "590",
        nombre: "foongus",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png"
      },
      {
        id: "591",
        nombre: "amoonguss",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png"
      },
      {
        id: "592",
        nombre: "frillish",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png"
      },
      {
        id: "593",
        nombre: "jellicent",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png"
      },
      {
        id: "594",
        nombre: "alomomola",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png"
      },
      {
        id: "595",
        nombre: "joltik",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png"
      },
      {
        id: "596",
        nombre: "galvantula",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png"
      },
      {
        id: "597",
        nombre: "ferroseed",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png"
      },
      {
        id: "598",
        nombre: "ferrothorn",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png"
      },
      {
        id: "599",
        nombre: "klink",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png"
      },
      {
        id: "600",
        nombre: "klang",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png"
      }
    ]*/

export const AddImages = () => {
    
      const cargarPokemons = async (pokes) => {
        for(let i = 0; i < pokes.length; i++){
          try {
            const response = await fetch(`${baseUrl}/imagenes`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id:pokes[i].id,
                nombre: pokes[i].nombre,
                url: pokes[i].url
              }),
              
            });
            
            if (!response.ok) {
              throw new Error('Error al cargar los pokémons');
            }
            
            //console.log('Pokémons cargados con éxito');
          } catch (error) {
            console.error('Error:', error);
          }

        }
        
    }    
    
   
    const subirPokes = ()=>{      
      
        cargarPokemons(pokes);
        }
    
        
     
  return (
    <div>
      <h3>subirImagenes</h3>
      <button onClick={subirPokes}>Subir</button>
    </div>
  )
}


