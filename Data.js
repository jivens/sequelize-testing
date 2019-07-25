 const texts = [
    {
      "id": 1,
      "title": "Cricket Rides Coyote",
      "speaker": "Dorthy Nicodemus or Tom Miyal (unconfirmed)",
      "cycle": "Coyote Cycle"
    },
    {
      "id": 2,
      "title": "Calling One's Kind",
      "speaker": "Dorthy Nicodemus",
      "cycle": "Coyote Cycle"
    },
    {
      "id": 3,
      "title": "Calling One's Kind",
      "speaker": "Tom Miyal",
      "cycle": "Coyote Cycle"
    }
  ]
 const textfiles = [
    {
      "id": 1,
      "subdir": "CricketRidesCoyote",
      "src": "CricketRidesCoyote_Hand.pdf",
      "title": "Handwritten Fieldnotes",
      "msType": "Handwritten",
      "fileType": "pdf",
      "textId": 1
    },
    {
      "id": 2,
      "subdir": "CricketRidesCoyote",
      "src": "CricketRidesCoyote_Typed.pdf",
      "title": "Typed Manuscript",
      "msType": "Typed",
      "fileType": "pdf",
      "textId": 1
    },
    {
      "id": 3,
      "subdir": "CricketRidesCoyote",
      "src": "CricketRidesCoyote_Engl.pdf",
      "title": "English Translation",
      "msType": "English",
      "fileType": "pdf",
      "textId": 1
    },
    {
      "id": 4,
      "subdir": "CallingOnesKind",
      "src": "CallingOnesKind__Dorthy_Engl.pdf",
      "title": "English Translation",
      "msType": "English",
      "fileType": "pdf",
      "textId": 2
    },
    {
      "id": 5,
      "subdir": "CallingOnesKind",
      "src": "CallingOnesKind__Dorthy_Typed.pdf",
      "title": "Typed Manuscript",
      "msType": "Typed",
      "fileType": "pdf",
      "textId": 2
    },
    {
      "id": 6,
      "subdir": "CallingOnesKind",
      "src": "CallingOnesKind__Tom_Engl.pdf",
      "title": "English Translation",
      "msType": "English",
      "fileType": "pdf",
      "textId": 3
    },
    {
      "id": 7,
      "subdir": "CallingOnesKind",
      "src": "CallingOnesKind__Tom_Typed.pdf",
      "title": "Typed Manuscript",
      "msType": "Typed",
      "fileType": "pdf",
      "textId": 3
    }
  ]
  
