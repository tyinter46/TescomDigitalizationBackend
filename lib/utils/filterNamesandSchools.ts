function namesToCommaArray(input) {
  return console.log (input
    .split(/\r?\n/)                 // split by line
    .map(line => line.trim())        // remove leading/trailing spaces
    .filter(line => line.length > 0) // remove empty lines
    .map(line => `${line},`)    )    // append comma
}
const AbeokutaSraffNames = `
`
namesToCommaArray(AbeokutaSraffNames)



const staffNames =   [
    "Mr. GANIU Kayode Soliu,",
    "Mr. ODUSOGA Sunday Adekunle,",
    "Mrs. ENIASORO Olubukola Titilayo,",
    "Mrs. WAHAB Oyebimpe Ola,",
    "Mrs. OWOLABI Omobolanle Rashidat,",
    "Mr. AJIBODE Taiwo Oligbeminiyi,",
    "Mrs. ADEBAJO Titilayo Seun,",
    "Mrs. OLUWOLE Vivtoria Adenike,",
    "Mrs. ALLI Modupeola Yejide,",
    "Mr. JOSEPH-HUNVENU Abiodun Olufemi,",
    "Mrs. SALAKO Modupeola Afolake,",
    "Mr. AINA Oluwole Remmy,",
    "Mr. ABDULKAREEM Daud Muhammad,",
    "Mrs. ADENIRAN Muinat Folashade,",
    "Mrs. OLAYEMI Bolanle E.,",
    "Mr. OGUNYANWO Ifetayo,",
    "Mrs. YINUSA Christiana Olusola,",
    "Mr. SANU Adewale Adegbenga,",
    "Mr.  AINA Bamidele Olatunde,",
    "Mrs.  KADIRI Adetunmeru O. A.,",
    "Mrs. TEMIDAYO Omoboye F.,",
    "Mrs. ABOYADE Fisayo Veronica,",
    "Mrs. EJALONIBU Adewunmi C.,",
    "Mrs. AFOLABI Olabisi Elizabeth,",
    "Mr. SODIYA Adekunle Samzdeen,",
    "Mr. OYETUNJI Benjamin Seye,",
    "Mr.  EESUOLA Abiodun Adebanjo,",
    "Mr.  OSISANWO Adefemi Akindele,",
    "Mrs.  ABDUFATAH Mujirat Bode,",
    "Mrs. ADEYEMI Oluwatobi E.,",
    "Mrs. ADEYANJU Oluwakemi F.,",
    "Mr. ADEOSUN Ajibola Oluwaseun,",
    "Mr. ALLEN Olawale Kehinde,",
    "Mr. BANKOLE Abiodun Oladipo,",
    "Mr. ARIYIBI Saubana Sunmade,",
    "Mr. ADEKANBI Saburi Adebisi,",
    "Mr. BELLO Olatoye Babajide,",
    "Mrs. OLADIPO Aminat Ayobami,",
    "Mr.  ADEKANBI SABURI ADEBISI,",
    "Mrs. AKINWANDE Olabisi,",
    "Mrs. QUADRI Adedayo Adesola,",
    "Mr. ADEKOLA  Olatunji Yusuff,",
    "Mrs. OLADEJI Oluwayomi Modupe,",
    "Mr. LAWAL Ajibola Saburi,",
    "Mr. JUNAID Biodun Musbau,",
    "Mrs. ADEWALE Oloyemi Titilope,",
    "Miss SALAKO Adebimpe Adedolapo,",
    "Mrs. EMUELOSI Adenike Omolara,",
    "Mrs. TAIWO Gbemisola Yemisi,",
    "Mrs. ADEDEJI Grace Olubukola,",
    "Mrs. ABOLADE Nofisat Adeyemi,",
    "Mrs. SHOWUNMI Bolanle Oluwafunmilayo,",
    "Mrs.  ODEYEMI Muinat Adebukola,",
    "Mrs. EKEADA Olawunmi Olabisi,",
    "Mrs. OGUNLADE Tosin Tobiloba,",
    "Mr. AKINDELE Oluwaseun Olatunji,",
    "Miss SOMUYIWA Tolulope  Femi,",
    "Mrs. OLUTEMIRO Omolara Temitope,",
    "Mrs. OTAYEMI Yewande Dolapo,",
    "Mr.  ADISA Olusegun Ajani,",
    "Mr.  DOSUNMU Emmanuel Oloruntola,",
    "Mrs. HAMEED Latifat Aderonke,",
    "Mrs. ADEBARI Adedoyin Olufunke,",
    "Mr. BADA Rasheed Akanni,",
    "Mrs. IBIKUNLE Rosemary Abokhia,",
    "Mrs.  KEHINDE Oyeyemi Adeyinka,",
    "Mr.  LAWAL Sulaiman Alabi,",
    "Mrs. TEREBO Ayodele Gbeminiyi,",
    "Mrs.  SOMUYIWA Abiola Abosede,",
    "Mrs. OLOKODANA Iyabo Comfort,",
    "Mrs. OGUNKUNLE Olupero Moradeun,",
    "Mrs. OBADINA Adenike Olayinka,",
    "Mrs.  DOSUMU Abigeal Tinuola,",
    "Mrs. ADEWUSI Olajumoke Abidemi,",
    "Mr.  KUTI Kayode Koya,",
    "Mrs.  AKINBOYE Banke Racheal,",
    "Mrs. OKUNEYE Fadekemi  Omobolaji,",
    "Mrs. OLADIPUPO Celestina Oluwabukunmi,",
    "Miss OLATUNDE Risikat Yetunde,",
    "Mr. ADENIJI Mathew Adewumi,",
    "Mrs.  AKINDE Idowu Sarah,",
    "Mrs.  ESAN Moradeyo Funke,",
    "Mrs.  KEHINDE Adesola Noimot,",
    "Mr. OMITOLA Olumide Sunday,",
    "Mrs.  OLUDOTUN Olabisi  Iyabo,",
    "Mrs.  SORUNKE Oluwaseun Olatobi,",
    "Mr.  KUYE Olalekan Oluwatosin,",
    "Mrs.  IDOWU Sakirat Folashade,",
    "Mrs.  AIHONSU Adeola Omotola,",
    "Mr.  ADEGBOYE Olugbemi David,",
    "Mrs. BAKARE Sekinat Olayinka,",
    "Mrs.  AKINLABI Adepeju Damilola,",
    "Mr.  ADELEKE Akeem Abolore,",
    "Mrs.  SANNI Bilikisu Temitayo,",
    "Mrs.  SALAMI Mariam Tawa,",
    "Mrs.  ADERINWALE Isiwat Olawanle,",
    "Mr. BAKARE Yusuff Oladipupo,",
    "Mrs.  ADEOSUN Tolulope Omolara,",
    "Mr. OLANREWAJU Bolarinwa,",
    "Miss ADEBOLA Adejoke,",
    "Mrs. AKINTOLA Iyabo,",
    "Mrs . SOYEBO Bilikis Omobolanle,",
    "Mrs.  MUSTAPHA Adesola Afusat,",
    "Mrs. AFOLABI Oluwatoni Awele,",
    "Mrs. DAUDA Matilda Omowunmi,",
    "Mrs. ADEKOYA Margret Funmilola,",
    "Mr.  ADIGUN Rotimi Adesina,",
    "Miss AKHALU Faith Ofe,",
    "Mr . AKINNIYI Micheal Adetayo,",
    "Mrs. KOLA-SOWEMIMO Ajoke Omolola,",
    "Mrs. OLADEHINDE Olabisi Grace,",
    "Mrs. OLUGBEMI Omolola Olufunmilayo,",
    "Mr. OGUNPOLA Oluseyi David,",
    "Mrs. SOWANDE Taiwo Adetutu,",
    "Mrs. ABASS Monsurat Olayinka,",
    "Mrs. OGUNLEYE Folashade Temitayo,",
    "Mrs.  OLAOYE Adefoluke,",
    "Mrs.  FASAKIN Olufunmilola Oluwapemisire,",
    "Mrs. OLABISI Esther Titilayo,",
    "Miss BADRU  Temitope Ariyike,",
    "Mr. ADEOSUN Akinyemi Olakunle,",
    "Mrs.  AKIODE Abosede Funmilayo,",
    "Mrs. DANIEL Blessing Uzoamaka,",
    "Mr. BABATUNDE Sunday Folorunso,",
    "Miss OLAYEMI Olabisi Mabel,",
    "Mr.  OYENIYA Sunday Adebayo,",
    "Mrs. OKE Hafsat Mosebolatan,",
    "Mrs. YINUSA Taibat Mojisola,",
    "Mrs.  ADENAIKE Christiana Bukola,",
    "Mrs.  YAHYA Rofiat Omowunmi,",
    "Mrs. OREBIYI Monilola Grace,",
    "Mrs. ATANDA Abiodun Mariam,",
    "Mr. DAUDA Ahmed Oseni,",
    "Mrs. ADEBAYO Olajumoke Elizabeth,",
    "Mrs. BABALOLA Dunni Adenike,",
    "Mr. DARAMOLA Olusegun,",
    "Mr. OKE Michael Oluwadamilare,",
    "Mrs. AWONUGA Olukemi Omiladun,",
    "Mrs. AKIN-AJAYI Oluwakemi Olayinka,",
    "Mr. AKINTOLA Moyosoreoluwa Micheal,",
    "Mrs. POPOOLA Catherine Tina,",
    "Mr. SALAMI Hakeem Olatunji,",
    "Mr. ADEGOKE Emmanuel Adebisi,",
    "Mr. AJIBOSO Micheal Olaniyi,",
    "Mrs.  OLOKEDE Olubunmi Ayobami,",
    "Mr. IKUEBOLATI Bayo David,",
    "MRS OKUWA Adebimpe Olabisi,",
    "Mrs.  DEINDE DIPEOLU Mary Aderonke,",
    "Mr. ADEYEMI Olujide Alade,",
    "Mrs. ADENIYI Mary Mojisola,",
    "Mrs.  ANYASI Dorcas Kikelomo,",
    "Mr. AJAYI Oluseun Emmanuel,",
    "Mrs. OYETORO Omobolanle Abidemi,",
    "Mrs. OTESILE Taiwo Alice,",
    "Mr. ODERINDE Oluwafemi Adewale,",
    "Mr.  SANYAOLU Olanrewaju Ade,",
    "Mr.  ARIYO Temitayo Emmanuel,",
    "Mr.  INYANG Ukeme,",
    "Mr.  YINUSA Akeem Adeniyi,",
    "Mrs.  OLUEDUN Ronke Rukayat,",
    "Mrs. JACOBS Ajibola Iyabo,",
    "Mr.  AJAYI Olabanji Moshood,",
    "Mr. OLUBUNMI Temidayo Oluwagbemi,",
    "Mrs.  MUSTAPHA Oluwakemi Caroline,",
    "Mrs SALISU Abiola Tawakalitu,",
    "Mr. OKUSANYA Oluwaseun Adedeji Samson,",
    "Mr. FAGBIRE Stephen Olugbenga,",
    "Mr. SALAMI Kamoru Jimoh,",
    "Mr. ABOLADE Babatunde Mukhtar,",
    "Mr. BAFUNSO Olawale Basiru,",
    "Mrs. ONIFADE Omobola  Oluwayemisi,",
    "Mrs.  AJAYI Janet Opeyemi,",
    "Mr. AYANDELE Gbemisola,",
    "Mr.  OLADIPUPO Sulaimon  Akanbi,",
    "Mrs. ABIOLA Olusola Motunrola,",
    "Mr. ADETUGA Richard Temitope,",
    "Miss  ADEKANBI Bolanle Afolasade,",
    "Mrs. ALADESUYI Adeola Oriyomi,",
    "Mr.  KEHINDE Gbolahan David,",
    "Mr. AYODELE Joel,",
    "Mr. ONANUGA Samsam Adeolu,",
    "Mrs.  FALANA Nusirat Kikelomo,",
    "Mr. BABATUNDE Abiodun Olawale,",
    "Mrs. OJELADE Oluwatoyin Ifedayo,",
    "Mrs.  BANJO Hannah Abosede,",
    "Mrs.  AINA Taiwo Abiola,",
    "Mr.  MUSA Hassan Abolore,",
    "Mrs.  AKOMOLAFE Oluwayemisi,",
    "Mr. TANIMONURE Samuel  O.,",
    "Mrs.  SANUSI Kuburat Afolashsde,",
    "Mrs.  TAIWO Abigail A.,",
    "Mrs.  OLUWADE Olubukola Damilola,",
    "Mr. ENABOR Ehiodion Lawrence,",
    "Mr.  OLUSANYA Taiwo Adekunle,",
    "Mr.  FATOKUN Johnson Ajewole,",
    "MR. EGBEWUNMI James Oluwole,",
    "Mr. AKINTOLA Fatai Adigun,",
    "Mrs.  ADENIJI Abolanle Saulat,",
    "Mr.  OSIKANMI Olayinka Olukayode,",
    "Mrs.  OMOYAYI Abosede Aduke,",
    "Mrs. OSIPITAN Omolola Abosede,",
    "Mr.  OLADEINDE Emmanuel Abiodun,",
    "Mrs. OGUDU Oluwabusayo,",
    "Mr. SOBOWALE Ayokunle Omololu,",
    "Mrs. OTULANA Bolape Ajoke,",
    "Mr. RAHEEM Alamu James,",
    "Mr. SHOBOLA Akinsola Sunday,",
    "Mrs. OLUFEMI Titilope Margaret,",
    "Mrs. ABAYOMI Catherine Idowu,",
    "Mr.  SOLOMON Sunday Abiodun,",
    "Mr.  ONI Ayodeji Abiodun,",
    "Mrs. OLOYEDE Afusat Omowunmi,",
    "Mr. AYORINDE Oluwole,",
    "Mrs. ODUNTAN Eunice Olubusola,",
    "Mrs. LATINWO Adijat Abisola,",
    "Mr. AKINWUNMI Ayodeji Williams,",
    "Mrs. ODEDELE Omolola Nofisat,",
    "Mrs. AYODEJI Oyalowo Hafsat,",
    "Mrs.  MAKINDE Adewunmi Oluwafunmilayo,",
    "Mr. OLASODE Gbolahan Moses,",
    "Mrs. OLUSANYA Iseoluwa Titilayo,",
    "Mrs. ADEKOYA Shakirat Olubunmi,",
    "Mrs. OLADIPO Aishat Yetunde,",
    "Mrs.  AINA Memunat Bolanle,",
    "Mrs. HASSAN Mojisola Oluwatoyin,",
    "Mr.  ARIYIBI Sodrudeen,",
    "Mr. OKELANA Ayodeji Olanrewaju,",
    "Mr. OYEWOLE Isaac Oluremi,",
    "Mrs. OTUN Fausat Olaide,",
    "Mrs. ABOLADE Yetunde Adebukola,",
    "MR OWOYELE MORUF ADESINA,",
    "Mrs. OGUNFUNMILAYO Taofika A.,",
    "Mrs. TOYOBO Iretiolu O.,",
    "Mrs. OGUNJOBI Alice Oluwaseun,",
    "Mrs.  SHONEYE Racheal  Bolanle,",
    "Mr. SOGBANMU O. Saheed,",
    "Mr. OGUNSILE Olukolade  O.,",
    "Mr. ANIMASAUN Semiu,",
    "Mr. ADEBANJO Tolulope  O.,",
    "Mr. GBADAMOSI Maruf  Seun,",
    "Mr.  FALAJA Olawale,",
    "Mrs. SOFOLUWE Oluwatoyin,",
    "Mr. BALOGUN Kareem O.,",
    "Mrs. ADEBAYO Khadeejah Abolanle,",
    "Mrs. TAIWO Oluyemisi Esther,",
    "Mr. OLAYINKA Oluwayomi Johnson,",
    "Mrs.ODUGA Oluwafunke Omobolanle,",
    "Mr. OGUNTUYO Albert O.,",
    "Mrs.  OYEDOKUN Dorcas Tofunmi,",
    "Mr. ADEBARI Musibau Abiodun,",
    "Mr. OYEWUNMI Sarafa Adeniyi,",
    "Mr. ODEWOLE Gbenga Ezekiel,",
    "Mr. ABDULLAHI Bamidele Adam,",
    "Mrs. IBRAHIM Nofisat Moronkeji,",
    "Mrs. ADEKOYA Victorie Olaide,",
    "Mr. DUROSOMO Moruf Alao,",
    "Mrs. OLADAPO Sarah Olubunmi,",
    "Mr. OGUNNIYI Sunday Oluwole,",
    "Mr. TEJUOSO Ayoola Michael,",
    "Mr. OLALEKAN Sunday Olasunkanmi,",
    "Mr. AYEDE Kayode Adebayo,",
    "Mrs. AKINKUNMI Taiwo Christiana,",
    "Mr. AKINWANDE Taiwo Tunde,",
    "Mr. ADEKANBI Fatai Adekunle,",
    "Mr.  LAWAL Olubanjo Adebowale,",
    "Mrs.  OGBON Racheal Adeola,",
    "Mrs.  OYEDELE Bilikis Abiola,",
    "Mrs.  SOYEMI Olayemi Adenike,",
    "Mrs. OSE Adedoyin Adetutu,",
    "Mrs. PRATT Florence Onanike,",
    "Mr. OMIDIJI Bamidele Abimbola,",
    "Mr. OLATUNBOSUN Olubunmi Olusegun,",
    "Mrs. OLORUNSOGO-OLUDE Comfort Anujehofah,",
    "Mrs, BABAYOMI Zainab Adetutu,",
    "Mrs. AKINGBENLE Rebecca Olufunke,",
    "Mrs. BELLO Abimbola O.,",
    "Mrs. AINA Morenikeji S.,",
    "Mrs. OGUNNAIKE Tosin,",
    "Mrs. ADEGUN Kemi Mariam,",
    "Mrs. SULAIMAN Saidat Oluwaseunfunmi,",
    "Mr. SALISU Oyeniyi Nureni,",
    "Mr. OJO Lateef Oyeniyi,",
    "Mrs. LAWAL Funmilayo Ajoke,",
    "Mrs. ADENEKAN Funmilola Olaoluwa,",
    "Mrs. AKINDIPE Elizabeth Olayinka,",
    "Mrs. OWOLABI, Omolade Elizabeth,",
    "Miss OLABODE Aminat Olatayo,",
    "Mrs. OLAWOLU Agnes,",
    "Mrs. ODUKOYA Oluwakemi B.,",
    "Mr. AYOPO Olumide Olanrewaju,",
    "Mrs. ARIBANUSI Adekemi Olubunmi,",
    "Mr.  SOYINKA Eniola O.,",
    "Mrs. ADENIYI Kojeku Adefunlayo,",
    "Mr.  ALEBIOSU Rapheal Kehinde,",
    "Mrs. AHMOD Olabisi Mariam,",
    "Mrs. OLAONIPEKUN Modupeola,",
    "Mrs. ADEWOLE Omotunde,",
    "Mrs.  ONATUNDE Ajibade Serifat,",
    "Mr.  BAKARE Abdulazeez,",
    "Mrs. RUFAI Abimbola Mariam,",
    "Mrs.  OSOKO Anuoluwapo,",
    "Mrs.  IBIRINDE Abidemi Olubunmi,",
    "Mr. LAWANI John Kizito,",
    "Mr. GBADEBO Babatunde Dare,",
    "Mrs. KAFARU Morenikeji Olusola,",
    "Mrs.  BAKARE Titilope Theresa,",
    "Mrs. TAIWO Afolake Oyekemi,",
    "Mr. ADEYANJU Adeniyi Emmanuel,",
    "Mrs. FALOLA Kehinde Olawunmi,",
    "Mrs. OMOTOSHO Olubukola,",
    "Mrs. ELEYELE Bernice Asani,",
    "Mrs. ADEYEMI Owowunmi Amlna,",
    "Mr. AKINWUNMI Samuel,",
    "Mrs. EYINOWUAWI Azeezat,",
    "Mrs. OGUNSOLA Bukola Adeola,",
    "Mr. ABDUL Babatunde Sikiru,",
    "Mr. EWULO Ayorinde Oyeyinka,",
    "Mrs. EGUNJOBI Felicia,",
    "Mrs. ODUTAYO Aminat Omotunde,",
    "MRS OGEDENGBE Nimota O.,",
    "Mrs. ONI Adijat Racheal,",
    "Mrs. GEORGE Abosede O.,",
    "Mr. SOWUNMI Ebenezer Oluwole,",
    "Mrs. OYEJOLA Adetola A.,",
    "Mrs. AMOS Taiwo Afolasade,",
    "Mrs. MOJOYINOLA Abiodun K.,",
    "Mrs. AYOADE Victoria Olawunmi,",
    "Mrs. RAIMI Modinat Abake,",
    "Mrs. ADESANYA Christianah Toyin,",
    "Mrs. AKINSOLA Omobolanle Rophiat,",
    "Mrs.  AWONIYI Hannah Oluwatosin,",
    "Mrs. OGUNDELE Oluyemi Olukemi,",
    "Mrs. BANKOLE Modupeola Abosede,",
    "Mrs. ODEYEMI Jemilat Asake,",
    "Mrs. OLATUNBOSUN Motunrayo  A.,",
    "Mrs. ADEBAYO Itunu Ayobami,",
    "Mrs. JONATHAN Esther Foluso,",
    "Mr. IDOWU Olugbenga Adesina,",
    "MRS EESUOLA Gbonjusola,",
    "Mr. AWOLESI Moses Olaolu,",
    "Mrs. AKHALUME Deborah Oluwabunmi,",
    "Mrs. ADEYEMI Olawafunmike Florence,",
    "Mrs. JESUDAINI Olatunbosun Mosebolatan,",
    "Mrs. AKINYEMI Oluyemisi Aderemi,",
    "Mrs. OLAJIDE Afolake Temitope,",
    "Mrs. ADELEKE Adedoyin Aderonke,",
    "Mrs. HASSAN Lateefat Temitope,",
    "Mrs. POPOOLA Julianah Olayinka,",
    "Mr. EGUNJOBI Akeem Olatunji,",
    "Mrs. ILORI Adenike Eniola,",
    "Mr. KOLAWOLE Samuel Abayomi,",
    "Mrs. AJAYI Oluwakemi Morenikeji,",
    "Mrs. ABIOYE Saidat Adetutu,",
    "Mrs. ESEBAMEN Stophia  N.,",
    "Mrs. AJULOLA Akindele Oluwabusayo,",
    "Mrs. OGUNSOLA Bolanle Deborah,",
    "Mrs. OGUNTUYO Temidayo,",
    "Miss AKINDELE  Fatimah Oluwakemi,",
    "Mrs. ADELEYE Abiodun Arike,",
    "Mrs. AKINLADE Olusola Kuburat,",
    "Mrs. ERINOSO Atinuke Taiwo,",
    "Mrs. ADEKUNLE Titilayo Elizabeth,",
    "Mrs.OTULANA Abiodun Elizabeth,",
    "Mrs. OLUMUYIWA Janet  Olubusayo,",
    "Mrs. IDOWU Kuburat Agbeke,",
    "Mrs. ODUMBO-ALASE Odunola Adeyinka,",
    "Mrs. AYORINDE  Ngozi Chinyere,",
    "Mrs. ADEBAYO Funmilola  Sayo,",
    "Mrs. SAMUEL Oluwayemisi Abike,",
    "Mr. SOYEYE Taofeek Alabi,",
    "MRS ADENIYI Maryam Iyabode,",
    "Mrs. FATOYE Oluwakemi Hannah,",
    "Mrs. AROMOSE Oluwafunlola,",
    "Mrs. ADEBOYE Kudirat Temitope,",
    "Mrs. FADIPE Adiat Olabisi,",
    "Mr. ASADE Oluwasina Akanni,",
    "Mr. ADEGBOYEGA Semiu Abiodun,",
    "Mr. RABIU Muritala Taiwo,",
    "Mrs. OGUNLEYE Sukurat Motunrayo,",
    "Mr. POPOOLA Seye Oladimeji,",
    "Mrs.  OLUWALOGBON Josephine,",
    "Mrs.  OLAKUNLE Serifat Oluwatoyin,",
    "Mrs. AFENISUNMEN Aderonke,",
    "Mrs.  ILEPE Bolanle Rose,",
    "Mrs. LEMO Sadat Bolanle,",
    "Mrs. SOKUNBI Folashade Amudat,",
    "Mrs. AKINLAMI Ibijoke Olabisi,",
    "Mrs. LESHI Deborah Funmilayo,",
    "Miss  ABODUNRIN Tolulope Olusola,",
    "Mrs. OPEBIYI Wasilat Adekunle,",
    "Mrs. AYANNUGA Oluyemisi O.,",
    "Mrs.  OGUNDELE Oluwakemi Ajoke,",
    "Mr. AKINSOLA Sunday Oluseye,",
    "Mrs. BAMIDELE Halimot Adebimpe,",
    "Mrs. AWOSILE Yetunde Gbemisola,",
    "Mrs.  KEHINDE Ibukun Omolola,",
    "Mr. MULERO Abiodun Ayodeji,",
    "Mrs. ODUYOMI Modoluwamu Idowu,",
    "Mrs. OGUNDAIRO Nofisat Modupe,",
    "Mrs. SOMUYIWA Rita,",
    "Mrs. ABIOLA Ibukun Olutosin,",
    "Mr.  AJIKANLE Adeshina Shakiru,",
    "Mrs. RAHEEM Fatimot Temilola,",
    "Mrs. ADETORO Fatimat Odunola,",
    "Mrs. TORIOLA Modupe Rebecca,",
    "Mrs. OJO Omonike Zeynab,",
    "Mrs. ADIGUN Vistoria Iyabo,",
    "Mrs. BELLO Risquat Afolake,",
    "Mrs. IWAYEMI Folasade,",
    "Mr. RAHEEM Rasheed Olawale,",
    "Mr. OYETUNJI Ayobami Tosin,",
    "Mrs. BALOGUN Monsurat Adefunke,",
    "Mrs. ABIODUN Amidat Olabimpe,",
    "Mr. ODURONBI Oluyemi Olaniyi,",
    "Mrs. SORINOLA Adebusola,",
    "Mrs.  BANJO Adetoro,",
    "Mrs. OLALEYE Olusola Esther,",
    "Mrs. IBRAHIM Oluwasola Sherifat,",
    "Mrs. NICHOLAS Modupe Elizabeth,",
    "Mr. OSENI Monsuru Opeyemi,",
    "Mr. AZEEZ Ayodeji Shakirudeen,",
    "Mr. KOLEOSO Emmanuel Oluwatobi,",
    "Mrs. FADIPE Victoria Tunmise,",
    "Mrs. ADEYEMI Makanjuola Omolola,",
    "Mrs. OKUNLOLA Olubukola Atinuke,",
    "Mrs. SORINDE Olubunmi Adebukola,",
    "Mrs. BAMGBOYE Omotola Abiola,",
    "Mrs.  OMITOGUN Bolanle Oluwakemi,",
    "Mrs.  OLATUNBOSUN Tunrayo Adeola,",
    "Mrs. ADESENI Adenike Oluwaseun,",
    "Mrs.  AKINBAMI Felicia Onyinyechi,",
    "Mr. ADEKUNLE Segun Olatunde,",
    "Mr.  AKINDELE Samson Abiodun,",
    "Mrs. ARIBISALA Olajumoke Omotola,",
    "Mrs.  ADESINA Yetunde Bunkayo,",
    "Mrs.  ODEWOLE Atinuke Adijat,",
    "Mrs.  OLADEJO Ramora,",
    "Mr.  AJAYI Taiwo John,",
    "Mrs. AGBOOLA Victoria  Iyabode,",
    "Mrs.  ADENIYI Olufolake Aderinke,",
    "Mr. OMOLE Theophilus Olufolarin,",
    "Mr.  SORUNKE Ismail Ayinde,",
    "Mrs. KEHINDE Comfort Busola,",
    "Mr. SOMOYE Yusuf Olatunji,",
    "Mrs. AKIN -WILLIAMS Deborah Oseyemi,",
    "Mrs. KUFORIJI Grace IYIyaboABO,",
    "Mrs. AFELUYI Taiwo Abosede,",
    "Mrs. AYORINDE Morufat Bola,",
    "Mrs. ONAKOYA Mojisola Abidemi,",
    "Mrs.  ONAYEMI Alice Olalekan,",
    "Mr. OBADINA Femi Yemi,",
    "Mrs. OLADIPO Adebisi Folake,",
    "Mrs. SOTOLA Temitope  Yetunde,",
    "Mrs. ADEKUNLE Oluwaseyi Adesanjo,",
    "Mrs. OLOWU Esther Adenike,",
    "Mrs. OYEYEMI Oluwayemisi,",
    "Miss  OLASIMBO Tawakalitu Alaba,",
    "Mrs.  AKINOLA Stella Olumayowa,",
    "Mrs. ADEBAYO Toyin Tunrayo,",
    "Mr. YUSUF Adeyemi Saheed,",
    "Mrs. ADEYEMI Oluwaseun Lydia,",
    "Mr. SOBOWALE Julius Sunday,",
    "Mrs. ADENIJI Adenike Ajoke,",
    "Mrs.  IDOWU Abosede Omobola,",
    "Mrs.  ADEOSUN Adijat Temitope,",
    "Mrs.  ADEYINKA Kehinde Oluwakemi,",
    "Mrs. OLOGUNEBI Olayide Omobolanle,",
    "Mrs.  KOLAWOLE Abayomi Olusola,",
    "Mrs. ABIODUN Victoria Abiola,",
    "Mrs.  ODUBENA Foluke Mary,",
    "Mrs. OJEBIYI Olubusola Adunni,",
    "Mr.  ADENIYI Gbenga Samson,",
    "Mrs. FALEYE Olusola  Oufunlola,",
    "Mrs. FADIPE Fatimoh Mobolaji,",
    "Mr.  ABIOLA Akintunde Adedeji,",
    "Mr. OMITOGUN Olaniyi Ghaffar,",
    "Mrs.  BAMIDELE Kudirat  Taiwo,",
    "Mrs. MACJOB Oluwatoyin Christiana,",
    "Mrs. AJAYI Temilade Adesola,",
    "Mrs. USMAN Modinat Amoke,",
    "Mrs. AJIBADE Adeleke Abiye,",
    "Mrs. AWOYEMI Saidat Abiodun,",
    "Mrs. AGBEDEJOBI Olabisi Omolara,",
    "Mrs.  ELEGUNDE Toyin Amope,",
    "Mrs. IDOWU Morenikeji Abosede,",
    "Mrs. OGUNWA Olukukola Temitope,",
    "Miss BABAYEMI Yetunde Morenikeji,",
    "Mrs. FAWEHINMI Adeola Oladunni,",
    "Mr. OGUNDIMU Gabriel Olubiyi,",
    "Mrs, UWELU Eruemulor Philomena,",
    "Mrs. DANSU Grace Olusola,",
    "Mr.  OLUSESI Ibrahim Owolabi,",
    "Mrs. AKIODE Olutayo Busayo,",
    "Mrs. OMIKUNLE Elizabeth Alaba,",
    "Mrs. SONEYE Olufunmilayo  Olapeju,",
    "Mrs. AKINOSHOTemilola Tolulope,",
    "Mrs. OMOTOSHO Temitayo Oluyemisi,",
    "Mr. OLOWOLAGBA Nofiu Adebola,",
    "Mrs.  ODUWOLE Serifat,",
    "Mrs.  SOTUNDE Olufunmilola Temitope,",
    "Mrs.  KODAOLU Dorcas Opeoluwa,",
    "Mrs.  OLAGUNJU Abosede Omolabake,",
    "Mrs. ODUNLAMI Olusola Janet,",
    "Mrs.  BAKENNE Adebola Fatimoh,",
    "Mrs.  OLANREWAJU Ponle Funmilola,",
    "Mr. ABIOYE Oluwagbenga Abiodun,",
    "Mrs. SOMIDE Ttitilayo Risikat,",
    "Mr.  OKUBADEJO Olugbenga Adeniyi,",
    "Mrs. SULAIMON Lateefat Oluwabunmi,",
    "Mr. ADENEKAN Ismail Abidemi,",
    "Mrs. OGUNRINU, Mayowa Omolola,",
    "Mr. SOYINKA Mukaila  Olatunji,",
    "Mrs. ODERINDE Tawakalit Olabisi,",
    "Mrs. OLUTUNDE Fehintola Bosede,",
    "Mrs. OLADEINDE Abosede Omotayo,",
    "Mrs.  OGUNSAKIN Oluwatoyin  Kemi,",
    "Mrs.  ADEMOLA Bukola Elizabeth,",
    "Mrs.  ADESEGUN Oluwayemisi Caroline,",
    "Mrs,  RAJI Olabisi Wunmi,",
    "Mrs. OKEDOYIN Folake Mojisola,",
    "Mrs. ADEROHUNMU Rashidat,",
    "Mrs. BANJOKO Akintomide M.S.,",
    "Mr.  SOKUNBI Samuel Seyi,",
    "Mrs. ISUMA Busurat Oluwaseun,",
    "Mr. AKINRINDE Kehinde John,",
    "Mrs. OYELUDE Oluwadamilola Olajumoke,",
    "Mr. DUROJAIYE Olayinka Olaoluwa,",
    "Mrs. AWOYEMI Ganiyat Ajoke,",
    "Mr. GANDONU Lawrence Dangbenyo,",
    "Mr. OKANLAWON Samuel Rotimi,",
    "Mrs. OKUNOLA Oluyemi Titilayo,",
    "Miss  AKINYEMI Adesola Alaba,",
    "Mrs. OWOADE Tolulope Yewande,",
    "Mr. ADEYEMI Samuel Ibukun,",
    "Mr. LAWAL Fatai Oladimeji,",
    "Mrs. JOSEPH Adekemi Adunola,",
    "Mrs. SORINLO Olufunlayo Olubukola,",
    "Mrs. AKOREDE Bhadmus Shakirat,",
    "Mr.  ODIDI Olawale Dare,",
    "Mr. AGBAJE Nojeem Ajasa,",
    "Mr. ADIGUN Olaniyi Zacheous,",
    "Mr. ADEKUNLE  Oluwaseyi Oyeniran,",
    "Mr. OLATUNJI Taiwo Afolabi,",
    "Miss AKINDELE Oluwatoyin Idowu,",
    "Mrs. ADEKUNLE Adetoun Ebunlola,",
    "Mrs. AKINWANDE Tolulope Ayomide,",
    "Mrs. AKINWUNMI Folake  Oyinkan,",
    "Mrs.  KARUNWI Temitope Serifat,",
    "Mrs.  ODEDELE Bosede Olanike,",
    "Mr.  OJUOLA David Abayomi,",
    "Mrs. SOTOMI Opeyemi Taiwo,",
    "Mrs. OLISA Abiola Sakirat,",
    "Mrs. BELLO Felicia Olabisi,",
    "Mrs. OGUNTOLA Sola Ganiyat,",
    "Mrs.  ANFELA Mary Toyin,",
    "Mrs.  RAHEEM Omolola Modupe,",
    "Mrs. NEMEDIA Odegua Regina,",
    "Mrs. RABIU Bolanle Busola,",
    "Mrs. MAKINDE Abiola Abosede,",
    "Mrs. ADELAKUN Adetola Olufunso,",
    "Mr. OGUNWA Adetokunbo Yomi,",
    "Mrs.  JOSEPH Atinuke Patience,",
    "Mrs. OYEKUNLE Clara Olufunmilayo,",
    "Mr.  ADENIRAN Tajudeen Adewale,",
    "Mrs. AFOLABI Asisat Oluwaseun,",
    "Mrs. LAWAL Folasade Arinola,",
    "Mrs. ABIONA Taiwo Oluwaseyin,",
    "Mrs. OSIBANWO Suliat Temitayo,",
    "Mrs. ADELUOLA Olasunmbo Ibidunni,",
    "Mrs. OKEYINGBO Morolake,",
    "Mrs. ADEKUNLE Fatimah Afolake,",
    "Miss OGUNNAIKE Oyindamola Hannah,",
    "Mrs Oloyede Taiwo Abosede,"
]
  const jsonArray = [
    {
        "staffFirstName": "Mrs. KILASHO,  Mariam  O.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "Mrs. SAKA,  Olusola folasade",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. AJASA,  Olukemi alice",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "Mrs. AKEWEJE,  Moriam abike",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. SHITTU,  Babatunde sikiru",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. IBIRINDE,  Eunice olubusayo",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ADEROKU,  Omolara oluwafunmike",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. SOTUNDE,  Omolola mary",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "Mr. SOFOWORA,  Adesina olusola",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "Mrs. AJAYI,  Folasade toyin",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. ADESENI,  Olushegun  sunday",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. ODUYELU,  Titilayo olufunmilayo",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "Mrs. SOYOMBO,  Kemi elizabeth",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mr. OLABODE,  Olaseni rafiu",
        "schoolName": "PG's Office"
    },
    {
        "staffFirstName": "Mr. AKINLOTAN,  Olujinmi micheal",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. OLUWADAIRO,  Olufunmilayo omolola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. OSODE,  Bola olufemi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. AKANJI,  Daniel  A.",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "Mrs. OLANIYI,  Abiola modupe",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "Mrs. BAMIGBADE,  Abosede oluwayemisi",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. OYEBEFUN,  Mojisola motunrayo",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. OLUGBADE,  Ismail abayomi alao",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. ALAO,  Fasiu babayemi",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. DARAMOLA,  Olubunmi olayinka",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. BAMGBOYE,  Oluseyi simon",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mrs. SHAFII,  Kuburat adebola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. OGUNTAYO,  Ayotunde olufemi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. JINADU,  Wahab olatunbosun",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. AREMU,  Michael sunday",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. NGENE,  Olufunke florence",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. OLOYEDE,  Babatunde ajibola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. FALUYI,  Olabisi abosede",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mr. OGUNSEYE,  Olubamiji tunji",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mrs. DADA,  Opeoluwa aramide",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. OLALEKAN,  Oyenike  M.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mr. ODEKUNLE,  Mukaila oluwafemi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mr. ISHOLA,  Suraju olalere",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. LAWAL,  Fatai oladimeji",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "Mrs. OKEREKE,  Bertha ego",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "Mrs. BABATUNDE,  Olufunke ajoke",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. POSU,  Abosede  O.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mr. SOREMI,  Akintunde oluremi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. AKOLAWOLE,  Adenike adetoun",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "Mrs. AKINBILE,  Olubinpe olasunbo",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. BABATUNDE,  Abiodun olawale",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mr. ADEYEMI,  Babatunde olaniran",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mrs. AKINTUNDE,  Taiwo risikat",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. BERNARD-OKE,  Oluwakemi rashidat",
        "schoolName": "PG's Office"
    },
    {
        "staffFirstName": "Mr. SOYINKA,  Akeem adedayo",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. OLUWUNMI,  Safurat adeola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mrs. ODUNAIYA,  Opeluwa folasade",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. ADEFOLAHAN,  Kudirat adejoke",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. FAGBUYI,  Florence oluwayemisi",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "Mrs. SOYINKA,  Oluyemi aina",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. BADMOS,  Doyin ganiyat",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. OZOJE,  Mosunmola oludayo",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. OLUFUNWA,  Oluseun abayomi",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mrs. ABDULRAHMAN,  Tawakalitu kemi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. AKIN-SHORINOLA,  Kehinde omowunmi",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "Mrs. ADEBANJO,  Adenike  A.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "Mrs. OMITOGUN,  Afolasade aderonke",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "Mrs. BAKARE,  Abosede aderonke",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "Mrs. OLAJIDE,  Olubunmi  M.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. OLUBI,  Omolola jumoke",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ODUKOYA,  Adenike adeola",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mrs. JOSEPH,  Anike  O.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. ADENEKAN,  Israel oladimeji",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mr. ADEGOKE,  Wasiu olalekan",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. ADENIYI,  Tiwalola oluwakemi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. FADEHAN,  Morenike victoria",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. VAUGHAN,  Aderonke oluyoola",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mr. JOHN,  Olusola  A.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. AKINYELE,  Adeyinka abiodun",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. OKOKOARHAYE,  Racheal oluwatoyin",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mr. AKINLAWON,  Idris olalekan",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. OLAYEMI,  Bolanle  A.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ONIYIDE,  Florence olukemi",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. SALAMI,  Olubunmi omobolawo",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mr. OBADINA,  Femi yemi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mr. TEJUOSO,  Ayoola michael",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "Mrs. AYORINDE,  Morufat bola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mr. INYANG,  Ukeme monday",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mr. OLASIMBO,  Tawakalitu  A.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. ADEGOKE,  Yemisi  A.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. SOTOLA,  Temitope yetunde",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. ONAYEMI,  Alice olalekan",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mr. AMOS,  Alani",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ISHOLA,  Janet oluwakemi",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. DANSU,  Grace olusola",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mr. SOBOWALE,  Julius sunday",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. ADEBAJO,  Susanah oluwakemi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. AKIODE,  Olutayo busayo k.",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mr. AKINJOBI,  Ayodeji adekunle",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. FAWEHINMI,  Adeola  O.",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mrs. OKEYALE,  Abimbola christiana",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. AFOLABI,  Olabisi miubat",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. AKPAN,  Oluwatoyin jokotola",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. AYONOTE-YUSUF,  Mercy kehinde",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "Mrs. ODUMBO-ALASE,  Odunola  A.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. SOYOYE,  Taofeek alabi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mr. YUSUF,  Maruf oladimeji",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mr. OLAYODE,  Shadrach adimu",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. SALAMI,  Maria tawa",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. OLADIPO,  Yetunde ibironke",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. OGUNSOLA,  Bolanle deborah",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. RAHEEM,  Rasheed olawale",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. OLUSESI,  Ibrahim  O.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "Mrs. SODIPE,  Olubukunmi adedayo",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. SODIPE,  Oluwabunmi oluwaseyifunm",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mr. ADEGBOYEGA,  Semiu  A.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mr. AJIKANLE,  Adeshina sakiru",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. OLUTOBERU,  Omoniyi kehinde",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. EFUNDIPO,  Olajumoke feyikemi",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. OLAYEMI,  Olabisi mabel",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. JIMOH,  Abiodun galeeb",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "Mrs. ODEYEMI,  Oluyemisi bowale",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. OKE,  Hafsat mosebolatan",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. OKELANA,  Ayodeji olanrewaju",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "Mr. SALISU,  Oyeniyi nureni",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. OGUNJOBI,  Alice oluwaseun",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. JUNAID,  Oludayo mary",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mr. MUSA,  Olalekan  T.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mr. OYENEKAN,  Kolawole ben",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. MUSTAPHA,  Oluwakemi caroline",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mr. OSI,  Taofeek adetunji",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. EMENIKE,  Oluwaseun efundeji",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "Mrs. ADEWALE,  Oluyemi titilope",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "Mr. AYINDE,  Adewale emmanuel",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mr. OYENIYA,  Sunday adebayo",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. SANU,  Adewale adegbenga",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. KUPONIYI,  Caroline",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. EKE,  Adetutu",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. ADEJUWON,  Adesanmi adetoyese",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "Mrs. SENFUYE,  Oluwarotimi rebecca",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "Mrs. KADIRI ADETUMERUN,  Oyindamola abigail",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mr. AJAYI,  Olabanji moshood",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. OGUNBAMERU,  Titilola jumoke",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. POPOOLA,  Julianah olayinka",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mrs. OYEDELE,  Abosede  O.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "Mrs. AJIBOLA,  Seilat abolanle",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ESEBAMEN,  Stophina ngozichukwu",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mrs. ADENIYI,  Maryam iyabode amope",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. BUBA,  Clementina enogiomwan",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mrs. OSIBANWO,  Suliat temitayo",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. ADERINTO,  Adebanke adekitan",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mr. OGUNSOLA,  Joseph  B.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "Mr. EESUOLA,  Abiodun adebanjo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mr. OGUNSOLA,  Olusesan",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "Mr. BAKARE,  Yusuf oladipupo",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. JUNAID,  Olusola  T.",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "Mrs. OSHO,  Funmilola  A.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. JOHNSON,  Oluwabunmi olawunmi",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "Mrs. AYINLA,  Oluwabunmi  O.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. TAIWO,  Oluyemisi esther",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. OGUNGBANGBE,  Victoria bosede",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. AKIYODE,  Ayodele joseph",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. HAMEED,  Aderonke  L.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mrs. POPOOLA,  Aderonke ajoke",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ADEEKO,  Grace olujoke",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. SALAU,  Fatima afolake",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. SALISU,  Abiola  T.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "Mrs. BADEJO,  Taiwo adepeju",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. BAKARE,  Omolara  O.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "Mr. OGUNSOLA,  Sunday  A.",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "Mrs. BANJO,  Hannah abosede",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. TANIMONURE,  Omolara olusola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "Mr. ODUFUYE,  Abimbola oduntan",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mr. OLADEINDE,  Emmanuel biodun",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. SULAIMON,  Olatunji",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ODUNLAMI,  Anthonia  A.",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. ORIOLA,  Olubukunola abiola",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. OLUFEMI,  Titilope margaret",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. ANIMASHAUN,  Olateju  A.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "Mr. OSIKANMI,  Olayinka olukayode",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. OTULANA,  Bolape ajoke",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. ADENIYI-RAIMI,  Modupe",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. MAKINDE,  Abiola abosede",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "Mr. SOBOWALE,  Ayokunle omololu",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. SOFELA,  Oludayo olufemi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mr. AKINLOLU,  Akintunde emmanuel",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. ADEGBITE,  Abosede bernice gift",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mrs. OMOYAYI,  Abosede aduke",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. ADELEYE,  Yinka muibat",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "Mr. OJO,  Lateef oyeniyi",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. GREEN,  Grace omotola",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mrs. OGUNDOKUN,  Olufumilola omowunmi",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mr. AYOPO,  Olumide olanrewaju",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mr. EDIDI,  Olubodun oluwafemi quadr",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. UTHMAN,  Adiat  I.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. ADELUOLA,  Olasunmbo ibidunni",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "Mrs. OKI,  Oluseyi  adenike",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. OJO,  Hannah oluwaseyi",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mrs. OSIPITAN,  Omolola abosede",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "Mr. BILEWU,  Gabriel oluwatoyin",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. OMOWAYE,  Bolaji adenike",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "Mrs. KOMOLAFE,  Abosede  O.",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mrs. OJEBIYI,  Risikatu adunni",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "Mrs. OMIDIJI,  Oreoluwa  A.",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mrs. ADELU,  Olunike  A.",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mrs. ODUKOYA,  Oluwakemi mobolanle",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "Mrs. POPOOLA,  Adijat abosede",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OSILAJA, Babafemi idowu",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ABOLADE, Tawakalit",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "SHOGBIYANJU, Kazeem olawale",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "AKINWALE, Ikeola Bukola.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "BABATUNDE, Oluwakemi afolake",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "SONDE, Akintoye tolulope",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "FATEROPA, Azeezat abiodun",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADENIYA, Basirat bidemi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ODERINDE, Tawakalitu Olabisi.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "KOYA, Abimbola omowunmi",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "SESI-JIBOWO, Omoruyi angela",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OGUNSOLA, Temitope ajoke",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "SOMUYIWA, Momudat omosalewa",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "BALOGUN, Salamot Ayoka.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "FASESIN, Olabisi o.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AYOPO, Olubola adeola",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "LOGUNLEKO, Adejoke olayemi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OGUNJOBI, Opeyemi ramota",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADEDEJI, Saidi babatunde",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "SORETIRE, Temitope Taiwo.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEOYE, Oluyemi oluwagbemileke",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBAYO, Samuel oluwayinka",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OKESANYA, Olayinka abosede",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADESANYA, Florence Oluwakemi .o..",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "SOWUNMI, Dayo olushesi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "BAFUNSO, Oladayo oladunni",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "POPOOLA, Magdalene olufunmilayo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLATUNJI-ISIOYE, Bolanle Janet.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OSEMENE, Opeyemi bunmi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SOTOMI, Oluwatosin esther",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AKINDE, Omotayo rhoda",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "MUHAMMED, Bolajoko temitope",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ORIJA, Oluwadunsin Nike.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AJIBODE, Babatunde emmanuel",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OSAHENI, Ayobami Adeosun.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ABIADE, Taiwo ayisat",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "SHOWANDE, Funmilayo olabisi",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOREMEKUN, Rasidat bolanle",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AYANDELE, Gbemi segun",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OGUNDIPE, Atinuke Mulikat.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADENIYI, Fatimoh Olufunke.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "BHADMUS-AKOREDE, Shakirat Adebukola.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "GBADAMOSI, Moruf seun",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "KAZEEM, Tawakalitu abolanle",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "DURODOLA, Agnes Temitope.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "KAREEM, Ayinde aliu",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SONEYE, Tolulope ajani",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "SOTOLA, Olufunmilayo Gbemisola.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OSOKO, Abiodun olabode",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "SORUNKE, Ismail ayinde",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "SANUSI, Oladele rasheed",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "JAGUNMOLU, Fausat omowunmi",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "TANIMONURE, Samuel oluwasola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLOKEDE, Olubunmi ayobami",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "SHONDE, Atinuke monsurat",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEGBOYEGA, Mariam abosede",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLADEINDE, Abosede omotayo",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "AWOJOBI, Olusegun stephen",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADEKUNTE, Oluwafunmilayo bolanle",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "SANNI, Fatai adekunle",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "RASAKI, Suraju adebayo",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ILORI, Jesutofunmi Opeyemi.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ELEMIDE, Olujimi lawrence",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "TOGUNWA, Oluwaseun",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OGUNMORINLE, Ebunoluwa oladayo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SETEOLU, Adebisi omolade",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OGUNYANWO, Olutoke elizabeth",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AWOYEMI, Saidat Abiodun.",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADEOSUN, Modupe Caroline.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AKINJOBI, Oluwakemi sarah",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OTUFOWORA, Musifat yemisi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "DOSUMU, Abigael",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OGUNYINKA, Olabisi adetutu",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ODUWOLE, Serifat adebola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "MAJOYEOGBE, Mary boluwatife",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "AKINTADE, Kola olanrewaju",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBOWALE, Adetunji Sunday.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OKUNLOLA, Oluyemi titilayo",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "SANYAOLU, Florence ajoke",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ODURONBI, Taiwo olumide",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "AGBOLAHAN, A. adebusayo",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLUGBADE-OGUNDOKUN, Ganiyat omotayo",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "SORINLO, Olufunmilayo olubukola",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "SOKUNBI, Folashade amudat",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AROWOSEGBE, Temitope joseph",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNTUYO, Temidayo ayobami",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "BAKENNE, Adebola fatimoh",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "AJIBOLA, Azeezat Iyabo.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEKUNLE, Oluwaseyi oyeniran",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ODUNLAMI, Olusola janet",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEKUNLE, Adetoun ebunlola",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "HASSAN, Lateefat Temitope.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "AKINLAMI, Ibijoke olabisi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "IGESOLA, Olamide Temitope.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OGUNKUNLE, Olupero moradeun",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "BAKARE, Abdulazeez adeleye",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "FOLORUNSHO, Ayodele peter",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADENIJI, Yetunde Azeezat.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OTAIKU, Adebola Modupe.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AYANRINNO, Oluwatosin esther Kikelomo.",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "AZEEZ, Oluwaseyi david",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ADEBESIN, Olukayode adebisi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AGBENIYI, Kafayat olubunmi",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ODUSOGA, Rukayat yomi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADEBARI, Adetunwase motunrayo",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ODUSOGA, Adekunle sunday",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "AJIBODE, Taiwo olugbeminiyi",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "BAKENNE, Kafilat adeyinka",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SOMUYIWA, Abiola Abosede.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "RUFAI, Mariam Abimbola.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADELEKE, Olusegun gbadebo",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "MORENIKEJI, Rashidat adetola",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ADEBAYO, Funmilola sayo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ODEDELE, Omolola nofisat",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "SOLOTAN, Olawale",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "MINIRU, Olalekan stephen",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "LAWAL, Monsurat bolanle",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AKANDE, Salimot abosede",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "YISA, Abdulahi olawale",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "BABALOLA, Dunni adenike",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ODUNEWU, Victor adebayo",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "LENTULUS, Adedeji demos",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBAYO, Eniola titilayo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "AWODE, Olayiwola adeyoye",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADEBAYO, Adewale matthew",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "JOSEPH, Olufumilayo mary",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOTUNDE, Olufunmilola temitope",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "NUGA, Mary toyosi",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "AKINDE, Oluwatoyin anu",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OLADIPUPO, Sulaiman akanbi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AKINRINDE, Folorunso sarah",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OGUNSOLA, Olubukola olasumbo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "BOLUTIFE, Samuel olusegun",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OMOLEYE, Funmilayo motunrayo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADEBIYI, Victoria oluyinka",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OWOBAMIRIN, Oluwafunmilayo olajumoke",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADEOSUN, Deborah olufunke",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OMONIYI, Mojisola grace",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OGUNWA, Oluwabukola temitayo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLUWAYOMI, Alaba Abidemi.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OLUFEMI, Esther motunrayo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLADIPUPO, Abidemi fatimo",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEKUNLE, Oluseyi abidemi",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OMOTOSHO, Temitayo oluyemisi",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "AKINNIYI, Micheal Adetayo.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AKINBANDE, Oluwakemi bola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OKANLAWON, Oluwatoyin Hannah.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OKANLAWON, Aderonke nosimot",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AKINSANYA, Adedoyin omolara",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "KEHINDE, Kehinde kemi",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OGUNWEMIMO, Funmilola Abosede.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ODULE, Olubunmi olanike",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "DANIEL, Blessing Uzoamaka.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ODEKANYIN, Kolawole",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "FASAKIN, Olufunmilola Oluwafpemi.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OLAJIRE, Nurudeen Akanmu.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ORIYOMI, Rachael bolanle",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OYENEKAN, Pelumi Christianah.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "FADIPE, Adiat olabisi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "KOLEOSO, Kemi Florence.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADESINA, Abosede adenike",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "RUFAI, Nurudeen Olatunji.",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "LEMO, Sadiat bolanle",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNTOYE, Emily doyin",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "SHITTU, Habeeb Abiodun.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "AKINDELE, Olufunke olayinka",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "AKISANMI, Oladayo akinbiyi",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OLAOGUN, Adewale boluwatife",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNSEYE, Peter akinsanmi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "AJAYI, Morenikeji Abigeal.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADIGUN, Victoria iyabode",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "MAGNUS, Funmilayo adenike",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "EDE, Adebisi, olawunmi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADIGUN, Olaniyi zacheus",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OLABISI, Esther Titilayo.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ADELAKUN, Adetola olufunso",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ADENIJI, Monsurat Omonike.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ABIOLA, Olubunmi margret",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "FADIPE, Olayemi toyin",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ADEYEMO, Deborah oluwayemisi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADEBOYE, Adebimpe monsurat",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "AROWOSEGBE, Olufunke romoke",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEYINKA, Yetunde bernice",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEWUSI, Olajumoke Abidemi.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ABIOLA, Akintunde adedeji",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLADEHINDE, Olabisi grace",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AKINTOLA, Iyabo adebimpe",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AJAYI, Bola grace",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADEPENA, Funmi gbemisola",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ONABAJO, Olatunde Ayodele.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OJO, Abisoye olukemi",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OLABODE, Saheed olawale",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "BABALOLA, Adebimpe Modupe.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "IDRIS, Ganiyat Olayemi.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SALAUDEEN, Musa ajani",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OBADINA, Folorunso james",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OMOLADE, Temidayo bolanle",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "LIASU, Kazeem okanlawon",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AINA, Taiwo abiola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLADIPO, Elizabeth Titilayo.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AYODELE, Joel",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "TAIWO, Abigail aderele",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINYEMI, Adesola alaba",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ONOTA, Adenike Omowunmi.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "TAIWO, Adesegun oluwadare",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OLUGBEJE, Abiodun idowu",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "EDUN, Olufemi kolawole",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ABDULAZEEZ, Abdrazaq jumah",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "AFOLABI, Oluwatoni Awele.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "LAWAL, Rodhiat abiola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "KODAOLU, Dorcas opeoluwa",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OLUSI, Oriyomi susannah",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADENIYI, Oluwagbenga samson",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BABATUNDE, Ibrahim Adebayo.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADEYINKA, Kehinde oluwakemi",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ABIOYE, Adekunle akeem",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKALA, Bolanle titilola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FALETI, Iretioluwa Babajide.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "AINA, Oluwole remmy",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLANIRAN, Atinuke titilayo",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "POSU, Olufunmilayo eshter",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNTOLA, Mojisola ganiyat",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "PETERS, Adesola wunmi",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OYEBO, Deborah bosede",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINDIPE, Elizabeth olayinka",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "DISU, Muyibat olajumoke",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNDEJI, Modioluwamu",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "AKANDE, Yakubu alamu",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OYEDELE, Ebenezer olubunmi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNSOLA, Mulikat adeola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SANUSI, Abolade mutiu",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINPELU, Khadijat titilayo",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ODUNEWU, Musibau Oluwalogbon.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "IDOWU, Abosede omobola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNKUNBI, Modinat Akanke.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ODELAJA, Afoluso esther",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OJEBIYI, Olubusayo adunni",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "LAWAL, Taiwo adetutu",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ODUNMBAKU, Victor tope",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "AKINGBOLA, Adewunmi oluwatoyin",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ORISABIYI, Titilayo folasowo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLANREWAJU, Temitope julius",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SOWEMIMO, Adenike bolanle",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOKEYE, Daniel seyi",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BELLO, Abimbola oluwatosin",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "AKINTARO, Bolatito nafisat",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "SHOKUNBI, Samuel seyi",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "LAWAL, Funmilayo ajoke",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "MUNIR, Sarafadeen Oluseyi.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AJAGUNNA, Elizabeth moji",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ADEPOJU, Comfort Temilade.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "FADIPE, Fatimo mobolaji",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "IMADU, Oluwakemi Abosede.",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLORODE, Folake morufat",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ODUMADE, Sunday adekanbi",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "AJIFOLUSE, Adegoke ayoade",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ELEGUNDE, Toyin amope",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "AMOSU, Oluwaseun mary",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ABDUL, Seun Olajide.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ELEMIDE, Adesola rachael",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OYETORO, Omobolanle abidemi",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OJURE, Adijat bolanle",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "COLE, Yetunde patience .o.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "POPOOLA, Rasheed Oladipupo.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OWOLABI, Omolade elizabeth",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "AINA, Morenikeji sarah",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "BUHARI, Rukayat Olayinka.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "DOSUNMU, Olubimpe olubukola",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "SANYAOLU, Rukayat Olayinka.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "SOGAOLU, Lawrenta oluranti",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ODUTAYO, Aminat omotunde",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "EJEH, Francis ogbike",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINDELE, Oluwatoyin Idowu.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OSSAI, Dickson",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "BHADMUS, Afusat bolanle",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEROHUNMU, Rasheedat olatokunbo",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "BABAJIDE, Bankole sheu",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ARIBISALA, Olajumoke omotola",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ABIOYE, Sadiat adetutu",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "LAWAL, Funmilayo Seun.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "KUSIMO, Sunkanmi bisoye",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "DOSUMU, Emmanuel oloruntoba",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "GEORGE, Abosede funmilayo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "DARAMOLA, Adenike foluso",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ENILOLOBO, Olalekan Adeniyi.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OKEDOKUN, Olutomi ajike",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "MUSA, Nosifat Adejoke.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OLOKODE, Rachael yemisi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OBADINA, Adenike olayinka",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLOYEDE, Afusat omowunmi",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "SOLOMON, Sunday Abiodun.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SONDE, Lanre adigun",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLATUNDE, Risikat yetunde",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADEWOLE, Oluwagbenga amos",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ODUFUYE, Afolake adebisi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "DUROJAIYE, Olayinka olaolu",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ODEBODE, Funmilola eniola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OGUNDAIRO, Nofisat modupe",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ABIOYE, Oluwasesan oluwaremi",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "AKINLEYE, Funke motunrayo",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OYELUMADE, Foluke oluwaseun",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "SANGOBIYI, Beatrice segilola",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "OLATEJU, Oluwakemi Julianah.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OLANIYAN, Christianah oluwaseun",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLOWU, Temilola",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "BABAYOMI, Zainab Adetutu.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "DAUDA, Matilda omowunmi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "DASAOLU, Jolade felicia",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ABOLADE, Babatunde Mukhtar.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OMISORE, Ikeoluwa tolulope",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "YUSUF, Aina olamilekan",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADENIJI, Atinuke adebukola",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "SHOYOYE, Temitope bolanle",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "SOREMEKUN, Olufemi oladimeji",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNRONBI, Oluwarotimi o.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OGUNAIKE, Tosin Oluwaseun.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "IDOWU, Toyin adebola",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ASADE, Oluwasina akanni",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "JOSEPH, Atinuke patience",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ABIODUN, Victoria Abiola.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINGBENLE, Rebecca olufunke",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OJO, Oluwakemi abiola",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AFOLABI, Rachael idowu",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OLABODE, Abosede nimota olasubomi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SHOYOYE, Josephine oluwaseyi",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "SHITTU, Alice olusola",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADETORO, Fatimot odunola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "BALOGUN, Monsurat adefunke",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OBEDAT, Idowu adebisi",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AKINBODE, Funmilola folashade",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "BABARINDE, Christiana adetomi",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OKEYINGBO, Morolake abosede",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "AKINTAN, Aminat Omolabake.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ABIONA, Taiwo oluwaseyi",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "BOLARINWA, Bunmi omolola",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "BALOGUN, Iyabo folashade",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "THOMAS, Owolabi odunayo",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADEKUNLE, Segun olatunde",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ADEYEMI, Samuel ibukun",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "AKINDOYIN, Grace olubukola",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "BAMGBOYE, Omotola abiola",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ADEMOYEWA, Olawole",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ODUDE, Felicia temitope",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OKUNEYE, Fadekemi omobolaji",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OJO, Omonike zeynab",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "GANIU, Kayode saliu",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "KUSAMOTU, Phebean Foluso.",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "SALAKO, Modupe afolake",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OGUNWA, Adetokunbo Yomi.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "SOFELA, Abosede adesola",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ADEYEMI, Busayo Ruth.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OKEOWO, Comfort oluwakemi",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "BANJO, Adetoro Oluwayemisi.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLUEDUN, Ronke rukayat",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "YINUSA, Akeem adeniyi",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OSENI, Monsuru Opeyemi.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLADOSU, Folasade elizabeth",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINDELE, Fatimah Oluwakemisola.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "AKINWANDE, Tolulope ayomide",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ABDUL, Babatunde sikiru",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOTANNDE, Abiodun kabir",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBAYO, Funmilayo abidemi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "FATAI-SOSANYA, Oluwaseyi Abidemi.",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "ODUNTAN, Eunice olubusola",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OLUWADARE, Motunrayo aina",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADESANYA, Chistianah toyin",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADESANYA, Bamidele isreal",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ALABA, Mary oluwatoyin",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OLUDIPE, Olajumoke alice",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BAMIGBELU, Rebecca modupe",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "BAKARE, Margaret oluwatoyin",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AINA, Bamidele olatunde",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OYEDEMI, Olaide olubunmi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SONDE, Olubunmi busola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADESINA, Afolake joke",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "TEMIDAYO, Omoboye florence",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLUBANWO, Oluwatosin Arike.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADENIJI, Abolanle saulat",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ANYANWU, Chinedum getrude",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "JULIUS, Afolake omua",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLAWUYI, Oluwatoyin Oduola.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "IDOWU, Olutayo daniel",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADEKOYA, Samson adekunle",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "IDOWU, Onayemi mojisola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOMUYIWA, Rita modupe",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ABIOLA, Adeniji",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OYEDELE, Adedamola bose",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINSOLA, Omobolanle rophiat",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "LAWAL, Sulaiman alabi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SANGOSANYA, Muyiwa",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADIGBO, Veronica bola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "FANIYAN, Olusegun emmanuel",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "AKINLADE, Olushola Kuburat.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLAWALE, Favour oluwafunke",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "LATINWO, Adijat abisola",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OBASAN, Olufolake yetunde",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ORESOTU, Oluwatoyin Temitope.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "JOSEPH, Adekemi adunola",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "AYOADE, Victoria olawunmi",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SANUSI, Kuburat folasade",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLUSOLA-KAMAR, Oluwakemi emmy",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLADOTUN, Adeyinka afusat",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "EDWARD, Olayinka funmi",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OLAKUNLE, Serifat oluwatoyin",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OLAONIPEKUN, Modupe oluwaseyi",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "AKINOLA, Olajumoke eunice",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLUFUNSO, Omolabake Sakirat.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "EGBE, Iruehia",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ENIASORO, Olubukola Titilayo.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLAOYE, Yetunde oyewunmi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ONI, Ayodeji abiodun",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "ADESEGUN, Anuoluwapo racheal",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "BABALOLA, Olutayo titus",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OLIYIDE, Oluyomi Akinyode.",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OYEDELE, Bilikis abiola",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AWAYE, Olayinka Olayemi.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "BABAYEMI, Yetunde morenikeji",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ASORO, Samuel olugbenga",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "LAWAL, Folasade arinola",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "BAMIDELE, Halimat Adebimpe.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ILORI, Temitope modupe",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "AJAYI, Taiwo john",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "AJILEYE, Florence Anike.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OMONIYI, Temitope Morufat.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "TAIWO, Afolake oyekemi",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLALEYE, Ruth folake",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OSHO, Babatunde adedeji",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ODURONBI, Oluwawemimo temitope",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNRIN, Aderonke omolara olusade",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "MAKINDE, Oluwaseun adufe",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADESANYA, Adebimpe olawunmi",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "SOYINKA, Eniola oluwatoyin",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLUDIMU, Roseline kofoworola",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLUBUNMI, Temidayo oluwagbemi",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OKUSANYA, Oluwaseun adedeji samson",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "BANMEKE, Adiat Yewande.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "SALAKO, Francisca ibiyemi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "SAMUEL, Oluyemisi abike",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ABASS, Monsurat olayinka",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "AGBAJE, Nojeem ajasa",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "RASAQ, Taofeek Olawale.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLAPADE, Noimot olayinka",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ITANEYE, Temitayo aramide",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "QUADRI, Adedayo adesola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLADEJI, Oluwayomi modupe",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLOFIN, Ibukun oluranti",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINSANYA, Abiodun omobolaji",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINRINDE, Kehinde john",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADIGUN, Rotimi adesina",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OLUGBADE, Kabirat bolape",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADEKOLA-OJERINDE, Adenike folasade",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADENIYI-KOJEKU, Adefunmilayo margaret",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "YAHYA, Rofiat Omowunmi.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OMOTOSHO, Olubukunola olawunmi",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OKESOLA, Fatimah iyabode",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "FALAJA, Olawale adedeji",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ARIYIBI, Saubana Sunmade.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SALAKO, Sakirat olufunke",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "GBADEBO, Adesegun emmanuel",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OKESOLA, Esther funmilola",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "BELLO, Titilayo ismoth",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OTUN, Fausat olaide",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ALOGI, Owolabi folawe",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FANIYI, Ijeoma Olabisi.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "SEKONI-DAIRO, Moriliat agboola",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SANUSI, Temitayo adefoyeke",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AJAYI, Itunu sarah",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNREMI, Olubimpe victoria",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "IBIKUNLE, Rosemary abokhia",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "IBIKUNLE, John abiona",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADEBESIN, Aishat afolashade",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLADEJO, Ramota",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ABASS, Sekinat abimbola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLOYEDE, Taiwo abosede",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADENIYI, Mary mojisola",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OKEMAKINDE, Abiola rukayat",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "AMOS, Taiwo afolashade",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLATUNBOSUN, Tunrayo adeola",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "BAKARE, Titilope theresa",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADEWOLE, Omotunde adewunmi",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADEYEMI, Olujide alade",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "SOLOLA, Olanrewaju olalekan",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OLOPADE, Iyabo afolakemi",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADEDUNTAN, Rafat Abioye.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OMITOGUN, Bolanle Oluwakemi.",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "AKINLOLU, Bukola atinuke",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ABOYADE, Feyisayo veronica",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADENIRAN, Omotayo olubunmi",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "JOHNSON, Oluwakemi oluyinka",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SHOYOYE, Opeoluwa Taiwo.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ODERINDE, Lateefat omolara",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OKE, Atinuke adeola",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "IDOWU, Sakirat Folashade.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNRINU, Kudirat",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "BELLO, Olatoye babajide",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEGUN, Kemi mariam",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "AKINBAMI, Felicia onyinyechi",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ODEWOLE, Adijat atinuke",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "BANKOLE, Yetunde olayinka",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ADESENI, Adenike oluwaseun",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ADEOSUN, Blessing omonigho",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNSILE, Olukolade olatunbosun",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "SOYEBO, Bilikis omobowale",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBOLA, Adejoke eniolorunda",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ANYASI, Dorcas kikelomo",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OMITOLA, Olumide sunday",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "IKUEBOLATI, Bayo david",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "KUYE, Olalekan oluwatosin",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "AJAYI, Olugbenga peter",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ABOLADE, Nofisat Adeyemi.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ODUNEWU, Temitope abosede",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADESINA, Yetunde bunkayo",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "IDOWU, Adebukunola adenrele",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OLUKOGA, Yewale Ayomikun.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AYO-ALAGBE, Modupeola mercy oluwaseyi",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "KUYE, Yetunde mariam",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SORUNKE, Oluwaseun olatobi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ABDULFATAH, Mujirat Bode.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OYELEKAN, Omotunde motunrayo",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "AJIBOSO, Micheal olaniyi",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "BABATUNDE, Bolanle oluwatoyin",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "UWELU, Eruemulor philomena",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "ADEKUNLE, Titilayo elizabeth",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "EGUNJOBI, Akeem olatunji",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OSHO, Taiwo adebimpe",
        "schoolName": "Head Quarters"
    },
    {
        "staffFirstName": "AJAYI, Oluwakemi idowu",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADELEYE, Folashade bolanle",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OLANIYAN, Olusola abosede",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADERIBIGBE, Agnes aderonke",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ERINOSO, Atinuke taiwo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "LAWANI, John kizito",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "RAJI, Olabisi wunmi",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADELEKE, Akeem Abolore.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNFOWORA, Yinka abiodun",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ORIDOTA, M. olubunmi",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "MUSTAPHA, Adesola afusat",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ERINFOLAMI, Morufat folasade",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "EJALONIBU, Adewumi christianah",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AYEGBAJEJE, Ahmad Habeebullah.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "AYANBODE, Anna ajuma",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLOYEDE, Olufunmibi olubusayo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOBANDE, Olajide rasheed",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGEDENGBE, Nimota omotayo. a",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ALADE, Esther Oluwatoyin.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "MUIBI, Mariam Ajoke.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ESAN, Moradeyo funke",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "SOKANLU, Grace oluwaseyi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "COKER, Folasade",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OYEJOLA, Adetola abeni",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINSOLA, Yetunde Damilola.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "KARUNWI, Bernice omodunke taiwo",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "OLAYIWOLA, Adijat ronke",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADEGBOYE, Olugbemi david",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "DAUDA FOLARIN, Bolanle morenike",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "SOBANDE, Adebisi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "RAIMI, Modinat abake",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNGBE, Matthew  abiodun",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "LAWAL, Ajibola saburi",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLUDOTUN, Olabisi iyabo",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ONOKPE, Stella eseoghene",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OLADIPO, Oladunni",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ILUFOYE, Sakariyau amuzat",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OLUWADE, Olubukola damilola Omowunmi.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBARI, Adedoyin olufunke",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FALOLA, Kehinde olawunmi",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADEYANJU, Oluwakemi funmilayo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLANREWAJU, Bolarinwa emmanuel",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADEYEMI, Timothy olalekan",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OKETOKUN, Olanike",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BALOGUN, Omowunmi hajimat",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "FAGBENRO, Idowu olumidola",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "MAJEKODUNMI, Abiodun olufunmilola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEBAYO, Abosede olusola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "YUSUF, Susannah eniola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLAOYE, Adefoluke omoyemi",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ADEKANMBI, Funmilayo rebecca",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "AKINKUNMI, Ayodeji williams",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "TAIWO, Omobolanle ikeolu",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLABODE, Victor joy",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "MAJEKODUNMI, Folashade beatrice",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ABASS, Omolara abolaji",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BELLO, Nofiu adedigba",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ALAGA, Tawakalitu oluwatoyin",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OYENEYE, Olubusayo",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SOBANDE, Oluwabusola omolara",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "OMOSANYIN, Oluwatoyin Olubusola.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "AJALA, Omolara modupe",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "AFUAPE, Aborode funmilola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OKEOWO, Ajibola abidemi",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNSAKIN, Adebanwo",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OTAYEMI, Yewande dolapo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "KEHINDE-OYEYEMI, Adeyinka oredola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADENEKAN, Funmilola olaoluwa",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OSENI, Oluwabunmi adedayo",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "LAWAL, Wasiu alabi",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADETORO, Maruf ademola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AYORINDE, Ngozi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ISOLA, Sidiqat olasunmbo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADESANWO, Bosede Oyeronke.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADEOSUN, Ajibola Oluwaseun.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AIHONSU, Adeola omotola",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEKANMBI, Saburi adebisi",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FAGBIRE, Adenike paulina",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "POPOOLA, Kehinde Olajumoke.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADEMEHIN, Olusola olawunmi",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "DUROWOJU, Kehinde olajoke",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OKETOKUN, Abdul-sabur olushina",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "TELLA, Adebisi alice",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ADEDEJI, Grace olubukola",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "BELLO, Sekinat olasumbo",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "SHOBAYO, Bolaji alamu",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AJAYI, Temilade adeshola",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ODUSOLA, Olusola grace",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "TAIWO, Gbemisola Yemisi.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ADEYEMI, Elizabeth Kemi.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ONIGBINDE, Felicia oluwatoyin",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "BOLAJI, Olubunmi yemisi",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLADEJO, Omoniyi mayowa",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AWODELE, Oluwatoyin esther",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "SOREMEKUN, Aderonke mary",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OYEKUNLE, Clara olufunmilayo",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ADEKANMBI, Oluyemi Samson.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "SHOBIYE, Abolore Oyindamola.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ADEBAYO, Olufunmilola wunmi",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ADEBAYO, Olajumoke elizabeth",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ONOSOSEN, Bolanle olubukola",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "BABATUNDE, Modupe opeoluwa",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "NICHOLAS, Modupe Elizabeth.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ALAO AKINYEMI, Oyindamola Emmanuella.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AKINWANDE, Olabisi remilekun",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLUDIMU, Adekemi temitayo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "GANDONU, Lawrence dagbeyon",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ABAYOMI, Catherine Idowu.",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "MULERO, Abiodun Ayodeji.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ADEYEMI, Aderonke omotunde",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "BIOBAKU, Adeola bernice",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEWUSI, Titus olalekan",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEDEJI, Ireti Dorcas.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OMIDIJI, Bamidele abimbola",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "RASAK-OYADIRAN, Fausat ayo",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ILEPE, Bolanle rose",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "KADRI, Olukemi omolabake",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "KELANI, Abike mariam",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "IBRAHIM, Temitope mujidat",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLOKODE, Moriam oluwafunnbi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADENIRAN, Tajudeen adewale",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OGUNDIMU, Gabriel olubiyi",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "ADENIYI, Omolola yetunde omotunde",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "SOKEYE, Ayoku Adeola.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNJOBI, Rebecca afoluke",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OWOADE, Tolulope yetunde",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "IDOWU, Aderonke olayinka",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OSUNBIYI, Bukola funmilayo",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "ADESINA, Olugbenga johnson",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEKOYA, Olayinka idayat",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "BABAJIDE, Julianah olufunmilola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OBEMBE, Olabisi anike",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "AYINLA, Grace adepeju odunola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OGUNYEMI, Kehinde vctoria",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OBAJIMI, Semilola olawunmi",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OJELADE, Oluwatosin Ifedayo.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AJETUNMOBI, Aminah anike",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKOMOLAFE, Oluwayemisi mary",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SIMEON, Oluwatosin oladapo",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OSEJI, Temitope   tunrayo",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "SULAIMAN, Saidat oluwaseunfunmi",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OWOYELE, Moruf adeshina",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "AJIBADE, Adeleke abiye emmanuel",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "RABIU, Iyabo waliat",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADELESI, Elizabeth bolanle",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OKETOKUN, Comfort omolara",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "SODIYA, Kolawole oladayo",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "OKE, Comfort Blessing.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OLUDARE, Damilola tosin",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "BABAYEMI, Oluwatoyin kabirat",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "SOFELA, Ibrahim tosin",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINYEMI, Ramota",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ABOLADE, Yetunde adebukola",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "TOYOBO, Iretiolu olasimbo",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ABIOLA, Ibukun olutomisin",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "MUSA, Hassan abolore",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOGAOLU, Oluyomi Olufemi.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNPOLA, Oluseyi david",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "WILLIAMS, Mojisola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OTESILE, Alice taiwo",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ATANDA, Abiodun mariam",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "TEJUOSO, Emmanuel olusesan",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OLORUNSOGO-OLUDE, Comfort anujehofa",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "ABASS, Afolabi omotayo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADERIBIGBE, Abosede adebimpe",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OSOKO, Anuoluwapo bimpe",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADEWOLE, Samuel abiodun",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "DEINDE-DIPEOLU, Mary aderonke ajoke",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ALUKO, Dele bilikis",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "AKINWANDE, Soyemi ayinde",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEOGUN, Olubunmi esther",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "POPOOLA, Seye oladimeji",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ONADEKO, Lawrence adekunle",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "YINUSA, Taibat Mojisola.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SONEYE, Olufunmilayo olapeju",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "FAGBEMI, Bolatito Abidemi.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "FOLAWOLE, Oluranti remi",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OKUWA, Adebimpe olabisi",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ADENEKAN, Martha olubunmi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "DADA, Olapeju omolara",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OTULANA, Abiodun elizabeth",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "LASISI, Mojisola Victoria.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ADEBOWALE, Morayo mary",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEBOYE, Kudirat temitope",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "AKINRINLOLA, Olubukola adewunmi",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "ADEWOLE, Racheal mojisola",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ADENIJI, Mathew adewumi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "FALANA, Omowunmi Olayinka.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "BANJO-OLAITAN, Esther Abosede.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "AKIODE, Abosede funmilayo",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ABANISE, Kofoworola Funtan.",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OLIYIDE, Iyabode abiola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLUMOKO, Oluyinka bosede",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SOLAJA, Ibijoke omolade",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "AROGUNDADE, Mulikat moturayo",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ODEBIYI, Iyabode oredola",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OGUNFUWA, Olajumoke abosede",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "MUFUTAU, Olayinka",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OYEWOLE, Isaac olufemi",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "AROWONA, Idayat Temidayo.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "BAMGBOYE, Tawakalit olutosin",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OGUNGBAYIKE, Bukola tawakalit",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "SOJOBI-ALOGI, Yemisi temitope",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "MAKINDE, Adewunmi funmi",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "RAHEEM, Fatimat Temilola.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "BELLO, Morufat fadeke",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ATINUKE, Bolanle jemilat",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SORINMADE, Bukola seun",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "BAKARE, Sekinat Olayinka.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEBAYO, Odunayo mary",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "TEREBO, Ayodele Gbeminiyi.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "BELLO, Risqat afolake",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OSE, Adedoyin Adetutu.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SOMOYE, Yusuf olatunji",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OKUNADE, Basirat ayodeji",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ASHADE, Iyunade leah",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "KOHOUNFO, Oladunke matilda",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLUWALOGBON, Josephine oluwatobi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AYENI, Oluwakemi adufe",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "AKINWILLIAMS, Deborah oseyemi",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "EMUELOSI, Adenike omolara",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLUGBEMI, Omolola olufunmilayo",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OGUNMUYIWA, Damilola seilat",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OYELUDE, Oluwadamilola olajumoke",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "KAFAR, Morenikeji olusola",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OMIKUNLE, Elizabeth alaba folorunso",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "IKHIDE, Chika nnenna",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "KUYORO, Comfort olukemi",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEOSUN, Akinyemi olakunle",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "SOWANDE, Adetutu taiwo",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ADENEKAN, Mofolasade oluwatosin",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ANUNLOPO, Bosede",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "SANUSI, Ajibola razaq",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNLEYE, Sururat motunrayo",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AKOJEDE, Esther Adekiite.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "EFUNYOOLA, Adeola oluwakemi",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "ADEJUWON, Tolulope funmi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBAYO, Khadeejah",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "AKANBI, Modupe oluseyi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AJAYI, Bosede mary",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AFOLABI, Wasiu alao",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEYEMI, Bidemi hannha",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "SALAMI, Kamoru jimoh",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OLAWUYI, Olajumoke omowunmi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ILORI, Adenike eniola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OJOMO, Olajumoke Sayo.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "BADA, Rasheed akanni",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADEBAYO, Tola Christiana.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OYETUNJI, Benjamin seye",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "JOKOSENUMI, Kehinde ayinla",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ATERE, Akeem ayodeji",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "KUSIMO, Adefunmbi florence",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "FALEYE, Olusola olufunmilola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OSUNDE, Olukemi olubukola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "SHOBOLA, Akinsola sunday",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLASODE, Gbolahan moses",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OLADIPUPO, Aishat Yetunde.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "AHMED, Lateefat tinuola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEBIYI, Grace A.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "AYODEJI-OYALOWO, Hafsat Abolore.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "IKOTUN, Omolola Halimot.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AJASA, Fadekemi Fausat.",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "BAMIDELE, Kudirat taiwo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OSINUSI, Gloria bolanle",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLADIPUPO, Deborah Olayinka.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEYEMI, Makanjuola omolola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SALAU, Abolore adijat",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGUNDELE, Jokotade abiodun",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "SOBANDE, Oluwaseun sunday",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ODUNLAMI, Oyenike olawunmi",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "MUNIR, Tawakalit adewunmi",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "RAJI ORELOPE, Aminat aduke",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "BANKOLE, Abiodun oladipo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEOSUN, Adiat temitope",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FALOLU, Funmilayo Mary.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ALLI, Modupe yejide",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADENIYI, John temitope",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADESANYA, Suwebat olanike anike",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADESINA, Oluwabusola anne",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AKINLABI, Adepeju Damilola.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ANISE, Anike tomilola",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OJO, Ayodele asake",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ABIOYE, Oluwagbemiga abiodun",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "AKINHANMI, Olapeju Abiodun.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AKINBO, Fatimo Oluwatoyin.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AGBEDEJOBI, Olabisi oladunni omolara",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADELEYE, Abiodun arike",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "ADEDAYO, Rahmat temilola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "EKUNDAYO, Adebunkunola tawakalit",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OSINOWO, Bolanle temitope",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "MACJOB, Oluwatoyin christinah",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "IDOWU, Morenikeji abosede",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ODEYEMI, Adebisi Oluwabunmi.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "AZEEZ, Banwo Afolake.",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "OLUTUNDE, Fehintola bosede",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "BIOBAKU, Adeola abdul-hafiz",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "OGUNYEMI, Abigael tosin",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "FATUNBI, Olusegun Abayomi.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AZEEZ, Nofisat oriyomi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADEITAN, Roseline adeola",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AMOLE, Theophilus olufolarin",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ADENIRAN, Muinat folasade",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "IDOWU, Kabirat agbeke",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OGUNLADE, Tosin tobiloba",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "EGUNJOBI, Felicia Omolola.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ONAJOBI, Tokunbo esther adeola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AYOOLA, Idayat Olaide.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OGUNDARE, Edun Hassan.",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "OLAIYA, Olutunde sunday",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "KUKOYI, Basirat amoke",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SMITH, Olusola ikepo",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ADENIYI, Opeoluwa Adeoti.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "USMAN, Modinat amoke",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADETUGA, Richard temitope",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OBADINA, Rasheed adekunle",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "SOYOYE, Abosede juliana",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OGBONNA, Chinwe edison",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "JOLAOSO, Sanya adisa",
        "schoolName": "Methodist High School, Ogbe"
    },
    {
        "staffFirstName": "ADEBESIN, Olusey ibraheem",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "MODIU, Musilimot Adesola.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OYENEKAN, Oluwatosin bose",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "AJAYI, Funmilola ruth",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BALOGUN, Omobolanle Adijat.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "FAGBIRE, Stephen olugbenga",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OLALEYE, Olusola esther",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OGBON, Racheal adeola",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "JEJELOLA, Toluwalope james",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OLADIRAN, Muinat adejoke",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "IDOWU, Olubunmi Joke esther.",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "AFOLABI, Asisat oluwaseun",
        "schoolName": "Saint Leo’s College, Onikoko"
    },
    {
        "staffFirstName": "ADEBOWALE, Titilayo aina",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "LASISI, Yakub Kehinde.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ALI, Oluwakemi adufe",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ODERINDE, Oluwakemi ayotunde",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ABIODUN, Amos rotimi",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "AKINSOLA, Olabisi taiwo",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADEJOJU, Oluwaseun iyabo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "SODUNKE, Mildred Ngozi.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADENIYI, Kayode korede",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "SODAMOLA, Surat abiodun",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADENIYI, Elizabeth oluwayemisi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEKANMBI, Bolanle afolasade",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AGBOOLA, Victoria iyabode",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OGUNGBE, Oluwaseun abisoye",
        "schoolName": "PG's Office"
    },
    {
        "staffFirstName": "ADENIJI, Taiwo hafsat",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OLAFIMIHAN, Theresa abiodun",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADEBAYO, Itunnu ayobami",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ABIONA, Ojuolape olatunde",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ILORI, Olusola Rukayat.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "EKEADA, Olawunmi Olabisi.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "POPOOGBE, Motunrayo olayinka",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OGUNYANWO, Ifetayo ijaola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SALAUDEEN, Adewale babatunde",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEBESIN, Kolawole adeolu",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AKINDELE, Oluwaseun Olatunji.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLAWOLU, Agness",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ODURONBI, Oluyemi olaniyi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AJAYI, Oluseun emmanuel",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OLANIYI, Obafemi solomon",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OGUNRINU, Mayowa omolola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OGUNRINADE, Eunice Olufunmilayo.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ADENAIKE, Christianah bukola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ROBERTS, Adebomi oluwabusayo",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ODUBIYI, Oyebusola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ABDUL-AZEEZ, Waliat olanrewju",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADELEGAN, Motunrayo ibilola",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "RABIU, Bolanle busola",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "ABIOLA, Olusola motunrola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OLUDARE, Mercy olulayo",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLISA, Abiola Sakirat.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AKINYEMI, Oluyemisi aderemi",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "KARUNWI, Temitope serifat",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "KUSIMO, Gbemisola monilola",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ABIODUN, Adetutu Adesewa.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OBADIMU, Augustina Oluwakemi.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OGUNLAMI, Mojisola olufunmilayo",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "KUFORIJI, Grace iyabo",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ONAKOYA, Mojisola abidemi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "IFUMA-ALATISE, Yetunde rashida",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OGUNTOLA, Sola ganiyat",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "ERINOSO, Olusola Christianah.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OMOTOLA, Adedoyin rebecca",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ELEMIDE, Abosede olabisi",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OLOWOLAGBA, Adebola nofiu",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ALABA, Odunayo oladunni",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OGUNBOYE, Temitope monica",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ADELAKUN- ABATI, Olufunmilayo aina",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "NEMEDIA, Odegua omoyemi  regina",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "ADENEKAN, Tolulope Sherifat.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SOTOMI, Opeyemi taiwo",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AJISEMOLA, Omotola kate aina",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "RAHEEM, Omolara Modupe.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "KILAJOLU, Nimota omosalewa",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ONIFADE, Omobola Oluwayemisi.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADEDOKUN, Adenike tolulope",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "SOMOYE, Kehinde olufunmilayo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBAYO, Toyin Tunrayo.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OKUNLOLA, Grace olubunmi",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "BELLO, Felicia Olabisi.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "TAIWO, Taiwo Olufunke.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADESINA, Bosede olapeju",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "INNOCENT, Nwadinma peace",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADELEKE, Adedoyin",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ELUYERA, Titilola adeola",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ELEMIDE, Olubukola Atoke.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ALAPOTI, Desola raolat",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "ADEYEMI, Omowunmi aminat",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BURAIMO, Afolasade omolara",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AKEJU, Adenike Olamiji.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OJUOLA, David abayomi",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "KEHINDE, Abidemi dupe",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ONADERU, Folasade Oluwakemi.",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ONI, Adijat R..",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ODEYEMI, Jemilat asake",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ADEYEMI, Oluwaseun lydia",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADERINWALE, Isiwat olawanle",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AROWOLO, Hamidah Kikelomo.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ISAAC, Olubusayo Omolara.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "AJAYI, Racheal temitayo",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AKHALU, Faith Ofe.",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "OJO, Temitope ajoke",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ADENIYI, Olufolake  aderike",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OLATUNDE, Funke omolara",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "ADAM, Bamidele mutiu",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "DIYAN, Gbenga titus",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "BABALOLA, Omowunmi adijat",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SHITTU, Victoria yemi",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "EESUOLA, Gbonjusola oluwamayowa",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLAOGUN, Ayobami olayinka",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ADEKUNLE, Kayode",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ADEBAYO, Adebisi",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "BABALOLA, Taiwo hannah",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ABATI, Oluwatosin",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "AYOADE, Adewale Babatunde.",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "KUFORIJI, Aderonke suliat",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OLUBORI, Afolashade Shakirat.",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLUGBUYI, Saodat iyabo",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ANFELA, Mary toyin",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OYETUNDE, Caroline omolabake",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "OLUJOBI, Rebecca omolara",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "ADEBOYE, Esther omolara",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "FAJINMI, Abigeal adeola",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEKUNLE, Oluwaseyi Adesanjo.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "TINUOSO, Olasumbo oluwakemi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "KEHINDE, Comfort Busola.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ALLEN, Margaret ololade",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OLUSANYA-ISEOLUWA, Titlayo anike",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "EGBEWUNMI, James Oluwole.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OWOLABI, Felix muyiwa",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OYEYEMI, Oluwayemisi florence",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OLAGUNJU, Abosede omolabake",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "AKINBOHUN, Olubunmi Olajumoke.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OGUNDIMU, David olumuyiwa",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLADIMEJI, Arinola Halilat.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADENIYI, Kayode david",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLADIPO, Adebisi folake",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "TEJUOSO, Doyinsola Adijat.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADEBESIN, Morufu",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "TAIWO, Oluwatosin alaba",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "FAFIOLU, Olusesi babafemi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "DAIRO, Modinat ibironke",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "MOYEGUN, Oluyemisi marian",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "IWAYEMI, Folasade Chistianah.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AKANBI, Olubusayo omotola",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "SEMOWO, Moshood oludayo olwatosin",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "KUKOYI, Serah oluwatoyin",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OLOKODANA, Iyabode comfort",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SULAIMON, Lateefat oluwabunmi",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ORIYOMI, Dorcas Oluwakemi.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OKUBADEJO, Olugbenga adeniyi",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "IBRAHIM, Oluwasola Serifat.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ALATISE, Oyinkansola christianah",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "SOGUNLE, Sarafadeen Adewale.",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "EWULO, Ayorinde oyeyinka",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLALEYE, Reuben adesoji",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ABDULKAREEM, Daud Muhammed.",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "AINA, Memunat bolanle",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OMOSONWON, O.oluwafunmilayo0",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADEYINKA, Kazeem Olasunkanmi.",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "LAWAL, Omolola fatimot",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADESEGUN, Oluwayemisi caroline",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "AKINWUNMI, Folake oyinkan",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "AKINROLE, Margaret temitayo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINWALE, Oluwaseun adetokunbo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "DIPEOLU, Sikiru adeola",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OLUSANYA, Iseoluwa adebayo",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ODULEYE, Florence oluwafunmilayo",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "SALAMI, Hakeem olatunji",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "BAKARE, Oluwatoyin",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OKUKENU, Adisa bolanle",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ENABOR, Ehiodion lawrence",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SIKIRU, Oriyomi omotayo",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "WAHAB, Oyebimpe ola",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OSHIN, Opemipo Damilola.",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OLUWOLE, Victoria adenike",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "GIWA, Aminat bukola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINWUNMI, Samuel  oluwagbenga",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BAFUNSO, Olawale basiru",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "IBIKUNLE, Motunrayo Ifeoluwa.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AWONUGA, Olukemi omiladun",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "DAVID, Ibukunoluwa Moronke.",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OLANREWAJU, Ponle Funmilola.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ISHOLA, Kabirat adenike",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "DANIEL, Abosede adenike abimbola",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEBAJO, Titilayo seun",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "QUADRI, Temitope Sekinat.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "OJO, Florence omowunmi",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADEKOYA, Dorcas Oluwatoyin.",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "BANJOKO-AKINTOMIDE, Morayo",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "OLONADE, Ganiyat motunrayo",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADESINA, Rasidat kehinde",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "AKINLOTAN, Bolanle funmilayo",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "SALAMI, Bolatito afusat",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEMOLA, Bukola omowunmi",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADEWOYE, Grace olubunmi",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ADEOYE, Busayo Adija-kuburat.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SOLABI, Bolanle toyin",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "SOREMEKUN, Olubukola elizabeth",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "EWULO, Emmanuel babatunde",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ODUBENA, Foluke mary",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ODEWALE, Olusola abiodun",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ADEOSUN, Tolulope omolara",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "AKHALUMHE, Deborah oluwabunmi",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ADENEYE, Olusalewa oludunni",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLUKOYA, Aderonke oluyemi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OGUDU, Olubusayo oyinlola",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "EWADE, Yinka alaba",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OLATOKE, Adebo medinat",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FATOYINBO, Simeon segun",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "OKUNLOLA, Olubukola atinuke",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SODIYA, Morohunkeji yetunde",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ONI, Oloruntoyin adewunmi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "OWOLABI, Iyabo omolara",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADENIJI, Adenike ajoke",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "TAIWO, Bose patience",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ISMAIL, Surat aina folasade",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "AJULOLA-AKINDELE, Oluwabusayo oluwafunmike",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OYETUNJI, Ayobami tosin",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "KEHINDE, Monsur owolabi",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEWALE, Adesola yetunde",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ALADESUYI, Adeola oriyomi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ANIMASHAUN, Ayodele ireti",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "JOLAOSO, Ibironke olufunmilayo",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "DOSUNMU, Adebusola oluwayemisi",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "KEHINDE, Gbolahan david",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "HASSAN, Mojisola Oluwatoyin.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "JONATHAN, Esther foluso",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "OYENOLA, Olumide Paul.",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "QUADRI, Adebukola oluwatoyin",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "AKINDELE, Samson",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "AWOYEMI, Ganiyat ajoke",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADENIJI, Comfort yetunde",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ABDULLAHI, Adenike",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "ADEKUNLE, Tolulope Patricia.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OBADINA, Serah oluwatobi",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "AJAYI, Niyi michael",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "ALAO, Adebukunola temitope",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ATITEBI, Babatunde phillips",
        "schoolName": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "KEHINDE-MARTINS, Ebenezer oluwaseun",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "ANIMASAUN, Semiu Olasunkanmi.",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ODEDELE, Bosede olanike",
        "schoolName": "Saint John'S Anglican High School, Kuto"
    },
    {
        "staffFirstName": "OYENEKAN, John abiola",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OGUNBANJO, Grace omowunmi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ADEBARI, Musibau abiodun",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "AYEDE, Kayode adedbayo",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "ONANUGA, Samsam adeolu",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FASASI, Abosede b.",
        "schoolName": "Agunbiade Victory High School, Magbon"
    },
    {
        "staffFirstName": "FADIPE, Victoria tunmise",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SODIPO, Mopelola iyabode",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SORINDE, Olubunmi Adebukola.",
        "schoolName": "Igbore High School, Igbore"
    },
    {
        "staffFirstName": "OSENI, Elizabeth olukemi",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "FALANA, Nusirat kikelomo",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "BAKARE, Taiwo",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "OGUNJIMI, Sarah saidat",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "NZEMECHI, Ajoke nkem",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FATOKUN, Johnson ajewole",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OLONADE, Adebayo oladimeji",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OMITOGUN, Olaniyi ghaffar",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "DOLAPO, Kikelomo Omowunmi.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "ODUSANWO, Deborah olaoluwa",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "TORIOLA, Modupe Rebecca.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLAJUMOKE, Sunsula ramota",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "AJAYI, Janet opeyemi",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "ODUTAYO, Titilope adedayo",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "LESHI, Deborah funmilayo",
        "schoolName": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
        "staffFirstName": "FADIPE, Isaac oluwasegun",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "MAKINDE, Funmibi micheal",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "ADEROJU, Grace oluwatoyin",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "FALETI, Olusina hezekiah",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "OSUNLAJA, Hammed",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "OLUMUYIWA, Janet olubusayo",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "BANKOLE, Mudupola abosede",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "ADENAYA, Modupeola abike",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "SOYINKA, Mukaila olatunji",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ADEEKO, Abiodun adewale",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "TIJANI, Saheed adeniyi",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINTOLA, Fatai adigun",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AFELUYI, Taiwo abosede",
        "schoolName": "Lantoro High School, Lantoro"
    },
    {
        "staffFirstName": "OYEBADE, Adedoyin victoria",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "ODUMADE, Oladimeji adeniyi",
        "schoolName": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
        "staffFirstName": "OGUNNIRAN, Mary oluwafunmilayo",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "ADEYEMI, Oluwatobi elizabeth",
        "schoolName": "Abeokuta Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "AKINPELU, Olaitan iyabode",
        "schoolName": "Macjob Grammar School, Onikolobo"
    },
    {
        "staffFirstName": "ADENEKAN, Ismail Abidemi.",
        "schoolName": "Nawair-Un-Deen High School, Isabo"
    },
    {
        "staffFirstName": "AKINTAYO, Mercy Yetunde.",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "DIPEOLU, Bolajoko adenike",
        "schoolName": "Baptist Girls' College School, Idi Aba"
    },
    {
        "staffFirstName": "SOFOLUWE, Oluwatoyin oluwaseun",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "BOLA TEJUOSO, Adedapo adebunmi",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEYEMI, Oluwafunmike Florence.",
        "schoolName": "Anglican High School, Quarry Road, Ibara"
    },
    {
        "staffFirstName": "AZEEZ, Ayodeji Shakirudeen.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "AKINTOLA, Moyosoreoluwa Micheal.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OLAKUNLE, Adejoke Margaret.",
        "schoolName": "Lisabi Grammar School, Idi Aba"
    },
    {
        "staffFirstName": "FADIPE, Ismail Olagoke.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "SOLANKE, Moshood Olasunkanmi.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "OGUNDIJO, Muheez Oladele.",
        "schoolName": "Egba Comprehensive High School, Asero"
    },
    {
        "staffFirstName": "FATOYE, Oluwakemi hannah",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADELEYE, Folasade Folake.",
        "schoolName": "Asero High School, Asero"
    },
    {
        "staffFirstName": "OLAYINKA, Oluwayomi Johnson.",
        "schoolName": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
        "staffFirstName": "EHUWA, Abiola Esther.",
        "schoolName": "Saje High School, Saje"
    },
    {
        "staffFirstName": "FANIJO, Olayinka riskat",
        "schoolName": "African Church Grammar School (Senior)"
    },
    {
        "staffFirstName": "SANNI, Bilikisu temitayo",
        "schoolName": "Baptist Boys' High, Saje"
    },
    {
        "staffFirstName": "ADEDIRAN, Damilola Anuoluwa.",
        "schoolName": "Asero High School, Asero"
    }
]


  function matchStaffNames(staffNames, jsonArray) {
    const results = [];
    
    // Helper function to normalize names for comparison
    function normalizeName(name) {
      return name
        .toLowerCase()
        .replace(/mrs?\.|miss|dr\.|prof\./gi, '') // Remove titles
        .replace(/[.,]/g, '') // Remove punctuation
        .trim()
        .split(/\s+/); // Split into words
    }
    
    // Helper function to check if names match
    function namesMatch(staffName, jsonName) {
      const staffWords = normalizeName(staffName);
      const jsonWords = normalizeName(jsonName);
      
      // Check if at least 2 words match (typically surname and one other name)
      let matchCount = 0;
      for (const staffWord of staffWords) {
        if (staffWord.length > 2) { // Ignore very short words
          for (const jsonWord of jsonWords) {
            if (jsonWord.includes(staffWord) || staffWord.includes(jsonWord)) {
              matchCount++;
              break;
            }
          }
        }
      }
      
      // Return true if at least 2 significant words match
      return matchCount >= 2;
    }
    
    // Process each JSON entry
    for (const entry of jsonArray) {
      const jsonName = entry.staffFirstName;
      
      // Try to find a matching staff name
      for (const staffName of staffNames) {
        if (namesMatch(staffName, jsonName)) {
          results.push({
            staffName: jsonName, // Using JSON name instead of staffNames
            schoolOfPresentPosting: entry.schoolName || null
          });
          break; // Move to next JSON entry after finding a match
        }
      }
    }
    
    return results;
  }
  
  // Example usage:

  
 export  const matchedStaff = matchStaffNames(staffNames, jsonArray);
  console.log(jsonToCSV(matchedStaff));

  function jsonToCSV(data) {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Input must be a non-empty array');
    }
  
    const headers = ['staffName', 'schoolOfPresentPosting'];
  
    const escapeCSV = (value) => {
      if (value === null || value === undefined) return '';
      const stringValue = String(value);
      // Escape double quotes by doubling them
      const escaped = stringValue.replace(/"/g, '""');
      // Wrap in quotes if it contains comma, quote, or newline
      return /[",\n]/.test(escaped) ? `"${escaped}"` : escaped;
    };
  
    const rows = data.map(item =>
      headers.map(header => escapeCSV(item[header])).join(',')
    );
  
    return [headers.join(','), ...rows].join('\n');
  }
  