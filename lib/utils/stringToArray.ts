function namesToCommaArray(input) {
    return console.log (input
      .split(/\r?\n/)                 // split by line
      .map(line => line.trim())        // remove leading/trailing spaces
      .filter(line => line.length > 0) // remove empty lines
      .map(line => `${line},`)    )    // append comma
  }   


  



  const dbSchools = `Luba Comp. High School (Snr), Ijebu-Ode
Ikangba Comp. High School, Ikangba
Anglican Comp. High School, (JNR)
Anglican Comp. High School, (JNR)
Anglican Comp. High School, (SNR)
Anglican Comp. High School, (SNR)
Anglican Comp. High School, (SNR)
Anglican Comp. High School, (JNR)
Aiyepe Comp. High School, Aiyepe
Ososa Comp. High School, (JNR)
Anglican Comp. High School, (JNR)
Odu'a Comp. High School, (JNR)
Odu'a Comp. High School, (SNR)
Odu'a Comp. High School, (SNR)
Ijebu Southern District Grammar School, Ala
St, Kizitos H/S (Snr), Iwopin.
Odu'a Comp. High School, (SNR)
Sonyindo Community High School Snr,Sagamu
Ibefun/Ilado Comp. High School (Snr)
Odu'a Comp. High School, (SNR)
Imagbon/Imaka Comp. High School
Aiyepe Comp. High School, Aiyepe
Ibefun/Ilado Comp. High (JNR) School,
Odogbolu Grammar School (SNR), Odogbolu 
Odogbolu Grammar School (JNR), Odogbolu 
Odogbolu Comp. High School Snr, Odogbolu
Odogbolu Grammar School (JNR), Odogbolu 
Multilateral Grammar School (SNR)
Odogbolu Comp. High School (JNR), Odogbolu
Odogbolu Comp. High School (SNR), Odogbolu
Odogbolu Comp. High School (JNR), Odogbolu
Ikangba Comp. High School, Ikangba
Ikenne Commiunity Grammar School (SNR), Ikenne
Ikangba Comp. High School, Ikangba
Ikangba Comp. High School, Ikangba
Anglican Comp. High School, (SNR)
Odogbolu Grammar School (SNR), Odogbolu 
Ososa Comp. High School, (SNR)
Ibefun Ilado Comm. H/S Junior.
Ososa Comp. High School, (SNR)
Moraika Comp. High School
Imodi-Ijasi Comp. High School,
Ogbo Comm. Comp. High School,
Anglican Comp. High School, (JNR)
Ibefun/Ilado Comp. High (JNR) School,
Moraika Comp. High School
Ikangba Comp. High School, Ikangba
Ibefun/Ilado Comp. High School (SNR)
Idowa Comp. High School
Ogbo Comm. Comp. High School,
Moraika Comp. High School
Imodi-Ijasi Comp. High School,
Imodi-Ijasi Comp. High School,
Aiyepe Comp. High School, Aiyepe
Ibefun/Ilado Comp. High School (JNR)
Idowa Comp. High School
Idowa Comp. High School
Idowa Comp. High School
Muslim Girls High School, Ijebu-ode (Jnr))
Igbile Community High School, Igbile
Imodi-Ijasi Comp. High School,
Omu-Ajose Comp. High School (Snr)
Ososa Comp. High School (SNR), Ososa
Aiyepe Comp. High School, Aiyepe
Ifesowapo Comp. High School, Imodi-Imosan
Idowa Comp. High School
Ikangba Comp. High School, Ikangba
Odua Comp High. School (SNR)
Ososa Comp. High School (JNR), Ososa
Ogbo Comm. Comp. High School,
Ikangba Comp. High School, Ikangba
Ibefun/Ilado Comp. High School (SNR)
Ijebu Southern District Grammar School, Ala
Moraika Comp. High School
Ososa Comp. High School (SNR), Ososa
Ilusin Grammar School Senior, Ilusin
Community H/S Ibiade, Junior., Ibiade
Abigi Community Grammar School, Abigi
Omu-Ajose Comp. High School (Snr)
Imagbon/Imaka Comp. High School
Efire Comm. H/S, Efire.
Titilayo Agbaje Memorial Comp. High School
Ifesowapo Comp. High School, Imodi-Imosan
Multilateral Grammar School (SNR)
Moraika Comp. High School
Moraika Comp. High School
Ifesowapo Comp. High School, Imodi-Imosan
Ifesowapo Comp. High School, Imodi-Imosan
Ifesowapo Comp. High School, Imodi-Imosan
St. Kizito Gramar School, Junior, Iwopin
Ifesowapo Comp. High School, Imodi-Imosan
Ifesowapo Comp. High School, Imodi-Imosan
Ikangba Comp. High School, Ikangba
Odua Comp High. School (SNR)
Titilayo Agbaje Memorial Comp. High School
Titilayo Agbaje Memorial Comp. High School
St. Kizito Gramar School, Senior, Iwopin
Moraika Comp. High School
Moraika Comp. High School
Titilayo Agbaje Memorial Comp. High School
Ibiade Compr. H/s Junior, Ibiade.
Titilayo Agbaje Memorial Comp. High School
Aiyepe Comp. High School, Aiyepe
Ahmadiyyah Comprehensive H/s, Jnr, Oni.
Anglican Comp. High School (SNR), Ikoto
Ibefun/Ilado Comp. High School (SNR)
Igbile Community High School, Igbile
Imodi-Ijasi Comp. High School,
Moraika Comp. High School
Idowa Comp. High School
Ibefun/Ilado Comp. High School (SNR)
Aiyepe Comp. High School, Aiyepe
Community Grammar School, Aiyepe
Multilateral Grammar School (JNR), Okun - Owa
Idowa Comp. High School
Anglican Comp. High School (SNR), Ikoto
Anglican Comp. High School (SNR), Ikoto
Owo Comm High School, Owo, Yewa South.
Community Grammar School, Aiyepe
Community H/S Ibiade, Senior., Ibiade
Igbile Community High School, Igbile
Ogbo Comm. Comp. High School,
Ibefun/Ilado Comp. High School (SNR)
Ibefun/Ilado Comp. High School (SNR)
Ajebandele J4 High School, Ajebandele
Odogbolu Grammar School (SNR), Odogbolu
Adeola Odutola College (SNR)
Ilese Comp. High School (JNR), Ilese
Batoro Community Grammar School, Sagamu (Snr)
Ogooluwa Community Model. Secondary School (SNR), Malato, Ogijo
Ijebu Southern District Grammar School, Ala
Batoro Community Grammar School (Jnr), Sagamu
Titilayo Agbaje Memorial Comp. High School
Idowa Comp. High School, Idowa

`   

namesToCommaArray(dbSchools)