const textimages = [
    {
      "id": 1,
      "textfileId": 7,
      "subdir": "CallingOnesKind/CallingOnesKind__Tom_Typed_Images",
      "src": "CallingOnesKind__Tom_Typed1.png"
    },
    {
      "id": 2,
      "textfileId": 7,
      "subdir": "CallingOnesKind/CallingOnesKind__Tom_Typed_Images",
      "src": "CallingOnesKind__Tom_Typed2.png"
    },
    {
      "id": 3,
      "textfileId": 7,
      "subdir": "CallingOnesKind/CallingOnesKind__Tom_Typed_Images",
      "src": "CallingOnesKind__Tom_Typed3.png"
    },
    {
      "id": 4,
      "textfileId": 7,
      "subdir": "CallingOnesKind/CallingOnesKind__Tom_Typed_Images",
      "src": "CallingOnesKind__Tom_Typed4.png"
    },
    {
      "id": 5,
      "textfileId": 6,
      "subdir": "CallingOnesKind/CallingOnesKind__Tom_Engl_Images",
      "src": "CallingOnesKind__Tom_Engl.png"
    },
    {
      "id": 6,
      "textfileId": 4,
      "subdir": "CallingOnesKind/CallingOnesKind__Dorthy_Engl_Images",
      "src": "CallingOnesKind__Dorthy_Engl.png"
    },
    {
      "id": 7,
      "textfileId": 5,
      "subdir": "CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images",
      "src": "CallingOnesKind__Dorthy_Typed1.png"
    },
    {
      "id": 8,
      "textfileId": 5,
      "subdir": "CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images",
      "src": "CallingOnesKind__Dorthy_Typed2.png"
    },
    {
      "id": 9,
      "textfileId": 5,
      "subdir": "CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images",
      "src": "CallingOnesKind__Dorthy_Typed3.png"
    },
    {
      "id": 10,
      "textfileId": 5,
      "subdir": "CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images",
      "src": "CallingOnesKind__Dorthy_Typed4.png"
    },
    {
      "id": 11,
      "textfileId": 5,
      "subdir": "CallingOnesKind/CallingOnesKind__Dorthy_Typed_Images",
      "src": "CallingOnesKind__Dorthy_Typed5.png"
    },
    {
      "id": 12,
      "textfileId": 3,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Engl_Images",
      "src": "CricketRidesCoyote_Engl.png"
    },
    {
      "id": 13,
      "textfileId": 1,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Hand_Images",
      "src": "CricketRidesCoyote_Hand1.png"
    },
    {
      "id": 14,
      "textfileId": 1,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Hand_Images",
      "src": "CricketRidesCoyote_Hand2.png"
    },
    {
      "id": 15,
      "textfileId": 1,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Hand_Images",
      "src": "CricketRidesCoyote_Hand3.png"
    },
    {
      "id": 16,
      "textfileId": 1,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Hand_Images",
      "src": "CricketRidesCoyote_Hand4.png"
    },
    {
      "id": 17,
      "textfileId": 1,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Hand_Images",
      "src": "CricketRidesCoyote_Hand5.png"
    },
    {
      "id": 18,
      "textfileId": 1,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Hand_Images",
      "src": "CricketRidesCoyote_Hand6.png"
    },
    {
      "id": 19,
      "textfileId": 2,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Typed_Images",
      "src": "CricketRidesCoyote_Typed1.png"
    },
    {
      "id": 20,
      "textfileId": 2,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Typed_Images",
      "src": "CricketRidesCoyote_Typed2.png"
    },
    {
      "id": 21,
      "textfileId": 2,
      "subdir": "CricketRidesCoyote/CricketRidesCoyote_Typed_Images",
      "src": "CricketRidesCoyote_Typed3.png"
    }
  ]
 const elicitations = [
    {
      "id": 1,
      "title": "He is clubbing him on the neck - English"
    },
    {
      "id": 2,
      "title": "He is clubbing him on the neck - Couer d'Alene"
    },
    {
      "id": 3,
      "title": "He is being clubbed on the neck - English"
    },
    {
      "id": 4,
      "title": "He is being clubbed on the neck - Couer d'Alene"
    },
    {
      "id": 5,
      "title": "I am clubbing him on the neck - English"
    },
    {
      "id": 6,
      "title": "I am clubbing him on the neck - Couer d'Alene"
    },
    {
      "id": 7,
      "title": "I am being clubbed on the neck - English"
    },
    {
      "id": 8,
      "title": "I am being clubbed on the neck - Couer d'Alene"
    },
    {
      "id": 9,
      "title": "You are being clubbed on the neck - English"
    },
    {
      "id": 10,
      "title": "You are being clubbed on the neck - Couer d'Alene"
    }
  ]
 const audiosets = [
    {
      "id": 1,
      "title": "Cricket Rides Coyote - Coeur d'Alene",
      "speaker": "Lawrence Nicodemus",
      "textId": 1
    },
    {
      "id": 2,
      "title": "Cricket Rides Coyote - English",
      "speaker": "Lawrence Nicodemus",
      "textId": 1
    },
    {
      "id": 3,
      "title": "When Deer Kills Children - song, in Coeur d'Alene",
      "speaker": "Unknown"
    }
  ]

 const audiofiles = [
    {
      "id": 1,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_8.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 1
    },
    {
      "id": 2,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_9.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 2
    },
    {
      "id": 3,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_10.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 3
    },
    {
      "id": 4,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_11.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 4
    },
    {
      "id": 5,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_12.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 5
    },
    {
      "id": 6,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_13.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 6
    },
    {
      "id": 7,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_14.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 7
    },
    {
      "id": 8,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_15.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 8
    },
    {
      "id": 9,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_16.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 9
    },
    {
      "id": 10,
      "src": "1835_027_CoeurdAlene_2_bNoiseReduced_17.wav",
      "type": "audio/wav",
      "direct": "yes",
      "elicitationId": 10
    },
    {
      "id": 11,
      "subdir": "CricketRidesCoyote",
      "src": "CricketRidesCoyote_Crd.wav",
      "type": "audio/wav",
      "direct": "yes",
      "audiosetId": 1
    },
    {
      "id": 12,
      "subdir": "CricketRidesCoyote",
      "src": "CricketRidesCoyote_Crd.mp3",
      "type": "audio/mp3",
      "direct": "yes",
      "audiosetId": 1
    },
    {
      "id": 13,
      "subdir": "CricketRidesCoyote",
      "src": "CricketRidesCoyote_Engl.mp3",
      "type": "audio/mp3",
      "direct": "yes",
      "audiosetId": 2
    },
    {
      "id": 14,
      "subdir": "CricketRidesCoyote",
      "src": "CricketRidesCoyote_Engl.wav",
      "type": "audio/wav",
      "direct": "yes",
      "audiosetId": 2
    },
    {
      "id": 15,
      "subdir": "WhenDeerKillsChildren",
      "src": "WhenDeerKillsChildren.wav",
      "type": "audio/wav",
      "direct": "yes",
      "audiosetId": 3
    },
    {
      "id": 16,
      "subdir": "WhenDeerKillsChildren",
      "src": "WhenDeerKillsChildren.mp3",
      "type": "audio/mp3",
      "direct": "yes",
      "audiosetId": 3
    }
  ]
 const bibliography = [
    {
      "id": 1,
      "author": "Barthmaier, Paul T.",
      "year": "1996",
      "title": "A Dictionary of Coeur d'Alene Salish from Gladys Reichard's file slips",
      "reference": "University of Montana M.A. Thesis.",
      "link": "https://scholarworks.umt.edu/etd/8274/",
      "linktext": "here"
    },
    {
      "id": 2,
      "author": "Bischoff, Shannon T.",
      "year": "2011",
      "title": "Lexical affixes, incorporation, and conflation: The case of Coeur d'Alene",
      "reference": "Studia Linguistica 65.1:1-32.",
      "link": ""
    },
    {
      "id": 3,
      "author": "Bischoff, Shannon T.",
      "year": "2011",
      "title": "Formal notes on Coeur d'Alene clause structure",
      "reference": "Newcastle: Cambridge Scholars Press.",
      "link": ""
    },
    {
      "id": 4,
      "author": "Bischoff, Shannon T.",
      "year": "2007",
      "title": "Functional Forms-Formal Functions: An account of Coeur d'Alene clause structure",
      "reference": "PhD dissertation University of Arizona.",
      "link": ""
    },
    {
      "id": 5,
      "author": "Bischoff, Shannon T.",
      "year": "2006",
      "title": "Basic clause structure in Coeur d'Alene A preliminary working paper",
      "reference": "In MIT Working Papers on Endangered and Less Familiar Languages Volume on Salish, (eds) Shannon T. Bischoff, Lynnika Buttler, Peter Norquist, and Daniel Siddiqi. Cambridge MIT Press.",
      "link": ""
    },
    {
      "id": 6,
      "author": "Bischoff, Shannon T.",
      "year": "2006",
      "title": "The left periphery in Coeur d'Alene Evidence from the Reichard Manuscripts",
      "reference": "In Proceedings of WSCLA 10 UBCWPL 17, (eds) Solveiga Armoskaite and James J. Thompson. 43-55.",
      "link": ""
    },
    {
      "id": 7,
      "author": "Bischoff, Shannon T.",
      "year": "2001",
      "title": "Lynx : a morphological analysis and translation of Dorothy Nicodemus' Coeur d'Alene narrative",
      "reference": "University of Montana M.A. thesis.",
      "link": "http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9310&context=etd",
      "linktext": "here"
    },
    {
      "id": 8,
      "author": "Bischoff, Shannon T., Ivy Doak, Amy V. Fountain and John Ivens",
      "year": "2013",
      "title": "Creating grass roots digital Coeur d'Alene resources:  the COLRC",
      "reference": "Northwest Journal of Linguistics. 7. 1-23.",
      "link": "http://www.sfu.ca/nwjl/Articles/V007_N04/BischoffEtAlGrassrootsResources.pdf",
      "linktext": "here"
    },
    {
      "id": 9,
      "author": "Bischoff, Shannon T,. and Amy V. Fountain",
      "year": "2013",
      "title": "Grass-roots development of web-based language archives: the Coeur d'Alene Archive",
      "reference": "In Shannon Bischoff, Debbie Cole, Amy Fountain, and Mizuki Miyashita (eds) The Persistence of Language: Constructing and Confronting the Past and Present in the Voices of Jane H. Hill. 175-202. Cambridge: John Benjamins",
      "link": ""
    },
    {
      "id": 10,
      "author": "Boas, Franz, and Teit, James",
      "year": "1985",
      "title": "Coeur d'Alene, Flathead and Okanogan Indians.",
      "reference": "Ye Galleon Press: Fairfield, Washington. Reprint of the Annual report of the Bureau of American Ethnology to the Secretary of the Smithsonian Institution volume 45 (1927-28) pages 23-396",
      "link": "http://archive.org/stream/annualreportofbu45smit#page/36/mode/2up",
      "linktext": "here"
    },
    {
      "id": 11,
      "author": "Brinkman, Raymond",
      "year": "2003",
      "title": "Etsmeystkhw khwe snwiyepmshtsn 'you know how to talk like a whiteman'",
      "reference": "Ph.D. Dissertaion. University of Chicago.",
      "link": ""
    },
    {
      "id": 12,
      "author": "Czaykowska-Higgins, Ewa",
      "year": "1993",
      "title": "Cyclicity and stress in Moses Columbia Salish",
      "reference": "Natural Language and Linguistic Theory 11. 197-278.",
      "link": ""
    },
    {
      "id": 13,
      "author": "Diomedi, Alexander S.J.",
      "year": "1894",
      "title": "Sketches of Modern Indian Life",
      "reference": "",
      "link": "https://archive.org/details/cihm_14111",
      "linktext": "here"
    },
    {
      "id": 14,
      "author": "Doak, Ivy G.",
      "year": "2004",
      "title": "Notes on Reduplication in Coeur d'Alene",
      "reference": "In Studies in Salish Linguistics in Honor of M. Dale Kinkade, eds.  D. Gerdts and L. Matthewson. 118-131. Missoula, Montana: University of Montana Press.",
      "link": ""
    },
    {
      "id": 15,
      "author": "Doak, Ivy G.",
      "year": "1998",
      "title": "Doing fieldwork with endangered languages: The case of Coeur d'Alene",
      "reference": "Paper presented at the University of North Texas Linguistic Colloquium. Denton, TX.",
      "link": ""
    },
    {
      "id": 16,
      "author": "Doak, Ivy G.",
      "year": "1997",
      "title": "Coeur d'Alene grammatical relations",
      "reference": "Ph.D. Dissertation. University of Texas at Austin.",
      "link": ""
    },
    {
      "id": 17,
      "author": "Doak, Ivy G.",
      "year": "1996",
      "title": "Coeur d'Alene imperative constructions",
      "reference": "Papers for the 31st ICSNL. Vancouver.",
      "link": "http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1996_Doak.pdf",
      "linktext": "here"
    },
    {
      "id": 18,
      "author": "Doak, Ivy G.",
      "year": "1993",
      "title": "Discourse use of the Coeur d'Alene -st(u)- transitivizer",
      "reference": "American Indian linguistics and ethnography in honor of Laurence C. Thompson, A. Mattina and T. Montler, eds.  UMOPL 10.  Missoula.",
      "link": ""
    },
    {
      "id": 19,
      "author": "Doak, Ivy G.",
      "year": "1992",
      "title": "Another look at Coeur d'Alene Harmony",
      "reference": "International Journal of American Linguistics 58.1:1-35.",
      "link": ""
    },
    {
      "id": 20,
      "author": "Doak, Ivy G.",
      "year": "1991",
      "title": "Coeur d'Alene rhetorical structure",
      "reference": "In Texas Linguistic Forum: Discourse 33. 43-70.",
      "link": ""
    },
    {
      "id": 21,
      "author": "Doak, Ivy G.",
      "year": "1990",
      "title": "Truncation, -&#237; suffixation, and extended vowel length in Coeur d'Alene",
      "reference": " Papers for the 25th International Conference on Salish and Neighbouring Languages. University of British Columbia, Vancouver.",
      "link": "http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1990_Doak.pdf",
      "linktext": "here"
    },
    {
      "id": 22,
      "author": "Doak, Ivy G.",
      "year": "1987",
      "title": "Coeur d'Alene vowel harmony",
      "reference": "Papers from the 22nd International Conference on Salish and Neighboring Languages. University of Victoria.  Victoria, BC.",
      "link": ""
    },
    {
      "id": 23,
      "author": "Doak, Ivy G.",
      "year": "1986",
      "title": "Coeur d'Alene schwa",
      "reference": "Papers presented at LASSO, Scottsdale, AZ.",
      "link": ""
    },
    {
      "id": 24,
      "author": "Doak, Ivy and Anthony Mattina",
      "year": "1997",
      "title": "Okanagan -lx, Coeur d'Alene -ils, and Cognate Forms",
      "reference": "Okanagan -lx, Coeur d'Alene -ils, and Cognate Forms",
      "link": ""
    },
    {
      "id": 25,
      "author": "Doak, Ivy and Timothy Montler",
      "year": "2000",
      "title": "Orthography, lexicography and language change",
      "reference": "In Proceedings of the fourth FEL Conference, Nicholas Ostler and Blair Rudes, eds. Charlotte, NC: Foundation for Endangered Languages.",
      "link": "http://montler.net/papers/OrthographyFEL22000.pdf",
      "linktext": "here"
    },
    {
      "id": 26,
      "author": "Doak, Ivy and Margaret Stensgar",
      "year": "2008",
      "title": "Coyote and the birds:  A traditional Coeur d'Alene story",
      "reference": "In One people's stories: A collection of Salishan myths and legends, eds. M. T. Thompson and S. M. Egesdal. 210-213. The Smithsonian Series of Studies in Native American Literatures. Lincoln, NE: University of Nebraska Press.",
      "link": ""
    },
    {
      "id": 27,
      "author": "Ewing, Shirley, Bonnie Grossen, Leo Little Thunder, Gladys Amanda Reichard",
      "year": "1978",
      "title": "Skitswish tales of the ancient Coeur d'Alene Indians: a supplemental reading program for teaching decoding",
      "reference": "Desmet, Idaho : Coeur D'Alene Indian Tribal School.",
      "link": ""
    },
    {
      "id": 28,
      "author": "Falk, Julia S.",
      "year": "1999",
      "title": "Women, Language, and Linguistics: Three American Stories from the First Half of the Twentieth Century.",
      "reference": "Routledge: London.",
      "link": ""
    },
    {
      "id": 29,
      "author": "Falk, Julia S.",
      "year": "1997",
      "title": "Territoriality, relationships, and reputation: The case of Gladys A. Reichard.",
      "reference": "Southwest Journal of Linguistics 16.1/2.",
      "link": ""
    },
    {
      "id": 30,
      "author": "Fitzgerald, Susan",
      "year": "1997",
      "title": "Historical aspects of Coeur d'Alene harmony",
      "reference": "International Journal of American Linguistics. 63.3.362-384.",
      "link": ""
    },
    {
      "id": 31,
      "author": "Frey, Rodney",
      "year": "2001",
      "title": "Landscape Traveled by Coyote and Crane: The World of the Schits'umsh",
      "reference": "Seattle: University of Washington Press.",
      "link": ""
    },
    {
      "id": 32,
      "author": "Gazzoli, Father G.,  S. J.",
      "year": "1876",
      "title": "Prayers and hymns translated into the Skitswich language by Father G. Gazzoli, S.J., of the Coeur D'alene Mission, Idaho",
      "reference": "Hubert Howe Bancroft Collection.",
      "link": ""
    },
    {
      "id": 33,
      "author": "Gibbons, Carolyn Fox",
      "year": "1999",
      "title": "An edition of Coyote steals son's wife; Gladys Amanda Reichard",
      "reference": "University of Montana M.A. thesis",
      "link": ""
    },
    {
      "id": 34,
      "author": "Greene, Rebecca J.",
      "year": "2004",
      "title": "Edition of Snchitsu'umshtsn:  volume I: a root dictionary",
      "reference": "University of Montana M.A. thesis.",
      "link": "http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9132&context=etd",
      "linktext": "here"
    },
    {
      "id": 35,
      "author": "Harris, Barbara P.",
      "year": "1974",
      "title": "Aspect and the pronominal system of Coeur d'Alene: A re-analysis of Reichard's material",
      "reference": "International Conference on Salish and Neighbouring Languages 9. 60-80.",
      "link": "http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1974_Harris.pdf",
      "linktext": "here"
    },
    {
      "id": 36,
      "author": "Hayter, Amy L.",
      "year": "1997",
      "title": "An Edition of Dorothy Nicodemus's Coyote Cuts Sun's Heart",
      "reference": "The University of Montana M.A. thesis.",
      "link": "http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9133&context=etd",
      "linktext": "here"
    },
    {
      "id": 37,
      "author": "Hayes, Matthew S.",
      "year": "1999",
      "title": "An edition of three Coeur d'Alene texts: Calling one's kind, Hunting one's kind, and Boy takes food",
      "reference": "University of Montana M.A. thesis.",
      "link": "http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9137&context=etd",
      "linktext": "here"
    },
    {
      "id": 38,
      "author": "Hoard, James E.",
      "year": "1978",
      "title": "Syllabication in northwest Indian languages",
      "reference": "Syllables and segments, A. Bell and J.B. Hooper, eds. North-Holland Publishing Co.",
      "link": ""
    },
    {
      "id": 39,
      "author": "Hulden, Mans and Shannon T. Bischoff.",
      "year": "2009",
      "title": "A simple formalism for capturing reduplication in finite-state morphology",
      "reference": "Frontiers in Artificial Intelligence and Applications 191:207-215.",
      "link": ""
    },
    {
      "id": 40,
      "author": "Hulden, Mans and Shannon T. Bischoff",
      "year": "2008",
      "title": "Annotating reduplication infinite-state morphology",
      "reference": "Finite-State Methods and Natural Language Processing 2008 proceedings. EU Joint Research Commission Ispara Italy.",
      "link": "http://dingo.sbs.arizona.edu/~mhulden/hulden_reduplication_2008.pdf",
      "linktext": "here"
    },
    {
      "id": 41,
      "author": "Johnson, Robert E.",
      "year": "1975",
      "title": "The role of phonetic detail in Coeur d'Alene phonology",
      "reference": "Washington State University doctoral dissertation.",
      "link": ""
    },
    {
      "id": 42,
      "author": "Kinkade, M. Dale",
      "year": "1990",
      "title": "Prehistory of Salishan languages",
      "reference": "Papers for the 25th ICSNL.  Vancouver.",
      "link": ""
    },
    {
      "id": 43,
      "author": "Kinkade, M. Dale",
      "year": "1967",
      "title": "Uvular pharyngeal resonants in Interior Salish",
      "reference": "International Journal of American Linguistics 33:228-234.",
      "link": ""
    },
    {
      "id": 44,
      "author": "Kinkade, M. Dale and Clarence Sloat",
      "year": "1972",
      "title": "Proto-Eastern Interior Salish vowels",
      "reference": "International Journal of American Linguistics 38:26-48.",
      "link": ""
    },
    {
      "id": 45,
      "author": "Kroeber, Paul D.",
      "year": "1999",
      "title": "The Salish Language Family: Reconstructing Syntax",
      "reference": "U of Nebraska Press.",
      "link": ""
    },
    {
      "id": 46,
      "author": "Kuipers, Aert",
      "year": "2003",
      "title": "Salish Etymologycal Dictionary",
      "reference": "University of Montana Occasional Papers in Linguistics No. 16. Missoula: UM Linguistics Laboratory.",
      "link": ""
    },
    {
      "id": 47,
      "author": "Kuipers, Aert.",
      "year": "1981",
      "title": "On reconstructing the Proto-Salish sound system",
      "reference": "International Journal of American Linguistics 47:323-35.",
      "link": ""
    },
    {
      "id": 48,
      "author": "Louie, M. A.",
      "year": "1996",
      "title": "Visionary leadership from a Native American perspective: a leadership profile of the Coeur d'Alene Indian Tribe",
      "reference": "Spokane: Gonzaga University dissertation.",
      "link": ""
    },
    {
      "id": 49,
      "author": "Lyon, John M.",
      "year": "2010",
      "title": "Lawrence Nicodemus's Snchitsu'umshtsn File Card Collection in Dictionary Format",
      "reference": "Northwest Journal of Linguistics. 4. 1-110.",
      "link": ""
    },
    {
      "id": 50,
      "author": "Lyon, John M.",
      "year": "2005",
      "title": "An edition of Snchitsu'umshtsn:  volume II: a root dictionary",
      "reference": "University of Montana M.A. Thesis.",
      "link": ""
    },
    {
      "id": 51,
      "author": "Lyon, John and Rebecca Greene-Wood, eds.",
      "year": "2007",
      "title": "Lawrence Nicodemus's Coeur d'Alene dictionary in root format",
      "reference": "UMOPL",
      "link": ""
    },
    {
      "id": 52,
      "author": "Mattina, Anthony",
      "year": "1979",
      "title": "Pharyngeal movement in Colville and related phenomena in the Interior Salishan languages",
      "reference": "International Journal of American Linguistics 45:1.",
      "link": ""
    },
    {
      "id": 53,
      "author": "Nelson, Jon",
      "year": "1999",
      "title": "Coeur d'Alene oral narrative: Editions of Coyote imitates Magpie, Man caught in fire corral and War between Blackfoot and Coeur d'Alene",
      "reference": "University of Montana M.A. thesis.",
      "link": "http://scholarworks.umt.edu/cgi/viewcontent.cgi?article=9311&context=etd",
      "linktext": "here"
    },
    {
      "id": 54,
      "author": "New, A. J.",
      "year": "2013",
      "title": "Cooperation in the Wilds of the Idaho Territory: Interaction Between the Jesuits and Coeur D'Alene Indians at the Cataldo Mission, 1848-1878.",
      "reference": "Lewiston: University of Idaho master's thesis.",
      "link": ""
    },
    {
      "id": 55,
      "author": "Nicodemus, Lawrence",
      "year": "1975",
      "title": "Snchitsu'umshtsn: The Coeur d'Alene language",
      "reference": "pokane: University Press.  In two volumes: I The grammar and Coeur d'Alene-English dictionary; II English- Coeur d'Alene dictionary.",
      "link": ""
    },
    {
      "id": 56,
      "author": "Nicodemus, Lawrence",
      "year": "1975",
      "title": "Snchitsu'umshtsn: The Coeur d'Alene language.  A modern course.",
      "reference": "Coeur d'Alene Tribe.",
      "link": ""
    },
    {
      "id": 57,
      "author": "Nicodemus, Lawrence",
      "year": "1973",
      "title": "The Couer d'Alene language project",
      "reference": "ICSL 8. Eugene, Oregon.",
      "link": ""
    },
    {
      "id": 58,
      "author": "Nicodemus, Lawrence (Performer)",
      "year": "1935",
      "title": "Audio recording of select Coeur d'Alene myths: Collection Title: 85-550-F.",
      "reference": "Idaho, Coeur d'Alene.  Gladys Reichard. Indiana University Bloomington Archive of Traditional Music.",
      "link": ""
    },
    {
      "id": 59,
      "author": "Nicodemus, Lawrence, Wanda Matt, Reva Hess, Gary Sobbing, Jill Maria Wagner, and Dianne Allen",
      "year": "2000",
      "title": "Snchitsu'umshtsn: Coeur d'Alene reference book Volume 1",
      "reference": "Coeur d'Alene Tribe.",
      "link": ""
    },
    {
      "id": 60,
      "author": "Nicodemus, Lawrence, Wanda Matt, Reva Hess, Gary Sobbing, Jill Maria Wagner, and Dianne Allen",
      "year": "2000",
      "title": "Snchitsu'umshtsn: Coeur d'Alene reference book Volume 2",
      "reference": "Coeur d'Alene Tribe.",
      "link": ""
    },
    {
      "id": 61,
      "author": "Nicodemus, Lawrence, Wanda Matt, Reva Hess, Gary Sobbing, Jill Maria Wagner, and Dianne Allen",
      "year": "2000",
      "title": "Snchitsu'umshtsn: Coeur d'Alene workbook I. 3rd edition",
      "reference": "Coeur d'Alene Tribe.",
      "link": ""
    },
    {
      "id": 62,
      "author": "Nicodemus, Lawrence, Wanda Matt, Reva Hess, Gary Sobbing, Jill Maria Wagner, and Dianne Allen",
      "year": "2000",
      "title": "Snchitsu'umshtsn: Coeur d'Alene workbook II. 3rd edition",
      "reference": "Coeur d'Alene Tribe.",
      "link": ""
    },
    {
      "id": 63,
      "author": "Occhi, Debra J., Gary B. Palmer, and Roy H. Ogawa",
      "year": "1993",
      "title": "Like hair, or trees: Semantic analysis of the Coeur d'Alene prefix ne' 'amisdt'.",
      "reference": "Revision of paper presented to the  SSILA Summer Meeting, Columbus, OH.",
      "link": "http://escholarship.org/uc/item/28x669mq",
      "linktext": "here"
    },
    {
      "id": 64,
      "author": "Ogawa, Roy H and Gary Palmer",
      "year": "1998",
      "title": "Language semantics of three Coeur d'Alene prefixes as 'on",
      "reference": "In Issues in Cognitive Linguistics: 1993 Proceedings of the International Cognitive Linguistics Conference Volume 12. L. De Stadler and C. Eyrich, eds. 165-224. Walter de Gruyter.",
      "link": ""
    },
    {
      "id": 65,
      "author": "Palmer, Gary B",
      "year": "2001",
      "title": "Indian Pioneers: The settlement of Ni'lukhwalqw (Upper Hangman Creek, Idaho) by the Snchitsu'umsh (Coeur d'Alene Indians)",
      "reference": "Oregon Historical Quarterly 102.1.22-47",
      "link": ""
    },
    {
      "id": 66,
      "author": "Palmer, Gary B.",
      "year": "1998",
      "title": "Coeur d'Alene. In Handbook of North American Indians, Volume 12, Plateau",
      "reference": "Deward E. Walker, Jr. ed. 312-326. Washington DC: Smithsonian Institution.",
      "link": ""
    },
    {
      "id": 67,
      "author": "Palmer, Gary B.",
      "year": "1990",
      "title": " 'Where are the muskrats?' The semantic structure of Couer d'Alene place names",
      "reference": "AL 32:263-294",
      "link": ""
    },
    {
      "id": 68,
      "author": "Palmer, Gary B.",
      "year": "1989",
      "title": "The gobbler",
      "reference": "The World and I 4.3. 652-659.",
      "link": ""
    },
    {
      "id": 69,
      "author": "Palmer, Gary B.",
      "year": "1988",
      "title": "The language and culture approach in the Coeur d'Alene Language Preservation Project",
      "reference": "Human Organization 47.4. 307-317.",
      "link": ""
    },
    {
      "id": 70,
      "author": "Palmer, Gary B.",
      "year": "1981",
      "title": "Indian Pioneers: Coeur d'Alene mission farming from 1842 to 1876",
      "reference": "In Papers in Anthropology, Special Issue on Comparative Frontiers. Stephen I. Thompson, ed. 65-87.",
      "link": ""
    },
    {
      "id": 71,
      "author": "Palmer, Gary B.",
      "year": "1981",
      "title": "Light shining on the mountain. A thumbnail biography of Louis Victor.",
      "reference": "Idaho Humanities Forum. Spring. 2,12.",
      "link": ""
    },
    {
      "id": 72,
      "author": "Palmer, Gary B, Lavinia Felsman, Lawrence Nicodemus",
      "year": "1985",
      "title": "Workbooks in the Coeur d'Alene Indian language",
      "reference": "Las Vegas: University of Nevada; Plummer, ID: CDA Tribal Headquarters.",
      "link": ""
    },
    {
      "id": 73,
      "author": "Palmer, Gary B., Dale M. Kinkade and Nancy Turner",
      "year": "2003",
      "title": "The Grammar of Snchitsu'umshtsn (Coeur d'Alene) Plant Names",
      "reference": "Journal of Ethnobiology 23.1. 65-100.",
      "link": ""
    },
    {
      "id": 74,
      "author": "Palmer, Gary B. and Lawrence Nicodemus",
      "year": "1987",
      "title": "Khwi' Khwe Hntmikhw'lumukhw: This is My Land",
      "reference": "Department of Education, Coeur d'Alene Tribe of Idaho, DeSmet.",
      "link": ""
    },
    {
      "id": 75,
      "author": "Palmer, Gary B. and Lawrence Nicodemus",
      "year": "1982",
      "title": " Marking surfaces in Coeur d'Alene and universals in anatomical nomenclature",
      "reference": "Working papers for the 17th ICSNL, 295-330.  Portland.",
      "link": "http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1982_Palmer_Nicodemus.pdf",
      "linktext": "here"
    },
    {
      "id": 76,
      "author": "Palmer, Gary B. and Lawrence Nicodemus",
      "year": "1985",
      "title": "Coeur d'Alene exceptions to proposed universals of anatomical nomenclature",
      "reference": "American Ethnologist",
      "link": ""
    },
    {
      "id": 77,
      "author": "Palmer, Gary B., Lawrence Nicodemus and Thomas E. Connolly",
      "year": "1987",
      "title": "Khwi' Khwe GuL Schitsu'umsh: These Are the Coeur d'Alene People",
      "reference": "Department of Education, Coeur d'Alene Tribe of Idaho, DeSmet. with Lawrence Nicodemus and Tom Connolly, S. J. [personal names].",
      "link": ""
    },
    {
      "id": 78,
      "author": "Palmer, Gary B. and Thomas E. Connolly",
      "year": "1983",
      "title": "Coeur d'Alene Indian land-use values",
      "reference": "Wealth and Trust: A Lesson from the American West. Special Issue.  Sun Valley",
      "link": ""
    },
    {
      "id": 79,
      "author": "Palmer, Gary B., Thomas E. Connolly, Armando M DaSilva",
      "year": "1987",
      "title": "Khwi' khwe gul schitsu'umsh = These are the Coeur d'Alene people: a book of Coeur d'Alene personal names",
      "reference": "Plummer, ID: Coeur d'Alene Tribal Headquarters; Las Vegas, Nev.: Dept. of Anthropology, University of Nevada",
      "link": ""
    },
    {
      "id": 80,
      "author": "Pilling. James C",
      "year": "1893",
      "title": "Bibliography of the Salishan Languages",
      "reference": "(Smithsonian Institute) Washington: Government Printing office.",
      "link": "https://archive.org/details/cihm_15902",
      "linktext": "here"
    },
    {
      "id": 81,
      "author": "Point, Nicolas and Joseph P. Donnelly (tr.)",
      "year": "1967",
      "title": "Wilderness kingdom, Indian life in the Rocky Mountains: 1840-1847; the journals & paintings of Nicolas Point",
      "reference": "New York:  Holt, Rinehart and Winston",
      "link": ""
    },
    {
      "id": 82,
      "author": "Reichard, Gladys A.",
      "year": "1958-1961",
      "title": "A comparison of five Salish languages",
      "reference": "International Journal of American Linguistics 24, 25, 26.",
      "link": ""
    },
    {
      "id": 83,
      "author": "Reichard, Gladys A.",
      "year": "1940",
      "title": "Composition and symbolism of Coeur d'Alene verb-stems",
      "reference": "International Journal of American Linguistics 11:47-63.",
      "link": ""
    },
    {
      "id": 84,
      "author": "Reichard, Gladys A.",
      "year": "1939",
      "title": "Stem-list of the Coeur d'Alene language",
      "reference": "International Journal of American Linguistics 10:92-108.",
      "link": ""
    },
    {
      "id": 85,
      "author": "Reichard, Gladys A.",
      "year": "1938",
      "title": "Coeur d'Alene",
      "reference": "Franz Boas, ed., Handbook of American Indian languages. New York:  J. J. Augustin, Inc.  Part 3:515-707.",
      "link": "http://archive.org/stream/rosettaproject_tqw_morsyn-2#page/n529/mode/2up",
      "linktext": "here"
    },
    {
      "id": 86,
      "author": "Reichard, Gladys Amanda with Adele Froelich",
      "year": "1947",
      "title": "An analysis of Coeur d'Alene Indian myths",
      "reference": "Philadelphia:  Memoirs of the American Folk-lore Society, v. 41.",
      "link": "http://archive.org/stream/analysisofcoeurd41reic#page/n5/mode/2up",
      "linktext": "here"
    },
    {
      "id": 87,
      "author": "Seltice, J.",
      "year": "1990",
      "title": "Saga of the Coeur D'Alene Indians: An Account of Chief Joseph Seltice (Vol. 990)",
      "reference": "Ye Galleon Press.",
      "link": ""
    },
    {
      "id": 88,
      "author": "Sloat, Clarence",
      "year": "1980",
      "title": "Vowel alternations in Coeur d'Alene",
      "reference": "International Journal of American Linguistics 46:1.",
      "link": ""
    },
    {
      "id": 89,
      "author": "Sloat, Clarence",
      "year": "1972",
      "title": "Vowel harmony in Coeur d'Alene",
      "reference": "International Journal of American Linguistics 38:234-39.",
      "link": ""
    },
    {
      "id": 90,
      "author": "Sloat, Clarence",
      "year": "1971",
      "title": "Some phonological processes of Coeur d'Alene",
      "reference": "International Conference on Salish and Neighbouring Languages. 6.",
      "link": ""
    },
    {
      "id": 91,
      "author": "Sloat, Clarence",
      "year": "1971",
      "title": "The phonetics and phonology of Coeur d'Alene /r/",
      "reference": "Sacramento Anthropological Society Paper II. Studies in Northwest Indian languages, ed. by James E. Hoard and Thomas M. Hess, pp 123-137.  Sacramento.",
      "link": ""
    },
    {
      "id": 92,
      "author": "Sloat, Clarence",
      "year": "1970",
      "title": "Some phonological similarity of /r/ and /R/ in Coeur d'Alene",
      "reference": "International Conference on Salish and Neighbouring Languages. 5.",
      "link": "http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1970_SloatC.pdf",
      "linktext": "here"
    },
    {
      "id": 93,
      "author": "Sloat, Clarence",
      "year": "1968",
      "title": "A skeleton key to Reichard's Coeur d'Alene transcriptions",
      "reference": "Anthropological Linguistics 10:5.",
      "link": ""
    },
    {
      "id": 94,
      "author": "Sloat, Clarence",
      "year": "1967",
      "title": "A plea for conformity and some amendments to Reichard",
      "reference": "International Conference on Salish and Neighbouring Languages. 2.",
      "link": "http://lingserver.arts.ubc.ca/linguistics/sites/default/files/1967_Sloat.pdf",
      "linktext": "here"
    },
    {
      "id": 95,
      "author": "Sloat, Clarence",
      "year": "1966",
      "title": "Phonological redundancy rules in Coeur d'Alene",
      "reference": "University of Washington PhD dissertation.",
      "link": ""
    },
    {
      "id": 96,
      "author": "Sobbing, Gary and Audra Vincent",
      "year": "2000",
      "title": "Technology, Literacy and Orality: the Case of the Coeur d'Alene Language",
      "reference": "Proceedings of the Foundation for Endangered Languages Conference 29. Charlotte, North Carolina, 21-24 September.",
      "link": ""
    },
    {
      "id": 97,
      "author": "Teit, J.",
      "year": "1917",
      "title": "Couer d'Alene Tales",
      "reference": "In F. Boas, ed. Folk-Tales of Salishan and Sahaptin Tribes 119-128. New York: American Folk-Lore Society.",
      "link": "http://archive.org/stream/folktalesofsalis00boas#page/119/mode/1up",
      "linktext": "here"
    },
    {
      "id": 98,
      "author": "Thompson, Laurence C.",
      "year": "1985",
      "title": "Control in Salish grammar, in Relational Typology, edited by Frans Plank",
      "reference": "Trends in Linguistics.  Studies and monographs 28.391-428.  Mouton.",
      "link": ""
    },
    {
      "id": 99,
      "author": "Thompson, Laurence C.",
      "year": "1979",
      "title": "Salishan and the northwest",
      "reference": "In The Languages of Native America, ed. Campbell and Mithun. Austin: University of Texas Press.",
      "link": ""
    },
    {
      "id": 100,
      "author": "Thompson, Laurence C.",
      "year": "1976",
      "title": "The Northwest",
      "reference": "Native Languages of the Americas Vol. I, ed. Thomas A. Sebeok. New York: Plenum Press.",
      "link": ""
    },
    {
      "id": 101,
      "author": "Van Eijk, Jan P.",
      "year": "2008",
      "title": "A bibliography of Salish linguistics",
      "reference": "Northwest Journal of Linguistics 2.3. 1-128.",
      "link": "http://www.sfu.ca/nwjl/Articles/V002_N03/VanEijkSalishBiblio.pdf",
      "linktext": "here"
    },
    {
      "id": 102,
      "author": "Vincent, Audra",
      "year": "2014",
      "title": "Coeur d'Alene Aspect",
      "reference": "MA Thesis. University of British Columbia.",
      "link": ""
    },
    {
      "id": 103,
      "author": "Vincent, Audra",
      "year": "2009",
      "title": "What are Native tribes in the Northwest doing to revive their languages?",
      "reference": "McNair Scholars Journal 8. 347-373.  University of Washington.",
      "link": ""
    },
    {
      "id": 104,
      "author": "Wagner, Jill Maria",
      "year": "1997",
      "title": "Language, Power, and Ethnicity on the Coeur d'Alene Reservation",
      "reference": "Ph.D. Dissertation. Washington State University.",
      "link": ""
    },
    {
      "id": 105,
      "author": "Woodworth-Ney, L. E.",
      "year": "1996",
      "title": "Tribal sovereignty betrayed: the conquest of the Coeur d'Alene Indian reservation, 1840-1905",
      "reference": "Pullum: Washington State University dissertation.",
      "link": ""
    }
  ]
  
 const spelling = [
    {
      "id": 1,
      "reichard": "a",
      "nicodemus": "a",
      "salish": "a",
      "english": "f<b>a</b>ther",
      "note": ""
    },
    {
      "id": 2,
      "reichard": "á",
      "nicodemus": "<u>a</u>",
      "salish": "á",
      "english": "f<b>a</b>ther",
      "note": "underlines or accents indicate the vowel is stressed"
    },
    {
      "id": 3,
      "reichard": "b",
      "nicodemus": "b",
      "salish": "b",
      "english": "<b>b</b>at",
      "note": ""
    },
    {
      "id": 4,
      "reichard": "tc",
      "nicodemus": "ch",
      "salish": "č",
      "english": "<b>ch</b>ur<b>ch</b>",
      "note": ""
    },
    {
      "id": 5,
      "reichard": "tc'",
      "nicodemus": "ch'",
      "salish": "č'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 6,
      "reichard": "ts",
      "nicodemus": "ts",
      "salish": "c",
      "english": "<b>ts</b>i<b>ts</b>i fly",
      "note": ""
    },
    {
      "id": 7,
      "reichard": "ts'",
      "nicodemus": "ts'",
      "salish": "c'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 8,
      "reichard": "d",
      "nicodemus": "d",
      "salish": "d",
      "english": "<b>d</b>og",
      "note": ""
    },
    {
      "id": 9,
      "reichard": "ä",
      "nicodemus": "e",
      "salish": "ɛ, e",
      "english": "<b>e</b>gg",
      "note": ""
    },
    {
      "id": 10,
      "reichard": "ä́",
      "nicodemus": "<u>e</u>",
      "salish": "ɛ́, é",
      "english": "<b>e</b>gg",
      "note": "underlines or accents indicate the vowel is stressed"
    },
    {
      "id": 11,
      "reichard": "E,ι, ụ",
      "nicodemus": "no form",
      "salish": "ə",
      "english": "sof<b>a</b>",
      "note": ""
    },
    {
      "id": 12,
      "reichard": "gw",
      "nicodemus": "gw",
      "salish": "gʷ",
      "english": "lin<b>gu</b>ini",
      "note": ""
    },
    {
      "id": 13,
      "reichard": "h",
      "nicodemus": "h",
      "salish": "h",
      "english": "<b>h</b>ello",
      "note": ""
    },
    {
      "id": 14,
      "reichard": "i",
      "nicodemus": "i",
      "salish": "i",
      "english": "mach<b>i</b>ne",
      "note": ""
    },
    {
      "id": 15,
      "reichard": "í",
      "nicodemus": "<u>i</u>",
      "salish": "í",
      "english": "mach<b>i</b>ne",
      "note": "underlines or accents indicate the vowel is stressed"
    },
    {
      "id": 16,
      "reichard": "dj",
      "nicodemus": "j",
      "salish": "ǰ",
      "english": "<b>j</b>ar",
      "note": ""
    },
    {
      "id": 17,
      "reichard": "kʷ",
      "nicodemus": "kw",
      "salish": "kʷ",
      "english": "<b>qu</b>een",
      "note": ""
    },
    {
      "id": 18,
      "reichard": "k'ʷ",
      "nicodemus": "k'w",
      "salish": "k'ʷ",
      "english": "no example",
      "note": ""
    },
    {
      "id": 19,
      "reichard": "no form",
      "nicodemus": "kh",
      "salish": "no form",
      "english": "no example",
      "note": ""
    },
    {
      "id": 20,
      "reichard": "xʷ",
      "nicodemus": "khw",
      "salish": "xʷ",
      "english": "no example",
      "note": "The symbol 'x' may be used in the Reichard and Salishan systems to write the sound /xʷ/ when it occurs before /u/."
    },
    {
      "id": 21,
      "reichard": "q",
      "nicodemus": "q",
      "salish": "q",
      "english": "no example",
      "note": ""
    },
    {
      "id": 22,
      "reichard": "q'",
      "nicodemus": "q'",
      "salish": "q'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 23,
      "reichard": "qʷ",
      "nicodemus": "qw",
      "salish": "qʷ",
      "english": "no example",
      "note": ""
    },
    {
      "id": 24,
      "reichard": "q'ʷ",
      "nicodemus": "q'w",
      "salish": "q'ʷ",
      "english": "no example",
      "note": ""
    },
    {
      "id": 25,
      "reichard": "x̣",
      "nicodemus": "qh,",
      "salish": "x̣",
      "english": "no example",
      "note": ""
    },
    {
      "id": 26,
      "reichard": "x̣ʷ",
      "nicodemus": "qhw",
      "salish": "x̣ʷ",
      "english": "no example",
      "note": ""
    },
    {
      "id": 27,
      "reichard": "l",
      "nicodemus": "l",
      "salish": "l",
      "english": "<b>l</b>ike",
      "note": ""
    },
    {
      "id": 28,
      "reichard": "l'",
      "nicodemus": "'l",
      "salish": "l'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 29,
      "reichard": "ɫ",
      "nicodemus": "ɫ",
      "salish": "ɫ",
      "english": "no example",
      "note": ""
    },
    {
      "id": 30,
      "reichard": "m",
      "nicodemus": "m",
      "salish": "m",
      "english": "<b>m</b>o<b>m</b>",
      "note": ""
    },
    {
      "id": 31,
      "reichard": "m'",
      "nicodemus": "'m",
      "salish": "m'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 32,
      "reichard": "n",
      "nicodemus": "n",
      "salish": "n",
      "english": "now",
      "note": ""
    },
    {
      "id": 33,
      "reichard": "n'",
      "nicodemus": "'n",
      "salish": "n'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 34,
      "reichard": "ɔ",
      "nicodemus": "o",
      "salish": "ɔ, o",
      "english": "l<b>a</b>w",
      "note": ""
    },
    {
      "id": 35,
      "reichard": "ɔ́",
      "nicodemus": "<u>o</u>",
      "salish": "ɔ́, ó",
      "english": "l<b>a</b>w",
      "note": "underlines or accents indicate the vowel is stressed"
    },
    {
      "id": 36,
      "reichard": "p",
      "nicodemus": "p",
      "salish": "p",
      "english": "<b>p</b>at",
      "note": ""
    },
    {
      "id": 37,
      "reichard": "p'",
      "nicodemus": "p'",
      "salish": "p'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 38,
      "reichard": "r",
      "nicodemus": "r",
      "salish": "r",
      "english": "fa<b>r</b>",
      "note": ""
    },
    {
      "id": 39,
      "reichard": "r'",
      "nicodemus": "'r",
      "salish": "r'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 40,
      "reichard": "R",
      "nicodemus": "(",
      "salish": "ʕ",
      "english": "no example",
      "note": "Nicodemus 1975a,b uses both '(' and ')' occasionally to write the pharyngeals."
    },
    {
      "id": 41,
      "reichard": "R'",
      "nicodemus": "'(",
      "salish": "ʕ'",
      "english": "no example",
      "note": "Nicodemus 1975a,b uses both '(' and ')' occasionally to write the pharyngeals."
    },
    {
      "id": 42,
      "reichard": "ṛʷ",
      "nicodemus": "(w",
      "salish": "ʕʷ",
      "english": "no example",
      "note": "Nicodemus 1975a,b uses both '(' and ')' occasionally to write the pharyngeals."
    },
    {
      "id": 43,
      "reichard": "ṛ'ʷ",
      "nicodemus": "'(w",
      "salish": "ʕ'ʷ",
      "english": "no example",
      "note": "Nicodemus 1975a,b uses both '(' and ')' occasionally to write the pharyngeals."
    },
    {
      "id": 44,
      "reichard": "s",
      "nicodemus": "s",
      "salish": "s",
      "english": "<b>s</b>un",
      "note": ""
    },
    {
      "id": 45,
      "reichard": "c",
      "nicodemus": "sh",
      "salish": "š",
      "english": "<b>sh</b>ell",
      "note": ""
    },
    {
      "id": 46,
      "reichard": "t",
      "nicodemus": "t",
      "salish": "t",
      "english": "<b>t</b>ar",
      "note": ""
    },
    {
      "id": 47,
      "reichard": "t'",
      "nicodemus": "t'",
      "salish": "t'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 48,
      "reichard": "u",
      "nicodemus": "u",
      "salish": "u",
      "english": "J<b>u</b>piter",
      "note": ""
    },
    {
      "id": 49,
      "reichard": "ú",
      "nicodemus": "<u>u</u>",
      "salish": "ú",
      "english": "J<b>u</b>piter",
      "note": "underlines or accents indicate the vowel is stressed"
    },
    {
      "id": 50,
      "reichard": "w",
      "nicodemus": "w",
      "salish": "w",
      "english": "<b>w</b>agon",
      "note": ""
    },
    {
      "id": 51,
      "reichard": "w'",
      "nicodemus": "'w",
      "salish": "w'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 52,
      "reichard": "y",
      "nicodemus": "y",
      "salish": "y",
      "english": "<b>y</b>ard",
      "note": ""
    },
    {
      "id": 53,
      "reichard": "y'",
      "nicodemus": "'y",
      "salish": "y'",
      "english": "no example",
      "note": ""
    },
    {
      "id": 54,
      "reichard": "'",
      "nicodemus": "'",
      "salish": "ʔ",
      "english": "uh - oh",
      "note": ""
    }
  ]
 
 const consonants = [
    {
      "id": 1,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "none",
      "labial": "p",
      "alveolar": "t",
      "uvular": "q",
      "glottal": "'"
    },
    {
      "id": 2,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "none",
      "labial": "p",
      "alveolar": "t",
      "uvular": "q",
      "glottal": "ʔ"
    },
    {
      "id": 3,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "none",
      "labial": "p",
      "alveolar": "t",
      "uvular": "q",
      "glottal": "'"
    },
    {
      "id": 4,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "glottal",
      "labial": "p'",
      "alveolar": "t'",
      "uvular": "q'"
    },
    {
      "id": 5,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "glottal",
      "labial": "p'",
      "alveolar": "t'",
      "uvular": "q'"
    },
    {
      "id": 6,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "glottal",
      "labial": "p'",
      "alveolar": "t'",
      "uvular": "q'"
    },
    {
      "id": 7,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "labial",
      "velar": "kw",
      "uvular": "qw"
    },
    {
      "id": 8,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "labial",
      "velar": "kʷ",
      "uvular": "qʷ"
    },
    {
      "id": 9,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "labial",
      "velar": "kʷ",
      "uvular": "qʷ"
    },
    {
      "id": 10,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "both",
      "velar": "k'w",
      "uvular": "q'w"
    },
    {
      "id": 11,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "both",
      "velar": "k'ʷ",
      "uvular": "q'ʷ"
    },
    {
      "id": 12,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "stop",
      "secondary": "both",
      "velar": "k'ʷ",
      "uvular": "q'ʷ"
    },
    {
      "id": 13,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "affricate",
      "secondary": "none",
      "alveopalatal": "ts",
      "palatal": "ch"
    },
    {
      "id": 14,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "affricate",
      "secondary": "none",
      "alveopalatal": "c",
      "palatal": "č"
    },
    {
      "id": 15,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "affricate",
      "secondary": "none",
      "alveopalatal": "ts",
      "palatal": "tc"
    },
    {
      "id": 16,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "affricate",
      "secondary": "glottal",
      "alveopalatal": "ts'",
      "palatal": "ch'"
    },
    {
      "id": 17,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "affricate",
      "secondary": "glottal",
      "alveopalatal": "c'",
      "palatal": "č'"
    },
    {
      "id": 18,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "affricate",
      "secondary": "glottal",
      "alveopalatal": "ts'",
      "palatal": "tc'"
    },
    {
      "id": 19,
      "orthography": "N",
      "type": "consonant",
      "voice": "V",
      "manner": "stop",
      "secondary": "none",
      "labial": "b",
      "alveolar": "d"
    },
    {
      "id": 20,
      "orthography": "S",
      "type": "consonant",
      "voice": "V",
      "manner": "stop",
      "secondary": "none",
      "labial": "b",
      "alveolar": "d"
    },
    {
      "id": 21,
      "orthography": "R",
      "type": "consonant",
      "voice": "V",
      "manner": "stop",
      "secondary": "none",
      "labial": "b",
      "alveolar": "d"
    },
    {
      "id": 22,
      "orthography": "N",
      "type": "consonant",
      "voice": "V",
      "manner": "stop",
      "secondary": "labial",
      "velar": "gw"
    },
    {
      "id": 23,
      "orthography": "S",
      "type": "consonant",
      "voice": "V",
      "manner": "stop",
      "secondary": "labial",
      "velar": "gʷ"
    },
    {
      "id": 24,
      "orthography": "R",
      "type": "consonant",
      "voice": "V",
      "manner": "stop",
      "secondary": "labial",
      "velar": "gw"
    },
    {
      "id": 25,
      "orthography": "N",
      "type": "consonant",
      "voice": "V",
      "manner": "affricate",
      "secondary": "none",
      "palatal": "j"
    },
    {
      "id": 26,
      "orthography": "S",
      "type": "consonant",
      "voice": "V",
      "manner": "affricate",
      "secondary": "none",
      "palatal": "ǰ"
    },
    {
      "id": 27,
      "orthography": "R",
      "type": "consonant",
      "voice": "V",
      "manner": "affricate",
      "secondary": "none",
      "palatal": "dj"
    },
    {
      "id": 28,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "fricative",
      "secondary": "none",
      "alveolar": "s",
      "lateral": "∤",
      "palatal": "sh",
      "uvular": "qh",
      "glottal": "h"
    },
    {
      "id": 29,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "fricative",
      "secondary": "none",
      "alveolar": "s",
      "lateral": "ɫ",
      "palatal": "š",
      "uvular": "x̣",
      "glottal": "h"
    },
    {
      "id": 30,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "fricative",
      "secondary": "none",
      "alveolar": "s",
      "lateral": "ɫ",
      "palatal": "c",
      "uvular": "x̣",
      "glottal": "h"
    },
    {
      "id": 31,
      "orthography": "N",
      "type": "consonant",
      "voice": "VL",
      "manner": "fricative",
      "secondary": "labial",
      "velar": "khw",
      "uvular": "qhw"
    },
    {
      "id": 32,
      "orthography": "S",
      "type": "consonant",
      "voice": "VL",
      "manner": "fricative",
      "secondary": "labial",
      "velar": "xʷ",
      "uvular": "x̣ʷ"
    },
    {
      "id": 33,
      "orthography": "R",
      "type": "consonant",
      "voice": "VL",
      "manner": "fricative",
      "secondary": "labial",
      "velar": "xʷ",
      "uvular": "x̣ʷ"
    },
    {
      "id": 34,
      "orthography": "N",
      "type": "consonant",
      "voice": "RN",
      "manner": "nasal",
      "secondary": "none",
      "labial": "m",
      "alveolar": "n"
    },
    {
      "id": 35,
      "orthography": "S",
      "type": "consonant",
      "voice": "RN",
      "manner": "nasal",
      "secondary": "none",
      "labial": "m",
      "alveolar": "n"
    },
    {
      "id": 36,
      "orthography": "R",
      "type": "consonant",
      "voice": "RN",
      "manner": "nasal",
      "secondary": "none",
      "labial": "m",
      "alveolar": "n"
    },
    {
      "id": 37,
      "orthography": "N",
      "type": "consonant",
      "voice": "RN",
      "manner": "nasal",
      "secondary": "glottal",
      "labial": "'m",
      "alveolar": "'n"
    },
    {
      "id": 38,
      "orthography": "S",
      "type": "consonant",
      "voice": "RN",
      "manner": "nasal",
      "secondary": "glottal",
      "labial": "m'",
      "alveolar": "n'"
    },
    {
      "id": 39,
      "orthography": "R",
      "type": "consonant",
      "voice": "RN",
      "manner": "nasal",
      "secondary": "glottal",
      "labial": "m'",
      "alveolar": "n'"
    },
    {
      "id": 40,
      "orthography": "N",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "none",
      "alveopalatal": "r",
      "lateral": "l",
      "palatal": "y",
      "velar": "w",
      "pharyngeal": "("
    },
    {
      "id": 41,
      "orthography": "S",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "none",
      "alveopalatal": "r",
      "lateral": "l",
      "palatal": "y",
      "velar": "w",
      "pharyngeal": "ʕ"
    },
    {
      "id": 42,
      "orthography": "R",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "none",
      "alveopalatal": "r",
      "lateral": "l",
      "palatal": "y",
      "velar": "w",
      "pharyngeal": "R"
    },
    {
      "id": 43,
      "orthography": "N",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "glottal",
      "alveopalatal": "'r",
      "lateral": "'l",
      "palatal": "'y",
      "velar": "'w",
      "pharyngeal": "'("
    },
    {
      "id": 44,
      "orthography": "S",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "none",
      "alveopalatal": "r'",
      "lateral": "l'",
      "palatal": "y'",
      "velar": "w'",
      "pharyngeal": "ʕ'"
    },
    {
      "id": 45,
      "orthography": "R",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "none",
      "alveopalatal": "r'",
      "lateral": "l'",
      "palatal": "y'",
      "velar": "w'",
      "pharyngeal": "R'"
    },
    {
      "id": 46,
      "orthography": "N",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "labial",
      "pharyngeal": "(w"
    },
    {
      "id": 47,
      "orthography": "S",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "labial",
      "pharyngeal": "ʕʷ"
    },
    {
      "id": 48,
      "orthography": "R",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "labial",
      "pharyngeal": "ṛʷ"
    },
    {
      "id": 49,
      "orthography": "N",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "both",
      "pharyngeal": "'(w"
    },
    {
      "id": 50,
      "orthography": "S",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "both",
      "pharyngeal": "ʕ'ʷ"
    },
    {
      "id": 51,
      "orthography": "R",
      "type": "consonant",
      "voice": "RN",
      "manner": "approximant",
      "secondary": "both",
      "pharyngeal": "ṛ'ʷ"
    }
  ]
  
 const vowels = [
    {
      "id": 1,
      "orthography": "N",
      "height": "high",
      "front": "i",
      "central": "",
      "back": "u"
    },
    {
      "id": 2,
      "orthography": "S",
      "height": "high",
      "front": "i",
      "central": "",
      "back": "u"
    },
    {
      "id": 3,
      "orthography": "R",
      "height": "high",
      "front": "i",
      "central": "",
      "back": "u"
    },
    {
      "id": 4,
      "orthography": "N",
      "height": "mid",
      "front": "e",
      "central": "",
      "back": "o"
    },
    {
      "id": 5,
      "orthography": "S",
      "height": "mid",
      "front": "ɛ, e",
      "central": "ə",
      "back": "ɔ, o"
    },
    {
      "id": 6,
      "orthography": "R",
      "height": "mid",
      "front": "ä",
      "central": "E,ι, ụ",
      "back": "ɔ"
    },
    {
      "id": 7,
      "orthography": "N",
      "height": "low",
      "front": "",
      "central": "a",
      "back": ""
    },
    {
      "id": 8,
      "orthography": "S",
      "height": "low",
      "front": "",
      "central": "a",
      "back": ""
    },
    {
      "id": 9,
      "orthography": "R",
      "height": "low",
      "front": "",
      "central": "a",
      "back": ""
    }
  ]

module.exports = {
  spelling: spelling,
  bibliography: bibliography,
  vowels: vowels,
  consonants: consonants,
  texts: texts,
  textfiles: textfiles,
  textimages: textimages,
  audiosets: audiosets,
  audiofiles: audiofiles,
  elicitations: elicitations
};