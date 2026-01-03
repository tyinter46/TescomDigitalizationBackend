import fs from 'fs';




export function jsonToCSV(data) {
    if (!Array.isArray(data) || data.length === 0) {
      return '';
    }
  
    const headers = Object.keys(data[0]);
  
    const escapeCSV = (value) => {
      if (value === null || value === undefined) return '';
      const stringValue = String(value);
      // Escape double quotes by doubling them
      if (stringValue.includes('"') || stringValue.includes(',') || stringValue.includes('\n')) {
        return `"${stringValue.replace(/"/g, '""')}"`;
      }
      fs.writeFileSync('tescom_staff.csv', stringValue, 'utf8')
      return stringValue;
    };
  
    const csvRows = [];
  
    // Header row
    csvRows.push(headers.join(','));
  
    // Data rows
    for (const row of data) {
      const values = headers.map(header => escapeCSV(row[header]));
      csvRows.push(values.join(','));
    }
  
    return csvRows.join('\n');
  }
  
 export  const abeokutaStaffNamesAndPreviousSchools = [
    {
      "staffName": "Mrs. KILASHO,  Mariam  O.",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "Mr. AINA,  Bola  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. BABALOLA,  Olufunmilayo abosede",
      "schoolOfPresentPosting": "Ogunmakin High School (Junior), Sowunmi"
    },
    {
      "staffName": "Mr. SHITTU,  Babatunde sikiru",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "Mr. PEREOLA,  Samuel  A.",
      "schoolOfPresentPosting": "Ilewo Community High School"
    },
    {
      "staffName": "Mr. GIWA,  Lateef  A.",
      "schoolOfPresentPosting": "Community High School"
    },
    {
      "staffName": "Mrs. LAWAL,  Adetoke kehinde",
      "schoolOfPresentPosting": "N.U.D Grammar School (Senior), Solu"
    },
    {
      "staffName": "Mrs. ADEBAJO,  Francisca yemi",
      "schoolOfPresentPosting": "Community Grammar School, Ode-Lemo"
    },
    {
      "staffName": "Mr. OLANIYI,  Emmanuel  O.",
      "schoolOfPresentPosting": "Community High School (Junior), Ibafo"
    },
    {
      "staffName": "Mrs. OLUSEGUN,  Serah  I.",
      "schoolOfPresentPosting": "Army Day Junior Sec. Sch.,"
    },
    {
      "staffName": "Mr. OYEDIRAN,  Ajibade  A.",
      "schoolOfPresentPosting": "Community High School, Idi-Ayin."
    },
    {
      "staffName": "Mrs. OLUWADAIRO,  Olufunmilayo omolola",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mr. AKANJI,  Daniel  A.",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "Mrs. ODUTOLA,  Morenike  K.",
      "schoolOfPresentPosting": "Abobi Comprehesive High School Junior Ago Iwoye"
    },
    {
      "staffName": "Mrs. OPALEYE,  Florence  T.",
      "schoolOfPresentPosting": "Local Government Secondary Commercial School [Snr] Atan."
    },
    {
      "staffName": "Mr. ZANNUS,  Sunday folorunso",
      "schoolOfPresentPosting": "Itoki Community High  School(Junior), Itoki."
    },
    {
      "staffName": "Mrs. KADIRI,  Ibidun  S.",
      "schoolOfPresentPosting": "Unity High School (Junior), Ijoko-Ota"
    },
    {
      "staffName": "Mr. SANNI,  Mumin  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ODUMUYIWA,  Tolulope h.",
      "schoolOfPresentPosting": "Ogijo Community High School"
    },
    {
      "staffName": "Mr. OLAPAGBO,  Segun  A.",
      "schoolOfPresentPosting": "Community Comprehensive High School, Atapele"
    },
    {
      "staffName": "Mrs. ABIB - ATANDA,  Olukemi ajoke",
      "schoolOfPresentPosting": "Muslim High School"
    },
    {
      "staffName": "Mrs. OKUNOLA,  Olubukola grace",
      "schoolOfPresentPosting": "Saapade Grammar School"
    },
    {
      "staffName": "Mr. OLATUNBOSUN,  Ayodeji  O.",
      "schoolOfPresentPosting": "Agbado District Comprehensive High School(Snr) Oke-Aro"
    },
    {
      "staffName": "Mr. OMIREMI,  Moruf  A.",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive College (Junior), Ota"
    },
    {
      "staffName": "Mr. OGUNLEYE,  Tunde adeyemi",
      "schoolOfPresentPosting": "Comm. High Sch.(Junior) Ojodu-Abiodun"
    },
    {
      "staffName": "Mrs. MAMORA,  Olusola  O.",
      "schoolOfPresentPosting": "Obanta Comprehensive High School Junior Awa Ijebu"
    },
    {
      "staffName": "Mr. OTUNUBI,  Sulaimon  B.",
      "schoolOfPresentPosting": "Multilateral Grammar School, Okun-Owa"
    },
    {
      "staffName": "Mr. OMOTOSHO,  Samson  S.",
      "schoolOfPresentPosting": "Orile Ilugun Comprehensive High School(Snr), Orile Ilugun"
    },
    {
      "staffName": "Mrs. OGUN,  Idayat oluwakemi",
      "schoolOfPresentPosting": "Aiyepe Comprehensive High School, Aiyepe"
    },
    {
      "staffName": "Mr. JINADU,  Wahab olatunbosun",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "Mrs. OLURONKE,  A. adejoke",
      "schoolOfPresentPosting": "Muslim Community High School"
    },
    {
      "staffName": "Mr. AKINDELE,  Abiodun alao",
      "schoolOfPresentPosting": "Sonyindo Community High School"
    },
    {
      "staffName": "Mrs. AKINHANMI,  Aina  C.",
      "schoolOfPresentPosting": "Ilewo Community High School"
    },
    {
      "staffName": "Mrs. OKE,  Mojisola adenike",
      "schoolOfPresentPosting": "United High School (Junior),Ikenne"
    },
    {
      "staffName": "Mr. ADEGBOYEGA,  Semiu ayoade",
      "schoolOfPresentPosting": "Makun Omi Comprehensive High School, Makun Omi"
    },
    {
      "staffName": "Miss KAZEEM,  Opeoluwa  A.",
      "schoolOfPresentPosting": "Ijebu Sounthern District Grammar School, Ala"
    },
    {
      "staffName": "Mr. JOLAYEMI,  Sunday  J.",
      "schoolOfPresentPosting": "Alamuwa Grammar School (Senior), Ado Odo"
    },
    {
      "staffName": "Mr. OGUNYALE,  Abiodun  M.",
      "schoolOfPresentPosting": "Agbado District Comprehensive High School(Jnr) Oke-Aro"
    },
    {
      "staffName": "Mr. ADEBOWALE,  Olamide  A.",
      "schoolOfPresentPosting": "Community High School, Oluke"
    },
    {
      "staffName": "Mr. OYEWUSI,  Oyewole  A.",
      "schoolOfPresentPosting": "St. Brendan'S Grammar School (Jnr) Ogbere"
    },
    {
      "staffName": "Mr. OGUNSEYE,  Olubamiji tunji",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "Mrs. OLALEKAN,  Oyenike  M.",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "Mrs. OGOR,  Sabi  B.",
      "schoolOfPresentPosting": "Ahmadiyya High School Junior Ago Iwoye"
    },
    {
      "staffName": "Mrs. ETIM,  Mary toyin",
      "schoolOfPresentPosting": "Community High School Snr, Iroko Ota."
    },
    {
      "staffName": "Mr. LAWAL,  Fatai oladimeji",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "Mr. ALIYU,  Tunde adedeji",
      "schoolOfPresentPosting": "Gbenopo Community Grammar School,Bandu"
    },
    {
      "staffName": "Mr. LASISI,  Akeem  A.",
      "schoolOfPresentPosting": "Obada Grammar School, Obada OBADA IDI-EMI"
    },
    {
      "staffName": "Mrs. AKINBONI,  Sijuola  O.",
      "schoolOfPresentPosting": "Imotu Community Commercial Academy, Ifonyintedo"
    },
    {
      "staffName": "Mrs. POSU,  Abosede  O.",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "Mrs. MUSTAFA,  Racheal  A.",
      "schoolOfPresentPosting": "Ijebu Igbo Girls Grammar School Ijebu-Igbo"
    },
    {
      "staffName": "Mrs. OLUDELE,  Bukola yemi",
      "schoolOfPresentPosting": "Igiri High School,  Ijofin"
    },
    {
      "staffName": "Mrs. OLUKOYA,  Omolara  O.",
      "schoolOfPresentPosting": "Luba Comp. High School"
    },
    {
      "staffName": "Mr. OKEDIRAN,  Gafari  T.",
      "schoolOfPresentPosting": "District High School, Ipokia"
    },
    {
      "staffName": "Mr. OLUWOLE,  Saburi  O.",
      "schoolOfPresentPosting": "Adenrele High School (Senior), Ifo"
    },
    {
      "staffName": "Mr. OLUGBEWESA,  Alaba akinyemi",
      "schoolOfPresentPosting": "Ijebu-Ode Grammar School, Ijebu-Ode"
    },
    {
      "staffName": "Mr. TIJANI,  Asimiyu ajibol a",
      "schoolOfPresentPosting": "Ajuwon High School (Junior), Ajuwon"
    },
    {
      "staffName": "Mr. BAMGBOSE,  P. oladimeji",
      "schoolOfPresentPosting": "Alaketu High School, Imeko"
    },
    {
      "staffName": "Mr. BABATUNDE,  Abiodun olawale",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "Mr. OGUNDELE,  Samson  B.",
      "schoolOfPresentPosting": "Emulu Comprehensive High School, Orile Itesi"
    },
    {
      "staffName": "Mrs. ADEYINKA,  Kehinde muisat",
      "schoolOfPresentPosting": "Anglican Grammar School (Junior) Okenla"
    },
    {
      "staffName": "Mr. ADESANYA,  Adeniyi olanrewaju",
      "schoolOfPresentPosting": "Remo Divisional High School, Sagamu"
    },
    {
      "staffName": "Mrs. AKINTUNDE,  Taiwo risikat",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "Mrs. ADEFAKA,  Olayemi olufemi",
      "schoolOfPresentPosting": "Community High School Senior, Alapoti"
    },
    {
      "staffName": "Mr. OLANIGAN,  Tunde ibrahim",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OLAWUYI,  Felicia  A.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "Mrs. AKINNIYI,  Funmilayo  K.",
      "schoolOfPresentPosting": "Orile Oko Community High School"
    },
    {
      "staffName": "Mr. OLUGBEMI,  Gabriel  R.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. SAKA,  Idowu  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ABATAN,  Toyin amope",
      "schoolOfPresentPosting": "Ebenezer Grammar School, (Jnr), Iberekodo"
    },
    {
      "staffName": "Mr. AGBOOLA,  Taofeek  O.",
      "schoolOfPresentPosting": "Alaari High School, Alaari"
    },
    {
      "staffName": "Mr. ADETONA,  Akano  J.",
      "schoolOfPresentPosting": "Oluaso High School (Senior)"
    },
    {
      "staffName": "Mr. OSIYEMI,  Abiodun samson",
      "schoolOfPresentPosting": "Ago Iwoye Secondary School Junior Ago Iwoye"
    },
    {
      "staffName": "Mr. FOLORUNSO,  Sunday seun",
      "schoolOfPresentPosting": "Ojumo Community Secondary School Ihunbo"
    },
    {
      "staffName": "Mrs. OLA,  Temitope folashade",
      "schoolOfPresentPosting": "Yewa College Junior, Ilaro"
    },
    {
      "staffName": "Mrs. DAVIES,  Oluronke  A.",
      "schoolOfPresentPosting": "Ilara/Akaka Community Grammar School"
    },
    {
      "staffName": "Mrs. ADE AJAYI,  Funke dorcas",
      "schoolOfPresentPosting": "Itolu Comm. H/S Senior, Ilaro"
    },
    {
      "staffName": "Mrs. OLADOYE,  Anthonia abiodun",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. HUNSU,  Mary  A.",
      "schoolOfPresentPosting": "Area Comm. High Sch., Olokuta"
    },
    {
      "staffName": "Mrs. ADEBANJO,  Adenike  A.",
      "schoolOfPresentPosting": "African Church Grammar School (Senior)"
    },
    {
      "staffName": "Mrs. SONDE-ADEBOWALE,  Khadijat  M.",
      "schoolOfPresentPosting": "Nawair-Ud-Deen Grammar School (Jnr), Obantoko"
    },
    {
      "staffName": "Mrs. IDOWU,  Kikelomo abosede",
      "schoolOfPresentPosting": "Remo Divisional High School"
    },
    {
      "staffName": "Mr. OLUSOLA,  Kolawole david",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OLAJIDE,  Olubunmi  M.",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mr. TAIWO,  Olamide  E.",
      "schoolOfPresentPosting": "Muslim High School, Ilara-Yewa"
    },
    {
      "staffName": "Mrs. EDE,  Ikeade abiodun",
      "schoolOfPresentPosting": "Papalanto High School (Senior), Papalanto."
    },
    {
      "staffName": "Mr. BOLAJI,  Victor  O.",
      "schoolOfPresentPosting": "Obada Grammar School, Obada OBADA IDI-EMI"
    },
    {
      "staffName": "Mrs. ADEMUYIWA,  Adebukola christianah",
      "schoolOfPresentPosting": "Isanbi Comprehensive High School (Junior),Ilishan"
    },
    {
      "staffName": "Mr. KUSIMO,  Simeon  O.",
      "schoolOfPresentPosting": "African Church Grammar School (Jnr), Ita- Iyalode"
    },
    {
      "staffName": "Mrs. JOSEPH,  Anike  O.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mrs. OGUNBASE,  Christianah  O.",
      "schoolOfPresentPosting": "Ilugun High School (Snr)"
    },
    {
      "staffName": "Mr. AKINBODE,  Tunde daniel",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OLAGUNJU,  Gbenga  E.",
      "schoolOfPresentPosting": "Igbesa  High School(Junior), Igbesa."
    },
    {
      "staffName": "Mrs. ADENIJI,  Funmilayo bosede",
      "schoolOfPresentPosting": "Community High School, Moboluwaduro"
    },
    {
      "staffName": "Mrs. OGUNOYE,  Abosede  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ATOMORI,  Agnes yemi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Miss ADENUGA,  Adedoyin abosede",
      "schoolOfPresentPosting": "Itamapako High School, Iloti"
    },
    {
      "staffName": "Mr. ADEISA,  Joseph abiodun",
      "schoolOfPresentPosting": "Eyinni Comp. High School"
    },
    {
      "staffName": "Mrs. SHOTUYO,  Hafsat ajoke",
      "schoolOfPresentPosting": "Nawair-Ud-Deen Grammar School (Snr), Obantoko"
    },
    {
      "staffName": "Mrs. OLUWAFEMI,  Adesewa ibiyemi ayodeji",
      "schoolOfPresentPosting": "Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo"
    },
    {
      "staffName": "Mr. JOHN,  Olusola  A.",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "Mr. FOLARIN,  Babatunde olanrewaju ola",
      "schoolOfPresentPosting": "Adeola Odutola College"
    },
    {
      "staffName": "Mrs. BANJO,  Felicia  F.",
      "schoolOfPresentPosting": "Molusi College Senior Ijebu Igbo"
    },
    {
      "staffName": "Mr. ODUNUKAN,  Adeoye  O.",
      "schoolOfPresentPosting": "Sonyindo Community High School, Sagamu"
    },
    {
      "staffName": "Mr. ADEYANJU,  Funmilade  D.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OGUNNOWO,  Olufunmilayo bose",
      "schoolOfPresentPosting": "St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin"
    },
    {
      "staffName": "Mr. OYIBO,  Emmanuel o.",
      "schoolOfPresentPosting": "Muslim High School, Ilara-Yewa"
    },
    {
      "staffName": "Mrs. AYODELE,  Aminat oluwagbeminiyi",
      "schoolOfPresentPosting": "Agbele Community High School, Sagamu"
    },
    {
      "staffName": "Mr. IDAKWO,  Ali",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OLAYEMI,  Bolanle  A.",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "Mrs. ARIYO,  Afusat  A.",
      "schoolOfPresentPosting": "Molusi College Junior Ijebu Igbo"
    },
    {
      "staffName": "Mr. AKINYOOLA,  Taiwo  O.",
      "schoolOfPresentPosting": "Premier Grammar School (Snr)"
    },
    {
      "staffName": "Mr. ADEGBITE,  Waheed ade",
      "schoolOfPresentPosting": "Sonyindo Community High School, Sagamu"
    },
    {
      "staffName": "Mr. BABATUNDE,  Olusegun ajani",
      "schoolOfPresentPosting": "Alagbagba Community High School, Alagbagba"
    },
    {
      "staffName": "Mr. ADEGBIYI,  Idowu  O.",
      "schoolOfPresentPosting": "Makun High School, Sagamu"
    },
    {
      "staffName": "Mrs. AKINOLA,  Adeseyi  A.",
      "schoolOfPresentPosting": "Sagamu High School, Sagamu"
    },
    {
      "staffName": "Mrs. ODUNSI,  Omoololade  O.",
      "schoolOfPresentPosting": "Molipa High School"
    },
    {
      "staffName": "Mrs. AJALA,  Deborah oluwafunmilayo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. TAIWO,  Ibikunle esther",
      "schoolOfPresentPosting": "Methodist Comprehensive College, Sagamu"
    },
    {
      "staffName": "Mr. ADEBANBO,  Jacob  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OGUNBO,  Adebowale f.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OYADINA,  Aminat  M.",
      "schoolOfPresentPosting": "Igbusi Comprehensive High School, Igbusi"
    },
    {
      "staffName": "Mrs. OLANREWAJU,  Christiana ronke sunmade",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OBADINA,  Femi yemi",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mr. TEJUOSO,  Ayoola michael",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "Mrs. TAIWO,  Olayinka kudirat",
      "schoolOfPresentPosting": "Akesan Community Grammar School,Iperu"
    },
    {
      "staffName": "Mrs. ABDULAZEEZ,  Khadijat  O.",
      "schoolOfPresentPosting": "Owode Ota Grammar School, Ijako."
    },
    {
      "staffName": "Mrs. AYORINDE,  Morufat bola",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mr. INYANG,  Ukeme monday",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "Mr. OLASIMBO,  Tawakalitu  A.",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mrs. AWONUGA,  Adetoro  Y.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OGUNDAIRO,  Sunday olalekan",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ADEGOKE,  Yemisi  A.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mrs. SOTOLA,  Temitope yetunde",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mrs. ONAYEMI,  Alice olalekan",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mr. ABDULLAHI,  Bamidele  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OLATUNBOSUN,  Motunrayo aminat",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. KUTI,  Kayode koya",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OLADELE,  Olusola  A.",
      "schoolOfPresentPosting": "Yemma Community Grammar School Aromokala, Oloparun"
    },
    {
      "staffName": "Mr. ALLEN,  Olawale kehinde",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OYALOWO,  Ayodeji  R.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. DANSU,  Grace olusola",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "Mr. SOBOWALE,  Julius sunday",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mr. SONUBI,  Abdul wahab  A.",
      "schoolOfPresentPosting": "Owode High School (Junior), Owode Egba"
    },
    {
      "staffName": "Mr. ODULAJA,  Adeyemi olufemi",
      "schoolOfPresentPosting": "Ibu Community Grammar School, Ibu"
    },
    {
      "staffName": "Mrs. AKIODE,  Olutayo busayo k.",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "Mr. OSHILAJA,  Shamsideen  T.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. SHITTU,  Aminat  M.",
      "schoolOfPresentPosting": "Salawu Abiola Comprehensive High School (Snr), Osiele"
    },
    {
      "staffName": "Mrs. OLURINDE,  Adetola  A.",
      "schoolOfPresentPosting": "Orile Keesi Grammar School(Jnr), Olodo"
    },
    {
      "staffName": "Mrs. FAWEHINMI,  Adeola  O.",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "Mrs. AFOLABI,  Olabisi miubat",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "Mrs. ODUMBO-ALASE,  Odunola  A.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "Mrs. AJAYI,  Yetunde  O.",
      "schoolOfPresentPosting": "Community Comprehensive High School, Owowo."
    },
    {
      "staffName": "Mr. SOYOYE,  Taofeek alabi",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "Mrs. SALAMI,  Maria tawa",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "Mrs. OLADIPO,  Yetunde ibironke",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "Mrs. OGUNSOLA,  Bolanle deborah",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "Mrs. OGUNLEYE,  Folashade temitayo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OPANUGA,  Tunde",
      "schoolOfPresentPosting": "Egba Owode Grammar School (Senior), Owode"
    },
    {
      "staffName": "Mr. RAHEEM,  Rasheed olawale",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mr. OLUSESI,  Ibrahim  O.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "Mrs. SOBAYO,  Bolanle  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. ADEGBOYEGA,  Semiu  A.",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "Mrs. OLUKOYA,  Omobolanle yemisi",
      "schoolOfPresentPosting": "Agosasa Community Secondary, Agosasa"
    },
    {
      "staffName": "Mr. AJIKANLE,  Adeshina sakiru",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mr. OGUNSOLA,  Oyegoke  P.",
      "schoolOfPresentPosting": "Molusi College Junior Ijebu Igbo"
    },
    {
      "staffName": "Mr. DADA,  Oluwaseun  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ADEJORO,  Ajibola  O.",
      "schoolOfPresentPosting": "Community Sec Oko Baale"
    },
    {
      "staffName": "Mr. OYEWALE,  Olugbemi  A.",
      "schoolOfPresentPosting": "Methodist High School(Senior), Arigbajo."
    },
    {
      "staffName": "Mrs. OGUNYINKA,  Aderonke  Y.",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive College (Junior), Ota"
    },
    {
      "staffName": "Mrs. ADEYEMI,  Sidqot  O.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "Mr. OLATUNBOSUN,  Elijah  A.",
      "schoolOfPresentPosting": "Community Sec Oko Baale"
    },
    {
      "staffName": "Mr. OLAWUYI,  Ayorinde  O.",
      "schoolOfPresentPosting": "St. Stephen Comprehensive High School(Junior), Ado-Odo."
    },
    {
      "staffName": "Mr. SULAIMON,  Adeniyi  A.",
      "schoolOfPresentPosting": "Iyesi-Ota High School,Iyesi  -Ota Situation Report On Public Sec. Schools."
    },
    {
      "staffName": "Mrs. APETU,  Comfort  I.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ONI,  Omolola  A.",
      "schoolOfPresentPosting": "Area Comm. High Sch., Jnr, Owode"
    },
    {
      "staffName": "Mr. ELEGBEDE,  Adedayo f",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OYETUNDE,  Gbenga  M.",
      "schoolOfPresentPosting": "Alaari High School, Alaari"
    },
    {
      "staffName": "Mrs. ADEAGA,  Bola  M.",
      "schoolOfPresentPosting": "Sango Ota High School, (Snr)"
    },
    {
      "staffName": "Mrs. OLUKANNI,  Toyin rosemary",
      "schoolOfPresentPosting": "Local Government Secondary Commercial School [Jnr] Atan."
    },
    {
      "staffName": "Mrs. LAWAL,  Oluwaseun funmi",
      "schoolOfPresentPosting": "Araromi Community High School, Orita"
    },
    {
      "staffName": "Mr. IBRAHEEM,  Tunde  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. ASUNI,  Sherif  A.",
      "schoolOfPresentPosting": "Agosasa Community Secondary, Agosasa"
    },
    {
      "staffName": "Mrs. Oniyide,  Kudirat  A.",
      "schoolOfPresentPosting": "Community Secondary School, Ipokia"
    },
    {
      "staffName": "Mr. AGBEYANGI,  Oludolapo  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OYELUMADE,  Olutola  A.",
      "schoolOfPresentPosting": "Sango Ota High School, (Snr)"
    },
    {
      "staffName": "Mr. BADRUDEEN,  Musa  A.",
      "schoolOfPresentPosting": "Ilugun High School (Snr)"
    },
    {
      "staffName": "Mrs. OSAMARITA,  Esther  K.",
      "schoolOfPresentPosting": "Ejila Awori Community Secondary School, Ota."
    },
    {
      "staffName": "Mrs. AGBABO,  Patience  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ADEGBOYEGA,  Abiola  A.",
      "schoolOfPresentPosting": "Ajogbo Grammar School (Senior)"
    },
    {
      "staffName": "Mrs. OGUNJOBI,  Ayodele  T.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OLABISI,  Mukadas  I.",
      "schoolOfPresentPosting": "Agosasa Community High School, Agosasa"
    },
    {
      "staffName": "Mrs. AYENI,  Temilola  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ADESANU,  Adebola  A.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "Mrs. AFOLABI,  Oluwatoyin  B.",
      "schoolOfPresentPosting": "Ofada Community High School (Junior), Ofada"
    },
    {
      "staffName": "Mrs. GBOLAHAN,  Adesunbo  M.",
      "schoolOfPresentPosting": "Tayese Community Secondary School, Ibatefin"
    },
    {
      "staffName": "Mrs. FOWOSIRE,  Olayinka  A.",
      "schoolOfPresentPosting": "Papalanto High School (Senior), Papalanto."
    },
    {
      "staffName": "Mr. IBIRINDE,  Oluwaseun  O.",
      "schoolOfPresentPosting": "Tayese Community Secondary School, Ibatefin"
    },
    {
      "staffName": "Mrs. AKINSOLA,  Morenike  M.",
      "schoolOfPresentPosting": "Agbara Community Senior High School, Edu"
    },
    {
      "staffName": "Mrs. WAHAB,  Doyinsola  A.",
      "schoolOfPresentPosting": "Agbado District Comprehensive High School(Jnr) Oke-Aro"
    },
    {
      "staffName": "Mrs. OWOLABI,  Abiodun omolade",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. AJIBOLA,  Oluwabukola  O.",
      "schoolOfPresentPosting": "Local Government Secondary Commercial School [Snr] Atan."
    },
    {
      "staffName": "Mrs. ADEBIYI,  Hannah  A.",
      "schoolOfPresentPosting": "Army Day Senior Sec. Sch., Owode"
    },
    {
      "staffName": "Mrs. ABIODUN,  Olaitan  E.",
      "schoolOfPresentPosting": "Remo Secondary School, Sagamu"
    },
    {
      "staffName": "Mrs. OLAYEMI,  Olabisi mabel",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mrs. ADESIJI,  Fausat  A.",
      "schoolOfPresentPosting": "Ososa Comprehensive High School, Ososa"
    },
    {
      "staffName": "Mrs. OKE,  Hafsat mosebolatan",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mrs. AWOLOWO,  Olumide  A.",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "Mrs. GBADAMOSI,  Obiageli  M.",
      "schoolOfPresentPosting": "St. Stephen Comprehensive High School(Senior), Ado-Odo."
    },
    {
      "staffName": "Mrs. BANKOLE,  Romoke  L.",
      "schoolOfPresentPosting": "Community High School Senior, Alapoti"
    },
    {
      "staffName": "Mrs. AKINDELE,  Opeoluwa oluwaseun",
      "schoolOfPresentPosting": "Sagamu High School"
    },
    {
      "staffName": "Mrs. OKUNOLA,  Oluwumi f. abolanle",
      "schoolOfPresentPosting": "Comm. High Sch.(Junior) Ojodu-Abiodun"
    },
    {
      "staffName": "Mr. BUSARI,  Jamiu  M.",
      "schoolOfPresentPosting": "Agbado District Comprehensive High School(Jnr) Oke-Aro"
    },
    {
      "staffName": "Mrs. OLUWAMBE,  Titilayo olabisi",
      "schoolOfPresentPosting": "Ilugun High School (Jnr), Elega"
    },
    {
      "staffName": "Mrs. OLADIPUPO,  Oluwabukunmi celestina",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ADELEKE,  Kafilat abolore",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OKELANA,  Ayodeji olanrewaju",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "Mr. RABIU,  Taiwo michael",
      "schoolOfPresentPosting": "Itori Comprehensive High School (Senior), Itori."
    },
    {
      "staffName": "Mrs. BANJO,  Yetunde  A.",
      "schoolOfPresentPosting": "Okepata Community Community High School,Ifo"
    },
    {
      "staffName": "Mr. OKPANACHI,  Manfred  D.",
      "schoolOfPresentPosting": "Emmanuel Comm. High Sch., Ilaro"
    },
    {
      "staffName": "Mrs. OJEKUNLE,  Oluwafunke  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OGUNLELA,  Ayantundun  R.",
      "schoolOfPresentPosting": "Olambe Community Comprehensive High School, Olambe"
    },
    {
      "staffName": "Mr. SALISU,  Oyeniyi nureni",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "Mrs. ODUWOLE,  Yetunde  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OGUNJOBI,  Alice oluwaseun",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "Mr. MUSA,  Olalekan  T.",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "Mr. MUSA,  Musilihudeen  O.",
      "schoolOfPresentPosting": "United Comprehensive High School, Wasinmi."
    },
    {
      "staffName": "Mr. OKUNLOLA,  Abolaji  E.",
      "schoolOfPresentPosting": "Community High School (Combined), Iro"
    },
    {
      "staffName": "Mrs. ODUGBEMI,  Adeola  O.",
      "schoolOfPresentPosting": "Ebenezer Grammar School, (Snr)"
    },
    {
      "staffName": "Mrs. MUSTAPHA,  Oluwakemi caroline",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "Mrs. OJO,  Oluwagbemiro  A.",
      "schoolOfPresentPosting": "Oke-Ore Grammar School"
    },
    {
      "staffName": "Mrs. ADEKANLA,  Adekemi  Y.",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota."
    },
    {
      "staffName": "Mrs. GODONU,  Adedayo  B.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. LIYIDE,  Jaiyeola  P.",
      "schoolOfPresentPosting": "Egba Odeda High School (Snr), Odeda"
    },
    {
      "staffName": "Mr. AJAYI,  Olubiyi  O.",
      "schoolOfPresentPosting": "Oluaso High School (Senior)"
    },
    {
      "staffName": "Mrs. ADEWALE,  Oluyemi titilope",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "Mrs. TAIWO,  Olufemi esther",
      "schoolOfPresentPosting": "Odopotu Community High School, Odopotu."
    },
    {
      "staffName": "Mr. OYENIYA,  Sunday adebayo",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mr. OSINEYE,  Olugbenga  A.",
      "schoolOfPresentPosting": "African Church Grammar School (Jnr), Ita- Iyalode"
    },
    {
      "staffName": "Mr. SALAKO,  Abel  O.",
      "schoolOfPresentPosting": "Community Junior Secondary School, Ipokia"
    },
    {
      "staffName": "Mrs. ALAKIU,  Bukonla  A.",
      "schoolOfPresentPosting": "Ofada Community High School (Senior), Ofada"
    },
    {
      "staffName": "Mrs. HUNTEMEN,  Mosunmola  O.",
      "schoolOfPresentPosting": "Community High School, Moboluwaduro"
    },
    {
      "staffName": "Mr. SANU,  Adewale adegbenga",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "Mrs. BALOGUN,  Morenike  A.",
      "schoolOfPresentPosting": "Anglican Girls Grammar School"
    },
    {
      "staffName": "Mrs. OLUSANYA,  Omotayo  R.",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "Mr. SHODEKO,  Abdulhakeem d. oladehind",
      "schoolOfPresentPosting": "Ebenezer Grammar School, (Snr)"
    },
    {
      "staffName": "Mr. FOLORUNSO,  S.  O.",
      "schoolOfPresentPosting": "Unity High School (Senior), Kajola Ibooro"
    },
    {
      "staffName": "Mr. OGUNYEMI,  Samuel  R.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. FADEYI,  Omolola  M.",
      "schoolOfPresentPosting": "Ogbe Community High School, Mede-Ajegunle"
    },
    {
      "staffName": "Mrs. AKINDELE,  Aminat abiodun",
      "schoolOfPresentPosting": "Egba Obafemi Community High School (Senior), Obafemi"
    },
    {
      "staffName": "Mr. OLANIYI,  Emilola  C.",
      "schoolOfPresentPosting": "Oke- Ona Grammar School"
    },
    {
      "staffName": "Mr. ADEGBOYEGA,  Olusegun abiodun",
      "schoolOfPresentPosting": "Ifo High School (Senior), Ifo"
    },
    {
      "staffName": "Mr. OMOYELE,  Sheu  A.",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive College (Senior), Ota"
    },
    {
      "staffName": "Mrs. SOETAN,  Bimpe omolara",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. LAWAL,  Gbolahan alabi",
      "schoolOfPresentPosting": "Iwoye Area Community High School"
    },
    {
      "staffName": "Mr. AJAYI,  Olabanji moshood",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "Mrs. ALFRED,  Omolara temitope",
      "schoolOfPresentPosting": "St. Peter's College,(Snr)"
    },
    {
      "staffName": "Mr. ADEKANBI,  Fatai adekunle",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. AKINDELE,  Olamide  C.",
      "schoolOfPresentPosting": "Tayese Community Secondary School, Ibatefin"
    },
    {
      "staffName": "Mrs. ANTHONY,  Oluwabukola  R.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. BABALOLA,  Sunday  K.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. LATEEF,  Gafar  A.",
      "schoolOfPresentPosting": "Community Secondary School, Ipokia"
    },
    {
      "staffName": "Mr. IBRAHIM,  Azeem  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ABDULWALIY,  Zaynab  T.",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota."
    },
    {
      "staffName": "Mrs. AKINPELU,  Adenike  O.",
      "schoolOfPresentPosting": "Unity High School (Senior), Kajola Ibooro"
    },
    {
      "staffName": "Mr. OGUNYEMI,  Taiwo john",
      "schoolOfPresentPosting": "Beje High School Senior Ijebu Igbo"
    },
    {
      "staffName": "Mr. TAIWO,  Abiodun  A.",
      "schoolOfPresentPosting": "Ipara community High School"
    },
    {
      "staffName": "Mr. TOGBE,  Athansede tunde",
      "schoolOfPresentPosting": "Community Commercial High School, Maun"
    },
    {
      "staffName": "Mrs. OYELAMI,  Olufunke  O.",
      "schoolOfPresentPosting": "Isara Secondary School"
    },
    {
      "staffName": "Mrs. FALAJIKI,  Elizabeth titilayo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. POPOOLA,  Julianah olayinka",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "Mrs. OYEDELE,  Abosede  O.",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "Mr. OLAWUYI,  Oluyemi  K.",
      "schoolOfPresentPosting": "Anglican Grammar School Snr Okenla"
    },
    {
      "staffName": "Mr. ADEYEMI,  Kolawole  A.",
      "schoolOfPresentPosting": "Sawonjo High School"
    },
    {
      "staffName": "Mr. ABIODUN,  Oluwafemi  O.",
      "schoolOfPresentPosting": "Olorunda Community High School"
    },
    {
      "staffName": "Mr. KOLAWOLE,  Samuel abayomi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. LAMIDI,  Kudirat  A.",
      "schoolOfPresentPosting": "Unity High School,(Snr)"
    },
    {
      "staffName": "Mrs. ADENIYI,  Maryam iyabode amope",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "Mrs. ABIOLA,  Olayinka taiwo",
      "schoolOfPresentPosting": "Unity High School,(Snr)"
    },
    {
      "staffName": "Mrs. TAIWO,  Agnes  A.",
      "schoolOfPresentPosting": "Owu Community Comprehensive High School, Elere-Adubi."
    },
    {
      "staffName": "Mrs. ADEKUNLE,  Ruth  A.",
      "schoolOfPresentPosting": "Oronna High School, Jnr, Ilaro"
    },
    {
      "staffName": "Mrs. BAKARE,  Maryam  A.",
      "schoolOfPresentPosting": "Oronna High School, Jnr, Ilaro"
    },
    {
      "staffName": "Mr. AKINWUNMI,  Lanre  E.",
      "schoolOfPresentPosting": "Unity High School,(Snr)"
    },
    {
      "staffName": "Mr. FASHINA,  Tunde michael",
      "schoolOfPresentPosting": "Unity High School,(Snr)"
    },
    {
      "staffName": "Mrs. OSIBANWO,  Suliat temitayo",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "Mrs. ADEOTI,  Basirat  O.",
      "schoolOfPresentPosting": "Unity High School,(Jnr)"
    },
    {
      "staffName": "Mrs. COLE,  Abosede  B.",
      "schoolOfPresentPosting": "Unity High School,(Snr)"
    },
    {
      "staffName": "Mr. OGUNSOLA,  Joseph  B.",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "Mr. OSEKITA,  Bamidele  O.",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "Mr. AYANKUNLE,  Bamidele ade",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "Mr. EESUOLA,  Abiodun adebanjo",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "Mrs. AJAYI,  Mary taiwo",
      "schoolOfPresentPosting": "Alagbagba Community High School, Alagbagba"
    },
    {
      "staffName": "Mr. KEHINDE,  Olawale ganniu",
      "schoolOfPresentPosting": "Ilugun High School (Snr)"
    },
    {
      "staffName": "Mr. ORESANYA,  Sulaiman  A.",
      "schoolOfPresentPosting": "Community Commercial High School, Maun"
    },
    {
      "staffName": "Mrs. OSHINSANYA,  Oluwatosin adebisi .a",
      "schoolOfPresentPosting": "Community High School Junior, Iroko Ota."
    },
    {
      "staffName": "Mrs. OLANIPEKUN,  Ramota  R.",
      "schoolOfPresentPosting": "Community High School,Igbala"
    },
    {
      "staffName": "Mr. DEHINOLA,  Olufemi  S.",
      "schoolOfPresentPosting": "Comprehensive High School"
    },
    {
      "staffName": "Mr. BAKARE,  Yusuf oladipupo",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "Mrs. JUNAID,  Olusola  T.",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "Mrs. OLUWASEYI,  Olusade  B.",
      "schoolOfPresentPosting": "Local Government Secondary Commercial School [Snr] Atan."
    },
    {
      "staffName": "Mr. GBEBIKAN,  Micheal  E.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "Mrs. OSHO,  Funmilola  A.",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "Mr. NASIRUDEEN,  Sakariyau  A.",
      "schoolOfPresentPosting": "Owu Community Comprehensive High School, Elere-Adubi."
    },
    {
      "staffName": "Mrs. AYINLA,  Oluwabunmi  O.",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "Mrs. OSANYINBI,  Olubunmi  M.",
      "schoolOfPresentPosting": "Local Government Secondary Commercial School [Snr] Atan."
    },
    {
      "staffName": "Mr. BABALOLA,  Gafar  O.",
      "schoolOfPresentPosting": "Alaye High School"
    },
    {
      "staffName": "Mrs. TAIWO,  Oluyemisi esther",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "Mr. OGUNGBAYIKE,  Olubayo  O.",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "Mr. USAMAT,  Jimoh  G.",
      "schoolOfPresentPosting": "Ilogbo Asowo Community High Sch"
    },
    {
      "staffName": "Mr. OKE,  Michael oluwadamilare",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. DARAMOLA,  Rachael  O.",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "Mrs. ADEMOLA,  Adenike  O.",
      "schoolOfPresentPosting": "Mayigi Community Comprehensive High School, Ilase"
    },
    {
      "staffName": "Mrs. SOBOYEJO,  Grace  A.",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "Mrs. HAMEED,  Aderonke  L.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "Mr. OGUNGBEMI,  Babatunde  A.",
      "schoolOfPresentPosting": "Iwoye Area Community High School"
    },
    {
      "staffName": "Mr. BAMKOLE,  Olawale abiodun",
      "schoolOfPresentPosting": "Ajiboyede Comprhensive High School"
    },
    {
      "staffName": "Mrs. ISMAIL,  Sekinah  G.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "Mr. OLAYODE,  Sulaimon  L.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. KEKERE-EKU,  Dupe elizabeth",
      "schoolOfPresentPosting": "Ogijo Community High School, Ogijo"
    },
    {
      "staffName": "Mr. SHITTU,  Gafar  A.",
      "schoolOfPresentPosting": "Itoki Community High  School(Junior), Itoki."
    },
    {
      "staffName": "Mrs. QUADRI,  Biliqees  T.",
      "schoolOfPresentPosting": "Muslim Community High School"
    },
    {
      "staffName": "Mr. OKU,  David yemi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OLADIPUPO,  Bukola elizabeth",
      "schoolOfPresentPosting": "Unity High School,(Snr)"
    },
    {
      "staffName": "Mr. ADEBAJO,  Samson  O.",
      "schoolOfPresentPosting": "Community High School,Okungbolu"
    },
    {
      "staffName": "Mrs. OLABINJO,  Olanrewaju  O.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "Mr. ADEWUNMI,  Andrew  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OBAYEMI,  Daniel  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. ADENIYI,  Saka  A.",
      "schoolOfPresentPosting": "Ketu College (Senior)"
    },
    {
      "staffName": "Mr. SAMSON,  Ojo  J.",
      "schoolOfPresentPosting": "Ibogun Olaogun Community High School, Ibogun Olaogun"
    },
    {
      "staffName": "Mrs. SALAU,  Fatima afolake",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "Mrs. SALISU,  Abiola  T.",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "Mrs. BAKARE,  Omolara  O.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "Mr. OGUNSOLA,  Sunday  A.",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "Mrs. BANJO,  Hannah abosede",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "Mr. SODIMU,  Ismaila  A.",
      "schoolOfPresentPosting": "Egba Obafemi Community High School (Junior), Obafemi"
    },
    {
      "staffName": "Mr. ODUNLAMI,  Olugbenga  D.",
      "schoolOfPresentPosting": "Kobape Community High School (Combined), Kobape"
    },
    {
      "staffName": "Mrs. SHASORE,  Afusat  K.",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "Mrs. AKINOLA,  Abisola  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. OLADEINDE,  Emmanuel biodun",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mrs. ODUNLAMI,  Anthonia  A.",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mrs. SOBO,  Adiat  A.",
      "schoolOfPresentPosting": "Owode High School (Senior), Owode Egba"
    },
    {
      "staffName": "Mrs. OLUFEMI,  Titilope margaret",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mr. RAHEEM,  Alamu james",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ANIMASHAUN,  Olateju  A.",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "Mr. OSIKANMI,  Olayinka olukayode",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mrs. DIYA,  Sakirat abiola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OTULANA,  Bolape ajoke",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mrs. MAKINDE,  Abiola abosede",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "Mr. AJAYI,  Tunde olalekan",
      "schoolOfPresentPosting": "Idogo/Ipaja Comm.High Sch"
    },
    {
      "staffName": "Mr. SOBOWALE,  Ayokunle omololu",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mr. OYERINDE,  Abiodun  I.",
      "schoolOfPresentPosting": "Ebenezer Grammar School, (Snr)"
    },
    {
      "staffName": "Mr. OYEYEMI,  Victor  J.",
      "schoolOfPresentPosting": "Premier Grammar School (Snr)"
    },
    {
      "staffName": "Mr. OMOLADE,  Olusola  L.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. BAMGBAYE,  Funmilayo  A.",
      "schoolOfPresentPosting": "Anglican Grammar School Snr Okenla"
    },
    {
      "staffName": "Mrs. OLUWAJUYIGBE,  Julianah  I.",
      "schoolOfPresentPosting": "Community High School,Okungbolu"
    },
    {
      "staffName": "Mrs. OYEYEMI,  Kehinde victoria",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. OMOYAYI,  Abosede aduke",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mr. OJO,  Lateef oyeniyi",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "Mrs. ADEBAYO,  Ganiyat  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. AKINRINOLA,  Adeyinka  O.",
      "schoolOfPresentPosting": "Armyday Secondary School, (Jnr), Alamala"
    },
    {
      "staffName": "Mrs. OLAJORIN,  Hannah  A.",
      "schoolOfPresentPosting": "Methodist High School(Senior), Arigbajo."
    },
    {
      "staffName": "Mrs. IDOWU,  Temitope  O.",
      "schoolOfPresentPosting": "Itoki Community High  School(Senior), Itoki."
    },
    {
      "staffName": "Mrs. OGUNNIRAN,  Esther  A.",
      "schoolOfPresentPosting": "Ifesowapo Comprehensive High School"
    },
    {
      "staffName": "Mr. OWODUNNI,  Raheem  A.",
      "schoolOfPresentPosting": "Ifesowapo Comprehensive High School"
    },
    {
      "staffName": "Mrs. ADESANYA,  Adefunke motunrayo",
      "schoolOfPresentPosting": "Titilayo Agbaje Memorial Comprehensive High School, Imosan"
    },
    {
      "staffName": "Mr. YUSUF,  Olatunde  R.",
      "schoolOfPresentPosting": "Ifesowapo Comprehensive High School"
    },
    {
      "staffName": "Mrs. OLUGBEMISI,  Oluyinka  C.",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "Mrs. AKANNI,  Gbemisola  H.",
      "schoolOfPresentPosting": "Nawair-Ud-Deen Grammar School (Jnr), Obantoko"
    },
    {
      "staffName": "Mrs. AJAYI,  Racheal bolanle",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "Mr. AYOPO,  Olumide olanrewaju",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "Mrs. UTHMAN,  Adiat  I.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "Mr. OPEOLUWA,  Biliaminu  A.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ABRAHAM,  Olukemi  F.",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "Mrs. ARIBANUSI,  Adekemi olubunmi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ADELUOLA,  Olasunmbo ibidunni",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "Mrs. OYELEYE,  Motunrayo  A.",
      "schoolOfPresentPosting": "Agbado District Comprehensive High School(Snr) Oke-Aro"
    },
    {
      "staffName": "Mr. SOBAYO,  Matthew olu",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "Mr. POPOOLA,  Lateef  O.",
      "schoolOfPresentPosting": "Alaro Community High School, Odosenlu."
    },
    {
      "staffName": "Mrs. ADENIYI,  Taiwo  T.",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "Mrs. IWALAIYE,  Olu dorcas",
      "schoolOfPresentPosting": "Agbado District Comprehensive High School(Snr) Oke-Aro"
    },
    {
      "staffName": "Mr. BAKARE,  Yusuff akolawole",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mr. ADEGUNLE,  Mutiu  A.",
      "schoolOfPresentPosting": "Papalanto High School (Junior), Papalanto."
    },
    {
      "staffName": "Mrs. OSIPITAN,  Omolola abosede",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "Mrs. SANUSI,  Elizabeth modupe",
      "schoolOfPresentPosting": "Alamuwa Grammar School (Junior), Ado Odo"
    },
    {
      "staffName": "Mrs. MACAULAY,  Yetunde  F.",
      "schoolOfPresentPosting": "Olokine Grammar School Ijebu-Igbo"
    },
    {
      "staffName": "Mr. SAHEED,  Najimudeen  A.",
      "schoolOfPresentPosting": "Japara High School Senior Ijebu Igbo"
    },
    {
      "staffName": "Mrs. KOMOLAFE,  Abosede  O.",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "Mrs. OJEBIYI,  Risikatu adunni",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "Mrs. OMIDIJI,  Oreoluwa  A.",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "Mrs. OLABODE,  Aminat  O.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "Mrs. ADELU,  Olunike  A.",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "Mrs. ODUKOYA,  Oluwakemi mobolanle",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "Mrs. OGUNDELE,  Oluyemi olukemi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SALAKO, Lekan Oluwatosin.",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "OGUNKOYA, Oluwakemi fatimah",
      "schoolOfPresentPosting": "Remo Divisional High School, Sagamu"
    },
    {
      "staffName": "ODERINDE, Tawakalitu Olabisi.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "SANYAOLU, Abiodun maria",
      "schoolOfPresentPosting": "Yewa College Junior, Ilaro"
    },
    {
      "staffName": "FASESIN, Olabisi o.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ADENIYI, Olanrewaju ibukun",
      "schoolOfPresentPosting": "Unity High School,(Snr)"
    },
    {
      "staffName": "MURTADHO, Taofeeq Tunde.",
      "schoolOfPresentPosting": "Ajiboyede Comprhensive High School"
    },
    {
      "staffName": "SALAMI, Akeem gbolagade",
      "schoolOfPresentPosting": "Sonyindo Community High School"
    },
    {
      "staffName": "ADEEKO, Gbenga Samson.",
      "schoolOfPresentPosting": "Igbore Robiyan Community High School, Robiyan"
    },
    {
      "staffName": "AKINJOBI, Tunde Habeeb.",
      "schoolOfPresentPosting": "Igbore Robiyan Community High School, Robiyan"
    },
    {
      "staffName": "ABDUL-AZEEZ, Saadudeen babatunde",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEBOYE, Kehinde olawunmi",
      "schoolOfPresentPosting": "Remo Secondary School"
    },
    {
      "staffName": "ADESANYA, Florence Oluwakemi .o..",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "AINA, Taiwo omoniyi",
      "schoolOfPresentPosting": "Akesan Community Grammar School,Iperu"
    },
    {
      "staffName": "SOFOLUWE, Samson oluwaseun",
      "schoolOfPresentPosting": "Ijebu-Ode Grammar School, Ijebu-Ode"
    },
    {
      "staffName": "ADETONA, Yemi abike",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABIODUN, Adegboyega",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OGUNBIYI, Modupe abosede",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AYEDUN, Adenike omolara",
      "schoolOfPresentPosting": "Iganmode Grammar School (Senior), Ota"
    },
    {
      "staffName": "OYEBOLA, Ganiyat ajoke",
      "schoolOfPresentPosting": "Ibogun Comprehensive High School,Egbeda"
    },
    {
      "staffName": "ADEBANJO, Oluwakemi nike",
      "schoolOfPresentPosting": "Ijebu-Ode Grammar School, Ijebu-Ode"
    },
    {
      "staffName": "AKINTOYE, Rotimi Williams.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEBAMBO, Olanrewaju gideon",
      "schoolOfPresentPosting": "Odogbolu Grammar School, Odogbolu"
    },
    {
      "staffName": "OLUKOLA, Maria oluwakemi",
      "schoolOfPresentPosting": "Nawair-Ud-Deen Grammar School (Snr), Obantoko"
    },
    {
      "staffName": "SOYEBO, Bilikisu ayinke",
      "schoolOfPresentPosting": "Simawa Community High School, Simawa"
    },
    {
      "staffName": "OLAJIDE, Taiwo seyi",
      "schoolOfPresentPosting": "Imotu Community Commercial Academy, Ifonyintedo"
    },
    {
      "staffName": "AYINDE, Rafiu tunde",
      "schoolOfPresentPosting": "Iko Gateway Grammar School, Idiroko"
    },
    {
      "staffName": "AMOSU, Bosede Modupe.",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota."
    },
    {
      "staffName": "DADA, Olanrewaju adewale",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SODIYA, Oluwaseun .m.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ODEBIYI-OLOYEDE, Ganiyat F..",
      "schoolOfPresentPosting": "Owode High School (Junior), Owode Egba"
    },
    {
      "staffName": "LAWAL, Rasheed .a.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AYANDELE, Gbemi segun",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "BAKARE, Busirat A..",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AJAYI, Adeoluwa emmanuel",
      "schoolOfPresentPosting": "Itolu Comm. H/S Junior, Ilaro"
    },
    {
      "staffName": "ADEKUNLE, Gbenga Sunday.",
      "schoolOfPresentPosting": "F.A.C.M(Una) High School"
    },
    {
      "staffName": "EDUN, Aderonke Victoria.",
      "schoolOfPresentPosting": "Imotu Community Commercial Academy, Ifonyintedo"
    },
    {
      "staffName": "BHADMUS-AKOREDE, Shakirat Adebukola.",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "GBADAMOSI, Moruf seun",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ONAOLAPO, Abayomi d",
      "schoolOfPresentPosting": "Imodi-Ijasi Comprehensive High School, Imodi"
    },
    {
      "staffName": "ADENEYE, Idowu wasiu adeboye .s.",
      "schoolOfPresentPosting": "Isoyin Grammar School, Junior."
    },
    {
      "staffName": "SIKIRU, Akeem babatunde",
      "schoolOfPresentPosting": "Abusi Odumare Academy Senior Ijebu Igbo"
    },
    {
      "staffName": "ASADE, Elijah akanni",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AWOLESI, Moses olaolu",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLADEGA, Abosede modupe",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLUGBESAN, Tolulope obafemi kehinde",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADENUGA, Adewale Adegbenga.",
      "schoolOfPresentPosting": "Idogo/Ipaja Comm.High Sch"
    },
    {
      "staffName": "OLUSEYE, Ridwan Oladimeji.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "RASHEED, Saheed Adeyemi.",
      "schoolOfPresentPosting": "Idowa Comprehensive High School, Idowa"
    },
    {
      "staffName": "DEMEHIN, Kehinde .g.",
      "schoolOfPresentPosting": "Ajagbe High School,Iperu"
    },
    {
      "staffName": "SIKIRU, Sulaimon Babatunde.",
      "schoolOfPresentPosting": "Olokine Grammar School Ijebu-Igbo"
    },
    {
      "staffName": "ALEBIOSU, Akeem olatunji",
      "schoolOfPresentPosting": "Christ Apostolic Grammar School(Senior),Iperu"
    },
    {
      "staffName": "SORUNKE, Ismail ayinde",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "MOMODU, Taiwo Yetunde.",
      "schoolOfPresentPosting": "Ibiade Comprehensive High School, Ibiade"
    },
    {
      "staffName": "SOWEMIMO, Omobolanle oluwakemi",
      "schoolOfPresentPosting": "Anglican Grammar School (Junior) Okenla"
    },
    {
      "staffName": "TANIMONURE, Samuel oluwasola",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OLOKEDE, Olubunmi ayobami",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "KOLAWOLE, Abayomi olusola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLADEINDE, Abosede omotayo",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ADEBAMBO, Abdulazeez Olanrewaju.",
      "schoolOfPresentPosting": "Adeola Odutola College"
    },
    {
      "staffName": "MAKINDE, Funmilola temitope",
      "schoolOfPresentPosting": "Agbele Community High School, Sagamu"
    },
    {
      "staffName": "OGUNBIYI, Adetola bimpe",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEKUNTE, Oluwafunmilayo bolanle",
      "schoolOfPresentPosting": "African Church Grammar School (Senior)"
    },
    {
      "staffName": "SANNI, Fatai adekunle",
      "schoolOfPresentPosting": "African Church Grammar School (Senior)"
    },
    {
      "staffName": "ADESANYA, Folake mojisola",
      "schoolOfPresentPosting": "Ogbogbo Baptist Grammar School, Junior."
    },
    {
      "staffName": "TAIWO, Mariam Atinuke.",
      "schoolOfPresentPosting": "Ilara/Akaka Community Grammar School"
    },
    {
      "staffName": "PEDRO, Mary mojisola",
      "schoolOfPresentPosting": "Agbara Community Senior High School, Edu"
    },
    {
      "staffName": "ADEYEMI, Idowu adesina",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AWOYEMI, Saidat Abiodun.",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "OGUNSAKIN, Oluwatoyin kemi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SOMUYIWA, Tolutomi femi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ODUWOLE, Serifat adebola",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "OBAFEMI, Olukemi omoyemi",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota."
    },
    {
      "staffName": "AKINTADE, Kola olanrewaju",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OLALEKAN, Taiwo Christianah.",
      "schoolOfPresentPosting": "Yemma Community Grammar School Aromokala, Oloparun"
    },
    {
      "staffName": "ADELEYE, Oluwatosin abiodun",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota."
    },
    {
      "staffName": "OKUNLOLA, Oluyemi titilayo",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "AGBOLAHAN, A. adebusayo",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AFOLABI, Aderinsola oluwaseun",
      "schoolOfPresentPosting": "Ajuwon High School (Senior), Ajuwon"
    },
    {
      "staffName": "SORINLO, Olufunmilayo olubukola",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "SOKUNBI, Folashade amudat",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ADEKUNLE, Adesola alaba",
      "schoolOfPresentPosting": "Okepata Community Community High School,Ifo"
    },
    {
      "staffName": "OGUNTUYO, Temidayo ayobami",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "BAKENNE, Adebola fatimoh",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "AJIBOLA, Azeezat Iyabo.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "ADEKUNLE, Oluwaseyi oyeniran",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "ADEOSUN, Kafayat Omolara.",
      "schoolOfPresentPosting": "Area Comm. High Sch., Olokuta"
    },
    {
      "staffName": "ODUNLAMI, Olusola janet",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "RAHMON, Tunde Abolore.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AFOLABI, Florence ayo",
      "schoolOfPresentPosting": "Matogun Community High School"
    },
    {
      "staffName": "ADEKUNLE, Adetoun ebunlola",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "ADENIYI, Funmilayo bola",
      "schoolOfPresentPosting": "Ajuwon High School (Senior), Ajuwon"
    },
    {
      "staffName": "HASSAN, Lateefat Temitope.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "AKINLAMI, Ibijoke olabisi",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ADEKUNLE, Titilayo Taiwo.",
      "schoolOfPresentPosting": "Alaro Community High School, Odosenlu."
    },
    {
      "staffName": "ADEOKUN, Akeem niyi",
      "schoolOfPresentPosting": "Christ Church High School"
    },
    {
      "staffName": "OGUNKUNLE, Olupero moradeun",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "BAKARE, Abdulazeez adeleye",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ALEBIOSU, Raphael kehinde",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OKOYO, Charity charles a",
      "schoolOfPresentPosting": "Mayflower School (Junior),Ikenne"
    },
    {
      "staffName": "DARAMOLA, Olusegun  oluseyi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "GBADEBO, Babatunde dare",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ODUSOGA, Adekunle sunday",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AROWONA, Mariam olabisi",
      "schoolOfPresentPosting": "Male Comprehensive High School(Junior), Igbesa."
    },
    {
      "staffName": "AJIBODE, Taiwo olugbeminiyi",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ABDUL, Adepeju c.",
      "schoolOfPresentPosting": "Iganmode Grammar School (Junior), Ota"
    },
    {
      "staffName": "SOMUYIWA, Abiola Abosede.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "RUFAI, Mariam Abimbola.",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ADEBAYO, Funmilola sayo",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "SOREMI, Funmilayo falilat .a.",
      "schoolOfPresentPosting": "Ijebu Muslim College, Ijebu-Ode"
    },
    {
      "staffName": "AHMMED, Tunde adewale",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "YUSUFF, Akinsola saheed",
      "schoolOfPresentPosting": "Orile Kemta Comprehensive High School (Snr), Olugbo"
    },
    {
      "staffName": "ODEDELE, Omolola nofisat",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "AJAYI, Taiwo oluwakemi",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "BABALOLA, Dunni adenike",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "SALAMI, Adeniyi olugbenga",
      "schoolOfPresentPosting": "Ode Remo High School (Junior)"
    },
    {
      "staffName": "ADEYANJU, Olugbenga samson",
      "schoolOfPresentPosting": "Salawu Abiola Comprehensive High School (Snr), Osiele"
    },
    {
      "staffName": "SOTUNDE, Olufunmilola temitope",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "DOSUMU, Fatai Adekunle.",
      "schoolOfPresentPosting": "Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside"
    },
    {
      "staffName": "OGUNMOLA, Oluyemi esther",
      "schoolOfPresentPosting": "Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun"
    },
    {
      "staffName": "AKINDE, Oluwatoyin anu",
      "schoolOfPresentPosting": "African Church Grammar School (Senior)"
    },
    {
      "staffName": "JEGEDE, Kehinde ade",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "OLANREWAJU, Adesola modupe",
      "schoolOfPresentPosting": "Our Lady Of Apostles Secondary School"
    },
    {
      "staffName": "OLADIPUPO, Sulaiman akanbi",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "AYODEJI, Mutiu abiodun",
      "schoolOfPresentPosting": "Ebenezer Grammar School, (Snr)"
    },
    {
      "staffName": "OGUN, Wasilat joke",
      "schoolOfPresentPosting": "Anglican Grammar School (Junior) Okenla"
    },
    {
      "staffName": "ADEYANJU, Michael adeniyi",
      "schoolOfPresentPosting": "Community High School, Idi-Ayin."
    },
    {
      "staffName": "OYEKAN, Oluwakemi Kehinde.",
      "schoolOfPresentPosting": "Igbore Robiyan Community High School, Robiyan"
    },
    {
      "staffName": "IFOGA, Kehinde adesola",
      "schoolOfPresentPosting": "Community High School Akute"
    },
    {
      "staffName": "OGUNSOLA, Olubukola olasumbo",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "OYENUGA, Oluwatoyin R.",
      "schoolOfPresentPosting": "Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo"
    },
    {
      "staffName": "OMOTOSHO, Temitayo oluyemisi",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "ALABA, Kunle mayowa",
      "schoolOfPresentPosting": "Oke-Eri Comprehensive High School, Oke-Eri."
    },
    {
      "staffName": "AKINWANDE, Adedoyin olaosebikan",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AKINNIYI, Micheal Adetayo.",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ADEBANJO, Abosede omoniyi",
      "schoolOfPresentPosting": "Idomila Comprehensive High School, Idomila."
    },
    {
      "staffName": "ABIODUN, Emmanuel oladayo",
      "schoolOfPresentPosting": "Community Grammar School, Owu/Ikija"
    },
    {
      "staffName": "AKINBANDE, Oluwakemi bola",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "YEKINNI, Olufunmilayo abosede",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OSIBOWALE, Abosede modupe",
      "schoolOfPresentPosting": "Ahmadiyya High School Senior Ago Iwoye"
    },
    {
      "staffName": "KEHINDE, Kehinde kemi",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "DANIEL, Blessing Uzoamaka.",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "FASAKIN, Olufunmilola Oluwafpemi.",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "ADEOSUN, Dupe elizabeth",
      "schoolOfPresentPosting": "Area Comm. High Sch., Jnr, Owode"
    },
    {
      "staffName": "ADEBANJO, Adetutu olanrewaju",
      "schoolOfPresentPosting": "Ladugbo Community Comprehensive High School Ijebu Igbo"
    },
    {
      "staffName": "FADIPE, Adiat olabisi",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "OWOLABI, Taiwo Yetunde.",
      "schoolOfPresentPosting": "Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo"
    },
    {
      "staffName": "AFOLABI, Elizabeth olubukola",
      "schoolOfPresentPosting": "Pakoto High School (Junior), Ayede"
    },
    {
      "staffName": "OLAOPA, Adesola adesimbo o.",
      "schoolOfPresentPosting": "Community High School (Junior), Ibafo"
    },
    {
      "staffName": "LEMO, Sadiat bolanle",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ARIYO, Emmanuel olusegun",
      "schoolOfPresentPosting": "Oke-Eri Comprehensive High School, Oke-Eri."
    },
    {
      "staffName": "OTEGBADE, Asisat Oluwaseun.",
      "schoolOfPresentPosting": "Ajebo Community High School (Senior), Ajebo"
    },
    {
      "staffName": "AJAYI, Morenikeji Abigeal.",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEYEMI, Grace omolola",
      "schoolOfPresentPosting": "Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun"
    },
    {
      "staffName": "ADIGUN, Victoria iyabode",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "ADEKUNLE, Olanrewaju Adebola.",
      "schoolOfPresentPosting": "Pakoto High School (Junior), Ayede"
    },
    {
      "staffName": "EDE, Adebisi, olawunmi",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ADIGUN, Olaniyi zacheus",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "OLABISI, Esther Titilayo.",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "ADELAKUN, Adetola olufunso",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "ASADE, Elizabeth omobolanle",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEKOYA, Margret funmilola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEWUSI, Olajumoke Abidemi.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ABIOLA, Akintunde adedeji",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OLADEHINDE, Olabisi grace",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "AKINTOLA, Iyabo adebimpe",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ABOLARIN, Taiwo folasade",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABDULLAHI, Adetutu olu aina",
      "schoolOfPresentPosting": "Owode Ota Grammar School, Ijako."
    },
    {
      "staffName": "OTUN, Aminat Alake.",
      "schoolOfPresentPosting": "Coker Area Comprehensive High School, Coker"
    },
    {
      "staffName": "OKUBOTE, Olubunmi Adebukola.",
      "schoolOfPresentPosting": "Pakoto High School (Junior), Ayede"
    },
    {
      "staffName": "FATERU, Oluwakemi maria",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ALI, Gladys onome",
      "schoolOfPresentPosting": "Community High School Junior, Alapoti"
    },
    {
      "staffName": "AINA, Taiwo abiola",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OLADIPO, Elizabeth Titilayo.",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "AYODELE, Joel",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "TAIWO, Abigail aderele",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "AKINYEMI, Adesola alaba",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "KOLA-SOWEMIMO, Ajoke omolola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABIODUN, Lawrence Sunday.",
      "schoolOfPresentPosting": "Muslim Community High School"
    },
    {
      "staffName": "AFOLABI, Oluwatoni Awele.",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "KODAOLU, Dorcas opeoluwa",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "AJAYI, Esther olusola",
      "schoolOfPresentPosting": "Ofada Community High School (Junior), Ofada"
    },
    {
      "staffName": "ADENIYI, Oluwagbenga samson",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEYINKA, Kehinde oluwakemi",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "GBADURA-GLORY, Deborah bolanle",
      "schoolOfPresentPosting": "Anglican Grammar School (Junior) Okenla"
    },
    {
      "staffName": "AINA, Oluwole remmy",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "OWOEYE, Sunday solomon",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OGUNTOLA, Mojisola ganiyat",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "AKINDIPE, Elizabeth olayinka",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "ADEGOKE, Bola",
      "schoolOfPresentPosting": "Christ Church High School, Sabo"
    },
    {
      "staffName": "AWOJOBI, Christianah olusola",
      "schoolOfPresentPosting": "Isara Secondary School"
    },
    {
      "staffName": "OGUNSOLA, Mulikat adeola",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "IDOWU, Abosede omobola",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "AINA, Esther adetutu",
      "schoolOfPresentPosting": "Ikenne Community High School(Senior), Ikenne"
    },
    {
      "staffName": "ODELAJA, Afoluso esther",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ADIGUN, Olusolamipe esther",
      "schoolOfPresentPosting": "Egba Odeda High School (Snr), Odeda"
    },
    {
      "staffName": "OJEBIYI, Olubusayo adunni",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "LAWAL, Taiwo adetutu",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADIGUN, Esther olusola",
      "schoolOfPresentPosting": "Community High School (Senior), Ibafo"
    },
    {
      "staffName": "ADEDAPO, Simeon tunde",
      "schoolOfPresentPosting": "Lafenwa High School (Snr)"
    },
    {
      "staffName": "SODUNKE, Kemi bolanle",
      "schoolOfPresentPosting": "Lafenwa High School (Snr)"
    },
    {
      "staffName": "BELLO, Abimbola oluwatosin",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "LAMEED, Omolola abosede",
      "schoolOfPresentPosting": "Ilese Comprehensive High School, Senior."
    },
    {
      "staffName": "OYEWOLE, Motunrayo f.",
      "schoolOfPresentPosting": "Oke- Ona Grammar School"
    },
    {
      "staffName": "OLANREWAJU, Adekunle taiwo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SHOKUNBI, Samuel seyi",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "LAWAL, Funmilayo ajoke",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "KUKOYI, Abiodun olubankole",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ODU, Monday Isaac.",
      "schoolOfPresentPosting": "Community High School"
    },
    {
      "staffName": "ADEKUNLE, Khadijat bisola olawunmi",
      "schoolOfPresentPosting": "Iganmode Grammar School (Senior), Ota"
    },
    {
      "staffName": "FADIPE, Fatimo mobolaji",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ADENUGA, Victoria o. Oladele.",
      "schoolOfPresentPosting": "Obafemi Awolowo Comp. High School, Odonoko"
    },
    {
      "staffName": "IBITOYE, Mary Mojisola.",
      "schoolOfPresentPosting": "Batoro Community High School"
    },
    {
      "staffName": "ELEGUNDE, Toyin amope",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "ONI, Beatrice yemisi",
      "schoolOfPresentPosting": "Ilogbo Asowo Community High Sch"
    },
    {
      "staffName": "ADESANYA, Mojisola oluwatoyin",
      "schoolOfPresentPosting": "Ilogbo Asowo Community High Sch"
    },
    {
      "staffName": "ODUNOWO, Sunday olalekan",
      "schoolOfPresentPosting": "Ijebu Muslim College, Ijebu-Ode"
    },
    {
      "staffName": "SANUSI, Wahab ademola",
      "schoolOfPresentPosting": "Iganmode Grammar School (Senior), Ota"
    },
    {
      "staffName": "ALALADE, Benjamin adeyemi",
      "schoolOfPresentPosting": "Ayetoro Community Grammar School"
    },
    {
      "staffName": "OYETORO, Omobolanle abidemi",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "AKANNI, Rasheedat Oluwakemi.",
      "schoolOfPresentPosting": "Ijebu Muslim College, Ijebu-Ode"
    },
    {
      "staffName": "AKINSINDE, Deborah taiwo",
      "schoolOfPresentPosting": "Ansar-Ud Deen Compre College,Itele"
    },
    {
      "staffName": "AKINLEYE, Olasunkanmi omoshalewa. r",
      "schoolOfPresentPosting": "Iganmode Grammar School (Senior), Ota"
    },
    {
      "staffName": "TAIWO, Oluwatoyin bosede",
      "schoolOfPresentPosting": "Anglican Grammar School (Senior), Ota"
    },
    {
      "staffName": "COLE, Yetunde patience .o.",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "OWOLABI, Omolade elizabeth",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "AINA, Morenikeji sarah",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "ADEBAYO, Jumoke riliwat",
      "schoolOfPresentPosting": "Emeritus Prof. T.O Ogunlasi Model Secondary School"
    },
    {
      "staffName": "OGUNDELE, Iyabode olabisi",
      "schoolOfPresentPosting": "Sango Ota High School, (Snr)"
    },
    {
      "staffName": "ODEYEMI, Omobolanle Oluwafunmilayo.",
      "schoolOfPresentPosting": "Community High School Snr, Iroko Ota."
    },
    {
      "staffName": "ODUTAYO, Aminat omotunde",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "OLADEPO, Olalekan sunday",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "ILUGBAMI, Ebenezer tunde",
      "schoolOfPresentPosting": "Araromi Community High School, Orita"
    },
    {
      "staffName": "AKINDELE, Oluwatoyin Idowu.",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "FAJOBI, Modupe abosede",
      "schoolOfPresentPosting": "Ansar-Ud-Deen High School, Ijebu-Ode"
    },
    {
      "staffName": "AJIBODE-IKOTUN, Gbeminiyi  lola",
      "schoolOfPresentPosting": "Sango Ota High School, (Snr)"
    },
    {
      "staffName": "KUPONIYI, M. adeola",
      "schoolOfPresentPosting": "Alagbagba Community High School, Alagbagba"
    },
    {
      "staffName": "IDOWU, Elizabeth Abosede.",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive College (Junior), Ota"
    },
    {
      "staffName": "FADEYI, Olanrewaju olujimi",
      "schoolOfPresentPosting": "United Comprehensive High School, Wasinmi."
    },
    {
      "staffName": "ADEBOYE, Temitope Abiodun.",
      "schoolOfPresentPosting": "Nawair-Ud-Deen Grammar School (Jnr), Obantoko"
    },
    {
      "staffName": "AINA, Deborah taiwo",
      "schoolOfPresentPosting": "Unity High School,(Jnr)"
    },
    {
      "staffName": "ARIBISALA, Olajumoke omotola",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "ADEBAYO, Modupe funmi",
      "schoolOfPresentPosting": "Muslim Girls High Sch."
    },
    {
      "staffName": "OKE, Olufunmi olubunmi",
      "schoolOfPresentPosting": "Gateway Secondary School, (Jnr), Ita - Eko"
    },
    {
      "staffName": "ABIOYE, Sadiat adetutu",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "OYEWOLE, Emmanuel Abiodun.",
      "schoolOfPresentPosting": "Alaari High School, Alaari"
    },
    {
      "staffName": "LAWAL, Funmilayo Seun.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ADEYEMI, Rhoda Omolola.",
      "schoolOfPresentPosting": "Remo Divisional High School, Sagamu"
    },
    {
      "staffName": "OSO, Omolade Elizabeth.",
      "schoolOfPresentPosting": "Community High School (Junior), Ibafo"
    },
    {
      "staffName": "GEORGE, Abosede funmilayo",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "IBITOKUN, Adenike Omolara.",
      "schoolOfPresentPosting": "Lafenwa High School (Snr)"
    },
    {
      "staffName": "ADEBANJO-ONIKU, Aderonke abosede",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "MALAOLU, O. aderonke",
      "schoolOfPresentPosting": "Ilugun High School (Jnr), Elega"
    },
    {
      "staffName": "OBADINA, Adenike olayinka",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "OJELADE, Oluwatoyin Adeola.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "OGUNLEYE, Amidu tunde",
      "schoolOfPresentPosting": "Itoki Community High  School(Junior), Itoki."
    },
    {
      "staffName": "OLADEINDE, Oluwakemi mariam",
      "schoolOfPresentPosting": "Emeritus Prof. T.O Ogunlasi Model Secondary School"
    },
    {
      "staffName": "ADENIYI, Mary Kikelomo.",
      "schoolOfPresentPosting": "Area Comm. High Sch., Jnr, Owode"
    },
    {
      "staffName": "OLOYEDE, Hazanat taiwo",
      "schoolOfPresentPosting": "Adenrele High School (Senior), Ifo"
    },
    {
      "staffName": "OLOYEDE, Afusat omowunmi",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "SOLOMON, Sunday Abiodun.",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OKUBADEJO, Joseph gbenga",
      "schoolOfPresentPosting": "Anglican Comprehensive High School, Ikoto Snr"
    },
    {
      "staffName": "OLATUNDE, Risikat yetunde",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ODUFUYE, Afolake adebisi",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "DUROJAIYE, Olayinka olaolu",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "OGUNDAIRO, Nofisat modupe",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "AYO, Tajudeen oluwadele",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADETAYO, Comfort iyabode",
      "schoolOfPresentPosting": "Sonyindo Community High School"
    },
    {
      "staffName": "OLAYEMI, Bola comfort",
      "schoolOfPresentPosting": "Salawu Abiola Comprehensive High School (Jnr), Osiele"
    },
    {
      "staffName": "SOYEMI, Oluyemi adenike",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AJIBOLA, Modinat Iyabo.",
      "schoolOfPresentPosting": "Salawu Abiola Comprehensive High School (Jnr), Osiele"
    },
    {
      "staffName": "AYENI, Bisola ganiyat",
      "schoolOfPresentPosting": "Itamerin Comprehensive High School Junior Oru Ijebu"
    },
    {
      "staffName": "ODUSINA, Toyin idowu",
      "schoolOfPresentPosting": "Comprehensive High School (Snr) Ijebu Ife"
    },
    {
      "staffName": "MURITALA, Ganiyu taiwo",
      "schoolOfPresentPosting": "Shamsudeen Grammar School Junior Ijebu-Igbo"
    },
    {
      "staffName": "ADEDEJI, Tirimisiyu adekunle kola",
      "schoolOfPresentPosting": "Remo Secondary School"
    },
    {
      "staffName": "BABAYOMI, Zainab Adetutu.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "AGBAJE, Semiu abiodun",
      "schoolOfPresentPosting": "Ajebandele High School, Ajebandele J4"
    },
    {
      "staffName": "DAUDA, Matilda omowunmi",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ABOLADE, Babatunde Mukhtar.",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "ADEBAYO, Damilola Ayobamidele.",
      "schoolOfPresentPosting": "United High School (Senior)L, Ikenne"
    },
    {
      "staffName": "SALAMI, Yemi adam",
      "schoolOfPresentPosting": "United High School (Junior),Ikenne"
    },
    {
      "staffName": "ADEBAYO, Oluwatosin o.",
      "schoolOfPresentPosting": "Isoyin Grammar School, Junior."
    },
    {
      "staffName": "IDOWU, Toyin zainab",
      "schoolOfPresentPosting": "Idomila Comprehensive High School, Idomila."
    },
    {
      "staffName": "MUTAIRU, Mulikat Motunrayo .o..",
      "schoolOfPresentPosting": "Methodist High School(Junior), Arigbajo."
    },
    {
      "staffName": "OGUNDIPE, Sunday abiodun",
      "schoolOfPresentPosting": "Orita Community High School (Senior)"
    },
    {
      "staffName": "OGUNRONBI, Oluwarotimi o.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "AYO-ADEBAMIRO, Oluwakemi ajoke",
      "schoolOfPresentPosting": "Fowoseje Comprehensive High School Senior Ago Iwoye"
    },
    {
      "staffName": "IDOWU, Toyin adebola",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "ASADE, Oluwasina akanni",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "JOSEPH, Atinuke patience",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "RABIU, Muritala taiwo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABIODUN, Victoria Abiola.",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OLADIMEJI, Kehinde adesola",
      "schoolOfPresentPosting": "Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun"
    },
    {
      "staffName": "AKINGBENLE, Rebecca olufunke",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ONAJOKE, Sunday adeniji",
      "schoolOfPresentPosting": "Ilese Comprehensive High School, Junior"
    },
    {
      "staffName": "ADETORO, Fatimot odunola",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "BALOGUN, Monsurat adefunke",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "EKANLU, Kehinde John.",
      "schoolOfPresentPosting": "Community High School, Igbokofi"
    },
    {
      "staffName": "ADEBIYI, Afusat Omowunmi.",
      "schoolOfPresentPosting": "Ilese Comprehensive High School, Senior."
    },
    {
      "staffName": "GAZAL, Abiodun samsondeen",
      "schoolOfPresentPosting": "Ijebu-Ode Grammar School, Ijebu-Ode"
    },
    {
      "staffName": "KEHINDE, Oluwakemi keji",
      "schoolOfPresentPosting": "Community High School, Moboluwaduro"
    },
    {
      "staffName": "OKEYINGBO, Morolake abosede",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "ABIONA, Taiwo oluwaseyi",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "OYEWUNMI, Omolara adenike",
      "schoolOfPresentPosting": "Pakoto High School (Senior), Ayede"
    },
    {
      "staffName": "SOFIDIYA, Gbenga adewale",
      "schoolOfPresentPosting": "Iganmode Grammar School (Junior), Ota"
    },
    {
      "staffName": "ADEKUNLE, Segun olatunde",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "ADEYEMI, Samuel ibukun",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "AKINDOYIN, Grace olubukola",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "BAMGBOYE, Omotola abiola",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "JUBRIL, Oluyemisi esther",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OMOLE, Omolola Bosede.",
      "schoolOfPresentPosting": "Iko Gateway Grammar School, Idiroko"
    },
    {
      "staffName": "ADEDIPE, Adesesan r.",
      "schoolOfPresentPosting": "Idomila Comprehensive High School, Idomila."
    },
    {
      "staffName": "OKUNEYE, Fadekemi omobolaji",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "SANUSI, Sadirudeen Wale.",
      "schoolOfPresentPosting": "Itori Comprehensive High School (Junior), Itori."
    },
    {
      "staffName": "OJO, Omonike zeynab",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "GANIU, Kayode saliu",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "SALAKO, Modupe afolake",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "OGUNWA, Adetokunbo Yomi.",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "BANJO, Adetoro Oluwayemisi.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OLUEDUN, Ronke rukayat",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "YINUSA, Akeem adeniyi",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "OSENI, Monsuru Opeyemi.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "AKINDELE, Fatimah Oluwakemisola.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ADEYEMI, Florence olufunmilayo",
      "schoolOfPresentPosting": "Shamsudeen Grammar School Junior Ijebu-Igbo"
    },
    {
      "staffName": "AKINWANDE, Tolulope ayomide",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "ABDUL, Babatunde sikiru",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ODUNTAN, Eunice olubusola",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "ALI, Olasumbo damilola",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "ADESANYA, Chistianah toyin",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ALABA, Mary oluwatoyin",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "BAMIGBELU, Rebecca modupe",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AINA, Bamidele olatunde",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ODUYOMI, Modoluwamu idowu",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "IFEKOYA, Omolola abosede",
      "schoolOfPresentPosting": "Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun"
    },
    {
      "staffName": "BANJO, Elizabeth modupe",
      "schoolOfPresentPosting": "Odopotu Community High School, Odopotu."
    },
    {
      "staffName": "BALOGUN, Olabisi mariam",
      "schoolOfPresentPosting": "Comprehensive High School, Ijebu Imusin"
    },
    {
      "staffName": "AKINOLA, Monsurat a.",
      "schoolOfPresentPosting": "Ajiboyede Comprhensive High School"
    },
    {
      "staffName": "TEMIDAYO, Omoboye florence",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADENIJI, Abolanle saulat",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "ADELEYE, Adebiyi oladimeji m.",
      "schoolOfPresentPosting": "Ebenezer Grammar School, (Jnr), Iberekodo"
    },
    {
      "staffName": "ODUDIMU, Olusola Esther.",
      "schoolOfPresentPosting": "Ibogun Olaogun Community High School, Ibogun Olaogun"
    },
    {
      "staffName": "OGUNNAIKE, Oluwatosin David.",
      "schoolOfPresentPosting": "Omu-Ajose Comprehensive High School, Odogbolu"
    },
    {
      "staffName": "GEORGE, Ola esther morolake",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SOMUYIWA, Rita modupe",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "ODUTOLA, Kamorudeen ola",
      "schoolOfPresentPosting": "Itamerin Comprehensive High School Senior Oru Ijebu"
    },
    {
      "staffName": "BAKARE, Toyin Idowu.",
      "schoolOfPresentPosting": "Ogbogbo Baptist Grammar School, Senior."
    },
    {
      "staffName": "ADESANYA, Comfort lola f.",
      "schoolOfPresentPosting": "Sagamu High School"
    },
    {
      "staffName": "RAJI, Habibat Olabisi.",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "MUSTAPHA, Temitope oluwakemi",
      "schoolOfPresentPosting": "St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin"
    },
    {
      "staffName": "ADELEYE, Omotayo Abosede.",
      "schoolOfPresentPosting": "Ijebu Sounthern District Grammar School, Ala"
    },
    {
      "staffName": "AKINSOLA, Omobolanle rophiat",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "AKINLADE, Deborah adebanke",
      "schoolOfPresentPosting": "Ogijo Community High School"
    },
    {
      "staffName": "OGUNSANYA, Samson adeshina o",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota."
    },
    {
      "staffName": "SOMADE, Bisi titilayo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "LAWAL, Sulaiman alabi",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "BELLO, Wahab ademola",
      "schoolOfPresentPosting": "Abigi  Community  Grammar  School, Abigi"
    },
    {
      "staffName": "ADEBAYO, Olufisayo adeboun",
      "schoolOfPresentPosting": "Iyesi-Ota High School,Iyesi  -Ota Situation Report On Public Sec. Schools."
    },
    {
      "staffName": "ODE, Mary Olabowale.",
      "schoolOfPresentPosting": "Community High School, Ibiade"
    },
    {
      "staffName": "AKINLADE, Olushola Kuburat.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ADEBAYO, Oluwakemi olutoyin",
      "schoolOfPresentPosting": "Ajebo Community High School (Senior), Ajebo"
    },
    {
      "staffName": "LATINWO, Adijat abisola",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "OLAYEMI, Adeniyi .o",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "JOSEPH, Adekemi adunola",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "MUSTAPHA, Modupe afusat",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AYOADE, Victoria olawunmi",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "SANUSI, Kuburat folasade",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "TORU, Kolawole samuel",
      "schoolOfPresentPosting": "Ogijo Community High School, Ogijo"
    },
    {
      "staffName": "ONATUNDE, Ajibade sherifat",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLAKUNLE, Serifat oluwatoyin",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "OLAONIPEKUN, Modupe oluwaseyi",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ENIASORO, Olubukola Titilayo.",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ONI, Ayodeji abiodun",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "CHIMEZIE, Yemisi Temitayo.",
      "schoolOfPresentPosting": "Saapade Grammar School"
    },
    {
      "staffName": "ABDUL-AZEEZ, Taofeek o.",
      "schoolOfPresentPosting": "Ijebu-Ode Gram. Sch."
    },
    {
      "staffName": "OYEDELE, Bilikis abiola",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "MALIK, Tawakalit abiola",
      "schoolOfPresentPosting": "Mayflower School (Junior),Ikenne"
    },
    {
      "staffName": "BABAYEMI, Yetunde morenikeji",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "LAWAL, Folasade arinola",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "OGUNGBILE, Yemisi ade",
      "schoolOfPresentPosting": "Community High School Ohunbe"
    },
    {
      "staffName": "GBOGIARAN, Mary oluwatoyin",
      "schoolOfPresentPosting": "Moslem Comp. High School"
    },
    {
      "staffName": "BAMIDELE, Halimat Adebimpe.",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "SONUBI, Olubukola Elizabeth.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AJAYI, Taiwo john",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "AJILEYE, Florence Anike.",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "JOSEPH, Motunrayo abiodun",
      "schoolOfPresentPosting": "Remo Secondary School, Sagamu"
    },
    {
      "staffName": "TAIWO, Afolake oyekemi",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AJIBOYE, Elizabeth olayinka",
      "schoolOfPresentPosting": "Iganmode Grammar School (Junior), Ota"
    },
    {
      "staffName": "FREEMAN, Olaoluwa A.",
      "schoolOfPresentPosting": "Remo Divisional High School"
    },
    {
      "staffName": "ILORI, Tunde Simeon.",
      "schoolOfPresentPosting": "Igbusi Comprehensive High School, Igbusi"
    },
    {
      "staffName": "AYANTUBO-APATA, Deborah Oluwabunmi.",
      "schoolOfPresentPosting": "Olorunkole Grammar School"
    },
    {
      "staffName": "TOPE - IGE, Oluwakemi abidoun",
      "schoolOfPresentPosting": "Adeola Odutola College"
    },
    {
      "staffName": "ISUMA, Busurat oluwaseun",
      "schoolOfPresentPosting": "Itoki Community High  School(Senior), Itoki."
    },
    {
      "staffName": "SOYINKA, Eniola oluwatoyin",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "OLUBUNMI, Temidayo oluwagbemi",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "OKUSANYA, Oluwaseun adedeji samson",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "ADESANYA, Motunrayo oluwatoyin",
      "schoolOfPresentPosting": "Odua Comprehensive High School, Imoru"
    },
    {
      "staffName": "SAMUEL, Oluyemisi abike",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ABASS, Monsurat olayinka",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "OLUKOYA, Bisola adijat",
      "schoolOfPresentPosting": "Ogbo Community Comprehensive High School, Ogbo"
    },
    {
      "staffName": "ABIODUN, Olufemi olukayode",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AGBAJE, Nojeem ajasa",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "IGBOSANU, Olumuyiwa Adewale.",
      "schoolOfPresentPosting": "Lomiro High School, Lomiro"
    },
    {
      "staffName": "QUADRI, Adedayo adesola",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "OLADEJI, Oluwayomi modupe",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADESANYA, Moruf Ola.",
      "schoolOfPresentPosting": "Omu-Ajose Comprehensive High School, Odogbolu"
    },
    {
      "staffName": "AWOKOYA, Risikat yemi",
      "schoolOfPresentPosting": "Ifesowapo Comprehensive High School"
    },
    {
      "staffName": "AKINRINDE, Kehinde john",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ADIGUN, Rotimi adesina",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "BABATUNDE, Sunday folorunso",
      "schoolOfPresentPosting": "Orile Imo Grammar School, Orile Imo"
    },
    {
      "staffName": "ADEYEMI, Bolanle samuel",
      "schoolOfPresentPosting": "Adenrele High Schoo (Junior), Ifo"
    },
    {
      "staffName": "ADENIYI-KOJEKU, Adefunmilayo margaret",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "YAHYA, Rofiat Omowunmi.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "FALAJA, Olawale adedeji",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ARIYIBI, Saubana Sunmade.",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "GILBERT, Christianah oluwakemi o.",
      "schoolOfPresentPosting": "Muslim High School, Isolu"
    },
    {
      "staffName": "AINA, Titilayo taiwo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEKUNLE, Oluwakemi toyin",
      "schoolOfPresentPosting": "Anglican Comprehensive High School, Ikoto"
    },
    {
      "staffName": "OTUN, Fausat olaide",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "OKE, Oladele michael",
      "schoolOfPresentPosting": "Adeola Odutola College"
    },
    {
      "staffName": "BAMGBOSE, Abimbola adetutu",
      "schoolOfPresentPosting": "Odua Comprehensive High School, Imoru"
    },
    {
      "staffName": "IBIKUNLE, Rosemary abokhia",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "OLOYEDE, Taiwo abosede",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ADENIYI, Mary mojisola",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "OKEMAKINDE, Abiola rukayat",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "AMOS, Taiwo afolashade",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "OLATUNBOSUN, Tunrayo adeola",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "AHMOD, Olabisi marian",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "BAKARE, Titilope theresa",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ADEWOLE, Omotunde adewunmi",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ADEYEMI, Olujide alade",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "HAMEED, Aminat aderonke",
      "schoolOfPresentPosting": "Orile Keesi Grammar School(Snr), Olodo"
    },
    {
      "staffName": "OMITOGUN, Bolanle Oluwakemi.",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "AKINLOLU, Bukola atinuke",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "ABOYADE, Feyisayo veronica",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "IDOWU, Sakirat Folashade.",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "BELLO, Olatoye babajide",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEGUN, Kemi mariam",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "AKINBAMI, Felicia onyinyechi",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "ODEWOLE, Adijat atinuke",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "ADESENI, Adenike oluwaseun",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "OGUNSILE, Olukolade olatunbosun",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "SOBAYO, Christianah Bukola.",
      "schoolOfPresentPosting": "Iyewa High School Jnr. Ajilete"
    },
    {
      "staffName": "SOYEBO, Bilikis omobowale",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ADEBOLA, Adejoke eniolorunda",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ANYASI, Dorcas kikelomo",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "OMITOLA, Olumide sunday",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "IKUEBOLATI, Bayo david",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "OLAYEMI, Olufemi david",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "KUYE, Olalekan oluwatosin",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "ABOLADE, Nofisat Adeyemi.",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "ADESINA, Yetunde bunkayo",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "OGUNKOYA, Yemi Sola.",
      "schoolOfPresentPosting": "Simawa Community High School, Simawa"
    },
    {
      "staffName": "HASSAN, Oluwatoyin Enitan.",
      "schoolOfPresentPosting": "Olumo High School"
    },
    {
      "staffName": "OYERINDE, Adeoye Ola.",
      "schoolOfPresentPosting": "Yewa Secondary School (Junior)"
    },
    {
      "staffName": "OBISANYA, Oluwatoyin mary",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABIOLA-OLUDAINI, Tolulope aina",
      "schoolOfPresentPosting": "Ijagba Community High School, Sotubo"
    },
    {
      "staffName": "SORUNKE, Oluwaseun olatobi",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "ABDULFATAH, Mujirat Bode.",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ALATILEHIN, Abosede hannah",
      "schoolOfPresentPosting": "Ijebu-Ode Gram. Sch."
    },
    {
      "staffName": "AJIBOSO, Micheal olaniyi",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "IDOWU, Lukmon abiodun .f.",
      "schoolOfPresentPosting": "Area Comm. High Sch., Jnr, Owode"
    },
    {
      "staffName": "UWELU, Eruemulor philomena",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "ADEKUNLE, Titilayo elizabeth",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "EGUNJOBI, Akeem olatunji",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "AMAOBI, Omamuzo orevaoghene p",
      "schoolOfPresentPosting": "Area Comm. High Sch., Jnr, Owode"
    },
    {
      "staffName": "IKUESAN, Yomi samuel",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AJAYI, Oluwakemi idowu",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "SOWUNMI, Ebenezer oluwole",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEBIYI, Adebayo Kayode.",
      "schoolOfPresentPosting": "Titilayo Agbaje Memorial Comprehensive High School, Imosan"
    },
    {
      "staffName": "BANKOLE, Rasidat modupeola",
      "schoolOfPresentPosting": "Orita Community High School (Junior)"
    },
    {
      "staffName": "ONABANJO, Abosede omowunmi",
      "schoolOfPresentPosting": "Ansar-Ud-Deen High. Sch. Ijebu-Ode"
    },
    {
      "staffName": "ERINOSO, Atinuke taiwo",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "LAWANI, John kizito",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "RAJI, Olabisi wunmi",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "SHITTU, Oluwatoyin maryam",
      "schoolOfPresentPosting": "Community Grammar School, Ijebu - Ife"
    },
    {
      "staffName": "ADERIBIGBE, Mukaila tunde",
      "schoolOfPresentPosting": "Obanta Comprehensive High School Junior Awa Ijebu"
    },
    {
      "staffName": "ADELEKE, Akeem Abolore.",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "AYELAAGBE, Olalekan tunde",
      "schoolOfPresentPosting": "Ibogun Comprehensive High School,Egbeda"
    },
    {
      "staffName": "ORIDOTA, M. olubunmi",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "ALI, Olubunmi veronica",
      "schoolOfPresentPosting": "Ofada Community High School (Senior), Ofada"
    },
    {
      "staffName": "MUSTAPHA, Adesola afusat",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "OJO, Memunat nike",
      "schoolOfPresentPosting": "Ijebu-Ode Gram. Sch."
    },
    {
      "staffName": "ADEBANJO, Agnes Abosede.",
      "schoolOfPresentPosting": "Titilayo Agbaje Memorial Comprehensive High School, Imosan"
    },
    {
      "staffName": "SUNDAY, Adebayo emmanuel",
      "schoolOfPresentPosting": "Mayflower School (Senior),Ikenne"
    },
    {
      "staffName": "ANIMASHAUN, Adebomilehin temitope .b.",
      "schoolOfPresentPosting": "Simawa Community High School, Simawa"
    },
    {
      "staffName": "OGEDENGBE, Nimota omotayo. a",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ESAN, Moradeyo funke",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "OYEJOLA, Adetola abeni",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADENUGA, Oluwatoyin Mary.",
      "schoolOfPresentPosting": "Odopotu Community High School, Odopotu."
    },
    {
      "staffName": "ADEGBOYE, Olugbemi david",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "ADEGUNWA, Bukola Mariam.",
      "schoolOfPresentPosting": "Oke-Eri Comprehensive High School, Oke-Eri."
    },
    {
      "staffName": "OLUGBEWESA, H. adejoke",
      "schoolOfPresentPosting": "Anglican Girls Gram. Sch."
    },
    {
      "staffName": "RAIMI, Modinat abake",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "LAWAL, Ajibola saburi",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "OLUDOTUN, Olabisi iyabo",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "SHOWOLE, Fatimo lola",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "OKE, Emmanuel kolade",
      "schoolOfPresentPosting": "Ayetoro Community Grammar School (Junior)"
    },
    {
      "staffName": "ONASEGUN, Adedoyin Abosede.",
      "schoolOfPresentPosting": "Simawa Community High School, Simawa"
    },
    {
      "staffName": "IBRAHEEM, Abdul rasheed",
      "schoolOfPresentPosting": "Ofada Community High School (Senior), Ofada"
    },
    {
      "staffName": "OLUWADE, Olubukola damilola Omowunmi.",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "IDOWU, Olugbenga samuel",
      "schoolOfPresentPosting": "Ilese Comprehensive High School, Junior"
    },
    {
      "staffName": "ADEBARI, Adedoyin olufunke",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "FALOLA, Kehinde olawunmi",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ADEYANJU, Oluwakemi funmilayo",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "OLANREWAJU, Bolarinwa emmanuel",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ALADE, Adeola temitope",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "OLAOYE, Adefoluke omoyemi",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "RAJI, Azeezah olabisi",
      "schoolOfPresentPosting": "Agbara Community Junior High School, Edu"
    },
    {
      "staffName": "AKINWUNMI, Bosede folake",
      "schoolOfPresentPosting": "Batoro Community High School"
    },
    {
      "staffName": "BAMTEFA, Bukola elizabeth temitope",
      "schoolOfPresentPosting": "Agbara Community Senior High School, Edu"
    },
    {
      "staffName": "OLANIYI, Funmilayo abosede",
      "schoolOfPresentPosting": "Premier Grammar School (Snr)"
    },
    {
      "staffName": "AKINKUNMI, Ayodeji williams",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "MUMEEN, Tawakalitu olabisi",
      "schoolOfPresentPosting": "Christ Church High School"
    },
    {
      "staffName": "BELLO, Adetutu olabisi",
      "schoolOfPresentPosting": "Ijebu Muslim College, Ijebu-Ode"
    },
    {
      "staffName": "AKINYEMI, Deborah abosede",
      "schoolOfPresentPosting": "St. Peter'S College,(Jnr)"
    },
    {
      "staffName": "ADEYEMI, Niyi Tunde.",
      "schoolOfPresentPosting": "Obada Grammar School, Obada OBADA IDI-EMI"
    },
    {
      "staffName": "SONIRAN, Kehinde Kemi.",
      "schoolOfPresentPosting": "Ogunmakin High School (Junior), Sowunmi"
    },
    {
      "staffName": "OLUDIYA, Maria olukemi",
      "schoolOfPresentPosting": "United Comprehensive High School, Wasinmi."
    },
    {
      "staffName": "IDOWU, Abosede oluyemisi",
      "schoolOfPresentPosting": "Molipa High School, Ijebu-Ode"
    },
    {
      "staffName": "OTAYEMI, Yewande dolapo",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "KEHINDE-OYEYEMI, Adeyinka oredola",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ADENIYI, Olugbenga micheal",
      "schoolOfPresentPosting": "Ansar-Ud-Deen High School, Ijebu-Ode"
    },
    {
      "staffName": "ADENEKAN, Funmilola olaoluwa",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "LAWAL, Wasiu alabi",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "DAVID, Kehinde ibiyemi",
      "schoolOfPresentPosting": "Obanta Comprehensive High School Junior Awa Ijebu"
    },
    {
      "staffName": "AYORINDE, Ngozi",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ALLI-ADELE, B. olufunmilola",
      "schoolOfPresentPosting": "Ofada Community High School (Senior), Ofada"
    },
    {
      "staffName": "BANJOKO, Abosede adedoyin",
      "schoolOfPresentPosting": "Anglican Girls Gram. Sch."
    },
    {
      "staffName": "ADEOSUN, Ajibola Oluwaseun.",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "AIHONSU, Adeola omotola",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "ADEKANMBI, Saburi adebisi",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "AINA, Olufolake adebisi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEBOTE, Oni adewunmi",
      "schoolOfPresentPosting": "Anglican Comprehensive High School, Ikoto Snr"
    },
    {
      "staffName": "KEHINDE, Adesola noimot",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OGUNFOWODU, Olalekan sunday",
      "schoolOfPresentPosting": "Remo Secondary School"
    },
    {
      "staffName": "OLUTEMIRO, Omolara Temitope.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEDEJI, Grace olubukola",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "AJAYI, Temilade adeshola",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "ODUSOLA, Olusola grace",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "TAIWO, Gbemisola Yemisi.",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "SOREMEKUN, Aderonke mary",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "OYEKUNLE, Clara olufunmilayo",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "ALALADE, Mojisola Olu.",
      "schoolOfPresentPosting": "Oronna High School, Snr, Ilaro"
    },
    {
      "staffName": "SODEINDE, Mary abosede",
      "schoolOfPresentPosting": "Ansar-Ud-Deen High School, Ijebu-Ode"
    },
    {
      "staffName": "ADEBAYO, Olufunmilola wunmi",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "FALOLA, Oludare yemi michael",
      "schoolOfPresentPosting": "Ansar-Ud- Deen Grammar School"
    },
    {
      "staffName": "OGUNSEYE, Khadijat onikepo",
      "schoolOfPresentPosting": "Nawair-Ud-Deen Grammar School (Snr), Obantoko"
    },
    {
      "staffName": "ADEBAYO, Olajumoke elizabeth",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OGUNSANYA, Adekunle sunday",
      "schoolOfPresentPosting": "Gateway Secondary School, (Snr)"
    },
    {
      "staffName": "ADEWUYI, Adenike oluwaseun",
      "schoolOfPresentPosting": "Moraika Comprehensive High School, Atiba"
    },
    {
      "staffName": "NICHOLAS, Modupe Elizabeth.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "SOLUADE, Olasunkanmi sunday",
      "schoolOfPresentPosting": "Community High School"
    },
    {
      "staffName": "AKINWANDE, Olabisi remilekun",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "GANDONU, Lawrence dagbeyon",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ABAYOMI, Catherine Idowu.",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "MULERO, Abiodun Ayodeji.",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "OMIDIJI, Bamidele abimbola",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "RASAK-OYADIRAN, Fausat ayo",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "ILEPE, Bolanle rose",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "OGUNDE, Ogundare victor a.",
      "schoolOfPresentPosting": "Ogbogbo Baptist Grammar School, Senior."
    },
    {
      "staffName": "OSANYINBI, Ibrahim ola",
      "schoolOfPresentPosting": "Alamuwa Grammar School (Senior), Ado Odo"
    },
    {
      "staffName": "ADENIRAN, Tajudeen adewale",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "OGUNDIMU, Gabriel olubiyi",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "OWOADE, Tolulope yetunde",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "OYEYEMI, Kehinde bukola",
      "schoolOfPresentPosting": "Ifo High School (Junior), Ifo"
    },
    {
      "staffName": "FAYOMI, Oluwaseyi taiwo",
      "schoolOfPresentPosting": "African Church Grammar School (Jnr), Ita- Iyalode"
    },
    {
      "staffName": "ADESINA, Olugbenga johnson",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEWALE, Adebiyi adegbenga",
      "schoolOfPresentPosting": "Ansar-Ud-Deen High. Sch. Ijebu-Ode"
    },
    {
      "staffName": "OJO, Adedoyin adetutu",
      "schoolOfPresentPosting": "Sango Ota High School, (Snr)"
    },
    {
      "staffName": "ADEDOYIN, Olufunmilayo Deborah.",
      "schoolOfPresentPosting": "Egba Odeda High School (Snr), Odeda"
    },
    {
      "staffName": "ADEOYE, Adepeju t",
      "schoolOfPresentPosting": "Community Comprehensive High School, Atapele"
    },
    {
      "staffName": "ODEYEMI, Muinat adebukola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SOLANKE, Maryam iyabode",
      "schoolOfPresentPosting": "African Church Grammar School (Jnr), Ita- Iyalode"
    },
    {
      "staffName": "ADEYILOLA, O. iyabode",
      "schoolOfPresentPosting": "Orile Kemta Comprehensive High School (Jnr), Olugbo"
    },
    {
      "staffName": "OJELADE, Oluwatosin Ifedayo.",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "AKOMOLAFE, Oluwayemisi mary",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OGUNSOLA, Sunday abiodun",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SULAIMAN, Saidat oluwaseunfunmi",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "OWOYELE, Moruf adeshina",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "AJIBADE, Adeleke abiye emmanuel",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "ADEKEYE, Olanrewaju",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "ODETAYO, Kehinde omolola",
      "schoolOfPresentPosting": "Community High School, Moboluwaduro"
    },
    {
      "staffName": "FASOLA, Olamide ganiyat",
      "schoolOfPresentPosting": "Lafenwa High School (Jnr), Lafenwa"
    },
    {
      "staffName": "AYEDUN, Oluwaseyi samuel",
      "schoolOfPresentPosting": "Lafenwa High School (Jnr), Lafenwa"
    },
    {
      "staffName": "BAFUNSO, Abiodun babatunde",
      "schoolOfPresentPosting": "Salawu Abiola Comprehensive High School (Snr), Osiele"
    },
    {
      "staffName": "BAMIDELE, Adenike Adebimpe.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABOLADE, Yetunde adebukola",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "SODIYA, Adekunle samzdeen",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "TOYOBO, Iretiolu olasimbo",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ABIOLA, Ibukun olutomisin",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "AYODELE, Bolanle olayemi",
      "schoolOfPresentPosting": "Ososa Comprehensive High School, Ososa"
    },
    {
      "staffName": "MUSA, Hassan abolore",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OKE, Olawale adekunle",
      "schoolOfPresentPosting": "Ajogbo Grammar School (Junior)"
    },
    {
      "staffName": "OGUNPOLA, Oluseyi david",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "OKE, Elizabeth iyabode",
      "schoolOfPresentPosting": "Anglican Gramm, Sch. Ilaro"
    },
    {
      "staffName": "ADEBIYI, Abiodun samson",
      "schoolOfPresentPosting": "Orita Community High School (Junior)"
    },
    {
      "staffName": "OTESILE, Alice taiwo",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "ATANDA, Abiodun mariam",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OLORUNSOGO-OLUDE, Comfort anujehofa",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "OREYEMI, Abosede abiola",
      "schoolOfPresentPosting": "Luba Comprehensive School"
    },
    {
      "staffName": "SURAKAT-RAUFU, Kudirat Temitope.",
      "schoolOfPresentPosting": "St. Peter'S College,(Jnr)"
    },
    {
      "staffName": "OSOKO, Anuoluwapo bimpe",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "DEINDE-DIPEOLU, Mary aderonke ajoke",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "ALUKO, Dele bilikis",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "POPOOLA, Seye oladimeji",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "YINUSA, Taibat Mojisola.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "WAHAB, Muraina olawale",
      "schoolOfPresentPosting": "Egba Odeda High School (Snr), Odeda"
    },
    {
      "staffName": "ONADA, Modupe folake",
      "schoolOfPresentPosting": "Ilugun High School (Snr)"
    },
    {
      "staffName": "SONEYE, Olufunmilayo olapeju",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "OKUWA, Adebimpe olabisi",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "OGUNLEYE, Abosede taiwo",
      "schoolOfPresentPosting": "Raluwen High School, Atan."
    },
    {
      "staffName": "ADEOTI, Comfort iyabo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OTULANA, Abiodun elizabeth",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "ADEBOYE, Kudirat temitope",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "POPOOLA, Ayoka catherine",
      "schoolOfPresentPosting": "St. Peter'S College,(Jnr)"
    },
    {
      "staffName": "ADEBAYO, Adewale david",
      "schoolOfPresentPosting": "African Church Grammar School (Jnr), Ita- Iyalode"
    },
    {
      "staffName": "ADENIJI, Mathew adewumi",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "BANJO-OLAITAN, Esther Abosede.",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "AKIODE, Abosede funmilayo",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "OLAWALE, Monsuru alabi",
      "schoolOfPresentPosting": "Adenrele High Schoo (Junior), Ifo"
    },
    {
      "staffName": "OLUWADUYILEMI, Susan yemi",
      "schoolOfPresentPosting": "Comprehensive High School (Snr) Ijebu Ife"
    },
    {
      "staffName": "OLUKOYA, Oludaisi alaba b.",
      "schoolOfPresentPosting": "Raluwen High School, Atan."
    },
    {
      "staffName": "AKIN -OYELADE, Oluyemisi omoniyi",
      "schoolOfPresentPosting": "Iyesi-Ota High School,Iyesi  -Ota Situation Report On Public Sec. Schools."
    },
    {
      "staffName": "SALISU, Nureni agboola",
      "schoolOfPresentPosting": "Anglican Girls Grammar School"
    },
    {
      "staffName": "ASIPA, Adeyinka olanrewaju",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OYEWOLE, Isaac olufemi",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "MAKINDE, Adewunmi funmi",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "RAHEEM, Fatimat Temilola.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "BAKARE, Sekinat Olayinka.",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "TEREBO, Ayodele Gbeminiyi.",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "BELLO, Risqat afolake",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OSE, Adedoyin Adetutu.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "SOMOYE, Yusuf olatunji",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "OGUNFUWA, Modupe abosede",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLUWALOGBON, Josephine oluwatobi",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "AKINWILLIAMS, Deborah oseyemi",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "EMUELOSI, Adenike omolara",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "OLUGBEMI, Omolola olufunmilayo",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "OLALOWO, Maria  Oluwakemi.",
      "schoolOfPresentPosting": "Community Sec Oko Baale"
    },
    {
      "staffName": "OYELUDE, Oluwadamilola olajumoke",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "KAFAR, Morenikeji olusola",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "OMIKUNLE, Elizabeth alaba folorunso",
      "schoolOfPresentPosting": "Methodist High School, Ogbe"
    },
    {
      "staffName": "ADEOSUN, Akinyemi olakunle",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "SOWANDE, Adetutu taiwo",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "ADEYEMI, Oluwaseun ifeoluwa",
      "schoolOfPresentPosting": "Community High School (Senior), Ibafo"
    },
    {
      "staffName": "OJO, Abiodun Abisoye.",
      "schoolOfPresentPosting": "Ehin-Osun Community High School, Egbeda-Ojelana"
    },
    {
      "staffName": "OPAYEMI, Bukola Christianah.",
      "schoolOfPresentPosting": "United High School (Senior)L, Ikenne"
    },
    {
      "staffName": "OGUNLEYE, Sururat motunrayo",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "ADEBAYO, Khadeejah",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ADEDOKUN, Temitope C.",
      "schoolOfPresentPosting": "Community High School,Igbala"
    },
    {
      "staffName": "GBOLAGADE-TAIWO, Morufat temitope",
      "schoolOfPresentPosting": "Ansar-Ud-Deen. Comprehensive College (Junior), Ota"
    },
    {
      "staffName": "SALAMI, Kamoru jimoh",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "KAZEEM, Bosede adedoyin",
      "schoolOfPresentPosting": "Araromi Community High School, Orita"
    },
    {
      "staffName": "ILORI, Adenike eniola",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "IDOGBE, Temitayo. a",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "BADA, Rasheed akanni",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "OYETUNJI, Benjamin seye",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "FALEYE, Olusola olufunmilola",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "BADEJO, Abiodun Solomon.",
      "schoolOfPresentPosting": "Ikenne Community High School(Junior), Ikenne"
    },
    {
      "staffName": "SHOBOLA, Akinsola sunday",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "OLASODE, Gbolahan moses",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "OLADIPUPO, Aishat Yetunde.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "LAWAL, Olufunmilayo lola",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "ADEBIYI, Grace A.",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AYODEJI-OYALOWO, Hafsat Abolore.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "ADEYANJU, Grace bukola",
      "schoolOfPresentPosting": "Omu-Ajose Comprehensive High School, Odogbolu"
    },
    {
      "staffName": "BAMIDELE, Kudirat taiwo",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "AJAYI, Opeyemi Timothy.",
      "schoolOfPresentPosting": "Egba Odeda High School (Snr), Odeda"
    },
    {
      "staffName": "SOMIDE, Titilayo Risikat.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ODUNTAN, Kehinde busola",
      "schoolOfPresentPosting": "Anglican Comprehensive High School, Ikoto Snr"
    },
    {
      "staffName": "ADEYEMI, Makanjuola omolola",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "AWONIYI, Hannah oluwatosin",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AJAYI, Omobola abosede",
      "schoolOfPresentPosting": "Alamuwa Grammar School (Junior), Ado Odo"
    },
    {
      "staffName": "OKE, Oluwafunmilayo Olanike omolara.",
      "schoolOfPresentPosting": "Egba Odeda High School (Snr), Odeda"
    },
    {
      "staffName": "ABIODUN-ADU, Oluwaseyi ele",
      "schoolOfPresentPosting": "Orile Keesi Grammar School(Snr), Olodo"
    },
    {
      "staffName": "ADEYEMI, Temitope florence",
      "schoolOfPresentPosting": "Armyday Secondary School, (Snr)"
    },
    {
      "staffName": "OGUNBONA, Oluseyi samuel",
      "schoolOfPresentPosting": "Premier Grammar School (Jnr), Lafenwa"
    },
    {
      "staffName": "ADEDEJI, Adeyemi abiola",
      "schoolOfPresentPosting": "Idi- Emi High School"
    },
    {
      "staffName": "BANKOLE, Abiodun oladipo",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEOSUN, Adiat temitope",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ALLI, Modupe yejide",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "ADENAIKE, Bolanle christianah",
      "schoolOfPresentPosting": "Ijagba Community High School, Sotubo"
    },
    {
      "staffName": "OLUSANYA, Taiwo adekunle",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AKINLABI, Adepeju Damilola.",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "AJIBOLA, Oluwaseun Esther.",
      "schoolOfPresentPosting": "Community High School, Agada"
    },
    {
      "staffName": "SULE, Tajudeen adewale",
      "schoolOfPresentPosting": "Itele High School (Snr) Itele Ijebu"
    },
    {
      "staffName": "ABIODUN, Amidat Olabimpe.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABIOYE, Oluwagbemiga abiodun",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "OGUNFODUNRIN, Adeyinka oluwakemi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AGBEDEJOBI, Olabisi oladunni omolara",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "ADELEYE, Abiodun arike",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "MACJOB, Oluwatoyin christinah",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "IDOWU, Morenikeji abosede",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "IDOWU, Mogbonjubola Racheal.",
      "schoolOfPresentPosting": "Alaari High School, Alaari"
    },
    {
      "staffName": "OLUTUNDE, Fehintola bosede",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "KILASHO, Abosede a.",
      "schoolOfPresentPosting": "Muslim High School, Isolu"
    },
    {
      "staffName": "ADESANYA, Ikeola Oluwatoyin.",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "ESE, Oluwaseun abosede",
      "schoolOfPresentPosting": "Ajagbe High School,Iperu"
    },
    {
      "staffName": "AMOLE, Theophilus olufolarin",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "ADENIRAN, Muinat folasade",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "OGUNJIMI-ADEBAYO, Elizabeth yetunde",
      "schoolOfPresentPosting": "Batoro Community High School"
    },
    {
      "staffName": "OGUNYANKINNU, Deborah oluwafunmilayo",
      "schoolOfPresentPosting": "Anglican Girls Gram. Sch."
    },
    {
      "staffName": "OLAJIDE, Abosede idowu",
      "schoolOfPresentPosting": "Egba Obafemi Community High School (Junior), Obafemi"
    },
    {
      "staffName": "LAWAL, Bilikisu abiodun",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AKINDELE, Samson Sola.",
      "schoolOfPresentPosting": "Oronna High School, Jnr, Ilaro"
    },
    {
      "staffName": "IDOWU, Kabirat agbeke",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "OGUNLADE, Tosin tobiloba",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "EGUNJOBI, Felicia Omolola.",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEBAYO, Abiodun Adetoyin.",
      "schoolOfPresentPosting": "Ifo High School (Senior), Ifo"
    },
    {
      "staffName": "EMMANUEL-LESHI, Oluseun omowunmi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "JAYEOLA, Abiodun victoria",
      "schoolOfPresentPosting": "Igbore Robiyan Community High School, Robiyan"
    },
    {
      "staffName": "OSISANWO, Adefemi akindele",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "USMAN, Modinat amoke",
      "schoolOfPresentPosting": "Macjob Grammar School, Onikolobo"
    },
    {
      "staffName": "ADETUGA, Richard temitope",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "BALOGUN-KAREEM, Olawale",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEYEMI, Florence adedayo",
      "schoolOfPresentPosting": "Comprehensive High School (Jnr) Ijebu Ife"
    },
    {
      "staffName": "ONIKOSI, Abiodun olalekan",
      "schoolOfPresentPosting": "Our Lady Of Apostles Secondary School"
    },
    {
      "staffName": "SOMOYE, Adeolu a.",
      "schoolOfPresentPosting": "Ifo High School (Senior), Ifo"
    },
    {
      "staffName": "AKINDE, Silifat funmilayo",
      "schoolOfPresentPosting": "Gateway Secondary School, (Snr)"
    },
    {
      "staffName": "ABIODUN, Funmilayo abosede",
      "schoolOfPresentPosting": "Ifo High School (Senior), Ifo"
    },
    {
      "staffName": "AKINOLA, Sola kolawole",
      "schoolOfPresentPosting": "Muslim High School, Isolu"
    },
    {
      "staffName": "AKINSANYA, Deborah olufunmilayo",
      "schoolOfPresentPosting": "Muslim High School, Isolu"
    },
    {
      "staffName": "AKINYEMI, Folasade Omobolanle.",
      "schoolOfPresentPosting": "Ilugun High School (Snr)"
    },
    {
      "staffName": "AKINWUNMI, Modupe deborah",
      "schoolOfPresentPosting": "Itoki Community High  School(Senior), Itoki."
    },
    {
      "staffName": "FAGBIRE, Stephen olugbenga",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "OGUNSOLU, Safiat o.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "BABATUNDE, Adi  bolanle",
      "schoolOfPresentPosting": "Anglican Grammar School (Junior), Ota"
    },
    {
      "staffName": "OLALEYE, Olusola esther",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OGBON, Racheal adeola",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "AYELABOLA, Abosede Doyin.",
      "schoolOfPresentPosting": "Ogunmakin High School (Senior), Sowunmi"
    },
    {
      "staffName": "BANKOLE, Emmanuel adegoke akineyin",
      "schoolOfPresentPosting": "Ilugun High School (Jnr), Elega"
    },
    {
      "staffName": "AFOLABI, Asisat oluwaseun",
      "schoolOfPresentPosting": "Saint Leo’s College, Onikoko"
    },
    {
      "staffName": "ALI, Oluwakemi adufe",
      "schoolOfPresentPosting": "African Church Grammar School (Senior)"
    },
    {
      "staffName": "OLALEYE, Christianah taiwo",
      "schoolOfPresentPosting": "Ifo High School (Senior), Ifo"
    },
    {
      "staffName": "AJAYI, Dorcas Opeyemi.",
      "schoolOfPresentPosting": "Alamuwa Grammar School (Senior), Ado Odo"
    },
    {
      "staffName": "FOLARIN, Samuel oluseyi",
      "schoolOfPresentPosting": "Unity High School,(Jnr)"
    },
    {
      "staffName": "JAIYESIMI, Oluwafunmilayo abosede",
      "schoolOfPresentPosting": "Muslim High School"
    },
    {
      "staffName": "JOSEPH, Atinuke elizabeth",
      "schoolOfPresentPosting": "Muslim High School"
    },
    {
      "staffName": "AKINYOSADE, O. olabisi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OGUNFODUNRIN, Toyin sola",
      "schoolOfPresentPosting": "Itamerin Comprehensive High School Junior Oru Ijebu"
    },
    {
      "staffName": "ADEBAYO, Omotayo funmilola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEGUN, Oluwakemi motolani",
      "schoolOfPresentPosting": "Owode Sec. School Jnr., Owode"
    },
    {
      "staffName": "ONISURU, Adebukola Olubunmi.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "IBRAHIM, Sherifat dupe",
      "schoolOfPresentPosting": "Community High School,Igbala"
    },
    {
      "staffName": "ADEKANMBI, Bolanle afolasade",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "AGBOOLA, Victoria iyabode",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "IDOWU, Olukunle bayo",
      "schoolOfPresentPosting": "Ijebu Muslim College, Ijebu-Ode"
    },
    {
      "staffName": "ADEBAYO, Itunnu ayobami",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "AKINREMI, Babalola tunde",
      "schoolOfPresentPosting": "Ifedapo Community Comprehensive High School, Ajegunle-Abalabi."
    },
    {
      "staffName": "EKEADA, Olawunmi Olabisi.",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "JESUDAINI, Olatunbosun Mosebolatan.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "FOLARIN, Kehinde busola",
      "schoolOfPresentPosting": "African Church Comm. H. School"
    },
    {
      "staffName": "OGUNYANWO, Ifetayo ijaola",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEOSUN, Oluwakemi maria",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SANYAOLU, Adebimpe kafayat",
      "schoolOfPresentPosting": "Iganmode Grammar School (Senior), Ota"
    },
    {
      "staffName": "AKINDELE, Oluwaseun Olatunji.",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "AJAO, Hannah yemi",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "OLUBOYO, Adenike olayinka",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLAWOLU, Agness",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "ODURONBI, Oluyemi olaniyi",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "AJAYI, Oluseun emmanuel",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "OGUNRINU, Mayowa omolola",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "ADENAIKE, Christianah bukola",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "YINUSA, Christiana olusola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "RABIU, Bolanle busola",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ABIOLA, Olusola motunrola",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "OLISA, Abiola Sakirat.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "AKINYEMI, Oluyemisi aderemi",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "KARUNWI, Temitope serifat",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "KUFORIJI, Grace iyabo",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "ONAKOYA, Mojisola abidemi",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "AJENIFUJA, Sulaiman Oluwaseun.",
      "schoolOfPresentPosting": "Ilewo Community High School"
    },
    {
      "staffName": "OGUNTOLA, Sola ganiyat",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ERINOSO, Olusola Christianah.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "OLOWOLAGBA, Adebola nofiu",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "OMOYIWOLA, Bukola christianah",
      "schoolOfPresentPosting": "Alagbagba Community High School, Alagbagba"
    },
    {
      "staffName": "POPOOLA, Catherine tina",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "NEMEDIA, Odegua omoyemi  regina",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "SOTOMI, Opeyemi taiwo",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "RAHEEM, Omolara Modupe.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ONIFADE, Omobola Oluwayemisi.",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "ADEBAYO, Toyin Tunrayo.",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "OLATUNJI, Bilikisu bimpe",
      "schoolOfPresentPosting": "Oke- Ona Grammar School"
    },
    {
      "staffName": "ADEGBOYEGA, Zainab bolanle",
      "schoolOfPresentPosting": "Methodist Comprehensive College"
    },
    {
      "staffName": "BELLO, Felicia Olabisi.",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ADELEKE, Adedoyin",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "AKINNIRE, Kehinde kemi",
      "schoolOfPresentPosting": "Alaye High School"
    },
    {
      "staffName": "OJUOLA, David abayomi",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "BELLO, Folake adetayo",
      "schoolOfPresentPosting": "Egba Odeda High School (Jnr), Odeda"
    },
    {
      "staffName": "SHOWUNMI, Bolanle oluwafunmilayo",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "MARTINS, E. olugbemisola",
      "schoolOfPresentPosting": "Community High School,Okungbolu"
    },
    {
      "staffName": "ONI, Adijat R..",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "OGUNDIMU, Olubunmi kemi",
      "schoolOfPresentPosting": "Papalanto High School (Junior), Papalanto."
    },
    {
      "staffName": "ODEYEMI, Jemilat asake",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "ADEYEMI, Oluwaseun lydia",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "ADERINWALE, Isiwat olawanle",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "GABRIEL, Ola ayodele",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLOWU, Eshter Adenike.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AKHALU, Faith Ofe.",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "OGUNSOLA, Bukola adeola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADENIYI, Olufolake  aderike",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "AJAYI, Oluwakemi morenike",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADAM, Bamidele mutiu",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "SHITTU, Victoria yemi",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "EESUOLA, Gbonjusola oluwamayowa",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "OGUNDORO, Comfort Iyabo.",
      "schoolOfPresentPosting": "Olorunda Community Comprehensive High School, Olorunda."
    },
    {
      "staffName": "ADEMOLA, Abiose ike oluwa",
      "schoolOfPresentPosting": "Anglican Grammar School Snr Okenla"
    },
    {
      "staffName": "JIMOH, Kadijat omonike",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SOMEFUN, Esther adenike",
      "schoolOfPresentPosting": "Saapade Grammar School"
    },
    {
      "staffName": "OYEWUMI, Sarafa adeniyi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ANFELA, Mary toyin",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ODEWOLE, Gbenga ezekiel",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEKUNLE, Oluwaseyi Adesanjo.",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "KEHINDE, Comfort Busola.",
      "schoolOfPresentPosting": "Ijemo-Titun High School, Housing Estate, Ibara"
    },
    {
      "staffName": "OLUSANYA-ISEOLUWA, Titlayo anike",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "EGBEWUNMI, James Oluwole.",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OYEYEMI, Oluwayemisi florence",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "OLAGUNJU, Abosede omolabake",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "ARAOYE, Deborah Funmilayo.",
      "schoolOfPresentPosting": "Nazareth High School, Imeko."
    },
    {
      "staffName": "OLADIPO, Adebisi folake",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "BAKENNE, Ismaeel adedolapo .o.",
      "schoolOfPresentPosting": "St. Peter'S College,(Jnr)"
    },
    {
      "staffName": "SOMOYE YUSUF, Taiwo Nimotalahi.",
      "schoolOfPresentPosting": "Oke- Ona Grammar School"
    },
    {
      "staffName": "OLANREWAJU, Serifat adebunmi",
      "schoolOfPresentPosting": "Ilugun High School (Jnr), Elega"
    },
    {
      "staffName": "IWAYEMI, Folasade Chistianah.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "ADEYANJU, Sunday emmanuel",
      "schoolOfPresentPosting": "Ojumo Community Secondary School Ihunbo"
    },
    {
      "staffName": "OLOKODANA, Iyabode comfort",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "SULAIMON, Lateefat oluwabunmi",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "OKUBADEJO, Olugbenga adeniyi",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "IBRAHIM, Oluwasola Serifat.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "FALAJU, Christianah oluwatoyin",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "EWULO, Ayorinde oyeyinka",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "ABDULKAREEM, Daud Muhammed.",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AINA, Memunat bolanle",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "FATOYINBO, Christianah seyi",
      "schoolOfPresentPosting": "Ibiade Comprehensive High School, Ibiade"
    },
    {
      "staffName": "OLATUNBOSUN, Kehinde oluwakemi",
      "schoolOfPresentPosting": "Premier Grammar School (Jnr), Lafenwa"
    },
    {
      "staffName": "ADESEGUN, Oluwayemisi caroline",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "AKINWUNMI, Folake oyinkan",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "OLUSANYA, Iseoluwa adebayo",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "MATEMILOLA, Adeniyi emmanuel",
      "schoolOfPresentPosting": "Papalanto High School (Senior), Papalanto."
    },
    {
      "staffName": "SALAMI, Hakeem olatunji",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OLAITAN, Emmanuel adebayo o.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ENABOR, Ehiodion lawrence",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "WAHAB, Oyebimpe ola",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "OLUWOLE, Victoria adenike",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AKINWUNMI, Samuel  oluwagbenga",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "BAFUNSO, Olawale basiru",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "OLADEINDE, Adenike abosede",
      "schoolOfPresentPosting": "Community Comprehensive High School, Owowo."
    },
    {
      "staffName": "AWONUGA, Olukemi omiladun",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OLANREWAJU, Ponle Funmilola.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "GBADEBO, Abayomi oluwadare",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEBAJO, Titilayo seun",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "OGUNDIPE, Abidemi bolanle",
      "schoolOfPresentPosting": "Shamsudeen Grammar School Junior Ijebu-Igbo"
    },
    {
      "staffName": "OMOTOSHO, Bukola Janet.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ABEGUNRIN, Kifuli a",
      "schoolOfPresentPosting": "Nazareth High School, Imeko."
    },
    {
      "staffName": "BANJOKO-AKINTOMIDE, Morayo",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "OLANIYI, Tunde rauf",
      "schoolOfPresentPosting": "Community High School, Odewale"
    },
    {
      "staffName": "AKINLOTAN, Bolanle funmilayo",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "TOLORUNLOGO, Elizabeth Olayinka.",
      "schoolOfPresentPosting": "Isanbi Comprehensive High School(Senior),Ilishan"
    },
    {
      "staffName": "ADEMOLA, Bukola omowunmi",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "AKINOSHO, Temilola tolulope",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "KOMOLAFE, Omolara tope",
      "schoolOfPresentPosting": "Oronna High School, Jnr, Ilaro"
    },
    {
      "staffName": "AKANAN, Oluwaseun titilayo",
      "schoolOfPresentPosting": "Nazareth High School, Imeko."
    },
    {
      "staffName": "OLAYODE, Temitope Tunde.",
      "schoolOfPresentPosting": "Irolu Community High School,Irolu"
    },
    {
      "staffName": "OKE, Oluwakemi sola",
      "schoolOfPresentPosting": "Salawu Abiola Comprehensive High School (Snr), Osiele"
    },
    {
      "staffName": "ELEYELE, Bernice asani",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SOREMEKUN, Olubukola elizabeth",
      "schoolOfPresentPosting": "African Church Grammar School (Senior)"
    },
    {
      "staffName": "ADEKANMBI, Deborah olanrewaju",
      "schoolOfPresentPosting": "Area Community High School"
    },
    {
      "staffName": "ODUBENA, Foluke mary",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEOSUN, Tolulope omolara",
      "schoolOfPresentPosting": "Baptist Girls' College School, Idi Aba"
    },
    {
      "staffName": "AKHALUMHE, Deborah oluwabunmi",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "OLATUNJI, Kolawole olusola",
      "schoolOfPresentPosting": "Ketu College (Senior)"
    },
    {
      "staffName": "LATEEF, Kazeem a.",
      "schoolOfPresentPosting": "Muslim High School"
    },
    {
      "staffName": "VINCENT, Mary toyin",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OJO, Oluwakemi S..",
      "schoolOfPresentPosting": "Simawa Community High School, Simawa"
    },
    {
      "staffName": "OKUNLOLA, Olubukola atinuke",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "TUNDE, Talabi abigail",
      "schoolOfPresentPosting": "Odopotu Community High School, Odopotu."
    },
    {
      "staffName": "ONI, Oloruntoyin adewunmi",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "OLADAPO, Sarah olubunmi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADENIJI, Adenike ajoke",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "ADEWALE, Gbenga Phillips.",
      "schoolOfPresentPosting": "Anglican Grammar School (Junior) Okenla"
    },
    {
      "staffName": "TAIWO, Bose patience",
      "schoolOfPresentPosting": "Abeokuta Girls Grammar School, Onikolobo"
    },
    {
      "staffName": "AJULOLA-AKINDELE, Oluwabusayo oluwafunmike",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "AWOSILE, Yetunde gbemisola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OYETUNJI, Ayobami tosin",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "ALADESUYI, Adeola oriyomi",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "KEHINDE, Gbolahan david",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "HASSAN, Mojisola Oluwatoyin.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "JONATHAN, Esther foluso",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "ONITILO, Ibrahim abiodun",
      "schoolOfPresentPosting": "Fowoseje Comprehensive High School Senior Ago Iwoye"
    },
    {
      "staffName": "AKINDELE, Samson",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "AWOYEMI, Ganiyat ajoke",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ABODUNRIN, Tolulope Olusola.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLADEINDE, Deborah abosede",
      "schoolOfPresentPosting": "Ebenezer Grammar School, (Snr)"
    },
    {
      "staffName": "OLALEKAN, Sunday olasunkanmi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "AHMED, Aminat Yemi.",
      "schoolOfPresentPosting": "Premier Grammar School (Jnr), Lafenwa"
    },
    {
      "staffName": "TELLA, Bolanle folasade",
      "schoolOfPresentPosting": "Oke - Odan Gram. Sch"
    },
    {
      "staffName": "OLAYEMI, Abosede adenike",
      "schoolOfPresentPosting": "Adeola Odutola College"
    },
    {
      "staffName": "ADEYEMI, Olusoji samuel",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEKOYA, Yetunde Morenike.",
      "schoolOfPresentPosting": "Community High School,Igbala"
    },
    {
      "staffName": "ANIMASAUN, Semiu Olasunkanmi.",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ODEDELE, Bosede olanike",
      "schoolOfPresentPosting": "Saint John'S Anglican High School, Kuto"
    },
    {
      "staffName": "ADEBARI, Musibau abiodun",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "AYEDE, Kayode adedbayo",
      "schoolOfPresentPosting": "Saje High School, Saje"
    },
    {
      "staffName": "ONANUGA, Samsam adeolu",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "FASASI, Abosede b.",
      "schoolOfPresentPosting": "Agunbiade Victory High School, Magbon"
    },
    {
      "staffName": "MORAFA, Oluseye sunday",
      "schoolOfPresentPosting": "Ogijo Community High School"
    },
    {
      "staffName": "FADIPE, Victoria tunmise",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OLAOFE, Sulaiman olawale",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OLOGUNEBI, Olayide omobolanle",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SORINDE, Olubunmi Adebukola.",
      "schoolOfPresentPosting": "Igbore High School, Igbore"
    },
    {
      "staffName": "ADEBAYO, Bolanle Sakirat.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "FALANA, Nusirat kikelomo",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "FATOKUN, Johnson ajewole",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OMITOGUN, Olaniyi ghaffar",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "TORIOLA, Modupe Rebecca.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "AJAYI, Janet opeyemi",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "LESHI, Deborah funmilayo",
      "schoolOfPresentPosting": "Catholic Comprehensivve High School, Panseke, Ibara"
    },
    {
      "staffName": "OLUMUYIWA, Janet olubusayo",
      "schoolOfPresentPosting": "Asero High School, Asero"
    },
    {
      "staffName": "BANKOLE, Mudupola abosede",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "MASANWO, Modupe elizabeth",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "SOYINKA, Mukaila olatunji",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "AKINTOLA, Fatai adigun",
      "schoolOfPresentPosting": "Lisabi Grammar School, Idi Aba"
    },
    {
      "staffName": "OLUFUNMI, Nurudeen olugbemiga",
      "schoolOfPresentPosting": "Adie Owe Comm High School"
    },
    {
      "staffName": "Mrs. YUSUFF,  Oyebola  I.",
      "schoolOfPresentPosting": "Unity High School,(Jnr)"
    },
    {
      "staffName": "AFELUYI, Taiwo abosede",
      "schoolOfPresentPosting": "Lantoro High School, Lantoro"
    },
    {
      "staffName": "EJIOFOR, Hycienta c",
      "schoolOfPresentPosting": "Muslim Grammar School, Imeko"
    },
    {
      "staffName": "WAHAB, Semiu olalekan",
      "schoolOfPresentPosting": "Oronna High School, Snr, Ilaro"
    },
    {
      "staffName": "KEHINDE, Ibukun omolola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ADEYEMI, Oluwatobi elizabeth",
      "schoolOfPresentPosting": "Abeokuta Grammar School, Idi Aba"
    },
    {
      "staffName": "OKEOWO, Owolabi michael",
      "schoolOfPresentPosting": "Deyo-Tuwo Comprehensive High School, Junior"
    },
    {
      "staffName": "ABIDEMI, Olufemi Abiodun.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OJELEYE, Folake kemi",
      "schoolOfPresentPosting": "Nawair-Ud-Deen Grammar School (Jnr), Obantoko"
    },
    {
      "staffName": "ALEBIOSU, Samson abiodun",
      "schoolOfPresentPosting": "Ijebu Muslim College, Ijebu-Ode"
    },
    {
      "staffName": "ADENEKAN, Ismail Abidemi.",
      "schoolOfPresentPosting": "Nawair-Un-Deen High School, Isabo"
    },
    {
      "staffName": "SOFOLUWE, Oluwatoyin oluwaseun",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "ADEYEMI, Oluwafunmike Florence.",
      "schoolOfPresentPosting": "Anglican High School, Quarry Road, Ibara"
    },
    {
      "staffName": "AZEEZ, Ayodeji Shakirudeen.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OWODUNNI, Aminat Ayobami.",
      "schoolOfPresentPosting": "Itele High School (Snr) Itele Ijebu"
    },
    {
      "staffName": "AKINTOLA, Moyosoreoluwa Micheal.",
      "schoolOfPresentPosting": "Egba Comprehensive High School, Asero"
    },
    {
      "staffName": "OYAJINMI, Bola Nofiu.",
      "schoolOfPresentPosting": "Community Secondary School, Ipokia"
    },
    {
      "staffName": "ADEBANJO, Ibraheem Abiodun.",
      "schoolOfPresentPosting": "Oke-Imobi Community Grammar School, Terelu-Imobi"
    },
    {
      "staffName": "OLANIYAN, Babatunde Dare.",
      "schoolOfPresentPosting": "Oke - Odan Gram. Sch"
    },
    {
      "staffName": "FATOYE, Oluwakemi hannah",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "OMOLE, Omotola Jumoke.",
      "schoolOfPresentPosting": "Male Comprehensive High School(Senior), Igbesa."
    },
    {
      "staffName": "OBASOLA, Ganiyat Adejoke.",
      "schoolOfPresentPosting": "Ketu Community High School"
    },
    {
      "staffName": "AKINLADE, Adewale Gbenga.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "ODUNEWU, Monsurat Funke.",
      "schoolOfPresentPosting": "Sango Ota High School, (Snr)"
    },
    {
      "staffName": "OYEBANJO, Folasade Abosede.",
      "schoolOfPresentPosting": "Oke-Imobi Community Grammar School, Terelu-Imobi"
    },
    {
      "staffName": "ADEDEJI, Grace abosede",
      "schoolOfPresentPosting": "Ajogbo Grammar School (Junior)"
    },
    {
      "staffName": "ABIODUN, Olubunmi Elizabeth.",
      "schoolOfPresentPosting": "Tayese Community Secondary School, Ibatefin"
    },
    {
      "staffName": "AJISEGIRI, Victoria abiodun",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "FAGBOLA, Kehinde oluwakemi",
      "schoolOfPresentPosting": "Ijebu Muslim College, Ijebu-Ode"
    },
    {
      "staffName": "AKINFOLARIN, Esther Adenike.",
      "schoolOfPresentPosting": "Sonyindo Community High School"
    },
    {
      "staffName": "AJAYI, Opeyemi Dorcas.",
      "schoolOfPresentPosting": "Yewa Secondary School (Senior)"
    },
    {
      "staffName": "ADEYE, Sunday emmanuel .a.",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OGUNPITAN, Temitope Khadijat.",
      "schoolOfPresentPosting": "St. Kizito'S High School, Iwopin."
    },
    {
      "staffName": "OLAYINKA, Oluwayomi Johnson.",
      "schoolOfPresentPosting": "Reverend Kuti Memorial Grammar School, Isabo"
    },
    {
      "staffName": "OGUNLOLA, Sunday adekunle peter",
      "schoolOfPresentPosting": "Remo Secondary School"
    },
    {
      "staffName": "BAMIDURO, Oluyemisi Temitayo.",
      "schoolOfPresentPosting": "Iju Ebiye High School (Senior), Iju, Ota"
    },
    {
      "staffName": "OLALEYE, Emmanuel Abiodun.",
      "schoolOfPresentPosting": "Adeoye Lambo Memorial High School, Obada-Oko."
    },
    {
      "staffName": "SHEYIN, Ade Adeniji.",
      "schoolOfPresentPosting": "Itebu Manuwa Comprehensive High School, Itebu Manuwa"
    },
    {
      "staffName": "SANNI, Bilikisu temitayo",
      "schoolOfPresentPosting": "Baptist Boys' High, Saje"
    },
    {
      "staffName": "ADEYEMI, Victoria Oluwaseun.",
      "schoolOfPresentPosting": "Ajiboyede Comprhensive High School"
    },
    {
      "staffName": "SHOBANDE, Aduraleke Tunde.",
      "schoolOfPresentPosting": "Pakoto High School (Senior), Ayede"
    },
    {
      "staffName": "OLAYANJU, Segun Olatunde.",
      "schoolOfPresentPosting": "Ado-Odo High School (Senior), Ado-Odo"
    },
    {
      "staffName": "ABORISADE, Adenike Oluwaseun.",
      "schoolOfPresentPosting": "St Michael'S High School,Ota"
    },
    {
      "staffName": "OKE, Michael maunapon",
      "schoolOfPresentPosting": "Community High School, Tube"
    },
    {
      "staffName": "AKINWANDE, Safiriyu yemi",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OGUNGBADE, Maria  bola",
      "schoolOfPresentPosting": null
    },
    {
      "staffName": "OYEDOKUN, William tunde",
      "schoolOfPresentPosting": "Community Secondary School, Ipokia"
    },
    {
      "staffName": "OJELEYE, Bukola Atinuke.",
      "schoolOfPresentPosting": "St. Stephen Comprehensive High School(Junior), Ado-Odo."
    },
    {
      "staffName": "ODUWAIYE, Miniru tunde",
      "schoolOfPresentPosting": "Community Grammar School, Aiyepe"
    },
    {
      "staffName": "OKUSANYA, Samuel Ayo.",
      "schoolOfPresentPosting": "Community High School, Idi-Ayin."
    },
    {
      "staffName": "ADEMILUA, Funmilayo ajoke",
      "schoolOfPresentPosting": null
    }
  ] 
  jsonToCSV(abeokutaStaffNamesAndPreviousSchools)

