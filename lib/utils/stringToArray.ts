function namesToCommaArray(input) {
    return console.log (input
      .split(/\r?\n/)                 // split by line
      .map(line => line.trim())        // remove leading/trailing spaces
      .filter(line => line.length > 0) // remove empty lines
      .map(line => `${line},`)    )    // append comma
  }
  const AbeokutaSraffNames = `Mr. GANIU Kayode Soliu
Mr. ODUSOGA Sunday Adekunle
Mrs. ENIASORO Olubukola Titilayo
Mrs. WAHAB Oyebimpe Ola
Mrs. OWOLABI Omobolanle Rashidat
Mr. AJIBODE Taiwo Oligbeminiyi
Mrs. ADEBAJO Titilayo Seun
Mrs. OLUWOLE Vivtoria Adenike
Mrs. ALLI Modupeola Yejide
Mr. JOSEPH-HUNVENU Abiodun Olufemi
Mrs. SALAKO Modupeola Afolake
Mr. AINA Oluwole Remmy
Mr. ABDULKAREEM Daud Muhammad
Mrs. ADENIRAN Muinat Folashade
Mrs. OLAYEMI Bolanle E.
Mr. OGUNYANWO Ifetayo
Mrs. YINUSA Christiana Olusola
Mr. SANU Adewale Adegbenga
Mr.  AINA Bamidele Olatunde
Mrs.  KADIRI Adetunmeru O. A.
Mrs. TEMIDAYO Omoboye F.
Mrs. ABOYADE Fisayo Veronica
Mrs. EJALONIBU Adewunmi C.
Mrs. AFOLABI Olabisi Elizabeth
Mr. SODIYA Adekunle Samzdeen
Mr. OYETUNJI Benjamin Seye
Mr.  EESUOLA Abiodun Adebanjo
Mr.  OSISANWO Adefemi Akindele
Mrs.  ABDUFATAH Mujirat Bode
Mrs. ADEYEMI Oluwatobi E.
Mrs. ADEYANJU Oluwakemi F.
Mr. ADEOSUN Ajibola Oluwaseun
Mr. ALLEN Olawale Kehinde
Mr. BANKOLE Abiodun Oladipo
Mr. ARIYIBI Saubana Sunmade
Mr. ADEKANBI Saburi Adebisi
Mr. BELLO Olatoye Babajide
Mrs. OLADIPO Aminat Ayobami
Mr.  ADEKANBI SABURI ADEBISI
Mrs. AKINWANDE Olabisi
Mrs. QUADRI Adedayo Adesola
Mr. ADEKOLA  Olatunji Yusuff
Mrs. OLADEJI Oluwayomi Modupe
Mr. LAWAL Ajibola Saburi
Mr. JUNAID Biodun Musbau
Mrs. ADEWALE Oloyemi Titilope
Miss SALAKO Adebimpe Adedolapo
Mrs. EMUELOSI Adenike Omolara
Mrs. TAIWO Gbemisola Yemisi
Mrs. ADEDEJI Grace Olubukola
Mrs. ABOLADE Nofisat Adeyemi
Mrs. SHOWUNMI Bolanle Oluwafunmilayo
Mrs.  ODEYEMI Muinat Adebukola
Mrs. EKEADA Olawunmi Olabisi
Mrs. OGUNLADE Tosin Tobiloba
Mr. AKINDELE Oluwaseun Olatunji
Miss SOMUYIWA Tolulope  Femi
Mrs. OLUTEMIRO Omolara Temitope
Mrs. OTAYEMI Yewande Dolapo
Mr.  ADISA Olusegun Ajani
Mr.  DOSUNMU Emmanuel Oloruntola
Mrs. HAMEED Latifat Aderonke
Mrs. ADEBARI Adedoyin Olufunke
Mr. BADA Rasheed Akanni
Mrs. IBIKUNLE Rosemary Abokhia
Mrs.  KEHINDE Oyeyemi Adeyinka
Mr.  LAWAL Sulaiman Alabi
Mrs. TEREBO Ayodele Gbeminiyi
Mrs.  SOMUYIWA Abiola Abosede
Mrs. OLOKODANA Iyabo Comfort
Mrs. OGUNKUNLE Olupero Moradeun
Mrs. OBADINA Adenike Olayinka
Mrs.  DOSUMU Abigeal Tinuola
Mrs. ADEWUSI Olajumoke Abidemi
Mr.  KUTI Kayode Koya
Mrs.  AKINBOYE Banke Racheal
Mrs. OKUNEYE Fadekemi  Omobolaji
Mrs. OLADIPUPO Celestina Oluwabukunmi
Miss OLATUNDE Risikat Yetunde
Mr. ADENIJI Mathew Adewumi
Mrs.  AKINDE Idowu Sarah
Mrs.  ESAN Moradeyo Funke
Mrs.  KEHINDE Adesola Noimot
Mr. OMITOLA Olumide Sunday
Mrs.  OLUDOTUN Olabisi  Iyabo
Mrs.  SORUNKE Oluwaseun Olatobi
Mr.  KUYE Olalekan Oluwatosin
Mrs.  IDOWU Sakirat Folashade
Mrs.  AIHONSU Adeola Omotola
Mr.  ADEGBOYE Olugbemi David
Mrs. BAKARE Sekinat Olayinka
Mrs.  AKINLABI Adepeju Damilola
Mr.  ADELEKE Akeem Abolore
Mrs.  SANNI Bilikisu Temitayo
Mrs.  SALAMI Mariam Tawa
Mrs.  ADERINWALE Isiwat Olawanle
Mr. BAKARE Yusuff Oladipupo
Mrs.  ADEOSUN Tolulope Omolara
Mr. OLANREWAJU Bolarinwa 
Miss ADEBOLA Adejoke
Mrs. AKINTOLA Iyabo
Mrs . SOYEBO Bilikis Omobolanle
Mrs.  MUSTAPHA Adesola Afusat
Mrs. AFOLABI Oluwatoni Awele
Mrs. DAUDA Matilda Omowunmi
Mrs. ADEKOYA Margret Funmilola
Mr.  ADIGUN Rotimi Adesina
Miss AKHALU Faith Ofe
Mr . AKINNIYI Micheal Adetayo
Mrs. KOLA-SOWEMIMO Ajoke Omolola
Mrs. OLADEHINDE Olabisi Grace
Mrs. OLUGBEMI Omolola Olufunmilayo
Mr. OGUNPOLA Oluseyi David
Mrs. SOWANDE Taiwo Adetutu
Mrs. ABASS Monsurat Olayinka
Mrs. OGUNLEYE Folashade Temitayo
Mrs.  OLAOYE Adefoluke 
Mrs.  FASAKIN Olufunmilola Oluwapemisire
Mrs. OLABISI Esther Titilayo
Miss BADRU  Temitope Ariyike
Mr. ADEOSUN Akinyemi Olakunle
Mrs.  AKIODE Abosede Funmilayo
Mrs. DANIEL Blessing Uzoamaka
Mr. BABATUNDE Sunday Folorunso
Miss OLAYEMI Olabisi Mabel
Mr.  OYENIYA Sunday Adebayo
Mrs. OKE Hafsat Mosebolatan
Mrs. YINUSA Taibat Mojisola
Mrs.  ADENAIKE Christiana Bukola
Mrs.  YAHYA Rofiat Omowunmi
Mrs. OREBIYI Monilola Grace
Mrs. ATANDA Abiodun Mariam 
Mr. DAUDA Ahmed Oseni
Mrs. ADEBAYO Olajumoke Elizabeth
Mrs. BABALOLA Dunni Adenike
Mr. DARAMOLA Olusegun
Mr. OKE Michael Oluwadamilare
Mrs. AWONUGA Olukemi Omiladun
Mrs. AKIN-AJAYI Oluwakemi Olayinka
 Mr. AKINTOLA Moyosoreoluwa Micheal
Mrs. POPOOLA Catherine Tina
Mr. SALAMI Hakeem Olatunji
Mr. ADEGOKE Emmanuel Adebisi
Mr. AJIBOSO Micheal Olaniyi
Mrs.  OLOKEDE Olubunmi Ayobami
Mr. IKUEBOLATI Bayo David
MRS OKUWA Adebimpe Olabisi
Mrs.  DEINDE DIPEOLU Mary Aderonke
Mr. ADEYEMI Olujide Alade
Mrs. ADENIYI Mary Mojisola
Mrs.  ANYASI Dorcas Kikelomo
Mr. AJAYI Oluseun Emmanuel
Mrs. OYETORO Omobolanle Abidemi
Mrs. OTESILE Taiwo Alice
Mr. ODERINDE Oluwafemi Adewale
Mr.  SANYAOLU Olanrewaju Ade
Mr.  ARIYO Temitayo Emmanuel
Mr.  INYANG Ukeme
Mr.  YINUSA Akeem Adeniyi
Mrs.  OLUEDUN Ronke Rukayat
Mrs. JACOBS Ajibola Iyabo
Mr.  AJAYI Olabanji Moshood
Mr. OLUBUNMI Temidayo Oluwagbemi
Mrs.  MUSTAPHA Oluwakemi Caroline
Mrs SALISU Abiola Tawakalitu
Mr. OKUSANYA Oluwaseun Adedeji Samson
Mr. FAGBIRE Stephen Olugbenga
Mr. SALAMI Kamoru Jimoh
Mr. ABOLADE Babatunde Mukhtar
Mr. BAFUNSO Olawale Basiru
Mrs. ONIFADE Omobola  Oluwayemisi
Mrs.  AJAYI Janet Opeyemi
Mr. AYANDELE Gbemisola
Mr.  OLADIPUPO Sulaimon  Akanbi
Mrs. ABIOLA Olusola Motunrola
Mr. ADETUGA Richard Temitope
Miss  ADEKANBI Bolanle Afolasade
Mrs. ALADESUYI Adeola Oriyomi
Mr.  KEHINDE Gbolahan David
Mr. AYODELE Joel
Mr. ONANUGA Samsam Adeolu
Mrs.  FALANA Nusirat Kikelomo
Mr. BABATUNDE Abiodun Olawale
Mrs. OJELADE Oluwatoyin Ifedayo
Mrs.  BANJO Hannah Abosede
Mrs.  AINA Taiwo Abiola 
Mr.  MUSA Hassan Abolore
Mrs.  AKOMOLAFE Oluwayemisi
Mr. TANIMONURE Samuel  O.
Mrs.  SANUSI Kuburat Afolashsde
Mrs.  TAIWO Abigail A.
Mrs.  OLUWADE Olubukola Damilola
Mr. ENABOR Ehiodion Lawrence
Mr.  OLUSANYA Taiwo Adekunle
Mr.  FATOKUN Johnson Ajewole
MR. EGBEWUNMI James Oluwole
Mr. AKINTOLA Fatai Adigun
Mrs.  ADENIJI Abolanle Saulat
Mr.  OSIKANMI Olayinka Olukayode
Mrs.  OMOYAYI Abosede Aduke
Mrs. OSIPITAN Omolola Abosede
Mr.  OLADEINDE Emmanuel Abiodun
Mrs. OGUDU Oluwabusayo 
Mr. SOBOWALE Ayokunle Omololu
Mrs. OTULANA Bolape Ajoke
Mr. RAHEEM Alamu James
Mr. SHOBOLA Akinsola Sunday
Mrs. OLUFEMI Titilope Margaret
Mrs. ABAYOMI Catherine Idowu
Mr.  SOLOMON Sunday Abiodun 
Mr.  ONI Ayodeji Abiodun
Mrs. OLOYEDE Afusat Omowunmi
Mr. AYORINDE Oluwole 
Mrs. ODUNTAN Eunice Olubusola
Mrs. LATINWO Adijat Abisola
Mr. AKINWUNMI Ayodeji Williams
Mrs. ODEDELE Omolola Nofisat
Mrs. AYODEJI Oyalowo Hafsat
Mrs.  MAKINDE Adewunmi Oluwafunmilayo
Mr. OLASODE Gbolahan Moses
Mrs. OLUSANYA Iseoluwa Titilayo
Mrs. ADEKOYA Shakirat Olubunmi
Mrs. OLADIPO Aishat Yetunde
Mrs.  AINA Memunat Bolanle
Mrs. HASSAN Mojisola Oluwatoyin
Mr.  ARIYIBI Sodrudeen
Mr. OKELANA Ayodeji Olanrewaju
Mr. OYEWOLE Isaac Oluremi
Mrs. OTUN Fausat Olaide
Mrs. ABOLADE Yetunde Adebukola
MR OWOYELE MORUF ADESINA
Mrs. OGUNFUNMILAYO Taofika A.
Mrs. TOYOBO Iretiolu O.
Mrs. OGUNJOBI Alice Oluwaseun
Mrs.  SHONEYE Racheal  Bolanle
Mr. SOGBANMU O. Saheed
Mr. OGUNSILE Olukolade  O.
Mr. ANIMASAUN Semiu
Mr. ADEBANJO Tolulope  O.
Mr. GBADAMOSI Maruf  Seun
Mr.  FALAJA Olawale
Mrs. SOFOLUWE Oluwatoyin
Mr. BALOGUN Kareem O.
Mrs. ADEBAYO Khadeejah Abolanle
Mrs. TAIWO Oluyemisi Esther
Mr. OLAYINKA Oluwayomi Johnson
Mrs.ODUGA Oluwafunke Omobolanle
Mr. OGUNTUYO Albert O.
Mrs.  OYEDOKUN Dorcas Tofunmi
Mr. ADEBARI Musibau Abiodun
Mr. OYEWUNMI Sarafa Adeniyi
Mr. ODEWOLE Gbenga Ezekiel
Mr. ABDULLAHI Bamidele Adam
Mrs. IBRAHIM Nofisat Moronkeji
Mrs. ADEKOYA Victorie Olaide
Mr. DUROSOMO Moruf Alao
Mrs. OLADAPO Sarah Olubunmi
Mr. OGUNNIYI Sunday Oluwole 
Mr. TEJUOSO Ayoola Michael
Mr. OLALEKAN Sunday Olasunkanmi
Mr. AYEDE Kayode Adebayo
Mrs. AKINKUNMI Taiwo Christiana
Mr. AKINWANDE Taiwo Tunde
Mr. ADEKANBI Fatai Adekunle
Mr.  LAWAL Olubanjo Adebowale
Mrs.  OGBON Racheal Adeola
Mrs.  OYEDELE Bilikis Abiola
Mrs.  SOYEMI Olayemi Adenike
Mrs. OSE Adedoyin Adetutu
Mrs. PRATT Florence Onanike
 Mr. OMIDIJI Bamidele Abimbola
Mr. OLATUNBOSUN Olubunmi Olusegun
Mrs. OLORUNSOGO-OLUDE Comfort Anujehofah
 Mrs, BABAYOMI Zainab Adetutu
 Mrs. AKINGBENLE Rebecca Olufunke
Mrs. BELLO Abimbola O.
Mrs. AINA Morenikeji S.
Mrs. OGUNNAIKE Tosin
Mrs. ADEGUN Kemi Mariam  
Mrs. SULAIMAN Saidat Oluwaseunfunmi
Mr. SALISU Oyeniyi Nureni 
Mr. OJO Lateef Oyeniyi
Mrs. LAWAL Funmilayo Ajoke
Mrs. ADENEKAN Funmilola Olaoluwa 
Mrs. AKINDIPE Elizabeth Olayinka
Mrs. OWOLABI, Omolade Elizabeth
Miss OLABODE Aminat Olatayo
Mrs. OLAWOLU Agnes
Mrs. ODUKOYA Oluwakemi B.
Mr. AYOPO Olumide Olanrewaju
Mrs. ARIBANUSI Adekemi Olubunmi
Mr.  SOYINKA Eniola O.
Mrs. ADENIYI Kojeku Adefunlayo
Mr.  ALEBIOSU Rapheal Kehinde
Mrs. AHMOD Olabisi Mariam
Mrs. OLAONIPEKUN Modupeola
Mrs. ADEWOLE Omotunde
Mrs.  ONATUNDE Ajibade Serifat
Mr.  BAKARE Abdulazeez
Mrs. RUFAI Abimbola Mariam
Mrs.  OSOKO Anuoluwapo
Mrs.  IBIRINDE Abidemi Olubunmi
Mr. LAWANI John Kizito
Mr. GBADEBO Babatunde Dare
Mrs. KAFARU Morenikeji Olusola
Mrs.  BAKARE Titilope Theresa
Mrs. TAIWO Afolake Oyekemi
Mr. ADEYANJU Adeniyi Emmanuel
Mrs. FALOLA Kehinde Olawunmi
Mrs. OMOTOSHO Olubukola
Mrs. ELEYELE Bernice Asani
Mrs. ADEYEMI Owowunmi Amlna
Mr. AKINWUNMI Samuel 
Mrs. EYINOWUAWI Azeezat
Mrs. OGUNSOLA Bukola Adeola
Mr. ABDUL Babatunde Sikiru
Mr. EWULO Ayorinde Oyeyinka
Mrs. EGUNJOBI Felicia
Mrs. ODUTAYO Aminat Omotunde
MRS OGEDENGBE Nimota O.
Mrs. ONI Adijat Racheal
Mrs. GEORGE Abosede O.
Mr. SOWUNMI Ebenezer Oluwole
Mrs. OYEJOLA Adetola A.
Mrs. AMOS Taiwo Afolasade
Mrs. MOJOYINOLA Abiodun K.
Mrs. AYOADE Victoria Olawunmi
Mrs. RAIMI Modinat Abake 
Mrs. ADESANYA Christianah Toyin
Mrs. AKINSOLA Omobolanle Rophiat
Mrs.  AWONIYI Hannah Oluwatosin
Mrs. OGUNDELE Oluyemi Olukemi
Mrs. BANKOLE Modupeola Abosede
Mrs. ODEYEMI Jemilat Asake
Mrs. OLATUNBOSUN Motunrayo  A.
Mrs. ADEBAYO Itunu Ayobami
Mrs. JONATHAN Esther Foluso
Mr. IDOWU Olugbenga Adesina 
MRS EESUOLA Gbonjusola
Mr. AWOLESI Moses Olaolu
Mrs. AKHALUME Deborah Oluwabunmi
Mrs. ADEYEMI Olawafunmike Florence
Mrs. JESUDAINI Olatunbosun Mosebolatan
Mrs. AKINYEMI Oluyemisi Aderemi
Mrs. OLAJIDE Afolake Temitope
Mrs. ADELEKE Adedoyin Aderonke
Mrs. HASSAN Lateefat Temitope
Mrs. POPOOLA Julianah Olayinka
Mr. EGUNJOBI Akeem Olatunji 
Mrs. ILORI Adenike Eniola
Mr. KOLAWOLE Samuel Abayomi
Mrs. AJAYI Oluwakemi Morenikeji
Mrs. ABIOYE Saidat Adetutu
Mrs. ESEBAMEN Stophia  N.
Mrs. AJULOLA Akindele Oluwabusayo
Mrs. OGUNSOLA Bolanle Deborah 
Mrs. OGUNTUYO Temidayo
Miss AKINDELE  Fatimah Oluwakemi
Mrs. ADELEYE Abiodun Arike
Mrs. AKINLADE Olusola Kuburat
Mrs. ERINOSO Atinuke Taiwo
Mrs. ADEKUNLE Titilayo Elizabeth
Mrs.OTULANA Abiodun Elizabeth
 Mrs. OLUMUYIWA Janet  Olubusayo
Mrs. IDOWU Kuburat Agbeke
Mrs. ODUMBO-ALASE Odunola Adeyinka
Mrs. AYORINDE  Ngozi Chinyere
Mrs. ADEBAYO Funmilola  Sayo
Mrs. SAMUEL Oluwayemisi Abike
Mr. SOYEYE Taofeek Alabi
MRS ADENIYI Maryam Iyabode
Mrs. FATOYE Oluwakemi Hannah
Mrs. AROMOSE Oluwafunlola
Mrs. ADEBOYE Kudirat Temitope
Mrs. FADIPE Adiat Olabisi
Mr. ASADE Oluwasina Akanni
Mr. ADEGBOYEGA Semiu Abiodun
Mr. RABIU Muritala Taiwo
Mrs. OGUNLEYE Sukurat Motunrayo
Mr. POPOOLA Seye Oladimeji
Mrs.  OLUWALOGBON Josephine
Mrs.  OLAKUNLE Serifat Oluwatoyin
Mrs. AFENISUNMEN Aderonke
Mrs.  ILEPE Bolanle Rose
Mrs. LEMO Sadat Bolanle
Mrs. SOKUNBI Folashade Amudat
Mrs. AKINLAMI Ibijoke Olabisi
Mrs. LESHI Deborah Funmilayo
Miss  ABODUNRIN Tolulope Olusola
Mrs. OPEBIYI Wasilat Adekunle
Mrs. AYANNUGA Oluyemisi O.
Mrs.  OGUNDELE Oluwakemi Ajoke
Mr. AKINSOLA Sunday Oluseye
Mrs. BAMIDELE Halimot Adebimpe
Mrs. AWOSILE Yetunde Gbemisola
Mrs.  KEHINDE Ibukun Omolola
Mr. MULERO Abiodun Ayodeji
Mrs. ODUYOMI Modoluwamu Idowu
Mrs. OGUNDAIRO Nofisat Modupe
Mrs. SOMUYIWA Rita
Mrs. ABIOLA Ibukun Olutosin
Mr.  AJIKANLE Adeshina Shakiru
Mrs. RAHEEM Fatimot Temilola
Mrs. ADETORO Fatimat Odunola
Mrs. TORIOLA Modupe Rebecca
Mrs. OJO Omonike Zeynab
Mrs. ADIGUN Vistoria Iyabo
Mrs. BELLO Risquat Afolake
Mrs. IWAYEMI Folasade
Mr. RAHEEM Rasheed Olawale
Mr. OYETUNJI Ayobami Tosin
Mrs. BALOGUN Monsurat Adefunke
Mrs. ABIODUN Amidat Olabimpe
Mr. ODURONBI Oluyemi Olaniyi
Mrs. SORINOLA Adebusola
Mrs.  BANJO Adetoro
Mrs. OLALEYE Olusola Esther
Mrs. IBRAHIM Oluwasola Sherifat
 Mrs. NICHOLAS Modupe Elizabeth
Mr. OSENI Monsuru Opeyemi
Mr. AZEEZ Ayodeji Shakirudeen
Mr. KOLEOSO Emmanuel Oluwatobi
Mrs. FADIPE Victoria Tunmise
Mrs. ADEYEMI Makanjuola Omolola
Mrs. OKUNLOLA Olubukola Atinuke
Mrs. SORINDE Olubunmi Adebukola
Mrs. BAMGBOYE Omotola Abiola
Mrs.  OMITOGUN Bolanle Oluwakemi
Mrs.  OLATUNBOSUN Tunrayo Adeola
Mrs. ADESENI Adenike Oluwaseun 
Mrs.  AKINBAMI Felicia Onyinyechi
Mr. ADEKUNLE Segun Olatunde
Mr.  AKINDELE Samson Abiodun
Mrs. ARIBISALA Olajumoke Omotola
Mrs.  ADESINA Yetunde Bunkayo 
Mrs.  ODEWOLE Atinuke Adijat
Mrs.  OLADEJO Ramora
Mr.  AJAYI Taiwo John
Mrs. AGBOOLA Victoria  Iyabode
Mrs.  ADENIYI Olufolake Aderinke
Mr. OMOLE Theophilus Olufolarin
Mr.  SORUNKE Ismail Ayinde
Mrs. KEHINDE Comfort Busola
Mr. SOMOYE Yusuf Olatunji
Mrs. AKIN -WILLIAMS Deborah Oseyemi
Mrs. KUFORIJI Grace IYIyaboABO
Mrs. AFELUYI Taiwo Abosede
Mrs. AYORINDE Morufat Bola
Mrs. ONAKOYA Mojisola Abidemi
Mrs.  ONAYEMI Alice Olalekan
Mr. OBADINA Femi Yemi
Mrs. OLADIPO Adebisi Folake 
Mrs. SOTOLA Temitope  Yetunde
Mrs. ADEKUNLE Oluwaseyi Adesanjo 
Mrs. OLOWU Esther Adenike
Mrs. OYEYEMI Oluwayemisi
Miss  OLASIMBO Tawakalitu Alaba
Mrs.  AKINOLA Stella Olumayowa
Mrs. ADEBAYO Toyin Tunrayo
Mr. YUSUF Adeyemi Saheed
Mrs. ADEYEMI Oluwaseun Lydia
Mr. SOBOWALE Julius Sunday
Mrs. ADENIJI Adenike Ajoke
Mrs.  IDOWU Abosede Omobola
Mrs.  ADEOSUN Adijat Temitope
Mrs.  ADEYINKA Kehinde Oluwakemi
Mrs. OLOGUNEBI Olayide Omobolanle
Mrs.  KOLAWOLE Abayomi Olusola
Mrs. ABIODUN Victoria Abiola
Mrs.  ODUBENA Foluke Mary
Mrs. OJEBIYI Olubusola Adunni
Mr.  ADENIYI Gbenga Samson 
Mrs. FALEYE Olusola  Oufunlola
Mrs. FADIPE Fatimoh Mobolaji
Mr.  ABIOLA Akintunde Adedeji
Mr. OMITOGUN Olaniyi Ghaffar
Mrs.  BAMIDELE Kudirat  Taiwo
Mrs. MACJOB Oluwatoyin Christiana
Mrs. AJAYI Temilade Adesola
Mrs. USMAN Modinat Amoke
Mrs. AJIBADE Adeleke Abiye
Mrs. AWOYEMI Saidat Abiodun
Mrs. AGBEDEJOBI Olabisi Omolara
Mrs.  ELEGUNDE Toyin Amope
Mrs. IDOWU Morenikeji Abosede
Mrs. OGUNWA Olukukola Temitope
Miss BABAYEMI Yetunde Morenikeji
Mrs. FAWEHINMI Adeola Oladunni
Mr. OGUNDIMU Gabriel Olubiyi
Mrs, UWELU Eruemulor Philomena
Mrs. DANSU Grace Olusola 
Mr.  OLUSESI Ibrahim Owolabi
Mrs. AKIODE Olutayo Busayo
Mrs. OMIKUNLE Elizabeth Alaba
Mrs. SONEYE Olufunmilayo  Olapeju
Mrs. AKINOSHOTemilola Tolulope
Mrs. OMOTOSHO Temitayo Oluyemisi
Mr. OLOWOLAGBA Nofiu Adebola
Mrs.  ODUWOLE Serifat
Mrs.  SOTUNDE Olufunmilola Temitope
Mrs.  KODAOLU Dorcas Opeoluwa
Mrs.  OLAGUNJU Abosede Omolabake
Mrs. ODUNLAMI Olusola Janet
Mrs.  BAKENNE Adebola Fatimoh
Mrs.  OLANREWAJU Ponle Funmilola
Mr. ABIOYE Oluwagbenga Abiodun
Mrs. SOMIDE Ttitilayo Risikat
Mr.  OKUBADEJO Olugbenga Adeniyi
Mrs. SULAIMON Lateefat Oluwabunmi
Mr. ADENEKAN Ismail Abidemi
Mrs. OGUNRINU, Mayowa Omolola
Mr. SOYINKA Mukaila  Olatunji 
Mrs. ODERINDE Tawakalit Olabisi
Mrs. OLUTUNDE Fehintola Bosede
Mrs. OLADEINDE Abosede Omotayo
Mrs.  OGUNSAKIN Oluwatoyin  Kemi
Mrs.  ADEMOLA Bukola Elizabeth
Mrs.  ADESEGUN Oluwayemisi Caroline
Mrs,  RAJI Olabisi Wunmi
Mrs. OKEDOYIN Folake Mojisola
Mrs. ADEROHUNMU Rashidat
Mrs. BANJOKO Akintomide M.S.
Mr.  SOKUNBI Samuel Seyi
Mrs. ISUMA Busurat Oluwaseun
Mr. AKINRINDE Kehinde John
Mrs. OYELUDE Oluwadamilola Olajumoke
Mr. DUROJAIYE Olayinka Olaoluwa
Mrs. AWOYEMI Ganiyat Ajoke 
Mr. GANDONU Lawrence Dangbenyo
Mr. OKANLAWON Samuel Rotimi
Mrs. OKUNOLA Oluyemi Titilayo
Miss  AKINYEMI Adesola Alaba
Mrs. OWOADE Tolulope Yewande
Mr. ADEYEMI Samuel Ibukun
Mr. LAWAL Fatai Oladimeji
Mrs. JOSEPH Adekemi Adunola
Mrs. SORINLO Olufunlayo Olubukola 
Mrs. AKOREDE Bhadmus Shakirat
Mr.  ODIDI Olawale Dare 
Mr. AGBAJE Nojeem Ajasa
Mr. ADIGUN Olaniyi Zacheous
Mr. ADEKUNLE  Oluwaseyi Oyeniran
Mr. OLATUNJI Taiwo Afolabi
Miss AKINDELE Oluwatoyin Idowu
Mrs. ADEKUNLE Adetoun Ebunlola
Mrs. AKINWANDE Tolulope Ayomide 
Mrs. AKINWUNMI Folake  Oyinkan
Mrs.  KARUNWI Temitope Serifat
Mrs.  ODEDELE Bosede Olanike
Mr.  OJUOLA David Abayomi
Mrs. SOTOMI Opeyemi Taiwo
Mrs. OLISA Abiola Sakirat
Mrs. BELLO Felicia Olabisi
Mrs. OGUNTOLA Sola Ganiyat
Mrs.  ANFELA Mary Toyin 
Mrs.  RAHEEM Omolola Modupe
Mrs. NEMEDIA Odegua Regina
Mrs. RABIU Bolanle Busola
Mrs. MAKINDE Abiola Abosede
Mrs. ADELAKUN Adetola Olufunso
Mr. OGUNWA Adetokunbo Yomi
Mrs.  JOSEPH Atinuke Patience
Mrs. OYEKUNLE Clara Olufunmilayo
Mr.  ADENIRAN Tajudeen Adewale
Mrs. AFOLABI Asisat Oluwaseun
Mrs. LAWAL Folasade Arinola
Mrs. ABIONA Taiwo Oluwaseyin
Mrs. OSIBANWO Suliat Temitayo
Mrs. ADELUOLA Olasunmbo Ibidunni
Mrs. OKEYINGBO Morolake
Mrs. ADEKUNLE Fatimah Afolake 
Miss OGUNNAIKE Oyindamola Hannah 
Mrs Oloyede Taiwo Abosede
`
namesToCommaArray(AbeokutaSraffNames)