// [
//     "Ajogbo Grammar School (Snr), Ajibode, Ota,",
//     "Yewa Secondary School (Snr), Igbogila,",
//     "St.John Anglican High School (Snr.), Kuto,",
//     "St. Stephen Comprehensive High School (Snr), Ado-Odo,",
//     "Anglican Grammar School (Jnr.), Okenla, Ifo,",
//     "FACM (UNA) High School (Comb), Igbogila,",
//     "Lisabi Grammar School (Jnr), Isabo, Abk,",
//     "Baptist Girls' College (Snr.), Idi-Aba,",
//     "Ijemo Titun High School (Snr), Ibara,",
//     "Anglican High School (Jnr.), Ibara,",
//     "Asero High School (Snr.), Asero,",
//     "Community High School (Comb), Afon,",
//     "Ijemo Titun High School (Snr), Ibara,",
//     "Ajebo Community High School (Jnr.), Ajebo, Obafemi Owode,",
//     "Catholic Comprehensive High School (Snr.), Onikolobo,",
//     "Owode Secondary School (Snr), Owode Yewa,",
//     "Rev. Kuti Memmotial Grammar School (Jnr.), Isabo,",
//     "N.U.D High School (Snr.), Oke-Ijeun,",
//     "Ketu College (Snr), Igan Alade, Yewa North,",
//     "N.U.D High School (Jnr.), Oke-Ijeun,",
//     "Baptist Girls' College (Snr.), Idi-Aba,",
//     "Methodist High School (Snr.), Ogbe,",
//     "Muslim Community Grammar School (Comb), Oja Odan,",
//     "Local Government Secondary Commercial School (Jnr), Atan Ota,",
//     "N.U.D High School (Jnr.), Oke-Ijeun,",
//     "N.U.D High School (Jnr.), Oke-Ijeun,",
//     "Alapako Oni Community High School (Comb), Oni, Obafemi Owode,",
//     "Methodist High School (Snr.), Ogbe,",
//     "Magboro Community High School (Comb), Akeran,",
//     "Kobape Community High School (Comb), Kobape,",
//     "N.U.D High School (Jnr.), Oke-Ijeun,",
//     "Community High School (Comb), Adesanolu, Obafemi Owode,",
//     "Igbore High School (Snr.), Igbore,",
//     "Adeoye Lambo Memorial Grammar School (Comb), Obada Oko,",
//     "Olorunkole Grammar School (Comb), Kajola,",
//     "Igbore High School (Jnr.), Igbore,",
//     "Abeokuta Girls' Grammar School (Snr.), Onikolobo,",
//     "Olorunkole Grammar School (Comb), Kajola,",
//     "Oba Community Comprehensive High School (Comb), Oba, Obafemi Owode,",
//     "Unity High School (Jnr.), Kajola Ibooro,",
//     "Alapako Oni Community High School (Comb), Oni, Obafemi Owode,",
//     "Ogunmakin High School (Jnr), Ogunmakin, Obafemi Owode,",
//     "Alapako Oni Community High School (Comb), Oni, Obafemi Owode,",
//     "Obada Grammar School (Comb), Obada, Imeko,",
//     "Rev. Kuti Memmotial Grammar School (Snr.), Isabo,",
//     "Baptist Boys' High School (Snr.), Asero,",
//     "Ogunmakin High School (Snr), Ogunmakin, Obafemi Owode,",
//     "Baptist Boys' High School (Snr.), Asero,",
//     "Egba High School (Snr.), Asero,",
//     "Alapako Oni Community High School (Comb), Oni, Obafemi Owode,",
//     "Egba Obafemi Community Grammar School (Jnr.), Obafemi Owode,",
//     "Ilewo Community High School (Comb), Ilewo, Abeokuta North,",
//     "Lisabi Grammar School (Snr.), Idi-Aba,",
//     "Ajogbo Grammar School (Snr), Ajibode, Ota,",
//     "Igiri High School (Snr), Ijofin,",
//     "Lisabi Grammar School (Snr.), Idi-Aba,",
//     "Muslim High School (Comb), Isolu,",
//     "Orile-Imo High School (Comb), Orile Imo, Obaafemi Owode,",
//     "Olorunkole Grammar School (Comb), Kajola,Obafemi Owode,",
//     "Ajebo Community High School (Comb), Ajebo, Obafemi Owode,",
//     "N.U.D. Grammar School (Jnr.), Solu, Ifo,",
//     "Iyew High School (Snr), Ajilete,",
//     "Ajebo Community High School (Comb), Ajebo, Obafemi Owode,",
//     "Community High School (Comb), Abaren, Obafemi Owode,",
//     "Unity High School (Jnr.), Ijoko Ota,",
//     "Saje High School (Jnr.), Saje,",
//     "Ifo High School (Snr.), Ifo,",
//     "Muslim High School (Comb), Ilara, Imeko Afon,",
//     "Community High School (Comb), Ebute Igbooro,",
//     "Lisabi Grammar School (Snr), Idi-Aba,",
//     "Community High School (Snr), Tube, Ipokia,",
//     "Iwoye Ketu Community High School (Comb), Iwoye Ketu, Imeko Afon,",
//     "Community High School (Comb), Abaren, O/Owode,",
//     "Ajebo Community High School (Comb), Ajebo, Obafemi,",
//     "Alaye High School (Snr), Ayetoro,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Ebenezer Grammar School ( Snr), Elega,",
//     "Siun High School (Comb), Siun, Obafemi Owode,",
//     "Igbore High School (Snr.), Igbore,",
//     "Community High School (Comb), Adesanolu, O/Owode,",
//     "Lantoro High School (Jnr.), Oke-Lantoro,",
//     "Rev. Kuti Memmorial Grammar School (Snr.), Isabo,",
//     "Olorunkole Grammar School (Comb), Kajola, Obafemi Owode,",
//     "Ibogun Egbeda Comprehensive High School (Comb), Ifo,",
//     "Community High School (Comb), Iro, Obafemi Owode,",
//     "Nazareth High School (Snr), Imeko,",
//     "Orile Ilugun High School (Snr.), Odeda,",
//     "Olorunkole Grammar School (Comb), Kajola, Obafemi Owode,",
//     "Olorunkole Grammar School (Comb), Kajola, Obafemi Owode,",
//     "N.U.D. High School (Snr.), Oke-Ijeun,",
//     "Community High School (Comb), Abaren, Obafemi Owode,",
//     "Alaketu High School (Snr), Imeko,",
//     "Ketu College (Jnr), Igan Alade, Yewa North,",
//     "N.U.D. High School (Snr.), Oke-Ijeun,",
//     "Community High School (Comb), Adesanolu, Obafemi Owode,",
//     "Olorunkole Grammar School (Comb), Kajola, Obafemi Owode,",
//     "Macjob Grammar School (Snr.), Onikolobo,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Anglican High School (Snr.), Onikolobo,",
//     "Macjob Grammar School (Snr.), Onikolobo,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Okepata Community High School (Comb), Ososun, Ifo,",
//     "Rev. Kuti Memmorial Grammar School (Snr.) Isabi,",
//     "Methodist High School (Snr.), Ogbe,",
//     "Ajebo Community High School (Comb), Ajebo, Obafemi Owode,",
//     "Iwoye Ketu Community High School (Comb), Iwoye Ketu, Imeko Afon,",
//     "Rev. Kuti Memmorial Grammar School (Jnr.), Isabo,",
//     "Community High School (Comb), Abaaren, Obafemi Owode,",
//     "Alagbagba Community High School (Comb), Alagbagba, Odeda,",
//     "Community Comprehensive High School (Comb), Eggua, Yewa North,",
//     "Baptist Boys' High School (Snr.), Saje,",
//     "Alaye High School (Snr), Ayetoro,",
//     "Lisabi Grammar School (Snr.), Idi Aba,",
//     "Asero High School (Snr.), Asero,",
//     "Lantoro High School (Snr.), Oke-Lantoro,",
//     "Community High School (Comb), Iro,",
//     "Baptist Girls College (Snr.), Idi-Aba,",
//     "Lantoro High School (Snr.), Oke-Lantoro,",
//     "Community High School (Comb), Abaren,",
//     "Asero High School (Snr.), Asero,",
//     "Ogunmakin Community High School (Snr) Sowunmi,",
//     "Ojumo Community High School (Snr), Ihunbo,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Baptist Boys' High School (Jnr.), Saje,",
//     "Saje High School(Jnr.), Saje,",
//     "District High School (Comb), Ipokia,",
//     "Asero High School (Snr.), Asero,",
//     "Catholic Comprehensive High School (Snr.), Onikolobo,",
//     "AUD Comprehensive College (Snr), Ota,",
//     "Methodist High School (Snr.), Ogbe,",
//     "Methodist High School (Snr.), Ogbe,",
//     "N.U.D High School (Snr.), Oke-Ijeun,",
//     "Ajebo Community High School (Comb), Ajebo, Obafemi Owode,",
//     "Anglican High School (Snr.), Onikolobo,",
//     "Alapako Oni Community High School (Comb), Alapako-Oni, Obafemi Owode,",
//     "Abeokuta Grammar School (Jnr.), Idi Aba,",
//     "Oronna High School (Snr), Ilaro,",
//     "Orita Community High School (Snr), Oja Odan, Yewa North,",
//     "Premier Grammar School (Snr), Lafenwa,",
//     "Owo Community High School (Comb),Owo, Yewa South,",
//     "Catholic Comprehensive High School (Snr.), Onikolobo,",
//     "Methodist High School (Jnr.), Ogbe,",
//     "Abeokuta Girls' Grammar School (Snr.), Onikolobo,",
//     "Abeokuta Grammar School (Snr.). Idi-Aba,",
//     "Anglican High School (Snr.), Quarry.,",
//     "Ogunmakin Community High School (Snr.),Sowunmi, Obafemi Owode,",
//     "Ofada Community Comprehensive High School (Jnr.), Ofada,",
//     "Lisabi Grammar School (Snr), Idi-Aba, Abk,",
//     "Okepata Comprehensive High School (Comb), Ososun, Ifo,",
//     "Abeokuta Grammar School (Snr.). Idi-Aba,",
//     "Gbenopo Community High School (Comb), Bandu,",
//     "Owo Community High School (Comb),Owo, Yewa South,",
//     "Asero High School (Snr.), Asero,",
//     "Ijemo Titun High School (Snr.), Ijemo,",
//     "Community High School (Jnr), Tube, Ipokia,",
//     "African Church Grammar School (Snr.), Ita Iyalode, Abeokuta,",
//     "Obalaju High School (Comb), Joga Orile,",
//     "Rev. Kuti Memorial Grammar School (Snr.), Isabo,",
//     "Abeokuta Grammar School (Snr.), Idi Aba,",
//     "Community High School (Snr), Ilara, Imeko Afon,",
//     "Igbore High School (Snr.), Igbore,",
//     "Ajebo Community High School (Comb), Ajebo, Obafemi Owode,",
//     "Owode Ketu Commercial High School (Snr.), Owode Ketu,",
//     "Igbore High School (Snr.), Igbore, Abeokuta,",
//     "Kobape High School (Comb.), Kobape,",
//     "Alamuwa Grammar School (Snr), Ado-Odo,",
//     "Lantoro High School (Snr.), Oke-Lantoro,",
//     "Owode Ota Grammar School, Owode Ota,",
//     "Nazareth High School (Snr), Imeko,",
//     "N.U.D. High School (Snr.), Oke-Ijeun,",
//     "St. Stephen Comprehensive High School (Jnr), Ado-Odo,",
//     "Baptist Girls' College (Snr.), Idi-Aba,",
//     "Salawu Abiola Comprehensive High School (Jnr.), Osiele, Odeda,",
//     "IJEMO TITUN HIGH SCHOOL (SNR),",
//     "Army Day Secondary School (Snr.), Alamala,",
//     "Yewa College (Snr), Ilaro,",
//     "Egba Obafemi Community Grammar School (Jnr.), Obafe, Obafemi Owode,",
//     "Alagbe Community High School (Comb), Alagbe, Imeko Afon,",
//     "Ajogbo Grammar School (Snr), Ajibode, Ota,",
//     "African Church Grammar School (Jnr.), Ita Iyalode, Abeokuta,",
//     "Obada Grammar School (Comb), Obada, Imeko,",
//     "Alapako Oni Community High School (Comb), Alapako Oni, Obafemi Owode,",
//     "Community High School (Comb), Ohunbe,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Asakanran Grammar School (Comb), Ibeese, Yewa North,",
//     "Ijemo Titun High School (Jnr.), Ijemo, Abk,",
//     "Baptist Girls' College (Snr), Idi-Aba,",
//     "Toyon High School (Comb), Ado-Odo, Ota,",
//     "Iyesi Ota High School (Comb), Iyesi Ota,",
//     "Anglican Grammar School (Jnr.), Ota,",
//     "Community High School (Comb), Adesanolu,",
//     "Owowo Community Comprehensive High School (Comb), Owowo,",
//     "CATHOLIC COMP. HIGH SCHOOL (SNR),",
//     "Anglican High School (Snr.), Quarry,",
//     "Igbore High School(Snr.), Igbore,",
//     "Abeokuta Grammar School (Jnr), Idi-Aba,",
//     "Ibogun Egbeda Comprehensive High School (Comb), Egbeda, Ifo,",
//     "Abeokuta Grammar School (Jnr), Idi-Aba,",
//     "Magboro Community High School (Comb), Akeran,",
//     "Obalaju High School (Comb), Joga Orile,",
//     "Agude Community High School (Comb), Oniro, Ipokia,",
//     "Tayese Community Secondary School (Comb), Ibatefin, Ipokia,",
//     "Nawair-Un-Deen Grammar School (Jnr), Obantoko, Abk,",
//     "Eyinni Comprehensive High School (Comb), Ibooro,",
//     "Toyon High School (Comb), Ado-Odo, Ota,",
//     "Egba Comprehensive High School (Jnr). Asero,",
//     "Muslim Grammar School (Comb), Imeko,",
//     "AUD Comprehensive High School (Comb), Itele Ota,",
//     "Community High School (Snr), Iroko Ota,",
//     "Abeokuta Girls' Grammar School (Jnr.), Onikolobo,",
//     "Rev. Kuti Memorial Grammar School (Snr.), Isabo,",
//     "Baptist Girls' College (Jnr.), Idi-Aba,",
//     "Nawair-Un-Deen Grammar School (Snr), Solu, Ifo,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Araromi Community High School (Comb), Atan Ota,",
//     "Idogo-Ipaja Community High School (Comb), Idogo Ipaja, Yewa South,",
//     "Ijemo Titun High School (Snr.), Ibara,",
//     "FACM (UNA) High School (Comb), Igbogila,",
//     "Igbusi Comprehensive High School (Comb), Ifo,",
//     "Community Comprehensive High School (Comb), Eggua, Yewa North,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Community Comprehensive High School (Comb), Eggua, Yewa North,",
//     "Agbara Grammar School (Comb), Agbara, Ota,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Oke-Ona Grammar School (Comb.), Iberekodo,",
//     "Baptist Girls' College (Jnr), Idi-Aba,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Oke-Ona Grammar School (Comb.), Iberekodo,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Yewa Secondary School (Snr), Igbogila,",
//     "Army Day Secondary School (Jnr.), Owode, Yewa South,",
//     "Egba Comprehensive High School (Snr.), Asero,",
//     "Ilugun High School (Snr), Ilugun, Abeokuta North,",
//     "Iwoye Ketu Community High School (Comb), Iwoye Ketu, Imeko Afon,",
//     "Ebenezer Grammar School (Jnr), Iberekodo, Abeokuta North,",
//     "Baptist Boys' High School (Snr.), Saje,",
//     "Baptist Boys' High School (Snr.), Saje,",
//     "Ebenezer Grammar School (Jnr), Iberekodo, Abeokuta North,",
//     "Alaye High School (Snr), Ayetoro,",
//     "Community Comprehensive College (Comb), Idofa, Imeko,",
//     "Salawu Abiola Comprehensive High School (Snr.), Osiele,",
//     "Ebenezer Grammar School (Snr), Iberekodo, Abeokuta North,",
//     "Baptist Boys' High School (Snr.), Saje,",
//     "Itolu Community High School (Snr), Ilaro,",
//     "N.U.D High School (Snr), Oke-Ijeun,",
//     "Pakoto High School (Jnr.), Ifo,",
//     "Ilobi Erinja High School (Comb), Ilobi, Yewa South,",
//     "Egba Comprehensive High School (Jnr.), Asero,",
//     "Abeokuta Girls Grammar School (Snr.), Onikolobo,",
//     "A.U.D. Comprehensive High School (Comb), Isaga Orile,",
//     "Asero High School (Snr), Asero,",
//     "Abeokuta Girls Grammar School (Snr.), Onikolobo,",
//     "Odewale Community High School (Comb), Ifo,",
//     "Abeokuta Girls Grammar School (Snr.), Onikolobo,",
//     "Egba Obafemi Community Grammar School (Jnr.), Owode,",
//     "METHODIST HIGH SCHOOL (JNR), OGBE,",
//     "EGBA COMP. HIGH SCHOOL (SNR),",
//     "Owo Community High School (Comb),Owo, Yewa South,",
//     "ANGLICAN HIGH SCHOOL (SNR), IBARA,",
//     "Agosasa Community High School (Snr), Agosasa, Ipokia,",
//     "Anglican High School (Snr.), Onikolobo,",
//     "Ilewo Orile Community High School (comb.), Ilewa, Abeokuta North,",
//     "Moboluwaduro Community High School (Comb), Ifo,",
//     "Community High School (Jnr), Tube, Ipokia,",
//     "Methodist High School (Snr), Ogbe,",
//     "Community High School (Comb), Agbon Ojodu,",
//     "Ejila Awori Community High School (Comb), Ipatira,",
//     "Orile Igbore Grammar School (Comb), Ajura,",
//     "Oba Community Comprehensive High School (Comb), Oba, Obafemi Owode,",
//     "Oba Community Comprehensive High School (Comb), Oba, Obafemi Owode,",
//     "AUD Comprehensive High School (Comb), Itele Ota,",
//     "Alaye High School (Snr), Ayetoro,",
//     "Egba Owode Grammar School (Jnr.), Egba Owode, Obafemi Owode,",
//     "Community High School (Comb), Ohunbe,",
//     "Community High School (Comb), Abaren,",
//     "Anglican High School (Jnr.), Quary,",
//     "Ijemo Titun High School (Snr.), Ibara,",
//     "Igbore High School (Snr.), Igbore,",
//     "St. Peters College (Jnr.), Olomore,",
//     "African Church Community Secondary School (Comb), Ewupe, Ota,",
//     "Agude Community High School (Comb), Oniro, Ipokia,",
//     "African Church Grammar School (Jnr.), Ita Iyalode. Abk.,",
//     "Egba High School (Jnr.), Asero,",
//     "St. Leo's College (Jnr.), Onikoko,",
//     "Ijemo Titun High School (Jnr.), Ibara,",
//     "Baptist Girls College (Jnr.), Idi-Aba,",
//     "Ketu College (Snr), Igan Alade, Yewa North,",
//     "Kobape Commuinty High School (Comb), Kobape, Obafemi Owode,",
//     "Community Grammar School (Comb), Igbokofi,",
//     "Area Community High School (Jnr), Owode Yewa,",
//     "Oronna High School (Jnr), Ilaro,",
//     "Owode Secondary School (Jnr), Owode Yewa,",
//     "Ikija High School (Comb), Ikija Iberekodo,",
//     "Iwoye Ketu Community High School (Comb), Iwoye Ketu, Imeko Afon,",
//     "Olumo High School (Comb), Sabo,",
//     "Baptist Girls' College (Snr.), Idi-Aba,",
//     "Lisabi Grammar School (Jnr), Idi-Aba,",
//     "Agosasa Community High School (Jnr), Agosasa, Ipokia,",
//     "Lafenwa High School (Jnr.), Lafenwa.,",
//     "Owode High School (Jnr.), Owode,",
//     "Owode High School (Jnr.), Owode,",
//     "Lantoro High School (Jnr), Oke-Lantoro, Abk,",
//     "Lantoro High School (Snr), Oke-Lantoro, Abk,",
//     "Agude Community High School (Comb), Oniro, Ipokia,",
//     "Premier Grammar School (Jnr.), Lafenwa, Abeokuta,",
//     "Egba Comp. High SCHOOL (JNR), Asero.,",
//     "Ijemo Titun High School (Jnr.), Ibara,",
//     "Rev, Kuti Memmorial Grammar School (Jnr.), Isabo,",
//     "Lisabi Grammar School (Jnr), Idi-Aba,",
//     "Gbenopo Community High School (Comb), Bandu,",
//     "LANTORO HIGH SCHOOL (SNR), OKE-LANTORO,",
//     "Baptist Girls' College (Jnr.), Idi-Aba,",
//     "Nazareth High School (Snr), Imeko,",
//     "Community High School (Jnr), Tube, Ipokia,",
//     "District High School (Comb), Ipokia,",
//     "EGBA COMP. HIGH SCHOOL (JNR),",
//     "Unity High School (Jnr.), Ago-Ika, Abeokuta,",
//     "Community High School (Comb), Abaren,",
//     "Abeokuta Girls' Grammar School (Jnr.), Onikolobo,",
//     "African Church Community Secondary School (Comb), Ewupe, Ota,",
//     "Toyon High School (Comb), Ado-Odo, Ota,",
//     "Abeokuta Girls' Grammar School (Jnr.), Onikolobo,",
//     "Abeokuta Girls' Grammar School (Jnr.), Onikolobo,",
//     "Lisabi Grammar School (Snr.), Idi-Aba,",
//     "Rev. Kuti Memmorial Grammar School (Jnr.), Isabo,",
//     "Saje High School (Jnr.), Saje, Abk,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Ejila Awori Community High School (Comb), Ipatira,",
//     "Igbore High School (Jnr.), Igbore,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Eyinni Comprehensive High School (Comb), Ibooro,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Muslim Grammar School (Comb), Imeko,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Agbara Grammar School (Comb), Agbara, Ota,",
//     "District High School (Comb), Ipokia,",
//     "Saje High School (Jnr.), Saje,",
//     "Baptist Boys' High School (Jnr.), Saje,",
//     "Araromi Community High School (Comb), Atan Ota,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Ilewo Orile Community High School (Comb), Ilewo, Abk,",
//     "Anglican Grammar School (Jnr), Ilaro,",
//     "Olorunda Community High School (Comb.), Olorunda , Abeokuta North,",
//     "Community High School (Jnr), Iroko, Ota,",
//     "Araromi Community High School (Comb), Atan Ota,",
//     "Imala Community Grammar School (Comb), Imala, Abeokuta Nortth,",
//     "Lisabi Grammar School (Snr.), Idi-Aba,",
//     "Owode Secondary School (Jnr), Owode Yewa,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Lisabi Grammar School (Jnr.), Idi-Aba,",
//     "Lisabi Grammar School (Jnr.), Idi-Aba,",
//     "Ilobi Erinja High School (Comb), Ilobi, Yewa South,",
//     "Lisabi Grammar School (Jnr.), Idi-Aba,",
//     "Egba Comprehensive High School (Jnr.), Asero,",
//     "Saje High School (Jnr.), Saje,",
//     "Egba Comprehensive High School(Jnr), Asero,",
//     "N.U.D. Grammar School (Jnr.), Solu, Ifo,",
//     "Area Community High School (Comb), Olokuta, Yewa South,",
//     "Coker Area Comprehensive High School (Comb), Coker, Ifo,",
//     "Community High School (Snr.), Ibafo,",
//     "Oke-Ona Grammar School (Jnr.), Iberekodo,",
//     "Rev. Kuti Memorial Grammar School (Jnr), Isabo,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Local Government Secondary Commercial School (Jnr), Atan Ota,",
//     "Rev. Kuti Memorial Grammar School (Jnr), Isabo,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Lantoro High School (Jnr.), Oke-Lantoro,",
//     "Methodist High School (Jnr.), Ogbe,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Community Secondary School (Snr), Ipokia,",
//     "Methodist High School (Jnr.), Ogbe,",
//     "Baptist Boys' High School (Snr), Saje, Abk,",
//     "Ilogbo Asowo Community High School (Comb), Ilogbo, Ota,",
//     "Anglican High School (Jnr.), Quary,",
//     "Macjob Grammar School (Jnr), Onikolobo, Abk,",
//     "Anglican High School (Jnr.), Quary,",
//     "Methodist High School (Snr.), Ogbe,",
//     "N.U.D. High School (Jnr.), Oke-Ijeun,",
//     "Rev. Kuti Memmorial Grammar School (Snr.), Isabo,",
//     "St.John Anglican High School (Snr.), Kuto,",
//     "Macjob Grammar School (Jnr), Onikolobo, Abk,",
//     "Asero High School (Snr.), Asero,",
//     "Ajuwon High School (Jnr.), Ajuwon, Ifo,",
//     "Itolu Community High School (Jnr), Ilaro,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Itoki Community High School (Jnr.), Itoki, Ifo,",
//     "Comprehensive High School (Jnr), Ayetoro,",
//     "Imotu Commuinty Commercial Academy (Jnr), Ifonyintedo, Ipokia,",
//     "Siun High School (Comb.), Siun,",
//     "Baptist Boys High School (Jnr.), Saje,",
//     "Asero High School (Snr.), Asero,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Gbenopo Community High School (Comb), Bandu,",
//     "Community High School (Comb), Oluke,",
//     "Ajoda High School (Jnr), Ayetoro,",
//     "Ajoda High School (Jnr), Ayetoro,",
//     "Egba Owode Comprehensive High School (Jnr.), Owode,",
//     "Okepata Community High School (Comb), Ososun, Ifo,",
//     "St. Stephen Comprehensive High School (Jnr), Ado-Odo,",
//     "Community High School (Comb), Agada, Ipokia,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Saje High School (Jnr.), Saje,",
//     "Muslim Community Grammar School (Comb), Oja Odan,",
//     "Toyon High School (Comb), Ado-Odo, Ota,",
//     "Community Comprehensive High School (Comb), Eggua, Yewa North,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Abeokuta Grammar School (Jnr.), Idi Aba,",
//     "N.U.D. High School (Jnr.), Oke-Ijeun,",
//     "Community High School (Comb), Agada, Ipokia,",
//     "Idogo-Ipaja Community High School (Comb), Idogo Ipaja, Yewa South,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Gbenopo Community High School (Comb), Bandu,",
//     "N.U.D. High School (Jnr.), Oke-Ijeun,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Community High School (Comb), Ohunbe,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Idi-Emi High School (Comb), Idi-Emi, Abeokuta North,",
//     "Abeokuta Girls' Grammar School (Snr.), Onikolobo,",
//     "Abeokuta Girls' Grammar School (Jnr.), Onikolobo,",
//     "Owo Community  High School (Comb), Owo, Yewa South,",
//     "Lisabi Grammar School (Snr.), Idi-Aba,",
//     "Abeokuta Girls' Grammar School (Jnr.), Onikolobo,",
//     "Abeokuta Girls' Grammar School (Snr.), Onikolobo,",
//     "Owo Community High School (Comb), Owo, Yewa South,",
//     "Olumo High School (Comb.), Sabo,",
//     "Anglican High School (Snr.), Quary,",
//     "Anglican High School (Snr.), Quary,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Igiri High School (Jnr), Ijofin,",
//     "Abeokuta Grammar School (Jnr),",
//     "Igiri High School (Jnr), Ijofin,",
//     "N.U.D. High School (Jnr.), Oke-Ijeun,",
//     "Rev. Kuti Memorial Grammar School (Jnr.), Isabo,",
//     "Baptist Girls' College (Jnr), Idi Aba,",
//     "Saje High School (Jnr.), Saje,",
//     "Obalaju High School (Comb), Joga Orile,",
//     "Ijemo Titun High School (Jnr.), Ibara,",
//     "N.U.D. High School (Jnr.), Oke-Ijeun,",
//     "Ijemo Titun High School (Jnr.), Ibara,",
//     "Igbore High School (Jnr.). Igbore,",
//     "Abeokuta Grammar School (Jnr), Idi-Aba,",
//     "Abeokuta Grammar School (Jnr), Idi-Aba,",
//     "Baptist Girls' College (Jnr), Idi Aba,",
//     "Community High School (Jnr.), Iroko Ota,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Egba Obafemi Community Grammar School (Jnr.), Obafemi Owode,",
//     "NAWAIR-UN-DEEN HIGH SCHOOL (JNR), OKE-IJEUN,",
//     "Baptist Girls' High School (Jnr.), Idi Aba,",
//     "Ijemo Titun High School (Snr.), Ibara,",
//     "Rev. Kuti Mammorial Grammar School (Jnr.), Isabo,",
//     "Egba Obafemi Community Grammar School (Jnr.), Obafemi Owode,",
//     "Baptist Girls' High School (Jnr.), Idi Aba,",
//     "NAWAIR-UN-DEEN HIGH SCHOOL (JNR),",
//     "Ajebo Community High School (Jnr.), Ajebo,",
//     "Abeokuta Grammar School(Jnr.), Idi-Aba,",
//     "Saje High School (Jnr.), Saje,",
//     "St. John Anglican High School (Jnr.), Kuto,",
//     "Rev. Kuti Mammorial Grammar School (Jnr.), Isabo,",
//     "Egba Obafemi Community Grammar School (Jnr.), Obafemi Owode,",
//     "Yemaa Community Grammar School (Comb), Aromokola, Ota,",
//     "Abeokuta Girls' Grammar School (Jnr.), Onikolobo,",
//     "St.Leo's High School (Jnr.), Onikolobo,",
//     "Igiri Grammar School (Jnr), Ijofin,",
//     "Ijemo Titun Grammar School (Jnr.), Ibara,",
//     "Igiri Grammar School (Jnr), Ijofin,",
//     "Ijemo Titun Grammar School (Jnr.), Ibara,",
//     "Lisabi Grammar School (Jnr), Idi-Aba,",
//     "Community Grammar School (Comb), Ioriwi, Yewa North,",
//     "St.Leo's High School (Jnr.), Onikolobo,",
//     "Tayese Community Secondary School (Comb), Ibatefin, Ipokia,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Area Community High School (Comb), Ibeku, Yewa North,",
//     "Rev. Kuti Memmorial Grammar School (Jnr.), Isabo,",
//     "Catholic Comprehensive High School (Snr.), Onikolobo,",
//     "Rev. Kuti Memmorial Grammar School (Jnr.), Isabo,",
//     "Rev. Kuti Memmorial Grammar School (Jnr.), Isabo,",
//     "Ajiboyede Comprehensive High School (Comb.), Ibara Orile,",
//     "Abeokuta Girls Grammar School (Jnr.), Onikolobo,",
//     "Orile Imo High School (Comb.), Orile-Imo,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Agosasa Community High School (Jnr), Agosasa, Ipokia,",
//     "African Church Grammar Schoo (Jnr), Ita-Eko, Abk,",
//     "Igbore High School (Jnr.), Igbore,",
//     "St. John Anglican High School (Jnr), Kuto,",
//     "Igiri High School (Jnr), Ijofin,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Premier Grammar School (Jnr.), Lafenwa, Abeokuta,",
//     "Rev. Kuti Memmorial Grammar School (Jnr.), Isabo,",
//     "Anglican High School (Jnr.), Ibara,",
//     "Methodist High School (Jnr.), Ogbe,",
//     "Abeokuta Grammar School (Snr.), Idi-Aba,",
//     "Abeokuta Girls' Grammar School (Snr.), Onikolobo,",
//     "Olumo High School (Comb.), Sabo,",
//     "St. John High School (Jnr), Kuto, Abk,",
//     "Lisabi Grammar School (Jnr), Idi-Aba, Abk,",
//     "Lisabi Grammar School (Jnr), Idi-Aba, Abk,",
//     "Baptist Girls' College (Jnr), Idi-Aba,",
//     "Igbore High School (Jnr.), Igbore,",
//     "Okepata Community High School (Comb), Ososun, Ifo,",
//     "N.U.D High School (Jnr.), Oke-Ijeun,",
//     "Ijemo Titun High School (Jnr.), Ibara,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Community Kuti Memorial Grammar School (Comb), Moriwi, Yewa North,",
//     "Abeokuta Grammar School (Snr), Idi-Aba,",
//     "Baptist Girls' College (Jnr), Idi-Aba,",
//     "Ajebo Community High School (Snr.), Ajebo, Obafemi Owode,",
//     "Abeokuta Grammar School (Jnr), Idi-Aba,",
//     "Abeokuta Girls' Grammar School (Jnr), Onikolobo,",
//     "Baptist Girls' College (Jnr), Idi-Aba,",
//     "N.U.D High School (Jnr.), Oke-Ijeun,",
//     "N.U.D High School (Jnr.), Oke-Ijeun,",
//     "Comprehensive High School (Jnr), Ayetoro,",
//     "Abeokuta Grammar School (Jnr.), Idi Aba,",
//     "Oke-ona Grammar School (comb.), Oke-Ona,",
//     "Egba Comprehensive High School (Jnr.), Asero,",
//     "Egba High School (Jnr.), Asero,",
//     "Baptist Boys' High School (Jnr.), Saje,",
//     "Egba High School (Jnr.), Asero,",
//     "Olumo High School (Comb.), Sabo,",
//     "Oke-ona Grammar School (comb.), Oke-Ona,",
//     "Baptist Boys' High School (Jnr.), Saje,",
//     "PG's Office (Sight Problem),",
//     "Community High School (Comb),  Iro,",
//     "Owode High School (Jnr.), Owode, Obafemi Owode,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Oke-ona Grammar School (comb.), Oke-Ona,",
//     "Baptist Boys' High School (Snr), Saje,",
//     "Anglican Grammar School (Jnr.), Okenla, Ifo,",
//     "Baptist High School (Comb), Ilaro,",
//     "Asero High School (Jnr), Asero, Abk,",
//     "Community John Anglican High School (Comb), Moriwi, Yewa North,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Abeokuta Grammar School (Jnr.), Idi-Aba,",
//     "Catholic Comprehensive High School (Jnr.), Onikolobo,",
//     "Rev. Kuti Memorial Grammar School (Jnr.), Isabo,",
//     "Baptist Girls High School (Jnr.), Onikolobo,",
//     "Lisabi Grammar School (Jnr.), Idi Aba,",
//     "Community High School (Comb), Moriwi, Yewa North,",
//     "Owo Community High School (Comb), Owo, Yewa South,",
//     "Igiri High School (Jnr), Ijofin,",
//     "Ijemo Titun High School (Jnr.), Ibara,",
//     "Orile -Imo High School (Comb), Orile-imo,",
//     "Community High School (Comb), Idi Ayin, Imeko,",
//     "Muslim Community Grammar School (Comb), Oja Odan,",
//     "Abeokuta Girls' Grammar School (Snr.), Onikolobo,",
//     "Igiri High School (Jnr), Ijofin,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Macjob Grammar School (Jnr.), Onikolobo,",
//     "Community High School (Comb), Tube,",
//     "Community High School (Jnr.), Ojodu Abiodun, Ifo,",
//     "Agbado District Comprehensive High School (Jnr.), Oke-Aro, Ifo,",
//     "Anglican Girls' Grammar School (Snr.), Omikolobo,",
//     "Iju Ebiye High School (Jnr.), Iju Ota,"
// ]
// function namesToCommaArray(input) {
//     return input
//       .split(/\r?\n/)                    // split by line breaks
//       .map(line => line.trim())          // remove leading/trailing spaces
//       .filter(line => line.length > 0)   // remove empty lines
//       .map(line => {
//         // Remove trailing comma if it exists, then add it back
//         const cleaned = line.replace(/,\s*$/, '');
//         return `${cleaned},`;
//       });
//   }
  
  // Usage
//   const result = namesToCommaArray(dbSchools);
//   console.log(result);
  
//   // If you need it as a single string with line breaks:
//   const resultString = namesToCommaArray(dbSchools).join('\n');
//   console.log(resultString);
  
//   // If you need it as a JavaScript array literal (for copying into code):
//   const arrayLiteral = '[\n  "' + 
//     namesToCommaArray(dbSchools)
//       .map(line => line.replace(/,$/, '')) // remove the comma for array format
//       .join('",\n  "') + 
//     '"\n]';
//   console.log(arrayLiteral);

//  namesToCommaArray(dbSchools)
// ###############################################################################
// namesToCommaArray(dbSchools)

// const abeoukutaSouthStaffNames = `staffFirstName
// Mrs. KILASHO,  Mariam  O.
// Mrs. SAKA,  Olusola folasade
// Mrs. AJASA,  Olukemi alice
// Mrs. AKEWEJE,  Moriam abike
// Mr. SHITTU,  Babatunde sikiru
// Mrs. IBIRINDE,  Eunice olubusayo
// Mrs. ADEROKU,  Omolara oluwafunmike
// Mrs. SOTUNDE,  Omolola mary
// Mr. SOFOWORA,  Adesina olusola
// Mrs. AJAYI,  Folasade toyin
// Mr. ADESENI,  Olushegun  sunday
// Mrs. ODUYELU,  Titilayo olufunmilayo
// Mrs. SOYOMBO,  Kemi elizabeth
// Mr. OLABODE,  Olaseni rafiu
// Mr. AKINLOTAN,  Olujinmi micheal
// Mrs. OLUWADAIRO,  Olufunmilayo omolola
// Mrs. OSODE,  Bola olufemi
// Mr. AKANJI,  Daniel  A.
// Mrs. OLANIYI,  Abiola modupe
// Mrs. BAMIGBADE,  Abosede oluwayemisi
// Mrs. OYEBEFUN,  Mojisola motunrayo
// Mr. OLUGBADE,  Ismail abayomi alao
// Mr. ALAO,  Fasiu babayemi
// Mrs. DARAMOLA,  Olubunmi olayinka
// Mr. BAMGBOYE,  Oluseyi simon
// Mrs. SHAFII,  Kuburat adebola
// Mr. OGUNTAYO,  Ayotunde olufemi
// Mr. JINADU,  Wahab olatunbosun
// Mr. AREMU,  Michael sunday
// Mrs. NGENE,  Olufunke florence
// Mr. OLOYEDE,  Babatunde ajibola
// Mrs. FALUYI,  Olabisi abosede
// Mr. OGUNSEYE,  Olubamiji tunji
// Mrs. DADA,  Opeoluwa aramide
// Mrs. OLALEKAN,  Oyenike  M.
// Mr. ODEKUNLE,  Mukaila oluwafemi
// Mr. ISHOLA,  Suraju olalere
// Mr. LAWAL,  Fatai oladimeji
// Mrs. OKEREKE,  Bertha ego
// Mrs. BABATUNDE,  Olufunke ajoke
// Mrs. POSU,  Abosede  O.
// Mr. SOREMI,  Akintunde oluremi
// Mrs. AKOLAWOLE,  Adenike adetoun
// Mrs. AKINBILE,  Olubinpe olasunbo
// Mr. BABATUNDE,  Abiodun olawale
// Mr. ADEYEMI,  Babatunde olaniran
// Mrs. AKINTUNDE,  Taiwo risikat
// Mrs. BERNARD-OKE,  Oluwakemi rashidat
// Mr. SOYINKA,  Akeem adedayo
// Mrs. OLUWUNMI,  Safurat adeola
// Mrs. ODUNAIYA,  Opeluwa folasade
// Mrs. ADEFOLAHAN,  Kudirat adejoke
// Mrs. FAGBUYI,  Florence oluwayemisi
// Mrs. SOYINKA,  Oluyemi aina
// Mrs. BADMOS,  Doyin ganiyat
// Mrs. OZOJE,  Mosunmola oludayo
// Mr. OLUFUNWA,  Oluseun abayomi
// Mrs. ABDULRAHMAN,  Tawakalitu kemi
// Mrs. AKIN-SHORINOLA,  Kehinde omowunmi
// Mrs. ADEBANJO,  Adenike  A.
// Mrs. OMITOGUN,  Afolasade aderonke
// Mrs. BAKARE,  Abosede aderonke
// Mrs. OLAJIDE,  Olubunmi  M.
// Mrs. OLUBI,  Omolola jumoke
// Mrs. ODUKOYA,  Adenike adeola
// Mrs. JOSEPH,  Anike  O.
// Mr. ADENEKAN,  Israel oladimeji
// Mr. ADEGOKE,  Wasiu olalekan
// Mrs. ADENIYI,  Tiwalola oluwakemi
// Mrs. FADEHAN,  Morenike victoria
// Mrs. VAUGHAN,  Aderonke oluyoola
// Mr. JOHN,  Olusola  A.
// Mrs. AKINYELE,  Adeyinka abiodun
// Mrs. OKOKOARHAYE,  Racheal oluwatoyin
// Mr. AKINLAWON,  Idris olalekan
// Mrs. OLAYEMI,  Bolanle  A.
// Mrs. ONIYIDE,  Florence olukemi
// Mrs. SALAMI,  Olubunmi omobolawo
// Mr. OBADINA,  Femi yemi
// Mr. TEJUOSO,  Ayoola michael
// Mrs. AYORINDE,  Morufat bola
// Mr. INYANG,  Ukeme monday
// Mr. OLASIMBO,  Tawakalitu  A.
// Mrs. ADEGOKE,  Yemisi  A.
// Mrs. SOTOLA,  Temitope yetunde
// Mrs. ONAYEMI,  Alice olalekan
// Mr. AMOS,  Alani
// Mrs. ISHOLA,  Janet oluwakemi
// Mrs. DANSU,  Grace olusola
// Mr. SOBOWALE,  Julius sunday
// Mrs. ADEBAJO,  Susanah oluwakemi
// Mrs. AKIODE,  Olutayo busayo k.
// Mr. AKINJOBI,  Ayodeji adekunle
// Mrs. FAWEHINMI,  Adeola  O.
// Mrs. OKEYALE,  Abimbola christiana
// Mrs. AFOLABI,  Olabisi miubat
// Mrs. AKPAN,  Oluwatoyin jokotola
// Mrs. AYONOTE-YUSUF,  Mercy kehinde
// Mrs. ODUMBO-ALASE,  Odunola  A.
// Mr. SOYOYE,  Taofeek alabi
// Mr. YUSUF,  Maruf oladimeji
// Mr. OLAYODE,  Shadrach adimu
// Mrs. SALAMI,  Maria tawa
// Mrs. OLADIPO,  Yetunde ibironke
// Mrs. OGUNSOLA,  Bolanle deborah
// Mr. RAHEEM,  Rasheed olawale
// Mr. OLUSESI,  Ibrahim  O.
// Mrs. SODIPE,  Olubukunmi adedayo
// Mrs. SODIPE,  Oluwabunmi oluwaseyifunm
// Mr. ADEGBOYEGA,  Semiu  A.
// Mr. AJIKANLE,  Adeshina sakiru
// Mrs. OLUTOBERU,  Omoniyi kehinde
// Mrs. EFUNDIPO,  Olajumoke feyikemi
// Mrs. OLAYEMI,  Olabisi mabel
// Mr. JIMOH,  Abiodun galeeb
// Mrs. ODEYEMI,  Oluyemisi bowale
// Mrs. OKE,  Hafsat mosebolatan
// Mr. OKELANA,  Ayodeji olanrewaju
// Mr. SALISU,  Oyeniyi nureni
// Mrs. OGUNJOBI,  Alice oluwaseun
// Mrs. JUNAID,  Oludayo mary
// Mr. MUSA,  Olalekan  T.
// Mr. OYENEKAN,  Kolawole ben
// Mrs. MUSTAPHA,  Oluwakemi caroline
// Mr. OSI,  Taofeek adetunji
// Mrs. EMENIKE,  Oluwaseun efundeji
// Mrs. ADEWALE,  Oluyemi titilope
// Mr. AYINDE,  Adewale emmanuel
// Mr. OYENIYA,  Sunday adebayo
// Mr. SANU,  Adewale adegbenga
// Mrs. KUPONIYI,  Caroline
// Mrs. EKE,  Adetutu
// Mr. ADEJUWON,  Adesanmi adetoyese
// Mrs. SENFUYE,  Oluwarotimi rebecca
// Mrs. KADIRI ADETUMERUN,  Oyindamola abigail
// Mr. AJAYI,  Olabanji moshood
// Mrs. OGUNBAMERU,  Titilola jumoke
// Mrs. POPOOLA,  Julianah olayinka
// Mrs. OYEDELE,  Abosede  O.
// Mrs. AJIBOLA,  Seilat abolanle
// Mrs. ESEBAMEN,  Stophina ngozichukwu
// Mrs. ADENIYI,  Maryam iyabode amope
// Mrs. BUBA,  Clementina enogiomwan
// Mrs. OSIBANWO,  Suliat temitayo
// Mrs. ADERINTO,  Adebanke adekitan
// Mr. OGUNSOLA,  Joseph  B.
// Mr. EESUOLA,  Abiodun adebanjo
// Mr. OGUNSOLA,  Olusesan
// Mr. BAKARE,  Yusuf oladipupo
// Mrs. JUNAID,  Olusola  T.
// Mrs. OSHO,  Funmilola  A.
// Mrs. JOHNSON,  Oluwabunmi olawunmi
// Mrs. AYINLA,  Oluwabunmi  O.
// Mrs. TAIWO,  Oluyemisi esther
// Mrs. OGUNGBANGBE,  Victoria bosede
// Mr. AKIYODE,  Ayodele joseph
// Mrs. HAMEED,  Aderonke  L.
// Mrs. POPOOLA,  Aderonke ajoke
// Mrs. ADEEKO,  Grace olujoke
// Mrs. SALAU,  Fatima afolake
// Mrs. SALISU,  Abiola  T.
// Mrs. BADEJO,  Taiwo adepeju
// Mrs. BAKARE,  Omolara  O.
// Mr. OGUNSOLA,  Sunday  A.
// Mrs. BANJO,  Hannah abosede
// Mrs. TANIMONURE,  Omolara olusola
// Mr. ODUFUYE,  Abimbola oduntan
// Mr. OLADEINDE,  Emmanuel biodun
// Mr. SULAIMON,  Olatunji
// Mrs. ODUNLAMI,  Anthonia  A.
// Mrs. ORIOLA,  Olubukunola abiola
// Mrs. OLUFEMI,  Titilope margaret
// Mrs. ANIMASHAUN,  Olateju  A.
// Mr. OSIKANMI,  Olayinka olukayode
// Mrs. OTULANA,  Bolape ajoke
// Mrs. ADENIYI-RAIMI,  Modupe
// Mrs. MAKINDE,  Abiola abosede
// Mr. SOBOWALE,  Ayokunle omololu
// Mr. SOFELA,  Oludayo olufemi
// Mr. AKINLOLU,  Akintunde emmanuel
// Mrs. ADEGBITE,  Abosede bernice gift
// Mrs. OMOYAYI,  Abosede aduke
// Mrs. ADELEYE,  Yinka muibat
// Mr. OJO,  Lateef oyeniyi
// Mrs. GREEN,  Grace omotola
// Mrs. OGUNDOKUN,  Olufumilola omowunmi
// Mr. AYOPO,  Olumide olanrewaju
// Mr. EDIDI,  Olubodun oluwafemi quadr
// Mrs. UTHMAN,  Adiat  I.
// Mrs. ADELUOLA,  Olasunmbo ibidunni
// Mrs. OKI,  Oluseyi  adenike
// Mrs. OJO,  Hannah oluwaseyi
// Mrs. OSIPITAN,  Omolola abosede
// Mr. BILEWU,  Gabriel oluwatoyin
// Mrs. OMOWAYE,  Bolaji adenike
// Mrs. KOMOLAFE,  Abosede  O.
// Mrs. OJEBIYI,  Risikatu adunni
// Mrs. OMIDIJI,  Oreoluwa  A.
// Mrs. ADELU,  Olunike  A.
// Mrs. ODUKOYA,  Oluwakemi mobolanle
// Mrs. POPOOLA,  Adijat abosede
// OSILAJA, Babafemi idowu
// ABOLADE, Tawakalit
// SHOGBIYANJU, Kazeem olawale
// AKINWALE, Ikeola Bukola.
// BABATUNDE, Oluwakemi afolake
// SONDE, Akintoye tolulope
// FATEROPA, Azeezat abiodun
// ADENIYA, Basirat bidemi
// ODERINDE, Tawakalitu Olabisi.
// KOYA, Abimbola omowunmi
// SESI-JIBOWO, Omoruyi angela
// OGUNSOLA, Temitope ajoke
// SOMUYIWA, Momudat omosalewa
// BALOGUN, Salamot Ayoka.
// FASESIN, Olabisi o.
// AYOPO, Olubola adeola
// LOGUNLEKO, Adejoke olayemi
// OGUNJOBI, Opeyemi ramota
// ADEDEJI, Saidi babatunde
// SORETIRE, Temitope Taiwo.
// ADEOYE, Oluyemi oluwagbemileke
// ADEBAYO, Samuel oluwayinka
// OKESANYA, Olayinka abosede
// ADESANYA, Florence Oluwakemi .o..
// SOWUNMI, Dayo olushesi
// BAFUNSO, Oladayo oladunni
// POPOOLA, Magdalene olufunmilayo
// OLATUNJI-ISIOYE, Bolanle Janet.
// OSEMENE, Opeyemi bunmi
// SOTOMI, Oluwatosin esther
// AKINDE, Omotayo rhoda
// MUHAMMED, Bolajoko temitope
// ORIJA, Oluwadunsin Nike.
// AJIBODE, Babatunde emmanuel
// OSAHENI, Ayobami Adeosun.
// ABIADE, Taiwo ayisat
// SHOWANDE, Funmilayo olabisi
// SOREMEKUN, Rasidat bolanle
// AYANDELE, Gbemi segun
// OGUNDIPE, Atinuke Mulikat.
// ADENIYI, Fatimoh Olufunke.
// BHADMUS-AKOREDE, Shakirat Adebukola.
// GBADAMOSI, Moruf seun
// KAZEEM, Tawakalitu abolanle
// DURODOLA, Agnes Temitope.
// KAREEM, Ayinde aliu
// SONEYE, Tolulope ajani
// SOTOLA, Olufunmilayo Gbemisola.
// OSOKO, Abiodun olabode
// SORUNKE, Ismail ayinde
// SANUSI, Oladele rasheed
// JAGUNMOLU, Fausat omowunmi
// TANIMONURE, Samuel oluwasola
// OLOKEDE, Olubunmi ayobami
// SHONDE, Atinuke monsurat
// ADEGBOYEGA, Mariam abosede
// OLADEINDE, Abosede omotayo
// AWOJOBI, Olusegun stephen
// ADEKUNTE, Oluwafunmilayo bolanle
// SANNI, Fatai adekunle
// RASAKI, Suraju adebayo
// ILORI, Jesutofunmi Opeyemi.
// ELEMIDE, Olujimi lawrence
// TOGUNWA, Oluwaseun
// OGUNMORINLE, Ebunoluwa oladayo
// SETEOLU, Adebisi omolade
// OGUNYANWO, Olutoke elizabeth
// AWOYEMI, Saidat Abiodun.
// ADEOSUN, Modupe Caroline.
// AKINJOBI, Oluwakemi sarah
// OTUFOWORA, Musifat yemisi
// DOSUMU, Abigael
// OGUNYINKA, Olabisi adetutu
// ODUWOLE, Serifat adebola
// MAJOYEOGBE, Mary boluwatife
// AKINTADE, Kola olanrewaju
// ADEBOWALE, Adetunji Sunday.
// OKUNLOLA, Oluyemi titilayo
// SANYAOLU, Florence ajoke
// ODURONBI, Taiwo olumide
// AGBOLAHAN, A. adebusayo
// OLUGBADE-OGUNDOKUN, Ganiyat omotayo
// SORINLO, Olufunmilayo olubukola
// SOKUNBI, Folashade amudat
// AROWOSEGBE, Temitope joseph
// OGUNTUYO, Temidayo ayobami
// BAKENNE, Adebola fatimoh
// AJIBOLA, Azeezat Iyabo.
// ADEKUNLE, Oluwaseyi oyeniran
// ODUNLAMI, Olusola janet
// ADEKUNLE, Adetoun ebunlola
// HASSAN, Lateefat Temitope.
// AKINLAMI, Ibijoke olabisi
// IGESOLA, Olamide Temitope.
// OGUNKUNLE, Olupero moradeun
// BAKARE, Abdulazeez adeleye
// FOLORUNSHO, Ayodele peter
// ADENIJI, Yetunde Azeezat.
// OTAIKU, Adebola Modupe.
// AYANRINNO, Oluwatosin esther Kikelomo.
// AZEEZ, Oluwaseyi david
// ADEBESIN, Olukayode adebisi
// AGBENIYI, Kafayat olubunmi
// ODUSOGA, Rukayat yomi
// ADEBARI, Adetunwase motunrayo
// AJIBODE, Taiwo olugbeminiyi
// BAKENNE, Kafilat adeyinka
// SOMUYIWA, Abiola Abosede.
// RUFAI, Mariam Abimbola.
// ADELEKE, Olusegun gbadebo
// MORENIKEJI, Rashidat adetola
// ADEBAYO, Funmilola sayo
// ODEDELE, Omolola nofisat
// SOLOTAN, Olawale
// MINIRU, Olalekan stephen
// LAWAL, Monsurat bolanle
// AKANDE, Salimot abosede
// YISA, Abdulahi olawale
// BABALOLA, Dunni adenike
// ODUNEWU, Victor adebayo
// LENTULUS, Adedeji demos
// ADEBAYO, Eniola titilayo
// AWODE, Olayiwola adeyoye
// ADEBAYO, Adewale matthew
// JOSEPH, Olufumilayo mary
// SOTUNDE, Olufunmilola temitope
// NUGA, Mary toyosi
// AKINDE, Oluwatoyin anu
// OLADIPUPO, Sulaiman akanbi
// AKINRINDE, Folorunso sarah
// OGUNSOLA, Olubukola olasumbo
// BOLUTIFE, Samuel olusegun
// OMOLEYE, Funmilayo motunrayo
// ADEBIYI, Victoria oluyinka
// OWOBAMIRIN, Oluwafunmilayo olajumoke
// ADEOSUN, Deborah olufunke
// OMONIYI, Mojisola grace
// OGUNWA, Oluwabukola temitayo
// OLUWAYOMI, Alaba Abidemi.
// OLUFEMI, Esther motunrayo
// OLADIPUPO, Abidemi fatimo
// ADEKUNLE, Oluseyi abidemi
// OMOTOSHO, Temitayo oluyemisi
// AKINNIYI, Micheal Adetayo.
// AKINBANDE, Oluwakemi bola
// OKANLAWON, Oluwatoyin Hannah.
// OKANLAWON, Aderonke nosimot
// AKINSANYA, Adedoyin omolara
// KEHINDE, Kehinde kemi
// OGUNWEMIMO, Funmilola Abosede.
// ODULE, Olubunmi olanike
// DANIEL, Blessing Uzoamaka.
// ODEKANYIN, Kolawole
// FASAKIN, Olufunmilola Oluwafpemi.
// OLAJIRE, Nurudeen Akanmu.
// ORIYOMI, Rachael bolanle
// OYENEKAN, Pelumi Christianah.
// FADIPE, Adiat olabisi
// KOLEOSO, Kemi Florence.
// ADESINA, Abosede adenike
// RUFAI, Nurudeen Olatunji.
// LEMO, Sadiat bolanle
// OGUNTOYE, Emily doyin
// SHITTU, Habeeb Abiodun.
// AKINDELE, Olufunke olayinka
// AKISANMI, Oladayo akinbiyi
// OLAOGUN, Adewale boluwatife
// OGUNSEYE, Peter akinsanmi
// AJAYI, Morenikeji Abigeal.
// ADIGUN, Victoria iyabode
// MAGNUS, Funmilayo adenike
// EDE, Adebisi, olawunmi
// ADIGUN, Olaniyi zacheus
// OLABISI, Esther Titilayo.
// ADELAKUN, Adetola olufunso
// ADENIJI, Monsurat Omonike.
// ABIOLA, Olubunmi margret
// FADIPE, Olayemi toyin
// ADEYEMO, Deborah oluwayemisi
// ADEBOYE, Adebimpe monsurat
// AROWOSEGBE, Olufunke romoke
// ADEYINKA, Yetunde bernice
// ADEWUSI, Olajumoke Abidemi.
// ABIOLA, Akintunde adedeji
// OLADEHINDE, Olabisi grace
// AKINTOLA, Iyabo adebimpe
// AJAYI, Bola grace
// ADEPENA, Funmi gbemisola
// ONABAJO, Olatunde Ayodele.
// OJO, Abisoye olukemi
// OLABODE, Saheed olawale
// BABALOLA, Adebimpe Modupe.
// IDRIS, Ganiyat Olayemi.
// SALAUDEEN, Musa ajani
// OBADINA, Folorunso james
// OMOLADE, Temidayo bolanle
// LIASU, Kazeem okanlawon
// AINA, Taiwo abiola
// OLADIPO, Elizabeth Titilayo.
// AYODELE, Joel
// TAIWO, Abigail aderele
// AKINYEMI, Adesola alaba
// ONOTA, Adenike Omowunmi.
// TAIWO, Adesegun oluwadare
// OLUGBEJE, Abiodun idowu
// EDUN, Olufemi kolawole
// ABDULAZEEZ, Abdrazaq jumah
// AFOLABI, Oluwatoni Awele.
// LAWAL, Rodhiat abiola
// KODAOLU, Dorcas opeoluwa
// OLUSI, Oriyomi susannah
// ADENIYI, Oluwagbenga samson
// BABATUNDE, Ibrahim Adebayo.
// ADEYINKA, Kehinde oluwakemi
// ABIOYE, Adekunle akeem
// AKALA, Bolanle titilola
// FALETI, Iretioluwa Babajide.
// AINA, Oluwole remmy
// OLANIRAN, Atinuke titilayo
// POSU, Olufunmilayo eshter
// OGUNTOLA, Mojisola ganiyat
// PETERS, Adesola wunmi
// OYEBO, Deborah bosede
// AKINDIPE, Elizabeth olayinka
// DISU, Muyibat olajumoke
// OGUNDEJI, Modioluwamu
// AKANDE, Yakubu alamu
// OYEDELE, Ebenezer olubunmi
// OGUNSOLA, Mulikat adeola
// SANUSI, Abolade mutiu
// AKINPELU, Khadijat titilayo
// ODUNEWU, Musibau Oluwalogbon.
// IDOWU, Abosede omobola
// OGUNKUNBI, Modinat Akanke.
// ODELAJA, Afoluso esther
// OJEBIYI, Olubusayo adunni
// LAWAL, Taiwo adetutu
// ODUNMBAKU, Victor tope
// AKINGBOLA, Adewunmi oluwatoyin
// ORISABIYI, Titilayo folasowo
// OLANREWAJU, Temitope julius
// SOWEMIMO, Adenike bolanle
// SOKEYE, Daniel seyi
// BELLO, Abimbola oluwatosin
// AKINTARO, Bolatito nafisat
// SHOKUNBI, Samuel seyi
// LAWAL, Funmilayo ajoke
// MUNIR, Sarafadeen Oluseyi.
// AJAGUNNA, Elizabeth moji
// ADEPOJU, Comfort Temilade.
// FADIPE, Fatimo mobolaji
// IMADU, Oluwakemi Abosede.
// OLORODE, Folake morufat
// ODUMADE, Sunday adekanbi
// AJIFOLUSE, Adegoke ayoade
// ELEGUNDE, Toyin amope
// AMOSU, Oluwaseun mary
// ABDUL, Seun Olajide.
// ELEMIDE, Adesola rachael
// OYETORO, Omobolanle abidemi
// OJURE, Adijat bolanle
// COLE, Yetunde patience .o.
// POPOOLA, Rasheed Oladipupo.
// OWOLABI, Omolade elizabeth
// AINA, Morenikeji sarah
// BUHARI, Rukayat Olayinka.
// DOSUNMU, Olubimpe olubukola
// SANYAOLU, Rukayat Olayinka.
// SOGAOLU, Lawrenta oluranti
// ODUTAYO, Aminat omotunde
// EJEH, Francis ogbike
// AKINDELE, Oluwatoyin Idowu.
// OSSAI, Dickson
// BHADMUS, Afusat bolanle
// ADEROHUNMU, Rasheedat olatokunbo
// BABAJIDE, Bankole sheu
// ARIBISALA, Olajumoke omotola
// ABIOYE, Sadiat adetutu
// LAWAL, Funmilayo Seun.
// KUSIMO, Sunkanmi bisoye
// DOSUMU, Emmanuel oloruntoba
// GEORGE, Abosede funmilayo
// DARAMOLA, Adenike foluso
// ENILOLOBO, Olalekan Adeniyi.
// OKEDOKUN, Olutomi ajike
// MUSA, Nosifat Adejoke.
// OLOKODE, Rachael yemisi
// OBADINA, Adenike olayinka
// OLOYEDE, Afusat omowunmi
// SOLOMON, Sunday Abiodun.
// SONDE, Lanre adigun
// OLATUNDE, Risikat yetunde
// ADEWOLE, Oluwagbenga amos
// ODUFUYE, Afolake adebisi
// DUROJAIYE, Olayinka olaolu
// ODEBODE, Funmilola eniola
// OGUNDAIRO, Nofisat modupe
// ABIOYE, Oluwasesan oluwaremi
// AKINLEYE, Funke motunrayo
// OYELUMADE, Foluke oluwaseun
// SANGOBIYI, Beatrice segilola
// OLATEJU, Oluwakemi Julianah.
// OLANIYAN, Christianah oluwaseun
// OLOWU, Temilola
// BABAYOMI, Zainab Adetutu.
// DAUDA, Matilda omowunmi
// DASAOLU, Jolade felicia
// ABOLADE, Babatunde Mukhtar.
// OMISORE, Ikeoluwa tolulope
// YUSUF, Aina olamilekan
// ADENIJI, Atinuke adebukola
// SHOYOYE, Temitope bolanle
// SOREMEKUN, Olufemi oladimeji
// OGUNRONBI, Oluwarotimi o.
// OGUNAIKE, Tosin Oluwaseun.
// IDOWU, Toyin adebola
// ASADE, Oluwasina akanni
// JOSEPH, Atinuke patience
// ABIODUN, Victoria Abiola.
// AKINGBENLE, Rebecca olufunke
// OJO, Oluwakemi abiola
// AFOLABI, Rachael idowu
// OLABODE, Abosede nimota olasubomi
// SHOYOYE, Josephine oluwaseyi
// SHITTU, Alice olusola
// ADETORO, Fatimot odunola
// BALOGUN, Monsurat adefunke
// OBEDAT, Idowu adebisi
// AKINBODE, Funmilola folashade
// BABARINDE, Christiana adetomi
// OKEYINGBO, Morolake abosede
// AKINTAN, Aminat Omolabake.
// ABIONA, Taiwo oluwaseyi
// BOLARINWA, Bunmi omolola
// BALOGUN, Iyabo folashade
// THOMAS, Owolabi odunayo
// ADEKUNLE, Segun olatunde
// ADEYEMI, Samuel ibukun
// AKINDOYIN, Grace olubukola
// BAMGBOYE, Omotola abiola
// ADEMOYEWA, Olawole
// ODUDE, Felicia temitope
// OKUNEYE, Fadekemi omobolaji
// OJO, Omonike zeynab
// GANIU, Kayode saliu
// KUSAMOTU, Phebean Foluso.
// SALAKO, Modupe afolake
// OGUNWA, Adetokunbo Yomi.
// SOFELA, Abosede adesola
// ADEYEMI, Busayo Ruth.
// OKEOWO, Comfort oluwakemi
// BANJO, Adetoro Oluwayemisi.
// OLUEDUN, Ronke rukayat
// YINUSA, Akeem adeniyi
// OSENI, Monsuru Opeyemi.
// OLADOSU, Folasade elizabeth
// AKINDELE, Fatimah Oluwakemisola.
// AKINWANDE, Tolulope ayomide
// ABDUL, Babatunde sikiru
// SOTANNDE, Abiodun kabir
// ADEBAYO, Funmilayo abidemi
// FATAI-SOSANYA, Oluwaseyi Abidemi.
// ODUNTAN, Eunice olubusola
// OLUWADARE, Motunrayo aina
// ADESANYA, Chistianah toyin
// ADESANYA, Bamidele isreal
// ALABA, Mary oluwatoyin
// OLUDIPE, Olajumoke alice
// BAMIGBELU, Rebecca modupe
// BAKARE, Margaret oluwatoyin
// AINA, Bamidele olatunde
// OYEDEMI, Olaide olubunmi
// SONDE, Olubunmi busola
// ADESINA, Afolake joke
// TEMIDAYO, Omoboye florence
// OLUBANWO, Oluwatosin Arike.
// ADENIJI, Abolanle saulat
// ANYANWU, Chinedum getrude
// JULIUS, Afolake omua
// OLAWUYI, Oluwatoyin Oduola.
// IDOWU, Olutayo daniel
// ADEKOYA, Samson adekunle
// IDOWU, Onayemi mojisola
// SOMUYIWA, Rita modupe
// ABIOLA, Adeniji
// OYEDELE, Adedamola bose
// AKINSOLA, Omobolanle rophiat
// LAWAL, Sulaiman alabi
// SANGOSANYA, Muyiwa
// ADIGBO, Veronica bola
// FANIYAN, Olusegun emmanuel
// AKINLADE, Olushola Kuburat.
// OLAWALE, Favour oluwafunke
// LATINWO, Adijat abisola
// OBASAN, Olufolake yetunde
// ORESOTU, Oluwatoyin Temitope.
// JOSEPH, Adekemi adunola
// AYOADE, Victoria olawunmi
// SANUSI, Kuburat folasade
// OLUSOLA-KAMAR, Oluwakemi emmy
// OLADOTUN, Adeyinka afusat
// EDWARD, Olayinka funmi
// OLAKUNLE, Serifat oluwatoyin
// AKINOLA, Olajumoke eunice
// OLUFUNSO, Omolabake Sakirat.
// EGBE, Iruehia
// ENIASORO, Olubukola Titilayo.
// OLAOYE, Yetunde oyewunmi
// ONI, Ayodeji abiodun
// ADESEGUN, Anuoluwapo racheal
// BABALOLA, Olutayo titus
// OLIYIDE, Oluyomi Akinyode.
// OYEDELE, Bilikis abiola
// AWAYE, Olayinka Olayemi.
// BABAYEMI, Yetunde morenikeji
// ASORO, Samuel olugbenga
// LAWAL, Folasade arinola
// BAMIDELE, Halimat Adebimpe.
// ILORI, Temitope modupe
// AJAYI, Taiwo john
// AJILEYE, Florence Anike.
// OMONIYI, Temitope Morufat.
// OLALEYE, Ruth folake
// OSHO, Babatunde adedeji
// ODURONBI, Oluwawemimo temitope
// OGUNRIN, Aderonke omolara olusade
// MAKINDE, Oluwaseun adufe
// ADESANYA, Adebimpe olawunmi
// SOYINKA, Eniola oluwatoyin
// OLUDIMU, Roseline kofoworola
// OLUBUNMI, Temidayo oluwagbemi
// OKUSANYA, Oluwaseun adedeji samson
// BANMEKE, Adiat Yewande.
// SALAKO, Francisca ibiyemi
// SAMUEL, Oluyemisi abike
// ABASS, Monsurat olayinka
// AGBAJE, Nojeem ajasa
// RASAQ, Taofeek Olawale.
// OLAPADE, Noimot olayinka
// ITANEYE, Temitayo aramide
// QUADRI, Adedayo adesola
// OLADEJI, Oluwayomi modupe
// OLOFIN, Ibukun oluranti
// AKINSANYA, Abiodun omobolaji
// AKINRINDE, Kehinde john
// ADIGUN, Rotimi adesina
// OLUGBADE, Kabirat bolape
// ADEKOLA-OJERINDE, Adenike folasade
// ADENIYI-KOJEKU, Adefunmilayo margaret
// YAHYA, Rofiat Omowunmi.
// OMOTOSHO, Olubukunola olawunmi
// OKESOLA, Fatimah iyabode
// FALAJA, Olawale adedeji
// ARIYIBI, Saubana Sunmade.
// SALAKO, Sakirat olufunke
// GBADEBO, Adesegun emmanuel
// OKESOLA, Esther funmilola
// BELLO, Titilayo ismoth
// OTUN, Fausat olaide
// ALOGI, Owolabi folawe
// FANIYI, Ijeoma Olabisi.
// SEKONI-DAIRO, Moriliat agboola
// SANUSI, Temitayo adefoyeke
// AJAYI, Itunu sarah
// OGUNREMI, Olubimpe victoria
// IBIKUNLE, Rosemary abokhia
// IBIKUNLE, John abiona
// ADEBESIN, Aishat afolashade
// OLADEJO, Ramota
// ABASS, Sekinat abimbola
// OLOYEDE, Taiwo abosede
// ADENIYI, Mary mojisola
// OKEMAKINDE, Abiola rukayat
// AMOS, Taiwo afolashade
// OLATUNBOSUN, Tunrayo adeola
// BAKARE, Titilope theresa
// ADEYEMI, Olujide alade
// SOLOLA, Olanrewaju olalekan
// OLOPADE, Iyabo afolakemi
// ADEDUNTAN, Rafat Abioye.
// OMITOGUN, Bolanle Oluwakemi.
// AKINLOLU, Bukola atinuke
// ABOYADE, Feyisayo veronica
// ADENIRAN, Omotayo olubunmi
// JOHNSON, Oluwakemi oluyinka
// SHOYOYE, Opeoluwa Taiwo.
// ODERINDE, Lateefat omolara
// OKE, Atinuke adeola
// IDOWU, Sakirat Folashade.
// OGUNRINU, Kudirat
// BELLO, Olatoye babajide
// ADEGUN, Kemi mariam
// AKINBAMI, Felicia onyinyechi
// ODEWOLE, Adijat atinuke
// BANKOLE, Yetunde olayinka
// ADESENI, Adenike oluwaseun
// ADEOSUN, Blessing omonigho
// OGUNSILE, Olukolade olatunbosun
// SOYEBO, Bilikis omobowale
// ADEBOLA, Adejoke eniolorunda
// ANYASI, Dorcas kikelomo
// OMITOLA, Olumide sunday
// IKUEBOLATI, Bayo david
// KUYE, Olalekan oluwatosin
// AJAYI, Olugbenga peter
// ABOLADE, Nofisat Adeyemi.
// ODUNEWU, Temitope abosede
// ADESINA, Yetunde bunkayo
// IDOWU, Adebukunola adenrele
// OLUKOGA, Yewale Ayomikun.
// AYO-ALAGBE, Modupeola mercy oluwaseyi
// KUYE, Yetunde mariam
// SORUNKE, Oluwaseun olatobi
// ABDULFATAH, Mujirat Bode.
// OYELEKAN, Omotunde motunrayo
// AJIBOSO, Micheal olaniyi
// BABATUNDE, Bolanle oluwatoyin
// UWELU, Eruemulor philomena
// ADEKUNLE, Titilayo elizabeth
// EGUNJOBI, Akeem olatunji
// OSHO, Taiwo adebimpe
// AJAYI, Oluwakemi idowu
// ADELEYE, Folashade bolanle
// OLANIYAN, Olusola abosede
// ADERIBIGBE, Agnes aderonke
// ERINOSO, Atinuke taiwo
// LAWANI, John kizito
// RAJI, Olabisi wunmi
// ADELEKE, Akeem Abolore.
// OGUNFOWORA, Yinka abiodun
// ORIDOTA, M. olubunmi
// MUSTAPHA, Adesola afusat
// ERINFOLAMI, Morufat folasade
// EJALONIBU, Adewumi christianah
// AYEGBAJEJE, Ahmad Habeebullah.
// AYANBODE, Anna ajuma
// OLOYEDE, Olufunmibi olubusayo
// SOBANDE, Olajide rasheed
// OGEDENGBE, Nimota omotayo. a
// ALADE, Esther Oluwatoyin.
// MUIBI, Mariam Ajoke.
// ESAN, Moradeyo funke
// SOKANLU, Grace oluwaseyi
// COKER, Folasade
// OYEJOLA, Adetola abeni
// AKINSOLA, Yetunde Damilola.
// KARUNWI, Bernice omodunke taiwo
// OLAYIWOLA, Adijat ronke
// ADEGBOYE, Olugbemi david
// DAUDA FOLARIN, Bolanle morenike
// SOBANDE, Adebisi
// RAIMI, Modinat abake
// OGUNGBE, Matthew  abiodun
// LAWAL, Ajibola saburi
// OLUDOTUN, Olabisi iyabo
// ONOKPE, Stella eseoghene
// OLADIPO, Oladunni
// ILUFOYE, Sakariyau amuzat
// OLUWADE, Olubukola damilola Omowunmi.
// ADEBARI, Adedoyin olufunke
// FALOLA, Kehinde olawunmi
// ADEYANJU, Oluwakemi funmilayo
// OLANREWAJU, Bolarinwa emmanuel
// ADEYEMI, Timothy olalekan
// OKETOKUN, Olanike
// BALOGUN, Omowunmi hajimat
// FAGBENRO, Idowu olumidola
// MAJEKODUNMI, Abiodun olufunmilola
// ADEBAYO, Abosede olusola
// YUSUF, Susannah eniola
// OLAOYE, Adefoluke omoyemi
// ADEKANMBI, Funmilayo rebecca
// AKINKUNMI, Ayodeji williams
// TAIWO, Omobolanle ikeolu
// OLABODE, Victor joy
// MAJEKODUNMI, Folashade beatrice
// ABASS, Omolara abolaji
// BELLO, Nofiu adedigba
// ALAGA, Tawakalitu oluwatoyin
// OYENEYE, Olubusayo
// SOBANDE, Oluwabusola omolara
// OMOSANYIN, Oluwatoyin Olubusola.
// AJALA, Omolara modupe
// AFUAPE, Aborode funmilola
// OKEOWO, Ajibola abidemi
// OGUNSAKIN, Adebanwo
// OTAYEMI, Yewande dolapo
// KEHINDE-OYEYEMI, Adeyinka oredola
// ADENEKAN, Funmilola olaoluwa
// OSENI, Oluwabunmi adedayo
// LAWAL, Wasiu alabi
// ADETORO, Maruf ademola
// AYORINDE, Ngozi
// ISOLA, Sidiqat olasunmbo
// ADESANWO, Bosede Oyeronke.
// ADEOSUN, Ajibola Oluwaseun.
// AIHONSU, Adeola omotola
// ADEKANMBI, Saburi adebisi
// FAGBIRE, Adenike paulina
// POPOOLA, Kehinde Olajumoke.
// ADEMEHIN, Olusola olawunmi
// DUROWOJU, Kehinde olajoke
// OKETOKUN, Abdul-sabur olushina
// TELLA, Adebisi alice
// ADEDEJI, Grace olubukola
// BELLO, Sekinat olasumbo
// SHOBAYO, Bolaji alamu
// AJAYI, Temilade adeshola
// ODUSOLA, Olusola grace
// TAIWO, Gbemisola Yemisi.
// ADEYEMI, Elizabeth Kemi.
// ONIGBINDE, Felicia oluwatoyin
// BOLAJI, Olubunmi yemisi
// OLADEJO, Omoniyi mayowa
// AWODELE, Oluwatoyin esther
// SOREMEKUN, Aderonke mary
// OYEKUNLE, Clara olufunmilayo
// ADEKANMBI, Oluyemi Samson.
// SHOBIYE, Abolore Oyindamola.
// ADEBAYO, Olufunmilola wunmi
// ADEBAYO, Olajumoke elizabeth
// ONOSOSEN, Bolanle olubukola
// BABATUNDE, Modupe opeoluwa
// NICHOLAS, Modupe Elizabeth.
// ALAO AKINYEMI, Oyindamola Emmanuella.
// AKINWANDE, Olabisi remilekun
// OLUDIMU, Adekemi temitayo
// GANDONU, Lawrence dagbeyon
// ABAYOMI, Catherine Idowu.
// MULERO, Abiodun Ayodeji.
// ADEYEMI, Aderonke omotunde
// BIOBAKU, Adeola bernice
// ADEWUSI, Titus olalekan
// ADEDEJI, Ireti Dorcas.
// OMIDIJI, Bamidele abimbola
// RASAK-OYADIRAN, Fausat ayo
// ILEPE, Bolanle rose
// KADRI, Olukemi omolabake
// KELANI, Abike mariam
// IBRAHIM, Temitope mujidat
// OLOKODE, Moriam oluwafunnbi
// ADENIRAN, Tajudeen adewale
// OGUNDIMU, Gabriel olubiyi
// ADENIYI, Omolola yetunde omotunde
// SOKEYE, Ayoku Adeola.
// OGUNJOBI, Rebecca afoluke
// OWOADE, Tolulope yetunde
// IDOWU, Aderonke olayinka
// OSUNBIYI, Bukola funmilayo
// ADESINA, Olugbenga johnson
// ADEKOYA, Olayinka idayat
// BABAJIDE, Julianah olufunmilola
// OBEMBE, Olabisi anike
// AYINLA, Grace adepeju odunola
// OGUNYEMI, Kehinde vctoria
// OBAJIMI, Semilola olawunmi
// OJELADE, Oluwatosin Ifedayo.
// AJETUNMOBI, Aminah anike
// AKOMOLAFE, Oluwayemisi mary
// SIMEON, Oluwatosin oladapo
// OSEJI, Temitope   tunrayo
// SULAIMAN, Saidat oluwaseunfunmi
// OWOYELE, Moruf adeshina
// AJIBADE, Adeleke abiye emmanuel
// RABIU, Iyabo waliat
// ADELESI, Elizabeth bolanle
// OKETOKUN, Comfort omolara
// SODIYA, Kolawole oladayo
// OKE, Comfort Blessing.
// OLUDARE, Damilola tosin
// BABAYEMI, Oluwatoyin kabirat
// SOFELA, Ibrahim tosin
// AKINYEMI, Ramota
// ABOLADE, Yetunde adebukola
// TOYOBO, Iretiolu olasimbo
// ABIOLA, Ibukun olutomisin
// MUSA, Hassan abolore
// SOGAOLU, Oluyomi Olufemi.
// OGUNPOLA, Oluseyi david
// WILLIAMS, Mojisola
// OTESILE, Alice taiwo
// ATANDA, Abiodun mariam
// TEJUOSO, Emmanuel olusesan
// OLORUNSOGO-OLUDE, Comfort anujehofa
// ABASS, Afolabi omotayo
// ADERIBIGBE, Abosede adebimpe
// OSOKO, Anuoluwapo bimpe
// ADEWOLE, Samuel abiodun
// DEINDE-DIPEOLU, Mary aderonke ajoke
// ALUKO, Dele bilikis
// AKINWANDE, Soyemi ayinde
// ADEOGUN, Olubunmi esther
// POPOOLA, Seye oladimeji
// ONADEKO, Lawrence adekunle
// YINUSA, Taibat Mojisola.
// SONEYE, Olufunmilayo olapeju
// FAGBEMI, Bolatito Abidemi.
// FOLAWOLE, Oluranti remi
// OKUWA, Adebimpe olabisi
// ADENEKAN, Martha olubunmi
// DADA, Olapeju omolara
// OTULANA, Abiodun elizabeth
// LASISI, Mojisola Victoria.
// ADEBOWALE, Morayo mary
// ADEBOYE, Kudirat temitope
// AKINRINLOLA, Olubukola adewunmi
// ADEWOLE, Racheal mojisola
// ADENIJI, Mathew adewumi
// FALANA, Omowunmi Olayinka.
// BANJO-OLAITAN, Esther Abosede.
// AKIODE, Abosede funmilayo
// ABANISE, Kofoworola Funtan.
// OLIYIDE, Iyabode abiola
// OLUMOKO, Oluyinka bosede
// SOLAJA, Ibijoke omolade
// AROGUNDADE, Mulikat moturayo
// ODEBIYI, Iyabode oredola
// OGUNFUWA, Olajumoke abosede
// MUFUTAU, Olayinka
// OYEWOLE, Isaac olufemi
// AROWONA, Idayat Temidayo.
// BAMGBOYE, Tawakalit olutosin
// OGUNGBAYIKE, Bukola tawakalit
// SOJOBI-ALOGI, Yemisi temitope
// MAKINDE, Adewunmi funmi
// RAHEEM, Fatimat Temilola.
// BELLO, Morufat fadeke
// ATINUKE, Bolanle jemilat
// SORINMADE, Bukola seun
// BAKARE, Sekinat Olayinka.
// ADEBAYO, Odunayo mary
// TEREBO, Ayodele Gbeminiyi.
// BELLO, Risqat afolake
// OSE, Adedoyin Adetutu.
// SOMOYE, Yusuf olatunji
// OKUNADE, Basirat ayodeji
// ASHADE, Iyunade leah
// KOHOUNFO, Oladunke matilda
// OLUWALOGBON, Josephine oluwatobi
// AYENI, Oluwakemi adufe
// AKINWILLIAMS, Deborah oseyemi
// EMUELOSI, Adenike omolara
// OLUGBEMI, Omolola olufunmilayo
// OGUNMUYIWA, Damilola seilat
// OYELUDE, Oluwadamilola olajumoke
// KAFAR, Morenikeji olusola
// OMIKUNLE, Elizabeth alaba folorunso
// IKHIDE, Chika nnenna
// KUYORO, Comfort olukemi
// ADEOSUN, Akinyemi olakunle
// SOWANDE, Adetutu taiwo
// ADENEKAN, Mofolasade oluwatosin
// ANUNLOPO, Bosede
// SANUSI, Ajibola razaq
// OGUNLEYE, Sururat motunrayo
// AKOJEDE, Esther Adekiite.
// EFUNYOOLA, Adeola oluwakemi
// ADEJUWON, Tolulope funmi
// ADEBAYO, Khadeejah
// AKANBI, Modupe oluseyi
// AJAYI, Bosede mary
// AFOLABI, Wasiu alao
// ADEYEMI, Bidemi hannha
// SALAMI, Kamoru jimoh
// OLAWUYI, Olajumoke omowunmi
// ILORI, Adenike eniola
// OJOMO, Olajumoke Sayo.
// BADA, Rasheed akanni
// ADEBAYO, Tola Christiana.
// OYETUNJI, Benjamin seye
// JOKOSENUMI, Kehinde ayinla
// ATERE, Akeem ayodeji
// KUSIMO, Adefunmbi florence
// FALEYE, Olusola olufunmilola
// OSUNDE, Olukemi olubukola
// SHOBOLA, Akinsola sunday
// OLASODE, Gbolahan moses
// OLADIPUPO, Aishat Yetunde.
// AHMED, Lateefat tinuola
// ADEBIYI, Grace A.
// AYODEJI-OYALOWO, Hafsat Abolore.
// IKOTUN, Omolola Halimot.
// AJASA, Fadekemi Fausat.
// BAMIDELE, Kudirat taiwo
// OSINUSI, Gloria bolanle
// OLADIPUPO, Deborah Olayinka.
// ADEYEMI, Makanjuola omolola
// SALAU, Abolore adijat
// OGUNDELE, Jokotade abiodun
// SOBANDE, Oluwaseun sunday
// ODUNLAMI, Oyenike olawunmi
// MUNIR, Tawakalit adewunmi
// RAJI ORELOPE, Aminat aduke
// BANKOLE, Abiodun oladipo
// ADEOSUN, Adiat temitope
// FALOLU, Funmilayo Mary.
// ALLI, Modupe yejide
// ADENIYI, John temitope
// ADESANYA, Suwebat olanike anike
// ADESINA, Oluwabusola anne
// AKINLABI, Adepeju Damilola.
// ANISE, Anike tomilola
// OJO, Ayodele asake
// ABIOYE, Oluwagbemiga abiodun
// AKINHANMI, Olapeju Abiodun.
// AKINBO, Fatimo Oluwatoyin.
// AGBEDEJOBI, Olabisi oladunni omolara
// ADELEYE, Abiodun arike
// ADEDAYO, Rahmat temilola
// EKUNDAYO, Adebunkunola tawakalit
// OSINOWO, Bolanle temitope
// MACJOB, Oluwatoyin christinah
// IDOWU, Morenikeji abosede
// ODEYEMI, Adebisi Oluwabunmi.
// AZEEZ, Banwo Afolake.
// OLUTUNDE, Fehintola bosede
// BIOBAKU, Adeola abdul-hafiz
// OGUNYEMI, Abigael tosin
// FATUNBI, Olusegun Abayomi.
// AZEEZ, Nofisat oriyomi
// ADEITAN, Roseline adeola
// AMOLE, Theophilus olufolarin
// ADENIRAN, Muinat folasade
// IDOWU, Kabirat agbeke
// OGUNLADE, Tosin tobiloba
// EGUNJOBI, Felicia Omolola.
// ONAJOBI, Tokunbo esther adeola
// AYOOLA, Idayat Olaide.
// OGUNDARE, Edun Hassan.
// OLAIYA, Olutunde sunday
// KUKOYI, Basirat amoke
// SMITH, Olusola ikepo
// ADENIYI, Opeoluwa Adeoti.
// USMAN, Modinat amoke
// ADETUGA, Richard temitope
// OBADINA, Rasheed adekunle
// SOYOYE, Abosede juliana
// OGBONNA, Chinwe edison
// JOLAOSO, Sanya adisa
// ADEBESIN, Olusey ibraheem
// MODIU, Musilimot Adesola.
// OYENEKAN, Oluwatosin bose
// AJAYI, Funmilola ruth
// BALOGUN, Omobolanle Adijat.
// FAGBIRE, Stephen olugbenga
// OLALEYE, Olusola esther
// OGBON, Racheal adeola
// JEJELOLA, Toluwalope james
// OLADIRAN, Muinat adejoke
// IDOWU, Olubunmi Joke esther.
// AFOLABI, Asisat oluwaseun
// ADEBOWALE, Titilayo aina
// LASISI, Yakub Kehinde.
// ALI, Oluwakemi adufe
// ODERINDE, Oluwakemi ayotunde
// ABIODUN, Amos rotimi
// AKINSOLA, Olabisi taiwo
// ADEJOJU, Oluwaseun iyabo
// SODUNKE, Mildred Ngozi.
// ADENIYI, Kayode korede
// SODAMOLA, Surat abiodun
// ADENIYI, Elizabeth oluwayemisi
// ADEKANMBI, Bolanle afolasade
// AGBOOLA, Victoria iyabode
// OGUNGBE, Oluwaseun abisoye
// ADENIJI, Taiwo hafsat
// OLAFIMIHAN, Theresa abiodun
// ADEBAYO, Itunnu ayobami
// ABIONA, Ojuolape olatunde
// ILORI, Olusola Rukayat.
// EKEADA, Olawunmi Olabisi.
// POPOOGBE, Motunrayo olayinka
// OGUNYANWO, Ifetayo ijaola
// SALAUDEEN, Adewale babatunde
// ADEBESIN, Kolawole adeolu
// AKINDELE, Oluwaseun Olatunji.
// OLAWOLU, Agness
// ODURONBI, Oluyemi olaniyi
// AJAYI, Oluseun emmanuel
// OLANIYI, Obafemi solomon
// OGUNRINU, Mayowa omolola
// OGUNRINADE, Eunice Olufunmilayo.
// ADENAIKE, Christianah bukola
// ROBERTS, Adebomi oluwabusayo
// ODUBIYI, Oyebusola
// ABDUL-AZEEZ, Waliat olanrewju
// ADELEGAN, Motunrayo ibilola
// RABIU, Bolanle busola
// ABIOLA, Olusola motunrola
// OLUDARE, Mercy olulayo
// OLISA, Abiola Sakirat.
// AKINYEMI, Oluyemisi aderemi
// KARUNWI, Temitope serifat
// KUSIMO, Gbemisola monilola
// ABIODUN, Adetutu Adesewa.
// OBADIMU, Augustina Oluwakemi.
// OGUNLAMI, Mojisola olufunmilayo
// KUFORIJI, Grace iyabo
// ONAKOYA, Mojisola abidemi
// IFUMA-ALATISE, Yetunde rashida
// OGUNTOLA, Sola ganiyat
// ERINOSO, Olusola Christianah.
// OMOTOLA, Adedoyin rebecca
// ELEMIDE, Abosede olabisi
// OLOWOLAGBA, Adebola nofiu
// ALABA, Odunayo oladunni
// OGUNBOYE, Temitope monica
// ADELAKUN- ABATI, Olufunmilayo aina
// NEMEDIA, Odegua omoyemi  regina
// ADENEKAN, Tolulope Sherifat.
// SOTOMI, Opeyemi taiwo
// AJISEMOLA, Omotola kate aina
// RAHEEM, Omolara Modupe.
// KILAJOLU, Nimota omosalewa
// ONIFADE, Omobola Oluwayemisi.
// ADEDOKUN, Adenike tolulope
// SOMOYE, Kehinde olufunmilayo
// ADEBAYO, Toyin Tunrayo.
// OKUNLOLA, Grace olubunmi
// BELLO, Felicia Olabisi.
// TAIWO, Taiwo Olufunke.
// ADESINA, Bosede olapeju
// INNOCENT, Nwadinma peace
// ADELEKE, Adedoyin
// ELUYERA, Titilola adeola
// ELEMIDE, Olubukola Atoke.
// ALAPOTI, Desola raolat
// ADEYEMI, Omowunmi aminat
// BURAIMO, Afolasade omolara
// AKEJU, Adenike Olamiji.
// OJUOLA, David abayomi
// KEHINDE, Abidemi dupe
// ONADERU, Folasade Oluwakemi.
// ONI, Adijat R..
// ODEYEMI, Jemilat asake
// ADEYEMI, Oluwaseun lydia
// ADERINWALE, Isiwat olawanle
// AROWOLO, Hamidah Kikelomo.
// ISAAC, Olubusayo Omolara.
// AJAYI, Racheal temitayo
// AKHALU, Faith Ofe.
// OJO, Temitope ajoke
// ADENIYI, Olufolake  aderike
// OLATUNDE, Funke omolara
// ADAM, Bamidele mutiu
// DIYAN, Gbenga titus
// BABALOLA, Omowunmi adijat
// SHITTU, Victoria yemi
// EESUOLA, Gbonjusola oluwamayowa
// OLAOGUN, Ayobami olayinka
// ADEKUNLE, Kayode
// ADEBAYO, Adebisi
// BABALOLA, Taiwo hannah
// ABATI, Oluwatosin
// AYOADE, Adewale Babatunde.
// KUFORIJI, Aderonke suliat
// OLUBORI, Afolashade Shakirat.
// OLUGBUYI, Saodat iyabo
// ANFELA, Mary toyin
// OYETUNDE, Caroline omolabake
// OLUJOBI, Rebecca omolara
// ADEBOYE, Esther omolara
// FAJINMI, Abigeal adeola
// ADEKUNLE, Oluwaseyi Adesanjo.
// TINUOSO, Olasumbo oluwakemi
// KEHINDE, Comfort Busola.
// ALLEN, Margaret ololade
// OLUSANYA-ISEOLUWA, Titlayo anike
// EGBEWUNMI, James Oluwole.
// OWOLABI, Felix muyiwa
// OYEYEMI, Oluwayemisi florence
// OLAGUNJU, Abosede omolabake
// AKINBOHUN, Olubunmi Olajumoke.
// OGUNDIMU, David olumuyiwa
// OLADIMEJI, Arinola Halilat.
// ADENIYI, Kayode david
// OLADIPO, Adebisi folake
// TEJUOSO, Doyinsola Adijat.
// ADEBESIN, Morufu
// TAIWO, Oluwatosin alaba
// FAFIOLU, Olusesi babafemi
// DAIRO, Modinat ibironke
// MOYEGUN, Oluyemisi marian
// IWAYEMI, Folasade Chistianah.
// AKANBI, Olubusayo omotola
// SEMOWO, Moshood oludayo olwatosin
// KUKOYI, Serah oluwatoyin
// OLOKODANA, Iyabode comfort
// SULAIMON, Lateefat oluwabunmi
// ORIYOMI, Dorcas Oluwakemi.
// OKUBADEJO, Olugbenga adeniyi
// IBRAHIM, Oluwasola Serifat.
// ALATISE, Oyinkansola christianah
// SOGUNLE, Sarafadeen Adewale.
// EWULO, Ayorinde oyeyinka
// OLALEYE, Reuben adesoji
// ABDULKAREEM, Daud Muhammed.
// AINA, Memunat bolanle
// OMOSONWON, O.oluwafunmilayo0
// ADEYINKA, Kazeem Olasunkanmi.
// LAWAL, Omolola fatimot
// ADESEGUN, Oluwayemisi caroline
// AKINWUNMI, Folake oyinkan
// AKINROLE, Margaret temitayo
// AKINWALE, Oluwaseun adetokunbo
// DIPEOLU, Sikiru adeola
// OLUSANYA, Iseoluwa adebayo
// ODULEYE, Florence oluwafunmilayo
// SALAMI, Hakeem olatunji
// BAKARE, Oluwatoyin
// OKUKENU, Adisa bolanle
// ENABOR, Ehiodion lawrence
// SIKIRU, Oriyomi omotayo
// WAHAB, Oyebimpe ola
// OSHIN, Opemipo Damilola.
// OLUWOLE, Victoria adenike
// GIWA, Aminat bukola
// AKINWUNMI, Samuel  oluwagbenga
// BAFUNSO, Olawale basiru
// IBIKUNLE, Motunrayo Ifeoluwa.
// AWONUGA, Olukemi omiladun
// DAVID, Ibukunoluwa Moronke.
// OLANREWAJU, Ponle Funmilola.
// ISHOLA, Kabirat adenike
// DANIEL, Abosede adenike abimbola
// ADEBAJO, Titilayo seun
// QUADRI, Temitope Sekinat.
// OJO, Florence omowunmi
// ADEKOYA, Dorcas Oluwatoyin.
// BANJOKO-AKINTOMIDE, Morayo
// OLONADE, Ganiyat motunrayo
// ADESINA, Rasidat kehinde
// AKINLOTAN, Bolanle funmilayo
// SALAMI, Bolatito afusat
// ADEMOLA, Bukola omowunmi
// ADEWOYE, Grace olubunmi
// ADEOYE, Busayo Adija-kuburat.
// SOLABI, Bolanle toyin
// SOREMEKUN, Olubukola elizabeth
// EWULO, Emmanuel babatunde
// ODUBENA, Foluke mary
// ODEWALE, Olusola abiodun
// ADEOSUN, Tolulope omolara
// AKHALUMHE, Deborah oluwabunmi
// ADENEYE, Olusalewa oludunni
// OLUKOYA, Aderonke oluyemi
// OGUDU, Olubusayo oyinlola
// EWADE, Yinka alaba
// OLATOKE, Adebo medinat
// FATOYINBO, Simeon segun
// OKUNLOLA, Olubukola atinuke
// SODIYA, Morohunkeji yetunde
// ONI, Oloruntoyin adewunmi
// OWOLABI, Iyabo omolara
// ADENIJI, Adenike ajoke
// TAIWO, Bose patience
// ISMAIL, Surat aina folasade
// AJULOLA-AKINDELE, Oluwabusayo oluwafunmike
// OYETUNJI, Ayobami tosin
// KEHINDE, Monsur owolabi
// ADEWALE, Adesola yetunde
// ALADESUYI, Adeola oriyomi
// ANIMASHAUN, Ayodele ireti
// JOLAOSO, Ibironke olufunmilayo
// DOSUNMU, Adebusola oluwayemisi
// KEHINDE, Gbolahan david
// HASSAN, Mojisola Oluwatoyin.
// JONATHAN, Esther foluso
// OYENOLA, Olumide Paul.
// QUADRI, Adebukola oluwatoyin
// AKINDELE, Samson
// AWOYEMI, Ganiyat ajoke
// ADENIJI, Comfort yetunde
// ABDULLAHI, Adenike
// ADEKUNLE, Tolulope Patricia.
// OBADINA, Serah oluwatobi
// AJAYI, Niyi michael
// ALAO, Adebukunola temitope
// ATITEBI, Babatunde phillips
// KEHINDE-MARTINS, Ebenezer oluwaseun
// ANIMASAUN, Semiu Olasunkanmi.
// ODEDELE, Bosede olanike
// OYENEKAN, John abiola
// OGUNBANJO, Grace omowunmi
// ADEBARI, Musibau abiodun
// AYEDE, Kayode adedbayo
// ONANUGA, Samsam adeolu
// FASASI, Abosede b.
// FADIPE, Victoria tunmise
// SODIPO, Mopelola iyabode
// SORINDE, Olubunmi Adebukola.
// OSENI, Elizabeth olukemi
// FALANA, Nusirat kikelomo
// BAKARE, Taiwo
// OGUNJIMI, Sarah saidat
// NZEMECHI, Ajoke nkem
// FATOKUN, Johnson ajewole
// OLONADE, Adebayo oladimeji
// OMITOGUN, Olaniyi ghaffar
// DOLAPO, Kikelomo Omowunmi.
// ODUSANWO, Deborah olaoluwa
// TORIOLA, Modupe Rebecca.
// OLAJUMOKE, Sunsula ramota
// AJAYI, Janet opeyemi
// ODUTAYO, Titilope adedayo
// LESHI, Deborah funmilayo
// FADIPE, Isaac oluwasegun
// MAKINDE, Funmibi micheal
// ADEROJU, Grace oluwatoyin
// FALETI, Olusina hezekiah
// OSUNLAJA, Hammed
// OLUMUYIWA, Janet olubusayo
// BANKOLE, Mudupola abosede
// ADENAYA, Modupeola abike
// SOYINKA, Mukaila olatunji
// ADEEKO, Abiodun adewale
// TIJANI, Saheed adeniyi
// AKINTOLA, Fatai adigun
// AFELUYI, Taiwo abosede
// OYEBADE, Adedoyin victoria
// ODUMADE, Oladimeji adeniyi
// OGUNNIRAN, Mary oluwafunmilayo
// ADEYEMI, Oluwatobi elizabeth
// AKINPELU, Olaitan iyabode
// ADENEKAN, Ismail Abidemi.
// AKINTAYO, Mercy Yetunde.
// DIPEOLU, Bolajoko adenike
// SOFOLUWE, Oluwatoyin oluwaseun
// BOLA TEJUOSO, Adedapo adebunmi
// ADEYEMI, Oluwafunmike Florence.
// AZEEZ, Ayodeji Shakirudeen.
// AKINTOLA, Moyosoreoluwa Micheal.
// OLAKUNLE, Adejoke Margaret.
// FADIPE, Ismail Olagoke.
// SOLANKE, Moshood Olasunkanmi.
// OGUNDIJO, Muheez Oladele.
// FATOYE, Oluwakemi hannah
// ADELEYE, Folasade Folake.
// OLAYINKA, Oluwayomi Johnson.
// EHUWA, Abiola Esther.
// FANIJO, Olayinka riskat
// SANNI, Bilikisu temitayo
// ADEDIRAN, Damilola Anuoluwa.
// `  
// console.log(namesToCommaArray( abeoukutaSouthStaffNames))   

