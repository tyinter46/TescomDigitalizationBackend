function parseCsvLine(line) {
    const result = [];
    let current = '';
    let inQuote = false;
  
    for (let char of line) {
      if (char === '"' && !inQuote) {
        inQuote = true;
      } else if (char === '"' && inQuote) {
        inQuote = false;
      } else if (char === ',' && !inQuote) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    if (current) {
      result.push(current.trim());
    }
    return result;
  }
  
  function csvToJson(csv) {
    const lines = csv.split('\n');
    if (lines.length === 0) return [];
  
    const headers = parseCsvLine(lines[0]);
    const result = [];
  
    for (let i = 1; i < lines.length; i++) {
      const trimmedLine = lines[i].trim();
      if (!trimmedLine) continue;
  
      const values = parseCsvLine(trimmedLine);
      const obj = {};
  
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j] || '';
      }
  
      result.push(obj);
    }
  
    return result;
  }
  const csvData =`staffName,schoolName,
"ABASS, Abayomi olajuwon",,
"ABAYOMI, Gboyega gbenga",,
"ABDUL-AZEEZ, Morufat omotalani",,
"ABDUL-AZEEZ, Saadudeen babatunde",,
"ABDULGANIU, Habeebat",,
"ABDULGANIYU, Halima sadiya",,
"ABDULRAHEEM, Qudrah Aderonke.",,
"ABDULRAMAN-OBATERU, Hafsat",,
"ABIALA, Benjamin",,
"ABIDEMI, Olufemi Abiodun.",,
"ABIMBOLA, Taiwo Oluwatele.",,
"ABIODUN, Adegboyega",,
"ABIODUN, Amidat Olabimpe.",,
"ABIODUN, Funmilayo titilope",,
"ABIODUN, Olufemi olukayode",,
"ABIODUN, Oluwatoyin Ayinke.",,
"ABIOLA, Ibiyemi kehinde",,
"ABIOLA, Omobolanle morenikeji",,
"ABIONA, Moshood olatunji",,
"ABIONA, Oluwasegun Babatunde.",,
"ABODERIN, Olawunmi adesokan",,
"ABODUNRIN, Tolulope Olusola.",,
"ABOLARIN, Taiwo folasade",,
"ABOLURIN, Rashidat Adebisi.",,
"ABORISADE, Akeem alao",,
"ABORODE, Saheed adebayo",,
"ABU, Adeola alexandria",,
"ADAMS, Abigael Oluwabusayo.",,
"ADAMS, Adewale abiodun",,
"ADEAGBO, Yinka",,
"ADEBAKIN, Remilekun olayinka",,
"ADEBAMBO, Tawakalitu oluwatosin",,
"ADEBANJO, Aderonke Adeyinka.",,
"ADEBANJO, Kayode michael",,
"ADEBANJO, Mathilda abisola",,
"ADEBANJO, Muhibat Oluwaseyi.",,
"ADEBANJO, Yetunde adesola",,
"ADEBANJO-ONIKU, Aderonke abosede",,
"ADEBAYO, Abiodun Adenike.",,
"ADEBAYO, Ajewole Shakirat.",,
"ADEBAYO, Ariyo oluwatobi",,
"ADEBAYO, Biliques Taiwo.",,
"ADEBAYO, Bolanle Sakirat.",,
"ADEBAYO, Kehinde hassan",,
"ADEBAYO, Oladele Michael.",,
"ADEBAYO, Olalekan Rahman.",,
"ADEBAYO, Omolara oluwayomi",,
"ADEBAYO, Omotayo funmilola",,
"ADEBESIN, Bode abiodun",,
"ADEBESIN, Olusegun adewale",,
"ADEBESIN, Olusola Tosin.",,
"ADEBESO, Kamoru bamidele",,
"ADEBISI, Moses ishola",,
"ADEBIYI, Aminat Alake.",,
"ADEBO, Ajibola Micheal.",,
"ADEBOLA, Samusideen adekunle",,
"ADEBOWALE, Grace anike",,
"ADEBOYE, Kafayat Aderomoke.",,
"ADEBOYE, Oluwole paul",,
"ADEBULEWO, Abigail Adeola.",,
"ADEDAPO, Ruth adeola",,
"ADEDEJI, Adekunle olubanjo",,
"ADEDEJI, Bisiriyu olalekan",,
"ADEDIPE, Olukayode surulere",,
"ADEDIRAN, Adenike aderonke",,
"ADEDIRAN, Temitope alice",,
"ADEDOKUN, Abosede adesunmbo",,
"ADEDOKUN, Morenike olajumoke",,
"ADEEKO, Helen afolake",,
"ADEEKO, Taiwo Oluseyi.",,
"ADEFIOYE, Simbiat adenrele",,
"ADEFULU, Adetunji abiodun",,
"ADEGBESAN, Fatimoh gbemisola",,
"ADEGBESAN, Yetunde Aderonke.",,
"ADEGBITE, Olutoyin alolade",,
"ADEGBOYE, Morakinyo Folakemi.",,
"ADEGBOYEGA, Josephine olubunmi",,
"ADEGBUYI, Kareem abiodun",,
"ADEGOKE, Bukola",,
"ADEGOKE, Oluwatoyin Ruth.",,
"ADEGOKE, Opeoluwa John.",,
"ADEGUNWA, Oluwatoyin baliqs",,
"ADEITAN, Monsurat",,
"ADEJIMI, Aderonke Adenike.",,
"ADEJOBI, Rasidat afolake",,
"ADEJONPE, Regina ello",,
"ADEKANMBI, Tolulope odunayo",,
"ADEKANYE, Adenike Sarah.",,
"ADEKOLA, Omolara funmilola",,
"ADEKOYA, Elizabeta olusola",,
"ADEKOYA, Francis adedeji",,
"ADEKOYA, Margret funmilola",,
"ADEKOYA, Oluremi Adekemi.",,
"ADEKOYA, Oluwaseun Morenike.",,
"ADEKUNJO, Muibat abike",,
"ADEKUNLE, Abigail Ayomipo.",,
"ADEKUNLE, Abigail olubunmi",,
"ADEKUNLE, Dauda olamilekan",,
"ADELAJA, Moyosore olufemi",,
"ADELAJA, Olabisi oluwaseyi",,
"ADELAKUN, Wahab Adetona.",,
"ADELEKE, Adejoke olufunke",,
"ADELEKE, Adeyinka olawunmi",,
"ADELEKE, Folasade olubunmi dunni",,
"ADELEKE, Jumoke Ajibike.",,
"ADELEKE, Lateef kayode",,
"ADELEYE, Abimbola",,
"ADELEYE, Akeem adedeji",,
"ADELEYE, Michael Oluwatobi.",,
"ADEMILUA, Funmilayo ajoke",,
"ADEMOLA, Christianah temitope",,
"ADEMOLU, Abibat abigeal",,
"ADEMOSU, Deborah Iyabo.",,
"ADEMOSU, Deborah Olubamigbe.",,
"ADEMOSU, Kehinde bolajoko",,
"ADEMUYIWA, Adeola omolara",,
"ADENEKAN, Ganiyat Omolola.",,
"ADENEKAN, Mojisola omolabake",,
"ADENEKAN, Monsuru adesina",,
"ADENEYE, Adedoyin matthew",,
"ADENIJI, Deborah oluwatosin",,
"ADENIJI, Elizabeth abike",,
"ADENIJI, Iyabode rashidat",,
"ADENIJI, Olusegun kayode",,
"ADENIJI-OYEWOLE, Abimbola abisoye",,
"ADENIRAN, David ayodele",,
"ADENIRAN-AMUSAN, Oluriike arike",,
"ADENIYI, Bolaji Deborah.",,
"ADENIYI, Olukemi olatundun",,
"ADENIYI, Olusegun Isaac.",,
"ADENIYI, Oluwakemi lydia",,
"ADENIYI, Risikat adunni",,
"ADENIYI, Shehu tijani",,
"ADENMOSUN, Adedoyin Oluwaseye.",,
"ADENOLA, Ganiyat yetunde",,
"ADENUBI, Sunday Olusegun.",,
"ADENUGA, Adebowale olajide",,
"ADENUGA, Michael olumuyiwa",,
"ADENUGA, Temitope Elizabeth.",,
"ADENUGBA, Oluwasegun seun",,
"ADEOGUN, Muideen oladimeji",,
"ADEOGUN, Olajumoke omotunde",,
"ADEOLA, Tajudeen adewole",,
"ADEOSUN, Motunrayo mopelola",,
"ADEOSUN, Oluwakemi maria",,
"ADEOSUN, Peter oluwole",,
"ADEOTI, Comfort iyabo",,
"ADEOYE, Adeyinka",,
"ADEPO, Z. kikelomo",,
"ADEPOJU, Omolara olajumoke",,
"ADEROTIMI, Damilola deborah",,
"ADESANYA, Abosede adenike",,
"ADESANYA, Foluwake rebecca",,
"ADESANYA, Olalekan olorunfunmi",,
"ADESANYA, Olaniyi christopher",,
"ADESANYA, Omobola",,
"ADESANYA, Omolola aramide",,
"ADESANYA, Tawakalitu tekobo",,
"ADESEOLU, Kazeem",,
"ADESIMI, Idowu oluwatosin",,
"ADESINA, Adebola titilade",,
"ADESINA, Fausat funke",,
"ADESIPE, Sunday ayodele",,
"ADESOLA, Ololade oluwabunmi",,
"ADESOMI, Taiwo adejoke",,
"ADETAYO, Adesola",,
"ADETAYO, Paul adekunle",,
"ADETIMILEHIN, Adesina yahya",,
"ADETOLA, Omolade Bukonla.",,
"ADETONA, Mushafau olabode",,
"ADETONA, Yemi abike",,
"ADETUNJI, Christiana Adeyemi.",,
"ADETUNJI, Rasheed",,
"ADETUYOLE, Abiola dunni",,
"ADEWALE, Abiola modinat",,
"ADEWALE, Olasimbo tokunbo",,
"ADEWODU, Iyabo alaba",,
"ADEWOLE, Jubril adedotun",,
"ADEYANJU, Adeyemisi Jesutofunmi.",,
"ADEYANJU, Joseph olaniran",,
"ADEYE, Sunday emmanuel .a.",,
"ADEYEMI, Abiodun tokunbo",,
"ADEYEMI, Fatai Adewale.",,
"ADEYEMI, Foluke yetunde",,
"ADEYEMI, Funso akanji",,
"ADEYEMI, Idowu adesina",,
"ADEYEMI, Kayode adelaja",,
"ADEYEMI, Olusoji samuel",,
"ADEYEMI, Omoyemi olaitan",,
"ADEYEMI, Temitayo omolade",,
"ADEYEYE, Bethsheba iwayemi",,
"ADEYIGA, Oluwemimo mathew",,
"ADEYINKA, Abosede adepate",,
"ADEYINKA, Adebola olaoluwa",,
"ADEYINKA, Saheed Adedayo.",,
"ADEYORIJU, Simeon adeleye",,
"ADISA, Oluwaseun Eyitayo.",,
"ADOYI, Isaac Gabriel.",,
"ADU, Blessing bisi",,
"AFENISUMEN, Aderonke mojisola",,
"AFOLABI, Abiodun Matthew.",,
"AFOLABI, Mariam adenike",,
"AFOLABI, Olaniyi brown",,
"AFOLABI, Samuel oladiti",,
"AFUWAPE, Hannah iyiola",,
"AGBAJE, Wakilu adebola",,
"AGBANIMU, Oluwatunmise Deborah.",,
"AGBEBI, Tolulope susan",,
"AGBOOLA, Adejoke alice",,
"AGORO, Ibraheem abiodun",,
"AHMMED, Tunde adewale",,
"AHMOD, Olabisi marian",,
"AINA, Modupe afusat",,
"AINA, Olufolake adebisi",,
"AINA, Tamuno-olobofagha",,
"AINA, Titilayo taiwo",,
"AJAO, Paul oluwaseun",,
"AJASA, Abiola Yewande.",,
"AJAYI, Lawrence bolanle",,
"AJAYI, Morayo rosemary",,
"AJAYI, Oluwakemi morenike",,
"AJIBADE, Grace motunrayo",,
"AJIBADE, Olutoyin tosin",,
"AJIBARE, Joseph olukayode",,
"AJIBODE, Zaccheaus akanbi",,
"AJIBODU, Kamor olalekan",,
"AJIBOSO, Gbenga sunday",,
"AJIBOYE, Toyin",,
"AJIKOBI, Idayat adepeju",,
"AJILEYE, Sunday bamidele",,
"AJISEGIRI, Victoria abiodun",,
"AJOMALE, Olufunke Alice.",,
"AJUWON, Abiodun olayinka",,
"AJUWON, Balikis Motunrayo.",,
"AKA, Lateef adekunle",,
"AKANBI-GIWA, Omolewa",,
"AKANGBE, Modinat omodunni",,
"AKAPO, Oluwatoyin ololade",,
"AKAPO, Semasa Amos.",,
"AKAPO, Victor rasaq",,
"AKERELE, Memunat Ahuoiza.",,
"AKIN-ORIMOLOYE, Oluwafunke abosede",,
"AKINBOBOLA, Angela Melody.",,
"AKINBODE, Adeniyi balogun",,
"AKINBODE, Adeoluwanimi Hosanna.",,
"AKINBOMI, Ekundayo oluwatobiloba",,
"AKINBOOLA, Adedire",,
"AKINBOWALE, Ayodele temitope",,
"AKINDAYINI, Fadeke",,
"AKINDE, Modupeore titilolu",,
"AKINDE, Olubunmi janet",,
"AKINFESOLA, Damilola",,
"AKINKUNMI, Esther afusat olayemi",,
"AKINKUOWO, Olamide olayemi",,
"AKINLADE, Adewale Gbenga.",,
"AKINLADE, Eniola Sulaiman.",,
"AKINLADE, Eniola Toyin.",,
"AKINLADE, Idiat adetola",,
"AKINLADE, Lukumon oladipupo",,
"AKINLADE, Sunday Daniel.",,
"AKINLADE, Sunday emmanuel",,
"AKINLEYE, Felicia oluyemisi",,
"AKINLEYE, Mujidat abioye",,
"AKINLEYE, Sanmi sunday",,
"AKINLOYE, Kudirat Abolanle.",,
"AKINMOLA, Oluwatola Simeon.",,
"AKINOLA, Abosede oluwatoyin",,
"AKINOLA, Moses oluwakayode alabi",,
"AKINOLA, Olajide joshua",,
"AKINOLA, Olufunmilayo risikat",,
"AKINOSHO, Temilola tolulope",,
"AKINRINADE, Foluke Ruth.",,
"AKINRODOYE, Modupe opeyemi",,
"AKINROLE, Mofolorunso Atanda.",,
"AKINRUNTAN, Sariyu abosede",,
"AKINSANYA, Olusegun victor",,
"AKINSIPE, Arinola suliat",,
"AKINSOJI, Abdulhammed Akinyemi.",,
"AKINSOLA, Muinat olalete",,
"AKINTAYO, Adenike adunola",,
"AKINTE, Olufemi omosola",,
"AKINTOLA, Dauda adewale",,
"AKINTOLA, Oluwasegun vincent (deaf)",,
"AKINTOYE, Folashade owosunmomi",,
"AKINTOYE, Rotimi Williams.",,
"AKINWALE, Toyin Elizabeth.",,
"AKINWANDE, Adedoyin olaosebikan",,
"AKINWANDE, Ahmed ayinde",,
"AKINWANDE, Safiriyu yemi",,
"AKINWOLE, Olaniyi Samuel.",,
"AKINWUNMI, Mariam Kofoworola.",,
"AKINYELE, Akinsanmi",,
"AKINYELE, Remilekun Kehinde.",,
"AKINYELU, Durodola bamidele",,
"AKINYEMI, Michael francis",,
"AKINYEMI, Samod kolade",,
"AKINYETUN, Olufemi clement",,
"AKINYOSADE, O. olabisi",,
"AKIODE, Olorunsogo samuel",,
"AKOMOLAFE, Taiwo abel",,
"AKOREDE, Adedoja Omosalewa.",,
"AKPABIO, Oyindamola sarah",,
"AKPAN, Aniebiet Aniekan.",,
"AKPOKO, Noah adima",,
"ALABI, Adebola",,
"ALABI, Adeolu",,
"ALABI, Christaina owolabi",,
"ALABI, Olanike sewaola",,
"ALABI, Olubukonla temitope",,
"ALABI, Oluseyi olugbenga",,
"ALABI, Olusola comfort",,
"ALABI, Oluwakemi bimpe",,
"ALADOKUN, Basirat fadeke",,
"ALAIYE, Alabi Olusegun.",,
"ALALADE, Babatunde joseph",,
"ALALAFIA, Saliat omodele",,
"ALAO, Gabriel Olusola.",,
"ALAO, Olabisi Jemilat.",,
"ALATISE, Busola temitope",,
"ALATISE, Taiwo hellen",,
"ALAUSA, Sunday",,
"ALEBIOSU, Raphael kehinde",,
"ALEBIOSU, Ronke florence",,
"ALEH, Salihu isiaka",,
"ALIMI, Iyabo oredola",,
"ALLI, Oladele olanipekun",,
"ALLI, Olasumbo abadat",,
"ALOGI, Oluwatosin remilekun",,
"ALONGE, Emmanuel olusegun",,
"AMELE, Kazeem godwin",,
"AMINU, Lateefat",,
"AMORE, Emmanuel Babatunde.",,
"AMOSU, Oluwatosin Alabi.",,
"AMOSUN, Abiodun olajumoke",,
"AMUSAN, Florence funmilayo",,
"ANIMASHAUN, Shukurat Omodolapo.",,
"ANIPUPO, Ayinke fausat",,
"ANISERE, Bushirat temitope",,
"ANWO, Olufolake Ojuolape.",,
"APANISILE, Deborah funmilola",,
"APE, Bukola Christanah.",,
"ARANMOLETIESO, Mustapha ayodeji",,
"AREKUNLE, Benjamen",,
"AREMU, Bukola Simiat.",,
"ARIORI, Caroline Yetunde.",,
"ARIYO, Arike Yemisi.",,
"AROGEDALU, Victoria adeola",,
"AROMOSE, Oluwafunmilola Tolulope.",,
"ASADE, Bilikisu adenike",,
"ASADE, Elijah akanni",,
"ASADE, Elizabeth omobolanle",,
"ASADE, Tosin Elizabeth.",,
"ASHAYE, Oluwatoyin (nee somiyewo)",,
"ASHIMI, Tawakalitu adenike",,
"ASIPA, Adeyinka olanrewaju",,
"ASOGBA, Rasheed aremu",,
"ASOGBA, Taiwo Joseph.",,
"ATOBA, Adijat Omobolanle.",,
"ATTU, Thosa sehubo",,
"AWOFESO, Adetola Isaac.",,
"AWOFODU, Esther abosede",,
"AWOJOBI, Olayemi oladunni",,
"AWOJOBI, Sakirat ajoke",,
"AWOLESI, Moses olaolu",,
"AWOLOLA-OBA, Adepeju Valentina.",,
"AWOLOWO - KAZEEM, Adeola mojisola",,
"AWONIYI, Dupe  bilikis",,
"AWONIYI, Ejimoh Adenike.",,
"AWONIYI, Hannah oluwatosin",,
"AWOSANYA, Michael olaitan",,
"AWOSILE, Yetunde gbemisola",,
"AWOTAYO, Oluwabukunola  Omotayo.",,
"AWOTEDU, Ayodele Abosede.",,
"AWOTOLA, Kehinde olayinka",,
"AWOTUBO, Iyapo Olubanke.",,
"AWOYEMI, Adenike basirat",,
"AWOYEMI, Afolake arike",,
"AWOYEMI, Florence mosunmola",,
"AWWAL, Aisha aromoke",,
"AYANBISI, Ronke Titilayo.",,
"AYANLOLA, Sarafa ayandokun",,
"AYEDUN, Samuel Ayinla.",,
"AYEGBA, Matthew",,
"AYENI, Hamdalat titilope",,
"AYENI, Oluwarotimi benjamin",,
"AYILARA, Abdulwasihi Adekunle.",,
"AYO, Tajudeen oluwadele",,
"AYOADE, Kamil adeyemi",,
"AYODELE, Abigael awele",,
"AYODELE, Funmilayo helen",,
"AYODELE, Precious Olamide.",,
"AYODELE, Tijani balogun",,
"AYUNKE, Esther oluwaseun",,
"AZEEZ, Bukonla damilola",,
"AZEEZ, Olakunle liad",,
"BABALARE, Hosea Bola.",,
"BABALOLA, Ismail abiodun",,
"BABALOLA, Oluwaseun oluwasina",,
"BABALOLA, Taibat Olaide.",,
"BABATUNDE, Bisola Aminat.",,
"BABATUNDE, Moshood ajani",,
"BABATUNDE, Olufunke Adeoti.",,
"BABATUNDE, Oluremi oluranti",,
"BABATUNDE, Olusesan erubami",,
"BABATUNDE, Oluwaseyi johnson",,
"BABATUNDE, Titilope idowu",,
"BADEJO, Abosede olubanke simiat",,
"BADMUS, Azeez Kolawole.",,
"BADMUS, Nofisat Bukola.",,
"BADMUS, Ronke Busurat.",,
"BADRU, Rasheedat yemisi",,
"BAKARE, Busirat A..",,
"BAKARE, Damilola Jimoh.",,
"BAKARE, Elizabeth olamide",,
"BAKARE, Eniola Olabisi.",,
"BAKARE, Rilwan abiodun",,
"BALOGUN, Adijat Aderinsola.",,
"BALOGUN, Gbemisola kudirat",,
"BALOGUN, Halimah oluwatoyin",,
"BALOGUN, Kafilat olanike",,
"BALOGUN, Mubasiru adewale",,
"BALOGUN, Olabisi",,
"BALOGUN, Olugbenga emmanuel",,
"BALOGUN, Timothy adio",,
"BALOGUN, Zainab Olaitan.",,
"BALOGUN-KAREEM, Olawale",,
"BAMGBOYE, Olujimi Aderibigbe.",,
"BAMIDELE, Adenike Adebimpe.",,
"BAMIDELE, Adisa Sikiru.",,
"BAMIDELE, Risikat abosede",,
"BAMIDELE, Temitayo oluwakemi",,
"BAMIGBOLA, Olalekan habeeb",,
"BANJO, Adejumoke titilayo",,
"BANJO, Adeolu gbemi",,
"BANJOKO, Oladapo emmanuel",,
"BANKOLE, Bamidele Oluwatosin.",,
"BANKOLE, Comfort oluyemi",,
"BANKOLE, Francisca Titilayo.",,
"BANKOLE, Therresa Omolola.",,
"BARA, Jonathan ibukun abidemi",,
"BASHIR, Abioye modinat",,
"BASHIRU, Sufianu amoo",,
"BASORUN, Olawale waheed",,
"BELLO, Dauda aremu",,
"BELLO, Hammed Olalekan.",,
"BELLO, Kolapo",,
"BELLO, Mujidat adedayo",,
"BELLO, Yetunde adetutu",,
"BEN-FABIYI, Adesola rashidat",,
"BISIRIU, Kehinde abibat",,
"BODUNRIN, Gbenga",,
"BODUNRIN, Mary oludare",,
"BOLARINDE, Adeola abimbolu",,
"BOLARINWA, Morohunmubo elizabeth",,
"BUHARI, Adams Babatunde.",,
"BURAIMOH, Kehinde hussein",,
"BUROH, Oluyombo Ibironke omotund.",,
"CHARLES, Julie ivi ekureri",,
"COKER, Opeyemi Folashade.",,
"CRAIG, Rebecca eyitayo",,
"DABIRI, Nusirat oluwabunmi",,
"DADA, Adegoke oluwasesan john",,
"DADA, Morufat titilayo",,
"DADA, Olanrewaju adewale",,
"DARAMOLA, Olusegun  oluseyi",,
"DAUD, Adeola alaba",,
"DAWODU, Funmilayo Bukunmi.",,
"DAWODU, Idowu muili",,
"DAWOTOLA, Damilola Iyabode.",,
"DEHINBO, Oluwatobi adewale",,
"DESILE, Olutosin joseph",,
"DISU, Samuel oluwagbemiga",,
"DOMINIC, John",,
"DOSUNMU, Abimbola veronica",,
"DOSUNMU, Samuel olanrewaju",,
"DUROJAYE, Adenike adepeju",,
"DUROTOYE, Deborah Oluwatosin.",,
"EDIGBO, Emmanuel",,
"EDUN, Sikirat omowunmi",,
"EDUNJOBI, Mary abosede",,
"EGBEBI, Akin simon",,
"EGBELEKE, Dorcas anuoluwapo",,
"EGBERONGBE, Okanlawon",,
"EGBERONGBE, Yemisi Aweni.",,
"EGBEYEMI, Tosin",,
"EGBUWALO, Christianah  Tunbosun.",,
"EJIDELE, Funke eshter",,
"EJOOR, Mojisola ganiat",,
"EKUNDAYO, Olufunke oluwakemi",,
"ELEGBEDE, Boluwaji ayokunle",,
"ELEGBEDE, Olabode jelili",,
"ELEGBEDE, Olufemi michael",,
"ELEGBEDE, Oluwabukola mary",,
"ELEGBEDE, Sunday adegboyega",,
"ELEGBEDE, Suuru alice",,
"ELEGBEDE, Tajudeen olalekan",,
"ELEYELE, Bernice asani",,
"ELUYEMI, Michael Tobiloba.",,
"EMEMERE, Mojisola fatimat",,
"EMIOLA, James Adebayo.",,
"EMMANUEL, Adeyemi Moses.",,
"EMMANUEL, Gloria iyabode",,
"EMMANUEL, Olayinka omobola",,
"EMMANUEL-LESHI, Oluseun omowunmi",,
"EMOSU, Olumuyiwa kehinde",,
"ENILOLOBO, Ibironke Kemi.",,
"ENIOLA, Busirat abosede",,
"ENIOLA, Obayomi akinsola",,
"ENYI, Philip emmanuel",,
"EREWA, Adeyinka elizabeth",,
"ERINFOLAMI, Ajoke abosede",,
"ESECHIE, Temidayo Oluwatosin.",,
"ESIMEKHUAI, Oluyinka sade",,
"ETEFIA, Eno ita",,
"EYINADE, Olukunle Adeyemi.",,
"EYIOWUAWI, Mutiu ayinde",,
"EZEKIEL, Zaccheaus",,
"FADAIRO, Doja ruth",,
"FADARE, Nimotalai Oluwatosin.",,
"FADIPE, Johnson oladele",,
"FADIPE, Taiwo abolaji",,
"FADIRAN, Alai jeremiah",,
"FADUGBA, Titilayo olamidun",,
"FAGBAMILA, Kikelomo Adeola.",,
"FAGBEMI, Bisayo omogoriola",,
"FAGBEMIRO, Abayomi babatunde",,
"FAGBENRO, Abisola Fadeke.",,
"FAGBENRO, Oseni",,
"FAGBIRE, Abigael abeni",,
"FAGBOHUN, Elizabeth kemi",,
"FAGBOHUN, Oluwasike kemi",,
"FAGBOHUN, Solomon ajani",,
"FAITO, Sunday ayinde",,
"FAKEYE, Alayan abisi",,
"FAKOMAYA, Taiwo adeola",,
"FAKUNLE, Olusola akanni",,
"FAKUNLE, Solomon obasola",,
"FALADE, Oluwafemi mathew",,
"FALAJU, Christianah oluwatoyin",,
"FALAKO, Ebenezer ayodele",,
"FALANA, Femi Olatunde.",,
"FALANA, Jemilat adejoke",,
"FALANA, Tobi",,
"FALODUN, Serah abike",,
"FALOLA, Adeyemi Folabomi.",,
"FALOLA, Bamidele olusesan",,
"FALOLA, Bukola Abisoye.",,
"FALOLA, Joseph olusola",,
"FALOLA, Olugbemiga",,
"FALOLA, Samson olukayode",,
"FALOYE, Titilope Olayinka.",,
"FAMOTEMI, Ayobami julianah",,
"FAMUYIWA, Idowu Abolanle.",,
"FANUSI, Rosyline ekeoma",,
"FATADE, Oluwabusola biodun",,
"FATADE, Sunday ige",,
"FATERU, Oluwakemi maria",,
"FATOKUN, Jemilat olubukonla",,
"FATONA, Felix temilope",,
"FATOYINBO, Olufunke Abiola.",,
"FATUBARIN, Dorca temiloluwa",,
"FATUBARIN, Moses damilare",,
"FAYOMI, Oredolapo victoria",,
"FAYOMI, Stephen Akin.",,
"FOLAMI, Tawakalt eniola",,
"FOLARIN, Basirat lanre",,
"FOWOTE, Gbenga",,
"FUNMILAYO, David owoseni",,
"GABRIEL, Ola ayodele",,
"GANDONU, Vincent friday",,
"GBADAMOSI, Jamiyu sunday",,
"GBADAMOSI, Olawale basirat",,
"GBADEBO, Abayomi oluwadare",,
"GBADEBO, Babatunde dare",,
"GBADEBO, Fausat Adenike.",,
"GBADEBO, Idowu adeyinka",,
"GBADEWOLE, Oluleke",,
"GBOYEGA, Hannah oyinlola",,
"GEORGE, Emem emmanuel",,
"GEORGE, Ola esther morolake",,
"GEORGE, Peter samuel",,
"HARUNA, Adesewa deborah",,
"HASSAN, Abiodun moses",,
"HASSAN, Sakirat awero",,
"HASSAN, Sikiru",,
"HOWELLS, Opeyemi akinpelu",,
"HUNTON, Rasheed athunpe",,
"HUSSEIN, Islamiat Temitayo.",,
"IBHAREBHOR, Elizabeth Adetola.",,
"IBIKUNLE, Ayodele Olayinka.",,
"IBRAHEEM, Toyyib onayemi",,
"IBRAHIM, Morufu Adegoke.",,
"IBRAHIM, Ramotalahi oluwagbemisola",,
"IDOGBE, Temitayo. a",,
"IDOWU, Adegboyega Micheal.",,
"IDOWU, Deborah oluwatosin",,
"IDOWU, Jaiyeola samuel",,
"IDOWU, John ogundele",,
"IDOWU, Kazeem Ajani.",,
"IDOWU, Oluwadunsin Mojola.",,
"IDOWU, Rashidat adeola",,
"IDOWU, Seliat olayinka",,
"IGE, Racheal abosede",,
"IGE, Taiwo James.",,
"IGE, Yewande oluwaseun",,
"IGODI, Timi-ebi koyemo",,
"IKOLOMI, Gladys Omowoma.",,
"IKUBUKUOLA, Kobu olusegun",,
"IKUESAN, Yomi samuel",,
"IKUJUNI, Matthew oluwasun",,
"IKUSHIMO, Taiwo oluwanifemi",,
"ILORI, Adebisi adefisayo",,
"IRABOR, Solomon gilbert",,
"IROKO, Daniel Alade.",,
"ISARINDE, Albert oluwole",,
"ISIAKA, Rashidi olayinka",,
"ISMAILA, Yetunde fatima",,
"IYAMOJU, Robison",,
"JAJI, Funmilola Sukurat.",,
"JEGEDE, Olaide Omowunmi.",,
"JEKAYINFA, Adeleke johnson",,
"JEMBI, Adebisi",,
"JESUDAINI, Olatunbosun Mosebolatan.",,
"JIMOH, Kadijat omonike",,
"JIMOH, Saheed taiwo",,
"JOHN, Motunrayo omotayo",,
"JOHNSON, Innocent omoke",,
"JOHNSON, Peter Olusola.",,
"JOLAOSO, Susan adeola",,
"JONES, Omobola juliana",,
"JOSEPH, Olubukola Ajoke.",,
"JUBRIL, Fatai",,
"JUBRIL, Oluyemisi esther",,
"KADIRI, Iyabosola khadijat",,
"KADIRI, Lookman Abiodun.",,
"KAPPO, Selome Grace.",,
"KAREEM, Bukola Morenikeji.",,
"KAREEM, Rukayat adeola",,
"KASALI, Adetutu",,
"KASALI, Ayobami sikirat",,
"KASALI, Ibrahim akanni",,
"KASALI, Omowunmi suliyat",,
"KASSIM, Omosolape osefat",,
"KAYODE, Alice omoniyi",,
"KAYODE, Oluwatoyin Titilope.",,
"KAZEEM, Aminat Tolulope.",,
"KEHINDE, Adesola noimot",,
"KEHINDE, Aisha Omolara.",,
"KEHINDE, Ayodele",,
"KEHINDE, Ibukun omolola",,
"KEHINDE, Omotayo yemisi",,
"KERIPE, Oluseun tope",,
"KHARASHI, Akeem taiwo",,
"KIKISUHU, Oluyemisi Siliphana.",,
"KILANKO, Olasunmbo abimbola",,
"KODAOLU, Modupe janet",,
"KOLA-SOWEMIMO, Ajoke omolola",,
"KOLADE, Adeyinka akimot",,
"KOLADE, Opeyemi adetunji",,
"KOLAWOLE, Abayomi olusola",,
"KOLAWOLE, Elizabeth olufunmilayo",,
"KOLEOSO, Kehinde sekinat",,
"KOLEOSO, Titilope eunice",,
"KOMAYA, Adeola olusegun",,
"KOROLE, Abraham idowu",,
"KOSEGBE, Isa Oluwaseyi.",,
"KOSOKO, Olufemi adewale",,
"KUKOYI, Abiodun olubankole",,
"KUSE, Festus alabi",,
"KUSIMO, Felix olajide",,
"KUSIMO, Oluseyi olugbenga",,
"KUYORO, Oyedele gbolagunte",,
"LAMID, Musa ayinde",,
"LAMIDI, Akinwunmi",,
"LAMPEJO, Adebola akande",,
"LATEEF, Michail Abimbola.",,
"LATEEF, Rasheed suuru abiona",,
"LAWAL, Adeyinka wasiu",,
"LAWAL, Bilikisu abiodun",,
"LAWAL, Lateef alade",,
"LAWAL, Modinat olajumoke",,
"LAWAL, Nanamaymuna Mustapha.",,
"LAWAL, Olayinka opeyemi",,
"LAWAL, Omolola idayat",,
"LAWAL, Omolola temilade",,
"LAWAL, Opeyemi jimo",,
"LAWAL, Rasheed .a.",,
"LAWAL, Sakirat olanike",,
"LAWAL, Samusideen olanrewaju",,
"LAWRENCE, Kayode",,
"LAZEEZ, Ganiyat abiola",,
"LEKUTI, Oludolapo  adeola",,
"LIADI, Sarafat ajoke",,
"LUWOYE, Peter Temidayo.",,
"MABADEJE, Adesola olukemi",,
"MABINUOLA, Oluwaseun",,
"MADANDOLA, Olufunke folrence",,
"MAJEKODUNMI, Isaac Ayobami.",,
"MAJIYAGBE, Michael abayomi",,
"MAJOYEOGBE, Deborah olayemi",,
"MAKINDE, Yemisi Dorcas.",,
"MALIK, Iyabo elizabeth",,
"MARAIYESA, Funmilola esther",,
"MARCUS, Waleola Temilola.",,
"MASANWO, Modupe elizabeth",,
"MASOPA, Rukayat adefunke",,
"MATE, Olufayo aderonke",,
"MAYEGUN, Elijah Ademola.",,
"MBASHIRU, Fatima adejoke",,
"MEYILE, Philip adeyemi",,
"MOBOLAJI, Okorisa Kolade.",,
"MOGAJI, Olugbenga olatunbosun",,
"MOMOH, Victoria idowu",,
"MONEME, Oluwarotimi chidiebere",,
"MORAKINYO-EGBERONGBE, Moturanyo omoteni",,
"MULERO, Moses oluwasogo",,
"MUNIRU, Qasim babatunde",,
"MUSA, Dauda olatunbosun",,
"MUSARI, Maria abosede",,
"MUSTAPHA, Aishat wuraola",,
"MUSTAPHA, Amuda",,
"MUSTAPHA, Lateef biodun",,
"MUSTAPHA, Modupe afusat",,
"MUSTAPHA, Safiriyu",,
"Mr. ABARAONYE,  Timothy ihezie",,
"Mr. ABDULLAHI,  Bamidele  A.",,
"Mr. ADEBANBO,  Jacob  O.",,
"Mr. ADEBO,  Okanlawon ambali",,
"Mr. ADEDAYO,  Ayodele moses",,
"Mr. ADEGOKE,  Sunday adeleke",,
"Mr. ADEKANBI,  Fatai adekunle",,
"Mr. ADELEYE,  Adeyinka adeyemi",,
"Mr. ADEMUYIWA,  Nojeem adewale",,
"Mr. ADEOYE,  Johnson  oluyomi",,
"Mr. ADEROHUNMU,  Fatiu alade",,
"Mr. ADETO,  Michael sunday",,
"Mr. ADETOMIWA,  Adeniyi olumide",,
"Mr. ADEWUNMI,  Andrew  A.",,
"Mr. ADEYANJU,  Funmilade  D.",,
"Mr. ADEYANJU,  Salaudeen taiwo",,
"Mr. ADEYELA,  Ademola abimbade",,
"Mr. ADEYEMI,  Adeleke gafar",,
"Mr. ADEYEMI,  Moses olusegun",,
"Mr. AFOLARIN,  Jelili oyebanji",,
"Mr. AFOLAYAN,  Babajide olusegun",,
"Mr. AGBEYANGI,  Oludolapo  A.",,
"Mr. AINA,  Babalola olusegun",,
"Mr. AINA,  Bola  O.",,
"Mr. AJALA,  Raheem kehinde",,
"Mr. AJASA,  Olusola olugbenga",,
"Mr. AJAYI,  Idowu peter",,
"Mr. AJIBOLA,  Abayomi olayemi",,
"Mr. AJIBOWU,  Najeemdeen  olaniyi",,
"Mr. AJIBOYE,  Folorunso rufus",,
"Mr. AKINBO,  Olumide afeez",,
"Mr. AKINBODE,  Tunde daniel",,
"Mr. AKINTOYE,  Olumide adebayo",,
"Mr. AKINWUNMI,  Ezekiel",,
"Mr. AKINYEMI,  Olaniyi mojeed",,
"Mr. AKIODE,  Abolaji kazeem",,
"Mr. ALABI,  Ojo dele",,
"Mr. ALLEN,  Olawale kehinde",,
"Mr. ASANMO,  Olusegun abayomi",,
"Mr. ASORO,  Mathew olusola",,
"Mr. ATINSHOLA,  Akeem abidemi",,
"Mr. AWOYELE,  Ayodeji olugbenga",,
"Mr. BABALOLA,  Segun atanda",,
"Mr. BABALOLA,  Sunday  K.",,
"Mr. BABARINDE,  Afeez ayinde",,
"Mr. BABATOBI,  Samuel ajayi",,
"Mr. BAKARE,  Aderemi adesoji",,
"Mr. BAKARE,  Haruna ishola",,
"Mr. BAKARE,  Olanrewaju hakeem",,
"Mr. BAKARE,  Yusuff akolawole",,
"Mr. BALOGUN,  Adewale olamide",,
"Mr. BAMIDELE,  Tobi olakunle",,
"Mr. BELLO,  Olakunle oluwafemi",,
"Mr. BILESANMI,  Oluwole aramide",,
"Mr. DADA,  Oluwaseun  O.",,
"Mr. ELEGBEDE,  Adedayo f",,
"Mr. ENITAN,  Jimoh ayinla",,
"Mr. ETTU,  Olaide olasunkanmi",,
"Mr. FALANA,  Jamiu adisa",,
"Mr. FAREMI,  Olufemi abayomi",,
"Mr. FAYOMI,  Ayodele rasheed",,
"Mr. GODONU,  Peter",,
"Mr. HABEEB,  Olawale abdulllahi",,
"Mr. IBITOYE,  Michael alaba",,
"Mr. IBRAHEEM,  Tunde  O.",,
"Mr. IBRAHIM,  Azeem  A.",,
"Mr. IBUKUN,  Oladotun ige",,
"Mr. IDAKWO,  Ali",,
"Mr. IDOWU,  Adebayo oluwafemi",,
"Mr. IDOWU,  Adebola kazeem",,
"Mr. IDOWU,  Nureni adedimeji",,
"Mr. IGBOSANU,  Sunday abisola",,
"Mr. IGE,  Ayinde  olajide",,
"Mr. IPADEOLA,  Timothy iyiola",,
"Mr. IROKO,  Ganiyu adisa",,
"Mr. JOB,  Vincent taiwo",,
"Mr. JOLAOSO,  Monday omolaja",,
"Mr. KALEJAYE,  Adams oriyomi",,
"Mr. KOLAWOLE,  Samuel abayomi",,
"Mr. KUTI,  Kayode koya",,
"Mr. LABODE,  Habeeb ayoola",,
"Mr. MAHMUD,  Ismail",,
"Mr. MICHAEL,  Akinola",,
"Mr. MOSAKU,  Ebenezer olukunle",,
"Mr. MURTALA,  Abdulateef salau",,
"Mr. MUSIBAU,  Morufu samuel",,
"Mr. OBABI,  Rasaq taiwo",,
"Mr. OBAYEMI,  Daniel  A.",,
"Mr. ODEBUNMI,  Surajudeen oladipo",,
"Mr. ODESESAN,  Joseph oluwatoyin",,
"Mr. ODUNTAN,  Adebayo",,
"Mr. OGUNDAIRO,  Sunday olalekan",,
"Mr. OGUNGBAYI,  Olawale sunday",,
"Mr. OGUNLADE,  Olufemi ayorinde",,
"Mr. OGUNLEYE,  Oluwafemi moses abayomi",,
"Mr. OGUNSANYA,  David olusegun",,
"Mr. OGUNSEYE,  Mikhail alao",,
"Mr. OGUNYEMI,  Samuel  R.",,
"Mr. OKE,  Michael oluwadamilare",,
"Mr. OKIN,  Andrew adeniyi",,
"Mr. OKU,  David yemi",,
"Mr. OKUSANYA,  Olaide olufemi",,
"Mr. OLABIRAN,  Olukayode omolaja",,
"Mr. OLADIJI,  Olabisi monday",,
"Mr. OLANIGAN,  Tunde ibrahim",,
"Mr. OLAYODE,  Sulaimon  L.",,
"Mr. OLAYORI,  Samson olusola",,
"Mr. OLUBODUN,  Babatunde",,
"Mr. OLUGBEMI,  Gabriel  R.",,
"Mr. OLURO,  Samuel oluwalambe",,
"Mr. OLUSOLA,  Kolawole david",,
"Mr. OMOLADE,  Olusola  L.",,
"Mr. OMOTESO,  Gabriel oluseye",,
"Mr. ONATOLA,  Olusola adekunle",,
"Mr. ONI,  Adeolu bamidele",,
"Mr. OPATOLA,  Sola johnson",,
"Mr. OPEOLUWA,  Biliaminu  A.",,
"Mr. OSHILAJA,  Shamsideen  T.",,
"Mr. OSINOWO,  Martins olugbenga",,
"Mr. OWODUNNI,  Isiaka kehinde",,
"Mr. OYALOWO,  Ayodeji  R.",,
"Mr. OYEWOGA,  Adewale fadlulahi",,
"Mr. OYEWUNMI,  Opeyemi",,
"Mr. RABIU,  Muminu kayode",,
"Mr. RAHEEM,  Alamu james",,
"Mr. RAHEEM,  Sunday eyiola",,
"Mr. RASAAQ,  Taiwo lateef",,
"Mr. SABITU,  Iskilu adesunkanmi",,
"Mr. SADIQ,  Lateef  adetunji",,
"Mr. SALAMI,  Hammed olasunkanmi",,
"Mr. SALIU,  Razaq folorunso",,
"Mr. SANNI,  Akolawole sakiru",,
"Mr. SANNI,  Mumin  A.",,
"Mr. SANUSI,  Aderemi rasheed",,
"Mr. SAO,  Peter gbenasu",,
"Mr. SIKIRU,  Ayinla lukman",,
"Mr. SOFIDIPE,  Oluwadamilare matthew",,
"Mr. SOGBESAN,  Oladele oladehinde",,
"Mr. SORUNGBE,  Banjo johnson",,
"Mr. SULE,  Idris tabbas",,
"Mr. TAIWO,  Samuel kayode",,
"Mr. TAIWO,  Sarafa adebola",,
"Mr. TIJANI,  Yisau titilope",,
"Mr. TIJJANI,  Isiaka adesina",,
"Mr. YINUSA,  Abayomi zainudeen",,
"Mrs. ABE,  Omowunmi arike",,
"Mrs. ADEBAYO,  Ganiyat  A.",,
"Mrs. ADEBIYI,  Morenike olukemi",,
"Mrs. ADEBOWALE,  Kuburat ajoke",,
"Mrs. ADEBOYEKU,  Oluyemisi risikat",,
"Mrs. ADEDIJI,  Mariam aynka",,
"Mrs. ADELEKE,  Kafilat abolore",,
"Mrs. ADENAYA,  Agnes abosede",,
"Mrs. ADENAYA,  Risikat olajide",,
"Mrs. ADEOGUN,  Mujidat bolanle",,
"Mrs. ADEWUNMI,  Bolanle adebimpe",,
"Mrs. ADEYEMI,  Adeola fausat",,
"Mrs. ADEYILE,  Oluwakemi rebecca",,
"Mrs. AFOLABI,  Victoria bola",,
"Mrs. AGBABIAKA,  Omolara foluke",,
"Mrs. AGBABO,  Patience  O.",,
"Mrs. AGBOOLA,  Bosede bolanle",,
"Mrs. AHMED,  Silifat ajoke",,
"Mrs. AINA,  Oluwayemisi olusola",,
"Mrs. AJALA,  Deborah oluwafunmilayo",,
"Mrs. AJAYI,  Oluwaseun abatan",,
"Mrs. AJOKUTA,  Modupe oluwakemi",,
"Mrs. AKINJOGUNLA,  Esther oluwafunmilayo",,
"Mrs. ALADE,  Oluwakemi abidemi",,
"Mrs. ALARAN,  Toheebat olatundun",,
"Mrs. ALLEN,  Foluso oluranti janet",,
"Mrs. ANIBABA,  Jadesola yetunde",,
"Mrs. ANTHONY,  Oluwabukola  R.",,
"Mrs. APETU,  Comfort  I.",,
"Mrs. ARIBANUSI,  Adekemi olubunmi",,
"Mrs. ASUNI,  Morenike amudat",,
"Mrs. ATOMORI,  Agnes yemi",,
"Mrs. AWOFISOYE,  Olukemi gbemisola",,
"Mrs. AWONUGA,  Adetoro  Y.",,
"Mrs. AYANWALE,  Deborah kehinde",,
"Mrs. AYENI,  Temilola  O.",,
"Mrs. AYORINDE,  Bukonla victoria",,
"Mrs. BABALOLA,  Iyabo memunat",,
"Mrs. BADEJO,  Bolanle abiodun",,
"Mrs. BADEJO,  Victoria omotunde",,
"Mrs. BAMGBOSE,  Toyin esther",,
"Mrs. DADA,  Tolani aweni",,
"Mrs. DIYA,  Sakirat abiola",,
"Mrs. EHIEN,  Matilda osemen",,
"Mrs. ENIOLA,  Beatrice olayemi",,
"Mrs. ETIEKAK,  Esther samuel",,
"Mrs. FABI,  Felicia oludoyin",,
"Mrs. FABIYI,  Adebisi taiwo",,
"Mrs. FADERO,  Grace kudirat bukanla",,
"Mrs. FALAJIKI,  Elizabeth titilayo",,
"Mrs. FEYISETAN,  Modurotoluwa adejoke",,
"Mrs. GIWA,  Motunrayo maryam",,
"Mrs. GODONU,  Adedayo  B.",,
"Mrs. IBRAHIM,  Abibat temitope",,
"Mrs. IKELIONWU,  Nwanneka ann",,
"Mrs. INIBHUNU,  Abidemi iyabo",,
"Mrs. IPADEOLA,  Temitope adejoke",,
"Mrs. ISMAIL-AJIBOLA,  Muibat bamidele",,
"Mrs. JIMOH-KELANI,  Alimat omotunde",,
"Mrs. JOSU,  Shukurat olayemi",,
"Mrs. KADIRI,  Taibat abosede",,
"Mrs. KAJEBORA,  Amope olutayo",,
"Mrs. KOLAPO,  Omowunmi opeoluwa",,
"Mrs. MABEKOJE-OYESANYA,  Oluwatoyin oladunni",,
"Mrs. MULERO,  Olufunke adebimpe",,
"Mrs. MUSARI,  Kudirat abisola",,
"Mrs. MUSHINWA,  Victoria olatunde",,
"Mrs. NWOSU,  Claris amauche",,
"Mrs. ODUJOBI,  Morenikeji ajimo",,
"Mrs. ODUWOLE,  Yetunde  A.",,
"Mrs. OGUNADE,  Oluranti lydia",,
"Mrs. OGUNBO,  Adebowale f.",,
"Mrs. OGUNDELE,  Oluyemi olukemi",,
"Mrs. OGUNJIMI,  Oluwaseun susan",,
"Mrs. OGUNJOBI,  Ayodele  T.",,
"Mrs. OGUNLEYE,  Folashade temitayo",,
"Mrs. OGUNOLE,  Florence omolade",,
"Mrs. OGUNOYE,  Abosede  A.",,
"Mrs. OGUNTELURE,  Adejoke cecilia",,
"Mrs. OGUNTOYINBO,  Olufunso ikepo",,
"Mrs. OGUNWO,  Omowunmi cecilia",,
"Mrs. OJEKUNLE,  Oluwafunke  O.",,
"Mrs. OLABODE,  Aminat  O.",,
"Mrs. OLADIMEJI,  Elizabeth badejoko",,
"Mrs. OLADIPUPO,  Oluwabukunmi celestina",,
"Mrs. OLADOYE,  Anthonia abiodun",,
"Mrs. OLANREWAJU,  Christiana ronke sunmade",,
"Mrs. OLANREWAJU,  Elizabeth olusola",,
"Mrs. OLASENI,  Adeola idowu",,
"Mrs. OLATUNBOSUN,  Motunrayo aminat",,
"Mrs. OLONI,  Adetoro adesola",,
"Mrs. ONABOTE,  Hajarat bukola",,
"Mrs. OREDEKO,  Taiwo patience",,
"Mrs. OSINIBI,  Abosede olubisi",,
"Mrs. OTOLORIN,  Titilola ruth",,
"Mrs. OWOLABI,  Abiodun omolade",,
"Mrs. OYEYEMI,  Kehinde victoria",,
"Mrs. RUFAI,  Idiat kemi",,
"Mrs. SAIBU,  Aminat",,
"Mrs. SAKA,  Idowu  O.",,
"Mrs. SANU,  Josephine oluwakemi",,
"Mrs. SAO,  Victoria gbosede",,
"Mrs. SHONEYE,  Adeola ganiyat",,
"Mrs. SIMEON,  Adebimpe ariyibi",,
"Mrs. SOBAYO,  Bolanle  O.",,
"Mrs. SOBOWALE,  Adebimpe abeni",,
"Mrs. SOETAN,  Bimpe omolara",,
"Mrs. SOLOLA,  Ajibike alaba",,
"Mrs. SOMEFUN-OLAJIRE,  Aminat adeorike",,
"Mrs. SOREMI,  Abosede oluwaseun",,
"Mrs. TANIMONURE,  Mosunmola afolake",,
"Mrs. TITILOLA,  Lydia modupe",,
"Mrs. UGWU,  Theresa nwamaka",,
"Mrs. YINUSA,  Aminat oladunni",,
"NOLA, Rasheed bolanle",,
"NWABUNOR, Olukemi Grace.",,
"NZECHIE, Obinna",,
"OBADARA, Titilayo oluwemimo",,
"OBADIMU, Dorcas bosede",,
"OBALOYIN, Rukayat Funmilade.",,
"OBARO, Boluwatife Ifeoluwa.",,
"OBASAN, Dauda fagbemi",,
"OBASANYA, Titlola folasade",,
"OBASEKI, Monday Ayodeji.",,
"OBAYOMI, Aminat titilayo",,
"OBISANYA, Daniel damola",,
"OBISANYA, Oluwatoyin mary",,
"OBOBOLO, Aanuoluwapo Agnes.",,
"ODE, Kayode philips",,
"ODEBODE, Serah titilopeoluwa",,
"ODEDINA, Musili ayanwale",,
"ODEKEYE ADEBIYI, Oluwakemi comfort",,
"ODENIYI, Oyebola toyin",,
"ODEWOLE, Gbenga ezekiel",,
"ODEYEMI, Muinat adebukola",,
"ODUDIMU, Muibat adetoro",,
"ODUFALU, Comfort olusola",,
"ODUFEJO, Joshua ajibola",,
"ODUFUWA, Fatimoh temitope",,
"ODUGBESAN, Abiola adeola",,
"ODUGBESI, Yorisola ademayowa",,
"ODULATE, Olanrewaju lateef",,
"ODUNEYE, Kehinde Abosede.",,
"ODUNLAMI, Mosunmola Olayinka.",,
"ODUNLAMI, Paul olukorede",,
"ODUNOWO, Rotimi williams",,
"ODUNSI, Olasunkanmi shamsudeen",,
"ODUNSI, Oluwakemi adetutu",,
"ODUNTAN, Adekunle kazeem",,
"ODUNTAN, Bariyu olorunsola",,
"ODUNTAN, Omotade abidemi",,
"ODUNUGA, Olakunle odubayo",,
"ODUOLA, Felicia foluke",,
"ODUSANWO, Risikat adefunke",,
"ODUSANYA, Bolanle kafayat",,
"ODUSANYA, Musiliu johnson",,
"ODUSINA, Funmilola Motunrayo.",,
"ODUSOGA, Olaoluwa adeoye joseph",,
"ODUWOBI, Oluwaseun olayemi",,
"ODUWOLE, Adebisi oluwatosin",,
"ODUWOLE, Olubukola olabisi",,
"ODUYEBO, Abiola bunmi",,
"ODUYOMI, Modoluwamu idowu",,
"OFFOR, Kudirat Oriyomi.",,
"OGANWU, Mamuyovwi kate",,
"OGEDENGBE, Adedayo idowu",,
"OGUNADE, Ayoola Grace.",,
"OGUNBAYO, Oluwatosin maria",,
"OGUNBIYI, Adetola bimpe",,
"OGUNBIYI, Modupe abosede",,
"OGUNBIYI, Samuel alao",,
"OGUNBONA, Abiodun",,
"OGUNBOTE, Olabusoye oluayo",,
"OGUNBOWALE, Adedayo adepeju",,
"OGUNDARE, Temitope oluwakemi",,
"OGUNDEJI, Ramotu Amoke.",,
"OGUNDELE, Olubunmi adeyemi",,
"OGUNDIPE, Bidemi catherine",,
"OGUNDIPE, Clement olugbemi",,
"OGUNFODUNRIN, Adeyinka oluwakemi",,
"OGUNFODUNRIN, Jubril Abolaji.",,
"OGUNFOWODU, Saidat tosin",,
"OGUNFOWOKAN, Mutiat motunrayo",,
"OGUNFUWA, Modupe abosede",,
"OGUNFUWA, Olasuji kayode",,
"OGUNGBADE, Maria  bola",,
"OGUNGBAYI, Toyin adeseye",,
"OGUNGBILE, Sabina Jumoke.",,
"OGUNJIMI, Olasunkanmi oluwadamilola",,
"OGUNJOBI, Bolanle esther",,
"OGUNKOYA, Kehinde elizabeth",,
"OGUNLADE, Ebenezer adewale",,
"OGUNLEYE, Adijat adefunke olajumoke",,
"OGUNLEYE, Emmanuel",,
"OGUNLEYE, Esther abiade",,
"OGUNLEYE, Olabomi oluseyi",,
"OGUNLEYE, Oluwaseun adedotun",,
"OGUNLOLA, Oluyinka abosede",,
"OGUNMEFUN, Deborah olufunke",,
"OGUNMUYIWA, Olubukonola Titi.",,
"OGUNNAIKE, Oluwatoyin sakirat",,
"OGUNNAMI, Olufunmilayo abisola",,
"OGUNNUSI, Okanlawon kayode",,
"OGUNOLE, Anastacia Olufunke.",,
"OGUNROMBI, Morakinyo Sola.",,
"OGUNSAKIN, Oluwatoyin kemi",,
"OGUNSANWO, Moshood abiodun",,
"OGUNSANWO, Olutobi esther",,
"OGUNSANYA, Abiodun Oluwakemi.",,
"OGUNSANYA, Femi",,
"OGUNSANYA, Rasidat bolanle",,
"OGUNSEYE, Ibrahim Tobi.",,
"OGUNSEYE, Olusola Babatunde.",,
"OGUNSILU, Bolaji olufemi",,
"OGUNSINA, Hezekiah",,
"OGUNSOLA, Bukola adeola",,
"OGUNSOLA, Ibrahim kolawole",,
"OGUNSOLA, Sunday abiodun",,
"OGUNSOLU, Safiat o.",,
"OGUNTADE, Toyosi nike",,
"OGUNTAYO, Adelana oluwasina",,
"OGUNTOLA, Ololade Suliat.",,
"OGUNTOYINBO, Omotunde oluwemimio",,
"OGUNTUASE, Olubunmi christiana",,
"OGUNTUWO, Bolanle esther",,
"OGUNWOMOJU, Anthonia taiwo",,
"OGUNYANWO, Emmanuel oludolapo",,
"OGUNYEBI, Florence Oyenike.",,
"OGUNYEMI, Gbemisola jolaade",,
"OJEBIYI, Oludayo bolanle",,
"OJEDELE, Olawumi iyabo",,
"OJEDELE, Oluwatoyin morounkeji",,
"OJELABI, Adeyinka",,
"OJELADE, Akanbi adefemi",,
"OJELEYE, Esther olubunmi",,
"OJETOLA, Ololade Christianah.",,
"OJO, Babatunde joshua",,
"OJO, Joshua ayoola",,
"OJO, Oluwakemi Oluwashola.",,
"OJO, Temilola Folake.",,
"OJOLOKO, Jumoke Abosede.",,
"OJOYE, Asamu ibukun",,
"OJUOLAPE, Wasiu abiodun",,
"OJURI, Adebola muyiwa",,
"OKANLAWON, Shakiru adewale",,
"OKE, Bolatito grace enitan",,
"OKE, Hezekiah Sunday.",,
"OKE, Oluremi atinuke",,
"OKE, Oyeronke Moradeyo.",,
"OKEKE, Comfort Olajumoke.",,
"OKENEYE, Sulaiman Olaleye.",,
"OKEOWO, Temitope folasade",,
"OKEOWO, Theresa temitope",,
"OKERAYI, Basirat adenike",,
"OKETOKUN, Wajidat dola",,
"OKOGWU, Chiedu henry",,
"OKONKWO, Rosemary adamma",,
"OKUBOYEJO, Olasunkanmi habibat",,
"OKUESO, Victoria adenike",,
"OKULALU, Adenike adedotun",,
"OKUNEYE, Victoria Ajoke.",,
"OKUNUGA, Tajudeen adesupo",,
"OKUSAGA, Adejoke iyabode",,
"OKUSAMI, Oluwaseyi Esther.",,
"OKUWA, Yemisi abosede",,
"OLAAYAN, Victoria folasade",,
"OLABINJO, Olufunke",,
"OLABINTAN, Shade grace",,
"OLABISI, Adeoluwa abiodun",,
"OLABISI, Oludimimu samuel",,
"OLABISI, Rasaq dare",,
"OLABODE, Augustine Olusola.",,
"OLABOYE-OSOKO, Omowumi titilayo",,
"OLADAPO, Sarah olubunmi",,
"OLADAPO-JOHNSON, Wunmi Elizabeth.",,
"OLADAYO, Demilade Omolade.",,
"OLADEGA, Abosede modupe",,
"OLADEJI, Rufus akinniran",,
"OLADIJI, Olayemi alani",,
"OLADIMEJI, Haruna olalekan",,
"OLADIPO, Adeyemi olusegun",,
"OLADIPO, Musiliu ojo",,
"OLADIPUPO, Fatimo",,
"OLADIPUPO, Oluwaseun ayoola",,
"OLADIPUPO, Yaya sola",,
"OLADOKUN, Reina busola",,
"OLAIBI, Oluwakemi Abosede.",,
"OLAIDE SOKOYA, Olubunmi blesing",,
"OLAIJU, Tosin emmanuel",,
"OLAITAN, Emmanuel adebayo o.",,
"OLAIYA, Tajudeen",,
"OLAJIDE, Atinuke abiodun",,
"OLAJUMOKE, Olfunmi eunice",,
"OLAKULEHIN, Tajudeen",,
"OLALEKAN, Sunday olasunkanmi",,
"OLALEYE, Folake alice",,
"OLALEYE, Folashade omotayo",,
"OLALEYE, Nimota",,
"OLALEYE, Tolu grace",,
"OLALOWO, Veronica Oladoyin.",,
"OLANIBA, Olumide Emmanuel.",,
"OLANIBA, Opeyemi olawale",,
"OLANIPEKUN, Micheal akinola",,
"OLANIPEKUN, Olayemi David.",,
"OLANIRAN, Lateef adefemi",,
"OLANITE, Bukola adenrele",,
"OLANIYAN, Olatunde daniel",,
"OLANOREN, Precious Funmlola.",,
"OLANREWAJU, Adekunle taiwo",,
"OLANREWAJU, Ajibola jelili",,
"OLANREWAJU, Olufunke Yetunde.",,
"OLANREWAJU, Sunday ayinde",,
"OLAOFE, Sulaiman olawale",,
"OLAOSEBIKAN, Taiwo bunmi",,
"OLAOYE, Esther oluwayemisi",,
"OLAOYE, Oladapo sunday",,
"OLAOYE, Ruth Oluwakemi.",,
"OLAPOJU, Olufemi james",,
"OLASIMBO, Rachael oluwaseyi",,
"OLATOYE, Joy bolanle",,
"OLAWUWO, Folasade caroline",,
"OLAYEMI, Adeniyi .o",,
"OLAYEMI, Olufemi david",,
"OLAYEMI, Sekinat omotunde",,
"OLAYINKA, Temitope Mary.",,
"OLAYODE, George kehinde",,
"OLISEH-SAMUEL, Elizabeth temidayo",,
"OLOFINLUA, Clara Adeola.",,
"OLOGUNEBI, Olayide omobolanle",,
"OLOMU, Japhet adeniyi",,
"OLONADE, Iyabode omolara",,
"OLORUNFUNMILOLA, Oluwakemi Priscilla.",,
"OLORUNLANBE, Taophic Alani.",,
"OLORUNLONI, Babatunde olatunde",,
"OLOWOEKUNLEPE, Sola george",,
"OLOWOKITE, Fatimo Adebimpe.",,
"OLOWU, Eshter Adenike.",,
"OLOWU, Oluwatoyin Temitope.",,
"OLOYE, Sarat omolola",,
"OLUBIYI, Sadiat olukemi",,
"OLUBO, Jimoh babatunde",,
"OLUBOTE, Modupe Adesola.",,
"OLUBOWALE, Beatrice oluremi",,
"OLUBOYO, Adenike olayinka",,
"OLUDARE, Joel oyewole",,
"OLUEWU, Adenike olufunke",,
"OLUFAYO, Ibrahim olajide",,
"OLUFAYO, Risikat abeke",,
"OLUFEMI, Abayomi Samson.",,
"OLUFOWOBI, Safurani abimbola",,
"OLUGBEMI, Ramat kehinde",,
"OLUGBEMI, Rasaq olalekan",,
"OLUGBESAN, Tolulope obafemi kehinde",,
"OLUKOGA, Moronkeji ramotalai",,
"OLUKOYA, Victoria Oyindamola.",,
"OLUMIDE, Adebukola oluseun",,
"OLUMUYIWA, Olusegun Atanda.",,
"OLUPE, Ebunoluwa olabisi",,
"OLURELEKE, Omotayo habeeb",,
"OLUSANYA, Adeola fatimat",,
"OLUSANYA, Sarafat olabisi",,
"OLUSANYA, Taiwo adekunle",,
"OLUSEYE, Abosede Ojuolape.",,
"OLUSEYE, Ridwan Oladimeji.",,
"OLUSILE, Olukayode oluseun",,
"OLUSOJI, Kamaar adediran",,
"OLUSOJI, Oluwaseye Bukunola.",,
"OLUTEMIRO, Omolara Temitope.",,
"OLUTUNDE, Jimoh oludare",,
"OLUWABORI, Adedoyin Alaba.",,
"OLUWADARE, Idowu iyabo",,
"OLUWADE, Tolulope Abosede.",,
"OLUWADUN, Oluwayinka Ruth.",,
"OLUWAGBAMI, Olayinka olusanu",,
"OLUWANEYE, Titilayo rebecca",,
"OLUWASANMI, Oladapo Tosin.",,
"OLUWOLE, Gbenga mathew",,
"OLUWOLE, Kehinde ifeoluwa",,
"OLUWOLE, Omolara funmilayo",,
"OLUWOLE, Temitope olufunmilayo",,
"OMENIHU, Temitope Angelina.",,
"OMIFENWA, Victoria Funke.",,
"OMIGADE, Margaret Oludayo.",,
"OMISANYA, Olubunmi Alice.",,
"OMODEHIN, Omotola olumuyiwa",,
"OMOGIATE, Florence orobasa",,
"OMOHIMI, Aminat abiola",,
"OMOJOWO, Gabriel omobowale",,
"OMONIYI, Tajudeen olaonipekun",,
"OMOTESO, Omobolanle aduke",,
"OMOTIBA, Orimisan michael",,
"OMOTILEWA, Olayemisi idowu",,
"OMOTOLA, Olufemi babalola",,
"OMOTOSHO, Bukola Janet.",,
"OMOTOSO, Folasade Olaide.",,
"OMOWUNMI, Lateef",,
"ONABAJO, Adeniyi musibau",,
"ONABOTE, Adesegun rotimi",,
"ONABULE, Monsur abiodun",,
"ONAFEKO, Tawakalit Omowunmi.",,
"ONAFOWOKAN, Adebayo joseph",,
"ONAJOBI, Mawutonji olutola",,
"ONALAJA, Adeniyi adeyemi",,
"ONANUGA, Olufemi olugbenga",,
"ONANUGA, Opeyemi dorcas",,
"ONANUGA, Sikiru onatunde",,
"ONANUGA, Taiwo monsuru",,
"ONASANYA, Abolaji oluwakemi",,
"ONASANYA, Joke abimbola",,
"ONATUNDE, Ajibade sherifat",,
"ONI, Kehinde oluwatoyin",,
"ONI, Samuel adesoji",,
"ONIFADE, Olajumoke sarah",,
"ONIKOSI, Omolara oluwafunke",,
"ONISURU, Adebukola Olubunmi.",,
"ONIYIDE, Adebola abosede",,
"ONIYIDE, Damilola oluseyi",,
"ONIYIDE, Kareem ajani",,
"ONIYIDE, Olufunke abidemi",,
"ONOKPISE, Angela esijemiyotan",,
"ONWUEGBUZIE, Obiageli Deborah.",,
"OPANUGA, Josephine yemisi",,
"OPATOLA, Aderinsola adeyanju titil",,
"OPAYEMI, Abayomi Ayokunle.",,
"OPEBIYI, Ayobami Christianah.",,
"OPEBIYI, Oyesiji abayomi",,
"OPEIFA, Seyi rebecca",,
"OPEJINMI, Yemisi bolatito",,
"OPOMULERO, Olarotimi sulaiman",,
"ORE-OFE, Olusola Ayodele.",,
"OREBIYI, Adebayo adewale",,
"OREDIPE, Oluwakemi Aina.",,
"OREDIPE, Owonire",,
"OREKOYA, Olanrewaju Oluwaseun.",,
"OREKOYA, Ololade michael",,
"ORIDOTA, Omoyinmi  oyenihun",,
"OSALONI, Sandra kehinde",,
"OSANYINGBEMI, Taiwo Oluwaseun.",,
"OSBORNE, Dupe reginah",,
"OSE, Rafiu",,
"OSEKENE, Monday ozume",,
"OSENI, Samod atanda",,
"OSHO, Oluwayemisi oladayo",,
"OSHUNDAIRO, Sakirat Oluremilekan.",,
"OSHUNDAIRO, Taoreed alani",,
"OSIBOTE, Mosturah Olufunmilayo.",,
"OSIDIPE, Fadekemi Adeyemi.",,
"OSIFESO, Olufunke oluyemisi",,
"OSINOWO, Sylvester adeyemi sijuwad",,
"OSINUBI, Florence oluwande oluwara",,
"OSISANWO, Adefemi akindele",,
"OSUNJIMI, Eunice folashade",,
"OSUNJIMI, Sanmi peter",,
"OSUNLEKE, Ruth Aduragbemi.",,
"OSUNWALE, Olusegun Micheal.",,
"OTOYO, Patience ime",,
"OTUNBA, Samuel adedayo",,
"OTUNUGA, Jimoh olawale",,
"OTUSANYA, Oluwole",,
"OWOEYE, Sunday solomon",,
"OWOSEJE, Abibat motunrayo",,
"OYANIRAN, Esther funmilola",,
"OYEBADE, Adedoyin oluseyi",,
"OYEBANJI, Charlotte Olariyike.",,
"OYEDELE, Olalekan Oladimeji.",,
"OYEDEMI, Pamilerin Oluwaseun.",,
"OYEDIRAN, Adeola philip",,
"OYEKANMI, Olukemi Tejumola.",,
"OYEKANMI, Oluwaseyi mariam",,
"OYEKUNLE, Olabisi Wasiu.",,
"OYELA, Taiwo lydia",,
"OYENEKAN, Michael olurotimi",,
"OYENEYE, Akeem ajani",,
"OYENUGA, Bintu damilola",,
"OYESANYA, Abiola Ruth.",,
"OYESANYA, Monsurat Oluwakemi.",,
"OYETAYO, Adetutu bilikisu",,
"OYEWOLE, Kafilat abiola",,
"OYEWUMI, Sanjo simeon",,
"OYEWUMI, Sarafa adeniyi",,
"POPOOLA, Adebusola Roseline.",,
"POPOOLA, Catherine tina",,
"POPOOLA, Olubunmi adejoke",,
"QUADRI, Abimbola oluseun",,
"RABIU, Fatimo Olayinka.",,
"RABIU, Muritala taiwo",,
"RABIU, Noah olamilekan",,
"RAFIU, Adeniyi sebiu",,
"RAFIU, Lasisi agboola",,
"RAHMON, Tunde Abolore.",,
"RAJI, Abdul alani",,
"RAJI, Hussain kehinde",,
"RAMON, Taofeek keji",,
"RASAK, Abiola idayat",,
"ROJAYE, Olukemi Abolanle.",,
"ROTIMI, Olaoluwa Ayoola.",,
"RUFAI, Mukaram alamu",,
"RUFAI, Odunayo olalekan",,
"RUFAI, Serifat bolanle",,
"RUFAI, Taiwo rasaki",,
"RUNSEWE, Abayomi oluwatoyin",,
"RUNSEWE, Omolade Abosede.",,
"SAANUOLU, Afolabi James.",,
"SADIQ, Idayat Oluwatoyin.",,
"SAFUWA, Fatimah adetoun",,
"SAKA, Omosalewa kafilat",,
"SAKIBU, Fadhilat abiola",,
"SALAAM, Saratalai adejoke",,
"SALAKO, Emiola Alani.",,
"SALAKO, Musliudeen olabanji",,
"SALAMI, Adeola Balikis.",,
"SALAU, Wahab",,
"SALAWU, Kudirat nike",,
"SALIU, Funmilayo seun",,
"SALIU, Jamiu Kevin.",,
"SALIU, Titilope Mariam.",,
"SAM-EKUN, Abiodun Oyinade.",,
"SAMSON, Adewale akorede",,
"SAMSON, Omotola christianah",,
"SAMUEL, Olufemi Oladele.",,
"SANGOBIYI, Dorcas Titilayo.",,
"SANNI, Babatunde azim",,
"SANNI, Musiliudeen olajide",,
"SANNI, Olubunmi jumoke",,
"SANNI, Sadia kehinde",,
"SANNI-ADEBANJO, Temitope olabowale",,
"SANSA, Aminat nike",,
"SANUSI, Tajudeen ajibade",,
"SANYAOLU, Kayode solomon",,
"SANYAOLU, Opeoluwa morenike",,
"SANYAOLU, Sidikat Adunni.",,
"SANYAOLU, Victoria taiwo",,
"SHITTU, Folasade adijat",,
"SHITTU, Giyas Adeboye.",,
"SHITTU, Zulaykha Olajumoke.",,
"SHOBOYEDE, Raheem Adekunle.",,
"SHODIMU, Ebenezer Sunday.",,
"SHODIMU, Oladipupo Mathew.",,
"SHODIMU, Taiwo meya",,
"SHODUNKE, Christiana olubunmi",,
"SHOFOLA, Adekunle",,
"SHONAME, Micheal olufade",,
"SHONOLA, Olanrewaju Kazeem.",,
"SHORUN, Francisca olatunde",,
"SHOWUNMI, Bolanle oluwafunmilayo",,
"SHOYEBO, Aliu rotimi",,
"SHOYOMI, Daniel Seunara.",,
"SIKIRU, Akeem adewunmi",,
"SOBOWALE, Mary Tolu.",,
"SODIMU, Oluwaseun elijah",,
"SODIQ, Kamoru ajani",,
"SODIYA, Adekunle samzdeen",,
"SODIYA, Oluwaseun .m.",,
"SODUNKE, Jacob oluwasola",,
"SOETAN, Gbeminiyi abiodun",,
"SOEWU, Ganiyu adetola",,
"SOEWU, Oluwasola Oluwabukonla.",,
"SOGBESAN, Anayimi Helen.",,
"SOGBESAN, Martins olusola",,
"SOGBESAN, Olabisi olajumoke",,
"SOILENU, Adetutu bolanle",,
"SOKALE, Atinuke ireti",,
"SOKUNBI, Folasade Adeola.",,
"SOKUNBI, Sidikatu oluwatoyin",,
"SOLADOYE, Oluremi oluyemisi",,
"SOLAJA, Adedunmola oludayo abike",,
"SOLARIN, Saidat kofoworola",,
"SOLARIN, Titilayo oluwaseyi",,
"SOLARU, Aderonke odunola",,
"SOLOLA, Adetutu oluwafolakemi",,
"SOLOLA, Felicia temiloluwa",,
"SOLOLA, Rebecca Adedayo.",,
"SOLOMON, Mercy esther",,
"SOLU, Bayo adetola",,
"SOLUADE, Bukola",,
"SOMADE, Bisi titilayo",,
"SOMIDE, Titilayo Risikat.",,
"SOMOYE, Emmanuel olayemi",,
"SOMUYIWA, Tolutomi femi",,
"SONDE, Florence adetutu",,
"SONUBI, Olubukola Elizabeth.",,
"SONUGA, Seidat Omobukanla.",,
"SOREMI, Adeyemi awokemi",,
"SORINLO, Kolawole oladeinde",,
"SORUNGBE, Ifeoluwa deborah",,
"SOTOMI, Rachael Ayoola.",,
"SOWUNMI, Ebenezer oluwole",,
"SOWUNMI, Olaniyi olaoluwa",,
"SOWUNMI, Sussanah adejoke",,
"SOYEBO, Fausat",,
"SOYELE, Tawakalitu ajoke",,
"SOYEMI, Iyabode ajoke",,
"SOYEMI, Oluyemi adenike",,
"SOYINKA, Oluwadamilare oluwabunmi",,
"SULAIMON, Ajewole ayisat",,
"SULE, Kehinde agen",,
"SUNMONU, Sikirat olayinka",,
"TAIWO, Deborah olufunke",,
"TAIWO, Mary funke",,
"TAIWO, Micheal olukayode",,
"TAIWO, Solomon Olanrewaju.",,
"TAIWO, Titilayo Florence.",,
"TAJUDEEN, Olukemi adebusayo",,
"TALABI, Oluwabusayomi Esther.",,
"TANIMAWO, Yewande adesola",,
"TAYO-ADELAKUN, Cecilia jumoke",,
"THOMAS, Olufemi olalekan",,
"TIAMIU, Qultum temitope",,
"TIJANI, Adijat Ajoke.",,
"TIJANI, Azeez  Atanda.",,
"TIJANI, Lydia Omolayo.",,
"TIJANI, Nurat olubunmi",,
"TIJANI, Rasidatu modupeola",,
"TOGUNWA, Olawunmi abike",,
"TOPOHOSIN, Iroko",,
"TOSOEDO, Iyewunmi gbenupo",,
"TOWOLAWI, Yetunde bolanle",,
"UBAHA, Glory aniefiok",,
"UDOFIA, Godwin isaac",,
"UGWUTA, Mathias",,
"UNEGBU, Loveday chisom",,
"UWADIA, Fredrick eze",,
"VINCENT, Mary toyin",,
"WHENSU, Josiah Oluwadamilare.",,
"WUSU, Zaccheus",,
"YAHYA, Abdul-rasaq akanni",,
"YAHYA, Modinat Omotola.",,
"YAYA, Adetoun ibilola",,
"YEKINI, Jamiu adisa",,
"YEKINNI, Olufunmilayo abosede",,
"YESIRU, Mufutau abiodun",,
"YINUS, Oluwakemi safuriat",,
"YINUSA, Christiana olusola",,
"YINUSA, Surajudeen",,
"YUSUF, Adedamola monsurat",,
"YUSUF, Adeola omowunmi",,
"YUSUF, Kazeem Adewale.",,
"YUSUF, Lanre azeez",,
"YUSUF, Shefiu Ademola.",,
"YUSUFF, Zainab Atinuke.",,
"ADEBAYO, Adewale david","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ADEGBESAN, Adebusola abimbola","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ADEGUNLE, Rofiat tosin","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ADELEYE, Adetunji adeolu","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ADEWALE, Adebukola abidemi","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"AFOLABI, Adijat mopelola","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"AKINADE, Nofeesat Mopelola.","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"AKINWALE, Charles oluwatoyin","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"AKINWALE, Oluwatoyin abosede","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"BABAYEJU, Oyeyemi oyeladun","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"BALOGUN, Oluwakemi omotayo","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"BALOGUN, Safurat Adunni.","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"BOLARINWA, Kafilat atinuke","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"CAXTON-COLE, Oluwaseun koleade","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"COKER, Olusolape olateju","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"DADA, Christianah oluwakemi","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"DADA, Ojuolape Titilayo.","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"EKWE, Oluwaseyi adedoyin","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"FATOKUN, Johnson ajewole","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"FAYOMI, Oluwaseyi taiwo","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"GANIYU, Aminat adunni","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"KOJEKU, Funmilayo","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"LADIGBOLU, Olufunmilayo victoria","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"MUHEEB, Sulaiman aderemi","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"Mr. BALOGUN,  Gafar kunle","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"Mr. KUSIMO,  Simeon  O.","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"Mr. OSINEYE,  Olugbenga  A.","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"Mrs. KOLAWOLE,  Alice oluyemi","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"Mrs. OSANYINPEJU,  Oluwatoyin sadiat","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"Mrs. SODIPO,  Afolasade abiodun","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ODEBIYI, Kolawole emmanuel","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ODUBELA, Adedamola Ayokunle.","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ODUKOYA, Funke ruth","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ODUSOLA, Babafemi olayinka","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"OKE, Tawakalit Adunni.","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"OLUBIIRE, Adebisi abosede","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"OLUSANYA, Bukola abidemi","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"OYEDOKUN, Adijat motunrayo","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"POPOOLA, Hassan oyegoke","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"SANTA, Olawumi veronica","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"SOBOWALE, Rebecca eyitayo","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"SODEHINDE, Adesina akanbi","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"SOLANKE, Maryam iyabode","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"SOMOYE, Funmilola jiire","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"SOTUNDE, Olufunmilola temitope","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"TOFIO, Adesola motunrayo","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"YUSUFF, Tajudeen adebukola","African Church Grammar School (Jnr), Ita- Iyalode",ABEOKUTA NORTH
"ADETOLA, Modupeola Oluwakemi.",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"ADEYEMI, Haruna Abiodun.",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"ADEYEMI, Victoria Oluwaseun.",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"AHMOD, Taiwo kuburat",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"AKINOLA, Monsurat a.",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"ALARAN, Arinola morenike",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"DANIEL, Abiola ajoke",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"EHIWERE, Modupe oluwatosin",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"FALAJU, Peluola Florence.",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"ISHOLA, Celina oluwayemisi",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"MURTADHO, Taofeeq Tunde.",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"Mr. BAMKOLE,  Olawale abiodun",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"Mr. OGUNSEYE,  Olukayode olusesan",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"Mrs. ASEKUN,  Salimot adeyinka",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"OGUNRINADE, Motunrayo elizabeth",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"OGUNSANYA, Ganiyat adebola blessing",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"OLAJIDE, Rofiat Olusola.",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"OMIKUNLE, Elizabeth alaba folorunso",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"SODIYA, Grace olukemi",Ajiboyede Comprhensive High School,ABEOKUTA NORTH
"ABIDOYE, Emmanuel olayinka","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"ADEBOYE, Fatai isola","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"ADEKOYA, Janet aderonke","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"ADEYEMI, Abimbola omolara","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"AKANDE, Fehintola Hannah.","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"AKINTAYO, Taiwo adebola","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"ANIMASAUN, Lukmon Abiola.","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"AYANNIYI, Oluwaseyi theophilus","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"FALOLA, Oludare yemi michael","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"GANIU, Kayode saliu","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"IJAOLA, Motunrayo Olajumoke.","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"KOLAWOLE, Razaq Ayinde.","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"LAWAL, Abidemi Samson.","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"MADAMIDOLA, Amuda yusuf","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"Mrs. OLUWAYINKA,  Alaba opeyemi","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"OBEY, Ibraheem Adewale.","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"ODUNBAKU, Gbenga olalekan","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"ODUNSI, Magnus olabanji","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"OGBON, Racheal adeola","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"OJO, Aderemi oluwasegun","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"OLIYIDE, Olufunke","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"OWOLABI, Daniel ayinla","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"OYEBOLU, Elizabeth oluwatoyin","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"SODIQ, Bashiru Ayomide.","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"SODIYA, Funmilola olabisi","Ansaru Deen High School, Isaga Orile",ABEOKUTA NORTH
"ADELEKAN, Oluwabukola Ayanpeju.","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"ADENEKAN, Toyin abosede","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"ADESUYI, Funmilayo racheal","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"AKINWANDE, Kayode sunday","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"BABATUNDE, Gloria abosede","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"BANKOLE, Olawunmi feyisara","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"FAYALE, Moses adeniyi","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"IDOWU, Muinat Ajimoh.","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"ISIAKA, Taiwo Muheenat.","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"JOLAOSO, Busayo oladipupo","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"KUYE, Adedayo Victoria.","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"Mr. ALADE,  Idowu oladeinde","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"Mr. OJEKUNLE,  Kayode abiodun","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"Mrs. ADEBOLA,  Elizabeth oluwayemisi","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"Mrs. AJAYI,  Bukola adedola","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"Mrs. AKINRINOLA,  Adeyinka  O.","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"OGUN, Agnes Abiodun.","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"OGUNPOLA, Adebola idayat","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"OLADEJI, Grace yinka","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"OLADOKUN, Tinuke taofikat","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"OYENIYI, Moshood ibraheem","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"OYERINDE, Olubukola tawakalitu","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"SALAKO, Omonike Alimat.","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"VAUGHAN, Titilayo mulikat adewolu","Armyday Secondary School, (Jnr), Alamala",ABEOKUTA NORTH
"ADENEKAN, Oluwasanni zacchaeus","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"ADENLE, Richard pius","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"ADEYEMI, Temitope florence","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"AYODEJI, Foluke abidemi","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"IDOWU, Olubukola abiodun","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"Mrs. ADERONMU,  Oladunni rasidat","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"Mrs. AJIBOLA,  Dorcas anuoluwa","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"Mrs. OGUNDIRAN,  Elizabeth olutoyin","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"OLAYEMI, Rukayat Abidemi.","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"OMOYAYI, Modinat kikelomo","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"OYEWOLE, Sahyeed afolabi","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"SANUSI, Kuburat folasade","Armyday Secondary School, (Snr)",ABEOKUTA NORTH
"ADEFEMI, Olufikayo  atinuke","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ADEKITAN, Adewole joseph","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ADEKUNLE, Ayinde wasiu","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ADELEYE, Adebiyi oladimeji m.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ADENIYI, Adejare tunji","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ADENIYI, Titilayo susanah","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"AFOLABI, Olubanke abayomi","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"AJAYI, Ayoku christiana","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ALAO, Agnes Chekwube.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ANETOR, Ekelekhomen christy","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"BABATUNDE, Oluwafunke Oluwafunmilayo.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"BAKARE, Sekinat Olayinka.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"BECKLEY, Abidemi abolanle","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"FAYEMI, Toyin modupe","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"GBOGBOADE, Jamiu adegboyega","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ILORI, Olugbenga adeola","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"JIMOH, Modinat abolaji","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"Mrs. ABATAN,  Toyin amope","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"Mrs. ADEPEGBA,  Olusola adedoyin","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"Mrs. OLAYODE,  Rebecca olufunmike","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ODEJAYI, Motunrayo Kaliyat.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"OGUNBANWO, Tolani Rashidat.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"OGUNSOLA, Olapeju basirat","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"OJO, Olayemi esther","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"OLANREWAJU, Oluwabunmi ruth","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"OMOTOSO, Rasidat arike","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ONIYIDE, Ganiyat Oluwatoyin.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"OSUNJINMI, Serifat temitayo","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"POROYE, Oluwaseun Toyin.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"SHASORE, Basirat abidemi","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"SODIMU-DAWODU, Oluwa-solabomi kuburat","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"SOREMEKUN, Aminat olubunmi","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"SOYEMI, Joseph","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"TAYO, Adeniyi Adeyemo.","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"YUSUF, Mutiullahi adio","Ebenezer Grammar School, (Jnr), Iberekodo",ABEOKUTA NORTH
"ADEBOLA, Kabiru adisa","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"ADELAKUN, Adunola oluyinka","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"ADELEYE, Fatimot odunyemi","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AJOKU, Chinonye henrietta","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AKANBI, Emmanuel olawale","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AKINPELU SHOETAN, Bukola","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"ALABI, Waheed williams","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AMOO, Rukayat Adeyemi.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AMUSAN, Rachel Olusola.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"ANIMASAUN, Ayobami olalekan","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AYANWALE, Haleemat Bola.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AYODEJI, Mutiu abiodun","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"AYOOLA, Esther olatoyosi","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"BABATUNDE, Samisideen tajudeen","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"FABIYI, Adebimpe Tolu.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"FADAIRO, Saheed Abayomi.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"LAWAL, Ganiyat titilayo","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"Mr. OYERINDE,  Abiodun  I.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"Mr. SHODEKO,  Abdulhakeem d. oladehind","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"Mrs. ODUGBEMI,  Adeola  O.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"OBADINA, Nimotalahi ayinke","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"OGUNDEYI, Nurudeen olalekan","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"OGUNSEYE, Abidemi titus","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"OLADEINDE, Deborah abosede","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"OMOGBEMILE, Bukola olawunmi","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"ONANUGA, Adedayo olukorede","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"OYEWOLE, Olasunkanmi zulikha","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"SALAMI, Fasilat temitope","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"SOETAN, Betty arike","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"SOLUKE, Taobat yomi","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"SOREMI, Taiwo Adesola.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"SUBAIR, Adebayo Gafar.","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"SULEIMAN, Aminat abimbola","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"YEKINNI, Fatimah abolanle","Ebenezer Grammar School, (Snr)",ABEOKUTA NORTH
"ABATI, Adewole Atanda.","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"ADEBAYO, Uthman ayoola","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"ADELANI, Adunni adedunke","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"ADETAYO, Florence olabimpe","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"ADEWOLE, Bolanle riskat","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"AJAYI, Modupe maria","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"AKANDE, Adiat adebola","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"AKINBODE, Ayowale stella","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"AKINSANYA, Ogenevbogaga maria","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"AKINTUNDE, Omotayo olabisi","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"AYODELE, Bola helen","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"AZEEZ, Olalekan alao abodunde","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"BALOGUN, Mary funmi ayobami","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"BANKOLE, Bilikis olasunmbo","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"JAMIU, Tawakalit Olajumoke.","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"KOLAWOLE, Temitope abimbola","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"LASILO, Yetunde elizabeth","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"LEMO, Oluwatosin nike","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"Mrs. AKODU,  Asakun olufunmilayo","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"Mrs. FAFIOLU,  Titilope olajumoke","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"Mrs. OYEKUNLE,  Sidikat oluwayemisi","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"Mrs. SOKEYE,  Folasade olubunmi","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"OGUNBO, Ayokunle micheal","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"OKE, Olufunmi olubunmi","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"OLUMUYIWA, Omotunde elizabeth","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"OLUWALOGBON, Jelili Kolawole.","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"OROBIYI, Victoria Olutola.","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"OTUBANJO, Adenike  oluwakemi","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"OYETUNJI, Mobolaji oyeleye","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"SOMEFUN, Racheal omolara","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"TAIWO, Beatrice Odunayo.","Gateway Secondary School, (Jnr), Ita - Eko",ABEOKUTA NORTH
"ADEDEJI, Sewanu deborah","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ADEFAKA, Rhoda oluwakemi","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ADENUGA, Adetayo Abayomi.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"AGBOOLA, Oluwaseyi Adeyinka.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"AKINDE, Silifat funmilayo","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"AKINYEMI, Olaide kehinde","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"AKOREDE, Kamlu adebayo","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ALABA, Bolaji olaoluwa","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ALAGA, Faruq owolabi","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ALATISE, Abdush-shakoor olanrewaju","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"APENA, Nofisat yewande","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"EFOSA, Masan janet","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"FASHINA, Olubunmi omolara","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"IBRAHEEM IMAM, Abdul-lahi","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"IDOWU, Nofisat Temitope.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"JOHNSON, Samson Ifedayo.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"MOSAKU, Opeyemi Olufunmilayo.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"Mr. GANIYU,  Olatunbosun wasiu","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"Mr. OYEDOKUN,  Caleb idowu","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"Mrs. AKINOLA,  Adeola olayinka","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"Mrs. OYEGUNLE,  Rachael olubisi","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ODAGI, Oluwabukola Benita.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OGUNSANYA, Adekunle sunday","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OKESANJO, Adeola grace","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OKOH, Mary Aladi.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OLANLOYE, Omotoke kesirat","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OLASORE, Omolayo elizabeth","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OMOATAMAN, Eromosele sunday","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ONIYINDE, Olukunle abel","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OYENOLA, Mukaila abiodun","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"OYETAYO, Tope oluwatobi","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"RAJI-ORELOPE, Luqman Iyanda.","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"RUNSEWE, Olusola omowunmi","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"SALAU, Olusesan adedayo","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"WAHAB, Ahmed peter","Gateway Secondary School, (Snr)",ABEOKUTA NORTH
"ADEBULE, John oluwatoyin",Idi- Emi High School,ABEOKUTA NORTH
"ADEDEJI, Adeyemi abiola",Idi- Emi High School,ABEOKUTA NORTH
"ARIBISALA, Olajumoke omotola",Idi- Emi High School,ABEOKUTA NORTH
"DALMEIDA, Basirat oluwaremilekun",Idi- Emi High School,ABEOKUTA NORTH
"OGUNOJUKAN, Esther adebisi",Idi- Emi High School,ABEOKUTA NORTH
"OLOYEDE, Abimbola sakiru",Idi- Emi High School,ABEOKUTA NORTH
"POPOOLA, John oladele",Idi- Emi High School,ABEOKUTA NORTH
"ABIOLA, Rasaki olagunju","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ADEBO, Bukola folakemi","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ADEDIGBA, Fasilat aderonke","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ADEGOKE, Elizabeth folashade","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ADEKUNLE, Folasade kikelomo","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ADEKUNTE, Samson sunday","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ADEOYE, Folake olanike","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ADESINA, Saliu adeyemi","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"AKINLADE, Adepeju esther","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ALARAN, Samod adebayo","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"AYO-ALAGBE, Ademola ayodele","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"BELLO, Taofeek oluwasegun","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ECHI, Emily Elohor.","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"FALOLA, Kehinde olawunmi","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"KAREEM, Nurat aderonke","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"NURAIN, Sherif Oladimeji.","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"OGUNDELE, Victoria temitope","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"OLAGUNJU, Oluwakemi motunrayo","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"OLUBIYI, Babatunde oluwatosin","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"OMOJOLA, Patricia titilayo","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"OMOTOSO, Adenike christianah","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"ONIKEKU, Olajumoke Rasidat.","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"OSENI, Oladunni funke","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"OYEKAN, Segun adewale","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"SOYOYE, Mobolanle mutiat","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"SUBAIR, Bukola adijat","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"TIJANI, Ganiyat anike","Ikija High School (Comb), Ikija Iberekodo",ABEOKUTA NORTH
"AJENIFUJA, Sulaiman Oluwaseun.",Ilewo Community High School,ABEOKUTA NORTH
"AKINDELE, Fatimah Oluwakemisola.",Ilewo Community High School,ABEOKUTA NORTH
"ALADESOFIN, Adekunle Johnson.",Ilewo Community High School,ABEOKUTA NORTH
"DUROJAYE, Abimbola ajoke",Ilewo Community High School,ABEOKUTA NORTH
"EKUNDAYO, Gbenga mathew",Ilewo Community High School,ABEOKUTA NORTH
"FAROTIMI, Olugbenga omoniyi",Ilewo Community High School,ABEOKUTA NORTH
"FAYOMI, Stephen abiodun",Ilewo Community High School,ABEOKUTA NORTH
"IJABOR, Mathew ighowho",Ilewo Community High School,ABEOKUTA NORTH
"Mr. AMUDA,  Oluwatoyin aliyu",Ilewo Community High School,ABEOKUTA NORTH
"Mr. PEREOLA,  Samuel  A.",Ilewo Community High School,ABEOKUTA NORTH
"Mrs. AKINHANMI,  Aina  C.",Ilewo Community High School,ABEOKUTA NORTH
"OGUNAIKE, Tosin Oluwaseun.",Ilewo Community High School,ABEOKUTA NORTH
"SHITTU, Adekemi olayinka",Ilewo Community High School,ABEOKUTA NORTH
"SOFOLUKE, Taiwo olawunmi",Ilewo Community High School,ABEOKUTA NORTH
"ADEBAYO, Adeyinka oluwatosin","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"ADEKUNLE, Josephine Onabolajoko.","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"AJASA, Oluwabusayo aderonke","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"AKINWUNMI, Adepeju olufunmilayo","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"AKOLAWOLE, Olugbenga paul","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"BADMUS, Abimbola abiola","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"BANKOLE, Emmanuel adegoke akineyin","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"IDOWU, Asisat olawunmi","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"IDOWU, Bernice folake","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"KELANI, Blessing ewere","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"MALAOLU, O. aderonke","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"MORENIKEJI, Oredola mobolaji","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"MUOLEEH, Taibat oluwakemi","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"Mr. SOBOLA,  Ibrahim abolaji","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"Mrs. ADESANWO,  Olawunmi abidemi","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"Mrs. OLUWAMBE,  Titilayo olabisi","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"Mrs. POPOOLA,  Monsurat tolu","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"ODENIKE, Abdulkareem abayomi","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OGUNWANDE, Lucy elizabeth","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OKUNLOLA, Olakunle philip","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OLAKUNLE, Kabirat temitope","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OLANREWAJU, Serifat adebunmi","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OLUBUNMI, Christianah olubusayo","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OLUKOGA, Adeyemi alaba","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OMOLAJA, Oluwaseun Ifeoluwa.","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"OYETUBOH, Olayemi oluyinka","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"POPOOLA, Abosede Iyabode.","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"SOGUNLE, Bolanle taofikat","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"TUMBI, Ekundayo julianah","Ilugun High School (Jnr), Elega",ABEOKUTA NORTH
"ABDUL-SALAMI, Bolanle amoke",Ilugun High School (Snr),ABEOKUTA NORTH
"ABIOYE, Dorcas olufunke",Ilugun High School (Snr),ABEOKUTA NORTH
"ADERIBIGBE, Adebola nofisat",Ilugun High School (Snr),ABEOKUTA NORTH
"ADESALU, Olamide Awawu.",Ilugun High School (Snr),ABEOKUTA NORTH
"AFOLABI, Kehinde olumolagun",Ilugun High School (Snr),ABEOKUTA NORTH
"AJAYI, Oluwatobi Oluwadare.",Ilugun High School (Snr),ABEOKUTA NORTH
"AKINDELE, Motunrayo dorcas",Ilugun High School (Snr),ABEOKUTA NORTH
"AKINTUNDE, Kudirat abeni",Ilugun High School (Snr),ABEOKUTA NORTH
"AKINYEMI, Folasade Omobolanle.",Ilugun High School (Snr),ABEOKUTA NORTH
"AKINYEMI, Isiaka idowu",Ilugun High School (Snr),ABEOKUTA NORTH
"ASUBIARO, Azeezat temitope",Ilugun High School (Snr),ABEOKUTA NORTH
"ATEGUN, Akeem babatunde",Ilugun High School (Snr),ABEOKUTA NORTH
"AYELESO, Ayoyinka olugbenga",Ilugun High School (Snr),ABEOKUTA NORTH
"AYO-ALAGBE, Bolaji olaide",Ilugun High School (Snr),ABEOKUTA NORTH
"BABALOLA, Ronke olubisi",Ilugun High School (Snr),ABEOKUTA NORTH
"IDOWU, Omolola Oluranti.",Ilugun High School (Snr),ABEOKUTA NORTH
"JEBOODA, Oluwafemi Samuel.",Ilugun High School (Snr),ABEOKUTA NORTH
"JIDE-AKINTOLA, Titilayo",Ilugun High School (Snr),ABEOKUTA NORTH
"KUSIMO, Monsuru Ajibola.",Ilugun High School (Snr),ABEOKUTA NORTH
"LAUCK, Nofisat Oluwaseun.",Ilugun High School (Snr),ABEOKUTA NORTH
"MAJEKODUNMI, Akinola femi",Ilugun High School (Snr),ABEOKUTA NORTH
"Mr. BADRUDEEN,  Musa  A.",Ilugun High School (Snr),ABEOKUTA NORTH
"Mr. KEHINDE,  Olawale ganniu",Ilugun High School (Snr),ABEOKUTA NORTH
"Mr. ODIMEREHINWO,  Omolayo stephen",Ilugun High School (Snr),ABEOKUTA NORTH
"Mr. OGINNI,  Ebenezer bamidele",Ilugun High School (Snr),ABEOKUTA NORTH
"Mrs. DURODOLA,  Foluso emily",Ilugun High School (Snr),ABEOKUTA NORTH
"Mrs. JACOBS,  Bolajoko olatundun",Ilugun High School (Snr),ABEOKUTA NORTH
"Mrs. LADIPO,  Olabisi temitope",Ilugun High School (Snr),ABEOKUTA NORTH
"Mrs. OGUNBASE,  Christianah  O.",Ilugun High School (Snr),ABEOKUTA NORTH
"ODEWABI, Emily oluseun",Ilugun High School (Snr),ABEOKUTA NORTH
"OGUNTOYINBO, Olutoyin oluyomi",Ilugun High School (Snr),ABEOKUTA NORTH
"OLAWUYI, Olagoke akano",Ilugun High School (Snr),ABEOKUTA NORTH
"OLUFELA, Olufunmilayo olufolake",Ilugun High School (Snr),ABEOKUTA NORTH
"ONADA, Modupe folake",Ilugun High School (Snr),ABEOKUTA NORTH
"OSIYEMI, Adebisi oluwatosin alice",Ilugun High School (Snr),ABEOKUTA NORTH
"OSOBA, Abosede Temitayo falilat.",Ilugun High School (Snr),ABEOKUTA NORTH
"SALAUDEEN, Saidat ayobami",Ilugun High School (Snr),ABEOKUTA NORTH
"TEJUOSO, Maria salimot",Ilugun High School (Snr),ABEOKUTA NORTH
"ABIONA, Fatimo abeni",Imala Community High School,ABEOKUTA NORTH
"ADEBAYO, Bamidele patricia",Imala Community High School,ABEOKUTA NORTH
"AJISAFE, Serifat yetunde",Imala Community High School,ABEOKUTA NORTH
"ALAO, Rofiat Omobolanle.",Imala Community High School,ABEOKUTA NORTH
"FAKILE, Yusuf Kehinde.",Imala Community High School,ABEOKUTA NORTH
"IDOWU, Rebecca ayoola",Imala Community High School,ABEOKUTA NORTH
"MICHEAL, Daniel",Imala Community High School,ABEOKUTA NORTH
"Mr. AFENISUMEN,  Solomon olukayode",Imala Community High School,ABEOKUTA NORTH
"Mr. YUSUFF,  Adekunle taofeek",Imala Community High School,ABEOKUTA NORTH
"OGUNLEYE, Timothy Kayode.",Imala Community High School,ABEOKUTA NORTH
"OJEBIYI, Adeniyi Abiodun.",Imala Community High School,ABEOKUTA NORTH
"OKE, Solomon taiwo",Imala Community High School,ABEOKUTA NORTH
"OLAWOLU, Michael igbehinadun",Imala Community High School,ABEOKUTA NORTH
"OTULANA, Abiodun elizabeth",Imala Community High School,ABEOKUTA NORTH
"SOYOYE, Folake adunni",Imala Community High School,ABEOKUTA NORTH
"ADEBESIN, Mary oluwafunmilayo","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"ADEDAMOLA, Saburi adelekan","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"ADEDOYIN, Folasade aminat","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"ADISA, Oladunni Adejoke.","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"AKAYINODE, Basirat Omowunmi.","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"AKINLEYE, Abimbola oluwakemi","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"AKINWUMI, Oluwakemi adebisi","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"ALADE, Oluwabunmi","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"AMOSUN, Tundun Rashidat.","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"AYEDUN, Oluwaseyi samuel","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"BAGBILE, Eunice abiola","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"BALOGUN, Elizabeth oluyemisi","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"FASOLA, Olamide ganiyat","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"JOLAOSO, Victoria  foluke","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"KOKU, Adewunmi abiodun","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"MORAKINYO, Morufat Dewunmi.","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"Mr. AJIBADE,  Adesola olayiwola","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"Mrs. OMONAIYE,  Grace yemisi","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"Mrs. ONAJOBI,  Bosede bolanle","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"OGUNGBUYI, Oluwatoyin arin-ola","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"OGUNSOLA, Mulikat adeola","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"OGUNTOYINBO, Oluwatoyin wunmi","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"OLOWOKERE, Taiwo adenike","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"OLOYEDE, Lydia omotayo","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"OYERO, Olanrewaju raimot","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"RUFAI, Akeem adedamola","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"RUFAI, Muslimat omolola","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"SHITTU, Fatima abdullahi","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"SIKIRU, Aderoju ameedat","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"SOGEKE, Elizabeth mojisola","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"TOLUWANI, Joseph Olufunmi.","Lafenwa High School (Jnr), Lafenwa",ABEOKUTA NORTH
"ABDUSSALAM, Azeezat Ayinbo.",Lafenwa High School (Snr),ABEOKUTA NORTH
"ADEBAYO, Jamiu Abiodun.",Lafenwa High School (Snr),ABEOKUTA NORTH
"ADEDAPO, Simeon tunde",Lafenwa High School (Snr),ABEOKUTA NORTH
"ADEGBOYEGA, Mujidat temitope",Lafenwa High School (Snr),ABEOKUTA NORTH
"ADEKANBI, Olubukola abosede",Lafenwa High School (Snr),ABEOKUTA NORTH
"ADELEKE, Olufunmike olubusola",Lafenwa High School (Snr),ABEOKUTA NORTH
"ADELOTAN, Serifat kehinde",Lafenwa High School (Snr),ABEOKUTA NORTH
"ADEWUSI, Oluwayemisi Atinuke.",Lafenwa High School (Snr),ABEOKUTA NORTH
"BADMOS, Omolara Olufunmilayo.",Lafenwa High School (Snr),ABEOKUTA NORTH
"EWEBIYI, Rasaki akanni",Lafenwa High School (Snr),ABEOKUTA NORTH
"FAKUNLE, Samuel sunday",Lafenwa High School (Snr),ABEOKUTA NORTH
"IBITOKUN, Adenike Omolara.",Lafenwa High School (Snr),ABEOKUTA NORTH
"JIMOH, Azeez aremu",Lafenwa High School (Snr),ABEOKUTA NORTH
"LADOKUN, Nimotallahi Gbemisola.",Lafenwa High School (Snr),ABEOKUTA NORTH
"Mr. AJAYI,  Felix adekunle",Lafenwa High School (Snr),ABEOKUTA NORTH
"Mr. ENILOLOBO,  Adekunle ajani",Lafenwa High School (Snr),ABEOKUTA NORTH
"Mr. SOBAYO,  Sakirudeen adeola",Lafenwa High School (Snr),ABEOKUTA NORTH
"Mrs. AYOADE,  Rofiat abosede",Lafenwa High School (Snr),ABEOKUTA NORTH
"Mrs. SOTOYINBO,  Aderonke olubunmi",Lafenwa High School (Snr),ABEOKUTA NORTH
"ODUDELE, Kafilat Oyinlola.",Lafenwa High School (Snr),ABEOKUTA NORTH
"OKEDIRAN, Saheed akanbi",Lafenwa High School (Snr),ABEOKUTA NORTH
"OKELABI, Aminat Olatundun.",Lafenwa High School (Snr),ABEOKUTA NORTH
"OLADIPO, Tajudeen adedeji",Lafenwa High School (Snr),ABEOKUTA NORTH
"OLAIBI, Catherine folasade",Lafenwa High School (Snr),ABEOKUTA NORTH
"OLATUNJI, Abosede motunrayo",Lafenwa High School (Snr),ABEOKUTA NORTH
"OLOJEDE, Kudirat alaba",Lafenwa High School (Snr),ABEOKUTA NORTH
"ONIFADE, Ayoola toyin",Lafenwa High School (Snr),ABEOKUTA NORTH
"OROBIYI, Mary oluyemisi",Lafenwa High School (Snr),ABEOKUTA NORTH
"OSUNGBOYE, Oluwatoyin Abosede.",Lafenwa High School (Snr),ABEOKUTA NORTH
"OYEDIRAN, Stephen adepegba",Lafenwa High School (Snr),ABEOKUTA NORTH
"POPOOLA, Temitope beatrice",Lafenwa High School (Snr),ABEOKUTA NORTH
"SALAMI, Folasade Rebecca.",Lafenwa High School (Snr),ABEOKUTA NORTH
"SANYAOLU, Ayobode abayomi",Lafenwa High School (Snr),ABEOKUTA NORTH
"SOBAYO, Elizabeth omolara",Lafenwa High School (Snr),ABEOKUTA NORTH
"SODUNKE, Kemi bolanle",Lafenwa High School (Snr),ABEOKUTA NORTH
"ABDUL-SALAMI, Yetunde salamat",Oke- Ona Grammar School,ABEOKUTA NORTH
"ADEBAYO, Khadeejah",Oke- Ona Grammar School,ABEOKUTA NORTH
"ADEBESIN, Olaitan kabirat",Oke- Ona Grammar School,ABEOKUTA NORTH
"ADEGBITE, Oluwakemi janet",Oke- Ona Grammar School,ABEOKUTA NORTH
"ADEKUNLE, Adetoun ebunlola",Oke- Ona Grammar School,ABEOKUTA NORTH
"ADEPOJU, Yinusa aderemi",Oke- Ona Grammar School,ABEOKUTA NORTH
"ADESANYA, Oluwabunmi olatunji",Oke- Ona Grammar School,ABEOKUTA NORTH
"AKINDELE, Mutiat  temitope",Oke- Ona Grammar School,ABEOKUTA NORTH
"AKINLOLU, Emmanuel Akintomiwa.",Oke- Ona Grammar School,ABEOKUTA NORTH
"AKINOLA, Monsurat apinke abosede",Oke- Ona Grammar School,ABEOKUTA NORTH
"AKINSOJI, Janet oluwayemisi",Oke- Ona Grammar School,ABEOKUTA NORTH
"AKINYEMI, Adesola alaba",Oke- Ona Grammar School,ABEOKUTA NORTH
"AKIYODE, Giaz taiwo",Oke- Ona Grammar School,ABEOKUTA NORTH
"ALARAN, Iqmat Adenike.",Oke- Ona Grammar School,ABEOKUTA NORTH
"ASORONA, Oluwabunmi blessing",Oke- Ona Grammar School,ABEOKUTA NORTH
"AYOADE, Florence adetola",Oke- Ona Grammar School,ABEOKUTA NORTH
"BABALOLA, Rahmot",Oke- Ona Grammar School,ABEOKUTA NORTH
"BANKOLE, Taiwo kayode",Oke- Ona Grammar School,ABEOKUTA NORTH
"BHADMUS-AKOREDE, Shakirat Adebukola.",Oke- Ona Grammar School,ABEOKUTA NORTH
"EWULO, Hephzibah taiwo",Oke- Ona Grammar School,ABEOKUTA NORTH
"FADIRAN, Jimoh ishola",Oke- Ona Grammar School,ABEOKUTA NORTH
"FAGBEMI, Titilayo atoke",Oke- Ona Grammar School,ABEOKUTA NORTH
"FAKOYA, Yemisi adebola",Oke- Ona Grammar School,ABEOKUTA NORTH
"FAKUNLE, Mobolaji grace",Oke- Ona Grammar School,ABEOKUTA NORTH
"FALAJA, Olawale adedeji",Oke- Ona Grammar School,ABEOKUTA NORTH
"HAMZAT, Samrat iyabode",Oke- Ona Grammar School,ABEOKUTA NORTH
"MUKAILA, Ishaq kolawole",Oke- Ona Grammar School,ABEOKUTA NORTH
"Mr. OGUNSOLA,  Johnson olukayode",Oke- Ona Grammar School,ABEOKUTA NORTH
"Mr. OLANIYI,  Emilola  C.",Oke- Ona Grammar School,ABEOKUTA NORTH
"Mrs. OLUWOLE,  Julianah onome",Oke- Ona Grammar School,ABEOKUTA NORTH
"Mrs. Raji,  Abiola folakemi",Oke- Ona Grammar School,ABEOKUTA NORTH
"Mrs. TEJUOSO,  Cecilia oluwakemi",Oke- Ona Grammar School,ABEOKUTA NORTH
"NOSIRU, Surajudeen olawale",Oke- Ona Grammar School,ABEOKUTA NORTH
"ODEGBO, Alake Iyanat.",Oke- Ona Grammar School,ABEOKUTA NORTH
"ODUSOLA, Folasade olubunmi",Oke- Ona Grammar School,ABEOKUTA NORTH
"OLABODE, Busayo Adetutu.",Oke- Ona Grammar School,ABEOKUTA NORTH
"OLATUNJI, Bilikisu bimpe",Oke- Ona Grammar School,ABEOKUTA NORTH
"OLUBIYI, Titilola",Oke- Ona Grammar School,ABEOKUTA NORTH
"OYEWOLE, Motunrayo f.",Oke- Ona Grammar School,ABEOKUTA NORTH
"OYEWUMI, Bola esther",Oke- Ona Grammar School,ABEOKUTA NORTH
"POPOOLA, Musibau Olakunle.",Oke- Ona Grammar School,ABEOKUTA NORTH
"RAHEEM, Moyosola basirat",Oke- Ona Grammar School,ABEOKUTA NORTH
"SANNI, Alimat dupe",Oke- Ona Grammar School,ABEOKUTA NORTH
"SHASORE, Ibrahim olamide",Oke- Ona Grammar School,ABEOKUTA NORTH
"SOLUKE, Jelili Bamidele.",Oke- Ona Grammar School,ABEOKUTA NORTH
"SOMOYE YUSUF, Taiwo Nimotalahi.",Oke- Ona Grammar School,ABEOKUTA NORTH
"SOWUNMI, Ayoola Emmanuel.",Oke- Ona Grammar School,ABEOKUTA NORTH
"ADEJUMO, Adetunji oluwasegun",Olorunda Community High School,ABEOKUTA NORTH
"ADEWALE OJO, Adenike Taibat.",Olorunda Community High School,ABEOKUTA NORTH
"AKINLADE, Olushola Kuburat.",Olorunda Community High School,ABEOKUTA NORTH
"AKOREDE, Shamusideen Opeoluwa.",Olorunda Community High School,ABEOKUTA NORTH
"APETU, Dorcas ayobami",Olorunda Community High School,ABEOKUTA NORTH
"AWONUGA, Agbeke olaide",Olorunda Community High School,ABEOKUTA NORTH
"KUSENTAN, Amos Oluyemi.",Olorunda Community High School,ABEOKUTA NORTH
"MATILUKO, Olayinka joseph",Olorunda Community High School,ABEOKUTA NORTH
"Mr. ABIODUN,  Oluwafemi  O.",Olorunda Community High School,ABEOKUTA NORTH
"OLAOGUN, Semiu akanbi",Olorunda Community High School,ABEOKUTA NORTH
"SOMOYE, Folorunso collins",Olorunda Community High School,ABEOKUTA NORTH
"ADELANI, Risikat adenike",Olumo High School,ABEOKUTA NORTH
"ADELEKE, Ayodeji fisayo",Olumo High School,ABEOKUTA NORTH
"AKINYEMI, Olajide michael",Olumo High School,ABEOKUTA NORTH
"ALAGBE, Olufemi kolawole",Olumo High School,ABEOKUTA NORTH
"EWEBIYI, Falilat adunni",Olumo High School,ABEOKUTA NORTH
"HASSAN, Oluwatoyin Enitan.",Olumo High School,ABEOKUTA NORTH
"IBIRINDE, Aminat arinpe",Olumo High School,ABEOKUTA NORTH
"Mr. ADENIYI,  James olusegun",Olumo High School,ABEOKUTA NORTH
"Mr. JIMOH,  Morenikeji saheed",Olumo High School,ABEOKUTA NORTH
"Mr. JUNAID,  Waheed adebisi",Olumo High School,ABEOKUTA NORTH
"Mr. OJO,  Mayowa timothy",Olumo High School,ABEOKUTA NORTH
"Mr. SOBAYO,  Matthew olu",Olumo High School,ABEOKUTA NORTH
"Mr. SULAIMAN,  Yusuph ademola",Olumo High School,ABEOKUTA NORTH
"Mrs. ABIDOYE,  Olukemi racheal",Olumo High School,ABEOKUTA NORTH
"Mrs. ADEDIRAN,  Wuraolu racheal",Olumo High School,ABEOKUTA NORTH
"Mrs. ADENIYI,  Taiwo  T.",Olumo High School,ABEOKUTA NORTH
"Mrs. AJAYI,  Racheal bolanle",Olumo High School,ABEOKUTA NORTH
"Mrs. ALAO,  Funmilola wunmi",Olumo High School,ABEOKUTA NORTH
"Mrs. BAMKOLE,  Oluwafadekemi odunola",Olumo High School,ABEOKUTA NORTH
"Mrs. KASALI,  Simbat adeola",Olumo High School,ABEOKUTA NORTH
"Mrs. OJO - BRIGHT,  Nimota olukemi",Olumo High School,ABEOKUTA NORTH
"Mrs. OLAGUNJU,  Christi motunrayo",Olumo High School,ABEOKUTA NORTH
"Mrs. OLUGBEMISI,  Oluyinka  C.",Olumo High School,ABEOKUTA NORTH
"Mrs. OMOLADE,  Oluranti ibiyosi",Olumo High School,ABEOKUTA NORTH
"Mrs. SALAMI,  Mopelola olutayo",Olumo High School,ABEOKUTA NORTH
"Mrs. SHASORE,  Afusat  K.",Olumo High School,ABEOKUTA NORTH
"Mrs. SODIYA,  Oluwatoyin agnes",Olumo High School,ABEOKUTA NORTH
"ODUBONA, Remilekun esther",Olumo High School,ABEOKUTA NORTH
"OGUNLEYE, Faidat olanike",Olumo High School,ABEOKUTA NORTH
"OGUNRINU, Mayowa omolola",Olumo High School,ABEOKUTA NORTH
"OLASUPO, Barakat oluwakemi",Olumo High School,ABEOKUTA NORTH
"OLUWAFEMI, Funmilola kike",Olumo High School,ABEOKUTA NORTH
"RAJI, Habibat Olabisi.",Olumo High School,ABEOKUTA NORTH
"SALAKO, Lekan Oluwatosin.",Olumo High School,ABEOKUTA NORTH
"SOETAN, Kehinde Maruff.",Olumo High School,ABEOKUTA NORTH
"SORINLO, Olufunmilayo olubukola",Olumo High School,ABEOKUTA NORTH
"SORUNKE, Ismail ayinde",Olumo High School,ABEOKUTA NORTH
"ADENUGA, Morufat","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"AHMED, Aminat Yemi.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"AJETUNMOBI, Gift Olubusayo.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"AKINSOLA, Tosin adetutu","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"AKINWANDE, Akintomiwa ben","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"ALABI, Khadijat Opeyemi.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"BABARINDE, Eunice arinola","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"FAYOMI, Oluwabunmi dorcas","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"IDOWU, Opeyemi Oluwakemi.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"KOKU, Olaniyi Taiwo.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"ODUNYEMI, Christianah bose","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OGUN, Adebayo kabir","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OGUNBONA, Oluseyi samuel","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OGUNMOYE, Fatimoh Opeolopin.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OGUNSIJI, Ayodele anthonia","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OJELEYE, Oluwatoyin Busola.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OLANREWAJU, Ponle Funmilola.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OLATUNBOSUN, Kehinde oluwakemi","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OLIYIDE, Olusoji festus","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"ONI, Adijat R..","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"OWODEYI, Serifat Olatundun.","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"SHITTU, Bilikiz olabisi","Premier Grammar School (Jnr), Lafenwa",ABEOKUTA NORTH
"ADEGBAJU, Elizabeth dolapo",Premier Grammar School (Snr),ABEOKUTA NORTH
"ADEGOKE, Abiola oluremi",Premier Grammar School (Snr),ABEOKUTA NORTH
"AGBENIGA, Aminu Oluwatosin.",Premier Grammar School (Snr),ABEOKUTA NORTH
"AJAYI, Adeyinka Olumuyiwa.",Premier Grammar School (Snr),ABEOKUTA NORTH
"AKINMAMEJI, Oluwadolapo Mary.",Premier Grammar School (Snr),ABEOKUTA NORTH
"AKINTAYO, Oluwasegun Abel.",Premier Grammar School (Snr),ABEOKUTA NORTH
"AZEEZ, Sakirat modupe",Premier Grammar School (Snr),ABEOKUTA NORTH
"BALOGUN, Samuel abimbola",Premier Grammar School (Snr),ABEOKUTA NORTH
"BANKOLE, Olukayode Olusegun.",Premier Grammar School (Snr),ABEOKUTA NORTH
"DIPEOLU, Morufat Toyin.",Premier Grammar School (Snr),ABEOKUTA NORTH
"DOSUNMU, Gbemisola atinuke",Premier Grammar School (Snr),ABEOKUTA NORTH
"DUROJOLA, Adejumoke Ttilayo.",Premier Grammar School (Snr),ABEOKUTA NORTH
"FAGBENRO, Alli muhammed",Premier Grammar School (Snr),ABEOKUTA NORTH
"FAKUNLE, Deborah oluwatosin",Premier Grammar School (Snr),ABEOKUTA NORTH
"JESUDAINI, Victor oluwafemi kolawole",Premier Grammar School (Snr),ABEOKUTA NORTH
"KOLAWOLE, Iswat temitope",Premier Grammar School (Snr),ABEOKUTA NORTH
"Mr. AKINYOOLA,  Taiwo  O.",Premier Grammar School (Snr),ABEOKUTA NORTH
"Mr. OYEYEMI,  Victor  J.",Premier Grammar School (Snr),ABEOKUTA NORTH
"Mrs. ABIODUN,  Adebukola amudalat",Premier Grammar School (Snr),ABEOKUTA NORTH
"Mrs. AYOADE,  Ganiyat olanike",Premier Grammar School (Snr),ABEOKUTA NORTH
"Mrs. FASHINA,  Olubusola taiwo",Premier Grammar School (Snr),ABEOKUTA NORTH
"Mrs. SALAU,  Oluyemisi omolara",Premier Grammar School (Snr),ABEOKUTA NORTH
"NEJO, Feyisara helen",Premier Grammar School (Snr),ABEOKUTA NORTH
"OGUNDARE, Wasiu Isola.",Premier Grammar School (Snr),ABEOKUTA NORTH
"OGUNEKO, Oluyinka Nike.",Premier Grammar School (Snr),ABEOKUTA NORTH
"OKE, David adelani",Premier Grammar School (Snr),ABEOKUTA NORTH
"OLANIYI, Funmilayo abosede",Premier Grammar School (Snr),ABEOKUTA NORTH
"OLAWUWO, Gbenga Adekunle.",Premier Grammar School (Snr),ABEOKUTA NORTH
"OLIGBINDE, Olatunbosun ayodeji",Premier Grammar School (Snr),ABEOKUTA NORTH
"OLUFOWOBI, Kehinde oluwaseun",Premier Grammar School (Snr),ABEOKUTA NORTH
"OYEGOKE, Akimot funmi",Premier Grammar School (Snr),ABEOKUTA NORTH
"RABIU, Cornelius adesina",Premier Grammar School (Snr),ABEOKUTA NORTH
"SAMBO, Ismail olanrewaju",Premier Grammar School (Snr),ABEOKUTA NORTH
"SHITTU, Musiliu olugbenga",Premier Grammar School (Snr),ABEOKUTA NORTH
"ABIDEMI, Olorunwa florence","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ADEBIYI, Foluke esther","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ADEGBOYEGA, Abayomi owolabi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ADELAKUN, Mojisola mujidat","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ADEOYE, Motunrayo","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AJAYI, Fatimoh abiola","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINBILE, Aminat Olasunbo.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINDE, Tosin ayoade","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINDELE, Olufemi emmanuel","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINLABI, Rafiat ajoke","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINLOTAN, Mary lere","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINODE, Mofoluwake","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINRINADE, Mojisola adebola","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AKINYEMI, Deborah abosede","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"AYODEJI, Tawakalit Olaide.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"BAKENNE, Ismaeel adedolapo .o.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"BALOGUN, Toyibat bolatito","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"BUSARI, Kamilat aderonke","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ERO-PHILIPS, Eunice oluwakemi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"FANU, Abayomi adenrele","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"GBOLA-YUSUFF, Sharon adefunke","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"KUPONIYI, Grace titilade","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"LENTULUS, Abiola  adelayo","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"MATHEW, Tuesday olusegun","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"Mr. AJIBOYE,  Olufemi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"Mr. FAJOBI,  Akintunde","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"Mrs. LAWAL,  Fatimot olapeju","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ODUGBEMI, Oluwakemi ramotalahi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OGUNDIMU, Adunola olutayo","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OLALEYE, Taiwo abidemi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OLAMILEHIN, Adeola abiodun","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OLATUNDE, Regina oluyemisi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OLATUNJI, Olubukola folasade","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OLONADE, Mary Omobolanle.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OLUBIYI, Gbenga theophilus","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OLUMUYIWA, Sarah ajoke","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OMOBOSOYE, Akinfemiwa Foluso.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ONAFUYE, Bukola Oriyomi.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OSUNGBOYE, Adenike Adeyemi.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"OYEBANJI, Babatunde oluwadamilare","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"PHILLIPS, Adeola bamidele","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"POPOOLA, Ayoka catherine","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"SALAKO, Abayomi Waheed.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"SOMIDE, Toyin funmilade","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"SOREMI, Emmanuel olurotimi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"SOTUNDE, Adesina oluyemi","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"SURAKAT-RAUFU, Kudirat Temitope.","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"YUSUF, Jamiyu olayinka","St. Peter's College, (Jnr), Olomore",ABEOKUTA NORTH
"ABASS, Akimot morenikeji","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ABESIN, Victoria oluseyi","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ABIODUN, Oluwadamilola Mary.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ABUMHERE, Victoria oluwakemi","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADEBAKIN,  afolasade Serifat.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADEBESIN, Raulat oluwakemi","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADEBOYE, Olufunke Basirat.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADEIGBE, Olusola olufunmilayo","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADENOPO, Risikat folakemi","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADESIDA, Tinuade Mercy.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADETOKUNBO, Adekunle olaoluwa","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ADEWALE, Olalekan samuel","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"AGBI, Juliana Olubunmi.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"AJAO, Oluwaseun Damilola.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"AJAYI, Abosede atoke","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"AKINOLA, Opeolu timothy","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"AKINSOLA, Adekunle abayomi adebimpe","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ALABA, Abosede esther","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"AYEROJU, Bilikisu aduke","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"AYOOLA, Ibironke salifau","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"BAMGBOSHE, Aderonke Bolanle.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"GARUBA, Serifat olapeju","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"GEORGE, Christianah Temilouwa.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"IGE, Grace Omolara.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"IPADEOLA, Abosede oluronke","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"KOLEOSO, Kabir okanlawon","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"MADANDOLA, Abosede omolara","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"MAJEKODUNMI, Olajumoke abosede","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"MAJOLAGBE, Abosede olujoke","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"MUSARI, Segun omolaja","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"Mr. ADEROKU,  Augustine kayode","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"Mr. MAKINDE,  Oluwaseyi omoyemi","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"Mrs. ADEOGUN,  Florence bukola","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"Mrs. ALFRED,  Omolara temitope","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"Mrs. OSHOLAKE,  Olayemi adedoyin","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"Mrs. SENNAIKE,  Victoria olumide","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"NUGA, Esther oluwafunmileyi","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OBAKURO, Precious Sefunmi.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OBASAN, Olayemi odunayo ayinke","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ODEFENWA, Oluwatayo afolasade","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OGUNDIYA, Olawale Oluwaseun.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OGUNWA, Aderounbi oyeyemi","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OKE, Alice abosede","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OKETOLA, Olabisi ajoke","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OKUNADE, Afusat Adeola.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OLALOKO, Olubunmi omolade","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OLANIYI, Isau alani","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OLATUNBOSUN, Kolawole adisa","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"OLULEYE, Gbonjubola Adeola.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"SHONIREGUN, Olubunmi ajike","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"SHOPADE, Abosede ibukun","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"SIKIRU, Ahmod olayiwola","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"SOGBESAN, Temitope","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"SOMOYE, Adejumoke seun","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"SOMUYIWA, Oluwatoyin Titilayo.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"SOSAN, Samson Oladimeji.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"TAIWO, Basirat Temitope.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"TAIWO, Doyinsola olufunke","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"UBA, Oluwaseun Elizabeth.","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"UGUDU, Emmanuela","St. Peter's College, (Snr), Olomore",ABEOKUTA NORTH
"ABU, Esther Adetutu.","Unity High School,(Jnr)",ABEOKUTA NORTH
"ADARAMOLA, Janet eboselume","Unity High School,(Jnr)",ABEOKUTA NORTH
"ADEBAYO-OYEJIDE, Adefolake oluwaseun","Unity High School,(Jnr)",ABEOKUTA NORTH
"ADEKUNLE, Abiola simbiat","Unity High School,(Jnr)",ABEOKUTA NORTH
"ADENEKAN, Oluyemi abeke","Unity High School,(Jnr)",ABEOKUTA NORTH
"ADENIJI, Comfort Tolulope.","Unity High School,(Jnr)",ABEOKUTA NORTH
"AFONJA, Adeshina toyeeb","Unity High School,(Jnr)",ABEOKUTA NORTH
"AINA, Deborah taiwo","Unity High School,(Jnr)",ABEOKUTA NORTH
"AJAYI, Bunmi bosede","Unity High School,(Jnr)",ABEOKUTA NORTH
"ATANDA, Asinau bolatito","Unity High School,(Jnr)",ABEOKUTA NORTH
"AWOLESI, Latifat bisola","Unity High School,(Jnr)",ABEOKUTA NORTH
"AYOADE, Abiola oluwakemi","Unity High School,(Jnr)",ABEOKUTA NORTH
"BANKOLE, Mudupola abosede","Unity High School,(Jnr)",ABEOKUTA NORTH
"BAYEWUNMI, Fatai aremu","Unity High School,(Jnr)",ABEOKUTA NORTH
"DASAOLU, Rasheed adisa","Unity High School,(Jnr)",ABEOKUTA NORTH
"FADARE, Abimbola oluwakemi","Unity High School,(Jnr)",ABEOKUTA NORTH
"FOLARIN, Samuel oluseyi","Unity High School,(Jnr)",ABEOKUTA NORTH
"IDRIS, Folasade Mariam.","Unity High School,(Jnr)",ABEOKUTA NORTH
"LAWAL, Saidat abike","Unity High School,(Jnr)",ABEOKUTA NORTH
"MEBUDE, Juliana yetunde","Unity High School,(Jnr)",ABEOKUTA NORTH
"Mrs. ADEOTI,  Basirat  O.","Unity High School,(Jnr)",ABEOKUTA NORTH
"Mrs. AJALA,  Adebimpe oluyemisi","Unity High School,(Jnr)",ABEOKUTA NORTH
"Mrs. YUSUFF,  Oyebola  I.","Unity High School,(Jnr)",ABEOKUTA NORTH
"OGUNREMI, Janet Adenihun.","Unity High School,(Jnr)",ABEOKUTA NORTH
"OJELADE, Olusola oluwaseun","Unity High School,(Jnr)",ABEOKUTA NORTH
"OLALEYE, Adebayo ezekiel","Unity High School,(Jnr)",ABEOKUTA NORTH
"OLUWOLE, Oluwafunmilola titi","Unity High School,(Jnr)",ABEOKUTA NORTH
"RUFAI, Mufutau Ajagbe.","Unity High School,(Jnr)",ABEOKUTA NORTH
"SHOTUBO, Iyabo bolaji","Unity High School,(Jnr)",ABEOKUTA NORTH
"SODIQ, Temitope ayobami","Unity High School,(Jnr)",ABEOKUTA NORTH
"SOWEMIMO, Esther oluwaseun","Unity High School,(Jnr)",ABEOKUTA NORTH
"SOWUNMI, Dupe olubukunmi","Unity High School,(Jnr)",ABEOKUTA NORTH
"TINUOYE, Oluyemisi olubukola","Unity High School,(Jnr)",ABEOKUTA NORTH
"ADENIYI, Olanrewaju ibukun","Unity High School,(Snr)",ABEOKUTA NORTH
"AJAYI, Lydia funke","Unity High School,(Snr)",ABEOKUTA NORTH
"BANKOLE, Azeez  titilope","Unity High School,(Snr)",ABEOKUTA NORTH
"GBEMISOLA, Oluwatayo Roseline.","Unity High School,(Snr)",ABEOKUTA NORTH
"ILORI, Musiliatu ronke","Unity High School,(Snr)",ABEOKUTA NORTH
"LAWAL, Zainab abeke","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. ABIODUN,  Kazeem adeniyi","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. ADEAGA,  Jacob adetokunbo","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. AKINDE,  Festus oluwole","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. AKINWALE,  Lawrence tunji","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. AKINWUNMI,  Lanre  E.","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. ALLEN-TAYLOR,  Oludare andrew","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. FASHINA,  Tunde michael","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. KOLADE,  Isaiah abidemi","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. OGUNDIPE,  Sheriffdeen adeola","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. SHITTU,  Jamiudeen omoleye","Unity High School,(Snr)",ABEOKUTA NORTH
"Mr. SOLANKE,  Idowu peter","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. ABIOLA,  Olayinka taiwo","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. AWE,  Oluyemisi abiola","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. COLE,  Abosede  B.","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. LAMIDI,  Kudirat  A.","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. OGUNDIPE,  Busayo deborah","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. OGUNSEYE,  Rahmat adejoke","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. OJO,  Oluwakemi amoke","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. OJO-OLOYE,  Folasade elizabeth","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. OLADIPUPO,  Bukola elizabeth","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. OMOTOYE,  Abidemi mary","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. SODUNKE,  Elizabeth aderonke","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. SORUNKE,  Atinuke ayinke","Unity High School,(Snr)",ABEOKUTA NORTH
"Mrs. TOGUNWA,  Sakirat bolakunmi","Unity High School,(Snr)",ABEOKUTA NORTH
"OLATUNJI, Sarah olubukola","Unity High School,(Snr)",ABEOKUTA NORTH
"ADENIYI, Olufolake  aderike","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"AGBOLAHAN, A. adebusayo","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"AGBOOLA, Victoria iyabode","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"BAMIGBELU, Rebecca modupe","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"BANMEKE, Adiat Yewande.","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"EESUOLA, Gbonjusola oluwamayowa","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"EGBE, Iruehia","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"HASSAN, Mojisola Oluwatoyin.","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"MACJOB, Oluwatoyin christinah","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"Mrs. AKEWEJE,  Moriam abike","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"Mrs. OKI,  Oluseyi  adenike","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OBASAN, Olufolake yetunde","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"ODEWOLE, Adijat atinuke","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"ODUNEWU, Temitope abosede","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OKETOKUN, Comfort omolara","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OLUFUNSO, Omolabake Sakirat.","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OYELUDE, Oluwadamilola olajumoke","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"SONEYE, Olufunmilayo olapeju","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"TAIWO, Bose patience","Abeokuta Girls Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"ABDULKAREEM, Daud Muhammed.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ABOLADE, Nofisat Adeyemi.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADEBAJO, Titilayo seun","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADEBIYI, Grace A.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADEGBOYEGA, Mariam abosede","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADENEKAN, Ismail Abidemi.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADENIJI, Atinuke adebukola","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADENIRAN, Tajudeen adewale","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADESINA, Yetunde bunkayo","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"AINA, Oluwole remmy","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"AJIBODE, Taiwo olugbeminiyi","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"AJILEYE, Florence Anike.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"AKINBODE, Funmilola folashade","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ALAGA, Tawakalitu oluwatoyin","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ATITEBI, Babatunde phillips","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"BABARINDE, Christiana adetomi","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"BOLARINWA, Bunmi omolola","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ENIASORO, Olubukola Titilayo.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"FALETI, Iretioluwa Babajide.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"FATOYINBO, Simeon segun","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"KOYA, Abimbola omowunmi","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"LASISI, Yakub Kehinde.","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mr. INYANG,  Ukeme monday","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mrs. BADMOS,  Doyin ganiyat","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mrs. OZOJE,  Mosunmola oludayo","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mrs. SALAU,  Fatima afolake","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"OLANIRAN, Atinuke titilayo","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"OLORODE, Folake morufat","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"SALAKO, Modupe afolake","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"SHITTU, Alice olusola","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"SOGAOLU, Lawrenta oluranti","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"WAHAB, Oyebimpe ola","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"YUSUF, Aina olamilekan","Abeokuta Girls Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ABIOYE, Adekunle akeem","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEBAYO, Samuel oluwayinka","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEBAYO, Toyin Tunrayo.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEGBOYE, Olugbemi david","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADENIYI, Oluwagbenga samson","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADENIYI, Opeoluwa Adeoti.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEYEMI, Makanjuola omolola","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEYEMI, Omowunmi aminat","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AFELUYI, Taiwo abosede","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AFUAPE, Aborode funmilola","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKALA, Bolanle titilola","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKINRINDE, Kehinde john","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKINSANYA, Abiodun omobolaji","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKINSOLA, Omobolanle rophiat","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ALADE, Esther Oluwatoyin.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ANYASI, Dorcas kikelomo","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"BABAJIDE, Bankole sheu","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"DANIEL, Abosede adenike abimbola","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"FALETI, Olusina hezekiah","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"FATUNBI, Olusegun Abayomi.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"HASSAN, Lateefat Temitope.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"IDOWU, Onayemi mojisola","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ILORI, Adenike eniola","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ISOLA, Sidiqat olasunmbo","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"JULIUS, Afolake omua","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"LAWAL, Omolola fatimot","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"LAWAL, Taiwo adetutu","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. AMOS,  Alani","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mrs. EFUNDIPO,  Olajumoke feyikemi","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mrs. ISHOLA,  Janet oluwakemi","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mrs. ODUMBO-ALASE,  Odunola  A.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mrs. OLALEKAN,  Oyenike  M.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mrs. POPOOLA,  Julianah olayinka","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"NZEMECHI, Ajoke nkem","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ODURONBI, Oluwawemimo temitope","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OGUNREMI, Olubimpe victoria","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OGUNTOLA, Mojisola ganiyat","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OGUNTUYO, Temidayo ayobami","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OKUNLOLA, Oluyemi titilayo","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLADOSU, Folasade elizabeth","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLANIYAN, Christianah oluwaseun","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLATUNJI-ISIOYE, Bolanle Janet.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLAWALE, Favour oluwafunke","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLISA, Abiola Sakirat.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLOYEDE, Olufunmibi olubusayo","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLUDIPE, Olajumoke alice","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLUWADARE, Motunrayo aina","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OMOTOSHO, Olubukunola olawunmi","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OMOTOSHO, Temitayo oluyemisi","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ONADERU, Folasade Oluwakemi.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ONI, Ayodeji abiodun","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ORESOTU, Oluwatoyin Temitope.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OYEDELE, Adedamola bose","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"POPOOLA, Magdalene olufunmilayo","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOFELA, Ibrahim tosin","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOKUNBI, Folashade amudat","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SONDE, Olubunmi busola","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SORETIRE, Temitope Taiwo.","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOTANNDE, Abiodun kabir","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOWEMIMO, Adenike bolanle","Abeokuta Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ABASS, Omolara abolaji","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEBESIN, Aishat afolashade","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEBOWALE, Titilayo aina","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADELAKUN- ABATI, Olufunmilayo aina","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADENAYA, Modupeola abike","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADERIBIGBE, Agnes aderonke","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AJAYI, Bosede mary","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AKINROLE, Margaret temitayo","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ATERE, Akeem ayodeji","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"BAKENNE, Adebola fatimoh","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"BAMGBOYE, Tawakalit olutosin","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"EJALONIBU, Adewumi christianah","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ELEMIDE, Olubukola Atoke.","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"GBADAMOSI, Moruf seun","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"GIWA, Aminat bukola","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ISHOLA, Kabirat adenike","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ITANEYE, Temitayo aramide","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"JOHNSON, Oluwakemi oluyinka","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"KEHINDE-MARTINS, Ebenezer oluwaseun","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mr. AKIYODE,  Ayodele joseph","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mr. JOHN,  Olusola  A.","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. ADEGBITE,  Abosede bernice gift","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. ADELEYE,  Yinka muibat","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. OLUBI,  Omolola jumoke","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. SALISU,  Abiola  T.","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. TAIWO,  Oluyemisi esther","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ODERINDE, Oluwakemi ayotunde","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ODUSOLA, Olusola grace","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OGUNGBE, Matthew  abiodun","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OGUNPOLA, Oluseyi david","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OGUNSILE, Olukolade olatunbosun","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OKEOWO, Ajibola abidemi","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OKETOKUN, Olanike","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OKUKENU, Adisa bolanle","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLABODE, Victor joy","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLADIPUPO, Sulaiman akanbi","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLAPADE, Noimot olayinka","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLOFIN, Ibukun oluranti","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLUGBEMI, Omolola olufunmilayo","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLUKOGA, Yewale Ayomikun.","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ONADEKO, Lawrence adekunle","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"SOMOYE, Kehinde olufunmilayo","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"SONDE, Lanre adigun","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"SULAIMON, Lateefat oluwabunmi","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"TAIWO, Omobolanle ikeolu","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"YINUSA, Akeem adeniyi","Abeokuta Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEWOYE, Grace olubunmi","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"AJAYI, Niyi michael","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"BIOBAKU, Adeola abdul-hafiz","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"ELUYERA, Titilola adeola","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"FASASI, Abosede b.","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"MORENIKEJI, Rashidat adetola","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"Mrs. ADELU,  Olunike  A.","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"Mrs. GREEN,  Grace omotola","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"Mrs. OGUNDOKUN,  Olufumilola omowunmi","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"Mrs. OMIDIJI,  Oreoluwa  A.","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"ODUNLAMI, Oyenike olawunmi","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"OGUNDEJI, Modioluwamu","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"OYENEKAN, Oluwatosin bose","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"OYETUNDE, Caroline omolabake","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"SANGOBIYI, Beatrice segilola","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"SOGUNLE, Sarafadeen Adewale.","Agunbiade Victory High School (Senior), Magbon",ABEOKUTA SOUTH
"ABAYOMI, Catherine Idowu.","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ADEBAYO, Adebisi","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"FADIPE, Isaac oluwasegun","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ISAAC, Olubusayo Omolara.","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ISMAIL, Surat aina folasade","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"KEHINDE, Comfort Busola.","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"KUKOYI, Serah oluwatoyin","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"MOYEGUN, Oluyemisi marian","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"Mrs. AFOLABI,  Olabisi miubat","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OBADIMU, Augustina Oluwakemi.","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ODUTAYO, Titilope adedayo","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OGUNDIMU, David olumuyiwa","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OGUNRINADE, Eunice Olufunmilayo.","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OJO, Temitope ajoke","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OLUDARE, Mercy olulayo","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OLUGBUYI, Saodat iyabo","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OSENI, Elizabeth olukemi","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"SOMOYE, Yusuf olatunji","Anglican High School (Junior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ADEBAYO, Olufunmilola wunmi","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ADENIYI, Fatimoh Olufunke.","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ADEROJU, Grace oluwatoyin","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ADEYEMI, Olujide alade","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"AINA, Morenikeji sarah","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"AKINGBENLE, Rebecca olufunke","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"AROWOLO, Hamidah Kikelomo.","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"AWODELE, Oluwatoyin esther","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"BELLO, Sekinat olasumbo","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"BOLAJI, Olubunmi yemisi","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"DUROWOJU, Kehinde olajoke","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"JOKOSENUMI, Kehinde ayinla","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"KAZEEM, Tawakalitu abolanle","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"KOHOUNFO, Oladunke matilda","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"Mr. OGUNSOLA,  Joseph  B.","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"Mrs. EMENIKE,  Oluwaseun efundeji","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"Mrs. ODUYELU,  Titilayo olufunmilayo","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"Mrs. POPOOLA,  Adijat abosede","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ODEKANYIN, Kolawole","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OLALEYE, Reuben adesoji","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OLUEDUN, Ronke rukayat","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"OLUWOLE, Victoria adenike","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"SOWANDE, Adetutu taiwo","Anglican High School (Senior), Quarry Road, Ibara",ABEOKUTA SOUTH
"ADEBAYO, Tola Christiana.","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ADEDIRAN, Damilola Anuoluwa.","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ADEDUNTAN, Rafat Abioye.","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ADELEYE, Folasade Folake.","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ADEOGUN, Olubunmi esther","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ADEOSUN, Deborah olufunke","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ADEYEMO, Deborah oluwayemisi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"AKOJEDE, Esther Adekiite.","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ANISE, Anike tomilola","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"AYINLA, Grace adepeju odunola","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"COKER, Folasade","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"DASAOLU, Jolade felicia","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"EKUNDAYO, Adebunkunola tawakalit","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ILORI, Temitope modupe","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"KUKOYI, Basirat amoke","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"LOGUNLEKO, Adejoke olayemi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"Mr. BAMGBOYE,  Oluseyi simon","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"Mr. JINADU,  Wahab olatunbosun","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"Mr. OGUNSEYE,  Olubamiji tunji","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"Mr. OGUNTAYO,  Ayotunde olufemi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"Mrs. OLUWUNMI,  Safurat adeola","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ODEDELE, Bosede olanike","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ODUFUYE, Afolake adebisi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ODUNEWU, Musibau Oluwalogbon.","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ODUNMBAKU, Victor tope","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OLAWUYI, Olajumoke omowunmi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OLOKODE, Moriam oluwafunnbi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OLOKODE, Rachael yemisi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OLUFEMI, Esther motunrayo","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OLUMOKO, Oluyinka bosede","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OSEMENE, Opeyemi bunmi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OSINOWO, Bolanle temitope","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OSINUSI, Gloria bolanle","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"OYEDEMI, Olaide olubunmi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"RASAQ, Taofeek Olawale.","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"SALAMI, Kamoru jimoh","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"SHITTU, Victoria yemi","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"YUSUF, Susannah eniola","Asero High School (Junior), Asero",ABEOKUTA SOUTH
"ABASS, Afolabi omotayo","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ADEBAYO, Eniola titilayo","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ADEKANMBI, Funmilayo rebecca","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ADENAIKE, Christianah bukola","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ADENEYE, Olusalewa oludunni","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ADEOYE, Busayo Adija-kuburat.","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ADESINA, Abosede adenike","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ADEWUSI, Olajumoke Abidemi.","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ANYANWU, Chinedum getrude","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"BABALOLA, Dunni adenike","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"BABATUNDE, Ibrahim Adebayo.","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"BAKENNE, Kafilat adeyinka","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"BELLO, Risqat afolake","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"DARAMOLA, Adenike foluso","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"DOSUMU, Abigael","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"DOSUMU, Emmanuel oloruntoba","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"EDE, Adebisi, olawunmi","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ELEMIDE, Olujimi lawrence","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"KEHINDE-OYEYEMI, Adeyinka oredola","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"KOLEOSO, Kemi Florence.","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"Mr. ISHOLA,  Suraju olalere","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. AJAYI,  Folasade toyin","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. OSODE,  Bola olufemi","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. SHAFII,  Kuburat adebola","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. TANIMONURE,  Omolara olusola","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ODEBODE, Funmilola eniola","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ODUSOGA, Rukayat yomi","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"OGUNDAIRO, Nofisat modupe","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"OGUNMORINLE, Ebunoluwa oladayo","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"OKUNEYE, Fadekemi omobolaji","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"OMOLEYE, Funmilayo motunrayo","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"OTUFOWORA, Musifat yemisi","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"OWOLABI, Felix muyiwa","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"OYEDELE, Bilikis abiola","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"SALAMI, Hakeem olatunji","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"SEMOWO, Moshood oludayo olwatosin","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"SESI-JIBOWO, Omoruyi angela","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"SOLABI, Bolanle toyin","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"TOGUNWA, Oluwaseun","Asero High School (Senior), Asero",ABEOKUTA SOUTH
"ABATI, Oluwatosin","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADEBOWALE, Morayo mary","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADENEKAN, Martha olubunmi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADENIYI, Elizabeth oluwayemisi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADEWOLE, Samuel abiodun","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADEYEMI, Elizabeth Kemi.","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADEYINKA, Kazeem Olasunkanmi.","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADIGUN, Victoria iyabode","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"AJAYI, Oluwakemi idowu","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"AJULOLA-AKINDELE, Oluwabusayo oluwafunmike","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"AKINTOLA, Moyosoreoluwa Micheal.","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"AMOSU, Oluwaseun mary","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"BABATUNDE, Oluwakemi afolake","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"BOLA TEJUOSO, Adedapo adebunmi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"KELANI, Abike mariam","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"MAJEKODUNMI, Folashade beatrice","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mr. BILEWU,  Gabriel oluwatoyin","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mr. LAWAL,  Fatai oladimeji","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mr. ODEKUNLE,  Mukaila oluwafemi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mr. OLAYODE,  Shadrach adimu","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mr. SOFELA,  Oludayo olufemi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mr. SOREMI,  Akintunde oluremi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mrs. ABDULRAHMAN,  Tawakalitu kemi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"Mrs. OJEBIYI,  Risikatu adunni","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OGUNSEYE, Peter akinsanmi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OGUNYEMI, Kehinde vctoria","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OKE, Atinuke adeola","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OLADIPUPO, Abidemi fatimo","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OLADIPUPO, Deborah Olayinka.","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OLAOGUN, Adewale boluwatife","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OLOWU, Temilola","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OLUDARE, Damilola tosin","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ONI, Oloruntoyin adewunmi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ONIGBINDE, Felicia oluwatoyin","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OSILAJA, Babafemi idowu","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OYEDELE, Ebenezer olubunmi","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"OYELUMADE, Foluke oluwaseun","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"POPOOLA, Rasheed Oladipupo.","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"SALAU, Abolore adijat","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"SHOGBIYANJU, Kazeem olawale","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"SOGAOLU, Oluyomi Olufemi.","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"SONDE, Akintoye tolulope","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"SOREMEKUN, Olufemi oladimeji","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"TAIWO, Oluwatosin alaba","Baptist Boys' High School (Junior), Saje",ABEOKUTA SOUTH
"ADAM, Bamidele mutiu","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"ADEDEJI, Ireti Dorcas.","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"ADELEYE, Folashade bolanle","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"ADENIYI, Omolola yetunde omotunde","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"AKINLOLU, Bukola atinuke","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"AKINWANDE, Tolulope ayomide","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"BHADMUS, Afusat bolanle","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"FAGBENRO, Idowu olumidola","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"IDOWU, Sakirat Folashade.","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"Mr. ADEGOKE,  Wasiu olalekan","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"Mr. OYENIYA,  Sunday adebayo","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"Mr. TEJUOSO,  Ayoola michael","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"Mrs. HAMEED,  Aderonke  L.","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"Mrs. KUPONIYI,  Caroline","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"ODUSANWO, Deborah olaoluwa","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"OGUNDELE, Jokotade abiodun","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"OGUNFOWORA, Yinka abiodun","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"OLUDOTUN, Olabisi iyabo","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SALAKO, Francisca ibiyemi","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SALAUDEEN, Adewale babatunde","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SANUSI, Ajibola razaq","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SANYAOLU, Florence ajoke","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SOBANDE, Olajide rasheed","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SOKEYE, Ayoku Adeola.","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SORUNKE, Oluwaseun olatobi","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"SOYOYE, Abosede juliana","Baptist Boys' High School (Senior), Saje",ABEOKUTA SOUTH
"ABIODUN, Victoria Abiola.","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEBARI, Adetunwase motunrayo","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEJUWON, Tolulope funmi","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADENIYI, Kayode korede","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEOSUN, Adiat temitope","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEOSUN, Modupe Caroline.","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEOYE, Oluyemi oluwagbemileke","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKANBI, Modupe oluseyi","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKINJOBI, Oluwakemi sarah","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ALAO AKINYEMI, Oyindamola Emmanuella.","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ALAPOTI, Desola raolat","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ANFELA, Mary toyin","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"AROWOSEGBE, Temitope joseph","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"DIPEOLU, Bolajoko adenike","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"DUROJAIYE, Olayinka olaolu","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"IDOWU, Adebukunola adenrele","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"KADRI, Olukemi omolabake","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"LAWAL, Monsurat bolanle","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. OBADINA,  Femi yemi","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. OKELANA,  Ayodeji olanrewaju","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. SOYINKA,  Akeem adedayo","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mrs. AJIBOLA,  Seilat abolanle","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLADEINDE, Abosede omotayo","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ONOSOSEN, Bolanle olubukola","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"RABIU, Iyabo waliat","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"RAIMI, Modinat abake","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"SHOKUNBI, Samuel seyi","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOFOLUWE, Oluwatoyin oluwaseun","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOKANLU, Grace oluwaseyi","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOLOTAN, Olawale","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"SONEYE, Tolulope ajani","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"TAIWO, Taiwo Olufunke.","Baptist Girls' College School (Junior), Idi Aba",ABEOKUTA SOUTH
"ABOYADE, Feyisayo veronica","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEITAN, Roseline adeola","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEOSUN, Blessing omonigho","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADESANYA, Bamidele isreal","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"AKINLEYE, Funke motunrayo","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"AKINSOLA, Olabisi taiwo","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"ATANDA, Abiodun mariam","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"BALOGUN, Omobolanle Adijat.","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"DAUDA FOLARIN, Bolanle morenike","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"GBADEBO, Adesegun emmanuel","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"IDOWU, Aderonke olayinka","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"MUNIR, Tawakalit adewunmi","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"MUSA, Hassan abolore","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"MUSA, Nosifat Adejoke.","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mr. AKINLOLU,  Akintunde emmanuel","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mr. OLADEINDE,  Emmanuel biodun","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. AKPAN,  Oluwatoyin jokotola","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. BADEJO,  Taiwo adepeju","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. DADA,  Opeoluwa aramide","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. OGUNBAMERU,  Titilola jumoke","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. POPOOLA,  Aderonke ajoke","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. POSU,  Abosede  O.","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"OJO, Oluwakemi abiola","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"OKEDOKUN, Olutomi ajike","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"OSHO, Babatunde adedeji","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"SANUSI, Oladele rasheed","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"SHOYOYE, Temitope bolanle","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"SOBANDE, Adebisi","Baptist Girls' College School (Senior), Idi Aba",ABEOKUTA SOUTH
"ABDULLAHI, Adenike","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"ABIOLA, Olubunmi margret","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"ADEBOYE, Adebimpe monsurat","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"BAKARE, Taiwo","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"BELLO, Felicia Olabisi.","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"Mrs. AYONOTE-YUSUF,  Mercy kehinde","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"NUGA, Mary toyosi","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"OBEMBE, Olabisi anike","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"OLADIPO, Oladunni","Catholic Comprehensivve High School (Junior), Panseke, Ibara",ABEOKUTA SOUTH
"ABANISE, Kofoworola Funtan.","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"ABDULFATAH, Mujirat Bode.","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"ADEOSUN, Akinyemi olakunle","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"ADEPENA, Funmi gbemisola","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"ADEYEMI, Timothy olalekan","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"AKANDE, Yakubu alamu","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"AKINWALE, Ikeola Bukola.","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"ALUKO, Dele bilikis","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"BABATUNDE, Bolanle oluwatoyin","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"BELLO, Nofiu adedigba","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"JEJELOLA, Toluwalope james","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"KEHINDE, Kehinde kemi","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"MAJOYEOGBE, Mary boluwatife","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"Mr. ADEJUWON,  Adesanmi adetoyese","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"Mrs. DANSU,  Grace olusola","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"Mrs. OLANIYI,  Abiola modupe","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"Mrs. OLUFEMI,  Titilope margaret","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"Mrs. OYEDELE,  Abosede  O.","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"OKEMAKINDE, Abiola rukayat","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"OLAJIRE, Nurudeen Akanmu.","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"ORIYOMI, Rachael bolanle","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"PETERS, Adesola wunmi","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"RAJI ORELOPE, Aminat aduke","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"SOMUYIWA, Momudat omosalewa","Catholic Comprehensivve High School (Senior), Panseke, Ibara",ABEOKUTA SOUTH
"ADEBAYO, Funmilayo abidemi","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ADEKUNLE, Tolulope Patricia.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ADENIJI, Yetunde Azeezat.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ADESANYA, Suwebat olanike anike","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ADETORO, Fatimot odunola","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"AJAYI, Racheal temitayo","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"AROWONA, Idayat Temidayo.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ATINUKE, Bolanle jemilat","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"AZEEZ, Nofisat oriyomi","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"BAKARE, Abdulazeez adeleye","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"DOLAPO, Kikelomo Omowunmi.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"DOSUNMU, Adebusola oluwayemisi","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"FADIPE, Ismail Olagoke.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"FALOLU, Funmilayo Mary.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"GEORGE, Abosede funmilayo","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"JOSEPH, Adekemi adunola","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"MODIU, Musilimot Adesola.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"Mr. ODUFUYE,  Abimbola oduntan","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"Mrs. ADEEKO,  Grace olujoke","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"Mrs. ADENIYI,  Maryam iyabode amope","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"Mrs. AKINBILE,  Olubinpe olasunbo","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"Mrs. OGUNGBANGBE,  Victoria bosede","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"Mrs. OMOWAYE,  Bolaji adenike","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"Mrs. UTHMAN,  Adiat  I.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OGBONNA, Chinwe edison","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OGUNDIJO, Muheez Oladele.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OGUNYEMI, Abigael tosin","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OLABODE, Abosede nimota olasubomi","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OLAWUYI, Oluwatoyin Oduola.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OLUSANYA, Iseoluwa adebayo","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OLUSOLA-KAMAR, Oluwakemi emmy","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ONOTA, Adenike Omowunmi.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ORIYOMI, Dorcas Oluwakemi.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OSENI, Monsuru Opeyemi.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OTAIKU, Adebola Modupe.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"OYENEKAN, John abiola","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"POPOOLA, Kehinde Olajumoke.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"SHOBAYO, Bolaji alamu","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"SOLANKE, Moshood Olasunkanmi.","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"SOREMEKUN, Rasidat bolanle","Egba Comprehensive High School (Junior), Asero",ABEOKUTA SOUTH
"ABDUL-AZEEZ, Waliat olanrewju","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"ADEBARI, Adedoyin olufunke","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"ADEBESIN, Kolawole adeolu","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"ADEBESIN, Olukayode adebisi","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"ADEKOLA-OJERINDE, Adenike folasade","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"ADEKOYA, Olayinka idayat","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"ADENIYI, Kayode david","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"AKINBANDE, Oluwakemi bola","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"AKINHANMI, Olapeju Abiodun.","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"AKINSANYA, Adedoyin omolara","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"BABAJIDE, Julianah olufunmilola","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"BABATUNDE, Modupe opeoluwa","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"BAFUNSO, Oladayo oladunni","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"BOLUTIFE, Samuel olusegun","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"IBRAHIM, Temitope mujidat","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"KUYE, Yetunde mariam","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"MAKINDE, Oluwaseun adufe","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"MUFUTAU, Olayinka","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mr. AKINLOTAN,  Olujinmi micheal","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mr. OLUGBADE,  Ismail abayomi alao","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. ADEGOKE,  Yemisi  A.","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. ADENIYI,  Tiwalola oluwakemi","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. JOSEPH,  Anike  O.","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. OKEYALE,  Abimbola christiana","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. OLUWADAIRO,  Olufunmilayo omolola","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"Mrs. OYEBEFUN,  Mojisola motunrayo","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OGUNBOYE, Temitope monica","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OGUNJOBI, Rebecca afoluke","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OGUNMUYIWA, Damilola seilat","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OKANLAWON, Aderonke nosimot","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OKESOLA, Fatimah iyabode","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OLAFIMIHAN, Theresa abiodun","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OLAOYE, Yetunde oyewunmi","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OLIYIDE, Iyabode abiola","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OLORUNSOGO-OLUDE, Comfort anujehofa","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OLUKOYA, Aderonke oluyemi","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"SODIPO, Mopelola iyabode","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"SOWUNMI, Dayo olushesi","Egba Comprehensive High School (Senior), Asero",ABEOKUTA SOUTH
"OSHO, Taiwo adebimpe",Head Quarters,ABEOKUTA SOUTH
"ADEDEJI, Grace olubukola","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"ADELEKE, Adedoyin","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"ADELEKE, Akeem Abolore.","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"ADEMOYEWA, Olawole","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"AKINDOYIN, Grace olubukola","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"KODAOLU, Dorcas opeoluwa","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"KUSAMOTU, Phebean Foluso.","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"Mr. OLASIMBO,  Tawakalitu  A.","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"Mrs. AKIN-SHORINOLA,  Kehinde omowunmi","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"Mrs. BAKARE,  Abosede aderonke","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"OLADIRAN, Muinat adejoke","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"RUFAI, Nurudeen Olatunji.","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"SOFELA, Abosede adesola","Igbore High School (Junior), Igbore",ABEOKUTA SOUTH
"ADERIBIGBE, Abosede adebimpe","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"ADESEGUN, Anuoluwapo racheal","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"ADETUGA, Richard temitope","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"AKINRINLOLA, Olubukola adewunmi","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"ALABA, Mary oluwatoyin","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"ASORO, Samuel olugbenga","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"BELLO, Titilayo ismoth","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"DEINDE-DIPEOLU, Mary aderonke ajoke","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"Mr. AKANJI,  Daniel  A.","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"Mrs. AKOLAWOLE,  Adenike adetoun","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"OGUNRINU, Kudirat","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"OTESILE, Alice taiwo","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"RASAKI, Suraju adebayo","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"SOLOMON, Sunday Abiodun.","Igbore High School (Senior), Igbore",ABEOKUTA SOUTH
"ADEDOKUN, Adenike tolulope","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ADEKUNLE, Oluwaseyi Adesanjo.","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ADELAKUN, Adetola olufunso","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ADENIJI, Taiwo hafsat","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ADENIRAN, Omotayo olubunmi","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ADENIYI-KOJEKU, Adefunmilayo margaret","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"AGBEDEJOBI, Olabisi oladunni omolara","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"AJIBADE, Adeleke abiye emmanuel","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"AKINDELE, Olufunke olayinka","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ALLEN, Margaret ololade","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"BANKOLE, Yetunde olayinka","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"BELLO, Morufat fadeke","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"DAVID, Ibukunoluwa Moronke.","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"IFUMA-ALATISE, Yetunde rashida","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"KUSIMO, Adefunmbi florence","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"MAKINDE, Funmibi micheal","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mrs. AKINYELE,  Adeyinka abiodun","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mrs. ODEYEMI,  Oluyemisi bowale","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mrs. ODUNAIYA,  Opeluwa folasade","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mrs. OSHO,  Funmilola  A.","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mrs. OSIPITAN,  Omolola abosede","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ODEYEMI, Adebisi Oluwabunmi.","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OGUNRIN, Aderonke omolara olusade","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OGUNSOLA, Temitope ajoke","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OMONIYI, Temitope Morufat.","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OSAHENI, Ayobami Adeosun.","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OSOKO, Anuoluwapo bimpe","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OYEYEMI, Oluwayemisi florence","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"RAJI, Olabisi wunmi","Ijemo-Titun High School (Junior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ABIOLA, Adeniji","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ABOLADE, Babatunde Mukhtar.","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ADEYINKA, Kehinde oluwakemi","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"AYENI, Oluwakemi adufe","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"BALOGUN, Salamot Ayoka.","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"BANJO-OLAITAN, Esther Abosede.","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"DURODOLA, Agnes Temitope.","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mr. MUSA,  Olalekan  T.","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mrs. BABATUNDE,  Olufunke ajoke","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"Mrs. VAUGHAN,  Aderonke oluyoola","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ODUMADE, Oladimeji adeniyi","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OJOMO, Olajumoke Sayo.","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"OMOSANYIN, Oluwatoyin Olubusola.","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"SMITH, Olusola ikepo","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"TANIMONURE, Samuel oluwasola","Ijemo-Titun High School (Senior), Housing Estate, Ibara",ABEOKUTA SOUTH
"ADEBESIN, Morufu","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"ADENIYA, Basirat bidemi","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"AKANDE, Salimot abosede","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"AKINBOHUN, Olubunmi Olajumoke.","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"ALABA, Odunayo oladunni","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"ALAO, Adebukunola temitope","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"BAKARE, Oluwatoyin","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"DAIRO, Modinat ibironke","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"EGUNJOBI, Felicia Omolola.","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"FAFIOLU, Olusesi babafemi","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"IBIKUNLE, Motunrayo Ifeoluwa.","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"ILEPE, Bolanle rose","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"ILORI, Olusola Rukayat.","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"INNOCENT, Nwadinma peace","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"KILAJOLU, Nimota omosalewa","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"KUSIMO, Gbemisola monilola","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"Mr. AKINJOBI,  Ayodeji adekunle","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"Mrs. ADEBAJO,  Susanah oluwakemi","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"Mrs. ANIMASHAUN,  Olateju  A.","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"Mrs. SALAMI,  Maria tawa","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"Mrs. SODIPE,  Olubukunmi adedayo","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"ODUBIYI, Oyebusola","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"OGUNLAMI, Mojisola olufunmilayo","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"OLAJUMOKE, Sunsula ramota","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"OLALEYE, Ruth folake","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"OWOBAMIRIN, Oluwafunmilayo olajumoke","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"OWOLABI, Iyabo omolara","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"SANYAOLU, Rukayat Olayinka.","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"SODIYA, Morohunkeji yetunde","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"TEJUOSO, Doyinsola Adijat.","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"TINUOSO, Olasumbo oluwakemi","Lantoro High School (Junior), Lantoro",ABEOKUTA SOUTH
"ADEDAYO, Rahmat temilola","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"ADEKANMBI, Bolanle afolasade","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"ADESANYA, Florence Oluwakemi .o..","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"ADESINA, Oluwabusola anne","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"ADEYEMI, Bidemi hannha","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"AKINBO, Fatimo Oluwatoyin.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"AYOADE, Victoria olawunmi","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"AYOOLA, Idayat Olaide.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"FAGBEMI, Bolatito Abidemi.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"FALANA, Nusirat kikelomo","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"IBIKUNLE, John abiona","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"KEHINDE, Gbolahan david","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"LAWAL, Rodhiat abiola","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"Mr. OLOYEDE,  Babatunde ajibola","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"Mrs. BUBA,  Clementina enogiomwan","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"Mrs. OKOKOARHAYE,  Racheal oluwatoyin","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"Mrs. OLAJIDE,  Olubunmi  M.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"Mrs. SOYOMBO,  Kemi elizabeth","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"ODUTAYO, Aminat omotunde","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OGUNBANJO, Grace omowunmi","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OGUNJOBI, Opeyemi ramota","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OKE, Comfort Blessing.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OKESANYA, Olayinka abosede","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OLAIYA, Olutunde sunday","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OLANIYI, Obafemi solomon","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OLUGBADE, Kabirat bolape","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OLUSI, Oriyomi susannah","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OMISORE, Ikeoluwa tolulope","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OMOTOLA, Adedoyin rebecca","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"ONAJOBI, Tokunbo esther adeola","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"OYENOLA, Olumide Paul.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"POPOOGBE, Motunrayo olayinka","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"SANUSI, Temitayo adefoyeke","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"SODUNKE, Mildred Ngozi.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"YAHYA, Rofiat Omowunmi.","Lantoro High School (Senior), Lantoro",ABEOKUTA SOUTH
"ADEBAYO, Funmilola sayo","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ADEYINKA, Yetunde bernice","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AJAYI, Morenikeji Abigeal.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AJIFOLUSE, Adegoke ayoade","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKINTADE, Kola olanrewaju","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AKINWUNMI, Samuel  oluwagbenga","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AMOS, Taiwo afolashade","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AROWOSEGBE, Olufunke romoke","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AWONUGA, Olukemi omiladun","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"AYORINDE, Ngozi","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"BABALOLA, Omowunmi adijat","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"BAKARE, Margaret oluwatoyin","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"BUHARI, Rukayat Olayinka.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"DISU, Muyibat olajumoke","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"EJEH, Francis ogbike","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ELEGUNDE, Toyin amope","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"FADIPE, Victoria tunmise","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"IBRAHIM, Oluwasola Serifat.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"IWAYEMI, Folasade Chistianah.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"JOSEPH, Olufumilayo mary","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"MUNIR, Sarafadeen Oluseyi.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. AJIKANLE,  Adeshina sakiru","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. ALAO,  Fasiu babayemi","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. AREMU,  Michael sunday","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. SOYOYE,  Taofeek alabi","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"Mr. SULAIMON,  Olatunji","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ODERINDE, Tawakalitu Olabisi.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OGUNJIMI, Sarah saidat","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OGUNKUNBI, Modinat Akanke.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OJEBIYI, Olubusayo adunni","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLADIMEJI, Arinola Halilat.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLADIPO, Elizabeth Titilayo.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLUBANWO, Oluwatosin Arike.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLUMUYIWA, Janet olubusayo","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OLUTUNDE, Fehintola bosede","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OMOLADE, Temidayo bolanle","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OTUN, Fausat olaide","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"OYEBO, Deborah bosede","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"POSU, Olufunmilayo eshter","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"RAHEEM, Omolara Modupe.","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SANGOSANYA, Muyiwa","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SANUSI, Abolade mutiu","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SHONDE, Atinuke monsurat","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"SOKEYE, Daniel seyi","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"TEMIDAYO, Omoboye florence","Lisabi Grammar School (Junior), Idi Aba",ABEOKUTA SOUTH
"ABASS, Sekinat abimbola","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEBESIN, Olusey ibraheem","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEBIYI, Victoria oluyinka","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEEKO, Abiodun adewale","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADESINA, Olugbenga johnson","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADETORO, Maruf ademola","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ADEWALE, Adesola yetunde","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AJAYI, Funmilola ruth","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AJAYI, Itunu sarah","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AJAYI, Taiwo john","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AJETUNMOBI, Aminah anike","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AKINOLA, Olajumoke eunice","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ALOGI, Owolabi folawe","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"AYANBODE, Anna ajuma","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"FAJINMI, Abigeal adeola","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"IKOTUN, Omolola Halimot.","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"KUSIMO, Sunkanmi bisoye","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"KUYORO, Comfort olukemi","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"LAWAL, Sulaiman alabi","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"LENTULUS, Adedeji demos","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mr. ADENEKAN,  Israel oladimeji","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. BAMIGBADE,  Abosede oluwayemisi","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"Mrs. IBIRINDE,  Eunice olubusayo","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ODELAJA, Afoluso esther","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ODEWALE, Olusola abiodun","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ODULE, Olubunmi olanike","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OGUNYANWO, Olutoke elizabeth","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OKANLAWON, Oluwatoyin Hannah.","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLAKUNLE, Adejoke Margaret.","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLATOKE, Adebo medinat","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLOKODANA, Iyabode comfort","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLONADE, Adebayo oladimeji","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLONADE, Ganiyat motunrayo","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLUBUNMI, Temidayo oluwagbemi","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OLUGBEJE, Abiodun idowu","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"OMITOLA, Olumide sunday","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ORIJA, Oluwadunsin Nike.","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"SALAMI, Bolatito afusat","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"SHOWANDE, Funmilayo olabisi","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"SIMEON, Oluwatosin oladapo","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"SOBANDE, Oluwaseun sunday","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"TAIWO, Abigail aderele","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"TIJANI, Saheed adeniyi","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"WILLIAMS, Mojisola","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"YINUSA, Taibat Mojisola.","Lisabi Grammar School (Senior), Idi Aba",ABEOKUTA SOUTH
"ABIONA, Taiwo oluwaseyi","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"ABOLADE, Tawakalit","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"ADEJOJU, Oluwaseun iyabo","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"AJASA, Fadekemi Fausat.","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"AKINWALE, Oluwaseun adetokunbo","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"AKINWILLIAMS, Deborah oseyemi","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"IDOWU, Olubunmi Joke esther.","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"LAWAL, Folasade arinola","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"Mrs. ADENIYI-RAIMI,  Modupe","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"Mrs. EKE,  Adetutu","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"Mrs. FAWEHINMI,  Adeola  O.","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"Mrs. NGENE,  Olufunke florence","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"Mrs. ORIOLA,  Olubukunola abiola","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OGUNWA, Oluwabukola temitayo","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OLOWOLAGBA, Adebola nofiu","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OLUBORI, Afolashade Shakirat.","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OLUDIMU, Adekemi temitayo","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OLUDIMU, Roseline kofoworola","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"OMITOGUN, Bolanle Oluwakemi.","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"ORISABIYI, Titilayo folasowo","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"POPOOLA, Seye oladimeji","Macjob Grammar School (Junior), Onikolobo",ABEOKUTA SOUTH
"ABASS, Monsurat olayinka","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ABIONA, Ojuolape olatunde","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADEBAYO, Adewale matthew","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"AKINPELU, Olaitan iyabode","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"AKINRINDE, Folorunso sarah","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"AYOPO, Olubola adeola","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"EDUN, Olufemi kolawole","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"EWADE, Yinka alaba","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"IMADU, Oluwakemi Abosede.","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"JOLAOSO, Ibironke olufunmilayo","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mr. AKINLAWON,  Idris olalekan","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mr. EDIDI,  Olubodun oluwafemi quadr","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mrs. FADEHAN,  Morenike victoria","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mrs. ODUNLAMI,  Anthonia  A.","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mrs. OJO,  Hannah oluwaseyi","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"Mrs. ONIYIDE,  Florence olukemi","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"OGUDU, Olubusayo oyinlola","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"OGUNSOLA, Olubukola olasumbo","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"OLADEHINDE, Olabisi grace","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"OLOPADE, Iyabo afolakemi","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"OMOSONWON, O.oluwafunmilayo0","Macjob Grammar School (Senior), Onikolobo",ABEOKUTA SOUTH
"ADEBAYO, Odunayo mary","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"AYO-ALAGBE, Modupeola mercy oluwaseyi","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"DADA, Olapeju omolara","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"FOLAWOLE, Oluranti remi","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"IKHIDE, Chika nnenna","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"ILUFOYE, Sakariyau amuzat","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"LEMO, Sadiat bolanle","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"LESHI, Deborah funmilayo","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"Mr. ADEYEMI,  Babatunde olaniran","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"Mrs. SALAMI,  Olubunmi omobolawo","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"OKUBADEJO, Olugbenga adeniyi","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"SORINMADE, Bukola seun","Methodist High School (Junior), Ogbe",ABEOKUTA SOUTH
"ADESANYA, Adebimpe olawunmi","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"ADEYEMI, Aderonke omotunde","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"ASHADE, Iyunade leah","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"AZEEZ, Banwo Afolake.","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"BAMIDELE, Halimat Adebimpe.","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"EDWARD, Olayinka funmi","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"EFUNYOOLA, Adeola oluwakemi","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"FAGBIRE, Adenike paulina","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"FATAI-SOSANYA, Oluwaseyi Abidemi.","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"IKUEBOLATI, Bayo david","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"JOLAOSO, Sanya adisa","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"Mr. SALISU,  Oyeniyi nureni","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"Mrs. JUNAID,  Oludayo mary","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"Mrs. JUNAID,  Olusola  T.","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"Mrs. ODUKOYA,  Adenike adeola","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"OBADINA, Rasheed adekunle","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"ODEBIYI, Iyabode oredola","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"OLABISI, Esther Titilayo.","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"OLADOTUN, Adeyinka afusat","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"OLOKEDE, Olubunmi ayobami","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"OSUNBIYI, Bukola funmilayo","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"SALAKO, Sakirat olufunke","Methodist High School (Senior), Ogbe",ABEOKUTA SOUTH
"ADEBAYO, Abosede olusola","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ADEKANMBI, Saburi adebisi","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ADESEGUN, Oluwayemisi caroline","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ADESENI, Adenike oluwaseun","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ADIGBO, Veronica bola","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"AJIBOLA, Azeezat Iyabo.","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"AKINWANDE, Olabisi remilekun","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"AWOYEMI, Ganiyat ajoke","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"BALOGUN, Omowunmi hajimat","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"BANKOLE, Abiodun oladipo","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"FANIYI, Ijeoma Olabisi.","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"GANDONU, Lawrence dagbeyon","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"IDOWU, Abosede omobola","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"KEHINDE, Monsur owolabi","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"LAWAL, Wasiu alabi","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"MAJEKODUNMI, Abiodun olufunmilola","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ODUBENA, Foluke mary","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ODULEYE, Florence oluwafunmilayo","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"OMONIYI, Mojisola grace","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ONABAJO, Olatunde Ayodele.","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ONAKOYA, Mojisola abidemi","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"QUADRI, Temitope Sekinat.","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"SETEOLU, Adebisi omolade","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"SIKIRU, Oriyomi omotayo","Nawair-Un-Deen High School Junior, Isabo",ABEOKUTA SOUTH
"ADENIJI, Comfort yetunde","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"ADEOSUN, Ajibola Oluwaseun.","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"ADEWUSI, Titus olalekan","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"AFOLABI, Oluwatoni Awele.","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"AFOLABI, Wasiu alao","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"AHMED, Lateefat tinuola","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"AKHALU, Faith Ofe.","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"AKINSOLA, Yetunde Damilola.","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"AKINWANDE, Soyemi ayinde","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"AROGUNDADE, Mulikat moturayo","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"BIOBAKU, Adeola bernice","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"DIPEOLU, Sikiru adeola","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"KUFORIJI, Aderonke suliat","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"Mrs. BANJO,  Hannah abosede","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"ODERINDE, Lateefat omolara","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"OKUNADE, Basirat ayodeji","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"OKUWA, Adebimpe olabisi","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"OLADIPUPO, Aishat Yetunde.","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"OLUSANYA-ISEOLUWA, Titlayo anike","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"OSUNDE, Olukemi olubukola","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"OYEBADE, Adedoyin victoria","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"RASAK-OYADIRAN, Fausat ayo","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"SHOYOYE, Opeoluwa Taiwo.","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"SOJOBI-ALOGI, Yemisi temitope","Nawair-Un-Deen High School Senior, Isabo",ABEOKUTA SOUTH
"ABIOLA, Akintunde adedeji","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ABIOYE, Oluwagbemiga abiodun","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ADEKOYA, Dorcas Oluwatoyin.","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ADEROHUNMU, Rasheedat olatokunbo","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ADESINA, Rasidat kehinde","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ADEYANJU, Oluwakemi funmilayo","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"AKHALUMHE, Deborah oluwabunmi","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"AKINTAYO, Mercy Yetunde.","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"AKIODE, Abosede funmilayo","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ANIMASHAUN, Ayodele ireti","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"BANJOKO-AKINTOMIDE, Morayo","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ERINFOLAMI, Morufat folasade","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"IDOWU, Olutayo daniel","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"KARUNWI, Bernice omodunke taiwo","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"Mr. OLUSESI,  Ibrahim  O.","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"Mrs. AKIODE,  Olutayo busayo k.","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"Mrs. FALUYI,  Olabisi abosede","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"Mrs. OLADIPO,  Yetunde ibironke","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"Mrs. ONAYEMI,  Alice olalekan","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"Mrs. SOYINKA,  Oluyemi aina","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OBADINA, Serah oluwatobi","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OGUNLEYE, Sururat motunrayo","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OGUNTOLA, Sola ganiyat","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OGUNTOYE, Emily doyin","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OJO, Florence omowunmi","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OLAKUNLE, Serifat oluwatoyin","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OLAYIWOLA, Adijat ronke","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OSENI, Oluwabunmi adedayo","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"OYEJOLA, Adetola abeni","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"QUADRI, Adebukola oluwatoyin","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"SOBANDE, Oluwabusola omolara","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"UWELU, Eruemulor philomena","Reverend Kuti Memorial Grammar School (Junior), Isabo",ABEOKUTA SOUTH
"ADENEKAN, Mofolasade oluwatosin","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"ADERINWALE, Isiwat olawanle","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"AKINYEMI, Ramota","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"ARIYIBI, Saubana Sunmade.","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"AWOJOBI, Olusegun stephen","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"AYANDELE, Gbemi segun","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"AYOADE, Adewale Babatunde.","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"BABALOLA, Taiwo hannah","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"FASAKIN, Olufunmilola Oluwafpemi.","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"Mr. ADESENI,  Olushegun  sunday","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"Mr. OGUNSOLA,  Sunday  A.","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"Mr. OSI,  Taofeek adetunji","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"Mr. YUSUF,  Maruf oladimeji","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"Mrs. OLUTOBERU,  Omoniyi kehinde","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"Mrs. SODIPE,  Oluwabunmi oluwaseyifunm","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"OGUNFUWA, Olajumoke abosede","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"OGUNGBAYIKE, Bukola tawakalit","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"OGUNNIRAN, Mary oluwafunmilayo","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"OSOKO, Abiodun olabode","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"OTAYEMI, Yewande dolapo","Reverend Kuti Memorial Grammar School (Senior), Isabo",ABEOKUTA SOUTH
"ABIODUN, Adetutu Adesewa.","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"ADEBOYE, Esther omolara","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"ADENEKAN, Tolulope Sherifat.","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"ADESINA, Bosede olapeju","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"AJIBODE, Babatunde emmanuel","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"AJISEMOLA, Omotola kate aina","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"AKANBI, Olubusayo omotola","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"AKEJU, Adenike Olamiji.","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"AKINDE, Omotayo rhoda","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"BURAIMO, Afolasade omolara","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"ELEMIDE, Abosede olabisi","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"ERINOSO, Olusola Christianah.","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"FADIPE, Fatimo mobolaji","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"IDRIS, Ganiyat Olayemi.","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"MULERO, Abiodun Ayodeji.","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"Mrs. FAGBUYI,  Florence oluwayemisi","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"Mrs. MAKINDE,  Abiola abosede","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"Mrs. OKEREKE,  Bertha ego","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"OGUNSAKIN, Adebanwo","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"OKUNLOLA, Grace olubunmi","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"OLAGUNJU, Abosede omolabake","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"OLANREWAJU, Temitope julius","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"OLATUNDE, Funke omolara","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"OSHIN, Opemipo Damilola.","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"OYENEYE, Olubusayo","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"SOTOMI, Oluwatosin esther","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"SOYINKA, Mukaila olatunji","Saint John's Anglican High School (Junior), Kuto",ABEOKUTA SOUTH
"AWAYE, Olayinka Olayemi.","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"BABALOLA, Adebimpe Modupe.","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"BABALOLA, Olutayo titus","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"ENILOLOBO, Olalekan Adeniyi.","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"FASESIN, Olabisi o.","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"KAREEM, Ayinde aliu","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"LAWAL, Funmilayo Seun.","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"LIASU, Kazeem okanlawon","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"Mr. JIMOH,  Abiodun galeeb","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"Mrs. BAKARE,  Omolara  O.","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"OBADINA, Folorunso james","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"OBAJIMI, Semilola olawunmi","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"OBEDAT, Idowu adebisi","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"OGUNRONBI, Oluwarotimi o.","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"OKESOLA, Esther funmilola","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"OLADEJO, Omoniyi mayowa","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"SEKONI-DAIRO, Moriliat agboola","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"SOLOLA, Olanrewaju olalekan","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"TEJUOSO, Emmanuel olusesan","Saint John's Anglican High School (Senior), Kuto",ABEOKUTA SOUTH
"ADENIJI, Monsurat Omonike.","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"AFOLABI, Asisat oluwaseun","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"AJAYI, Temilade adeshola","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"AKINPELU, Khadijat titilayo","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"AKINTAN, Aminat Omolabake.","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"ANUNLOPO, Bosede","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"AZEEZ, Oluwaseyi david","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"JAGUNMOLU, Fausat omowunmi","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"JOSEPH, Atinuke patience","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"Mr. AYINDE,  Adewale emmanuel","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"Mr. OYENEKAN,  Kolawole ben","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"Mrs. ADEROKU,  Omolara oluwafunmike","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"Mrs. SAKA,  Olusola folasade","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"OLATEJU, Oluwakemi Julianah.","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"RUFAI, Mariam Abimbola.","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"SHOYOYE, Josephine oluwaseyi","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"SODIYA, Kolawole oladayo","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"YISA, Abdulahi olawale","Saint Leo's College (Junior), Onikoko",ABEOKUTA SOUTH
"ABIOYE, Oluwasesan oluwaremi","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"ADEPOJU, Comfort Temilade.","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"AFOLABI, Rachael idowu","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"AJAGUNNA, Elizabeth moji","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"AKINTARO, Bolatito nafisat","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"COLE, Yetunde patience .o.","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"IDOWU, Toyin adebola","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"ILORI, Jesutofunmi Opeyemi.","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"Mr. SHITTU,  Babatunde sikiru","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"Mrs. ADEFOLAHAN,  Kudirat adejoke","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"Mrs. ADERINTO,  Adebanke adekitan","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"Mrs. AYINLA,  Oluwabunmi  O.","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"OJURE, Adijat bolanle","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"OKETOKUN, Abdul-sabur olushina","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"OLIYIDE, Oluyomi Akinyode.","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"OSEJI, Temitope   tunrayo","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"SOLAJA, Ibijoke omolade","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"SOTOLA, Olufunmilayo Gbemisola.","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"TAIWO, Adesegun oluwadare","Saint Leo's College (Senior), Onikoko",ABEOKUTA SOUTH
"ABDUL, Seun Olajide.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ABIADE, Taiwo ayisat","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADEBOWALE, Adetunji Sunday.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADEDEJI, Saidi babatunde","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADEKUNLE, Kayode","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADELESI, Elizabeth bolanle","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADENIJI, Mathew adewumi","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADEYEMI, Busayo Ruth.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADEYEMI, Oluwafunmike Florence.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADEYEMI, Samuel ibukun","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"AGBENIYI, Kafayat olubunmi","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"AKISANMI, Oladayo akinbiyi","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"AYEGBAJEJE, Ahmad Habeebullah.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"DIYAN, Gbenga titus","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ELEMIDE, Adesola rachael","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"FADIPE, Olayemi toyin","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"FALEYE, Olusola olufunmilola","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"FATOYE, Oluwakemi hannah","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"IGESOLA, Olamide Temitope.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"LASISI, Mojisola Victoria.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"MUHAMMED, Bolajoko temitope","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"Mrs. AJASA,  Olukemi alice","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"Mrs. ESEBAMEN,  Stophina ngozichukwu","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"Mrs. KILASHO,  Mariam  O.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"Mrs. SENFUYE,  Oluwarotimi rebecca","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"NICHOLAS, Modupe Elizabeth.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ODURONBI, Taiwo olumide","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"OGUNWEMIMO, Funmilola Abosede.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"OGUNYINKA, Olabisi adetutu","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"OKEOWO, Comfort oluwakemi","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"OLADIPO, Adebisi folake","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"OLAOGUN, Ayobami olayinka","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"OLUGBADE-OGUNDOKUN, Ganiyat omotayo","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ORIDOTA, M. olubunmi","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"OWOADE, Tolulope yetunde","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"SHOBIYE, Abolore Oyindamola.","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"SOREMEKUN, Aderonke mary","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"TELLA, Adebisi alice","Saje High School (Junior), Saje",ABEOKUTA SOUTH
"ADEBARI, Musibau abiodun","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"ADESINA, Afolake joke","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"ADEWOLE, Oluwagbenga amos","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"EHUWA, Abiola Esther.","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"EWULO, Emmanuel babatunde","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"Mr. SOFOWORA,  Adesina olusola","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"Mrs. OMITOGUN,  Afolasade aderonke","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"OSUNLAJA, Hammed","Saje High School (Senior), Saje",ABEOKUTA SOUTH
"ADANDE, Ebunoluwa Ayobami.",Adie Owe Comm High School,ADO-ODO OTA
"ADEBANJO, Oluwakemi anthonia",Adie Owe Comm High School,ADO-ODO OTA
"ADEDEJI, Idris adetunji",Adie Owe Comm High School,ADO-ODO OTA
"AGOSU, Rebecca Mauyon.",Adie Owe Comm High School,ADO-ODO OTA
"AMOS, Eunice Titilopemi.",Adie Owe Comm High School,ADO-ODO OTA
"BABATUNDE, Damilola Temitope.",Adie Owe Comm High School,ADO-ODO OTA
"BANKOLE, Christiana bola",Adie Owe Comm High School,ADO-ODO OTA
"IDOWU, Waliu Jimoh.",Adie Owe Comm High School,ADO-ODO OTA
"LAWAL, Quadri Olawale.",Adie Owe Comm High School,ADO-ODO OTA
"Mr. AKANDE,  Olusanjo adejoju",Adie Owe Comm High School,ADO-ODO OTA
"Mr. BELLO,  Muftau  akolawole",Adie Owe Comm High School,ADO-ODO OTA
"Mrs. ADEBAYO,  Gbemisola dolapo",Adie Owe Comm High School,ADO-ODO OTA
"Mrs. FAGBEMI,  Victoria temitope",Adie Owe Comm High School,ADO-ODO OTA
"OBOH, Olajumoke esther",Adie Owe Comm High School,ADO-ODO OTA
"ODUGBEMI, James taiwo",Adie Owe Comm High School,ADO-ODO OTA
"OKETADE, Bukola abiola",Adie Owe Comm High School,ADO-ODO OTA
"OLUFUNMI, Nurudeen olugbemiga",Adie Owe Comm High School,ADO-ODO OTA
"SALIS, Hasanat Taiwo.",Adie Owe Comm High School,ADO-ODO OTA
"AVOSEH, Israel Deyon.","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"BISIRIYU, Kabiru Akande.","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"HAROON, Qosim Ajadi.","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"JIMOH, Ayisat Iyabo.","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"Mrs. ADELAKUN,  Victoria oluwakemi asule","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"ODUNAYO, Mojeed ajani","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"OLADELE, Funmilayo Abigael.","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"OLATUNJI, Mary Olufunmilayo.","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"TIJANI, Aminat Yetunde.","Ado-Odo High School (Junior), Ado-Odo",ADO-ODO OTA
"ADEJUMO, Joseph Olusina.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"AKINOLA, Anthonia Temitayo.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"DEINDE, Busirat Odunayo.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"HUNGE, Sewanu olugbenga","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"HUNWI, Abayomi Sewanu.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"IGE, Oluwasegun Hezekiah.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"Mr. ALAKA,  Diran najeem","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"Mrs. AJUWON,  Deborah modupe","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"OGUNFOLAJU, Olajumoke Maureen.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"OLARINDE, Alice Oluwabukola.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"OLAYANJU, Segun Olatunde.","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"OPALEYE, Sekinat funmilayo","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"OSONUGA, Iyiola amos","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"ZINSU, Francis ahisu","Ado-Odo High School (Senior), Ado-Odo",ADO-ODO OTA
"ADEBAYO, Itunnu ayobami",African Church Comm. H. School,ADO-ODO OTA
"ADEJARE, Adeshina yussuf",African Church Comm. H. School,ADO-ODO OTA
"ADEMOLA, Oyedele oyenike",African Church Comm. H. School,ADO-ODO OTA
"AGUNREGE, Olubusola iyabode",African Church Comm. H. School,ADO-ODO OTA
"AJAO, Fatimoh busayo",African Church Comm. H. School,ADO-ODO OTA
"AWOLOLA, Jumoke victoria",African Church Comm. H. School,ADO-ODO OTA
"BABATUNDE, Rasheed akano",African Church Comm. H. School,ADO-ODO OTA
"EWEDAIRO, Oluwatoyin florence",African Church Comm. H. School,ADO-ODO OTA
"FAGBOTE, Oluwatoba emmanuel",African Church Comm. H. School,ADO-ODO OTA
"FOLARIN, Kehinde busola",African Church Comm. H. School,ADO-ODO OTA
"GODFREY, Felicia bolanle",African Church Comm. H. School,ADO-ODO OTA
"KAYODE, Samuel Olatoye.",African Church Comm. H. School,ADO-ODO OTA
"LAWAL, Dauda",African Church Comm. H. School,ADO-ODO OTA
"Mr. OJEKUNLE,  Oluwaseun",African Church Comm. H. School,ADO-ODO OTA
"Mr. OLUGBADE,  Ariyo mathew",African Church Comm. H. School,ADO-ODO OTA
"Mr. SOYODE,  Seyi olumuyiwa",African Church Comm. H. School,ADO-ODO OTA
"Mrs. AWOJOBI,  Oluseye oluremi",African Church Comm. H. School,ADO-ODO OTA
"Mrs. OGUNDEJI,  Olubusayo teju",African Church Comm. H. School,ADO-ODO OTA
"Mrs. OLUSOJI,  Esther omolade",African Church Comm. H. School,ADO-ODO OTA
"OBADIMU, Samson olubayo",African Church Comm. H. School,ADO-ODO OTA
"OLAONIPEKUN, Modupe oluwaseyi",African Church Comm. H. School,ADO-ODO OTA
"OLUOKUN, Fatimo aina",African Church Comm. H. School,ADO-ODO OTA
"OREFEJO, Kayode felix",African Church Comm. H. School,ADO-ODO OTA
"OSOFOWORA, Olushola morenike",African Church Comm. H. School,ADO-ODO OTA
"OYEGUNLE, Adedoyin rasidat",African Church Comm. H. School,ADO-ODO OTA
"OYEWUNMI, Adetola elizabeth",African Church Comm. H. School,ADO-ODO OTA
"SOBULO, Abiodun olajumoke",African Church Comm. H. School,ADO-ODO OTA
"ADENUSI, Temitope victoria","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"AREMU, Eyitayo nike","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"AYENI, Caroline taiwo","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"AYORINDE, Morenike Anthonia.","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"BELLO, Bilikiss Dunni.","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"DAVID, Oyeyemi solomon","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"GABRIEL, Temitopeoluwa adekemi","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"HAMZAT, Modinat olasumbo","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"IBRAHIM ABBAS, Olubunmi wakilat","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"KAFFO, Abimbola adenike","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"KUSAMOTU, Abibat aderonke","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"Mr. KUDORO,  Adewale tosin","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"Mrs. OGUNMOLA,  Mary adekemi","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"OGUNGBADE, Olufunke Opeyemi.","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"OJO, Omolola adeduntan","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"OLAKANPO, Abimbola olatilewa","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"OLALERU, Olubukola olamide","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"RAJI, Azeezah olabisi","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"SAMSON, Felicia oluwatoyin","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"STANLEY-UFOT, Deborah ajoke","Agbara Community Junior High School (Junior), Edu",ADO-ODO OTA
"ABIOLA, Morufat adeola","Agbara Community Senior High School, Edu",ADO-ODO OTA
"ADEBISI, Oluwakemi abosede","Agbara Community Senior High School, Edu",ADO-ODO OTA
"BADMOS, Adetunji Mutiu.","Agbara Community Senior High School, Edu",ADO-ODO OTA
"BAMTEFA, Bukola elizabeth temitope","Agbara Community Senior High School, Edu",ADO-ODO OTA
"HUNPEGAN, Olamiji olayemi","Agbara Community Senior High School, Edu",ADO-ODO OTA
"Mr. BAMGBOSE,  Kehinde","Agbara Community Senior High School, Edu",ADO-ODO OTA
"Mrs. AKINSIKU,  Abimbola adetoun","Agbara Community Senior High School, Edu",ADO-ODO OTA
"Mrs. AKINSOLA,  Morenike  M.","Agbara Community Senior High School, Edu",ADO-ODO OTA
"Mrs. ATURAKA,  Olubukola funmilola","Agbara Community Senior High School, Edu",ADO-ODO OTA
"Mrs. OGUNRINOLA,  Elizabeth mojirade","Agbara Community Senior High School, Edu",ADO-ODO OTA
"Mrs. OKONJI,  Ilami jessica","Agbara Community Senior High School, Edu",ADO-ODO OTA
"OGUNYEMI, Abosede ajoke","Agbara Community Senior High School, Edu",ADO-ODO OTA
"OLOYEDE, Florence Folake.","Agbara Community Senior High School, Edu",ADO-ODO OTA
"PEDRO, Mary mojisola","Agbara Community Senior High School, Edu",ADO-ODO OTA
"SALAU, Jamiu adewale","Agbara Community Senior High School, Edu",ADO-ODO OTA
"SALIU, Oluwakemi funke","Agbara Community Senior High School, Edu",ADO-ODO OTA
"TAKORO, Nuratu Abiodun.","Agbara Community Senior High School, Edu",ADO-ODO OTA
"YUSUF, Shakirat olusade","Agbara Community Senior High School, Edu",ADO-ODO OTA
"ADEDIRAN, Bilikis Oluwakemi.","Agbara Grammar School, Agbara",ADO-ODO OTA
"AJAKAYE, Marcellinah funmilayo","Agbara Grammar School, Agbara",ADO-ODO OTA
"AKINDE, Vivian foluke","Agbara Grammar School, Agbara",ADO-ODO OTA
"AREGBEDE, Blessing Oluchi.","Agbara Grammar School, Agbara",ADO-ODO OTA
"BANKOLE, Oluwaseun Temitope.","Agbara Grammar School, Agbara",ADO-ODO OTA
"DARAMOLA, Modinat aderoju","Agbara Grammar School, Agbara",ADO-ODO OTA
"DAUDA, Bukunola rasidat","Agbara Grammar School, Agbara",ADO-ODO OTA
"EZE, Kate Chioma.","Agbara Grammar School, Agbara",ADO-ODO OTA
"METONU, Joshua Monday.","Agbara Grammar School, Agbara",ADO-ODO OTA
"Mr. AWOKOYA,  Fatai adeola","Agbara Grammar School, Agbara",ADO-ODO OTA
"Mr. EESUOLA,  Abiodun adebanjo","Agbara Grammar School, Agbara",ADO-ODO OTA
"Mr. OGUNBIYI,  Mathew folarin","Agbara Grammar School, Agbara",ADO-ODO OTA
"Mr. RASAKI,  Morufu oladimeji","Agbara Grammar School, Agbara",ADO-ODO OTA
"Mrs. EZEKIEL,  Bridget ifeoma","Agbara Grammar School, Agbara",ADO-ODO OTA
"Mrs. ODUSANYA,  Deborah olabissy","Agbara Grammar School, Agbara",ADO-ODO OTA
"Mrs. OSUNLOYE,  Olabisi mojisola","Agbara Grammar School, Agbara",ADO-ODO OTA
"OBIDARE, Kikelomo omolola","Agbara Grammar School, Agbara",ADO-ODO OTA
"OBIKOYA, Ibukun babatunde","Agbara Grammar School, Agbara",ADO-ODO OTA
"OPALEYE, Iyabo olawunmi","Agbara Grammar School, Agbara",ADO-ODO OTA
"SALAUDEEN, Modupe arike","Agbara Grammar School, Agbara",ADO-ODO OTA
"SANUSI, Raimot Temitope.","Agbara Grammar School, Agbara",ADO-ODO OTA
"SULAIMON, Oluwakemi mulikat","Agbara Grammar School, Agbara",ADO-ODO OTA
"ADEDEJI, Grace abosede",Ajogbo Grammar School (Junior),ADO-ODO OTA
"ADEDIGBA, Stella",Ajogbo Grammar School (Junior),ADO-ODO OTA
"ADEMUYIWA, Mariam omotayo",Ajogbo Grammar School (Junior),ADO-ODO OTA
"AFOLABI, Rachael omowunmi",Ajogbo Grammar School (Junior),ADO-ODO OTA
"AKA, Kehinde basirat",Ajogbo Grammar School (Junior),ADO-ODO OTA
"ALABI, Olanrewaju rotimi",Ajogbo Grammar School (Junior),ADO-ODO OTA
"ASAFA, Temilola Serifat.",Ajogbo Grammar School (Junior),ADO-ODO OTA
"BELLO, Feyisara aduke",Ajogbo Grammar School (Junior),ADO-ODO OTA
"CHUKWUDIFU, Modupe mobolanle",Ajogbo Grammar School (Junior),ADO-ODO OTA
"GBADEBO, Oluwatoyin abimbola",Ajogbo Grammar School (Junior),ADO-ODO OTA
"Mr. SOGEYINBO,  Morooph adeniran",Ajogbo Grammar School (Junior),ADO-ODO OTA
"Mrs. AFOLABI,  Bolatito adenike",Ajogbo Grammar School (Junior),ADO-ODO OTA
"Mrs. AKINOLU,  Adebusola sadia",Ajogbo Grammar School (Junior),ADO-ODO OTA
"Mrs. KAREEM,  Kehinde fatihat",Ajogbo Grammar School (Junior),ADO-ODO OTA
"ODUGBEMI, Funmilola omotunde",Ajogbo Grammar School (Junior),ADO-ODO OTA
"OKE, Atinuke anthonia",Ajogbo Grammar School (Junior),ADO-ODO OTA
"OKE, Olawale adekunle",Ajogbo Grammar School (Junior),ADO-ODO OTA
"OLAJIDE, Falilat Abosede.",Ajogbo Grammar School (Junior),ADO-ODO OTA
"OLUSANWO, Oluwole Adewale.",Ajogbo Grammar School (Junior),ADO-ODO OTA
"OLUWAWIBE, Toyin olayinka",Ajogbo Grammar School (Junior),ADO-ODO OTA
"OSINUPE, Monisola Mary.",Ajogbo Grammar School (Junior),ADO-ODO OTA
"OYEBANJI, Olukayode olagoke",Ajogbo Grammar School (Junior),ADO-ODO OTA
"ADEBAYO, Funmilayo mary",Ajogbo Grammar School (Senior),ADO-ODO OTA
"ADENIRAN, Samson Mayowa.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"AKINTOYE, Olubunmi elizabeth",Ajogbo Grammar School (Senior),ADO-ODO OTA
"AKINWANDE, Olubunmi olufunke",Ajogbo Grammar School (Senior),ADO-ODO OTA
"AKINYEMI, Margret damilola",Ajogbo Grammar School (Senior),ADO-ODO OTA
"ALAMU, Foluke Christianah.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"AROGUNDADE, Kabirat Abiodun.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"EVBOTOKHAI, Deboerah abeni",Ajogbo Grammar School (Senior),ADO-ODO OTA
"JINADU, Olawale dauda",Ajogbo Grammar School (Senior),ADO-ODO OTA
"MOIBI, Kuburat Opeyemi.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"Mr. ADETOLA,  Omotayo adeleke",Ajogbo Grammar School (Senior),ADO-ODO OTA
"Mr. OYAWALE,  Gabriel olusegun",Ajogbo Grammar School (Senior),ADO-ODO OTA
"Mr. TAIWO,  Olukorede samuel",Ajogbo Grammar School (Senior),ADO-ODO OTA
"Mrs. ADEGBOYEGA,  Abiola  A.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"Mrs. ODEBISI,  Adebola abike",Ajogbo Grammar School (Senior),ADO-ODO OTA
"Mrs. OLAYEMI,  Bolanle  A.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"OGUNKOYA, Solakunmi bukola",Ajogbo Grammar School (Senior),ADO-ODO OTA
"OLANIPEKUN, Christianah Adedoyin.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"OLAWALE, Olasunbo olufunke",Ajogbo Grammar School (Senior),ADO-ODO OTA
"RAJI, Gbadegeshin yekini",Ajogbo Grammar School (Senior),ADO-ODO OTA
"SORINOLU, Olukemi moronke",Ajogbo Grammar School (Senior),ADO-ODO OTA
"TEREBO, Ayodele Gbeminiyi.",Ajogbo Grammar School (Senior),ADO-ODO OTA
"AJAYI, Omobola abosede","Alamuwa Grammar School (Junior), Ado Odo",ADO-ODO OTA
"AKAPO, Adesola olayinka","Alamuwa Grammar School (Junior), Ado Odo",ADO-ODO OTA
"AWOLALU, Comfort oluwaseun","Alamuwa Grammar School (Junior), Ado Odo",ADO-ODO OTA
"Mrs. OLAWOLE,  Janet bosede","Alamuwa Grammar School (Junior), Ado Odo",ADO-ODO OTA
"Mrs. SANUSI,  Elizabeth modupe","Alamuwa Grammar School (Junior), Ado Odo",ADO-ODO OTA
"ABIODUN, Waliu alani","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"ADEBESIN, Olufemi adebayo","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"ADEDEJI, Ezekiel Olusanya.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"ADEOLU, Elizabeth Adeola.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"AINAMO, Suurulere bolaji","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"AJAYI, Dorcas Opeyemi.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"ALAKA, Musliat olatunde","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"AMUSA, Kamorudeen","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"BAMIDELE, Olawale abolaji","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"BOTON, Francis","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"GBAJOBI, Jacob oluesegun","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"HUNGBO, Anago","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"HUNSU, Setonji Michael.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"MANG-JUH, Davou gyang","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"Mr. JOLAYEMI,  Sunday  J.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"Mrs. WHETO,  Eunice oluwayemisi","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"NUPO, Timoteu Kehinde.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"OLAOYE, Olusegun olusola","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"ONANUGA, Samsam adeolu","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"OSANYINBI, Ibrahim ola","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"SALAU, Saheed Olayiwola.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"WHENU, Lawrence Babatunde.","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"ZINVOEDO, Gbetoho olusegun","Alamuwa Grammar School (Senior), Ado Odo",ADO-ODO OTA
"ABATII, Monsuratu aduke","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"ADEBESIN, Joseph olusegun","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"AINA, Anike Margaret.","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"AJAYI, Bukola rachael","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"AKINBO, Ayorinde Abidemi.","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"AKINTUNDE, Solomon olatunde","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"ALABI, Amudalat abioye","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"BABATUNDE, Adi  bolanle","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"DUROJAIYE, Yemisi titilayo","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"LAMIDI, Shefiu abiodun","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"LAWAL, Omotayo simiat","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"MAJEKODUNMI, Sanmi funmilola","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"MORENIGBADE, Kafayat Seyi.","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. ABOLARIN,  Toluwapemi abidemi","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. AKINBORO,  Rasheedat omolara","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. AKINOSI,  Modupe saudat","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. DAHUNSI,  Toyin modupe","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. FAJUKE,  Susan abosede","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. NEWMAN,  Lydia modupe","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. ONILOGBO,  Mariam bukola","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. OTULANA,  Bolape ajoke","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OGUNJIMI, Rukayat Oluwatoyin.","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OJAREVAHA, Mayowa Oluwatomisin.","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OKERE, Mathew abiodun","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OLADOSU, Oluwatoyin titilayo","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OLAITO, Elizabeth funmilola","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OLALEYE, Masidat adelola","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OLANIYAN, Rahmot titilayo","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OLAYEMI, Jimoh alani","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"ONIFADE, Ismaila adisa","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"ONILOGBO, Oluwaseun dorcas","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OSUNDAIRO, Olalekan adebayo","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"OYEGOKE, Margret odunayo","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"SALAWU, Rebecca titilope","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"SOYINKA, Eniola oluwatoyin","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"SULAIMON, Wasilat abosede","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"TALABI, Jelilat adejoke","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"TOMILAWO, Catherine jumoke","Anglican Grammar School (Junior), Ota",ADO-ODO OTA
"ADANLAWO, Folayemi olubunmi","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"ADENIRAN, David adesola","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"ADETOYINBO, Muritala adedamola","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"AJIBOLA, Olayinka Esther.","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"AKINDE, Baseerat omotayo","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"AKINLIYI, Kolawole olawale","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"AKINREMI, Remilekun omotayo","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"AKINSANMI, Bolanle olapeju","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"AROLE-JESU, Adeyinka Olubunmi.","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"AWOSANYA, Risikat adenike","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"BELLO, Monsurat adenike","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"LAD-DUROJAYE, Anes oluwatoyin","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mr. OGUNRONBI,  Ibrahim oladeinde","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mr. SOBANDE,  Eniola adejoke","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. ADEKOYA,  Saidat ayomiku","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. BOLARINWA,  Racheal temitope","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. OKE,  Folasade ebunoluwa","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. OKUNADE,  Esther Arike","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. OLALEKAN,  Aderonke omodele","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. OMIREMI,  Oluranti taiwo","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"OJO-OLAJUGBE, Mojisola olanike","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"OLOSUNDE, John olusesan","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"OMONIYI, Temitope abolaji","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"OSINEYE, Olatunji sunday osuolale","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"SANUSI, Oyetunji ahmed","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"SHITTU, Motunrayo musiliat","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"TAIWO, Oluwatoyin bosede","Anglican Grammar School (Senior), Ota",ADO-ODO OTA
"ADEDOKUN, Mosidat abolore","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ADEKANLE, Agnes Temitope.","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"AJADI, Olubunmi kathryin","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"AKINSINDE, Deborah taiwo","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"AMORE, Michael olawale","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"AMUSAN, Bolanle safiat","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ASIWAJU, Rufus taiwo","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ASUMO, Oluremilekun enitan","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ELEGBEDE, Bolaji mosunmola","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"FALOLA, Roseline  ayinke","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"FALOMO, Taiwo asanat","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"IFERE, Rose ekwutoziam","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"Mrs. BAMIGBADE,  Funmilayo olunike","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"Mrs. OLAKOTAN,  Adedunmola mary","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"Mrs. OTEGBADE,  Olasumbo oluwakemi","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ODUGBEMI, Elizabeth bunmi","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ODUTOLA, Modupeola abioye","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"OGUNBAMOWO, Kikelomo bernice","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"OLUSESI, Moriamo adenike","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ONANUGA, Olumide ademola","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"SALAM-OLOKE, Fausat Kikelomo.","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"SALAU, Adebola Cecilia.","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"SANYAOLU, Lateefah Motunrayo.","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"SHORUNKE, Bukola sumbo","Ansar-Ud Deen Compre College,Itele",ADO-ODO OTA
"ADEGBITE, Ademola johnson","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ADENE, Bolanle monilola","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ADEOYE, Adejoke Oluwaseun.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ADETOLA, Jokotade bamidele","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ADEYANJU, Oluwaremilekun Suliat.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"AMINULLAHI, Bamidele luqman","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ANIGIORO, Elizabeth aderonke","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ATERE, Ayisat funmilayo","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"AWOYEMI, Bukola janet","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"AYELAGBE, Afolake christianah","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"AYODELE, Elizabeth funke","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"BABATOBI, Janet mobolanle","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"BABATUNDE, Raimot anike","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"BADRU, Caroline oluwafunke","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"BELLO, Sakirat modupe","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ENEJI, Olubunmi veronica","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"GBOLAGADE-TAIWO, Morufat temitope","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"HASSAN, Bola kamlat","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"IDOWU, Elizabeth Abosede.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"IGE, Grace oluwakemi","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"Mr. IBRAHIM,  Muhammad jumat","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"Mr. IDOWU,  Olujide sunday","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"Mr. OMIREMI,  Moruf  A.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"Mrs. OGUNSIMIRO,  Oluwaseyi seun","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"Mrs. OGUNYINKA,  Aderonke  Y.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ODUDARE, Ojuolape Ajoke.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ODUNEYE, Olayinka Ibiwumi.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OHANWUSI, Halimah adebunmi","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OLABISI, Abibat kehinde","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OLABODE, Rasidat abimbola","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OLALEYE, Olukemi folake","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OLANIRAN, Sunday adeola","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OLATIDOYE, Bambo biodun","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OLATUNBOSUN, Yetunde wauraola","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OMAI, Pamela  uzoma","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OYEDOKUN, Busayo adeola","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"OYETAYO, Seun benjamin","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"SALAMI, Titilayo azeezat","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"SAMUEL, Idowu olayinka","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"SULAIMON, Ibrahim olalekan","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"TAIWO, Toyin Deborah.","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"YEROKUN, Adekunle","Ansar-Ud-Deen. Comprehensive College (Junior), Ota",ADO-ODO OTA
"ABAYOMI-OREKOYA, Tosin Shola.","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ABDUL-GANIY, Sidikat olawale","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ABDUL-SALAM, Kemi rantiola","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ABIOYE, Elizabeth adekemi","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ADENIJI, Arinola bilikis","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ADEOYE, Muyideen olugbenga","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ADEWALE, Modinat olasumbo","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ADEYIOLA, Ibrahim adeyemi","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"AJIBOSO, Micheal olaniyi","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"AKINYEMI, Morufat Opeyemi.","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"BALOGUN, Sakirat mojisola","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"BANJO, Olufunsho victoria","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"BELLO, Grace Temilayo.","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"DARAMOLA, Adebimpe elizabeth","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"DOPEMU, Sunday ayodele","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"EGBERINDE, Ganiyu abayomi","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ELEGBEDE, Patience arinola","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"IGE, Abosede arike","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"IMMANUEL, Ngozi chienyem","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"IZUNMWANNE, Precious moniye","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"LAWAL, Fausat omolara","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mr. OGUNDIPE,  Adekunle isamail","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mr. OJEYINKA,  Kazeem jimoh","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mr. OMOYELE,  Sheu  A.","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mr. SHOYEMI,  Anthony  babatunde","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mrs. ALAGBE,  Mary awoyemi","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mrs. IDOWU,  Olukemi mabel","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mrs. LAWAL,  Bukola basirat","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mrs. OKE,  Saidat bamidupe","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"Mrs. ONAGBESAN,  Ikeoluwapo oluyemisi","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"OLADESU, Olabisi kehinde","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"OLADIPUPO, Ebenezer adisa","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"OLASUNKANMI, Oluwakemi christianah","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ONASANYA, Kehinde Oluwadamilare.","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ONIPEDE, Oluwagbenga abidemi","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"SOYOYE, Oluwakemi janet","Ansar-Ud-Deen. Comprehensive College (Senior), Ota",ADO-ODO OTA
"ADELEYE, Oluwatosin abiodun","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"ADENUGA, Eunice azuka-ndidi","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"ADEOLA, Oluwaseyi Yetunde.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"ADEOSUN, Kabirat Adedoyin.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"AGBEDE, Folashade Folake.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"AHMED, Bello imam","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"ALAUSA, Grace oluwatoyin","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"AMOSU, Bosede Modupe.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"AMUSAN, Oluyemi ayinla","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"BANKOLE, Idowu enitan","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"EGUZORO, Chigoziri cornellia","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"FALANA, Bamidele bolanle","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"FASASI, Wosilat bolanle","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"ISHOLA, Anaestacia olubunmi","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"JAYEOLA, Fadeke rachael","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"KAYODE, Rashidat funmilola","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"MARK, Ruth adepeju","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"MUSTAPHA, Funmilayo adepeju","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"MUSTAPHA, Latifat abidemi awero","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mr. BALOGUN,  Olumide martins","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mr. DAVID,  Eteng oden","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mr. OGUNYOMI,  Philips olukunle","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. ABDULWALIY,  Zaynab  T.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. ABDUS-SALAM,  Fatimah yetunde","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. ADEKANLA,  Adekemi  Y.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. ADEOYE,  Adeyinka comfort","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. AKINOLA,  Ore-ofe omobolaji","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. DISU,  Tawaklitu tolani","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. FOWOWE,  Olawumi alice","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. LAWRENCE,  Mojisola serifat","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. ODUNAYO,  Oliwakemi sarah","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. OTANIYI,  Wasilat temitope","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. OYEBAJO,  Gbemisola toyin","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. OYEWOBI,  Janet oluyemisi","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. SOBANDE,  Sola modupeola","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"Mrs. TAIWO,  Kuburat omotayo","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OBAFEMI, Olukemi omoyemi","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"ODULAJA, Oluyemisi christianah","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OGUNSANYA, Samson adeshina o","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OGUNYEYE, Mary Temitope.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OLABAMIDELE, Olusola Victoria.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OLAKITAN, Olukayode Akanbi.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OLUWOLE, Ibironke arinola","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OPOOLA, Bukola Bilikis.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OSENI, Oluwatoyin Omowunmi.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"OYEBANJI, Oluwakemi grace","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"SODIYA, Kehinde Akeem.","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"SOLARU, Adebisi mojidat","Ansar-Ud-Deen. Comprehensive High School (Senior), Lafenwa, Ota.",ADO-ODO OTA
"ABOLADE, Yetunde adebukola","Araromi Community High School, Orita",ADO-ODO OTA
"ADEGBOLA, Afusat Tinuola.","Araromi Community High School, Orita",ADO-ODO OTA
"ADEKUNLE, Ayodele bamidele","Araromi Community High School, Orita",ADO-ODO OTA
"ADEKUNLE, Titilayo elizabeth","Araromi Community High School, Orita",ADO-ODO OTA
"ADENIYI, Kayode adepoju","Araromi Community High School, Orita",ADO-ODO OTA
"FABIYI, Sarah gbemisola","Araromi Community High School, Orita",ADO-ODO OTA
"ILUGBAMI, Ebenezer tunde","Araromi Community High School, Orita",ADO-ODO OTA
"KAZEEM, Bosede adedoyin","Araromi Community High School, Orita",ADO-ODO OTA
"MOSES, Odugbemi job","Araromi Community High School, Orita",ADO-ODO OTA
"Mr. ADEGUNLE,  Olaseni morooph","Araromi Community High School, Orita",ADO-ODO OTA
"Mr. AINA,  Samson olusegun","Araromi Community High School, Orita",ADO-ODO OTA
"Mrs. ADETOMI,  Bukola olatunde","Araromi Community High School, Orita",ADO-ODO OTA
"Mrs. AYOOLA,  Adunola abiodun","Araromi Community High School, Orita",ADO-ODO OTA
"Mrs. LAWAL,  Oluwaseun funmi","Araromi Community High School, Orita",ADO-ODO OTA
"Mrs. LIADI,  Janet olufunmilola","Araromi Community High School, Orita",ADO-ODO OTA
"Mrs. OGUNSOLA,  Bolanle deborah","Araromi Community High School, Orita",ADO-ODO OTA
"Mrs. OLUBIYI,  Felicia modupe","Araromi Community High School, Orita",ADO-ODO OTA
"Mrs. ORIOLOWO,  Adejoke dasola","Araromi Community High School, Orita",ADO-ODO OTA
"OGUNRINDE, Mufuliat Omolabake.","Araromi Community High School, Orita",ADO-ODO OTA
"OJEDIRAN, Oluwabukola afolake","Araromi Community High School, Orita",ADO-ODO OTA
"OJO, Iyabode","Araromi Community High School, Orita",ADO-ODO OTA
"OLOYADE, Mukaila Atanda.","Araromi Community High School, Orita",ADO-ODO OTA
"OLUWOLE, Olubunmi olabanji","Araromi Community High School, Orita",ADO-ODO OTA
"OMOTOSHO, Tolulope Ikeoluwa.","Araromi Community High School, Orita",ADO-ODO OTA
"SESE, Gbemisola olanrewaju","Araromi Community High School, Orita",ADO-ODO OTA
"TAIWO, Eniola adebukola","Araromi Community High School, Orita",ADO-ODO OTA
"ADESHINA, Femi Ezekiel.","Community High School Junior, Alapoti",ADO-ODO OTA
"ADEWALE, Sunday Francis.","Community High School Junior, Alapoti",ADO-ODO OTA
"ALI, Gladys onome","Community High School Junior, Alapoti",ADO-ODO OTA
"HUNGE, Abidemi omowunmi","Community High School Junior, Alapoti",ADO-ODO OTA
"KOSOKO, Simeon Ibukun.","Community High School Junior, Alapoti",ADO-ODO OTA
"MUSTAPHA, Omolola basirat","Community High School Junior, Alapoti",ADO-ODO OTA
"Mr. SAMUEL,  Olugbenga adekunle","Community High School Junior, Alapoti",ADO-ODO OTA
"Mrs. AKODEGBE,  Opeyemi cecilia","Community High School Junior, Alapoti",ADO-ODO OTA
"OJEKUNLE, Toyin kehinde","Community High School Junior, Alapoti",ADO-ODO OTA
"TIAMIU, Rashidat adeola","Community High School Junior, Alapoti",ADO-ODO OTA
"ADEBAYO, Yomi Josephine.","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"ADEKANLA, Moradeke oluwaseun","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"ADEKEYE, Dorcas modupeola","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"ADESANYA, Taiwo ronke","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"ADEYEMI, Oluwaseun lydia","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"AHMED, Bolanle tawakalt","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"AINA, Memunat bolanle","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"BANKOLE, Funminiyi Samuel.","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"ERINOSO, Atinuke taiwo","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"ISHOLA, Mustapha olajide","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"KOLAWOLE, Adewale Babatunde.","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"KUYE, Deborah iyabo","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"Mr. ISOLA,  Olugbemiga samuel","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"Mrs. OLOKEDE,  Olutayo tanwa","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"Mrs. OMOTUNDE,  Sururat abiodun","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"Mrs. OSHINSANYA,  Oluwatosin adebisi .a","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"OJO, Bamidele olayinka","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"OLAOYE, Labake gladys","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"OSENI, Olajide amos","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"SALIU, Kolawole Waheed.","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"SOLANKE, Tosin Omobolanle.","Community High School Junior, Iroko Ota.",ADO-ODO OTA
"ABAYOMI-OSIBANJO, Oluwakemi omolola","Community High School Senior, Alapoti",ADO-ODO OTA
"AKAPO, Taofeek adesina","Community High School Senior, Alapoti",ADO-ODO OTA
"AKINTAYLOR-AZEEZ, Wuraola Oluwatosin.","Community High School Senior, Alapoti",ADO-ODO OTA
"Mrs. ADEFAKA,  Olayemi olufemi","Community High School Senior, Alapoti",ADO-ODO OTA
"Mrs. ADEWALE,  Abike tinuade","Community High School Senior, Alapoti",ADO-ODO OTA
"Mrs. BANKOLE,  Romoke  L.","Community High School Senior, Alapoti",ADO-ODO OTA
"OLANIYI, Olukemi abosede","Community High School Senior, Alapoti",ADO-ODO OTA
"OLAORE, Juliana Aduke.","Community High School Senior, Alapoti",ADO-ODO OTA
"OMIFENWA, Abiola Olubunmi.","Community High School Senior, Alapoti",ADO-ODO OTA
"OWOYEYE, Oluwaseyi temitope","Community High School Senior, Alapoti",ADO-ODO OTA
"SANNI, Waliat arike","Community High School Senior, Alapoti",ADO-ODO OTA
"SULAIMON, Raimot temilade","Community High School Senior, Alapoti",ADO-ODO OTA
"ADEBISI, Modupe bamidele","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"ADEDIWURA, Olufemi festus","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"ADEJUMOBI, Mojisola oluwakemi","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"ADENIYI, Adekunle abidemi","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"AJIBOLA, Itunnu omolara","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"ASAFA, Mujidat fisola","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"AYINDE, Oluwayemisi bosede","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"BANJO, Esther adetutu","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"DURODOLA, Oluwakemi alimot","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"KAREEM, Babatunde lateef","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"Mr. LAWAL,  Waliu oyewole","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"Mrs. ETIM,  Mary toyin","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"Mrs. SOLAJA,  Christiana ireti","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"ODEYEMI, Omobolanle Oluwafunmilayo.","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"OGUNNOWO, Omowunmi adedoyin","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"OKANLAWON, Adijat Adeola.","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"OLUGBODE, Rebecca oluwabunmi","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"OYADOYIN, Racheal Oluremi.","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"SALAMI, Ashiawu Olaitan.","Community High School Snr, Iroko Ota.",ADO-ODO OTA
"ADEDOKUN, Temitope C.","Community High School,Igbala",ADO-ODO OTA
"ADEKOYA, Yetunde Morenike.","Community High School,Igbala",ADO-ODO OTA
"AKINLIYI, Olaitan Ajayi.","Community High School,Igbala",ADO-ODO OTA
"AKINOLA, Oluwafunmilayo iyabode","Community High School,Igbala",ADO-ODO OTA
"AKINOSI, Michael Segun.","Community High School,Igbala",ADO-ODO OTA
"ASAMU, Yemisi ibukun","Community High School,Igbala",ADO-ODO OTA
"AZEEZ, Lateefat omowunmi","Community High School,Igbala",ADO-ODO OTA
"IBRAHIM, Sherifat dupe","Community High School,Igbala",ADO-ODO OTA
"JIMETO, Oluwaseun Abimbola.","Community High School,Igbala",ADO-ODO OTA
"MAJEKODUNMI, Adebisi Gbeminiyi.","Community High School,Igbala",ADO-ODO OTA
"Mr. IBRAHIM,  Oseni kehinde","Community High School,Igbala",ADO-ODO OTA
"Mr. OBISESAN,  Musibau rotimi","Community High School,Igbala",ADO-ODO OTA
"Mr. OKUWOBI,  Taiwo","Community High School,Igbala",ADO-ODO OTA
"Mr. OLAWUYI,  Solomon olusegun","Community High School,Igbala",ADO-ODO OTA
"Mr. SOMOYE,  Adeniji alfred","Community High School,Igbala",ADO-ODO OTA
"Mrs. ADEAGBO,  Temitope olubamise","Community High School,Igbala",ADO-ODO OTA
"Mrs. ADELAJA,  Rafiat adenike","Community High School,Igbala",ADO-ODO OTA
"Mrs. OGUNGBAYIBI,  Adebisi aderonke","Community High School,Igbala",ADO-ODO OTA
"Mrs. OGUNLEYE,  Adedola adefowora","Community High School,Igbala",ADO-ODO OTA
"Mrs. OLANIPEKUN,  Ramota  R.","Community High School,Igbala",ADO-ODO OTA
"Mrs. OYEWOLE,  Monsurat labake","Community High School,Igbala",ADO-ODO OTA
"Mrs. SODUNKE,  Omonegho maris","Community High School,Igbala",ADO-ODO OTA
"OGUNDEJI, Mutiu akintunde","Community High School,Igbala",ADO-ODO OTA
"OLABIRAN, Abosede bukola","Community High School,Igbala",ADO-ODO OTA
"OLADITAN, Abiodun esther","Community High School,Igbala",ADO-ODO OTA
"OLATONA, Eunice olanike","Community High School,Igbala",ADO-ODO OTA
"OLUAJO, Kolawole martins","Community High School,Igbala",ADO-ODO OTA
"OLUFEMI, Crhistianah oluwakemi","Community High School,Igbala",ADO-ODO OTA
"OLUKADE, Opeyemi Motunrayo.","Community High School,Igbala",ADO-ODO OTA
"OLUYEMI, Yemisi florence","Community High School,Igbala",ADO-ODO OTA
"OMOLE, Omoniyi simon","Community High School,Igbala",ADO-ODO OTA
"ONILUDE, Olajumoke Modupe.","Community High School,Igbala",ADO-ODO OTA
"ORENUGA, Adijat bolanle","Community High School,Igbala",ADO-ODO OTA
"OWOLABI, Hafeesat Iyabo.","Community High School,Igbala",ADO-ODO OTA
"OYEWOLE, Victoria oluwatoke olabis","Community High School,Igbala",ADO-ODO OTA
"SALAKO, Idiris bola","Community High School,Igbala",ADO-ODO OTA
"SOSANOLU, Safurau","Community High School,Igbala",ADO-ODO OTA
"TAIWO, Taofic taiwo","Community High School,Igbala",ADO-ODO OTA
"ADEBANJO, Adesewa Nurat.",Community Sec Oko Baale,ADO-ODO OTA
"ADEFENWA, Oluwafunmilola Esther.",Community Sec Oko Baale,ADO-ODO OTA
"AFOLABI, Foluso Bolanle.",Community Sec Oko Baale,ADO-ODO OTA
"AKINOLA, Michael olubayo",Community Sec Oko Baale,ADO-ODO OTA
"AKINOLU, Mobolaji Saheed.",Community Sec Oko Baale,ADO-ODO OTA
"AKINYEMI, Opeyemi Ayobami.",Community Sec Oko Baale,ADO-ODO OTA
"BABATUNDE, Afusat Omolola.",Community Sec Oko Baale,ADO-ODO OTA
"BABATUNDE, Omobolaji Olateju.",Community Sec Oko Baale,ADO-ODO OTA
"FAMUYIWA, Olunike Elizabeth.",Community Sec Oko Baale,ADO-ODO OTA
"JUBRIL, Olubunmi Tawakalit.",Community Sec Oko Baale,ADO-ODO OTA
"KOLEOSHO, Ademuyiwa Oluwaseun.",Community Sec Oko Baale,ADO-ODO OTA
"Mr. OGUNLEYE,  Ayoola olatunde daniel",Community Sec Oko Baale,ADO-ODO OTA
"Mr. OLATUNBOSUN,  Elijah  A.",Community Sec Oko Baale,ADO-ODO OTA
"Mrs. ADEJORO,  Ajibola  O.",Community Sec Oko Baale,ADO-ODO OTA
"Mrs. BOLUWAJI,  Wemimo cecilia",Community Sec Oko Baale,ADO-ODO OTA
"ODUNTAN, Julius Olusanya.",Community Sec Oko Baale,ADO-ODO OTA
"OLALEYE, Morenikeji Abiodun.",Community Sec Oko Baale,ADO-ODO OTA
"OLALOWO, Maria  Oluwakemi.",Community Sec Oko Baale,ADO-ODO OTA
"OMOBUWAJO, Margaret Kehinde.",Community Sec Oko Baale,ADO-ODO OTA
"OMOTOSHO, Rasheed Olalekan.",Community Sec Oko Baale,ADO-ODO OTA
"ONABANJO, Adeola olabisi",Community Sec Oko Baale,ADO-ODO OTA
"OYEGOKE, Modupeola Sidikat.",Community Sec Oko Baale,ADO-ODO OTA
"UCHE, Judith Onyelo.",Community Sec Oko Baale,ADO-ODO OTA
"UKUT, Udoh Peter.",Community Sec Oko Baale,ADO-ODO OTA
"AGOSA, Joshua Dare.","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"AKEJU, Samson akanni","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"COLLINS, Justina Ukaneobere.","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"DIYAOLU, Abigail Omotayo.","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"LAWAL, Funmilayo ajoke","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"Mr. OLADEPO,  Stephen olajide","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"Mrs. OSAMARITA,  Esther  K.","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"Mrs. TAIWO,  Adefolaju abimbola","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"OGUNDARE, Fatai akanbi","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"OPEISA, Noah Adekunle.","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"TOGUNDE, Folasade Rashidat.","Ejila Awori Community Secondary School, Ota.",ADO-ODO OTA
"AJOSE, Oluwakemi Racheal.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"ALABI, Kehinde Oladayo.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"AMINU, Morenikeji basirat","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"DAIRO, Akinniran ajani","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"GODONU, Adeola Oluwakemi.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"HUNGBO, Kodeyon senayon","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"ISHOLA, Oladimeji Jamiu.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"JOHN, Julius Maoyon.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"MUSTAPHA, Taiwo Fausat.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"Mr. ALIYU,  Tunde adedeji","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"Mr. RAHEEM,  Rasheed olawale","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"Mrs. MUSA,  Adejoke waliat","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"OBOYINU, Thomas sewanu","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"ODETOOGUN, Jamiu abiodun","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"OGUNDANA, Funmilayo","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"OKUSANYA, Oluwaseun adedeji samson","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"OLATUNBOSUN, Tunrayo adeola","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"OMALE, Abigail sonate","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"OMOTAYO, Hammed Olalekan.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"OYAGBOHUN, Titilayo","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"PETER, Funmilayo Felicia.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"SAMSON, Maume Rachael.","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"TAIWO, Oluwakemi wunmi","Gbenopo Community Grammar School,Bandu",ADO-ODO OTA
"ABDUL, Adepeju c.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADEDOKUN, Lydia omolara","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADENIJI, Basoene","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADENIJI, Lukumon Abayomi.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADEOGUN, Olubunmi oluyemisi","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADESAANU, Olukemi felicia","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADESINA, Bode Thompson.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADETOYINBO, Aminat abiola","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ADEYEMI, Oluwabusayo oluseyi","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"AJIBOYE, Elizabeth olayinka","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"AKINBO, Paul olusanya","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"AKINTOYE, Olanrewaju olalekan","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ALABI, Azeezat Motunrayo.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"AREMU, Titilayo foluwake","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"AWONIRAN, Sekinat iyabode","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"AYOADE, Olayinka toyin","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"BABARINDE, Omosade esther","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"BABATUNDE, Noimot iyabo","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"BOLARINWA, Esther precious","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"EGBERINDE, Bukola idowu","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"FAMODU, Oluseyi rebecca","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"GBENRO, Oluwaseun Olufunmilayo.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ILORI, Olutosin tokunbo","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"IMHANBOR, Abayomi adeola","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ISHOLA, Olabisi atinuke","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"JONAH, Olukayode gbenu","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"LABULO, Olalekan sulaiman","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"LASILO, Jokotola folake","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"LAWAL, Adenike oladayo","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"LAWAL, Olufunso adenike","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"LAWRENCE, Dorcas udan","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"MUSTAPHA, Rasaq adisa","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"Mr. AKINPELU,  Sunday olusayo","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. ADELEYE,  Mojisola mosebolatan","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. AKOREDE,  Baskat omolara","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. HASSAN,  Mary omorowa","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. OGUNTOYINBO,  Omolara kudirat","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"Mrs. RASAQ,  Olubukola oluyemi","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ODUSILE, Motunrayo morenike","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OGUNJINMI, Taiwo olufunmilola","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OGUNTOYINBO, Francis akin","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OLABAMERUN, Titilope","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OLANIYI, Folashade mabel","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OLUBIYI, Adenike morayo","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OLUSUYI, Olufemi Michael.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OMIFENWA, Olayemi Agnes.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ORISADARE, Basirat temitope","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"OYAJIMI, Lawal alao","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"SHOGBESAN, Rachael Oluyemisi.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"SIAKPERE, Deborah olajumoke","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"SOBAYO, Modupeoluwa Paulina.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"SOFIDIYA, Gbenga adewale","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"SOMORIN, Oluwabukola Omotoyosi.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"TAIWO, Olubunmi adebimpe","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"TIJANI, Morufat Yetunde.","Iganmode Grammar School (Junior), Ota",ADO-ODO OTA
"ABATI, Islamiu","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADEGBOYEGA, Adisa suleiman","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADEKANMBI, Olutayo abiola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADEKOLEGAN, Olayemi ramat","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADEKUNLE, Khadijat bisola olawunmi","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADELALU, Rikayat omoniyi","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADELEYE, Ngozi Awele.","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADENEKAN, Bolanle waliat","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ADEYEMI, Kikelomo olasunkami","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AGORO, Muritala azeez","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AJAO, Felicia Olufunmilola.","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AJAO, Ismail akin","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AKINLEYE, Olasunkanmi omoshalewa. r","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AKINLOTAN, Mutiat jumoke","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AKINOSO, Mansour olalekan","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ANIMASHAUN, Funmilayo anthonia","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ASHIRU, Olansile ganiyu","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ASOKEJI, Aanu esther","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AYANBADEJO, Oludare ruth","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AYEDUN, Adenike omolara","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ISHOLA, Ganiyat adeola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"JACOB, Bamidele akanni","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"JOKOJEJE, Akinnola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"KADRI, Susan iyabode","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"KAREEM, Tolani muyideen","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"KAYODE, Dorcas titilayo","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"Mr. ADEOYE,  Adejare timothy","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"Mr. MURITALA,  Adeniyi solomon","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. AKINYEMI,  Olushola olubunmi","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. BANKOLE,  Funmilayo adebimpe","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. KAREEM,  Toyin funmilola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"Mrs. SODIYA,  Grace olufunmilola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ODEBIYI, Kayode gbenga","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ODERINDE, Kabirat gbadunola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"ODJE, Funke Mary.","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"OGUNBANJO, Yemisi adelaarin","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"OLADELE, Olajire omotara","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"OLATUNBOSUN, Ikimot aduuni","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"OLATUNJI, Esther oluwemimo","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"OLOKO, Mariam Funmilayo.","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"OLUSOLA, Adewunmi Moyomade.","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"OSHIKOYA, Faosiyat gbemisola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"RAJI, Rukayat Adesola.","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"SANUSI, Wahab ademola","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"SANYAOLU, Adebimpe kafayat","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"SOBOLA, Janet iyejide","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"SOFOLUKE, Oladoja samuel","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"SULEIMAN, Kudirat omolara","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"WOJUADE, Roseline oluwaseun","Iganmode Grammar School (Senior), Ota",ADO-ODO OTA
"AJAYI, Deborah oluwatoyin","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"Mr. OLAGUNJU,  Gbenga  E.","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"Mrs. JEMPEJI,  Adeola","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"Mrs. TIJANEE,  Rukayat adenike","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"OLADIPO, Ronke Taiwo.","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"OLAMILOKUN, Abass makanjuola","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"OREKOYA, Gbemisola sherifat","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"ZINSU, Olusegun Noah.","Igbesa  High School(Junior), Igbesa.",ADO-ODO OTA
"ADEBANKE, Ajibola Sulaimon.","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"AFOLABI, Abigael folake","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"AKINSUNLORE, Sunday","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"ISREAL, Opeyemi adeola","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"Mrs. OKOLIE,  Ijeoma josephine","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"Mrs. OLADEPO,  Selina adepeju","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"ODETOOGUN, Waliu alani","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"OYESANYA, Tolulope bolarinwa","Igbesa  High School(Senior), Igbesa.",ADO-ODO OTA
"ADEKEYE, Olanrewaju","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ADELAKUN, Busayo Aminat.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ADEWALE, Foluso olajumoke","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ADEWUSI, Ganiat oluwakemi","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AINA, Olubukola abiodun","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AJIBOYE, Adenike florence","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AJIKOBI, Kudirat abake","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AKINBO, Janet Alechenu.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AKINWUNMI, Titilope tejumade","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ALI, Olasumbo damilola","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ASHADE, Olayinka abiola","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AWOLERE, Adeola Dorcas.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AYANDELE, Rasheed tayo","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"BALOGUN, Olanike folake","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"BAMIDURO, Oluyemisi Temitayo.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"DESILE, Victoria olabisi","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ELEGBEDE, Raimot Iyabode.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"EWUNUGA, Adebola Modinat.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"FOLORUNSHO, Maryam ajoke","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"FOLORUNSHO, Temitope Seun.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"JEGEDE, Kehinde ade","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"KEHINDE, Felicia Omotejoku.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"MAYELOYE, Rashidat omolara","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"MORAKINYO, Saidat ajoke","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mr. ADEGOKE,  Lawrence olatunde","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mr. ADEKANLA,  Joseph oluwole","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mr. GBEBIKAN,  Micheal  E.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mr. MICHEAL,  Lanre joel","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mr. ODULEYE,  Oluseyi temitope","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mr. OLALEYE,  Olufemi taiwo","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. ADESANU,  Adebola  A.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. ADEWALE,  Oladunni agnes","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. ADEYEMI,  Sidqot  O.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. FEYISITAN,  Olufisayo adenike","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. IDOWU,  Bolanle raimot","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. ISMAIL,  Sekinah  G.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. JUNAID,  Mutiat  adunola","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. ODUMALA,  Adedoja olatunji","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. OLABINJO,  Olanrewaju  O.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. OLAWUYI,  Felicia  A.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. Olabode,  Veronica Adeola","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"Mrs. YAKUBU,  Raimot omotayo","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"NASIR, Olubunmi elizabeth","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ODEYEMI, Catherine olabimpe","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OGUNDIRAN, Shakirat Adesola.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OGUNKOYA, Idowu ololade","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OGUNTOLU, Adenike paulina","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OGUNYEMI, Adebola akanji","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OGUNYOMI, Foluke oluyemi","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OJELADE, Oluwatoyin Adeola.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OJO, Yemisi","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OLADEPO, Olalekan sunday","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OLADUNNI, Olusola adeyemi","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OLORUNFEMI, Mary olubosede","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OLUAJO, Kehinde ololade","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OLUSEYE, Idayat adeyemi","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OMOGBEHIN, Oluyemi Mary.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"ONOTA, Samuel bamitale","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OPALEMO, Serifat adenike","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"OSINUBI, Olabisi remilekun","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"SALAMI, Monsurat adebolanle","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"SANGOSEKAN, Azeezat yetunde","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"SANNI, Mojisola basirat","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"SANNI, Rofiat Morenike.","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"SANUSI, Anthonia alaba","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"SODIPE, Oluyemisi abolaji","Iju Ebiye High School (Senior), Iju, Ota",ADO-ODO OTA
"AASA, Bolajoko oluwatoyin",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ADEBAYO, Folasade ronke",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ADEBOYE, Oluwakemi abike",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ADENAYA, Adebukunola tawa",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ADEOSUN, Abosede mary",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ADESANYA, Mojisola oluwatoyin",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"AGOSU, Monday Mautin.",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"AYINDE, Lateef abiola",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"BAKARE, Kazeem oladayo",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"EMMANUEL, Sarah ayobami",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ENITAN, Motunrayo asabi",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"FOLARIN, Joseph ajiboye",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"IBITOYE, Morenike titilayo",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"IJIOLA, Dorcas temitope",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"MARTINS, Adedapo oluwaseun",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"Mr. BAMIGBOYE,  Samuel olusegun",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"Mr. ODUWOLE,  Adewale olatunde",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"Mr. OGUNDELE,  Samuel akanbi",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"Mr. USAMAT,  Jimoh  G.",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ODENIKE, Samson olubowale",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"OJO, Funmilola",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"OLORUNFEMI, Alaba abiola",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ONI, Beatrice yemisi",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"OSHINUBI, Ruth olajumoke adetutu",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"SODIYA, Josiah olubowale",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"SUNDAY, Rebecca Remi.",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"SURAJU, Kehinde yahya",Ilogbo Asowo Community High Sch,ADO-ODO OTA
"ADEBAYO, Olufisayo adeboun","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ADELEYE, Roseline oluwabunmi","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ADENIRAN, Dolapo adeola","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ADEPOJU, Rafiat Adenike.","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ADESINA, Oluwatoyin ololade","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ADEYEMI, Monsurat Olubunmi.","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"AKIN -OYELADE, Oluyemisi omoniyi","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"AKINWANDE, Olatubu alice","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"BABATUNDE, Temitope ramota","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"BANJOKO, Elizabeth taiwo","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"FAGBOLA, Sodayo funmilola","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"IGE, Francis olusegun","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ILORI, Oluwakemi oluwafunmilola","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"IWE, Bolanle titilayo","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"LAWAL, Deborah modupeola","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mr. GARBA,  Musa kehinde","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mr. OLADIPUPO,  Olukayode tiwalade","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mr. SOBOWALE,  Ayokunle omololu","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mr. SULAIMON,  Adeniyi  A.","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mrs. ADEKUNLE,  Rafat oluwatoyin","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mrs. AWONUGA-SHITTU,  Kudirat adeyemi","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mrs. FADODUN,  Adenike elizabeth","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mrs. OLOYEDE,  Risikat bolanle","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"Mrs. OSHUN,  Tasliimot temilola","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ODUNTAN, Taiwo oluwafunmilayo","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"OJO, Olumuyiwa Oyedepo.","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"OKWUWE, Ngozi goria","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"OLALEYE, Stella bosede","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"OMIDEYI, Oluwatoyin olabisi","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"OYEDELE, Ronke roselyn","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"SHODUNKE, Florence","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"SORINOLA, Zaccheaus olukayode","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"TAIWO, Busayo Mojisola.","Iyesi-Ota High School, Iyesi, Ota",ADO-ODO OTA
"ADEDIWURA, Islamiyat Folasade.",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"ADEKOYA, Bamidele adebola",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"ALLI, Maria abosede",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"BANKOLE, Esther oluwatowo",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"DADA, Olamide taiwo",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"DUROJAYE, Afusat funmilade",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"EGBEYEMI, George olusegun",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"FALADE, Bamidele johnson",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"IDOWU, Adediwura olakunle",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"LASISI, Temitope iyabode",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"LAWAL, Jelili oluwatosin",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"MICHAEL, Adedoyin abisola",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mr. ADENEKAN,  Saheed abiodun",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mr. AWOLALU,  Omotunde",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mr. OLUBIYI,  Joshua olawasegun",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mrs. KAREEM,  Aminat adesuji",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mrs. NUGBOZUNKU,  Abimbola adedoyin",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mrs. OLUKANNI,  Toyin rosemary",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mrs. ORIADE JACOBS,  Moronke olubunmi",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"Mrs. POPOOLA,  Adijat adebukola",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"ODUWOLE, Adijat adebimpe",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"OKUNEYE, Enu-ogbope tolulope",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"OLUWALOGBON, Josephine oluwatobi",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"OYELAMI, Ebunoluwa taiwo",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"PETERS, Hannah oyeyemi",Local Government Secondary Commercial School [Jnr] Atan.,ADO-ODO OTA
"ADEDAYO, Afolake",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"AKINRULI, Olufunke Seyi.",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"DADA, Akeem adebayo",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"FASOGBON, Adebola olubukola",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"KOLAWOLE, Mary omolola",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mr. ADEGBOLA,  Ganiyi kayode",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mr. FALOLA,  Surakat ibraheem",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mr. FOLARIN,  Olukunle james",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mr. OLAWUYI,  Sunday olatunji",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mrs. ADEKOYA,  Bukola temilola",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mrs. AJIBOLA,  Oluwabukola  O.",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mrs. OLUWASEYI,  Olusade  B.",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mrs. OPALEYE,  Florence  T.",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"Mrs. OSANYINBI,  Olubunmi  M.",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"OKEOWO, Abeke abosede",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"OLADAPO, Victoria modupe abisola",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"OLALEKAN, Kafayat temitope",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"ONIPEDE, Yemisi adenike",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"OOSE, Olufemi noah",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"OSANYINBI, Bukola abiola",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"OYADOKE, Funmilola hannah",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"POPOOLA, Oyewaleola elizabeth",Local Government Secondary Commercial School [Snr] Atan.,ADO-ODO OTA
"AKANBI, Kehinde tosin","Male Comprehensive High School(Junior), Igbesa.",ADO-ODO OTA
"AROWONA, Mariam olabisi","Male Comprehensive High School(Junior), Igbesa.",ADO-ODO OTA
"Mr. ADEOYE,  Adeshina segun","Male Comprehensive High School(Junior), Igbesa.",ADO-ODO OTA
"Mr. EZEKIEL,  Felix adebayo sanusi","Male Comprehensive High School(Junior), Igbesa.",ADO-ODO OTA
"Mrs. AGOGOIJA,  Oluwaseun felicia","Male Comprehensive High School(Junior), Igbesa.",ADO-ODO OTA
"Mrs. OLAORE,  Ibironke tolulope","Male Comprehensive High School(Junior), Igbesa.",ADO-ODO OTA
"OLUWABIYI, Labake simiat","Male Comprehensive High School(Junior), Igbesa.",ADO-ODO OTA
"ADEKUNLE, Miracle Toluse.","Male Comprehensive High School(Senior), Igbesa.",ADO-ODO OTA
"ADENIRAN, Muinat folasade","Male Comprehensive High School(Senior), Igbesa.",ADO-ODO OTA
"ADEOGUN, Fatimot abiola","Male Comprehensive High School(Senior), Igbesa.",ADO-ODO OTA
"AREMU, Bunmi serah","Male Comprehensive High School(Senior), Igbesa.",ADO-ODO OTA
"AWOYELE, Elizabeth Oluwakemi.","Male Comprehensive High School(Senior), Igbesa.",ADO-ODO OTA
"FATOKUN, Margaret Abimbola.","Male Comprehensive High School(Senior), Igbesa.",ADO-ODO OTA
"OMOLE, Omotola Jumoke.","Male Comprehensive High School(Senior), Igbesa.",ADO-ODO OTA
"ABIONA, Nurat omowunmi","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"ADEGOKE, Dupefolu asabi","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"ADEYANJU, Abisola olajumoke","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"ADEYEMI, Shukurat Yemisi.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"AJAYI, Bolaji elizabeth","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"AJIBADE, Adesina adekunle","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"AKINBODE, Oluwaseyi ife","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"BOLUDE, Abiodun","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"FALEYE, Abigael iyabode","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"FALEYE, Ebenezer toyin","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"JOHN, Adenike Dorcas.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"Mr. JIMOH,  Amidu agoro","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"Mrs. MUDASIRU,  Abibat alake","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"Mrs. OJO,  Oluwagbemiro  A.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"Mrs. ONATADE,  Adenike bushirat","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"ODUEYUNGBO, Oluwabunmi Hannah.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"ODUNLAMI, Saliu adio","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"OGUNOLA, Abiola Nurat.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"OGUNSEYE, Moses Oladayo.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"OLADIIPO, Morenikeji Titilayo.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"OLUSESI, Adijat afolake","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"OREKOYA, Oluwatoyin opeyemi","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"OROBIYI, Bukola Victoria.","Oke-Ore Grammar School, Ota",ADO-ODO OTA
"ABDULLAHI, Adetutu olu aina","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"ADEDEJI, Aderonke bolajoko","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"ADEYEMI, Oluwatoyin funmilola","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"ADEYEMO-OLOWE, Bola","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"BABAJIDE, Oluwatoyin adunni","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"DONALD, Remilekun toyin","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"JAMES, Florence Bolanle.","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"Mr. AFOLABI,  Jesse olanrewaju","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"Mr. BABATUNDE,  Abiodun olawale","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"Mr. OLALEYE,  Matthew adewale","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"Mrs. ABDULAZEEZ,  Khadijat  O.","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"Mrs. ADEYEYE,  Toyin","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"Mrs. FOLAGBADE,  Mofoluwake florence","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"Mrs. HUNKOKOE,  Esther abosede","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"OJEWOYE, Segun Femi.","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"OLOKODE, Elizabeth yemisi","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"OLUSHOGA, Olufunke tolani","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"ONASANYA, Oluwaseun tope","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"ONIGBOGI, Olatunji Oluwole.","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"ONOSOSEN, Adeniyi raphael","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"OYEKOLA, Olatoye rotimi","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"OYERINDE, Modinat adenike","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"OYETAYO, Tolulope Taiwo.","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"SALAKO, Adesola peter","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"SOLOTAN, Omowunmi Olumide.","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"STOWE, Oluwatoyin Aina.","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"VAUGHAN, Adewale oluseun","Owode Ota Grammar School, Ijako.",ADO-ODO OTA
"ABDULWAHAB, Aliat Oluwatosin.","Sango Ota High School, (Jnr)",ADO-ODO OTA
"ADEKEYE, Rhoda olubukola","Sango Ota High School, (Jnr)",ADO-ODO OTA
"ADEKOYA, Olufunke bose","Sango Ota High School, (Jnr)",ADO-ODO OTA
"ADEROGBA, Johnson oluwagbenga","Sango Ota High School, (Jnr)",ADO-ODO OTA
"AGBOGUNLERI, Foluso toyin","Sango Ota High School, (Jnr)",ADO-ODO OTA
"AKINMUSIRE, Bolanle olasunmbo","Sango Ota High School, (Jnr)",ADO-ODO OTA
"AKINTELURE, Janet adebisi","Sango Ota High School, (Jnr)",ADO-ODO OTA
"AYODELE, Aminat oluwatoyin","Sango Ota High School, (Jnr)",ADO-ODO OTA
"BOYEJO, Oluwatunmibi grace","Sango Ota High School, (Jnr)",ADO-ODO OTA
"GORIOLA, Saheed tolani","Sango Ota High School, (Jnr)",ADO-ODO OTA
"IDOWU, Hephzibah","Sango Ota High School, (Jnr)",ADO-ODO OTA
"IDOWU, Olufunke","Sango Ota High School, (Jnr)",ADO-ODO OTA
"IGE, Alaba gbemisola","Sango Ota High School, (Jnr)",ADO-ODO OTA
"LAFIAJI, Adetoun oluwabusola","Sango Ota High School, (Jnr)",ADO-ODO OTA
"MAFE, Adeshola sunday","Sango Ota High School, (Jnr)",ADO-ODO OTA
"Mr. OKUMODI,  Abimbola olanrewaju","Sango Ota High School, (Jnr)",ADO-ODO OTA
"Mrs. AGBEDE,  Agnes olufunmilayo","Sango Ota High School, (Jnr)",ADO-ODO OTA
"Mrs. AJAYI,  Kaosara ajoke","Sango Ota High School, (Jnr)",ADO-ODO OTA
"Mrs. BABATUNDE,  Modupe odunayo","Sango Ota High School, (Jnr)",ADO-ODO OTA
"Mrs. ORILOYE,  Iyabode okihjeme","Sango Ota High School, (Jnr)",ADO-ODO OTA
"OGUNDAIRO, Olatokunbo anthony","Sango Ota High School, (Jnr)",ADO-ODO OTA
"OGUNIBI, Babatunde gbolahan","Sango Ota High School, (Jnr)",ADO-ODO OTA
"OGUNLEYE, Ayodeji oluwole","Sango Ota High School, (Jnr)",ADO-ODO OTA
"OLAIWON, Taiwo azanot","Sango Ota High School, (Jnr)",ADO-ODO OTA
"OLALEMI, Oluwaseun Aderonke.","Sango Ota High School, (Jnr)",ADO-ODO OTA
"OLAMILEKAN, Oluwatoyin olamide","Sango Ota High School, (Jnr)",ADO-ODO OTA
"OMOLOLA, Iyabo omowunmi","Sango Ota High School, (Jnr)",ADO-ODO OTA
"ONANUGA, Kudirat wuraola","Sango Ota High School, (Jnr)",ADO-ODO OTA
"PETERS, Morenikeji ololade","Sango Ota High School, (Jnr)",ADO-ODO OTA
"ABEJIDE, Elizabeth olubunmi","Sango Ota High School, (Snr)",ADO-ODO OTA
"ADELAJA, Adewunmi Memunat.","Sango Ota High School, (Snr)",ADO-ODO OTA
"ADESINA, Iyabode kafilat","Sango Ota High School, (Snr)",ADO-ODO OTA
"AJIBODE-IKOTUN, Gbeminiyi  lola","Sango Ota High School, (Snr)",ADO-ODO OTA
"AKINDURO, Sekinat Taiwo.","Sango Ota High School, (Snr)",ADO-ODO OTA
"ARIBA, Omobolanle beatrice","Sango Ota High School, (Snr)",ADO-ODO OTA
"AWODEINDE, Oludolapo motilade","Sango Ota High School, (Snr)",ADO-ODO OTA
"BANKOLE, Rasheed olalekn","Sango Ota High School, (Snr)",ADO-ODO OTA
"BOBOYE-ADENIJI, Bukola Funmilayo.","Sango Ota High School, (Snr)",ADO-ODO OTA
"DANDE, Joseph","Sango Ota High School, (Snr)",ADO-ODO OTA
"DARAMOLA, Ayodeji oladiran","Sango Ota High School, (Snr)",ADO-ODO OTA
"FOLARIN, Ayomide roseline","Sango Ota High School, (Snr)",ADO-ODO OTA
"Mr. AJAYI,  Adelanwa aruna","Sango Ota High School, (Snr)",ADO-ODO OTA
"Mr. AKINDELE,  Akeem balogun","Sango Ota High School, (Snr)",ADO-ODO OTA
"Mr. OYELUMADE,  Olutola  A.","Sango Ota High School, (Snr)",ADO-ODO OTA
"Mrs. ADEAGA,  Bola  M.","Sango Ota High School, (Snr)",ADO-ODO OTA
"Mrs. ADEBAYO,  Funmilayo tawakalit","Sango Ota High School, (Snr)",ADO-ODO OTA
"Mrs. ADESANYA,  Amoke oluyemisi","Sango Ota High School, (Snr)",ADO-ODO OTA
"Mrs. ODUALA,  Olubunmi bolanle","Sango Ota High School, (Snr)",ADO-ODO OTA
"ODUNEWU, Monsurat Funke.","Sango Ota High School, (Snr)",ADO-ODO OTA
"ODUSOLU, Bolanle mary","Sango Ota High School, (Snr)",ADO-ODO OTA
"OGUNDELE, Iyabode olabisi","Sango Ota High School, (Snr)",ADO-ODO OTA
"OGUNMODEDE, Adenike olubanike","Sango Ota High School, (Snr)",ADO-ODO OTA
"OJO, Adedoyin adetutu","Sango Ota High School, (Snr)",ADO-ODO OTA
"OLUJINMI, Hannah oluyemi","Sango Ota High School, (Snr)",ADO-ODO OTA
"OLUWALOSE, Abosede janet","Sango Ota High School, (Snr)",ADO-ODO OTA
"OLUYOMI, Adenrele adisa","Sango Ota High School, (Snr)",ADO-ODO OTA
"OMOLE, Christiana abosede","Sango Ota High School, (Snr)",ADO-ODO OTA
"ONASANYA, Olayemi Oluseun.","Sango Ota High School, (Snr)",ADO-ODO OTA
"ONASOGA, Micheal oladele","Sango Ota High School, (Snr)",ADO-ODO OTA
"OPEBIYI, Oluwakemi Esther.","Sango Ota High School, (Snr)",ADO-ODO OTA
"OSINUBI, Oluwadamilola Odunayo.","Sango Ota High School, (Snr)",ADO-ODO OTA
"OVIRI, Oluwatoyin anuoluwapo","Sango Ota High School, (Snr)",ADO-ODO OTA
"OYEDEJI, Folasade onaopepo angela","Sango Ota High School, (Snr)",ADO-ODO OTA
"OYEDEJI, Motunrayo khadijat kubura","Sango Ota High School, (Snr)",ADO-ODO OTA
"OYENEKAN, Olutayo","Sango Ota High School, (Snr)",ADO-ODO OTA
"OYEWO, Kafayat oyedola","Sango Ota High School, (Snr)",ADO-ODO OTA
"SORUNKE, Afolasade olabimpe","Sango Ota High School, (Snr)",ADO-ODO OTA
"ULOHO, Mobola oladele","Sango Ota High School, (Snr)",ADO-ODO OTA
"ABORISADE, Adenike Oluwaseun.","St Michael's High School, Ota",ADO-ODO OTA
"ADEOSUN, Bolaji","St Michael's High School, Ota",ADO-ODO OTA
"ADEYEMI, Chinwe ekwutosi","St Michael's High School, Ota",ADO-ODO OTA
"ADISA, Oluwatoyin janet","St Michael's High School, Ota",ADO-ODO OTA
"AGBOOLA, Olatimbo ronke","St Michael's High School, Ota",ADO-ODO OTA
"AJAYI, Taiwo oluwakemi","St Michael's High School, Ota",ADO-ODO OTA
"ALADE, Adeola temitope","St Michael's High School, Ota",ADO-ODO OTA
"ATINSHOLA, Omotola sadiat","St Michael's High School, Ota",ADO-ODO OTA
"DEHINOLA, Bolatito taibat","St Michael's High School, Ota",ADO-ODO OTA
"ERINLE, Busayo oluseyi","St Michael's High School, Ota",ADO-ODO OTA
"FASIMIRIN, Olubunmi abosede","St Michael's High School, Ota",ADO-ODO OTA
"GORIOLA, Mojisola","St Michael's High School, Ota",ADO-ODO OTA
"JEGEDE, Ganiyat adeyinka","St Michael's High School, Ota",ADO-ODO OTA
"JIMOH, Taiwo morufu","St Michael's High School, Ota",ADO-ODO OTA
"LAWAL, Olufunmilayo lola","St Michael's High School, Ota",ADO-ODO OTA
"MACAULAY, Lukman oluwatobi","St Michael's High School, Ota",ADO-ODO OTA
"Mr. AYANKUNLE,  Bamidele ade","St Michael's High School, Ota",ADO-ODO OTA
"Mr. BABATUNDE,  Maliq alao","St Michael's High School, Ota",ADO-ODO OTA
"Mr. ONI,  Olugbenga samuel","St Michael's High School, Ota",ADO-ODO OTA
"Mr. OSEKITA,  Bamidele  O.","St Michael's High School, Ota",ADO-ODO OTA
"Mr. SOGAOLU,  Afolabi oluseyi","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. AINA,  Naomi akpan","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. AKINTELU,  Silifat omolara","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. BAMIDELE,  Tosin bamidele","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. BELLO,  Mary  magdaline","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. DANIEL,  Eunice abimbola","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. DARAMOLA,  Olalekan florence","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. DARAMOLA,  Rachael  O.","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. EFUNKOYA,  Adenike olufunmilayo","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. JOGBODO,  Tawakalitu abolanle","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. OLAGUNJU,  Taiwo olabisi","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. OLUWATUNMIBI,  Sola oluwatoke","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. OYEDELE,  Susannah adenike","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. SADIKU,  Olajumoke aminat","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. SANUSI,  Ganiyat bolanle","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. SOBOYEJO,  Grace  A.","St Michael's High School, Ota",ADO-ODO OTA
"Mrs. THOMPSON,  Oluyemisi abioye","St Michael's High School, Ota",ADO-ODO OTA
"OGUNDIMU, Olawunmi Muinat.","St Michael's High School, Ota",ADO-ODO OTA
"OLUFORE, Julianah omobolaji","St Michael's High School, Ota",ADO-ODO OTA
"ONIGBINDE, Sikirat Toyin.","St Michael's High School, Ota",ADO-ODO OTA
"SHITTU, Olubunmi mayowa","St Michael's High School, Ota",ADO-ODO OTA
"ADEBAYO, Adijat Omowunmi.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"ADEYEMI, Opeoluwa Toluwase.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"AINA, Taiwo abiola","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"ANIMASHAUN, Sakirat Bolanle.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"AVOSEH, Johnson oviavoh","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"BANJO, Adetoro Oluwayemisi.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"IDOWU, Olufunlimayo Felicia.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"MUSTAPHA, Emily aina","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"Mr. ALAYE,  Sikiru abiodun","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"Mr. OLAWUYI,  Ayorinde  O.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"OJELEYE, Bukola Atinuke.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"OLATUNJI, Kudirat bolarinwa","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"ONI, Philip Oluwafemi.","St. Stephen Comprehensive High School(Junior), Ado-Odo.",ADO-ODO OTA
"ADEGBOLA, Serifat amoke","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"ANISERE, Sekinat ejide","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"AYETOLU, Sunday moses","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"DOSU, Sewedo Joseph.","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"HOSU, Peter Gbenupo.","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"Mr. SANU,  Adewale adegbenga","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"Mr. SANUSI,  Sulaiman olayinka","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"Mrs. GBADAMOSI,  Obiageli  M.","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"OKE, Esther Olaide.","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"OLALEYE, Sauban Olatunji.","St. Stephen Comprehensive High School(Senior), Ado-Odo.",ADO-ODO OTA
"ABEL, Thomas sewanu","Toyon High School, Ere",ADO-ODO OTA
"ADEMUSAYO, Christianah Obad.","Toyon High School, Ere",ADO-ODO OTA
"AHOTON, Agnes Senayon.","Toyon High School, Ere",ADO-ODO OTA
"APATA, Oluwatope deborah","Toyon High School, Ere",ADO-ODO OTA
"ASADE, Yusuf amuda","Toyon High School, Ere",ADO-ODO OTA
"AVOSEH, Ezekiel Maugbe.","Toyon High School, Ere",ADO-ODO OTA
"AYETOLU, Oluwakemi esther","Toyon High School, Ere",ADO-ODO OTA
"AZEEZ, Ayodeji Shakirudeen.","Toyon High School, Ere",ADO-ODO OTA
"AZEEZ, Kabiru Adetunji.","Toyon High School, Ere",ADO-ODO OTA
"HUNYE, Abel Semako.","Toyon High School, Ere",ADO-ODO OTA
"JONATHAN, Esther foluso","Toyon High School, Ere",ADO-ODO OTA
"Mr. AGBEYANGI,  Olukayode","Toyon High School, Ere",ADO-ODO OTA
"Mr. ANIDU,  Tiawo hassan","Toyon High School, Ere",ADO-ODO OTA
"Mrs. OLADIPUPO,  Olanike taiwo","Toyon High School, Ere",ADO-ODO OTA
"Mrs. SOLADEMI,  Aderonke abimbola","Toyon High School, Ere",ADO-ODO OTA
"OGUNGBAYI, Olukayode Timothy.","Toyon High School, Ere",ADO-ODO OTA
"OLALEYE, Elizabeth Omolara.","Toyon High School, Ere",ADO-ODO OTA
"OLASODE, Gbolahan moses","Toyon High School, Ere",ADO-ODO OTA
"OLUWASUYI, Mojisola Titilayo.","Toyon High School, Ere",ADO-ODO OTA
"ROBERTS, Adebomi oluwabusayo","Toyon High School, Ere",ADO-ODO OTA
"ZINDOZIN, Qazeem Sedowhe.","Toyon High School, Ere",ADO-ODO OTA
"ADEKUNLE, Nofisat adenike","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"ADELANI, Bunmi serifat","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"ADESITE, Olamide folashade","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"ALANGI, Olanrewaju waliu","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mr. ABE,  Olusola busuyi","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mr. IDOWU,  Taoreed alabi","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mr. OGUNBIYI,  Olusegun gani","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mrs. ADEBOWALE,  Moyeola temilola","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mrs. AZEEZ,  Falilat bosede","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mrs. KADIRI,  Ibidun  S.","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mrs. OGUNBIYI,  Bolanle olukemi","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mrs. OSHOWO,  Eyiwumi aarinola","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"Mrs. OYELUMADE,  Taiwo grace","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"OLATUNDE, Risikat yetunde","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"OMONAYAJO, Esther siyenbola","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"ORIJA, Aderinola abosede","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"OYENEYE, Salimot oluwatoyin","Unity High School (Junior), Ijoko-Ota",ADO-ODO OTA
"ADEGBOLA, Suliat Abeke.","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"ADETULA, Bukola funke","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"ADEUSI, Adefunke elizabeth","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"AINA, Oluwaseun Babra.","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"EKEADA, Olawunmi Olabisi.","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"IDOWU, Marian busayo","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"KUSIMO, Akeem abiodun","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"Mr. AWESU,  Samuel gbenga","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"Mrs. BOROKINI,  Toyin","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"Mrs. KEHINDE,  Yenukunme olakitan","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"OTESILE, Omolara oluwatoyin","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"OZUEM, Idiat olapeju","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"TAIWO, Yinka alfred","Unity High School (Junior), Kajola Ibooro",ADO-ODO OTA
"ADEDIRAN, Kayode ajani","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"AJAYI, Oyeyemi bukola","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"AMUDA, Jelili Taiwo.","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"AWE, Folayemi eunice","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"JIMOH, Olaore Adedayo.","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mr. AIYEDOGBON,  Segun tunji","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mr. BAMGBOSE,  Omotola alao","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mr. EYINADE,  Gabriel ademola","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mr. OYEDELE,  Jelili ayinde","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mrs. OGUNDOLA,  Oluwakemi janet","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mrs. OHWOFASA,  Deborah oluseun","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mrs. OLALEYE,  Patience oziegbe","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mrs. SALMAN,  Aminat omolara","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"Mrs. SOWEMIMO,  Adetutu","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"OLABIYI, Elizabeth Yemisi.","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"OLANIYI, Damilare Timothy.","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"OLAONIPEKUN, Sakirat Titilayo.","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"OSO, Motunrade ganiyat","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"RAHEEM, Musibau adekunle","Unity High School (Senior), Ijoko-Ota",ADO-ODO OTA
"ADEFIOYE, Christianah Temitope.","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"ADELEYE, Ruth Oluwatoyin.","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"AJOSE, Oluranti Anike.","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"AKOH, Faith fatima","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"EWUOSO, Temitope Temitope.","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"FALETI, Foluso elliot","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"KIKISUHU, Folorunso gbenayon","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"Mr. FOLORUNSO,  S.  O.","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"Mrs. AKINPELU,  Adenike  O.","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"Mrs. DANIEL,  Olufunmilola adefunke","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"Mrs. EGUNJOBI,  Olubunmi keji","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"Mrs. GBESAN,  Adedayo temitope","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"ODEDINA, Ademola olusegun","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"TAIWO, Clement abiodun","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"TAIWO, Modupe Bisayo.","Unity High School (Senior), Kajola Ibooro",ADO-ODO OTA
"Mr. OLUGBADE,  Solomon folorunso","Zonal Secretary Office, Abeokuta North",Abeokuta North
"ABDULAZEEZ, Abdrazaq jumah",African Church Grammar School (Senior),Abeokuta South
"ABIODUN, Amos rotimi",African Church Grammar School (Senior),Abeokuta South
"ADEKANMBI, Oluyemi Samson.",African Church Grammar School (Senior),Abeokuta South
"ADEKOYA, Samson adekunle",African Church Grammar School (Senior),Abeokuta South
"ADEKUNLE, Oluseyi abidemi",African Church Grammar School (Senior),Abeokuta South
"ADEKUNTE, Oluwafunmilayo bolanle",African Church Grammar School (Senior),Abeokuta South
"ADELEGAN, Motunrayo ibilola",African Church Grammar School (Senior),Abeokuta South
"ADELEKE, Olusegun gbadebo",African Church Grammar School (Senior),Abeokuta South
"ADEMEHIN, Olusola olawunmi",African Church Grammar School (Senior),Abeokuta South
"ADENIYI, John temitope",African Church Grammar School (Senior),Abeokuta South
"ADESANWO, Bosede Oyeronke.",African Church Grammar School (Senior),Abeokuta South
"AJALA, Omolara modupe",African Church Grammar School (Senior),Abeokuta South
"AJAYI, Bola grace",African Church Grammar School (Senior),Abeokuta South
"AJAYI, Olugbenga peter",African Church Grammar School (Senior),Abeokuta South
"AKINDE, Oluwatoyin anu",African Church Grammar School (Senior),Abeokuta South
"AKINGBOLA, Adewunmi oluwatoyin",African Church Grammar School (Senior),Abeokuta South
"ALATISE, Oyinkansola christianah",African Church Grammar School (Senior),Abeokuta South
"ALI, Oluwakemi adufe",African Church Grammar School (Senior),Abeokuta South
"AWODE, Olayiwola adeyoye",African Church Grammar School (Senior),Abeokuta South
"BABAYEMI, Oluwatoyin kabirat",African Church Grammar School (Senior),Abeokuta South
"BALOGUN, Iyabo folashade",African Church Grammar School (Senior),Abeokuta South
"DOSUNMU, Olubimpe olubukola",African Church Grammar School (Senior),Abeokuta South
"FALANA, Omowunmi Olayinka.",African Church Grammar School (Senior),Abeokuta South
"FANIJO, Olayinka riskat",African Church Grammar School (Senior),Abeokuta South
"FANIYAN, Olusegun emmanuel",African Church Grammar School (Senior),Abeokuta South
"FOLORUNSHO, Ayodele peter",African Church Grammar School (Senior),Abeokuta South
"MAGNUS, Funmilayo adenike",African Church Grammar School (Senior),Abeokuta South
"MINIRU, Olalekan stephen",African Church Grammar School (Senior),Abeokuta South
"MUIBI, Mariam Ajoke.",African Church Grammar School (Senior),Abeokuta South
"Mr. OGUNSOLA,  Olusesan",African Church Grammar School (Senior),Abeokuta South
"Mrs. ADEBANJO,  Adenike  A.",African Church Grammar School (Senior),Abeokuta South
"Mrs. JOHNSON,  Oluwabunmi olawunmi",African Church Grammar School (Senior),Abeokuta South
"Mrs. SOTUNDE,  Omolola mary",African Church Grammar School (Senior),Abeokuta South
"ODUDE, Felicia temitope",African Church Grammar School (Senior),Abeokuta South
"ODUMADE, Sunday adekanbi",African Church Grammar School (Senior),Abeokuta South
"ODUNEWU, Victor adebayo",African Church Grammar School (Senior),Abeokuta South
"OGUNDARE, Edun Hassan.",African Church Grammar School (Senior),Abeokuta South
"OGUNDIPE, Atinuke Mulikat.",African Church Grammar School (Senior),Abeokuta South
"OJO, Abisoye olukemi",African Church Grammar School (Senior),Abeokuta South
"OLABODE, Saheed olawale",African Church Grammar School (Senior),Abeokuta South
"OLANIYAN, Olusola abosede",African Church Grammar School (Senior),Abeokuta South
"OLUJOBI, Rebecca omolara",African Church Grammar School (Senior),Abeokuta South
"OLUWAYOMI, Alaba Abidemi.",African Church Grammar School (Senior),Abeokuta South
"ONIFADE, Omobola Oluwayemisi.",African Church Grammar School (Senior),Abeokuta South
"ONOKPE, Stella eseoghene",African Church Grammar School (Senior),Abeokuta South
"OSSAI, Dickson",African Church Grammar School (Senior),Abeokuta South
"OYELEKAN, Omotunde motunrayo",African Church Grammar School (Senior),Abeokuta South
"OYENEKAN, Pelumi Christianah.",African Church Grammar School (Senior),Abeokuta South
"SALAUDEEN, Musa ajani",African Church Grammar School (Senior),Abeokuta South
"SANNI, Fatai adekunle",African Church Grammar School (Senior),Abeokuta South
"SHITTU, Habeeb Abiodun.",African Church Grammar School (Senior),Abeokuta South
"SODAMOLA, Surat abiodun",African Church Grammar School (Senior),Abeokuta South
"SOREMEKUN, Olubukola elizabeth",African Church Grammar School (Senior),Abeokuta South
"THOMAS, Owolabi odunayo",African Church Grammar School (Senior),Abeokuta South
"ADEWOLE, Racheal mojisola","Agunbiade Victory High School (Junior), Magbon",Abeokuta South
"AKINLOTAN, Bolanle funmilayo","Agunbiade Victory High School (Junior), Magbon",Abeokuta South
"AYANRINNO, Oluwatosin esther Kikelomo.","Agunbiade Victory High School (Junior), Magbon",Abeokuta South
"KEHINDE, Abidemi dupe","Agunbiade Victory High School (Junior), Magbon",Abeokuta South
"Mr. OLUFUNWA,  Oluseun abayomi","Agunbiade Victory High School (Junior), Magbon",Abeokuta South
"Mrs. KOMOLAFE,  Abosede  O.","Agunbiade Victory High School (Junior), Magbon",Abeokuta South
"OJO, Ayodele asake","Agunbiade Victory High School (Junior), Magbon",Abeokuta South
"AGBAJE, Nojeem ajasa",PG's Office,Abeokuta South
"Mr. OLABODE,  Olaseni rafiu",PG's Office,Abeokuta South
"Mrs. BERNARD-OKE,  Oluwakemi rashidat",PG's Office,Abeokuta South
"OGUNGBE, Oluwaseun abisoye",PG's Office,Abeokuta South
"IFIORAH, Charity Ifeoma.","A New School added, NewSchool",Ado-Odo Ota
"MAJEKODUNMI, Olukayode Albert.","A New School added, NewSchool",Ado-Odo Ota
"MAKINDE, Afolake racheal","A New School added, NewSchool",Ado-Odo Ota
"OSANYINBI, Temitayo Yusuf.","A New School added, NewSchool",Ado-Odo Ota
"BAMIDELE, Kudirat taiwo","YEMMA COMM.GRAMM SCH,AROMOKALA(COMB)",Ado-Odo Ota
"HOTONU, Lydia Mautin.","YEMMA COMM.GRAMM SCH,AROMOKALA(COMB)",Ado-Odo Ota
"ABDULAH, Rasidat taiwo","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"ADENIRAN, Adetutu fadeke","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"ADESINA, Oluwakemi Ibukun.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"ADETOMIWA, Oluwole Ezekiel.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"ADEYANJU, Shehu bamidele","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"AKINWUNMI, Felicia oluranti","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"FALOPE, Afolabi Julius.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"Mrs. OLADELE,  Olusola  A.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"Mrs. YUSUFF,  Bilikisu bosede","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"OKEDARA, Folake Omolola.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"OLALEKAN, Taiwo Christianah.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"OMIBEKU, Ramota ayoka","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"ONI, Funmilayo Christiana.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"TONADE, Taofeeq Abiodun.","Yemma Community Grammar School Aromokala, Oloparun",Ado-Odo Ota
"AKINBUSOLA, Eric akinwande","Zonal Secretary Office, Ado Odo I",Ado-Odo Ota
"Mrs. AKINLOYE,  Bukola fasilat","Zonal Secretary Office, Ado Odo II",Ado-Odo Ota
"ADENIRAN, Damilola ayinke","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"ADESANYA, Ikeola Oluwatoyin.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AFOLABI, Awawu Abosede.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AFUAPE, Florence motunrayo","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AJALA, Temitope Bukola.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AJAO, Hannah yemi","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AJUWON, Ololade florence","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AKINDIPE, Zacheaus olufemi","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AKINTAYO, Serifat Ololade.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AKINWUNMI, Olaoluwa omotayo","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"ATOLOGUN, Adeboyega peter","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"ATOMORI, Martin Kayode.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AYANWALE, Mufutau ayanniyi","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"AYINDE, Omoniyi eunice","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"BAKENNE, Salimon alani Adeola.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"BANJO, Oluremi modupe","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"BELLO-AREMU, Adebukola adeyomade","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"EMUELOSI, Adenike omolara","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"EWEDAIRO, Balikis Enitan.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"FABIYI, Akinwunmi oluseye","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"GEORGE, Adebisi Oluwakemi.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"IDOWU, Olabisi ajoke","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"IDOWU, Ramota Adunni.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"IRABOR, Oluwatoyin eshter","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"KAREEM, Sherifdeen abiodun","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"LAUCK, Ridwan Olasunkanmi.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"MADANDOLA, Bukola Racheal.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mr. ELEGBEDE,  Ademola alani","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mr. OGUNGBAYIKE,  Olubayo  O.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mr. OLOWOLAGBA,  Kehinde jelili","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. ABRAHAM,  Olukemi  F.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. ADEWALE,  Amudat abolanle","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. AKINBAMI,  Omolola mojisola","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. AWOLOWO,  Olumide  A.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. OGUNSOLA,  Yetunde folasade","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. OLUSANYA,  Omotayo  R.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. OWOSANYA,  Oluwakemi itunu","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"Mrs. YUSUF,  Olabisi monsurat","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"NNAJI, Romanus esinwoke","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"ODUBIYI, Tumininu Oyindamola.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"OGUNMEFUN, Funmilayo taiwo","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"OLALEYE, Emmanuel Abiodun.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"OLUFEMI, Akeem olatoye","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"OLUTADE, Idowu omolabake","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"OLUTILE, Rita onoigboria","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"OSIBOTE, Temitope rashidat","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"REGIS-OSUAGWU, Aanuoluwapo esther","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"SEKUMADE, Aminat Olubunmi.","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"SHOWOLE, Fatimo lola","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"SOBULO, Mojisola abosede","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"SOLOLA, Olawunmi basirat","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"USMAN, Yahya abiodun","Adeoye Lambo Memorial High School, Obada-Oko.",EWEKORO
"ADESINA, Modupe Adenike.","Community Comprehensive High School, Owowo.",EWEKORO
"ALABI, Cecilia talayo","Community Comprehensive High School, Owowo.",EWEKORO
"BAJEGBO, Damilola Dorcas.","Community Comprehensive High School, Owowo.",EWEKORO
"BALOGUN, Silifat Adebisi.","Community Comprehensive High School, Owowo.",EWEKORO
"FALAJU, Olaotan Olusegun.","Community Comprehensive High School, Owowo.",EWEKORO
"IDOWU-AGIDA, Foluke olusola","Community Comprehensive High School, Owowo.",EWEKORO
"ILEKOYA, Oluwafemi Babawale.","Community Comprehensive High School, Owowo.",EWEKORO
"KAREEM, Jamiu ajani","Community Comprehensive High School, Owowo.",EWEKORO
"Mr. OLIYIDE,  Olubode david","Community Comprehensive High School, Owowo.",EWEKORO
"Mrs. AIKULOLA,  Olusholape olayinka","Community Comprehensive High School, Owowo.",EWEKORO
"Mrs. AJAYI,  Yetunde  O.","Community Comprehensive High School, Owowo.",EWEKORO
"Mrs. AKINYEMI,  Regina adejoke","Community Comprehensive High School, Owowo.",EWEKORO
"Mrs. JIBOKU,  Abiodun abosede","Community Comprehensive High School, Owowo.",EWEKORO
"Mrs. MORENIKEJI,  Funmilayo elizabeth","Community Comprehensive High School, Owowo.",EWEKORO
"Mrs. OSOKO-AYODEJI,  Olasumbo olateju","Community Comprehensive High School, Owowo.",EWEKORO
"ODUMALA, Amdalat olabisi","Community Comprehensive High School, Owowo.",EWEKORO
"OGUNMEFUN, Janet Adia.","Community Comprehensive High School, Owowo.",EWEKORO
"OLADEINDE, Adenike abosede","Community Comprehensive High School, Owowo.",EWEKORO
"ONIYIDE, Adedokun adeniyi","Community Comprehensive High School, Owowo.",EWEKORO
"OSIFADE, Oluwaseun Tanwa.","Community Comprehensive High School, Owowo.",EWEKORO
"SAFI, Sunday","Community Comprehensive High School, Owowo.",EWEKORO
"SAIBU, Alice Funmilayo.","Community Comprehensive High School, Owowo.",EWEKORO
"SHENJOBI, Esther oyeyemi","Community Comprehensive High School, Owowo.",EWEKORO
"SHOBOLA, Akinsola sunday","Community Comprehensive High School, Owowo.",EWEKORO
"ADEJARE, Olubanji josiah","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"ADELAKUN, Adedeji","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"AKINBOBOLA, Victoria Funmilayo.","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"AKINREMI, Babalola tunde","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"LASISI, Rufai abiodun","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"Mr. ABISOYE,  Adekunle","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"Mr. ADELAJA,  Ibrahim titilayo","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"Mr. OYEDIJI,  Olalere jacob","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"OLOYADE, Mosope Azeezah.","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"OLOYEDE, Charles adeleye","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"OMOGESIN, Segun","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"OSOSANYA, Fasilat Idowu.","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"SALAKO, Bushirat tunrayo","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"SHANU, Oluwayemisi esther","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"SHOROYE, Mahmood olanrewaju","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"SORINOLU, Olubayo","Ifedapo Community Comprehensive High School, Ajegunle-Abalabi.",EWEKORO
"AJAKAIYE, Dorcas bolatito","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"AREMU, Isiwat olayinka","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"LASISI, Basiru ayobami","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"MAC-PEPPLE, Victoria Olubunmi.","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"Mr. SANNI,  Mubashir oladele","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"OBASA, Toyin Silifat.","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"OGUNJOBI, Chinomso Esther.","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"OLADIPO, Rasidat Folasade.","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"OLAOSEBIKAN, Segun peter","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"POOPOLA, Olusola oluyinka","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"SANUSI, Sadirudeen Wale.","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"TAIWO, Olusola adeyanju","Itori Comprehensive High School (Junior), Itori.",EWEKORO
"ADEBIYI, Kudirat ajoke","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"ADEBOLA, Suleman olakulehin","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"ADEOGUN, Olatundun Adufe.","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"AKINOLA, Omobolanle fausat","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"AKINSANYA, Sunday adisa","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"IJIOLA, Isaac olatunbosun","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"Mr. ADEYINKA,  Irewale","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"Mr. AFOLABI,  Olusanjo jamiu","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"Mr. AKEWEJE,  Abolade ramon","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"Mr. ODEWOLE,  Oludayo saheed","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"Mr. RABIU,  Taiwo michael","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"Mrs. OLALUYI,  Cecilia oluwabunmi","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"OGUNLABI, Mathew tosin","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"OGUNRINDE, Joshua kehinde","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"OKELOLA, Grace odunola","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"OLADIMEJI, Funke O.a.r.","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"OLAJIDE, Dotun Omoboriowo.","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"OWOLABI, Tolulope oyeniyi","Itori Comprehensive High School (Senior), Itori.",EWEKORO
"AJOFOYINBO, Elizabeth Kemi.","Methodist High School(Junior), Arigbajo.",EWEKORO
"AKINDELE, Abidemi dorcas","Methodist High School(Junior), Arigbajo.",EWEKORO
"AKINLOYE, Olanike azeezat","Methodist High School(Junior), Arigbajo.",EWEKORO
"AKINPELU, Maria  Oluwatobiloba.","Methodist High School(Junior), Arigbajo.",EWEKORO
"AKINWALE, Yetunde rachael","Methodist High School(Junior), Arigbajo.",EWEKORO
"AKINYEMI, Folorunso emmanuel","Methodist High School(Junior), Arigbajo.",EWEKORO
"AMUSAN, Adewale stephen","Methodist High School(Junior), Arigbajo.",EWEKORO
"EGUNSOLA, Remilekun omolola","Methodist High School(Junior), Arigbajo.",EWEKORO
"LAWAL, Musiliu olaiwola","Methodist High School(Junior), Arigbajo.",EWEKORO
"MONANYA, Jospeh ojonimi","Methodist High School(Junior), Arigbajo.",EWEKORO
"MUTAIRU, Mulikat Motunrayo .o..","Methodist High School(Junior), Arigbajo.",EWEKORO
"Mr. OKELEYE,  Adetola musibau","Methodist High School(Junior), Arigbajo.",EWEKORO
"Mr. OMIDIJI,  Albert olusola","Methodist High School(Junior), Arigbajo.",EWEKORO
"Mrs. BANJO,  Alaba josephine","Methodist High School(Junior), Arigbajo.",EWEKORO
"Mrs. MUTIU-ADEKUNLE,  Lateefat moninuola","Methodist High School(Junior), Arigbajo.",EWEKORO
"Mrs. SULAYIMAN,  Fausat omotayo","Methodist High School(Junior), Arigbajo.",EWEKORO
"ODELERU, Omodele omolola","Methodist High School(Junior), Arigbajo.",EWEKORO
"OGUNRINOLA, Omowunmi  Tosin.","Methodist High School(Junior), Arigbajo.",EWEKORO
"OLALERU, Abiodun adenike","Methodist High School(Junior), Arigbajo.",EWEKORO
"OLUMIDE, Olayinka eunice","Methodist High School(Junior), Arigbajo.",EWEKORO
"ONAFOWOKAN, Benjamin babatunde","Methodist High School(Junior), Arigbajo.",EWEKORO
"ORISATOLA, Tajudeen alowonle","Methodist High School(Junior), Arigbajo.",EWEKORO
"OYADELE, Racheal olufunke","Methodist High School(Junior), Arigbajo.",EWEKORO
"TAYO, Ismail ayoola","Methodist High School(Junior), Arigbajo.",EWEKORO
"ADEWALE, Adebayo olubode","Methodist High School(Senior), Arigbajo.",EWEKORO
"AFUAPE, Gbenga akanni","Methodist High School(Senior), Arigbajo.",EWEKORO
"AKINBODE, Olabimpe rachael","Methodist High School(Senior), Arigbajo.",EWEKORO
"ALABI, Olabisi Janet.","Methodist High School(Senior), Arigbajo.",EWEKORO
"BABATUNDE, Michael olusegun","Methodist High School(Senior), Arigbajo.",EWEKORO
"KEHINDE, Isiwat yetunde","Methodist High School(Senior), Arigbajo.",EWEKORO
"MUSTAPHA, Akinsoji rauff","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mr. ADELEKE,  Oluwanbe sunday","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mr. OGUNSOLA,  Olusegun olalekan","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mr. OYEWALE,  Olugbemi  A.","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mr. TOWAKENU,  Augustine kunle","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mr. YUSUF,  Yisa olawale","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mrs. AKINOLA,  Abisola  O.","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mrs. ELUWOLE,  Mojisola oluwamayowa","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mrs. FATOYINBO,  Oluranti comfort","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mrs. OLADIPUPO,  Racheal faderera","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mrs. OLAJORIN,  Hannah  A.","Methodist High School(Senior), Arigbajo.",EWEKORO
"Mrs. SOYINKA,  Mojisola mufuliat","Methodist High School(Senior), Arigbajo.",EWEKORO
"OLABAMIJI, Olabimpe olajumoke","Methodist High School(Senior), Arigbajo.",EWEKORO
"OLALEYE, Ayisat Abosede.","Methodist High School(Senior), Arigbajo.",EWEKORO
"OLUJIMI, Ebenezer gbenga taiwo","Methodist High School(Senior), Arigbajo.",EWEKORO
"OTEMUYIWA, Oladele fatai","Methodist High School(Senior), Arigbajo.",EWEKORO
"SOWEMIMO, Olufunso olutoyin","Methodist High School(Senior), Arigbajo.",EWEKORO
"YAKUBU, Ayodeji alli","Methodist High School(Senior), Arigbajo.",EWEKORO
"ADEGUNLE, Moses ademola","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"ADEYEMO, Idowu Isaac.","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"ADIGUN, Solomon Adebayo.","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"ALANI, Grace Oluwaseun.","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"Mrs. ADEOSUN,  Modupe adejoke","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"OGUNDORO, Comfort Iyabo.","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"OGUNJIRIN-TELLA, Temilade Aramide.","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"SANUSI, Monsurat Taiwo.","Olorunda Community Comprehensive High School, Olorunda.",EWEKORO
"KEHINDE, Ibrahim olanrewaju","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"KOLAWOLE, Abimbola victoria","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"Mr. FOLORUNSHO,  Kayode","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"Mr. NASIRUDEEN,  Sakariyau  A.","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"Mr. OSOBA,  Abiodun olalekan","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"Mr. SOGBAYI,  Olukayode abiye","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"Mrs. IDOWU,  Idowu margaret","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"Mrs. SOYINKA,  Adepeju temitope","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"Mrs. TAIWO,  Agnes  A.","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"ORISABIYI, Akinbambo akanni","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"OYEWALE, Esther  atinuke","Owu Community Comprehensive High School, Elere-Adubi.",EWEKORO
"ADEBIYI, Taiwo Adenike.","Papalanto High School (Junior), Papalanto.",EWEKORO
"ADEIFE, Ademola olugbemi","Papalanto High School (Junior), Papalanto.",EWEKORO
"AYEDUN, Comfort Oluwafunmilayo.","Papalanto High School (Junior), Papalanto.",EWEKORO
"BABASOLA, Aminat abolanle","Papalanto High School (Junior), Papalanto.",EWEKORO
"BANKOLE, Bukola toyin","Papalanto High School (Junior), Papalanto.",EWEKORO
"BENSON, Clementina oluchi","Papalanto High School (Junior), Papalanto.",EWEKORO
"ELEMIDE, Racheal abimbola","Papalanto High School (Junior), Papalanto.",EWEKORO
"FATIDE, Oluwasogo olayinka","Papalanto High School (Junior), Papalanto.",EWEKORO
"ILORI, Temitope olayinka","Papalanto High School (Junior), Papalanto.",EWEKORO
"KODAOLU, Segun moses","Papalanto High School (Junior), Papalanto.",EWEKORO
"Mr. ADEGUNLE,  Mutiu  A.","Papalanto High School (Junior), Papalanto.",EWEKORO
"Mr. ROJAIYE,  Kamor adelani","Papalanto High School (Junior), Papalanto.",EWEKORO
"Mrs. ONIYIDE,  Temitope oyinade","Papalanto High School (Junior), Papalanto.",EWEKORO
"OGUNDIMU, Kehinde sakirat","Papalanto High School (Junior), Papalanto.",EWEKORO
"OGUNDIMU, Olubunmi kemi","Papalanto High School (Junior), Papalanto.",EWEKORO
"OGUNGBEMI, Oluwaseun bukunmi","Papalanto High School (Junior), Papalanto.",EWEKORO
"OJEBIYI, Omolola afusat","Papalanto High School (Junior), Papalanto.",EWEKORO
"OKESINA, Adeola","Papalanto High School (Junior), Papalanto.",EWEKORO
"OLANREWAJU, Funmilayo opeyemi","Papalanto High School (Junior), Papalanto.",EWEKORO
"OYETAYO, Rasheedat Kehinde.","Papalanto High School (Junior), Papalanto.",EWEKORO
"SOBOWALE, Bukunmi esther","Papalanto High School (Junior), Papalanto.",EWEKORO
"ADEJARE, Morolake Oluwatobiloba.","Papalanto High School (Senior), Papalanto.",EWEKORO
"AMOO, Rasaq idowu","Papalanto High School (Senior), Papalanto.",EWEKORO
"AWOLESI, Adedolapo abiola","Papalanto High School (Senior), Papalanto.",EWEKORO
"BAMMEKE, Adebowale","Papalanto High School (Senior), Papalanto.",EWEKORO
"DARE, Oladokun gbolagade","Papalanto High School (Senior), Papalanto.",EWEKORO
"FADAIRO, Oludolapo bisola","Papalanto High School (Senior), Papalanto.",EWEKORO
"FADARE, Folasade Victoria.","Papalanto High School (Senior), Papalanto.",EWEKORO
"FALAJU, Adisa","Papalanto High School (Senior), Papalanto.",EWEKORO
"FASASI, Adenike muinat","Papalanto High School (Senior), Papalanto.",EWEKORO
"ISIAKA, Muhydeen olatunji","Papalanto High School (Senior), Papalanto.",EWEKORO
"MATEMILOLA, Adeniyi emmanuel","Papalanto High School (Senior), Papalanto.",EWEKORO
"Mr. ADESOPE,  Dauda adeleke","Papalanto High School (Senior), Papalanto.",EWEKORO
"Mr. MUSTAPHA,  Jelili adekunle","Papalanto High School (Senior), Papalanto.",EWEKORO
"Mrs. EDE,  Ikeade abiodun","Papalanto High School (Senior), Papalanto.",EWEKORO
"Mrs. FOWOSIRE,  Olayinka  A.","Papalanto High School (Senior), Papalanto.",EWEKORO
"Mrs. MOSAKU,  Olayinka abidemi","Papalanto High School (Senior), Papalanto.",EWEKORO
"OLASODE, Funmilayo racheal","Papalanto High School (Senior), Papalanto.",EWEKORO
"ONANAIKE, Oluwayomi omolara","Papalanto High School (Senior), Papalanto.",EWEKORO
"OSENI, Funmilayo abiodun","Papalanto High School (Senior), Papalanto.",EWEKORO
"SANNI, Rasheed abiodun","Papalanto High School (Senior), Papalanto.",EWEKORO
"SIWOKU, Abiodun oluwaseun","Papalanto High School (Senior), Papalanto.",EWEKORO
"TIJJANI, Nimota kehinde joke","Papalanto High School (Senior), Papalanto.",EWEKORO
"ADEGOKE, Micheal adewunmi","United Comprehensive High School, Wasinmi.",EWEKORO
"ADEYEMI, Adebayo michael","United Comprehensive High School, Wasinmi.",EWEKORO
"AJAYI, Folorunso julius","United Comprehensive High School, Wasinmi.",EWEKORO
"AKINDELE, Janet Oluwayemisi.","United Comprehensive High School, Wasinmi.",EWEKORO
"ARIYIBI, Benson olukunle","United Comprehensive High School, Wasinmi.",EWEKORO
"BAMGBOSE, Oluwabukola Olamide.","United Comprehensive High School, Wasinmi.",EWEKORO
"CHARLES, Christopher","United Comprehensive High School, Wasinmi.",EWEKORO
"FADEYI, Olanrewaju olujimi","United Comprehensive High School, Wasinmi.",EWEKORO
"GASAL, Ronke afusat","United Comprehensive High School, Wasinmi.",EWEKORO
"Mr. MUSA,  Musilihudeen  O.","United Comprehensive High School, Wasinmi.",EWEKORO
"Mrs. ODUYELU,  Temitope  adenike","United Comprehensive High School, Wasinmi.",EWEKORO
"Mrs. OGUNDIMU,  Fadeke olukemi","United Comprehensive High School, Wasinmi.",EWEKORO
"ODUMUYIWA, Sadiat Amope.","United Comprehensive High School, Wasinmi.",EWEKORO
"OLAOYE-SONEYE, Basirat Anike.","United Comprehensive High School, Wasinmi.",EWEKORO
"OLUDIYA, Maria olukemi","United Comprehensive High School, Wasinmi.",EWEKORO
"SOYOYE, Adeniji isiaka","United Comprehensive High School, Wasinmi.",EWEKORO
"Mr. OKE,  Pius lawrence",Zonal Office,Ewekoro
"Mrs. KUTI,  Olutayo",Zonal Office,Ewekoro
"ABIODUN, Iyabo adebisi","Adenrele High Schoo (Junior), Ifo",IFO
"ADEKOYA, Ayisat olabisi","Adenrele High Schoo (Junior), Ifo",IFO
"ADELOWO, Abiodun Modinat.","Adenrele High Schoo (Junior), Ifo",IFO
"ADETONA, Adeyinka mary","Adenrele High Schoo (Junior), Ifo",IFO
"ADEYEMI, Bolanle samuel","Adenrele High Schoo (Junior), Ifo",IFO
"ADEYINKA, Solomon idowu","Adenrele High Schoo (Junior), Ifo",IFO
"AMUSAN, Oluwakemi esther","Adenrele High Schoo (Junior), Ifo",IFO
"BABAJIDE, Abibat Anike.","Adenrele High Schoo (Junior), Ifo",IFO
"BELLO, Motunrayo olaoluwa","Adenrele High Schoo (Junior), Ifo",IFO
"DADA, Mary gbemisola","Adenrele High Schoo (Junior), Ifo",IFO
"FOLOUNSHO, Adeola titilayo","Adenrele High Schoo (Junior), Ifo",IFO
"KAZZIM, Abimbola idayat","Adenrele High Schoo (Junior), Ifo",IFO
"MALIK, Olajumoke bilikees","Adenrele High Schoo (Junior), Ifo",IFO
"Mr. OGUNYEMI,  Samuel oluwakayode","Adenrele High Schoo (Junior), Ifo",IFO
"Mrs. AFOLABI,  Lydia oyebobade","Adenrele High Schoo (Junior), Ifo",IFO
"Mrs. SOGBESAN,  Iyabode olugbemisola","Adenrele High Schoo (Junior), Ifo",IFO
"ODENUSI, Adijat Folasade.","Adenrele High Schoo (Junior), Ifo",IFO
"OGUNSANYA, Oluwayemisi suwebat","Adenrele High Schoo (Junior), Ifo",IFO
"OGUNSEYE, Abosede victoria","Adenrele High Schoo (Junior), Ifo",IFO
"OLAWALE, Monsuru alabi","Adenrele High Schoo (Junior), Ifo",IFO
"OLUFADE, Oluwaseyi olatunbosun","Adenrele High Schoo (Junior), Ifo",IFO
"OLUSANU, Elizabeth taiye","Adenrele High Schoo (Junior), Ifo",IFO
"OSUNLANA, Omolola bandele","Adenrele High Schoo (Junior), Ifo",IFO
"ABATI, Olufunmilayo oladunke","Adenrele High School (Senior), Ifo",IFO
"ADEBOYE, Omoniyi samuel","Adenrele High School (Senior), Ifo",IFO
"ADEGUNLE, Rafiu adisa","Adenrele High School (Senior), Ifo",IFO
"ADENEKAN, Mujidat abolade","Adenrele High School (Senior), Ifo",IFO
"AKINBODE, Waheed oladimeji","Adenrele High School (Senior), Ifo",IFO
"AKINYEMI, Zaccheaus foluso","Adenrele High School (Senior), Ifo",IFO
"ASOGBON, Abosede Olateju.","Adenrele High School (Senior), Ifo",IFO
"EFIANAYI, Babalakin ololade","Adenrele High School (Senior), Ifo",IFO
"Mr. ADELANI,  Idris adesanya","Adenrele High School (Senior), Ifo",IFO
"Mr. BANJO,  Opeyemi ariyo","Adenrele High School (Senior), Ifo",IFO
"Mr. OLUWOLE,  Saburi  O.","Adenrele High School (Senior), Ifo",IFO
"Mrs. AJIBADE,  Bukola raimot","Adenrele High School (Senior), Ifo",IFO
"Mrs. AMAO,  Elizabeth temilola","Adenrele High School (Senior), Ifo",IFO
"Mrs. OLIYIDE,  Monsurat abiola","Adenrele High School (Senior), Ifo",IFO
"Mrs. SALAU,  Olarewaju muibat","Adenrele High School (Senior), Ifo",IFO
"OGUNDELE, Akinsola matthew","Adenrele High School (Senior), Ifo",IFO
"OGUNJOBI, Oluwaseyi oluwatoyin","Adenrele High School (Senior), Ifo",IFO
"OGUNLEYE, Olukayode james","Adenrele High School (Senior), Ifo",IFO
"OGUNWEMIMO, Funmilola Adepeju.","Adenrele High School (Senior), Ifo",IFO
"OLABISI, Temitope omotunde","Adenrele High School (Senior), Ifo",IFO
"OLANIYAN, Adeola kehinde","Adenrele High School (Senior), Ifo",IFO
"OLOKODANA, Yusuf akeem","Adenrele High School (Senior), Ifo",IFO
"OLOYEDE, Hazanat taiwo","Adenrele High School (Senior), Ifo",IFO
"RAJI, Bilikisu agbeke","Adenrele High School (Senior), Ifo",IFO
"SOSANOLU, Olawale samuel","Adenrele High School (Senior), Ifo",IFO
"ADEBAYO, Taibat adebowale",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"ADEBISI, Fehintola motunrayo",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"ADEGBITE, Taibat adunola",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"AKINDELE, Shakirat folasade",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"AKWU, Mabel okhuomo",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"AMINU, Olubukola oluwaseun",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"AMODU, Janet kehinde",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"BELLO, Kudirat bolanle",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"FADODUN, Olubukola ayoyemi",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"FASUNON, Abayomi bamidele",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"IBIRINDE, Abimbola oluwafunbi",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"MOJEED, Olufunmi Foluke.",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"Mr. BUSARI,  Jamiu  M.",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"Mr. HASSAN,  Abdul-rasheed",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"Mr. OGUNYALE,  Abiodun  M.",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"Mrs. WAHAB,  Doyinsola  A.",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OGUNMERU, Oluwasegun titilayo",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OKESOLA, Olubunmi oluwaranti",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OKEYINGBO, Morolake abosede",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OKUBENA, Motunrayo adebisi",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OLATUNJI, Oluyemisi adejoke",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OLAWUMI, Mary oluwayemisi",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OLAYORI, Adedayo omolara",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OPEBIYI, Serah olayinka",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OROPO, Joke abolanle",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"OYESOLA, Yetunde olamide",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"SAMUEL, Titlayo christiana",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"SONUBI, Olawale olubunmi",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"TELLA, Oyeyemi Mojisola.",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"YUSUFF, Rukayat Adepeju.",Agbado District Comprehensive High School(Jnr) Oke-Aro,IFO
"AKINTOLA, Fausat olusola",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"AMOSU, Bolanle ramota",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"BALOGUN, Ademola bandele",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"BELLO, Tairat olufunmilayo",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"EVUEN, Cecillia Olubunmi.",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mr. ADENEKAN,  Emmanuel",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mr. BELLO,  Ibrahim olajide",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mr. OLATUNBOSUN,  Ayodeji  O.",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. ADELEYE,  Olubunmi olufunmilayo",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. ADIGUN,  Saheedah aderonke",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. BAMIDELE-JOHN,  Oluwagbemisola abiola",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. ENIYANDUNMO,  Folashade adenike",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. IWALAIYE,  Olu dorcas",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. JIMOH,  Kikelomo dada",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. OYELEYE,  Motunrayo  A.",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"Mrs. SOMEFUN,  Oluwabunmi adeola",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"ODUMUYIWA, Idayat Temitope.",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"OKU, Toyin abidemi",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"OLADIPUPO, Bukola tomisin",Agbado District Comprehensive High School(Snr) Oke-Aro,IFO
"ABIOLA, Morolake christiana","Ajuwon High School (Junior), Ajuwon",IFO
"ADEBAYO, Josephine taiwo","Ajuwon High School (Junior), Ajuwon",IFO
"ADEBAYO, Nurat omotunde","Ajuwon High School (Junior), Ajuwon",IFO
"AKINFENWA, Mary mosope","Ajuwon High School (Junior), Ajuwon",IFO
"AKINMOLADUN, Oluwafunke Opeyemi.","Ajuwon High School (Junior), Ajuwon",IFO
"ALLI, Adejoke rashidat","Ajuwon High School (Junior), Ajuwon",IFO
"ARASHI, Adeshina Sulaiman.","Ajuwon High School (Junior), Ajuwon",IFO
"Mr. AKINLOTAN,  Timothy babatunde","Ajuwon High School (Junior), Ajuwon",IFO
"Mr. TIJANI,  Asimiyu ajibol a","Ajuwon High School (Junior), Ajuwon",IFO
"Mrs. BANKOLE,  Oludele aduke","Ajuwon High School (Junior), Ajuwon",IFO
"Mrs. ELEYINMI,  Olumayokun","Ajuwon High School (Junior), Ajuwon",IFO
"ODUMOSU, Oluwakorede taiwo","Ajuwon High School (Junior), Ajuwon",IFO
"OLABIYI, Ayodele ebibu","Ajuwon High School (Junior), Ajuwon",IFO
"OLORUNFEMI, Grace omolayo","Ajuwon High School (Junior), Ajuwon",IFO
"OYEKAN, Olayinka joan","Ajuwon High School (Junior), Ajuwon",IFO
"OYENEKAN, Omosalewa oluwakemi","Ajuwon High School (Junior), Ajuwon",IFO
"SIYANBOLA, Bukky aminat","Ajuwon High School (Junior), Ajuwon",IFO
"SOMUYIWA, Rita modupe","Ajuwon High School (Junior), Ajuwon",IFO
"ADEBAYO, Funmilayo belssing","Ajuwon High School (Senior), Ajuwon",IFO
"ADEBAYO-OREBOTE, Lucia olufunmilayo","Ajuwon High School (Senior), Ajuwon",IFO
"ADEDAYO, Adenike Oluwaremilekun.","Ajuwon High School (Senior), Ajuwon",IFO
"ADENIYI, Funmilayo bola","Ajuwon High School (Senior), Ajuwon",IFO
"ADEOYE, Adeniyi James.","Ajuwon High School (Senior), Ajuwon",IFO
"ADEWEBI, Esther Folasade.","Ajuwon High School (Senior), Ajuwon",IFO
"ADEYERI, Oluwakemi fausat","Ajuwon High School (Senior), Ajuwon",IFO
"AFOLABI, Aderinsola oluwaseun","Ajuwon High School (Senior), Ajuwon",IFO
"AREMU, Foluke abosede","Ajuwon High School (Senior), Ajuwon",IFO
"AWOLESI, Olufunmilayo","Ajuwon High School (Senior), Ajuwon",IFO
"BABALOLA, Kehinde mary","Ajuwon High School (Senior), Ajuwon",IFO
"IFESANYA, Oriyomi adeniyi","Ajuwon High School (Senior), Ajuwon",IFO
"LAWAL, Idowu","Ajuwon High School (Senior), Ajuwon",IFO
"MAKINDE, Olufolake comfort","Ajuwon High School (Senior), Ajuwon",IFO
"MAMADELO, Omowunmi ajoke","Ajuwon High School (Senior), Ajuwon",IFO
"Mr. JOHN,  Olujide iyanda","Ajuwon High School (Senior), Ajuwon",IFO
"Mr. OGUNSANYA,  Sunday adeyemi","Ajuwon High School (Senior), Ajuwon",IFO
"ODEGBAMI, Kuburat Adeola.","Ajuwon High School (Senior), Ajuwon",IFO
"ODUSOLA, Temitayo temitope","Ajuwon High School (Senior), Ajuwon",IFO
"OLAWOLE, Michael bamidele","Ajuwon High School (Senior), Ajuwon",IFO
"OLOWOLADE, Omolara margaret","Ajuwon High School (Senior), Ajuwon",IFO
"OLUFUNWA, Adenrele enitan","Ajuwon High School (Senior), Ajuwon",IFO
"OSEWA, Omolara modupe","Ajuwon High School (Senior), Ajuwon",IFO
"OYELOLA, Victoria bolanle","Ajuwon High School (Senior), Ajuwon",IFO
"OYEWOLE, Christianah olufunke","Ajuwon High School (Senior), Ajuwon",IFO
"WOMILOJU, Oladunni foluke","Ajuwon High School (Senior), Ajuwon",IFO
"ABIODUN, Racheal Oluremilekun.",Anglican Grammar School (Junior) Okenla,IFO
"ADEOBA, Sarah Ibukunoluwapo.",Anglican Grammar School (Junior) Okenla,IFO
"ADEWALE, Gbenga Phillips.",Anglican Grammar School (Junior) Okenla,IFO
"ADEYEMI, Josephine abosede",Anglican Grammar School (Junior) Okenla,IFO
"ADEYEMO, Modupe adekemi",Anglican Grammar School (Junior) Okenla,IFO
"AFOLABI, Abibat Folashade.",Anglican Grammar School (Junior) Okenla,IFO
"AINA, Bamidele olatunde",Anglican Grammar School (Junior) Okenla,IFO
"AKINWUNMI, Folake oyinkan",Anglican Grammar School (Junior) Okenla,IFO
"ALAMU, Ishola akeem",Anglican Grammar School (Junior) Okenla,IFO
"ARO, Funmilayo busola",Anglican Grammar School (Junior) Okenla,IFO
"ATOBA, Oluwaseun Adeniyi.",Anglican Grammar School (Junior) Okenla,IFO
"AYODELE, Esther omolara",Anglican Grammar School (Junior) Okenla,IFO
"BALOGUN, Olunike grace",Anglican Grammar School (Junior) Okenla,IFO
"GBADURA-GLORY, Deborah bolanle",Anglican Grammar School (Junior) Okenla,IFO
"KAZEEM-IROKO, Oluremi Muyibat.",Anglican Grammar School (Junior) Okenla,IFO
"KUSHIMO, Abosede esther",Anglican Grammar School (Junior) Okenla,IFO
"MOMOH, Abiodun isaac",Anglican Grammar School (Junior) Okenla,IFO
"Mrs. ADEYINKA,  Kehinde muisat",Anglican Grammar School (Junior) Okenla,IFO
"Mrs. SOTAYO,  Bisi labake",Anglican Grammar School (Junior) Okenla,IFO
"OGUN, Wasilat joke",Anglican Grammar School (Junior) Okenla,IFO
"OGUNMODEDE, Ruth adewunmi",Anglican Grammar School (Junior) Okenla,IFO
"OJE, Moses adefemi",Anglican Grammar School (Junior) Okenla,IFO
"OMOTOSHO, Felicia oluwakemi",Anglican Grammar School (Junior) Okenla,IFO
"OMOTOSHO, Temitope Oluwafunke.",Anglican Grammar School (Junior) Okenla,IFO
"OYEWESO, Oluremi ruth",Anglican Grammar School (Junior) Okenla,IFO
"POVIESI, Grace Sende.",Anglican Grammar School (Junior) Okenla,IFO
"SOWEMIMO, Omobolanle oluwakemi",Anglican Grammar School (Junior) Okenla,IFO
"SOYOOLA, Esther Ibironke.",Anglican Grammar School (Junior) Okenla,IFO
"TORIOLA, Anthony olufemi",Anglican Grammar School (Junior) Okenla,IFO
"ADEEKO, Adeoye oluremi",Anglican Grammar School Snr Okenla,IFO
"ADEKEYE, Theresa dupe",Anglican Grammar School Snr Okenla,IFO
"ADEKUNLE, Busayo oluwapeju",Anglican Grammar School Snr Okenla,IFO
"ADEMOLA, Abiose ike oluwa",Anglican Grammar School Snr Okenla,IFO
"ADENIYI, Ganiyat omolabake",Anglican Grammar School Snr Okenla,IFO
"ADETUNJI, Afusat abiola",Anglican Grammar School Snr Okenla,IFO
"EWEMOJE, Florence modupeola",Anglican Grammar School Snr Okenla,IFO
"Mr. AJOBIEWE,  Nurudeen ayodeji",Anglican Grammar School Snr Okenla,IFO
"Mr. OLAWUYI,  Oluyemi  K.",Anglican Grammar School Snr Okenla,IFO
"Mr. OYEWOBI,  Hezekiah temidayo",Anglican Grammar School Snr Okenla,IFO
"Mrs. ADELAKUN,  Ramota omowunmi",Anglican Grammar School Snr Okenla,IFO
"Mrs. ADESANYA,  Mercy olubisi",Anglican Grammar School Snr Okenla,IFO
"Mrs. BAMGBAYE,  Funmilayo  A.",Anglican Grammar School Snr Okenla,IFO
"Mrs. BENIORI,  Love joy adebola",Anglican Grammar School Snr Okenla,IFO
"Mrs. OLANIYAN,  Olasunbo risikat",Anglican Grammar School Snr Okenla,IFO
"OKEGADE, Oluwatobi Adedoyin.",Anglican Grammar School Snr Okenla,IFO
"OLUTOKI, Samuel olasunkanmi",Anglican Grammar School Snr Okenla,IFO
"OLUWOLE, Olugbenga jonathan",Anglican Grammar School Snr Okenla,IFO
"SHITTU, Rasidat Oluwatosin.",Anglican Grammar School Snr Okenla,IFO
"SOGBAMU, Adisa sakiru",Anglican Grammar School Snr Okenla,IFO
"ABIOYE, Olaitan rukayat","Coker Area Comprehensive High School, Coker",IFO
"ADEOTI, Modupe jumoke","Coker Area Comprehensive High School, Coker",IFO
"AKINTOBI, Taiwo patience","Coker Area Comprehensive High School, Coker",IFO
"ASADE, Oluwasina akanni","Coker Area Comprehensive High School, Coker",IFO
"ATANDA, Monsurat Tanwa.","Coker Area Comprehensive High School, Coker",IFO
"MATEMILOLA, Azeez abiola","Coker Area Comprehensive High School, Coker",IFO
"Mr. ABIODUN,  Oluwasesan richard","Coker Area Comprehensive High School, Coker",IFO
"Mr. SORUNGBE,  Olugbenga sunday","Coker Area Comprehensive High School, Coker",IFO
"Mrs. ADEBISI,  Omolade makanjuola","Coker Area Comprehensive High School, Coker",IFO
"OJEKUNLE, Adebayo Adeola.","Coker Area Comprehensive High School, Coker",IFO
"OJUTIKU, Daniel taiwo","Coker Area Comprehensive High School, Coker",IFO
"OTUN, Aminat Alake.","Coker Area Comprehensive High School, Coker",IFO
"OYEDALU, Gbemisola sarah","Coker Area Comprehensive High School, Coker",IFO
"ADETOYE, Oluwatoyin sidikat",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"MUSA, Adetutu ojuolape",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"Mr. OGUNLEYE,  Tunde adeyemi",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"Mrs. ADELUOLA,  Olasunmbo ibidunni",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"Mrs. OKUNOLA,  Oluwumi f. abolanle",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"Mrs. ROTIBI,  Oluremi",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"ODUSAMI, Abisola Adeolu.",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"OGUNNOWO, Sidikat toyin",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"OGUNYADE, Oluwafunke Anuoluwapo.",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"OLOSUNDE, Busayo  Rebecca.",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"ONWUCHEKWA, Louisa Chika.",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"SANUSI, Olufunmilayo ayobolu",Comm. High Sch.(Junior) Ojodu-Abiodun,IFO
"ADEYEMI, Oluwatosin Temidayo.",Comm. High Sch.(Snr) Ojodu-Abiodun,IFO
"AMUSAT, Babatunde teslim",Comm. High Sch.(Snr) Ojodu-Abiodun,IFO
"Mrs. ADUN,  Mary olasunkanmi",Comm. High Sch.(Snr) Ojodu-Abiodun,IFO
"Mrs. AGESIN,  Oluwakomiyo blessing",Comm. High Sch.(Snr) Ojodu-Abiodun,IFO
"Mrs. ATOYEGBE-IKUDAISI,  Adesola oluwaremilekun",Comm. High Sch.(Snr) Ojodu-Abiodun,IFO
"Mrs. OLALEYE,  Titilope janet",Comm. High Sch.(Snr) Ojodu-Abiodun,IFO
"RAJI, Tawakalitu bukola",Comm. High Sch.(Snr) Ojodu-Abiodun,IFO
"ADESANYA, Stella Yetunde.",Community High School Akute,IFO
"BABAYEMI, Damilola kehinde",Community High School Akute,IFO
"IFOGA, Kehinde adesola",Community High School Akute,IFO
"ILORI, Abimbola Oluwatomisin.",Community High School Akute,IFO
"Mr. HASSAN,  Olatunji rasheed",Community High School Akute,IFO
"Mr. ONAYEMI,  Olakunle owoseni",Community High School Akute,IFO
"Mrs. ADESOLA,  Olubukola bunmi",Community High School Akute,IFO
"Mrs. AKINYEMI,  Taiwo ikeoluwa",Community High School Akute,IFO
"ODUKOYA, Adewale abiodun",Community High School Akute,IFO
"ODUSANWO, Richard olusegun",Community High School Akute,IFO
"OGUNDANA, Oluwatobi Joseph.",Community High School Akute,IFO
"OKUNOLA, Damilola victoria",Community High School Akute,IFO
"OLABIYI, Cynthia ibhade",Community High School Akute,IFO
"ONASESO, Ayokunle oladapo",Community High School Akute,IFO
"SAHEED, Mulikat Ajibola.",Community High School Akute,IFO
"SALIU, Olubusola abosede",Community High School Akute,IFO
"ADEBAYO, Oluwafemi oluwasegun","Community High School, Moboluwaduro",IFO
"ADEGUN, Kemi mariam","Community High School, Moboluwaduro",IFO
"ADEJOBI, Olusegun samson","Community High School, Moboluwaduro",IFO
"ADESOYE, Funmilola christianah","Community High School, Moboluwaduro",IFO
"ADEYEMO, Dorcas Olubisi.","Community High School, Moboluwaduro",IFO
"AROWOSESO, Kemi iyabo","Community High School, Moboluwaduro",IFO
"EMMANUEL, Precious oiza","Community High School, Moboluwaduro",IFO
"IJALEYE, Kehinde olakunle","Community High School, Moboluwaduro",IFO
"KEHINDE, Oluwakemi keji","Community High School, Moboluwaduro",IFO
"Mr. DEHINBO,  Johnson adekunle","Community High School, Moboluwaduro",IFO
"Mrs. ADENIJI,  Funmilayo bosede","Community High School, Moboluwaduro",IFO
"Mrs. AMZAT-BELLO,  Sadiat arinade","Community High School, Moboluwaduro",IFO
"Mrs. BABAJIDE,  Latifat adebusola","Community High School, Moboluwaduro",IFO
"Mrs. HUNTEMEN,  Mosunmola  O.","Community High School, Moboluwaduro",IFO
"Mrs. SIKIRU,  Seidat motunrayo","Community High School, Moboluwaduro",IFO
"ODEDINA, Omoniteni rashidat","Community High School, Moboluwaduro",IFO
"ODETAYO, Kehinde omolola","Community High School, Moboluwaduro",IFO
"ODUSANWO, Oluseyi gabriel","Community High School, Moboluwaduro",IFO
"OJELADE, Akeem bolahan","Community High School, Moboluwaduro",IFO
"ORESANYA, Ayobami adedeji","Community High School, Moboluwaduro",IFO
"OSHIDIPE, Adewale akeem","Community High School, Moboluwaduro",IFO
"OYENEKAN, Taiwo emmanuel","Community High School, Moboluwaduro",IFO
"SADIKU, Adedamola simeon","Community High School, Moboluwaduro",IFO
"SHOYEMI, Felix ayodeji","Community High School, Moboluwaduro",IFO
"ABDULRASHEED, Sherifat adeola","Community High School, Odewale",IFO
"ADEBAWO, Busayo opeyemi","Community High School, Odewale",IFO
"ADEBAYO, Sumbo hope","Community High School, Odewale",IFO
"ADEDIRAN, Opeyemi oluwatobi","Community High School, Odewale",IFO
"ADEJUMO, Funmilayo ireti","Community High School, Odewale",IFO
"ADESANYA, Adewale abiodun","Community High School, Odewale",IFO
"ADESANYA, Catherine abosede","Community High School, Odewale",IFO
"ADISA, Janet titilola","Community High School, Odewale",IFO
"AIGBE, Toyin fatimo","Community High School, Odewale",IFO
"AWOJOBI, Kehinde Taibat.","Community High School, Odewale",IFO
"AYENI, Olasimbo bridget","Community High School, Odewale",IFO
"BADIRU, Temitope Busola.","Community High School, Odewale",IFO
"DAWODU, Elizabeth motunrayo","Community High School, Odewale",IFO
"ERAKPOFOKE, Temitope Ramota.","Community High School, Odewale",IFO
"FAGBAYI, Elizabeth tope","Community High School, Odewale",IFO
"HASSAN, Abdul Raheem.","Community High School, Odewale",IFO
"IWALOYE, Oluwatoyin Adijat.","Community High School, Odewale",IFO
"KEHINDE, Modupe safurat","Community High School, Odewale",IFO
"LAWAL, Abidemi abisola","Community High School, Odewale",IFO
"Miss ADETILEWA,  Oluremi adebisi","Community High School, Odewale",IFO
"Mr. OYEDEJI,  Sunday adebisi","Community High School, Odewale",IFO
"OGUNMERU, Oluwaseun dorcas","Community High School, Odewale",IFO
"OGUNTAYO, Deborah oluwayemisi","Community High School, Odewale",IFO
"OGUNTOYINBO, Aderonke Fatimo.","Community High School, Odewale",IFO
"OLANIYI, Tunde rauf","Community High School, Odewale",IFO
"OSE, Adedoyin Adetutu.","Community High School, Odewale",IFO
"OYEDIRAN, Sakirat bamidele","Community High School, Odewale",IFO
"ADENAIKE, Felix Olaoluwa.","Community High School, Oluke",IFO
"ADENIJI, Tawakalit folasade","Community High School, Oluke",IFO
"ADENIRAN, Joshua olubo","Community High School, Oluke",IFO
"AIKOMO, Oluwabunmi adeola","Community High School, Oluke",IFO
"AKANDE, Manoh oludare","Community High School, Oluke",IFO
"DADA, Richard kayode","Community High School, Oluke",IFO
"KEKEMA, Vincent Oritsesolube.","Community High School, Oluke",IFO
"LOWO, Olasunbo Abiola.","Community High School, Oluke",IFO
"Mr. ADEBOWALE,  Olamide  A.","Community High School, Oluke",IFO
"Mrs. BALOGUN,  Motunrayo anike","Community High School, Oluke",IFO
"ODE, Ronke hope","Community High School, Oluke",IFO
"OMISORE, Oyinlola bukola","Community High School, Oluke",IFO
"OMONIYI, Bayode emmanuel","Community High School, Oluke",IFO
"OYELEYE, Ruth oluwatoyin","Community High School, Oluke",IFO
"OYENEKAN, Rebecca olanike","Community High School, Oluke",IFO
"OYETUNJI, Ayobami tosin","Community High School, Oluke",IFO
"ADEBAMBO, Kehinde oluwatosin","Community High School,Okungbolu",IFO
"ADEGBAJU, Kehinde Lateefat.","Community High School,Okungbolu",IFO
"ADEKOYA, Olawunmi Shadia.","Community High School,Okungbolu",IFO
"BABATUNDE, Oluwaseun samuel","Community High School,Okungbolu",IFO
"BALOGUN, Abisoye oluwatoyin","Community High School,Okungbolu",IFO
"BALOGUN, Adebisi bolanle","Community High School,Okungbolu",IFO
"BAMGBOYE, Morodayo caroline","Community High School,Okungbolu",IFO
"EGUNJOBI, Olufemi olusola olalekan","Community High School,Okungbolu",IFO
"FABUYIDE, Omolade omolewa","Community High School,Okungbolu",IFO
"JOBEDEKERE, Abiola Morenikeji.","Community High School,Okungbolu",IFO
"KEHINDE, Temitope Oluwaseyi.","Community High School,Okungbolu",IFO
"KESHINRO, Oluwafunke adeyinka","Community High School,Okungbolu",IFO
"MARTINS, E. olugbemisola","Community High School,Okungbolu",IFO
"MORADEYO, Mojisola Victoria.","Community High School,Okungbolu",IFO
"Mr. ADEBAJO,  Samson  O.","Community High School,Okungbolu",IFO
"Mr. ODEDIYA,  Solomon olalekan","Community High School,Okungbolu",IFO
"Mrs. JEREMIAH,  Oluwatoyin folashade","Community High School,Okungbolu",IFO
"Mrs. MOSHOOD,  Elsie olubukola","Community High School,Okungbolu",IFO
"Mrs. OLUWAJUYIGBE,  Julianah  I.","Community High School,Okungbolu",IFO
"OGUNDIMU, Toyin Elizabeth.","Community High School,Okungbolu",IFO
"OGUNLEYIMU, Samson tosin","Community High School,Okungbolu",IFO
"OLORUNWA, Omoronke Aolat.","Community High School,Okungbolu",IFO
"ADEOSUN, Tolulope omolara","Ibogun Comprehensive High School,Egbeda",IFO
"ADIGUN, Abiola oluwaseun","Ibogun Comprehensive High School,Egbeda",IFO
"AJAYI, Odunayo Abidemi.","Ibogun Comprehensive High School,Egbeda",IFO
"AYELAAGBE, Olalekan tunde","Ibogun Comprehensive High School,Egbeda",IFO
"DADA, Bukola bilikisu","Ibogun Comprehensive High School,Egbeda",IFO
"GBOLAHAN, Jamiu Adetunji.","Ibogun Comprehensive High School,Egbeda",IFO
"IBIWOYE, Sidikat adefolake","Ibogun Comprehensive High School,Egbeda",IFO
"KAZUM, Benjami Adefikayo.","Ibogun Comprehensive High School,Egbeda",IFO
"Mr. FAMUYIDE,  John olusegun","Ibogun Comprehensive High School,Egbeda",IFO
"Mr. OLANREWAJU,  Marcus oludele","Ibogun Comprehensive High School,Egbeda",IFO
"Mr. OLORODE,  Samuel oluwole","Ibogun Comprehensive High School,Egbeda",IFO
"OGUNKANMI, Hamed Omotola.","Ibogun Comprehensive High School,Egbeda",IFO
"OLASUNKANMI, Adedoyin Jumoke.","Ibogun Comprehensive High School,Egbeda",IFO
"OLOYEDE, Afusat omowunmi","Ibogun Comprehensive High School,Egbeda",IFO
"OYEBOLA, Ganiyat ajoke","Ibogun Comprehensive High School,Egbeda",IFO
"PRINCE ADESEGUN, Michael olusegun","Ibogun Comprehensive High School,Egbeda",IFO
"ADEENIJI, Basirat omowunmi","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"AJIBONA, Oluwabusayo Adebisi.","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"AKINTOYE, Olusola adejoke","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"BAKARE, Olufemi Samuel.","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"BALOGUN, Moses kehinde","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"MABINI, Adetutu Afusat.","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"Mr. SAMSON,  Ojo  J.","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"Mrs. ADEKAMBI,  Olunike asakun","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"Mrs. VAUGHAN,  Folake yetunde","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"ODUDIMU, Olusola Esther.","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"OLAYEMI, Oluwadamilola Titilope.","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"OYETUNDE, Ramota oyebimpe","Ibogun Olaogun Community High School, Ibogun Olaogun",IFO
"ADEBAYO, Happiness love","Ifo High School (Junior), Ifo",IFO
"ADEBAYO, Richard adewale","Ifo High School (Junior), Ifo",IFO
"ADENIYI, Tawa Adesunmbo.","Ifo High School (Junior), Ifo",IFO
"AFOLABI, Olutayo abidemi","Ifo High School (Junior), Ifo",IFO
"FAGBENRO, Oluseun ayoola","Ifo High School (Junior), Ifo",IFO
"FAGBIRE, Florence adeola","Ifo High School (Junior), Ifo",IFO
"FASINA, Victoria ajoke","Ifo High School (Junior), Ifo",IFO
"KADIRI, Aliu olarewaju","Ifo High School (Junior), Ifo",IFO
"LAOYE, Bilikis omolola","Ifo High School (Junior), Ifo",IFO
"LAWAL, Sarafa omokayode","Ifo High School (Junior), Ifo",IFO
"MATANMI, Evelyn Oyenike.","Ifo High School (Junior), Ifo",IFO
"Mr. ORIDOTA,  Emmanuel olusina","Ifo High School (Junior), Ifo",IFO
"Mrs. BABATUNDE,  Banke fatima","Ifo High School (Junior), Ifo",IFO
"ODELANA, Oyetunde phillip","Ifo High School (Junior), Ifo",IFO
"OGUNMOYEDE, Samuel","Ifo High School (Junior), Ifo",IFO
"OLADAPO, Veronica bisola","Ifo High School (Junior), Ifo",IFO
"OLAGUNJU, Lydia olukemi","Ifo High School (Junior), Ifo",IFO
"OLUAJO, Kehinde olabisi","Ifo High School (Junior), Ifo",IFO
"OLUYEMI, Yetunde susan","Ifo High School (Junior), Ifo",IFO
"ONI, Bosede foluke","Ifo High School (Junior), Ifo",IFO
"OYEYEMI, Kehinde bukola","Ifo High School (Junior), Ifo",IFO
"ABIODUN, Funmilayo abosede","Ifo High School (Senior), Ifo",IFO
"ADEBAYO, Abiodun Adetoyin.","Ifo High School (Senior), Ifo",IFO
"ADEGBOYEGA, Oluseyi adeniyi","Ifo High School (Senior), Ifo",IFO
"ADESOLA, Sarah olufunmilola","Ifo High School (Senior), Ifo",IFO
"AKINSIKU, Oloruntoba julius","Ifo High School (Senior), Ifo",IFO
"ALIU, Abidemi esther","Ifo High School (Senior), Ifo",IFO
"AMAO, Julius folasayo","Ifo High School (Senior), Ifo",IFO
"BAMIGBOYE, Olufunmilola grace","Ifo High School (Senior), Ifo",IFO
"LAWAL, Lateef olalekan","Ifo High School (Senior), Ifo",IFO
"Mr. ADEGBOYEGA,  Olusegun abiodun","Ifo High School (Senior), Ifo",IFO
"Mr. ALUKO,  Oluwole","Ifo High School (Senior), Ifo",IFO
"Mrs. SOLOMON,  Kudirat omotola","Ifo High School (Senior), Ifo",IFO
"OLADELE, Oluwakemi Titilope.","Ifo High School (Senior), Ifo",IFO
"OLALEYE, Christianah taiwo","Ifo High School (Senior), Ifo",IFO
"OLOYEDE, Adenike fadekemi","Ifo High School (Senior), Ifo",IFO
"SOMOYE, Adeolu a.","Ifo High School (Senior), Ifo",IFO
"SOWUNMI, Mulikat olabisi","Ifo High School (Senior), Ifo",IFO
"ADEBAYO, Adedeji Adegboyega.","Igbore Robiyan Community High School, Robiyan",IFO
"ADEEKO, Gbenga Samson.","Igbore Robiyan Community High School, Robiyan",IFO
"ADEKOYA, Alex Adebanjo.","Igbore Robiyan Community High School, Robiyan",IFO
"ADENIYI, Ibukunoluwa Omotoyosi.","Igbore Robiyan Community High School, Robiyan",IFO
"ADEWALE, Temitope Morenikeji.","Igbore Robiyan Community High School, Robiyan",IFO
"AFOLABI, Omoyemi Adejumoke.","Igbore Robiyan Community High School, Robiyan",IFO
"AKINJOBI, Tunde Habeeb.","Igbore Robiyan Community High School, Robiyan",IFO
"BABALOLA, Festus Adedeji.","Igbore Robiyan Community High School, Robiyan",IFO
"FAKOLUJO, Anthony fagbile","Igbore Robiyan Community High School, Robiyan",IFO
"GIWA, Modupe Adebowale.","Igbore Robiyan Community High School, Robiyan",IFO
"JAYEOLA, Abiodun victoria","Igbore Robiyan Community High School, Robiyan",IFO
"KADEJO, Racheal bukayo","Igbore Robiyan Community High School, Robiyan",IFO
"KEHINDE, Oluwatoyin dupe","Igbore Robiyan Community High School, Robiyan",IFO
"Mr. OSENI,  Mudashiru abiodun","Igbore Robiyan Community High School, Robiyan",IFO
"Mrs. OGUNDAIRO,  Olufunbi kehinde","Igbore Robiyan Community High School, Robiyan",IFO
"OLADELE, Olufemi Adelaja.","Igbore Robiyan Community High School, Robiyan",IFO
"OLADOYINBO, Yemisi odunola","Igbore Robiyan Community High School, Robiyan",IFO
"OLAMOYEGUN, Toyosi adepeju","Igbore Robiyan Community High School, Robiyan",IFO
"OYEKAN, Oluwakemi Kehinde.","Igbore Robiyan Community High School, Robiyan",IFO
"SANNI, Silifat Shola.","Igbore Robiyan Community High School, Robiyan",IFO
"SHOAGA, Monsurat Oluwatoyin.","Igbore Robiyan Community High School, Robiyan",IFO
"SHOFELA, Rahimat Omolara.","Igbore Robiyan Community High School, Robiyan",IFO
"ADENIJI, Adedokun kazeem","Igbusi Comprehensive High School, Igbusi",IFO
"AIKOMO, Babatunde oluwafemi","Igbusi Comprehensive High School, Igbusi",IFO
"AWOPETU, Olaleke Olubusayo.","Igbusi Comprehensive High School, Igbusi",IFO
"BELLO, Amos durodeoluwa","Igbusi Comprehensive High School, Igbusi",IFO
"ILORI, Tunde Simeon.","Igbusi Comprehensive High School, Igbusi",IFO
"KUTI, Sodiq Afolabi.","Igbusi Comprehensive High School, Igbusi",IFO
"MUDA, Motunrayo Oyekemi.","Igbusi Comprehensive High School, Igbusi",IFO
"Mrs. ISHOLA,  Sherifat kikelomo","Igbusi Comprehensive High School, Igbusi",IFO
"Mrs. OGUNJOBI,  Alice oluwaseun","Igbusi Comprehensive High School, Igbusi",IFO
"Mrs. OYADINA,  Aminat  M.","Igbusi Comprehensive High School, Igbusi",IFO
"Mrs. TAIWO,  Sarah anuoluwapo","Igbusi Comprehensive High School, Igbusi",IFO
"OGUNLEYE, Oluwakemi funmilayo","Igbusi Comprehensive High School, Igbusi",IFO
"ADEBOWALE, Sulaimon alao","Itoki Community High  School(Junior), Itoki.",IFO
"ADENEKAN, Oluwagbemisola Esther.","Itoki Community High  School(Junior), Itoki.",IFO
"BABALOLA, Modupe mercy","Itoki Community High  School(Junior), Itoki.",IFO
"BABATUNDE, Oluranti morohunmubo","Itoki Community High  School(Junior), Itoki.",IFO
"FABUNMI, Fowoke iyabo","Itoki Community High  School(Junior), Itoki.",IFO
"LIASU, Saheed adesile","Itoki Community High  School(Junior), Itoki.",IFO
"MEDESEH, Mautin daniel","Itoki Community High  School(Junior), Itoki.",IFO
"Mr. SHITTU,  Gafar  A.","Itoki Community High  School(Junior), Itoki.",IFO
"Mr. ZANNUS,  Sunday folorunso","Itoki Community High  School(Junior), Itoki.",IFO
"Mrs. OBIDAIRO,  Aderonke oluwaseun","Itoki Community High  School(Junior), Itoki.",IFO
"ODOOM, Oluyemisi olubunmi","Itoki Community High  School(Junior), Itoki.",IFO
"OGUNBIYI, Olasumbo abiodun","Itoki Community High  School(Junior), Itoki.",IFO
"OGUNLADE, Owolabi stephen","Itoki Community High  School(Junior), Itoki.",IFO
"OGUNLEYE, Amidu tunde","Itoki Community High  School(Junior), Itoki.",IFO
"OMIDEYI, Motunrayo dorcas","Itoki Community High  School(Junior), Itoki.",IFO
"ONIFADE, Fadeke modinat","Itoki Community High  School(Junior), Itoki.",IFO
"RAHEEM, Fatimat Temilola.","Itoki Community High  School(Junior), Itoki.",IFO
"ADEGBOYE, Bamidele jimoh","Itoki Community High  School(Senior), Itoki.",IFO
"AIMUEMOJIE, Christiana Edoise.","Itoki Community High  School(Senior), Itoki.",IFO
"AKINWUNMI, Modupe deborah","Itoki Community High  School(Senior), Itoki.",IFO
"AROWOSEGBE, Adunola felicia","Itoki Community High  School(Senior), Itoki.",IFO
"FAGBEMI, Iyabode omolara","Itoki Community High  School(Senior), Itoki.",IFO
"ISUMA, Busurat oluwaseun","Itoki Community High  School(Senior), Itoki.",IFO
"JOLAYEMI, Omolara yinka","Itoki Community High  School(Senior), Itoki.",IFO
"LIADI, Adesina michael","Itoki Community High  School(Senior), Itoki.",IFO
"MAYALE-EKE-HAMZAT, Sofiyah oluremi","Itoki Community High  School(Senior), Itoki.",IFO
"Mr. ODETUNDE,  Jones olubunmi","Itoki Community High  School(Senior), Itoki.",IFO
"Mrs. IDOWU,  Temitope  O.","Itoki Community High  School(Senior), Itoki.",IFO
"Mrs. KUKOYI,  Patricia chinedu","Itoki Community High  School(Senior), Itoki.",IFO
"Mrs. OJO,  Olaide esther","Itoki Community High  School(Senior), Itoki.",IFO
"Mrs. OLODO,  Romoke risikat","Itoki Community High  School(Senior), Itoki.",IFO
"OJUGBELE, Abosede iyabode","Itoki Community High  School(Senior), Itoki.",IFO
"OLATUNJI, Olubunmi janet","Itoki Community High  School(Senior), Itoki.",IFO
"OYETUNJI, Olusola emmanuel","Itoki Community High  School(Senior), Itoki.",IFO
"ADEKUNLE, Omolayo Comfort.",Matogun Community High School,IFO
"AFOLABI, Florence ayo",Matogun Community High School,IFO
"AKINYEMI, Emmanuel adejoro",Matogun Community High School,IFO
"ENILOLOBO, Grace oluwayemisi",Matogun Community High School,IFO
"GBENGA-AYODEJI, Abimbola Mabel.",Matogun Community High School,IFO
"GREEN, Modupe folasade",Matogun Community High School,IFO
"IWALAIYE, Rowland funsho",Matogun Community High School,IFO
"JOHN, Mary Dupe.",Matogun Community High School,IFO
"Mr. ABIOLA,  Olufemi festus adewale",Matogun Community High School,IFO
"Mr. AKANDE,  Matthew olalekan",Matogun Community High School,IFO
"Mr. GBADEBO,  Fatai",Matogun Community High School,IFO
"Mr. HUNTEMEN,  Mathew seveho",Matogun Community High School,IFO
"Mr. SALAMI,  Kazeem alani",Matogun Community High School,IFO
"Mr. YUSUF,  Kazeem bolaji",Matogun Community High School,IFO
"Mrs. OLOWONYO,  Tolani folake",Matogun Community High School,IFO
"NJOKU, Stella ogadimma",Matogun Community High School,IFO
"OGUNDIPE, Toyin",Matogun Community High School,IFO
"OLOWONILARA, Mary Abosede.",Matogun Community High School,IFO
"OMIYOLA, Olubola Kafayat.",Matogun Community High School,IFO
"OYEDELE, Adesola Sekinat.",Matogun Community High School,IFO
"SOLAJA, Olanrewaju lawrence",Matogun Community High School,IFO
"ADEBAYO, Florence oladunni","N.U.D Grammar School (Junior), Solu",IFO
"ADEBOYE, Kudirat temitope","N.U.D Grammar School (Junior), Solu",IFO
"BADMUS, Ruth eterebhe","N.U.D Grammar School (Junior), Solu",IFO
"Mrs. ADEROJU,  Adeola temitope","N.U.D Grammar School (Junior), Solu",IFO
"OKUNLOLA, Olubukola atinuke","N.U.D Grammar School (Junior), Solu",IFO
"OLADEINDE, Olukemi omotunde","N.U.D Grammar School (Junior), Solu",IFO
"AJAPE, Adeola adams","N.U.D Grammar School (Senior), Solu",IFO
"AYEDE, Kayode adedbayo","N.U.D Grammar School (Senior), Solu",IFO
"HASSAN, Mufutau","N.U.D Grammar School (Senior), Solu",IFO
"LAWAL, Maryam bamidele","N.U.D Grammar School (Senior), Solu",IFO
"Mrs. LAWAL,  Adetoke kehinde","N.U.D Grammar School (Senior), Solu",IFO
"OBAZU, Busayo Shulammite.","N.U.D Grammar School (Senior), Solu",IFO
"ODUGBAYI, Abidemi Motunrayo.","N.U.D Grammar School (Senior), Solu",IFO
"OLAWALE, Bosede Elizabeth.","N.U.D Grammar School (Senior), Solu",IFO
"OSUNJIMI, Yetunde olubukola","N.U.D Grammar School (Senior), Solu",IFO
"OTEMUYIWA, Bunmi muinat","N.U.D Grammar School (Senior), Solu",IFO
"OYEWOLE, Isaac olufemi","N.U.D Grammar School (Senior), Solu",IFO
"ABOLADE, Hakeem olatunbosun","Okepata Community Community High School,Ifo",IFO
"ADEKUNLE, Adesola alaba","Okepata Community Community High School,Ifo",IFO
"ADEMOLA, Bukola omowunmi","Okepata Community Community High School,Ifo",IFO
"AGBI, Temitope oyetola","Okepata Community Community High School,Ifo",IFO
"AJAYI-ADEBAYO, Comfort Oluwatosin.","Okepata Community Community High School,Ifo",IFO
"AZEEZ, Ayokunle","Okepata Community Community High School,Ifo",IFO
"BELLO, Temitayo nimota","Okepata Community Community High School,Ifo",IFO
"GEORGE - TAYLOR, Busayo eniola","Okepata Community Community High School,Ifo",IFO
"Mrs. ALLI,  Bosede","Okepata Community Community High School,Ifo",IFO
"Mrs. BANJO,  Yetunde  A.","Okepata Community Community High School,Ifo",IFO
"Mrs. MUSTAPHA,  Oluwakemi caroline","Okepata Community Community High School,Ifo",IFO
"OGUNDIMU, Oluwatoyin","Okepata Community Community High School,Ifo",IFO
"OLAJIDE, Mufutau Aremu.","Okepata Community Community High School,Ifo",IFO
"OLAOYE, Adefoluke omoyemi","Okepata Community Community High School,Ifo",IFO
"OLUROTIMI, Segun Kehinde.","Okepata Community Community High School,Ifo",IFO
"OSENI, Rasaq adekunle","Okepata Community Community High School,Ifo",IFO
"OWOLABI, Stephen olatunji","Okepata Community Community High School,Ifo",IFO
"SORINOLU, Afusat bisola","Okepata Community Community High School,Ifo",IFO
"TAIWO, Temitope seun","Okepata Community Community High School,Ifo",IFO
"ADEDEJI, Adenike Bunmi.","Olambe Community Comprehensive High School, Olambe",IFO
"ADELEYE, Adewale Elijah.","Olambe Community Comprehensive High School, Olambe",IFO
"ADENIYI, Felicia Odunola.","Olambe Community Comprehensive High School, Olambe",IFO
"ADIGUN, Adeola","Olambe Community Comprehensive High School, Olambe",IFO
"AJIBADE, Ayodele Abigail.","Olambe Community Comprehensive High School, Olambe",IFO
"ALETAN, Olawunmi yesirat","Olambe Community Comprehensive High School, Olambe",IFO
"ALOMAJA, Esther funmilola","Olambe Community Comprehensive High School, Olambe",IFO
"ATIBIOKE, Adesola Atinuke.","Olambe Community Comprehensive High School, Olambe",IFO
"AYODELE, Olugbenga tope","Olambe Community Comprehensive High School, Olambe",IFO
"BIOBAKU, Abidemi jelilat","Olambe Community Comprehensive High School, Olambe",IFO
"FANIYI, Damilola Opeyemi.","Olambe Community Comprehensive High School, Olambe",IFO
"ILESANMI, Modupe christie","Olambe Community Comprehensive High School, Olambe",IFO
"MAKINDE, Motunrayo Sunmisola.","Olambe Community Comprehensive High School, Olambe",IFO
"Mrs. OGUNLELA,  Ayantundun  R.","Olambe Community Comprehensive High School, Olambe",IFO
"OGUNBAYO, Olusade Beatrice.","Olambe Community Comprehensive High School, Olambe",IFO
"OKUNOLA, Abiodun James.","Olambe Community Comprehensive High School, Olambe",IFO
"OLATOKUN, Kehinde","Olambe Community Comprehensive High School, Olambe",IFO
"OLOMOLA, Grace tosin","Olambe Community Comprehensive High School, Olambe",IFO
"OLORUNJUWON, Jacob Olaniyi.","Olambe Community Comprehensive High School, Olambe",IFO
"OLORUNSOGO, Ruth Damilola.","Olambe Community Comprehensive High School, Olambe",IFO
"ORIPELOYE, Bolare oluwasola","Olambe Community Comprehensive High School, Olambe",IFO
"OYATAYO, Jimoh Ajasa.","Olambe Community Comprehensive High School, Olambe",IFO
"SHOYINKA, Hajarat Abike.","Olambe Community Comprehensive High School, Olambe",IFO
"SULAIMAN, Jolayemi rebecca","Olambe Community Comprehensive High School, Olambe",IFO
"ADEBAYO, Olawunmi ajoke","Pakoto High School (Junior), Ayede",IFO
"ADEFARATI, Olajumoke funke","Pakoto High School (Junior), Ayede",IFO
"ADEKUNLE, Olanrewaju Adebola.","Pakoto High School (Junior), Ayede",IFO
"ADENIRAN, Olushola victoria","Pakoto High School (Junior), Ayede",IFO
"ADENIYI, Suraju adewale","Pakoto High School (Junior), Ayede",IFO
"ADEOSI, Bolanle ajimoh elizabeth","Pakoto High School (Junior), Ayede",IFO
"AFOLABI, Elizabeth olubukola","Pakoto High School (Junior), Ayede",IFO
"AKINTUNDE, Titilayo jumoke","Pakoto High School (Junior), Ayede",IFO
"DAUD-BELLO, Sakirat Motunrayo.","Pakoto High School (Junior), Ayede",IFO
"KUJE, Abiodun ruth","Pakoto High School (Junior), Ayede",IFO
"MAJEKODUNMI, Juliet bolanle","Pakoto High School (Junior), Ayede",IFO
"MUIDEEN, Omolara muinat","Pakoto High School (Junior), Ayede",IFO
"Mr. DARAMOLA,  Olalekan","Pakoto High School (Junior), Ayede",IFO
"Mr. MUTAIRU,  Ismaila alao","Pakoto High School (Junior), Ayede",IFO
"Mr. OLADUNNI,  Samson olutade","Pakoto High School (Junior), Ayede",IFO
"Mrs. FABUNMI,  Sakirat olutoyin","Pakoto High School (Junior), Ayede",IFO
"OGUNYEMI, Patrick olaoluwa","Pakoto High School (Junior), Ayede",IFO
"OKUBOTE, Olubunmi Adebukola.","Pakoto High School (Junior), Ayede",IFO
"OLUSAKIN, Mary Olawunmi.","Pakoto High School (Junior), Ayede",IFO
"ADEGBEMI, Esther boluwaji","Pakoto High School (Senior), Ayede",IFO
"ADENLE, Gbenga Peter.","Pakoto High School (Senior), Ayede",IFO
"ADEPOJU, Emmanuel adeolu","Pakoto High School (Senior), Ayede",IFO
"ADEWOLE, Funmilayo morenike","Pakoto High School (Senior), Ayede",IFO
"ADEYEMI, Ibidunni fatimo","Pakoto High School (Senior), Ayede",IFO
"AGBOOLA, Deborah mojoyinola","Pakoto High School (Senior), Ayede",IFO
"AKIN-OYEKAN, Femi adekunle","Pakoto High School (Senior), Ayede",IFO
"AYINDE, Kehinde muibat","Pakoto High School (Senior), Ayede",IFO
"BANKOLE, Oluwafunmike olubisi","Pakoto High School (Senior), Ayede",IFO
"EFENAJI, Olawumi bosede","Pakoto High School (Senior), Ayede",IFO
"EWEDAIRO, Sesan babatunde","Pakoto High School (Senior), Ayede",IFO
"FAMUYIDE, Abigael oluseun","Pakoto High School (Senior), Ayede",IFO
"KALEJAYE, Hawa","Pakoto High School (Senior), Ayede",IFO
"KALEJAYE, Suraj yomi","Pakoto High School (Senior), Ayede",IFO
"Mr. ALAAYA,  Ahmad monsur","Pakoto High School (Senior), Ayede",IFO
"Mrs. SHOPADE,  Olufemi olutayo","Pakoto High School (Senior), Ayede",IFO
"OBADIMU, Abosede Alake.","Pakoto High School (Senior), Ayede",IFO
"OJIMU, Tosin funmilayo","Pakoto High School (Senior), Ayede",IFO
"OJURONGBE, Hassan kehinde","Pakoto High School (Senior), Ayede",IFO
"OKUBOTE, Olabisi toyin","Pakoto High School (Senior), Ayede",IFO
"OLAGUNJU, Oyebola Awele.","Pakoto High School (Senior), Ayede",IFO
"OTTUN, Oladapo fatai","Pakoto High School (Senior), Ayede",IFO
"OYEDELE, Grace adeola titilope","Pakoto High School (Senior), Ayede",IFO
"OYERINDE, Busola juliana","Pakoto High School (Senior), Ayede",IFO
"OYEWUNMI, Omolara adenike","Pakoto High School (Senior), Ayede",IFO
"QASIM, Waliyullah Atanda.","Pakoto High School (Senior), Ayede",IFO
"SHITTU, Mufutau olawale","Pakoto High School (Senior), Ayede",IFO
"SHOBANDE, Aduraleke Tunde.","Pakoto High School (Senior), Ayede",IFO
"SHORETIRE, Afisu alani","Pakoto High School (Senior), Ayede",IFO
"SOSANOLU, olayinka david","Pakoto High School (Senior), Ayede",IFO
"SOTUNBO, Abiodun dayo","Pakoto High School (Senior), Ayede",IFO
"SULAIMON, Bilikis Motunrayo.","Pakoto High School (Senior), Ayede",IFO
"ADEDEJI, Deborah Oluwatimileyin.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"ADEJONPE, Yetunde Feyikemi.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"ADEKOYA, Abayomi abiodun","Ajebandele High School, Ajebandele J4",IJEBU EAST
"ADEKUNLE, Olajumoke Oluwatoyin.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"ADELEYE, Ibukun Blessing.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"AGBAJE, Semiu abiodun","Ajebandele High School, Ajebandele J4",IJEBU EAST
"BALOGUN, Adeboye modiu","Ajebandele High School, Ajebandele J4",IJEBU EAST
"BAMGBELU, Olufunso Adenike.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"ENIOLA, Adekunle","Ajebandele High School, Ajebandele J4",IJEBU EAST
"FASEYINU, Ayoola abiodun","Ajebandele High School, Ajebandele J4",IJEBU EAST
"MBA, Stella olachi","Ajebandele High School, Ajebandele J4",IJEBU EAST
"Mrs. BOWALE,  Victoria oke","Ajebandele High School, Ajebandele J4",IJEBU EAST
"OLUSOJI, Bamitale Ireti cecilia.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"OMONIYI, Grace Titilayo.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"OSOSANWO, Taiwo Fausat.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"OYINLOLA, Abidemi Veronica.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"SALIU, Owoeye musiliyu","Ajebandele High School, Ajebandele J4",IJEBU EAST
"SOLADOYE, Jemilat kehinde","Ajebandele High School, Ajebandele J4",IJEBU EAST
"UCHE, Rita Ugochukwu.","Ajebandele High School, Ajebandele J4",IJEBU EAST
"ADEBOLA, Peter oludare","Awotunde High School, Ehin-Osun",IJEBU EAST
"ADELEYE, Jubril adeniyi","Awotunde High School, Ehin-Osun",IJEBU EAST
"ADENUGA, Rasheed Adebowale.","Awotunde High School, Ehin-Osun",IJEBU EAST
"ADEYEMI, Adeniji festus","Awotunde High School, Ehin-Osun",IJEBU EAST
"Mr. AJALA,  Clement adeolu","Awotunde High School, Ehin-Osun",IJEBU EAST
"Mr. OSIBANJO,  John ayoola","Awotunde High School, Ehin-Osun",IJEBU EAST
"ODEWALE, Folashade matha","Awotunde High School, Ehin-Osun",IJEBU EAST
"SHEKONI, Adedeji kazeem","Awotunde High School, Ehin-Osun",IJEBU EAST
"ADEPOJU, Thomas segun","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"AKINYEYE, Olusegun Samuel.","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"ALIMI, Azeez Omotosho.","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"BENCO-SANGODOLU, Abimbola","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"EYIMORO, Sunday Surulere.","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"FOLORUNSHO, Margaret Damilola.","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"MGBEOJI, Eze peter","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"Mr. AJAYI,  Adewale olaniyi","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"Mrs. SOGBETUN,  Olabisi olayinka","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"OMOTAYO, Moyosola Toyosi.","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"OSISANYA, Temitope Muyiwa.","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"OYEFUGA, Marcus Adedoyin.","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"SANUSI, Lateef olosunde","Community Comprehensive High School, J4/J6 PLANTATION",IJEBU EAST
"ABUDU, Titilope Monsurat.","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ADEBAJO, Ayodele adetola","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ADEBISI, Adegoroye yusuf","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ADELAJA, Deborah alaba","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ADEOYE, Oluwadare suji","Community Grammar School, Ijebu - Ife",IJEBU EAST
"AKINSULU, Rafiat biloye","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ALABI, Abosede Oyebola.","Community Grammar School, Ijebu - Ife",IJEBU EAST
"AMUSIRE, Gabriel olabiyi","Community Grammar School, Ijebu - Ife",IJEBU EAST
"BADEJO, Silifat adejumoke","Community Grammar School, Ijebu - Ife",IJEBU EAST
"DADA, Musirat yetunde","Community Grammar School, Ijebu - Ife",IJEBU EAST
"IBRAHIM, Abiola basirat","Community Grammar School, Ijebu - Ife",IJEBU EAST
"Mr. THOMPSON,  Vincent wilson","Community Grammar School, Ijebu - Ife",IJEBU EAST
"OBOBOLO, Thankgod Moses.","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ODIA, Cecilia Olufunke.","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ODUWEKU, Omotayo olamide","Community Grammar School, Ijebu - Ife",IJEBU EAST
"OLUWATAYO, Kikelomo foluso","Community Grammar School, Ijebu - Ife",IJEBU EAST
"OMODAYO, Omoniyi olusola","Community Grammar School, Ijebu - Ife",IJEBU EAST
"OMOGHENE, Edith orevoghene","Community Grammar School, Ijebu - Ife",IJEBU EAST
"OMOTOSO, Bolajoko oladunni","Community Grammar School, Ijebu - Ife",IJEBU EAST
"OTETE, Oluwatoyin adejoke","Community Grammar School, Ijebu - Ife",IJEBU EAST
"SHITTU, Oluwatoyin maryam","Community Grammar School, Ijebu - Ife",IJEBU EAST
"ABIODUN, Emmanuel oladayo","Community Grammar School, Owu/Ikija",IJEBU EAST
"ADEFESO, Adewale Abiodun.","Community Grammar School, Owu/Ikija",IJEBU EAST
"ADENUGA, Rahmoni Olakunle.","Community Grammar School, Owu/Ikija",IJEBU EAST
"ADEOYE, Samson yinka","Community Grammar School, Owu/Ikija",IJEBU EAST
"AKINFEMIWA, Elizabeth Chioma.","Community Grammar School, Owu/Ikija",IJEBU EAST
"AKINLABI, Olusina elijah","Community Grammar School, Owu/Ikija",IJEBU EAST
"AZEEZ, Adeboye hakeem","Community Grammar School, Owu/Ikija",IJEBU EAST
"BAKARE, Tosin sunday godfree","Community Grammar School, Owu/Ikija",IJEBU EAST
"FADIPE, Simiat Remilekun.","Community Grammar School, Owu/Ikija",IJEBU EAST
"FAGBEIRO, Famuyiwa francis","Community Grammar School, Owu/Ikija",IJEBU EAST
"FAYEMI, Olalekan david","Community Grammar School, Owu/Ikija",IJEBU EAST
"FENUGA, Zainab Adenike.","Community Grammar School, Owu/Ikija",IJEBU EAST
"JOHNSON, Okubisi mayokun","Community Grammar School, Owu/Ikija",IJEBU EAST
"LAWAL, Kikelomo adebukola","Community Grammar School, Owu/Ikija",IJEBU EAST
"Mrs. INABOYA,  Adebimpe fatimoh","Community Grammar School, Owu/Ikija",IJEBU EAST
"ODUKOYA, Sakirat Olusola.","Community Grammar School, Owu/Ikija",IJEBU EAST
"ODUSANYA, Kehinde adedeji","Community Grammar School, Owu/Ikija",IJEBU EAST
"OGUNDE, Adetutu adeola","Community Grammar School, Owu/Ikija",IJEBU EAST
"OGUNYEMI, Babajide Muritala.","Community Grammar School, Owu/Ikija",IJEBU EAST
"OLATUNJI, Olaniran","Community Grammar School, Owu/Ikija",IJEBU EAST
"OLAWOORE, Victoria olubunmi","Community Grammar School, Owu/Ikija",IJEBU EAST
"ONANUGA, Adebukola Oluwatoyin.","Community Grammar School, Owu/Ikija",IJEBU EAST
"SHODIPO, Olaide omotayo","Community Grammar School, Owu/Ikija",IJEBU EAST
"TALEAT, Olufunmilayo aderanti","Community Grammar School, Owu/Ikija",IJEBU EAST
"AKANBI, Gabriel Olusola.","Community High School, Olooji Area J4",IJEBU EAST
"DARE, Oluwaseyi","Community High School, Olooji Area J4",IJEBU EAST
"IGOCHE, Blessing Ugwa.","Community High School, Olooji Area J4",IJEBU EAST
"Mr. AKINWALE,  Adeola aderemi","Community High School, Olooji Area J4",IJEBU EAST
"Mr. OLADOSU,  Cornelius adebowale","Community High School, Olooji Area J4",IJEBU EAST
"OGUNLE, Inaolaji Adebayo.","Community High School, Olooji Area J4",IJEBU EAST
"OSIKOYA, Titilope Jumoke.","Community High School, Olooji Area J4",IJEBU EAST
"OSO, Janet Oluwakemi.","Community High School, Olooji Area J4",IJEBU EAST
"ADEBANJO, Abidoun silfah",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"ADEDINA, Abosede mary",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"ADELEYE, Oyeyemi adenike",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"ADEYEMI, Florence adedayo",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"BENCO, Martha selimot",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"GBINDIN-AINA, Afusat oluwakemi",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"HAMZAT, Folasade aminat",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"Mr. AKINSOLU,  Joseph olutola",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"Mr. OGANGWU,  William",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"Mrs. ADEWOLE,  Adesewa alake",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"Mrs. OSIKOYA,  Irene esohe",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"OBOLO, Olasinbo caroline",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"OSIDE, Beatrice adesola",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"OYEBODE, Abosede olufunke",Comprehensive High School (Jnr) Ijebu Ife,IJEBU EAST
"ABDUL, Olasumbo abduwasiu",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"AILERU, Mufutau olajuwon",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"AINA, Dorcas oyewumi",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"AJADI, Omotolani olabisi",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"AKADI, Afeez Adeola.",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"AKINMOLA, Oluwagbemiro Bethsebah.",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"ANIPOLE, Muinat oyinlola",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"BADEJO, Ewaoluwa Ajoke.",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"Mr. AREMU,  Thomas adekola",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"ODIA, Stanley otaifo",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"ODUSINA, Toyin idowu",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"OLAOSEBIKAN, Anthonia abosede",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"OLUWADUYILEMI, Susan yemi",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"OMOTIBA, Olatunji moses",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"ONABANJO, Olusegun oladapo",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"OZURUMBA, Uchenna Kelvin.",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"TOWOBA, Olufunke noimot",Comprehensive High School (Snr) Ijebu Ife,IJEBU EAST
"ABORISADE, Ibiyemi moses","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"ADEKOYA, Afolasade roseline","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"ADEKUNLE, Abolaji adunni","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"ADEYEMI, Adebola joshua","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"AJAYI, Kehinde Victoria.","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"ARIJENIWA, Augustina idowu","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"BADMUS, Hammed Oluwasegun.","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"BALOGUN, Olabisi mariam","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"DADA, Mathew Ayoola.","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"IBIKUNLE, Romoke Kehinde.","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"LAWAL, Aaliyah omosola","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"MARTINS, Adeolu slyvester","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"Mrs. ALLI,  Adedoyin kehinde","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"Mrs. IGBODIPE,  Adetutu esther","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"ODUNLAMI, Monsurat Bamitale.","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"OGUNJIRIN, Adesesan oni","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"OGUNLAJA, Abimbola Omoyemi.","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"OGUNLANA, Adeola michael","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"OGUNSIPE, Ebenezer ogunbiyi","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"OMOTOSO, Gideon kolawole","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"ORENIYI, Oluwakemi afusat","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"OTUNEYE, Adebayo otubanjo","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"OWOKADE, Solomon olugbuyi","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"TAIWO, Mercy adejumoke olubukola","Comprehensive High School, Ijebu Imusin",IJEBU EAST
"ADENAYA, Sunday Adewale.","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"FALAKO, Adeleye Comfort.","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"Mr. ADENIYI,  Oluwaremi elijah","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"Mr. ADETUNJI,  Kolapo anthony","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"OGUNSANYA, Michael Idowu.","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"OGUNSANYA, Oluwatosin Elizabeth.","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"OJO, Abiodun Abisoye.","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"OLADELE, Oluwakemi Olajumoke.","Ehin-Osun Community High School, Egbeda-Ojelana",IJEBU EAST
"ADEBANJO, Oluwaseun john","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"AKINMUSAYO, Idowu","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"AYODELE, Akinyele augustine","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"Mr. AFOLABI,  Ismaila kolawole","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"Mrs. ADEBAMBO,  Modinat olayemi","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"OBIKOYA, Olayinka sunday","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"ODUMADE, Taiwo ayodeji","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"OGUNJI, Emmanuel idowu","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"OGUNLANA, Yetunde oluyemisi","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"OLAYODE, Nathaniel idowu","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"TOGUWA, Musiliu olusegun","Imobi Community High School, Oke-Igbaga",IJEBU EAST
"ADEBAJO, Olarewaju Tayo.",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"ADEBAMIRO, Abraham oluwasegun",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"ADEBANJO, Olusesan paul",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"DARAMOLA, Foluso ibironke",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"KONYE, Taiwo peter",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"LASISI, Tajudeen  olaniyi",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"Mr. ADENUGA,  Jones ademola",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"Mrs. OLADEJI,  Taiwo mosunmola",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"Mrs. OSHIN,  Olasunkanmi esther",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"ODUKOYA, Felicia oloruntoyin",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"OGUNYALE, Abosede Esther.",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"OKEOWO, Victoria oluwafunmilayo",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"OLUGBODE, Titilayo gbemisola",Itele High School (Jnr) Itele Ijebu,IJEBU EAST
"ADEBOLA, Temitope olugbenga",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"ADEKOYA, Babatunde",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"ADEWUYI, Olayinka ronke",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"IDOGUN, Abosede oluwatoyin",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"Mrs. ODUGBILE,  Mosunmola omowunmi",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"OMOTUYOLE, Joshua bayo",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"OWODUNNI, Aminat Ayobami.",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"SULE, Tajudeen adewale",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"TAIWO, Maria mojisola",Itele High School (Snr) Itele Ijebu,IJEBU EAST
"ADEBANJO, Ibraheem Abiodun.","Oke-Imobi Community Grammar School, Terelu-Imobi",IJEBU EAST
"GBADEBO, Olayinka Kolawole.","Oke-Imobi Community Grammar School, Terelu-Imobi",IJEBU EAST
"Mr. OLAFIMIHAN,  Adeyemi oludele","Oke-Imobi Community Grammar School, Terelu-Imobi",IJEBU EAST
"ODUBELA, Adewale adetola","Oke-Imobi Community Grammar School, Terelu-Imobi",IJEBU EAST
"OJUDUN, Olukayode","Oke-Imobi Community Grammar School, Terelu-Imobi",IJEBU EAST
"OYEBANJO, Folasade Abosede.","Oke-Imobi Community Grammar School, Terelu-Imobi",IJEBU EAST
"ADEODUN, Oyekanmi Paul.","Plantation High School, Area J4",IJEBU EAST
"ADEYEMO, Nurudeen Ayokunnu.","Plantation High School, Area J4",IJEBU EAST
"BADEJOGBIN, Babalola ayodeji","Plantation High School, Area J4",IJEBU EAST
"Mr. OSIFESO,  Abiola","Plantation High School, Area J4",IJEBU EAST
"OLOMU, Abiodun adebambo","Plantation High School, Area J4",IJEBU EAST
"OSHILAJA, Ganiat adebunkonla","Plantation High School, Area J4",IJEBU EAST
"ADEBAMBO, Temitope solomon",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"ADENUBI, Olubunmi mariam",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"ADENUGA, Catherine olubunmi",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"AJISAFE, Comfort adeola",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"AKINTAYO, Kudirat Omowunmi.",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"AKINWUMI, Dasola  busayo",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"AMOKUN, Isamil adewale",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"AMOS, Comfort olutoyin",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"ASHIRU, Oluwatoyin  monsurat",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"BALOGUN, Akeem oluwasegun",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"DANIEL, Abosede deborah",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"FAGBEIRO-SORINWA, Dorcas Folake.",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"MICHAEL, Adesola mujidat",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"MUSTAPHA, Temitope oluwakemi",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"Mr. BAILEY,  Akinpelumi adeleke",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"Mr. OSENI,  Lateef olanrewaju",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"Mrs. ADENOPO,  Karimot oyebowale",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"ODUKOYA, Gbeminiyi",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"OGUNYEMI, Risikat idowu",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"OKO-GERALD, Anthonia omolola",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"OLUBANWO, Gbenga david",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"OLUFAGBO, Omolara olufunke",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"OTULAJA, Temitope oluwaseun",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"OYELUSI, Esther folasade",St. Anthony'S Grammar School (Jnr) Esure Ijebu Imusin,IJEBU EAST
"ADEDIRAN, Oluwatoyin feyisayo",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"ADEKOYA, Rotimi muyiwa",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"ADESANYA, Olalekan olorunwa michael",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"AKINBI, Racheal bosede",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"AWOYEMI, Olamigoke Faustino.",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"BADMUS, Adetoun morenike",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"EGUAOJE, Christianah Monisola.",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"ERIBAKE, Kuburat titilayo",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"FATI, Florence oluwatoyin",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"FRANCIS, Busola titilayo",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"IYAJUJENI, Ayooluwa omosola",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"KUSIMO, Adedoyin ruth",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"LAWAL, Akinbola olalekan",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"Mrs. ODUJINRIN,  Adedoja oludare",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"Mrs. OGUNNOWO,  Olufunmilayo bose",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"OBIPEHIN, Abosede Moriamo.",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"OGUNBAYO, Mary adetoun",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"OGUNFOWORA, Adebosola Adejoke.",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"OLANIYI, Lateefah Adetoro.",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"OSIBOWALE, Samson kolawole",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"SALAKO, Damilare bashiru",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"SALAU, Aminat Oluwaseun oladayo.",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"SOTINOYE, Olumuyiwa joel",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"TIMSON, Adetokunbo Olufunmilayo.",St. Anthony'S Grammar School (Snr) Esure Ijebu Imusin,IJEBU EAST
"ADEGBEMI, Bowale oluwakemi",St. Brendan'S Grammar School (Jnr) Ogbere,IJEBU EAST
"ADELOWORE, Julius adelani",St. Brendan'S Grammar School (Jnr) Ogbere,IJEBU EAST
"MATHEW, Agnes",St. Brendan'S Grammar School (Jnr) Ogbere,IJEBU EAST
"Mr. OYEWUSI,  Oyewole  A.",St. Brendan'S Grammar School (Jnr) Ogbere,IJEBU EAST
"OGANGWU, Elizabeth omoleye",St. Brendan'S Grammar School (Jnr) Ogbere,IJEBU EAST
"OGUNDELE, Omowumi Ifedayo.",St. Brendan'S Grammar School (Jnr) Ogbere,IJEBU EAST
"OLATUNJI, Stella bosede",St. Brendan'S Grammar School (Jnr) Ogbere,IJEBU EAST
"ADEFIWITAN, Felicia Adebamike.",St. Brendan'S Grammar School (Snr) Ogbere,IJEBU EAST
"BABARINDE, Olufemi felix",St. Brendan'S Grammar School (Snr) Ogbere,IJEBU EAST
"IDOWU, Olayinka neeta",St. Brendan'S Grammar School (Snr) Ogbere,IJEBU EAST
"Mr. ADEWUYI,  Kehinde nafiu",St. Brendan'S Grammar School (Snr) Ogbere,IJEBU EAST
"Mr. SALAMI,  Olayiwola suara",St. Brendan'S Grammar School (Snr) Ogbere,IJEBU EAST
"OGUNFOWORA, Gbenga ranti",St. Brendan'S Grammar School (Snr) Ogbere,IJEBU EAST
"OLAYODE, Temidayo dupe",St. Brendan'S Grammar School (Snr) Ogbere,IJEBU EAST
"ABDULSALAM, Taiwo",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"AJIBADE, Ibukun ebunola",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"AKINTOLA, Adijat oluyemisi",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"BADEJO, Abosede olufunso",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ESAN, Babatunde olorunfemi",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"Mr. OGUNTIMEHIN,  Rafiu segun",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OGUNBANJO, Muyiwa adelaja",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OGUNSANWO, Adeboye adenola",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OKI, Abiodun adenike",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OKUSANYA, Adepeju adebimpe",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OLUROMBI, Bilikis oriyom",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OREANOBI, Yusuf Opeyemi.",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ORIOLA, Olufemi gabriel",Abobi Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ADEJARE, Atinuke ganiyat",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"ADEKOYA, Abosede Taibat.",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"AJETUNMOBI, Rasaq titilope",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"AKINWANDE, Daniel Opeyemi.",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"BELLO, Folasade yetunde",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"Mr. ADEYEMI,  Adedayo",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"Mrs. ADEDEJI,  Rukayat adebisi",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"Mrs. FOLAJIMI,  Oyindamola awawu olatunj",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"Mrs. ODUTOLA,  Morenike  K.",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"ODUGBESAN, Olumuyiwa ayorinde",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"ODUNOWO, Oluwasheyi",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"OGUNBOYEJO, Abidemi tawa",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"OGUNFODUNRIN, Adekunle samuel",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"OYINKIKORO, Adenike Hawaw.",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"TUYOR, Safiriyu anifowose",Abobi Comprehesive High School Junior Ago Iwoye,IJEBU NORTH
"ABASS, Wasiu Olamuiwa.",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"ADEBANJO, Idowu Maroofdeen.",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"ADEDOYE, Fatimat Adeyinka.",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"ADEJOBI, Ayanrike Olufunmilayo.",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"ADUBI, Abodunde oluwaseyi",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"ATEGBERO, Lanre alice",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"AYAN, Olumide taiwo",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"BALOGUN, Olusola abisoye",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"BELLO, Nurudeen Alabi.",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"ISMAILA, Salihu eneji",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"Mr. LAWAL,  Sherif taiwo",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"Mrs. ADEWOLE,  Olasunkanmi omolara",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"Mrs. MABEKOJE,  Olaitan yomi",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"OGUNDERO, Olabisi Omoyemi.",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"OJENIAKE, Olatokunbo",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"OJUTU, Modupe idowu",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"OLUWASODE, Florence Gbemike.",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"OSINOWO, Adeyemi oluwaseyi",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"SOKOYA, Semiu adebola",Abusi Odumare Academy Junior Ijebu Igbo,IJEBU NORTH
"ADEBANJO, Moriamo adenike",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"ADEDOYE, Felix adesile",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"AKINDELE, John akinyemi",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"IPAYE, Mariam abolanle",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"KASSIM, Rasidi Adeyemi.",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"LUKE, Adebimpe olufunmilola",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"MOSURO, Kamoru Oladipupo.",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"Mr. FAGBEMI,  Taiwo",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"Mrs. AYODELE,  Abolaji olayemi",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"Mrs. KABEER,  Simbiat adepeju",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"OGUNBIYI, Oluwatoyin deji",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"OKUNOWO, Victoria Olanike.",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"ONASANYA, Modupe olubunmi",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"OSUNKOYA, Victor olabode",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"SIKIRU, Akeem babatunde",Abusi Odumare Academy Senior Ijebu Igbo,IJEBU NORTH
"AJILA, Omoni oluwatoyin",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"ARABA, Shakirat Bukonla.",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"BALOGUN, Ibrahim omobowale",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"BULUGBE, Musa adebayo",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"FAROTIMI, Morenikeji ismot",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"LAWAL, Aminat olawunmi",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"Mr. OLANIPEKUN,  Kunle paul",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"Mr. OSIYEMI,  Abiodun samson",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"Mrs. ABAYOMI,  Modupe bisola",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"OGUNNOIKI, Semiu kolawole",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"OWOSENI, Afusat abolore",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"SHITTU, Daud babatunde",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"TAIWO, Dauda adeniyi",Ago Iwoye Secondary School Junior Ago Iwoye,IJEBU NORTH
"ABDUL-SALAM, Abdul-rasaq Folorunsho.",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"ADEDOYE, Anthony oludare",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"ADENUGA, Bolanle",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"ADESANYA, Adedeji Richard.",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"ADEWUYI, Solomon adeyemi",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"AGORO, Kassim nihinlola",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"ALLI, Bolanle Thamrat.",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"BELLO, Waheed awokoya",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"GIWA, Olabode",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"LAWAL, Adedeji",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"Mr. AROGUNDADE,  Taofeeq abayomi",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"Mrs. OJEDARE,  Folasade waliyat",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"ODUKOYA, Adeola oluwafunmilayo",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"OGUNFODUNRIN, Bunmi Wemimo.",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"OYEKANMI, Sunday segun",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"RUFAI, Odutola rabiu",Ago Iwoye Secondary School Senior Ago Iwoye,IJEBU NORTH
"ADEKOMAYA, Yetunde oluyombo",Ahmadiyya High School Junior Ago Iwoye,IJEBU NORTH
"ADESANYA, Selimot abolanle",Ahmadiyya High School Junior Ago Iwoye,IJEBU NORTH
"FESOJAIYE, Temitope Temilola.",Ahmadiyya High School Junior Ago Iwoye,IJEBU NORTH
"ILORI, Oluwaseun abiodun",Ahmadiyya High School Junior Ago Iwoye,IJEBU NORTH
"Mr. SULAIMAN,  Ibrahim ademola",Ahmadiyya High School Junior Ago Iwoye,IJEBU NORTH
"Mrs. OGOR,  Sabi  B.",Ahmadiyya High School Junior Ago Iwoye,IJEBU NORTH
"TUGBOBO, Morenike afusat",Ahmadiyya High School Junior Ago Iwoye,IJEBU NORTH
"ADEBOYEJO, Afolasade Abosede.",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"BAMMEKE, Oluwaseun ajani",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"KAZEEM, Abudu olalekan",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"MATILUKURO, Rashidat oluwaseun",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"Mrs. FATADE,  Victoria oluyemisi",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"Mrs. OLUWAJIMI,  Mojisola  funmilayo",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"ODUSANYA, Silifat taiwo",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"OSIBOWALE, Abosede modupe",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"SAKA, Moriamo Atinuke.",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"TAJUDEEN, Ramoni lawal",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"YUSUF, Abdul akeem",Ahmadiyya High School Senior Ago Iwoye,IJEBU NORTH
"ADEYEMI, Oluwatosin enitan",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"AREGBESOLA, Rasaq adekunle",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"AWOKOYA, Kudirat Keke.",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"BAKARE, Oluwakemi Omowunmi.",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"KAZEEM, Fatimoh Omoseeke.",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"Mrs. OLUBAYO,  Grace omowunmi ajoke",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"OBATERU, Felix",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"OGUNBAYO, Isiaka adeleke oluwasegun",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"OLAKAYODE, Adejoke Mary.",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"OYEDOKUN, Raji ishaq adesola",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"SANSA, Sesan segun",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"SOWEMIMO, Bolanle mary",Beje High School Junior Ijebu Igbo,IJEBU NORTH
"ADEDINA, Olumuyiwa adeniyi",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"AGBAJE, Adenola",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"AKANBI, Adenike Ganiyat.",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"AKINDELE, Morounfola olorunsola",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"IDOWU, Adunola wunmi",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"KUFO, Akinwale Olasunkomi.",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"LAWAL, Oluwatoyin jacob",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"Mr. OGUNYEMI,  Taiwo john",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"Mrs. RABIU,  Olufunke  oriyomi",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"OLADELE, Tawa temitope",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"OLADIPUPO, Ismaila seun",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"OLADIRAN, Adenike Ayobamidele.",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"OLUFOTEBI, Ganiyat Adebunmi.",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"ONASANYA, Agnes olubunmi",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"OSENI, Adebowale Victoria.",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"SANNI, Abdur-rasaq adekunle",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"SONUBI, Adeniyi peter",Beje High School Senior Ijebu Igbo,IJEBU NORTH
"ABDUSALAM, Oyeladun Hairat.",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ADEBOYEJO, Oluwatoyin adenike",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"BADEWA, Suarau Kolawole.",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"BARUWA, Elizabeth mojisola",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"Mr. OYEWOLE,  Gabriel abiodun",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"Mrs. AKANJI,  Olubumi olufumilola",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ODUNUGA, Adeniyi ahmeed",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"OLOWOAKE, Taoheed abolore",Fowoseje Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ABIOLA, Khadijat oluwatoyin",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"AYO-ADEBAMIRO, Oluwakemi ajoke",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"BABALOLA, Samuel olalekan",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"KAZEEM, Basirat oluwatoyin",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"Mr. SHOGBIYEJU,  Adebayo adekunle",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"Mr. YINUSA,  Morufu oladele",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ODEBIYI, Tolani hammed",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OGUNFODUNRIN, Kemi rasidi",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OLATUNJI, Opeoluwa dayo",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ONABAMIRO, Adesoye taiwo",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ONITILO, Ibrahim abiodun",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OSHINOWO, Ibraheem Olamide.",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"SALAMI, Olubisi moradehun",Fowoseje Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ABOLAJI, Kehinde hazanat","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"ADEFISAN, Sakiru Abiodun.","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"AYODELE, Adefoluwakemi","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"IDOWU, Rebecca idowu","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"LAWAL, Adebimpe Omolabake.","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"Mr. MIFTAHUDEEN -OYELEKE,  Abdulrahman","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"Mrs. MUSTAFA,  Racheal  A.","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"Mrs. ODUYEMI,  Olubukonla esther","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"OLUROMBI, Monsuru Adebola.","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"OYEKAN, Olawale Amos.","Ijebu Igbo Girls Grammar School (Junior), Ijebu Igbo",IJEBU NORTH
"ABIODUN, Adekunle Ayodele.",Ijebu Igbo Girls Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"AYELOTAN, Adesola  funke",Ijebu Igbo Girls Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"DAGUNODO, Michael aduragbemi",Ijebu Igbo Girls Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"EGBEOLOWO, Babajide Aliu.",Ijebu Igbo Girls Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"Mrs. AYO-ONATOLA,  Abosede mosunmola",Ijebu Igbo Girls Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"Mrs. MABINUORI,  Latifat abosede",Ijebu Igbo Girls Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"ADESIBIKAN, Adebukunola titilope",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"ADETOWUBO, Olayide",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"ARIKEUYO, Serifat Aderonke.",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"AWESU, Risikat adetoun",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"AYENI, Bisola ganiyat",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"FALAJIKI, Yetunde omowunmi",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"LAWAL, Fatimo oluwakemi",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"Mrs. ONADEKO,  Kehinde oladunni",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"ODERINDE, Abisola grace",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"OGUNBO, Ololade Oluwaseun.",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"OGUNDE, Cecilia adetutu",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"OGUNFODUNRIN, Toyin sola",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"OLAKITAN, Idayat arike",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"OLATUNJI, Temitope rashidat",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"OLUKOYA, Oluyemisi adebimpe",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"OSINUGA, Olubunmi olatunde",Itamerin Comprehensive High School Junior Oru Ijebu,IJEBU NORTH
"ADEYEMI, Abiodun adetutu",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"AGBANLE, Ibraheem kolawole",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"AJENIFUJA, Kazeem adeniyi",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"AKINSANYA, Abolaji olufemi",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"ARANMOLATE, Tawakalitu taiwo",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"ASIRU, Basiru oloruntoyin",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"AWE, Kehinde zakariyau",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"Mr. JIMOH,  Mudashiru idowu",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"Mrs. ADEDOYIN,  Adedayo titilope",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"ODUGBESAN, Olajumoke ibironke",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"ODUTOLA, Kamorudeen ola",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"OGEDENGBE, Oluwatoyin Adeyosola.",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"OJUBANIRE, Abdulfatai Abayomi.",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"OMOJOLA, Bukola bose",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"ONABANJO, Michael adebiyi",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"OSINOWO, Morounfade Yetunde.",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"OYETUBO, Olufunke omoyemi",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"QUADRI, Nofiu olawale",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"SALAMI, Olabisi oluwaseun",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"SANNI, Abolanle risiqat",Itamerin Comprehensive High School Senior Oru Ijebu,IJEBU NORTH
"ADELEYE, Olusesan Paul.",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"KILO, Aderemi samuel",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"Mr. MURAINO,  Hussein sunkanmi",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"Mrs. LIASU,  Eunice oluwatoyin",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"OGUNBOWALE, Martina Olawunmi.",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"OGUNJOBI, Taiwo ruth",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"ONASANYA, Afolasade Aanuoluwapo.",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"OPALEYE, Nurudeen oluseye",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"SHIPE, Olamide david",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"SOBOLWALE, Azeezat Abiola.",Japara High School Junior Ijebu Igbo,IJEBU NORTH
"ADEBOWALE, Michael ayodeji",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ADENUGBA, Jumoke Kofowola.",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ADESOYE, Adebunkola",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ALONGE, Abolaji Afolasade.",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ANIMASHAUN, Olaolu adedayo",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"EGBEOLOWO, Bilikis Gbemisola.",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"FENUGA, Adeola Peter.",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"KUYE, Oluwayemi ayoni",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"Mr. AJETUNMOBI,  Olatunde opeoluwa",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"Mr. SAHEED,  Najimudeen  A.",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"Mrs. OSENI,  Bernice mojisola",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ODUKOYA, Modupe arinola",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ODUSOLE, Ademola adewale",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"OJO, Simiat Folake.",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"OKEDINA, Oluseun adewale",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ONANUBI, Bamikunle temitayo",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ONAYIGA, Adesesan olalekan",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"SALISU, Olugbenga sakiru",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"SHONIBARE, Folake olayinka",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"SOBANJO, Olugbenga",Japara High School Senior Ijebu Igbo,IJEBU NORTH
"ADEWUNMI, Adedayo samuel",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"AKINADE, Sarah Oluwatosin.",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"FASINA, Olukunmi tolulope",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"Mrs. BAKRE,  Bilikisu alake",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"ODUSOLE, Adebukola titilope",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"OGUNNWA, Ademola ademuyiwa",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"OJELADE, Adebisi abiola",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"OJUTU, Gabriel adigun",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"OSILAJA, Olasunkanmi sikiru",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"SANNI, Fatimah Olanike.",Kegbo Community Comprehensive High School Junior Ijebu Igbo,IJEBU NORTH
"ABBAS, Saidat Adetola.",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"ADEMOLA, Olaoluwa ayoola",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"BADA, Wakilat iyabode",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"FENUGA, Sekinat Mojisola.",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"HASSAN, Ademola ismahil",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"Mr. SANNI,  Rasaq adebola",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"Mrs. IWUCHUKWU,  Ellen adanma",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"Mrs. OLUKOYA,  Olusola adetokunbo",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"OGUNBANWO, Adekunle",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"OGUNDIPE, Rufus oladipupo",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"OGUNNOWO, Samuel temitayo",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"OSIBAMOWO, Omolola oludele",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"OSIFOWOKAN, Titilope olaitan",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"OYEWOGA, Maria olufunmilola",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"RASHEED, Idowu Olubukanla.",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"ROWAYE, Ridwan Adedokun.",Kegbo Community Comprehensive High School Senior Ijebu Igbo,IJEBU NORTH
"ADEBANJO, Adetutu olanrewaju",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"ADEBANJO, Hameed oluwatosin",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"COKER, Ademola Olayemi.",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"Mr. MOSHOOD,  Babatunde rabiu",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"Mrs. ABAYOMI,  Maria enakeno",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"Mrs. OLUKOYA,  Temitope folabo",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"ONOU, Geoffrey nimbe",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"OSENI, Bintu fatimoh",Ladugbo Community Comprehensive High School Ijebu Igbo,IJEBU NORTH
"ABDULFATAI, Obalowu Soliu.",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"ADEBANJO, Adesoji adewunmi",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"ADEKALU, Fatimoh dasola",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"ADELEKE, Abolaji mariam",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"ADEWALE, Taiwo adedoyin",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"ADISA, Muibat folake",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"AIYELOJA, Olufemi olubusayo",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"AKINGBOYE, Saheed alaba",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"LAOYE, Adetola biodun",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"Mrs. ADEKOYA,  Bolanle ajoke",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"OKUBENA, Rafat Yetunde.",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"OLAWALE, Samuel soji",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"OYEDELE, Adenike alice",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"SEHINDEMI, Folasade mobolaji",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"SOYINGBE, Akeem Sunwhen.",Mamu Community Comprehensive High School Mamu Ijebu,IJEBU NORTH
"ABDUL, Bukola fausat",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ABRAHAM, Edith osiodevbo",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ADEBAMIRO, Adedoyin",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ADEBANJO, Alaba jamiu",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ADEEKO, Segun peters",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"AYANLAJA, Moses oluwagbebe",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"IDOWU, Olubanke olutosin",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"IYOWUN, Gbenga taiwo",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"SAFUWA, Salami olalekan",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"SALAMI, Adesola moriliat",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"SEBIOMO, Bolanle Adedeji.",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"SHITTU, Olukayode saheed",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ZAKARIYAU, Musa  Temitope.",Methodist Comprehensive High School Junior Ago Iwoye,IJEBU NORTH
"ADEBOYEJO, Ahmed adetokunbo",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ADENUGA, Adedeji micheal",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"BAKARE, Temitope endurance",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"HASSAN, Ibraheem olubanwo",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"MUMEEN-MURITALA, Hamdat olayinka",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"MUSTAPHA, Rilwan oladimeji",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"Mrs. OKUSAMI,  Olusola modupe",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"Mrs. OYESIKU,  Olabisi adebukunola",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OBABIRE, Grace kehinde",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ODUGBESAN, Abayomi olumide",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ODUMOSU, Silifat Adeyemi.",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OGUNBOYEJO, Omotoke Olusola.",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"OGUNLAJA, Adebowale adesola",Methodist Comprehensive High School Senior Ago Iwoye,IJEBU NORTH
"ABASS, Asimiu",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"ADEDOYE, Adeola ibidunmi",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"ADELAJA, Rachael jareola",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"ADEMOLA, Joseph jayeola",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"ADEYIGA, Olubunmi Olufunmilayo.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"AJAYI, Afolasade Morayo.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"AREGBESOLA, Aliyat bukola",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"DAUDA, Adeyombo Rashidat.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"HAMEED, Adefunke sarat",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"HASSAN, Abiola Oyindamola.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"MOSHOOD, Nimotallahi busayo",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"Mr. KEHINDE,  Oladapo olukayode",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"Mr. OGUNSOLA,  Oyegoke  P.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"Mrs. ARIYO,  Afusat  A.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"Mrs. OLUKOYA,  Olayinka abosede",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"OGUNSANYA, Solomon olusegun",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"OGUNTADE, Taiwo odunola",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"OGUNTOKE, Moses toyosi",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"OLUBANWO, Yetunde adeyinka",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"OLUKOYA, Temitope Oyinlola.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"ONANUGA, Adebayo Oludare.",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"SANNI, Kudirat abiola",Molusi College Junior Ijebu Igbo,IJEBU NORTH
"ABASS, Khadeejat adekemi",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"ADENIRAN, Kabir Adeyinka.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"ADEOKUN, Oluwatoyin Abiodun.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"ADESEUN, Adekunle Lawal.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"ADETAYO, Michael babatunde",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"AKINDOLIRE, Folasade felicia",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"ASHAFA, Olugbenga ayodele",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"FOLORUNSO, Morenike felicia",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"IDOWU, Rita Ngozi.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"IDOWU, Wasiu Abiodun.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"IKUEJAWA, Segun Ibukun.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"LAWAL, Adewale arimi",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"MAYUNGBE, John oluwasegun",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"Mr. ODUNEYE,  Olumide olugbenga",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"Mr. OGUNNOWO,  Abiodun gbenro",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"Mrs. BANJO,  Felicia  F.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"OGUNDIPE, Florence olanike",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"OGUNWO, Johnson Oladiran.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"OKEOWO, Adeyinka Oluwasegun.",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"OLATIDOYE, Joel olatunji",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"OLUGBENGA, Esther ademitan",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"OYEKOLA, Adeyinka",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"QUADRI, Azeezat abolore",Molusi College Senior Ijebu Igbo,IJEBU NORTH
"ABDUL-SALAM, Ramot Iyabo.",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"AINA, Solomon oluwaseun",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"AKINLEYE, Suliat oluwatoyin",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"ARASI, Yekinni akinola",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"BANJO, Sesan andrew",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"Mr. SUNMOLA,  Adekunle suraju",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"Mrs. SALAMI,  Adefoluke olufunke",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"OGUNYALE, Ramoni adeola",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"OSHINAIKE, Khadijah abduraheem",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"SUNMOLA, Sakirudeen alowonle",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"TOM-JONES, Oluwakemi abiola",Musilm High School Senior Ago Iwoye,IJEBU NORTH
"ABANIKANNDA, Habibllah bilal",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"ADEKOYA, Sunday godwin",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"AGBOLADE, Kareem Abiodun.",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"AKINOLA, Abimbola",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"BADMUS-AYANLEYE, Sakirat oluwatoyin",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"BODUNRIN, Kamordeen oluwanisola",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"LAWAL, Adetutu olubukunola",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"MATILUKURO, Sesan olanrewaju",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"Mr. OSODIPE,  Babajide taiwo",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"Mrs. ADESOLA-YISAU,  Kuburat yetunde",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"Mrs. AIYEOLA,  Abayomi adebukonla",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"ODUKOYA, Kazeem adesoji",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"OGUNBOWALE, Titus temitayo",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"OSHO, Alice omolabake",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"QUADRI, Basirat oluwakemi",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"TOYALE, Kehinde mutiat",Muslim High School Junior Ago Iwoye,IJEBU NORTH
"ADEBAYO, Odusola Abigael.",Obanta Comprehensive High School Junior Awa Ijebu,IJEBU NORTH
"ADERIBIGBE, Mukaila tunde",Obanta Comprehensive High School Junior Awa Ijebu,IJEBU NORTH
"DAVID, Kehinde ibiyemi",Obanta Comprehensive High School Junior Awa Ijebu,IJEBU NORTH
"Mrs. MAMORA,  Olusola  O.",Obanta Comprehensive High School Junior Awa Ijebu,IJEBU NORTH
"OLESIN, Abiodun olubunmi",Obanta Comprehensive High School Junior Awa Ijebu,IJEBU NORTH
"OLU-GEORGE, Oluremi Olanike.",Obanta Comprehensive High School Junior Awa Ijebu,IJEBU NORTH
"ADEBOLA, Abosede theresa titlayo",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"ARANMOLATE, Musibau Babajide.",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"AWONIYI, Adewale aderemi",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"BAKARE, Olubusola azeezah",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"Mr. FAROTIMI,  Olumuyiwa moses",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"Mr. OGUNNIYI,  Adeleke ismail",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"Mrs. KUYOORO,  Ruth olanike",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"OGUNJIRIN, Cecilia aderinmola",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"OHWOKIRERHUO, Eguriase gbenga",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"OKUTIMIREN, Afusat oluwakemi",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"OWANIKIN, Ajoke Morenike.",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"SHONTAN, Olubunmi janet",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"TUGBOBO, Taiwo olusayo",Obanta Comprehensive High School Senior Awa Ijebu,IJEBU NORTH
"ADESANYA, Hakeem Adetola.",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"DACOSTA, Olatunji musafau",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"IDOWU, Rafiu olalekan",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"ISAAC, Young isaac",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"JAIYESIMI, Olugbenga ayodeji",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"JOODA, Olubunmi elizabeth",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"Mrs. MACAULAY,  Yetunde  F.",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"Mrs. OGUNTADE,  Victoria funmilayo",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"Mrs. OKUSAGA,  Ronke oluwatoyin",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"OGUNNOWO, Ayoola Olanike.",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"ORIADE, Faith Adegbuyi.",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"SAIBU, Saheed adewale",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"SIKIRU, Sulaimon Babatunde.",Olokine Grammar School Ijebu-Igbo,IJEBU NORTH
"ADEOYE, Adesola Mobolaji.",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"ADEYEMI, Florence olufunmilayo",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"BALOGUN, Safiriyu adewale",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"FASINA, Olusola olubunmi",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"LAWAL, Juliet nwakaego",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"MOJEED, Akeem adebayo",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"MURITALA, Ganiyu taiwo",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"Mrs. ADESOGA,  Lateefat oni",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"Mrs. OSILANA,  Durodola taiwo",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"OGUNDIPE, Abidemi bolanle",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"OLOWOLAYEMO, Adesina",Shamsudeen Grammar School Junior Ijebu-Igbo,IJEBU NORTH
"ADEMEFUN, Kazeem owolabi",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"ADENEYE, Ismaila oludapo",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"ADENUGA, Andrew olatunbi",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"AJIBADE, Folayimi adedoyin",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"MOSHOOD, Sikiru titilope",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"Mrs. SHITTU,  Sakirat modupe",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"OLAJIDE-TAIWO, Victoria Oludayo.",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"ONABANJO-ADEOYE, Adefolake Peju.",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"ONASANYA, Abiodun olatubosun",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"OWOLABI, Adenola mojisola",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"SALAMI, Julianah oluwatomipe",Shamsudeen Grammar School Senior Ijebu-Igbo,IJEBU NORTH
"ADENIREGUN, Abiola surajudeen",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"ADEYIGA, Gabriel adegboyega",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"AGBOTA  - OLUGBENGA, Morenikeji ayodele",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"AKINYEMI, Oluwamuyiwa odunlami",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"APARA, Olubunmi motunrayo",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"AYANFE-ADEMOLA, Titilayo Adesola.",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"BEYIOKU, Taiwo dorcas",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"ESAN, Grace oyindamola",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"OGUNNOWO, Elizabeth oluwafunmilayo",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"OJUAANU, Yemisi abosede",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"OKUWOBI, Omowunmi rebecca",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"OLAJIMI, Cynthia omowunmi pleasant",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"OLARINDE, Toyin Racheal.",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"ONANUBI, Oluwakemi Eniola.",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"ONASANYA, Samuel onayemi",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"OSINOWO, Modinat toyin",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"SANNI, Sakirudeen kolawole",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"TIJANI, Rasaq opeyemi",Sopen Comprehensive High School Junior Ijebu-Igbo,IJEBU NORTH
"ABEEB, Ososolape moni",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"ADEFISAN, Oluwafunmilayo Adeola.",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"ADEJOBI, Aderonke Fatimo.",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"ADEMOLA, Olufunke muibat",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"ADERIBIGBE, Oladunni titilayo",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"AGBAJE, Oluwaseun Esther.",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"BELLO, Samuel",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"GIWA, Oluwakemi Rukayat.",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"IDOWU, Oluwakemi adekunle",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"Mr. ARIGBABUWO,  Musa kalam",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"OGUNSANWO, Kehinde olubunmi",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"OKUNEYE, Babatunde oluwagbemiga",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"OSIBOGUN, Adewale akeem",Sopen Comprehensive High School Senior Ijebu-Igbo,IJEBU NORTH
"ADEBAJO, Olalekan donald","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ADEBAMIRO, Onabiyi segun","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ADEFOLARIN, Latifat omorireba","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ADEKUNLE, Titilayo Taiwo.","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ADENEYE, Oluwaseun oriyomi","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"AYODELE, Oludayo Odueyingbo.","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"BANJO, Bolanle omolayo","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"KEHINDE, Olalekan olumuyiwa","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"MOSHOOD, Grace Temitayo.","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"Mr. OLADIPUPO,  Olalekan seun","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"Mr. POPOOLA,  Lateef  O.","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"Mrs. BAMIJOKO,  Funmilola abosede","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ODEBUNMI, Taiwo Ibijoke.","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ODUFEJO, Funmilola mojisola","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ODUNUGA, Oriyomi peter","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"OGUNFOWOTE, Jacob adekunle","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"OGUNLANA, Oluwaseyi Funmilayo.","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"OSOSANYA, Kayode micheal","Alaro Community High School, Odosenlu.",IJEBU NORTH EAST
"ADEBANJO, Mufutau Adewale.","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"ADETIMEHIN, Olufunke Adenike.","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"AYINDE, Kehinde Kunmilola.","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"EWUMI, Olusola afolabi","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"IBRAHIM, Nurayn Atanda.","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"MEGHOLA, Adebowale Solomon.","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"Mrs. AKINBIYI,  Veronica adewunmi","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"Mrs. SOBANDE,  Felicia abisoye","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"ODUMERU, Yomi adeleye","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"OKEOWO, Owolabi michael","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"OLASIMBO, Musa Oladipupo.","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"ORESANWO, John oluwakemi","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"OSIPITAN, Adedamola olatunbosun","Deyo-Tuwo Comprehensive High School, Junior",IJEBU NORTH EAST
"ADELEYE, Adesoji sunday","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"KASSIM, Olayinka Taiwo.","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"Mrs. ADENUGA,  Toyin ranti","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"OKUNOWO, Olubunmi mary","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"OLAYIWOLE, Adeniyi lawrence","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"OLOKO, Abimbola mustapha","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"ONANUBI, Ahmed Onasile.","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"TIAMIYU, Ganiyu olorunwa","Deyo-Tuwo Comprehensive High School, Senior.",IJEBU NORTH EAST
"ABIODUN, Babafemi oluwole","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ADEBANJO, Abosede omoniyi","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ADEBANJO, Bukola folasade","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ADEBOLUJO, Afolake abiodun","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ADEDIPE, Adesesan r.","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ADEPITAN, Adebisi","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"BANJOKO, Musa oluwatosin","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"BELLO, Adesewa alaba","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"DADA, Foluso Lucia.","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"EDEMA, Moses juwon","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ENILARI, Muinat oluwatoyin","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"IDOWU, Nuratu oluwakemi","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"IDOWU, Taiwo titilope","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"IDOWU, Toyin zainab","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"LAWAL, Bolanle omolara","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"Mr. OSO,  Abiodun lateef","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"Mr. OSOBAMIRO,  Oludare sunday","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"Mrs. ADEYEMI-ADESANYA,  Adejoke morenike","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"Mrs. KASSIM,  Safiat temitope","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ODUFOYE, Taiwo marian","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ODUSANYA, Olateju oluwajumi","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"OGUNLANA, Tolulope adeyoye","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"OKUSHI, William","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"OLUGBODE, Funmilayo mulikat","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"OMOYEFA, Aijolomoohi justina","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"OSINLOYE, Felicia olubukola","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"QUADRI, Sherifat temitope","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"SOBAYO, Omotayo bamidele","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"SULE, Mojibade Mojisola.","Idomila Comprehensive High School, Idomila.",IJEBU NORTH EAST
"ADEDOKUN, Ayandayo sadiat","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ADEDOYIN, Olawunmi mary","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ADEKOYA, Olawabunola oluwaseyi","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ADEKUOROYE, Abosede oluwatoyin","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ADESANYA, Ayodeji oluseun","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"AJISEKOLA, Oluwafunke ayodele","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"FAGBAYE, Abidemi Funmilayo.","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"IDOWU, Olugbenga samuel","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"IGBOKOYI, Adeola oluwaseyi","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"JEJE, Adebimpe afusat","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"KASALI, Adedayo omolara","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"KEHINDE, Bukanla rebecca","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"LAWAL, Yewande aisha","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"Mr. ADEYEMI,  Oluseun adebola","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"Mrs. ADEYEMI,  Adebisi ebunoluwa","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"Mrs. OGUNBOWALE,  Christiana funmilayo","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ODUBIRO, Sesan Michael.","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"OGUNSAJO, Afolasade olayemi","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"OLAYENIKAN, Toyin","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"OLUFUNWA, Modupe christianah","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ONAFUYE, Veronica clara","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ONAJOKE, Sunday adeniji","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"OSUNRINDE, Jenrola aderonke","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"OWOSENI, Mudirat adebowale","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"RAHMON, Musiliu olanipekun","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"RUFAI, Azeez oluwaseun","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"SASEUN, Christianah oluwatosin","Ilese Comprehensive High School, Junior",IJEBU NORTH EAST
"ADEBANJO, Jumoke Adejoke.","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"ADEBIYI, Afusat Omowunmi.","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"ADEDAPO, Taofik adegboyega","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"AINA-KAYODE, Olubunmi abosede","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"AKINTUNDE, Hezekiah olaolu","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"BAKRE, Rukayat Afolasade.","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"DAHUNSI, Mary Ifeoluwapo.","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"DAWODU, Reuben alabi","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"LAMEED, Omolola abosede","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"Mr. OSENI,  Olusanya jimmy","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"Mrs. MOSURO,  Olabisi busurat","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"Mrs. NUBI,  Omotoyosi dorcas","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"OGUNSAJO, Olusegun thomas","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"OLUSANYA, Ibironke adejoke","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"OLUSEGUN, Olushola monisola","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"OSIBAJO, Jeremiah ayodele","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"SODIPO, Saheed folorunso","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"WASIU, Moriamo bolatinuwa","Ilese Comprehensive High School, Senior.",IJEBU NORTH EAST
"ADEDIPE, Adenike serifat","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"ADESANYA, Deborah idowu","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"AGBAOYE, Olusegun andrew","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"ALIMI, Moruf oladipupo","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"KADIRI, Adebolanle olufunmilola","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"KAZEEM, Kamorudeen Adekunle.","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"KUYORO, Comfort oluwakemi","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"ODUNTAN, Anthony adedayo","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"ODUNTAN, Olufisayo babatunde","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"OGUNKOYA, Bolanle adenike","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"ONABANJO, Israel oriyomi","Ilugun Central Academy, Ibido/Odosenbora.",IJEBU NORTH EAST
"ADEBANJO, Adebukonla taiwo","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"ADEBAYO, Oluwatosin o.","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"ADENEYE, Idowu wasiu adeboye .s.","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"ADEROJU, Waliyat Aderonke.","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"ADETOKUNBO, Oritoke serah","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"ADETOLA, Abimbola adeola","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"AINA, Idowu gbemisola","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"AKINNEYE, Adedayo Adetoun.","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"LAMINA, Oluseye hammed","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"Mr. OSUNKOYA,  Olalekan lawrence","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"OGUNNAIKE, Funmilola mary","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"OGUNSAJO, Adekunle johnson","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"OJO, Christianah funlayo","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"OMODEHIN, Ademola augustine","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"OPANUGA, Abiola olaide","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"OTUSANYA, Afolake hilaria","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"VICTOR, Olayinka aderonke","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"YUSUF, Bilikis titilope","Isoyin Grammar School, Junior.",IJEBU NORTH EAST
"ADEGBUYI, Onayemi olufunmilola","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"ADEKOYA, Samson opeoluwa","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"ADENIYI, Comfort omolara","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"ADENIYI, Oluwakemi afolasade","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"ADETOUN, Michael olusola","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"ADEYEMI, Olatunbosun amudat","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"AINA, Josephine  abisoye","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"AROWOLO, Hilda anuoluwapo","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"BELLO, Babatunde Segun.","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"DUROJAYE, Blessing kehinde","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"KOLAWOLE, Soye michael","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"LAMIDI, Yakubu olorunyomi","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"Mr. OGUNKOYA,  Felix adeyemo","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"Mr. SOREMEKUN,  Olakunle olusegun","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"Mr. TAIWO,  Oladele olufemi","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"OGUNADE, Adekunle moses","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"OGUNBOWALE, Adeyemi temitayo","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"OGUNKOYA, Taiwo Damilola.","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"QUADRI, Razaq olumitayo","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"SANNI, Adesola adebimpe","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"SOYOMBO, Adeyinka abiodun","Isoyin Grammar School, Senior.",IJEBU NORTH EAST
"ABDULSALAM, Ramota abiodun","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ADEIYE, Khadijat adebisi","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ADENUGA, Oluwatoyin Mary.","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ADETAYO, Abosede adeyinka","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ADEYEMI, Iyabo rasheedat","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ADEYEMI, Mojisiola christianah","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ARUKWEH, Bolajoko adebisi","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"AYOOLA, Adebola oluwakemi","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"BALOGUN, Yetunde alice","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"BANJO, Elizabeth modupe","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"EMMANUEL, Funmilola onaolapo","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ETIETSOLA, Omotola Mary.","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"FASINA, Idowu kemi","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"KESHINRO, Mukaila adebogun","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"Mrs. AJIGBOTOLUWA,  Adejoke abidemi","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"Mrs. SANNI,  Iyabo morayo","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"Mrs. TAIWO,  Olufemi esther","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ODUNUGA, Adenike olajumoke","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"OGUNBANWO, Adebayo lateef","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"OLADIMEJI, Folasade adesola","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"SAMUEL, Olanike Yinka.","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"SANUSI, Ganiyat olamide","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"SIKIRU, Waliyu Akinrole.","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"SOYOMBO, Titilayo oluwatoyin","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"SUBAIR, Remilekun omolade","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"SUNMOLA, Samusideen olalekan","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"TUNDE, Talabi abigail","Odopotu Community High School, Odopotu.",IJEBU NORTH EAST
"ADEBANJO, Nimota Morike.","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ADEBANJO, Olubukunola  aduke","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ADELEYE, Tolulope kehinde","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ADEROUNMU, Medeyonmi grace","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ADESANYA, Folake mojisola","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ADEYINKA, Akanji ajike tawa","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ADUBI, Tosin adenike","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"AGBOOLA, Yemisi Shakirat.","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"AKINTOYE, Oluwatoyin bosede","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"AKINYEMI, Yinusa akintunde","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"AWOLOLA, Bukonla temitope","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"BANJO, Morounkeji mujidat","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"IBRAHIM, Ahmed Adeyinka.","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ISIAKA, Salmot Abolanle.","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"LAWAL, Aisha bolanle","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"Mr. SEKERE,  Abdul-jelili  adekunle","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"Mrs. ISOLA,  Ayodele olusola","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"Mrs. OGUNTOYINBO,  Olufunke iyabode","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ODEBODE, Oluwakemi","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ODUMOSU, Oluwakemi anuoluwapo","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"OGUNSANYA, Samuel adekunle","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"OKUBANJO, Zariyat Olasubomi.","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"OKUNNUBI, Kehinde Oyeladun.","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"OLAJIDE, Felicia adenike","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"OLAYINKA, Adejoke ganiyat","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ONASANYA, Omolayo mayowa","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ONIPEDE, Ukoma victoria","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"RAHEEM, Aderonke salamot","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"SALAMI, Olabisi idayat","Ogbogbo Baptist Grammar School, Junior.",IJEBU NORTH EAST
"ADEBOLA, Omolade adesola","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"ADENAIKE, Babatunde alexander","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"AJAYI, Omolade oluwatoyin","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"BAKARE, Toyin Idowu.","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"BAMIGBOLA, Ademola Julius.","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"CHIBOGWU, Roseline ifeoma","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"IDOWU, Olufemi olaiya williams","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"IDRIS, Silifat olabukonla","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"JAMES, Maryam Olubukonla.","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"KAREEM, Kamildeen olalekan","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"LAMINA, Fausat Olajumoke.","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"Mr. ALAMU,  Babatunde michael","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"Mr. ORENAIYA,  Solomon adewale","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"NWALI, John","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"ODIFA, Olubukun0la","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"OGNLEYE, Moses abiodun","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"OGUNDE, Ogundare victor a.","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"OGUNSANYA, Adedayo comfort","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"OLORI, Olubunmi kudirat","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"OSILANA, Fehintola grace","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"OYEGUNWA, Elizabeth omotayo","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"SALAUDEEN, Mufutau abiodun","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"SASERE, Mercy Oluwaseun.","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"TAIWO, Omolara abimbola","Ogbogbo Baptist Grammar School, Senior.",IJEBU NORTH EAST
"AARE, Oluwafunke Esther.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ABDULKAREEM, Moriamo adedayo","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADEBANJO, Oluwakemi rebecca","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADEGOKE, Esther Omolara.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADEGUNWA, Bukola Mariam.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADEKANBI, Oluwatosin victoria","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADENAIKE, Remilekun olawale","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADESANYA, Olayide","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADUBI, Oloruntoyin abiodun","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"AFOLABI, Gideon Temidayo.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"AGBATOGUN, Yetunde oluwatoyin","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"AJAYI, Oluyemisi tunrayo","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ALABA, Kunle mayowa","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ARIYO, Emmanuel olusegun","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"EMMANUEL, Osareme felix","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"LAMIDI, Grace modupe","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"LAWAL, Mariam Adekinte.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"MUHAMMED-JAMIU, Yunus","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"Mr. MAFE,  Adeniyi adebayo","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"Mr. OSIBA,  Odunayo johnson","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"NWACHINEMERE, Oluchi Victoria.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ODUBIRO, Sofiat Rotimi.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ODUNOWO, Afusat oluwatoyin","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"OKEBULE, Bolajoko","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"OSIYEMI, Taiwo marcus","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"OSUNNAYA, Joseph Oluseyi.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"OYEDEMI, Odunola Oluwafikayo.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"OYEPO, Samuel Ayobami.","Oke-Eri Comprehensive High School, Oke-Eri.",IJEBU NORTH EAST
"ADEBANJO, Abayomi olajuwon","Raluwen High School, Atan.",IJEBU NORTH EAST
"AKINSOLA, Benedict adeniyi","Raluwen High School, Atan.",IJEBU NORTH EAST
"AMBALI, Idowu","Raluwen High School, Atan.",IJEBU NORTH EAST
"KASALI, Felicia olufunmilayo","Raluwen High School, Atan.",IJEBU NORTH EAST
"Mr. AKEJU,  Olalekan dada","Raluwen High School, Atan.",IJEBU NORTH EAST
"Mrs. ADEYEMI,  Oluwatoyin aina","Raluwen High School, Atan.",IJEBU NORTH EAST
"ODUNNAIKE, Christanah abosede","Raluwen High School, Atan.",IJEBU NORTH EAST
"OGBODU, Stephen adejuwon","Raluwen High School, Atan.",IJEBU NORTH EAST
"OGUNLEYE, Abosede taiwo","Raluwen High School, Atan.",IJEBU NORTH EAST
"OKUBANJO, Oluseun olaoluwa","Raluwen High School, Atan.",IJEBU NORTH EAST
"OLUKOYA, Oludaisi alaba b.","Raluwen High School, Atan.",IJEBU NORTH EAST
"ABDUL, Muhibat taiwo","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ABEJOYE, Oluseyi chriatianah Adesol.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ADAM, Idayat oluwakemi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ADEBAMBO, Abdulazeez Olanrewaju.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ADEBISI, Saidat bisola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ADEBOLA, Rasidat olukemi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ADEBOYEJO, Gbemisola funmilayo","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ADELAJA, Mojisola adeyinka","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ADUBI, Oladele francis","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"AIYENERO, Ajodun michael","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"AJIBOLA, Adenike titilola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"AKINFOLAHAN, Comfort Omolola.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"AKINTOBI, Folasade anthonia","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ALIMI, Basirat Omolara.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"AMBALI, Victoria olubunmi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ANYAH, Oluwakemi oluwabunmi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"AREH, Monilola aderonke","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"BADA, Adenike oluwakemi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"BANJOKO, Abiola adebisi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"DADA, Adenike oluwaseyi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"FATADE, Adeola oluwatosin","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ILESANMI, Oluwakemi abiodun","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ILOYI, Esther olabimpe","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"IRINOYE, Waheed","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"KAREEM, Monsurat abisola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"KUFORIJI, Elizabeth falilat","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"MAKANJU, Adewale","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"Mrs. BUSARI,  Iyabo","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"Mrs. OGUNSANYA,  Taiwo adesola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OBETODUN, Marcellina Bimpe.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ODUBONA, Olayinka rashidat","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ODUKOYA, Christianah mosunmola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ODUNUGA, David olayemi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ODUNUGA, Oluwayemisi bridget","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OGUNADE, Omowunmi oriyomi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OJAJUNE, Adeola mojisola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OLAYODE, Francisca olufunke","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OLUKOKUN-DUNCAN, Oluwayemisi fausat","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ONABULE, Adeyemi abolanle","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ONITILO, Deborah oyebimpe","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OSINUGA, Joseph adebanjo","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OTUKOYA, Olanike esther","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"OYETAYO, Serifat adetutu","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"QUADRI, Omotunde omotayo mueenat","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"SALAU, Samiat oriyomi","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"SIYANBOLA, Adeola morounkeji","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"SODEEQ, Kafayat Damola.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"SOEWU, Kudirat abiola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"SOFOLUWE, Kehinde bukunola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"SOGBESAN, Dorcas Tosin.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"TAIWO, Olufunmilayo  ruth","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"TIJANI, Olatunde Daniel.","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"UWAIS, Zubaydah mojisola","Adeola Odutola College (Junior), Ijebu Ode",IJEBU ODE
"ABORISADE, Akinwale smart","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADEBAJO, Adeleke olatunji","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADEBISI, Adewale busuyi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADEDEJI, Olayinka oluyemisi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADEDEJI, Sakirat oluwakemi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADEDOTUN, Adeniyi omoluwabi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADENOWO, Mojisola adeyemi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADENUGA, Titilayo ayodele","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADESANYA, Adelani muhydeen","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADESANYA, Udoh arit","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADETOLA, Funmi gloria","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADETONA, Omolola oluwakemi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ADEYEMI, Olufunmilayo badejoko","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"AJIBOLA, Adetoun kuburat","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"AKANBI, Taofeek afolabi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"AKINWOLE, Timilehin fatimo","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ALATILEHIN, Murtado olalekan","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ALIU, Fatai ajani","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"AYANNUGA, Adesewa yetunde","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"BANJO, Stephanie tokunbo","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"BEJIDE, Joseph gbenga","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"FEYISETAN, Kehinde oluwaseun","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"GAFAR, Adejumoke Adedoyin abiodun.","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"GBINDINNINUOLA, Adenike Fausat.","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"JIMOH, Abosede ademolu","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"JOHNSON, Rhoda olubunmi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"JOSEPH, Ololade bilikisu mojibola","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"Mr. ADEKOYA,  Emmanuel olusegun","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"Mr. FOLARIN,  Babatunde olanrewaju ola","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"Mrs. ALABA,  Adewunmi olufunmilayo","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"Mrs. ALATISHE,  Adeyinka adetoun","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"Mrs. EKPEBOR,  Afolasade abidemi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"Mrs. OLADIMEJI,  Abosede abiodun","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"Mrs. OMEDO,  Oluronke oluyinka","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ODUBELA, Oluwaseun olugbuyi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OGUNBIYI, Mary funmilayo","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OGUNLEYE, Esther funke","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OGUNNOWO, Taiwo adeolu","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OGUNYEMI, Oluwatosin adeyinka","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OKE, Oladele michael","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OLANIYI-OKUNUBI, Tawakalit oluwakemi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OLANREWAJU, Sikirat Adunni.","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OLATUNJI, Matthew toyin","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OLAYEMI, Abosede adenike","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ONANUGA, Oludare onatunji","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OSENI, Musibau oluwakemi","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OSIKOYA, Adejoke Toyin.","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OSISANWO, Atinuke omobola","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OSIYOYE, Felicia oyebola","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"OSUNSANWO, Samuel gbenga","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"SAMUEL, Afolabi monday","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"SIKIRU, Bukonla muibat","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"SULAIMAN, Oyindamola omolara","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"TOPE - IGE, Oluwakemi abidoun","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"WALE-BELLO, Omotayo Ibrahim.","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"WILHELM, Anuoluwapo Ayobamidele.","Adeola Odutola College (Senior), Ijebu Ode",IJEBU ODE
"ABISOYE, Ramat olasunkanmi","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"ADEMIJU, Adenike afolashade","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"ADEOKUN, Lateefat abosede","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"AYANBADEJO, Ismail omotayo","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"BADEJO, Adebola damilola","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"BALOGUN, Christianah iyabo","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"BANJO, Olushola oluwafunke","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"BANJOKO, Abosede adedoyin","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"DARAMOLA, Taiwo olubunmi","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"GAJI, Olajumoke basirat","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"IDOWU, Ebunoluwa oluwanikemi","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"JIMOH, Bukonla arike","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"Mrs. ADESANWO,  Elizabeth oluronke","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"Mrs. ATEGBE,  Sakirat oluwaseye","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"ODUNEYE, Abosede temitope","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OGUNFOLU, Adijat olabisi","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OGUNLANA, Rashidat Remilekun.","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OGUNSAJO, Blessing abosede","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OGUNYANKINNU, Deborah oluwafunmilayo","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OJAETAN, Anthonia eyiuche","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OLE-OLO, Temitope asizat","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OLUGBEWESA, H. adejoke","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"ONANUGA, Busurat adebisi","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"ORESANYA, Elizabeth funso","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"ORVINI, Oro helen","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OSHOBAJO, Juliana oluwaseun","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"OWOLABI, Rebecca Gbemisola.","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"UMORU, Taibat iyabo","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"YUSUF, Amudat abisoye","Anglican Girls Gram. Sch. (Junior), Ijebu Ode",IJEBU ODE
"ABDUL, Adunni olajumobi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ABDUL, Kuburat oluwayemisi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ABOLAJI, Adewale olusegun","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ADEBAMIRO, Ayodele oluwatosin","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ADEBANJO, Ninilola iyabosola","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ADESANYA, Olayinka omodunni","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ADESINA, Olubukola wosilat","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"AKINWANDE, Abiodun isreal","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"BAKRE, Oluwatosin mosun","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"DADA, Lateef olugbenga","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"FANIYI, Iseoluwa oluwafemi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"FASHINA, Olubunmi oluseyi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"FASINA, Atinuke funmi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"FATOKUN, Morise Titilope.","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"GEEVE, Abosede hope","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"JOHN, Friday francis","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"KAZEEM, Yunus abiodun","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"Mr. HASSAN,  Jamiu adekunle","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"Mrs. ABASS,  Temitope abiola","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"Mrs. BALOGUN,  Morenike  A.","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"Mrs. DADA,  Funmilayo bisi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"Mrs. OGUNDIPE,  Olumayowa dorcas","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"NOSIRU, Isiaka omotayo","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"OGBONNAYA, Oluseye adebukunola","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"OGUNBANJO, Adesola wasiu","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"OGUNLE, Olubukonla olukemi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"OKUBADEJO, Surajudeen oluwakemi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"OKUTADE, Moriamo adeola","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"OLUGBESAN, Mojisola adenike","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"OLUWABIYI, Iyabosola Adenike.","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ONABANJO, Adebimpe omolara","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ONADUJA, Atinuke olubola","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ONANUGA, Taiwo oluayo","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ORELESI, Olayinka Olubunmi.","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"PETER-AKRAWA, Fausat omotola","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"RUFAI, Shakirat oluwakemi","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"SALISU, Nureni agboola","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"SULAIMAN, Ayodeji bashir","Anglican Girls Gram. Sch. (Senior), Ijebu Ode",IJEBU ODE
"ABDULKAREEM, Buniyamin kehinde","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ADEDEJI, Taiwo adedayo","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ADENIYI, Olugbenga micheal","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ADENUGBA, Oluwafunmilayo adebisi","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ADEWOLE, Oluwatobi adebowale","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ALEBIOSU, Samsudeen abiodun","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"AMORE, Paul olufela","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ASHIMIYU, Musa adewale","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"AWONUGA, Olusola Oluwadamilare.","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"BALOGUN, Ademola emmanuel","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"EKISOLA, Racheal Olubunmi.","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"FAJOBI, Modupe abosede","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"FAKAYODE, Temitope atinuke","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"FETUGA, Folasade temitayo","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"GBOSIBO, Kehinde adunola","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"LAWAL, Christianah olufunke","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"MURAINO, Temitope kamorudeen","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"Mr. KESHINRO,  Kazeem olalekan","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"Mrs. AJAYI,  Basirat adenike","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"Mrs. BAMGBELU,  Olufunmilayo fausat","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ODUNSI, Mohamood abolore","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"OGUNAIKE, Rachael","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"OGUNKOYA, Adesola Stella.","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"OGUNMONIWO, Adewunmi alice","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"OGUNYEMI, Kehinde samuel","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"OLATUNJI-KATUN, Abisoye rukayat","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"OLOWOLEKOMO, Mujidat adedoja","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"OSHILAJA, Aderonke kuburat","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"RUFAI, Afolasade abiola","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"SODEINDE, Mary abosede","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"YUSUF, Funmilola olajumoke","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"YUSUFF, Adeola Oluwatoyin.","Ansar-Ud-Deen High School, Ijebu-Ode",IJEBU ODE
"ADEBOLA, Abibat Bukonla.",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ADESANYA, Lucia omolabake",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ADESINA, Fausat mojisola",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ADETOLA, Olayinka sidikat",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ADEWALE, Adebiyi adegbenga",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"AKINSEHINWA, Atinuke abiola",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"AROWOSEGBE, Aderonke abisola",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ASHIRU, Mukaila adebola",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"EWUNMI, Bukola olusola adedayo",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ISRAEL, Oluseyi olaiwola",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"LAWAL, Dorcas temitope",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"MAYALE-EKE, Ibrahim aderogba",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"MUHAMMED, Shakiru olalekan",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"MURITADHA, Tawakalitu Adeyinka.",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"Mr. OSIYOYE,  Olukayode adedayo",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"Mrs. ADENUGA,  Omobolanle aisha",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"Mrs. ADESIJI,  Temitope bowale",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"Mrs. KAMIL,  Muslimah olubunmi",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"Mrs. OTENAIKE,  Esther olufunke",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OBIPEHIN, Rashidat opeoluwa",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OLOWU, Adebunkola amudat",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ONABANJO, Abosede omowunmi",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ORELAJA, Sarah oluwatoyin",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OSHIFODUNRIN, Funmilayo omowunmi",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OSILOJO, Ajoke abosede",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OSINOWO, Yinka Mosun.",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OTINWA, Anthonia Olubunmi.",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OTUNUGA, Moyin deborah",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"OYEWOLE, Risikat adeola",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"UZEH, Emmanuel afokoghene",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"YINUSA, Feyisola felicia",Ansar-Ud-Deen High. Sch. Ijebu-Ode,IJEBU ODE
"ADEIYE, Simiat adesola","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ADENEYE, Olusubomi Olufunbi.","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEOKUN, Akeem niyi","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ADESANYA, Risikat oluwakemi","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"AFUN, Adebukonla Tawakalit.","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"AHANEKU, Abiodun afusat","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"AKINDE, Olubunmi Ayanyemi.","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"AKINTUNDE, Oluwatoyin modupe","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ALAUSA, Fausat temitope","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"AMUSA, Olubunmi Racheal.","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"BALOGUN, Ayotunde sakiru","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"BAMIDELE, Joseph temitope","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"MUMEEN, Tawakalitu olabisi","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"Mrs. OBEHIAGHE,  Roseline orowole","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ODEYINGBO, Nimotalai olaide","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ODUMOSU, Odufemi olawale","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ODUNTAN, Ekaete solace","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"OGUNTOYE, Paul folorunso","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"OLADAYO, Mojisola Motunrayo.","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"QUADRI, Olayemi modupe","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"RAJI, Opeyemi idris","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"TAIWO, Olusola ayodele","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"YUNUSA, Chinyere esther","Christ Church High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEBANJO, Abolanle florence","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEBARE, Adedeji oladimeji","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEGOKE, Bola","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEKOYA, Adesola olatunde","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEOYE, Jacob olusegun","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"AKILO, Aminat akorede","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"ASHAYANI, Ubaka ignatius","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"BUSARI-OGUNDE, Modupe mojisola","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"FASASI, Idayat yetunde","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"IDOWU, Cecilia omolara","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"Mr. ADEBAMBO,  Moshood adeleke","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"Mr. SANNI,  Abdul-raheem adewale","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"Mrs. ADESANYA,  Bukunola abosede","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"Mrs. ALIU,  Oluwakemi iyabo","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"OGUNGBESAN, Toyin kolawole","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"OGUNYALE, Olaronke adedayo","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"OLUWAKAYODE, Grace rotimi","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"ORENUGA, Victoria ibironke","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"OSOBA, Albert kayode","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"OSOBU, Oluwakemi Roseline.","Christ Church High School (Senior), Ijebu-Ode",IJEBU ODE
"ABDULLAH, Elizabeth olukemi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ABDULRAHMAN, Kolapo - saheed","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ADEKUNLE, Modupe kehinde","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ADELAJA, Olayinka timilehin","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ADENOLA, Hakeem adegboyega","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ADEYEMI, Kudirat olabisi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"AFOLORUNSHO, Morinkeji omolabake","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"AFOLORUNSHO, Sekinat adedayo","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"AKINTUNDE, Akinbileje earnest","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ALAWIYE, Sikiru biola","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ALEBIOSU, Amudalat opeyemi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"AMUZAT, Raheem kola","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"AUGUSTINE, Fidelix oke","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"AYODELE, Oluwakemi folake","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"BADEJO, Shakirah adebimpe","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"BADRUDEEN, Hammed opeyemi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"BALOGUN, Adedoyin alimot","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"BALOGUN, Latifah omolola","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"BELLO, Adetutu olabisi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"DAVIES, Olayemi Ayobami.","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"FETUGA, Kuburat Adedayo.","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"IDOWU, Olukunle bayo","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"JIMOH, Fausat olayinka","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"KUYE, Bunmi Clementina.","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"Mrs. AMO,  Olasunbo atinuke","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"Mrs. OKUBADEJO,  Olufunmilayo temitope","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OGUNBANJO, Aminat abidemi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OGUNNUBI, Bolanle florence","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OJO, Olunike Grace.","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OLAJUYIN, Moses ayobami","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OLE-OLO, Abdulwahab adeniyi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OLORODE, Nofisat Adunni.","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OMOROWA, Afolake Damilola.","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OSHIBOWALE, Yewande Mariam.","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"OSINAIKE, Musili temitope","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"POPOOLA, Muinat adebisi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"QUADRI, Jariat olabisi","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"SHUAIB, Rashidat adefowoke","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"SOFOLA, Abisola grace","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"WILLIAMS, Oyebola micheal","Ijebu Muslim College (Junior), Ijebu Ode",IJEBU ODE
"ADEBAYO, Hameed supo","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ADENIRAN IDRIS, Idowu olabisi","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ADESANYA, Akeem kayode","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"AINA, Oluseyi oluseun","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"AJETUNMOBI, Isiaka abiola","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"AKANNI, Rasheedat Oluwakemi.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"AKIWONMI, Alaba mathew","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ALEBIOSU, Samson abiodun","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ALLI, Fatimat abiodun","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ASHIMI, Omolola Kudirat.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"BADEJO, Ololade adejoke","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"FAGBOLA, Kehinde oluwakemi","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"IKOTUN, Kudirat olayinka","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ISIKALU, Edith Nneka.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"JOSEPH, Olubukunola","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"LAMIDI, Bariyu Adebola.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"MOHIRO, Victoria toyin","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"Mr. ANIBI,  Adetilewa monsuru","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"Mr. BURAIMO,  Adewale yusuf","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"Mr. HABEEB,  Nurudeen abiodun","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"Mr. SAROMI,  Olalekan salam","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"Mrs. AROWOSAFE,  Bilikisu anota bukanla","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ODUGBOSE, Babatunde julius","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ODUNOWO, Sunday olalekan","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OGUNNUGA, Raliat olasinbo","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OGUNWONOJU, Olusola musiliat","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OJALATAN, Abosede Esther.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OLAITAN, Olubunmi babatunde","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OLUSAN, Abodunde olasubomi","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OMOMULE, Oke peter","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OMOWOLE, Oselayo oseyemi","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ONAFUYE, Olanreaju owolabi","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ONANUGA, Aderinsola adenike","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"OWOLABI, Sunday michael","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"QASIM-ADENIJI, Modinat adeyemi","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"RAJI, Bolanle mulikat","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"SALIMON, Wakeel Olalekan.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"SAROMI, Titilope Aminat.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"SOREMI, Funmilayo falilat .a.","Ijebu Muslim College (Senior), Ijebu Ode",IJEBU ODE
"ABDUL-AZEEZ, Taofeek o.","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ABORISADE, Alaba abosede","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ADEBIYI, Bolajoko omotunde","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ADEIWA, Comfort titilola","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ADELEYE, Waheed oluwaseun","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ADENAIKE, Victor adeleke","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ADENIYI, Iretunde asake","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ADETU, Tawakalitu damilare","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ADEWALE, Toyin omotola","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"AGBAOYE, Olubukonla florence","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"AKAN-AN, Gbenga","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ALABI, Cecilia olubisi","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ALATILEHIN, Abosede hannah","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"AMBALI, Yakub oluwasesan","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"BADEJO, Omotayo oluwaseun","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"JOHNSON, Funmilayo anota","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"LASISI, Monsurat Omowunmi.","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"MAMORA, Afolasade olufunmilayo","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"MUSTAPHA, Roheemot adenike","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"Mr. ADEBAJO,  Olumuyiwa adenuga","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"Mr. ADENOWO,  James olalekan","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"Mrs. ADEYEMI,  Oluwatoyin adenike","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ODUFUWA, Victoria titi","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ODUNUGA, Johnson adebembo","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OGUNKOYA-IBRAHEEM, Hafsat adeola","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OGUNSANYA, Olayinka abosede","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OJO, Memunat nike","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OLAJIDE, Anthony Oluwaseun.","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OLAJUBUTU, Abisola olasubomi","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OLOMU, Oluwatoyin dorcas","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OLOTU, Toyin Olaolu.","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OLUFONDE, Gbenga temitope","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ONADERU, Muisat oluwatayo","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"OYEKOYA, Olufunke elizabeth","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"POPOOLA, Taiwo Anuoluwapo.","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"QUADRI, Azeez adeniyi","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"RASHEED, Risikat olasimbo","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"SANWOOLA, Esther Titilope.","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"SHITTU, Nurat abolanle","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"TAIWO, Saheed gbolagade","Ijebu Ode Grammar School (Junior), Ijebu Ode",IJEBU ODE
"ABDUL, Ibrahim folorunso","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADEBAMBO, Oluwaseun james","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADEBANJO, Kehinde omowumi","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADEBANJO, Oluwakemi nike","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADEGBEHIN, Kehinde jacob","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADENUGA, Adedoja Oluwaseun.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADESANYA, Olatunbosun ismail","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADETOLA, Taiwo adesanya","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADEWALE, Adetayo","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"AFOLABI, Ayobami isaac","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"AIYEYUN, Abiodun Modupe.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"AKILO, Oyindamola Adetoun.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"AKINTUNDE, Mary oluwabukonla","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ALOMAJA, Funmilayo Iseoluwa.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ARIYO, Olatunji Azeez.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"AWOSANYA, Adeniyi kayode","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"AYODELE, Abiodun Olanrewaju.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"AZEEZ, Olawunmi oluwadamilare","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"BADRU, Adenike abolanle","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"BELLO, Moshood abolaji","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"FAGBAMILA, Oluwafisayo afolasade","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"FALANA, Christianah adebisi","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"FETUGA, Kudirat aderonke","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"FIFO, Modupe  Mercy.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"GAZAL, Abiodun samsondeen","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"JIMOH, Rasheedat omowunmi","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"JOHN, Nicholas friday","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"KASIM, Olubukunola abosede","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"KUSIMO, Esther morisola","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"KUYE, Olasunkanmi akeem","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"LAWAL, Olanike Titilayo.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"Mr. OLUGBEWESA,  Alaba akinyemi","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"Mrs. VINCENT-THOMPSO,  Adepeju oluwadamipe","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OGUNADE, Babatunde olaotan","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OGUNNAIKE, Titilope ruth","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OGUNSANYA, Godwin ayodele","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OGUNYEMI, Taiwo david","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OKUBANJO, Gboyega adegoke","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OKUSANYA, Abisola Abiodun.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ONAYEMI, Adebayo ahmed","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OREMADE, Oluwadamilola Modupeola.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OTUBAGA, Adedayo Oyintola.","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OWOLABI, Felix abayomi","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"OYEKOYA, Benjamen olukoya","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"QUADRI, Surajudeen adebola","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"RAHEEM, Toyin kamilu","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"SAULA, Olawale sabintu","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"SEKONI, Oluwatobi ayodele","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"SOFOLUWE, Samson oluwaseun","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"TOGBE, Jimoh daniel","Ijebu Ode Grammar School (Senior), Ijebu Ode",IJEBU ODE
"ADEBOYEJO, Olugbenga patrick","Itamapako High School, Iloti",IJEBU ODE
"ADEKOYA, Yetunde Christianah.","Itamapako High School, Iloti",IJEBU ODE
"AFOLABI, Olufemi johnson","Itamapako High School, Iloti",IJEBU ODE
"AKEJU, Emmanuel banjo","Itamapako High School, Iloti",IJEBU ODE
"ATOYEBI, Modupeola Temitope.","Itamapako High School, Iloti",IJEBU ODE
"BELLO, Ajimot ajokeade","Itamapako High School, Iloti",IJEBU ODE
"ELIAS, Kazeem oluwole","Itamapako High School, Iloti",IJEBU ODE
"Miss ADENUGA,  Adedoyin abosede","Itamapako High School, Iloti",IJEBU ODE
"Mr. BARUWA,  Oluseyi abdul-lateef","Itamapako High School, Iloti",IJEBU ODE
"Mrs. OLUSANWO,  Mojisola odunayo","Itamapako High School, Iloti",IJEBU ODE
"ODUEME, Yemisi oluwadamilola","Itamapako High School, Iloti",IJEBU ODE
"ODUKOYA, Olubusayo Damilola.","Itamapako High School, Iloti",IJEBU ODE
"OLAOYE, Olusola ololade","Itamapako High School, Iloti",IJEBU ODE
"RASAQ, Funmilayo musili","Itamapako High School, Iloti",IJEBU ODE
"SOBANDE, Olugbenga olufemi","Itamapako High School, Iloti",IJEBU ODE
"TELLA, Victoria Anuoluwapo.","Itamapako High School, Iloti",IJEBU ODE
"ADEBAMIRO, Omobolanle victoria","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"ADEBISI, Oluwayemisi Victoria.","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"ADELEYE, Folashade eunice","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"ADENIRAN, Oluwayemisi abosede","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"AJAYI, Joseph ajibola","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"GBOLAHAN, John olusola","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"IGBOKOYI, Oluwakemi abiodun","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"IGUN, Olubukola alice","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"LAWAL, Oluwademilade Zainab.","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"Mrs. ADEJONPE,  Adejoke oluwaseun","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"Mrs. KUYE,  Serifat adenike","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"Mrs. OLUKOYA,  Omolara  O.","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"NIYI-OLAITAN, Oluwabunmi remilekun.a","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"NIYI-OSOBA, Oluranti bolatito","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"ODUWOLE, Anthonia funmilola","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"OGUNLEYE, Olajide alaba","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"OLABISI, Oluwafunke mary","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"OSHIBOGUN, Olubusayo abosede","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"OYELEKE, Abiodun","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"SIYANBOLA, Motunrayo janet","Luba Comp. High School (Junior), Ijebu Ode",IJEBU ODE
"ABULRAHEEM, Ismail Oluwafemi.","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"ADEBANJO, Rasidat opeoluwa","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"AKINSANYA, Rashidat adedoyin","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"APATA, Folasade adebola","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"AROWOLO, Temitayo john","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"AWOGBADE, Tope benjamin","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"AWOYEMI, Adetutu adefunke","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"AYALOMHE, Dorcas oluwatobiloba","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"AZEEZ, Oluwatoyin olubukunola","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"BADEJO, Folashade Florence.","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"BADMUS, Ibrahim olubunmi","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"BALOGUN, Modupe caroline","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"BALOGUN, Omobola Stella.","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"BATURE, Oluwatoyin adeshola","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"FOLARIN, Olubunmi folake","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"IKUEJUWAJO, Kehinde","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"IKUFISILE, Aliyah Motunrayo.","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"KUKU, Mistura oluwatoyin","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"KUSIMO, Olalekan ademola","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"Mr. SALAMI,  Omololu ololade","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"Mrs. YOMI-AKINDE,  Adejumoke maryam","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"OGUNBIYI, Olugbenga Israel.","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"OGUNNUBI, Mojisola olayinka","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"OKUNOWO, Modupe adebowale","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"OLADESU, Titilayo","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"OLAOYE, Paul odunayo","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"OREYEMI, Abosede abiola","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"OSHIYEMI, Aderonke Oluwaseun.","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"SULAIMAN, Adeyemi justina","Luba Comp. High School (Senior), Ijebu Ode",IJEBU ODE
"ABDUL-IBRAHIM, Mopelola latifat","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ABOLAJI, Roseline iyabode","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEBAJO, Victoria adefolake","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEBANJO, Oluranti atinuke","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEFUYE, Olayinka temitope","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ADELEYE, Fatimoh Oluwakemi.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEYEMI, Olayinka bukunola","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"AWONIYI, Modupe adenike","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"BADMUS, Omodolapo Falilat.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"BADRU, Iyabode ibijoke","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"BAKARE, Subomi Aminat.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"BAKARE, Victoria oluwafunmilayo","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"BARIU, Adetayo","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"BULUGBE, Oloruntola aliu","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"GBADAMOSI HASSAN, Moshood adesina","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"IDOWU, Esther temitope","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"MUSA, Temitope Risquat.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"Mrs. ODUNSI,  Omoololade  O.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"OGIDI, Celestina chikeremma","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"OGUNNAIKE, Shalom Abisola.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"OLANREWAJU, Ruth Arinola.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"OLUWOLE, Oluwaseyi Abiodun.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"OSIBOYEJO, Deborah aanu","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"OSIDE, Oluwaseyi busola","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"QUADRI, Saula muhammed","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ROBIU, Moryam iyabode","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"SALAKO, Idayat Oluwakemi.","Molipa High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEKEYE, Idowu oluwaseun","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"ADELAJA, Dorcas bamigbe","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"ADETONA, Adeyemi mercy","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"AGUNBIADE, Deborah abiodun","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"ALIYU, Kafayat arike","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"ANIFOWOSE, Olubunmi deborah","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"ANIMASAUN, Ibrahim adewale","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"AYEYUN, Titilope Olusola.","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"BANJOKO, Folasade abiodun","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"DESMENNU, Olayinka omotola","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"FASHINA, Ayomikun opeoluwa","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"GANNA, Olugbenga enoch","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"IDOWU, Abosede oluyemisi","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"KEHINDE, Fausat mopelola","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"KUKU, Sakiru adewale","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"Mrs. ADEOLA,  Christianah","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"Mrs. ODULAJA,  Bunmi ruth adesola","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"Mrs. OLAYEMI,  Grace abosede","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"OGUNNAIKE, David toluwalase","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"ONIFADE, Gbenga solomon","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"POPOOLA, Florence abosede","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"SALIU, Mulikat olaniyi","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"SAROMI, Sakirat ifedayo","Molipa High School (Senior), Ijebu-Ode",IJEBU ODE
"ABIDOYE, Oluwabusolami Ramotalai.","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEBANJO, Sakirat abolore","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"ADERIBIGBE, Victoria olurunnigbani","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"ADETOLA, Julianah ebunola","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"ADETONA-ODEBUNMI, Nuratu adesola","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"ADEWALE, Afusat atinuke","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"AKINYELE, Olanike Oluyemisi.","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"AWOKOYA, Serah oluwasekemi","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"BAKRE, Abiola  seidat","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"BULUGBE, Kazeem abiodun","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"DIXON, Mojisola muinat","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"DUROJAIYE, Mutiat modupeola","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"EMILOLA-GAZAL, Olusola oluwakemi","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"FABUSUYI, Samuel ojo","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"GBOGIARAN, Mary oluwatoyin","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"HASSAN, Aribike oluwayemisi","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"IGBEKELE, Olabanji joseph","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"IGUEAKPORO, Oluwakemi ayopo","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"KELANI, Wasiu adewale","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"KOLADE, Elizabeth yetunde","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"Mr. ADEBAYO,  Yusuff adedayo","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"Mr. OMINUGA,  Adegbenga oluremi","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"Mrs. ODUWOLE,  Fausat oluwakemi","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"ODUKOYA, Ademorin omotayo","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"OGUNNAIKE, Oreofe oluwaseun","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"OGUNYINKA, Comfort afolake","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"OLAITAN, Grace opeoluwa","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"OLUBORI, Olubunmi oluwaseun","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"OLUTUSIN, Abdul lateef olakuleyin","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"OLUWADIYA, Olufunmilayo titilayo","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"POPOOLA-BELLO, Zulfah Oladayo.","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"QUADRI, Fausat olajumoke","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"RAMON, Abimbola muniru","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"SHONUBI, Olubunmi folashade","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"SHUAIB, Adejoke nosimot","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"SULE-ADAMS, Sakirat olubukola","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"TAIWO, Odunayo olorunfunmi","Moslem Comp. High School (Junior), Ijebu-Ode",IJEBU ODE
"ABDULMOJEED, Atinuke omosewa","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEBANJO, Olulolope omolara","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEDIPE, Oluwakemi khadijat","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ADENUGA, Bose racheal","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ADESANYA, Akeem adesegun","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEYEMI, Titilayo ibiyemi","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"AKANMIDU, Elizabeth mopelola","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"AYENI, Monsuru kayode","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"AYENI, Oluwaseun Abisayo.","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"BAKRE, Ismail","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"BALOGUN, Buhari kayode","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"BALOGUN, Sakiru olatunji","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"BUSARI, Salami olusegun","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"JEGEDE, Maurice Sunday.","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"KAJERO, Olasunkanmi bethy","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"KAWOJUE, Olajide musa","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"MUSTAPHA, Afis omotayo","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"Mrs. OLAITAN,  Shalom bolajoko","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"Mrs. OYENIYI,  Esther adedoyin","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ODUNOWO, Olubunmi olusola","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ODUSOLA, Nurain Adebola.","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ODUTAYO, Tawakalitu Temitope.","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"OGUNBADEWA, Joseph muyiwa","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"OSOBA, Morayo Grace.","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"RABIU, Saliu akanbi","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"SOETAN, Seye opeyemi","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"TAIWO, Olalekan emmanuel","Moslem Comp. High School (Senior), Ijebu-Ode",IJEBU ODE
"ADEBAYO, Modupe funmi","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"ADENIRAN, Idowu ronke","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"ADESHINA, Racheal bukola","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"ADEYEMI, Olujimi adekunle","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"AJAYI, Adenike Rachael.","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"AJAYI, Remilekun iyabode","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"AYOOLA, Folasade mary","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"BADMUS, Titilope olayinka","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"DAWODU, Iyabode Adebukonla.","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"EKUNDAYO, Omolara yinka","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"HAMZAT, Adedayo tawa","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"KUKOYI, Moses oludele","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"MICHAEL, Esther omotayo","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"Mrs. ADEYEMO,  Taiwo naimat","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"Mrs. OGUNNAIKE,  Anota atinuke","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"ODEDE, Fausat iyabo","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"ODUFADE, Aderonke olubunmi","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"ODUNSI, Opeoluwa busurat","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"OGUNKOYA, Akinyemi kola","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"OJUOWO, Abosede olufunke","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"OLUKOGA, Khadijat wemimo","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"OSONAIKE, Abosede  olufemi","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"PETER, Comfort oluyemisi","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"SHODE, Tamuramat Mayowa.","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"SOKEFUN, Temitope titilola","Muslim Girls High Sch. (Junior), Ijebu Ode",IJEBU ODE
"ADEBISI, Odunmoluwa khadijat","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"AJAYI, Zainab abike","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"ASENUGA, Adesola oluwatoyin","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"BANJO, Olusola afoluke","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"BANWO, Olubukonla yetunde","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"FADAHUNSI, Tolulope modupe","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"FAYEMI, Mulikat olayinka","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"IDADA, Olubunmi Olufunmilayo.","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"KAREEM, Azeez abiodun","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"KUKU, Aminat Oluwakemi.","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"KUKU, Mosunmola Alaba.","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"Mr. ADEBISI,  Adeoye micheal","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"Mrs. ABIOLA,  Elizabeth oluyinka","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"Mrs. ISMAIL,  Rasheedat  adesola","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"ODUSOLE, Oyinade olubunmi","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"OGUNDELE, Tawakalit olubunmi","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"OGUNKOYA, Adejoke adenike","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"OJUOLA, Maryam omolola","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"ONABOTE, Olufunmilayo odunayo","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"ONASANYA, Omololu idiat","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"OSENI, Olayinka adijat","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"OYEBOWALE, Rasheedah oluremi","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"QUADRI, Oluwakemi christanah","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"SEUN-SALISU, Adesola olumuyiwa","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"TANIMONURE, Odunayo oluseyi","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"YUSUF, Akeem ademola","Muslim Girls High School, Ijebu-Ode",IJEBU ODE
"ADELAJA, Selimot Abosede.","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"ADENUGA, Victoria o. Oladele.","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"HASSAN, Monsurat adeyinka","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"IWALOYE, Lukman olajide","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"LAWAL, Mariam Telin.","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"Mrs. ADEBANJO,  Afolashade olufunke","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"Mrs. JOKOTAGBA,  Dorcas ibironke","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"NASIRU, Rafiu Ayinla.","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"ODUYEMI, Oluwatomisin Christopher.","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"OLUSANYA, Adeoye bankole","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"RAJI, Agnes temitayo","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"ROSHULU, Silifat ajoke","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"TAIWO, Ajibola samuel","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"TONUEYI, Lois Sena.","Obafemi Awolowo Comp. High School, Odonoko",IJEBU ODE
"ABIODUN-YISA, Adetoun Oluwakemi.","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ADEEKO, Opeyemi Aminat.","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ADELAJA, Rukayat Atinuke.","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ADENAIKE, Cecilia adefolake","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ADEYEMI, Festus kayode","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"AJAYI, Catherine ololade","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"AKINBOBOYE, Yemisi  Bisoye.","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ASHIRU, Adenike omoyemi","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ASUKWO, Hannah temitope","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"GANA, Adebisi dorcas","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"IFESANWO, Solomon adedayo","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"IGBOSANU, Titilope adenike","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"JEJE, Olubunmi morohunkeji","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"JOSEPH, Omobowale olusegun","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"KASSIM, Ganiyat taiwo","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"KOSOLU, Samson idowu","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"KUKU, Adesola adesewa","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"Mrs. ADEYEMI,  Taiwo olukemi","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"Mrs. BOROGUN,  Adeola odunayo","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"NOLA, Yetunde oreoluwa","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"OGUNLEYE, Theresa adenike","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"OJAJUNI, James adeleke","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"OKEBULE, Mary oluwabunmi","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"OLANREWAJU, Adesola modupe","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"OLUSOGA, Adesola tawakalitu","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ONIKOSI, Abiodun olalekan","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"SALAMI, Opeyemi adebukola","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"SANNI, Omolara olasimbo","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"SULAIMAN, Damilola serifat","Our Lady Of Apostles Secondary School (Junior), Ijebu Ode",IJEBU ODE
"ADAMSON, Abimbola Kazeem.","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ADEBISI, Adijat idowu","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ADEBISI, Kashimawo  abiodun","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ADEKOGBE, Anthony adeyori","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ADELOWO, Adenike seyilayo","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ADENIYI, Temitope Motunrayo.","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ADETONA, Adeola olufunto","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ADEYEYE, Omoyemi adunni","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"AJAYI, Serifat omolara","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"AWOYEMI, Adetutu adeola","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"BAKARE, Adeniran jamiu","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"DADA, Olusesan Victor.","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"FALUJO, Risikat motunrayo","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"IDRIS, Edith Victoria.","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"IDRIS, Kuburat adenike","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"IFEGBESAN, Omowunmi mary","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"KESHINRO, Omolara busayo","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"Mr. ADEEKO,  Abdul  lateef","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"Mrs. ATITEBI,  Temitope mariam","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"Mrs. AYANGADE,  Florence olusola","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"Mrs. ONATAYO,  Taiwo olubunmi","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OBAYOMI, Abiodun adeniyi","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OGUNADE, Ademiluyi adedamola","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OGUNDIPE, Michael babawale","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OLANREWAJU, Gbolahan sunday","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OLUKOKO, Olorunwa olusegun","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OLUSANYA, Adejumoke Kadijat.","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OLUSANYA, Oluwayomi funto","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OSIYEMI, Adebimpe adedayo","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OSIYEMI, Adefunke adeola","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OSUNKOYA, Modupe Janet.","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"OTUTULORO, Kafayat Kehinde.","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"POPOOLA, Omotunde olubukonla","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"SOMADE, Idiat iyabo","Our Lady Of Apostles Secondary School (Senior), Ijebu Ode",IJEBU ODE
"ABIODUN, Temitope Abayomi.","Ajagbe High School,Iperu",IKENNE
"ADEWOLE, Victoria Oluwaseyi.","Ajagbe High School,Iperu",IKENNE
"AKINPELU, Gbemileke oluwaseun","Ajagbe High School,Iperu",IKENNE
"AKINSEMOYIN, Olabisi olusolakunmi","Ajagbe High School,Iperu",IKENNE
"DEMEHIN, Kehinde .g.","Ajagbe High School,Iperu",IKENNE
"ESE, Oluwaseun abosede","Ajagbe High School,Iperu",IKENNE
"JESUKOYA, Temitope Olaoluwa.","Ajagbe High School,Iperu",IKENNE
"Mr. BAMMEKE,  Aderemi olalekan","Ajagbe High School,Iperu",IKENNE
"Mr. OYEBANJO,  Amos olusegun","Ajagbe High School,Iperu",IKENNE
"OLUBOWALE, Abiodun patrick","Ajagbe High School,Iperu",IKENNE
"OLUKOYA, Adesina olamide","Ajagbe High School,Iperu",IKENNE
"ONABOWALE, Emmanuel olugbenga","Ajagbe High School,Iperu",IKENNE
"OSOYEMI, Ayodele olusegun","Ajagbe High School,Iperu",IKENNE
"OYETESU, Kolawole isaac","Ajagbe High School,Iperu",IKENNE
"ABIODUN, Titilayo Olayinka.","Akesan Community Grammar School,Iperu",IKENNE
"ADEBOWALE, Moriamo abiodun","Akesan Community Grammar School,Iperu",IKENNE
"AINA, Taiwo omoniyi","Akesan Community Grammar School,Iperu",IKENNE
"AKINBOWALE, Jamiu moses","Akesan Community Grammar School,Iperu",IKENNE
"AMADU, Christianah mojisola","Akesan Community Grammar School,Iperu",IKENNE
"AWOYEMI, Kofoworola abosede","Akesan Community Grammar School,Iperu",IKENNE
"BAMIDELE, Oluwatoyin modupe","Akesan Community Grammar School,Iperu",IKENNE
"HASSAN, Falilat Gbeminiyi.","Akesan Community Grammar School,Iperu",IKENNE
"KASALI, Aderonke afusat","Akesan Community Grammar School,Iperu",IKENNE
"MEJULE, Bilikisu abiodun","Akesan Community Grammar School,Iperu",IKENNE
"MUSTAPHA, Olajumoke motunrayo","Akesan Community Grammar School,Iperu",IKENNE
"Mr. AKINBOWALE,  Adeyinka oluwole","Akesan Community Grammar School,Iperu",IKENNE
"Mr. ASIRU,  Adesina musliudeen","Akesan Community Grammar School,Iperu",IKENNE
"Mrs. AFOLABI,  Modupe olayemi","Akesan Community Grammar School,Iperu",IKENNE
"Mrs. TAIWO,  Olayinka kudirat","Akesan Community Grammar School,Iperu",IKENNE
"ODUBIRO, Mojisola Olufunke.","Akesan Community Grammar School,Iperu",IKENNE
"OGUNDEKO, Oluwakemi ebun","Akesan Community Grammar School,Iperu",IKENNE
"OGUNFOWOTE, Sunday thompson","Akesan Community Grammar School,Iperu",IKENNE
"OGUNLEYE, Saheed olalekan","Akesan Community Grammar School,Iperu",IKENNE
"OGUNNEYE, Anota olufunmilayo","Akesan Community Grammar School,Iperu",IKENNE
"OGUNSIMBO, Oluwatayo janet","Akesan Community Grammar School,Iperu",IKENNE
"OGUNYELU, Silifat modupe","Akesan Community Grammar School,Iperu",IKENNE
"OLALEKAN, Mercy bosede","Akesan Community Grammar School,Iperu",IKENNE
"SOFOLA, Ireti Majemu.","Akesan Community Grammar School,Iperu",IKENNE
"SOTUBO, Modinat abosede","Akesan Community Grammar School,Iperu",IKENNE
"YUSUF, Oluseye ayodele","Akesan Community Grammar School,Iperu",IKENNE
"ADEDIGBA, Olukemi abisola","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ADEFULU, Mary adejoke","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ADESINA, Omotoyosi omolade","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ADEWUSI, Kayode Samuel.","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"AKINTOLA, Oluwatumininu Tolani.","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ALUKO-OGUNNUPEBI, Bolaji","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"AWODERU, Adeola alice","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"FADIPE, Oluwatomilola adeola","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"HASSAN, Ibrahim olaoluwa","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"KUJEBE, Omotoyosi yetunde","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"Mr. SORUNGBE,  Ajibola jonathan","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"Mr. TIAMIYU,  Wasiu oladaride","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ODUESO, Micheal olumakinde","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ODUMALA, Temitayo sariu","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"OJELABI, Bukunola fatimat","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"OLABODE, Anuoluwatomiwa Lydia.","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"OLUKOYA, Olajide kemi","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ONABOWALE, Abiodun oketayo","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ONAJOBI, Hakeem olaseni","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ONAJOBI, Oluwakemi kaosara","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"SUNMONU, Adetoun adesoji","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"TAIWO, Olufemi tobi","Christ Apostolic Grammar School (Junior),Iperu",IKENNE
"ABDULSALAM, Hanata Omotoke.","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"ADEBOYEJO, Ololade theresa","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"ALEBIOSU, Akeem olatunji","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"ARULEBA, Bamidele olubunmi","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"AWODEIN, Michael olusola","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"BAKARE, Omowunmi adetoun","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"Mr. AWOJOBI,  Joseph oluwasegun","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"Mr. KUTI,  Olujide adedamilola","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"Mrs. AKINDURO,  Oluchi susan","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"ODUGBEMI, Christianiah oluwakemi","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"OKULALU, Olufemi timothy","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"OKUNOLA, Cecilia Odunola.","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"ORE-OFE, Olaniyi samson busayo","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"OREMOSU, Oluwakemi lucia","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"OTUSAJO, Adesola oluyemisi","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"PATRICK, Richard onoride","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"SHITTU, Lateef abiodun","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"SOFUWA, Nureni abiodun","Christ Apostolic Grammar School(Senior),Iperu",IKENNE
"ADEGBENRO, Nnenna monica","Ikenne Community High School(Junior), Ikenne",IKENNE
"ADELAJA, Sarafa adekunle","Ikenne Community High School(Junior), Ikenne",IKENNE
"AFOLABI, Mosunmola Aanuoluwapo.","Ikenne Community High School(Junior), Ikenne",IKENNE
"ALADEYEHUN, Elizabeth oluwayemisi","Ikenne Community High School(Junior), Ikenne",IKENNE
"AWOYOMI, Adekunle olusoga","Ikenne Community High School(Junior), Ikenne",IKENNE
"BADEJO, Abiodun Solomon.","Ikenne Community High School(Junior), Ikenne",IKENNE
"DADA, Felix taiwo","Ikenne Community High School(Junior), Ikenne",IKENNE
"Mr. AINA,  Adefela olatoye","Ikenne Community High School(Junior), Ikenne",IKENNE
"ODUBOTE, Oluwatoyin risikat","Ikenne Community High School(Junior), Ikenne",IKENNE
"OGUNJIMI, Funmilayo bunmi","Ikenne Community High School(Junior), Ikenne",IKENNE
"OGUNLESI, Kazeem Oluwagbenga.","Ikenne Community High School(Junior), Ikenne",IKENNE
"OGUNNOIKI, Abidemi Sheriff.","Ikenne Community High School(Junior), Ikenne",IKENNE
"OLADEPO, Moromoke modasola","Ikenne Community High School(Junior), Ikenne",IKENNE
"OLAKOJO, Oladimeji","Ikenne Community High School(Junior), Ikenne",IKENNE
"OLUSINA, Dorcas afolake","Ikenne Community High School(Junior), Ikenne",IKENNE
"OPATIMEHIN, Bunmi Motunrayo.","Ikenne Community High School(Junior), Ikenne",IKENNE
"OSINUGA, Felicia olaoluwa","Ikenne Community High School(Junior), Ikenne",IKENNE
"SANUSI, Olatunji  abdulrafiu","Ikenne Community High School(Junior), Ikenne",IKENNE
"SIMISAYE, Adebola abiola","Ikenne Community High School(Junior), Ikenne",IKENNE
"SOGUNWA, Olakelan samuel","Ikenne Community High School(Junior), Ikenne",IKENNE
"SOKOYA, Temitope Anuoluwapo.","Ikenne Community High School(Junior), Ikenne",IKENNE
"AINA, Esther adetutu","Ikenne Community High School(Senior), Ikenne",IKENNE
"AKINTOLA, Aishat Omowunmi.","Ikenne Community High School(Senior), Ikenne",IKENNE
"ALIMI, Awawu bosede","Ikenne Community High School(Senior), Ikenne",IKENNE
"ALLISON, Olajimi jamiu","Ikenne Community High School(Senior), Ikenne",IKENNE
"AWOSANYA, Oluwole ezekiel","Ikenne Community High School(Senior), Ikenne",IKENNE
"BELLO, Hakeem adebayo","Ikenne Community High School(Senior), Ikenne",IKENNE
"KOLAWOLE, Aramide rebecca","Ikenne Community High School(Senior), Ikenne",IKENNE
"Mr. OGUNTOYE,  Hezekiah okanlawon","Ikenne Community High School(Senior), Ikenne",IKENNE
"NJOKU, Hyginus uzoma","Ikenne Community High School(Senior), Ikenne",IKENNE
"ODETOLA, Abosede yetunde","Ikenne Community High School(Senior), Ikenne",IKENNE
"OLABIRAN, Kehinde Adedayo.","Ikenne Community High School(Senior), Ikenne",IKENNE
"OLAYINKA, Adesola Opeoluwa.","Ikenne Community High School(Senior), Ikenne",IKENNE
"ONAKOYA, Risikat adepeju","Ikenne Community High School(Senior), Ikenne",IKENNE
"ONATOLA, Sakirat motunrayo","Ikenne Community High School(Senior), Ikenne",IKENNE
"SALAMI, Oluwasola basrot","Ikenne Community High School(Senior), Ikenne",IKENNE
"SIMISAYE, Kazeem daniel","Ikenne Community High School(Senior), Ikenne",IKENNE
"ADETAYO, Yetunde Feyisayo.","Ilisan High School (Junior),Ilishan",IKENNE
"AKINYIGA, Oluwatoyin omotola","Ilisan High School (Junior),Ilishan",IKENNE
"ATANDA, Sikiru ayoola","Ilisan High School (Junior),Ilishan",IKENNE
"BANJO, Adetutu Adebambo.","Ilisan High School (Junior),Ilishan",IKENNE
"MAKINDE, Gbolagun","Ilisan High School (Junior),Ilishan",IKENNE
"Mrs. TALABI,  Victoria oluyemisi","Ilisan High School (Junior),Ilishan",IKENNE
"OBAJIMI, Emmanuel Damilare.","Ilisan High School (Junior),Ilishan",IKENNE
"OBASANMI, Fausat keji","Ilisan High School (Junior),Ilishan",IKENNE
"ODUNEYE, Feyi muyiwa","Ilisan High School (Junior),Ilishan",IKENNE
"OGUNNIYI, Abosede rachael","Ilisan High School (Junior),Ilishan",IKENNE
"ONAJOBI, Abiola Arinola.","Ilisan High School (Junior),Ilishan",IKENNE
"ORESANYA, Oluwatoyin adegboyega","Ilisan High School (Junior),Ilishan",IKENNE
"SOGUNWA, Foluso mayowa","Ilisan High School (Junior),Ilishan",IKENNE
"ABDUL, Olayinka adetola","Ilisan High School(Senior),Ilishan",IKENNE
"ABDUL, Yekini oludayo","Ilisan High School(Senior),Ilishan",IKENNE
"ADEJIMI, Babatunde adewale","Ilisan High School(Senior),Ilishan",IKENNE
"ADEKOYA, Olukemi oludele","Ilisan High School(Senior),Ilishan",IKENNE
"ADEOTI, Folakemi Elizabeth.","Ilisan High School(Senior),Ilishan",IKENNE
"AGBESANWA, Funmilola abiye","Ilisan High School(Senior),Ilishan",IKENNE
"ALAWODE, Kabiru olutunde","Ilisan High School(Senior),Ilishan",IKENNE
"AMOS, Eliphus Bolanle.","Ilisan High School(Senior),Ilishan",IKENNE
"BAKARE, Robiat modupe","Ilisan High School(Senior),Ilishan",IKENNE
"EPOYUN, Mulikat adebimpe","Ilisan High School(Senior),Ilishan",IKENNE
"GBOLAHAN, Folake Adepeju.","Ilisan High School(Senior),Ilishan",IKENNE
"IDOWU, Raliat yewande","Ilisan High School(Senior),Ilishan",IKENNE
"Mrs. ADEBAYO,  Afolake oluyemi","Ilisan High School(Senior),Ilishan",IKENNE
"Mrs. SIMISAYE,  Ruth tolulope","Ilisan High School(Senior),Ilishan",IKENNE
"ODULANA, Taiwo olutola","Ilisan High School(Senior),Ilishan",IKENNE
"ODUNAIKE, Mercy olufunke","Ilisan High School(Senior),Ilishan",IKENNE
"ODUSINA, Mary ayoola","Ilisan High School(Senior),Ilishan",IKENNE
"ODUSOGA, Afolashade Abosede.","Ilisan High School(Senior),Ilishan",IKENNE
"ONADIPE, Adenike arinola","Ilisan High School(Senior),Ilishan",IKENNE
"ONAJOBI, Ajibola tomilola","Ilisan High School(Senior),Ilishan",IKENNE
"ORESANYA, Adunola fatimat","Ilisan High School(Senior),Ilishan",IKENNE
"OTESILE, Abiola funmilayo","Ilisan High School(Senior),Ilishan",IKENNE
"OYELEDUN, Oyindamola adebisi","Ilisan High School(Senior),Ilishan",IKENNE
"UZOMA, Onaome hannah","Ilisan High School(Senior),Ilishan",IKENNE
"YUSUF, Fatiman adetoun","Ilisan High School(Senior),Ilishan",IKENNE
"ADENIJI, Kehinde Omolade.","Irolu Community High School,Irolu",IKENNE
"ADESOKAN, Olawunmi serah","Irolu Community High School,Irolu",IKENNE
"AUDU, Gandu Sunday.","Irolu Community High School,Irolu",IKENNE
"AYODELE, Felicia temitope","Irolu Community High School,Irolu",IKENNE
"Mr. ADEYIGA,  Ademola alexander","Irolu Community High School,Irolu",IKENNE
"Mrs. ADEKOYA,  Iyabo ibidapo","Irolu Community High School,Irolu",IKENNE
"Mrs. ODEDIRAN,  Morolayo rachael","Irolu Community High School,Irolu",IKENNE
"OLANIYAN, Risikat olawunmi","Irolu Community High School,Irolu",IKENNE
"OLAYODE, Temitope Tunde.","Irolu Community High School,Irolu",IKENNE
"ONASOGA, Oluwaseun Temilola.","Irolu Community High School,Irolu",IKENNE
"SOKUNLE, Owoyemi olugbenga","Irolu Community High School,Irolu",IKENNE
"ADEBAYO, Mulikat arike","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"AKANBI, Oluwaseyi aina","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"BANJO, Sunday","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"LAWAL, Mutiat Adeola.","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"Mrs. ADEMUYIWA,  Adebukola christianah","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"OGUNLEYE, Ganiat","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"OPAYEMI, Ayodeji Oluwatosin.","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"ORENAYA, Hassanat Taiwo.","Isanbi Comprehensive High School (Junior),Ilishan",IKENNE
"ABIMBOLA, Olubukola olusayo","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"ADEBAYO, Abisola olabisi","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"ADESANYA, Olatunde Caroline.","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"AWOSANYA, Aderonke morayoade","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"BANKOLE, Abidemi temilola","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"HABEEB, Omolola elizabeth","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"IDOWU, Kikelomo","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"ODUMOSU, Oluwadaisi oladimeji","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"OGUNLEYE, Adesola","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"OLADOKUN, Raphael olagoke","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"OLALERE, Olabode Joel.","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"OLANIPEKUN, Feyisayo abosede","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"OMOLEYE, Iyabo abiodun","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"ONADIPE, Rotimi damilare","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"OPEBIYI, Maria Funke.","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"OYEFESO, Olabanji olalekan","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"SONUGA, Kolawole Adeyinka.","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"TOLORUNLOGO, Elizabeth Olayinka.","Isanbi Comprehensive High School(Senior),Ilishan",IKENNE
"ABIMBOLA, Seun olukorede","Mayflower School (Junior),Ikenne",IKENNE
"ADEGOKE, Maria adenike","Mayflower School (Junior),Ikenne",IKENNE
"ADENUGA, Tawakalt omowunmi","Mayflower School (Junior),Ikenne",IKENNE
"ADEOYE, Adejoke deborah","Mayflower School (Junior),Ikenne",IKENNE
"ADETOLA, Oluwatoyin temitope","Mayflower School (Junior),Ikenne",IKENNE
"AJAYI, Adebukola hashimiu","Mayflower School (Junior),Ikenne",IKENNE
"AKINDE, Olusegun phillip","Mayflower School (Junior),Ikenne",IKENNE
"AYOPO-SOMEFUN, Olutunke mary","Mayflower School (Junior),Ikenne",IKENNE
"DIYAOLU, Serifat abosede","Mayflower School (Junior),Ikenne",IKENNE
"GISANRIN, Oyeyemi bolanle","Mayflower School (Junior),Ikenne",IKENNE
"IPAYE, Adeniyi olalekan","Mayflower School (Junior),Ikenne",IKENNE
"MALIK, Tawakalit abiola","Mayflower School (Junior),Ikenne",IKENNE
"METILELU, Rebecca temitope","Mayflower School (Junior),Ikenne",IKENNE
"MOYEBI, Adeyinka omowunmi","Mayflower School (Junior),Ikenne",IKENNE
"OGUNADE, Adefolakemi yetunde","Mayflower School (Junior),Ikenne",IKENNE
"OGUNTADE, Elizabeth bolanle","Mayflower School (Junior),Ikenne",IKENNE
"OKOYO, Charity charles a","Mayflower School (Junior),Ikenne",IKENNE
"OLATUNJI, Banji soji","Mayflower School (Junior),Ikenne",IKENNE
"OLUBOWALE, Folake adeshola","Mayflower School (Junior),Ikenne",IKENNE
"OYEBANJO, Bolanle olawale","Mayflower School (Junior),Ikenne",IKENNE
"SOMADE, Oluwakemi esther","Mayflower School (Junior),Ikenne",IKENNE
"TELUFUSI, Saida oluwakemi","Mayflower School (Junior),Ikenne",IKENNE
"ABDUL, Kazeem oluwasegun","Mayflower School (Senior),Ikenne",IKENNE
"ADEDOKUN, Olufunmilayo olubunmi","Mayflower School (Senior),Ikenne",IKENNE
"ADEFESO, Omowunmi abidemi","Mayflower School (Senior),Ikenne",IKENNE
"ADELAJA, Adedayo olubunmi","Mayflower School (Senior),Ikenne",IKENNE
"ADENAIYA, Olubusola mofolusho","Mayflower School (Senior),Ikenne",IKENNE
"ADESANWO, Francis oludare","Mayflower School (Senior),Ikenne",IKENNE
"ADESANWO, Wemimo Elizabeth.","Mayflower School (Senior),Ikenne",IKENNE
"ADEYEMI, Oluwaseyi adenike","Mayflower School (Senior),Ikenne",IKENNE
"ADEYIGA, Olawunmi motunrayo","Mayflower School (Senior),Ikenne",IKENNE
"AHMED, Fausast adeola","Mayflower School (Senior),Ikenne",IKENNE
"AKINYEMI, Solomon ayinla","Mayflower School (Senior),Ikenne",IKENNE
"AMODU, Emmanuel ilemona","Mayflower School (Senior),Ikenne",IKENNE
"AWOSANYA, Olusola moses","Mayflower School (Senior),Ikenne",IKENNE
"AWOYEMI, Olusegun gbenga","Mayflower School (Senior),Ikenne",IKENNE
"AWOYOMI, Adesewa oluwabunmi","Mayflower School (Senior),Ikenne",IKENNE
"EGBE, Adenike abiodun","Mayflower School (Senior),Ikenne",IKENNE
"ELEKE, Amaechi folorunsho","Mayflower School (Senior),Ikenne",IKENNE
"ESSIEN, Oluwabunmi oyepero","Mayflower School (Senior),Ikenne",IKENNE
"JOSEPH, Abel bamidele","Mayflower School (Senior),Ikenne",IKENNE
"KOYI, Risikat mosunmola","Mayflower School (Senior),Ikenne",IKENNE
"MOHAMMED, Nurat olabisi","Mayflower School (Senior),Ikenne",IKENNE
"Mrs. NWAHIRI,  Chidi ursula","Mayflower School (Senior),Ikenne",IKENNE
"Mrs. OHUNENISE,  Omolola olabowale","Mayflower School (Senior),Ikenne",IKENNE
"ODEBIYI, Oluwatoyin risikat","Mayflower School (Senior),Ikenne",IKENNE
"OGUNLEYE, Soga johnson","Mayflower School (Senior),Ikenne",IKENNE
"OLAKOKUN, Oyinade olubusola","Mayflower School (Senior),Ikenne",IKENNE
"OLANIPEKUN, Adeyinka fedelia","Mayflower School (Senior),Ikenne",IKENNE
"OLANIPEKUN, Oladele kehinde","Mayflower School (Senior),Ikenne",IKENNE
"OREPITAN, Adetutu omowonuola","Mayflower School (Senior),Ikenne",IKENNE
"OWOEYE, Emmanuel omowumi","Mayflower School (Senior),Ikenne",IKENNE
"OYEBAMIJI, Philemon","Mayflower School (Senior),Ikenne",IKENNE
"OYELEKE, Esther  Funmilayo.","Mayflower School (Senior),Ikenne",IKENNE
"PATRICK, Kafayat abimbola","Mayflower School (Senior),Ikenne",IKENNE
"RAHEEM, Grace funmilayo","Mayflower School (Senior),Ikenne",IKENNE
"SONUGA, Olanrewaju akeem","Mayflower School (Senior),Ikenne",IKENNE
"SONUGA, Temitope yeside","Mayflower School (Senior),Ikenne",IKENNE
"SUNDAY, Adebayo emmanuel","Mayflower School (Senior),Ikenne",IKENNE
"TELUFUSI, Tajudeen omowunmi","Mayflower School (Senior),Ikenne",IKENNE
"ADEBOYE, Johnson babajide","Ogere Community High School,Ogere",IKENNE
"ADEFEMI, Kehinde roseline","Ogere Community High School,Ogere",IKENNE
"AKINADE, Titilola Bukola.","Ogere Community High School,Ogere",IKENNE
"AKINTOLA, Oluwadayo temitope","Ogere Community High School,Ogere",IKENNE
"AKPAN, Eno edet","Ogere Community High School,Ogere",IKENNE
"ALABI, Olubukanla","Ogere Community High School,Ogere",IKENNE
"AWOLESI, Omobowale abiodun","Ogere Community High School,Ogere",IKENNE
"BABALOLA, Patience alice","Ogere Community High School,Ogere",IKENNE
"IREWUNMI, Ibukun Bukky.","Ogere Community High School,Ogere",IKENNE
"JIMOH, Joy Toochukwu.","Ogere Community High School,Ogere",IKENNE
"KOMOLAFE, Omolara ronke","Ogere Community High School,Ogere",IKENNE
"OMOSANYA, Oluwaseye yemisi","Ogere Community High School,Ogere",IKENNE
"OSIKOYA, Ekundayo oluremi","Ogere Community High School,Ogere",IKENNE
"OYEWUNMI, Fatimah yetunde","Ogere Community High School,Ogere",IKENNE
"SOSANYA, Olajumoke Olayemi.","Ogere Community High School,Ogere",IKENNE
"ALIU, Moruf olaniyi","Ositelu Memorial College (Junior),Ogere",IKENNE
"DADA, Morufu Okeowo.","Ositelu Memorial College (Junior),Ogere",IKENNE
"IKUEPENIKAN, Stella tale","Ositelu Memorial College (Junior),Ogere",IKENNE
"MORENIKEJI, Esther olubukola","Ositelu Memorial College (Junior),Ogere",IKENNE
"Mrs. OSIKOYA,  Rasidat lanre","Ositelu Memorial College (Junior),Ogere",IKENNE
"OGUNNUSI, Zainab wale","Ositelu Memorial College (Junior),Ogere",IKENNE
"ONYEKA, Folasade Fausat.","Ositelu Memorial College (Junior),Ogere",IKENNE
"ORELAJA, Adesola kemi","Ositelu Memorial College (Junior),Ogere",IKENNE
"AJAYI, Abosede","Ositelu Memorial College (Senior),Ogere",IKENNE
"AJIFERUKE, Lawrence bayo","Ositelu Memorial College (Senior),Ogere",IKENNE
"FADIMU, Sunday David.","Ositelu Memorial College (Senior),Ogere",IKENNE
"Mrs. MOSES,  Elizabeth olubunmi","Ositelu Memorial College (Senior),Ogere",IKENNE
"OGUNBUNMI, Aderemi ajao","Ositelu Memorial College (Senior),Ogere",IKENNE
"RABIU, Adijat toyosi","Ositelu Memorial College (Senior),Ogere",IKENNE
"SHODA, Kamorudeen olalekan","Ositelu Memorial College (Senior),Ogere",IKENNE
"ADEBAYO, Oluwaseun Atinuke.","United High School (Junior),Ikenne",IKENNE
"ALLISON, Modinat adeleye","United High School (Junior),Ikenne",IKENNE
"BADEJO, Adeola olubusola","United High School (Junior),Ikenne",IKENNE
"GBADEGESIN, Oluyinka folakemi","United High School (Junior),Ikenne",IKENNE
"IDOKO, Yetunde opeyemi","United High School (Junior),Ikenne",IKENNE
"JIMOH, Nasiru dada","United High School (Junior),Ikenne",IKENNE
"Mr. IDOWU,  Peter olalekan","United High School (Junior),Ikenne",IKENNE
"Mrs. OKE,  Mojisola adenike","United High School (Junior),Ikenne",IKENNE
"OGUNYOYE, Deborah Oladotun.","United High School (Junior),Ikenne",IKENNE
"OLANIBA, Bidemi olutoyin","United High School (Junior),Ikenne",IKENNE
"OLANIPEKUN, Ganiyat temilade","United High School (Junior),Ikenne",IKENNE
"OLUDURO, Moradeke Adeola.","United High School (Junior),Ikenne",IKENNE
"OLUROMBI, Alarape mary","United High School (Junior),Ikenne",IKENNE
"OPADERE, Mary kikelomo","United High School (Junior),Ikenne",IKENNE
"OSONUGA, Oduniyi olugbenga adetayo","United High School (Junior),Ikenne",IKENNE
"OYERINDE, Yewande Oluwatoyin.","United High School (Junior),Ikenne",IKENNE
"SALAMI, Yemi adam","United High School (Junior),Ikenne",IKENNE
"SOTUNSA, Fatimah Oriyomi.","United High School (Junior),Ikenne",IKENNE
"ADEBAYO, Damilola Ayobamidele.","United High School (Senior)L, Ikenne",IKENNE
"ADENIJI, Hope okanlawon","United High School (Senior)L, Ikenne",IKENNE
"AKINLATUN, Okalanwon adebowale","United High School (Senior)L, Ikenne",IKENNE
"AWODIPE, Rasheedat tolulope","United High School (Senior)L, Ikenne",IKENNE
"AWOTEDU, Oluwole olufemi","United High School (Senior)L, Ikenne",IKENNE
"BANJO, Olusegun oladimeji","United High School (Senior)L, Ikenne",IKENNE
"EBONHOR, Mujirat idowu","United High School (Senior)L, Ikenne",IKENNE
"EKPE, Michael Ifeanyi.","United High School (Senior)L, Ikenne",IKENNE
"ELEGBEDE, Felicia Olufunmilayo.","United High School (Senior)L, Ikenne",IKENNE
"Mr. ORONTI,  Adekunle olorunjuwon","United High School (Senior)L, Ikenne",IKENNE
"Mrs. SALAMI,  Adenike gbemisola","United High School (Senior)L, Ikenne",IKENNE
"OGUNKOYA, Idowu","United High School (Senior)L, Ikenne",IKENNE
"OGUNLALU, Dorcas adesayo","United High School (Senior)L, Ikenne",IKENNE
"OGUNLESI, Omolaja keji","United High School (Senior)L, Ikenne",IKENNE
"OGUNNOWO, Kehinde bukola","United High School (Senior)L, Ikenne",IKENNE
"OLAKOKUN, Bamiro","United High School (Senior)L, Ikenne",IKENNE
"OLALEYE, Adegboyega olukorede","United High School (Senior)L, Ikenne",IKENNE
"OLUJIMI, Florence abiodun","United High School (Senior)L, Ikenne",IKENNE
"OPAYEMI, Bukola Christianah.","United High School (Senior)L, Ikenne",IKENNE
"SOLARIN, Babatunde","United High School (Senior)L, Ikenne",IKENNE
"SOLESI, Oluwakemi omowunmi","United High School (Senior)L, Ikenne",IKENNE
"ADEBAYO, Bolatito Adeola.","Alagbe Community High School, Alagbe",IMEKO AFON
"BABATUNDE, Hajarat arike","Alagbe Community High School, Alagbe",IMEKO AFON
"ENABOR, Ehiodion lawrence","Alagbe Community High School, Alagbe",IMEKO AFON
"IBITOKUN, Olugbenro Asabi.","Alagbe Community High School, Alagbe",IMEKO AFON
"IDOWU, Taiwo Oluwatobi.","Alagbe Community High School, Alagbe",IMEKO AFON
"OGUNDARE, Joseph akanbi","Alagbe Community High School, Alagbe",IMEKO AFON
"OLORODE, Abayomi Joseph.","Alagbe Community High School, Alagbe",IMEKO AFON
"TOWOLAWI, Esther funmilayo","Alagbe Community High School, Alagbe",IMEKO AFON
"ADEGBITE, Aminat adeola","Alaketu High School, Imeko",IMEKO AFON
"ADEGBITE, Musibau adewale","Alaketu High School, Imeko",IMEKO AFON
"ADEKANMBI, Ifetayo remilekun","Alaketu High School, Imeko",IMEKO AFON
"ADESANLU, Stephen ademola","Alaketu High School, Imeko",IMEKO AFON
"ADESINA, Sulaimon adewale","Alaketu High School, Imeko",IMEKO AFON
"AKAN-AN, Samson adegbite","Alaketu High School, Imeko",IMEKO AFON
"AKINOLA, Akintunde Adio.","Alaketu High School, Imeko",IMEKO AFON
"ALABEDE, Sabirat Funmilayo.","Alaketu High School, Imeko",IMEKO AFON
"AYILARA, Akanmu wahab","Alaketu High School, Imeko",IMEKO AFON
"BANKOLE, Amos akande","Alaketu High School, Imeko",IMEKO AFON
"BANKOLE, Busayo Oluwakemi.","Alaketu High School, Imeko",IMEKO AFON
"BELLO, Temitayo Adeola.","Alaketu High School, Imeko",IMEKO AFON
"DOSUMU, Deborah oluyomi","Alaketu High School, Imeko",IMEKO AFON
"JAYEOLA, Abosede florence","Alaketu High School, Imeko",IMEKO AFON
"MUSILIU, Luqmon Asabi.","Alaketu High School, Imeko",IMEKO AFON
"Mr. ADEKUNTE,  Muyideen adebowale","Alaketu High School, Imeko",IMEKO AFON
"Mr. BAMGBOSE,  P. oladimeji","Alaketu High School, Imeko",IMEKO AFON
"OGUNLETI, Mulikat Motunrayo.","Alaketu High School, Imeko",IMEKO AFON
"OJO, Olawale john","Alaketu High School, Imeko",IMEKO AFON
"OLATUNJI, Olajide dauda","Alaketu High School, Imeko",IMEKO AFON
"SANNI, Abiodun rafiu","Alaketu High School, Imeko",IMEKO AFON
"ABEEB, Basirat Aderinsola.","Community Comprehensive College, Idofa",IMEKO AFON
"ADEYEMI, Felicia anike","Community Comprehensive College, Idofa",IMEKO AFON
"AKAN-AN, Adesola mosebolatan","Community Comprehensive College, Idofa",IMEKO AFON
"AKINYOOLA, Taofeek Oluwaseun.","Community Comprehensive College, Idofa",IMEKO AFON
"AYILARA, Modupe Abimbola.","Community Comprehensive College, Idofa",IMEKO AFON
"BABATUNDE, Adedotun john","Community Comprehensive College, Idofa",IMEKO AFON
"ELEMBO, Bukola Beatrice.","Community Comprehensive College, Idofa",IMEKO AFON
"Mr. OGUNDELE,  Joshua olanrewaju","Community Comprehensive College, Idofa",IMEKO AFON
"Mrs. ADETUNJI,  Rasheedat olufunso","Community Comprehensive College, Idofa",IMEKO AFON
"ONALEYE, Monsuru Sunkanmi.","Community Comprehensive College, Idofa",IMEKO AFON
"SABI, Falilu ayinde","Community Comprehensive College, Idofa",IMEKO AFON
"ADEOYE, Adepeju t","Community Comprehensive High School, Atapele",IMEKO AFON
"IBRAHIM, Mariam Adedoyin.","Community Comprehensive High School, Atapele",IMEKO AFON
"Mr. AKINWUMI,  Christopher akinjare","Community Comprehensive High School, Atapele",IMEKO AFON
"Mr. OLAPAGBO,  Segun  A.","Community Comprehensive High School, Atapele",IMEKO AFON
"ADESHINA, Rukayat Abidemi.","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"AJAGBE, Kifuli isola","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"AJIBADE, Julius adebayo","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"ARIJE, Shina peter","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"DOPEMU, Charles Babatunde.","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"FAKANBI, James kolade","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"KUDORO, Adam","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"Mr. OKUBANJO,  Olawale sakirudeen","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"Mrs. RODOYE,  Saidat morounfayo","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"OGBONNIKAN, Timothy Kola.","Community Comprehensive High School, Oke-Agbede",IMEKO AFON
"ALONIGBEJA, Nureni Ayogbe.","Community High School (Junior), Idi-Ayin.",IMEKO AFON
"ILORI, Funmilayo Rosalyn.","Community High School (Junior), Idi-Ayin.",IMEKO AFON
"Mr. AKINWALE,  Olarenwaju tajudeen","Community High School (Junior), Idi-Ayin.",IMEKO AFON
"Mr. OYEDIRAN,  Ajibade  A.","Community High School (Junior), Idi-Ayin.",IMEKO AFON
"AKANAN, Meschak aremu","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"AWOBIYI, Olaide Esther.","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"EDUN, Elijah akanbi","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"KUGBAKIN, Anthony adeboye","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"Mr. ADERIBIGBE,  Olajide aderemi","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"Mr. ADEYEMO,  Bamidele kehinde","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"OGUNYOMI, Folasade mulikat","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"OLULEKE, Leah Omotanwa.","Community High School (Junior), Ilara-Yewa.",IMEKO AFON
"ADEYANJU, Michael adeniyi","Community High School (Senior), Idi-Ayin.",IMEKO AFON
"DAINI, Ebunoluwa Titilope.","Community High School (Senior), Idi-Ayin.",IMEKO AFON
"OKUSANYA, Samuel Ayo.","Community High School (Senior), Idi-Ayin.",IMEKO AFON
"OLADIMEJI, Olabisi Racheal.","Community High School (Senior), Idi-Ayin.",IMEKO AFON
"ABIOLA, Olusola motunrola","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"ADEBIYI, Adelani","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"ADEDOKUN, Adesina Ayinde.","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"AKINOLA, Oyeyinka grace","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"ANTHONY, Segun Oluwadamilare.","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"BANKOLE, Olanrewaju Paul.","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"Mr. AYOOLA,  Jones oladotun","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"OGUNDELE, Busayo emmanuel","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"OGUNLEYE, Ibukun isola","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"OLAIBI, Babatunde Peter.","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"OYEDE-LAWAL, Omotunde bolaji","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"OYENEKAN, Stephen Olaide.","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"SOYOYE, Akeem Aremu.","Community High School (Senior), Ilara-Yewa.",IMEKO AFON
"ADEYEMI, Grace olubusayo","Community High School, Afon",IMEKO AFON
"AJIBOSE, Omotola folasade","Community High School, Afon",IMEKO AFON
"AMUSAN, Damilola Helen.","Community High School, Afon",IMEKO AFON
"BANKOLE, Oluwabusayo Ajiun.","Community High School, Afon",IMEKO AFON
"FAGBOHUN, Oluwatosin Ayomide.","Community High School, Afon",IMEKO AFON
"FOLORUNSHO, Kadiri alade","Community High School, Afon",IMEKO AFON
"MULERO, Kehinde Roseline.","Community High School, Afon",IMEKO AFON
"Mr. AINA,  Ibukunola babatunde","Community High School, Afon",IMEKO AFON
"OGUNDIRAN, Olukunle akande","Community High School, Afon",IMEKO AFON
"OGUNKANBI, Timothy olusola","Community High School, Afon",IMEKO AFON
"OYETUNJI, Benjamin seye","Community High School, Afon",IMEKO AFON
"SALAKO, Deborah Ayobami.","Community High School, Afon",IMEKO AFON
"SIKIRU, Sheriff Alabi.","Community High School, Afon",IMEKO AFON
"YUSUF, Ibrahim","Community High School, Afon",IMEKO AFON
"ADERIBIGBE, Adebisi abraham","Community High School, Moriwi",IMEKO AFON
"AKINBAMI, Felicia onyinyechi","Community High School, Moriwi",IMEKO AFON
"AKINDELE, Oluwatoyin Idowu.","Community High School, Moriwi",IMEKO AFON
"AKINDELE, Samson","Community High School, Moriwi",IMEKO AFON
"AKINYEMI, Oluyemisi aderemi","Community High School, Moriwi",IMEKO AFON
"FATUNMBI, Juliannah Arike.","Community High School, Moriwi",IMEKO AFON
"IDOWU, Morenikeji abosede","Community High School, Moriwi",IMEKO AFON
"MATHEW, Adedoja Abiodun.","Community High School, Moriwi",IMEKO AFON
"Mr. BECKLEY,  Olusoji oluwole","Community High School, Moriwi",IMEKO AFON
"Mr. OSIKANMI,  Olayinka olukayode","Community High School, Moriwi",IMEKO AFON
"Mr. SOBOWALE,  Julius sunday","Community High School, Moriwi",IMEKO AFON
"NEMEDIA, Odegua omoyemi  regina","Community High School, Moriwi",IMEKO AFON
"OJEWOLA, Oluwaseun Stephen.","Community High School, Moriwi",IMEKO AFON
"OJUOLA, David abayomi","Community High School, Moriwi",IMEKO AFON
"SOTOMI, Opeyemi taiwo","Community High School, Moriwi",IMEKO AFON
"ADEDOKUN, Peter Akanji.","Iwoye-Ketu Community High School (Junior), Iwoye-Ketu.",IMEKO AFON
"Mr. AKINYEMI,  Akingboro ogbetawan","Iwoye-Ketu Community High School (Junior), Iwoye-Ketu.",IMEKO AFON
"OTUBANJO, Ayodeji Rafiu.","Iwoye-Ketu Community High School (Junior), Iwoye-Ketu.",IMEKO AFON
"ADEWOLE, Adeniyi zacchaeus oludipe","Iwoye-Ketu Community High School (Senior), Iwoye-Ketu.",IMEKO AFON
"Mr. ILESANMI,  Rotimi isola","Iwoye-Ketu Community High School (Senior), Iwoye-Ketu.",IMEKO AFON
"ADEBOYE, Olufunmilola Olasunmbo.","Muslim Grammar School, Imeko",IMEKO AFON
"ADEGOKE, Yinusa Ayodele.","Muslim Grammar School, Imeko",IMEKO AFON
"ADEKANMBI, Oluwasina joseph","Muslim Grammar School, Imeko",IMEKO AFON
"AYINDE, Foluke adebimpe","Muslim Grammar School, Imeko",IMEKO AFON
"EGUNJOBI, Akeem olatunji","Muslim Grammar School, Imeko",IMEKO AFON
"EJIOFOR, Hycienta c","Muslim Grammar School, Imeko",IMEKO AFON
"ESAN, Moradeyo funke","Muslim Grammar School, Imeko",IMEKO AFON
"IGBARO, Opeyemi Elizabeth.","Muslim Grammar School, Imeko",IMEKO AFON
"KEHINDE, Olanrewaju alani","Muslim Grammar School, Imeko",IMEKO AFON
"MASANWO, Simeon ajani","Muslim Grammar School, Imeko",IMEKO AFON
"ODUNEWU, Aminat abiodun","Muslim Grammar School, Imeko",IMEKO AFON
"OGUNRINDE, Jacob olusegun","Muslim Grammar School, Imeko",IMEKO AFON
"RAJI, Mutiu adewale","Muslim Grammar School, Imeko",IMEKO AFON
"AKINWUNMI, Mary odunayo","Muslim High School, Ilara-Yewa",IMEKO AFON
"BABATUNDE, Qudus Alabi.","Muslim High School, Ilara-Yewa",IMEKO AFON
"BANKOLE, Akeem ajani","Muslim High School, Ilara-Yewa",IMEKO AFON
"Mr. AYOADE,  Ebenezer adebayo","Muslim High School, Ilara-Yewa",IMEKO AFON
"Mr. OYIBO,  Emmanuel o.","Muslim High School, Ilara-Yewa",IMEKO AFON
"Mr. TAIWO,  Olamide  E.","Muslim High School, Ilara-Yewa",IMEKO AFON
"OGUNDELE, Matthew sunday","Muslim High School, Ilara-Yewa",IMEKO AFON
"OLATUNDE, Sarah Arike.","Muslim High School, Ilara-Yewa",IMEKO AFON
"OMOLEGBE, Sunday Oladipupo.","Muslim High School, Ilara-Yewa",IMEKO AFON
"OWOYELE, Akanni Sunday.","Muslim High School, Ilara-Yewa",IMEKO AFON
"SIWOKU, Adenike Cecilia.","Muslim High School, Ilara-Yewa",IMEKO AFON
"ADEGBITE, Zephaniah ajani","Nazareth High School (Junior), Imeko",IMEKO AFON
"ADEYEMO, Oluyemi Babatunde.","Nazareth High School (Junior), Imeko",IMEKO AFON
"AFUDA, Adeniyi ayinla","Nazareth High School (Junior), Imeko",IMEKO AFON
"AJIKOBI, Modiu akanji","Nazareth High School (Junior), Imeko",IMEKO AFON
"AKANAN, Oluwaseun titilayo","Nazareth High School (Junior), Imeko",IMEKO AFON
"AKINYEMI, Ganiyat Abidemi.","Nazareth High School (Junior), Imeko",IMEKO AFON
"ANTHONY, Ayobami Sarah.","Nazareth High School (Junior), Imeko",IMEKO AFON
"ARAOYE, Deborah Funmilayo.","Nazareth High School (Junior), Imeko",IMEKO AFON
"GAZALI, Mariam bukola","Nazareth High School (Junior), Imeko",IMEKO AFON
"JUBREEL, Wasiu adio","Nazareth High School (Junior), Imeko",IMEKO AFON
"OSENI, Halimot Bisola.","Nazareth High School (Junior), Imeko",IMEKO AFON
"SANYAOLU, Temitayo olusola","Nazareth High School (Junior), Imeko",IMEKO AFON
"UZUAZOUBONA, Victoria Enakome.","Nazareth High School (Junior), Imeko",IMEKO AFON
"ABEGUNRIN, Kifuli a","Nazareth High School (Senior), Imeko",IMEKO AFON
"ADEBOLA, Adejoke eniolorunda","Nazareth High School (Senior), Imeko",IMEKO AFON
"ADESANYA, Chistianah toyin","Nazareth High School (Senior), Imeko",IMEKO AFON
"AFOLABI, Oladuntan ajoke","Nazareth High School (Senior), Imeko",IMEKO AFON
"AFOLABI, Titilope doyin","Nazareth High School (Senior), Imeko",IMEKO AFON
"AJAYI, Abigael temitola","Nazareth High School (Senior), Imeko",IMEKO AFON
"ALABI, Hameed Akanni.","Nazareth High School (Senior), Imeko",IMEKO AFON
"BAMGBOSE, Theophilius Idowu.","Nazareth High School (Senior), Imeko",IMEKO AFON
"BANKOLE, Adebayo akanbi","Nazareth High School (Senior), Imeko",IMEKO AFON
"KEHINDE, Joshua akanni","Nazareth High School (Senior), Imeko",IMEKO AFON
"Mr. OLALEYE,  Reuben adisa","Nazareth High School (Senior), Imeko",IMEKO AFON
"OBADARA, Okikiola","Nazareth High School (Senior), Imeko",IMEKO AFON
"OJELADE, Oluwatosin Ifedayo.","Nazareth High School (Senior), Imeko",IMEKO AFON
"OLORODE, Abiola alabi","Nazareth High School (Senior), Imeko",IMEKO AFON
"OYEDIRAN, Modupe aderinke","Nazareth High School (Senior), Imeko",IMEKO AFON
"ADEDOKUN, Janet Oluwabusayo.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"ADEYEMI, Niyi Tunde.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"ANINKAN, Oluwale olanrewaju","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"EGBEWUNMI, James Oluwole.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"EPUEME, Emmanuel Chima.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"Mr. BOLAJI,  Victor  O.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"Mr. LASISI,  Akeem  A.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"Mr. OBADIMU,  David olukayode","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"Mr. OLAJIDE,  Ezekiel abayomi","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"Mrs. ADENIJI,  Folake gbemisola","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"ODEYALE, Esther Olayoonu.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"OLALEYE, Ruth Olaide.","Obada Grammar School, Obada OBADA IDI-EMI",IMEKO AFON
"AGBOYINU, Cecilia medese","Agosasa Community High School (Senior), Agosasa",IPOKIA
"BABATUNDE, Tawakalitu Mojisola.","Agosasa Community High School (Senior), Agosasa",IPOKIA
"BELLO, Abimbola oluwatosin","Agosasa Community High School (Senior), Agosasa",IPOKIA
"FALADE, Isiaka Adisa.","Agosasa Community High School (Senior), Agosasa",IPOKIA
"KIKI, Esau Kehinde.","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mr. DADA,  Kazeem adebayo","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mr. ELEGBEDE,  Gafari atanda","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mr. OJO,  Olufemi alade","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mrs. ADEOGUN,  Susan omowunmi","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mrs. FAGORALA,  Rachael oluwatooni","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mrs. HASSAN,  Kehinde sadiat","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mrs. KUDETI-JINADU,  Wakilat","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mrs. OGUNDIRAN,  Racheal menuho","Agosasa Community High School (Senior), Agosasa",IPOKIA
"Mrs. OLABISI,  Mukadas  I.","Agosasa Community High School (Senior), Agosasa",IPOKIA
"OJENIKE, Najeem","Agosasa Community High School (Senior), Agosasa",IPOKIA
"OLAYIWOLA, Mary Oluwakemi.","Agosasa Community High School (Senior), Agosasa",IPOKIA
"OMIDEYI, Serifat adebowale","Agosasa Community High School (Senior), Agosasa",IPOKIA
"OMOWARE, Adetokunbo adenike","Agosasa Community High School (Senior), Agosasa",IPOKIA
"WHENU, David friday","Agosasa Community High School (Senior), Agosasa",IPOKIA
"ADEWUSI, Azeez adisa","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"AKINLADE, Risikat Ajoke.","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"BANKOLE, Afolabi olajide","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"EMMANUEL, Omolade timothy","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"EZEBUNE, Ayoyemi omotunde","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"FADEYI, Oladele david","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"FATEROPA, Azeezat abiodun","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"FATUNBI, Fatimat Adekemi.","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"Mr. AKANNI,  Lasisi atanda","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"Mr. AMORE,  Oladotun olufela","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"Mr. ASUNI,  Sherif  A.","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"Mr. OLABISI,  Dauda ayinla","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"Mrs. AKEEB,  Aishat morenikeji","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"Mrs. OLUKOYA,  Omobolanle yemisi","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"ODUWOLE, Serifat adebola","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"OMOSANYA, Rapheal adelani","Agosasa Community Secondary (Junior), Agosasa",IPOKIA
"ADENIYI, Waliyu akanbi","Agude Communiity High School, Oniro",IPOKIA
"ADEWOLE, Omotunde adewunmi","Agude Communiity High School, Oniro",IPOKIA
"AGBOYINU, Patrick Jesuton.","Agude Communiity High School, Oniro",IPOKIA
"AKINKUNMI, Ayodeji williams","Agude Communiity High School, Oniro",IPOKIA
"IDOWU, Joseph athanhode","Agude Communiity High School, Oniro",IPOKIA
"Mrs. OGUNNIYI,  Oluwaranti yetunde","Agude Communiity High School, Oniro",IPOKIA
"OGEDENGBE, Nimota omotayo. a","Agude Communiity High School, Oniro",IPOKIA
"OJETUNDE, Olawale Joseph.","Agude Communiity High School, Oniro",IPOKIA
"SULEIMAN, Abubakar","Agude Communiity High School, Oniro",IPOKIA
"ADE-ORUMU, Daniel","Alaari High School, Alaari",IPOKIA
"ADEREMI, Funmilola Grace.","Alaari High School, Alaari",IPOKIA
"AJAYI, Florence olufunmilayo","Alaari High School, Alaari",IPOKIA
"AKINTOYE, Omotolani Afolakemi.","Alaari High School, Alaari",IPOKIA
"AWORINDE, Victoria abimbola","Alaari High School, Alaari",IPOKIA
"FADEYI, Kamoru ademola","Alaari High School, Alaari",IPOKIA
"IDOWU, Mogbonjubola Racheal.","Alaari High School, Alaari",IPOKIA
"Mr. AGBOOLA,  Taofeek  O.","Alaari High School, Alaari",IPOKIA
"Mr. BELLO,  Atanda saubana","Alaari High School, Alaari",IPOKIA
"Mr. ELESIN,  Ishau toyin","Alaari High School, Alaari",IPOKIA
"Mr. FAYEMI,  Akanni lawal","Alaari High School, Alaari",IPOKIA
"Mr. OYETUNDE,  Gbenga  M.","Alaari High School, Alaari",IPOKIA
"Mr. SAFIU,  Moruf ademola","Alaari High School, Alaari",IPOKIA
"Mrs. FASINA,  Olufunke esther","Alaari High School, Alaari",IPOKIA
"Mrs. MAKINDE,  Oluwaseyi adetutu","Alaari High School, Alaari",IPOKIA
"OJUGBELE, Ololade adeoti","Alaari High School, Alaari",IPOKIA
"OLABIYI, Babatunde james","Alaari High School, Alaari",IPOKIA
"OYEWOLE, Emmanuel Abiodun.","Alaari High School, Alaari",IPOKIA
"TOPOHOZIN, James Sejoro.","Alaari High School, Alaari",IPOKIA
"ASHIDI, Suuru johnso","Community Commercial High School (Junior), Maun",IPOKIA
"ASOKERE, Abioro james","Community Commercial High School (Junior), Maun",IPOKIA
"EJILADE, Olubisi racheal","Community Commercial High School (Junior), Maun",IPOKIA
"Mr. AREMU,  Hunpevi lekan","Community Commercial High School (Junior), Maun",IPOKIA
"Mr. FASASI,  Musiliu ayinla","Community Commercial High School (Junior), Maun",IPOKIA
"Mr. POGBE,  Sedowhe joseph","Community Commercial High School (Junior), Maun",IPOKIA
"Mr. TOGBE,  Athansede tunde","Community Commercial High School (Junior), Maun",IPOKIA
"Mrs. OWOLABI,  Adenike deborah","Community Commercial High School (Junior), Maun",IPOKIA
"TAKORO, Mauton michael","Community Commercial High School (Junior), Maun",IPOKIA
"WHANVO, Kovon peter","Community Commercial High School (Junior), Maun",IPOKIA
"ADEBONA, Abubakr Adekola.","Community Commercial High School (Senior), Maun",IPOKIA
"AGBELE, Saliu afolabi","Community Commercial High School (Senior), Maun",IPOKIA
"ALAO, Quazeem Olawale.","Community Commercial High School (Senior), Maun",IPOKIA
"ARIWODO, Modupe Onyeka.","Community Commercial High School (Senior), Maun",IPOKIA
"ASHIDI, Seveho samson","Community Commercial High School (Senior), Maun",IPOKIA
"GANIYU, Adekunle mukaram","Community Commercial High School (Senior), Maun",IPOKIA
"HUNPEVI, Toyin Deborah.","Community Commercial High School (Senior), Maun",IPOKIA
"IBIKUNLE, Alamu samson","Community Commercial High School (Senior), Maun",IPOKIA
"LAMIDI, Yinusa","Community Commercial High School (Senior), Maun",IPOKIA
"Mr. AJO,  Ajibola","Community Commercial High School (Senior), Maun",IPOKIA
"Mr. OLABODE,  Daniel akinlabi","Community Commercial High School (Senior), Maun",IPOKIA
"Mr. ORESANYA,  Sulaiman  A.","Community Commercial High School (Senior), Maun",IPOKIA
"Mrs. ONI,  Olufunke pedetin","Community Commercial High School (Senior), Maun",IPOKIA
"SUNMOLA, Monsuru Ayinla.","Community Commercial High School (Senior), Maun",IPOKIA
"TIJANI, Ibraheem bamidele","Community Commercial High School (Senior), Maun",IPOKIA
"AJIBOLA, Oluwaseun Esther.","Community High School, Agada",IPOKIA
"HARUNA, Falilu Oladipupo.","Community High School, Agada",IPOKIA
"HUNVOH, Joseph Gbedawan.","Community High School, Agada",IPOKIA
"HUNVOH, Sewanu Moses.","Community High School, Agada",IPOKIA
"KIKISUHU, Setonji olanrewaju","Community High School, Agada",IPOKIA
"MOSHO, Gbenga Jesuton.","Community High School, Agada",IPOKIA
"Mr. OGUNGBE,  Emmanuel tanpinu","Community High School, Agada",IPOKIA
"Mr. SADIQ,  Ismail alao","Community High School, Agada",IPOKIA
"Mr. TITUS,  Adesegun benedict","Community High School, Agada",IPOKIA
"SAVOEDE, Bankole Joel.","Community High School, Agada",IPOKIA
"THANYANGBEDE, Timothy Abiodun.","Community High School, Agada",IPOKIA
"ADEREMI, Shade Julianah.","Community High School, Tube",IPOKIA
"ADEYEMI, Sulaimon adeoye","Community High School, Tube",IPOKIA
"AWOTUNDE, Mariam Olajumoke.","Community High School, Tube",IPOKIA
"BABATUNDE, Aminat funmilayo","Community High School, Tube",IPOKIA
"DANTON, Suuru joseph","Community High School, Tube",IPOKIA
"Mr. ABIODUN,  Michael oluwafemi","Community High School, Tube",IPOKIA
"Mr. AWODE,  Fatiu obafemi","Community High School, Tube",IPOKIA
"Mr. KIKISUHU,  Metonu joshua","Community High School, Tube",IPOKIA
"Mr. OJO,  Rasaq bolanle","Community High School, Tube",IPOKIA
"Mr. OKPO,  Aniefiok sunday","Community High School, Tube",IPOKIA
"Mr. TOHOJEDE,  Jeremiah semako","Community High School, Tube",IPOKIA
"Mrs. AKINOLA,  Rachael oluyemi","Community High School, Tube",IPOKIA
"Mrs. FALADE,  Maryam senamu","Community High School, Tube",IPOKIA
"Mrs. OSIBANWO,  Suliat temitayo","Community High School, Tube",IPOKIA
"OKE, Michael maunapon","Community High School, Tube",IPOKIA
"OLABISI, Waliu alabi","Community High School, Tube",IPOKIA
"OLAODE, Moriliat Atinuke.","Community High School, Tube",IPOKIA
"OLOYEDE, Olumuyiwa Babatunde.","Community High School, Tube",IPOKIA
"SIANU, Peter Anuoluwapo.","Community High School, Tube",IPOKIA
"SOPEJU, Omololu Oluwaseun.","Community High School, Tube",IPOKIA
"SULAIMAN, Saidat oluwaseunfunmi","Community High School, Tube",IPOKIA
"YAKUB, Isiaka tayo","Community High School, Tube",IPOKIA
"ADEOGUN, Yinusa","Community Junior Secondary School, Ipokia",IPOKIA
"ADETONA, Sabiqat Eyiyemi.","Community Junior Secondary School, Ipokia",IPOKIA
"AKINLAMI, Ibijoke olabisi","Community Junior Secondary School, Ipokia",IPOKIA
"AKINTUNDE, Bola oluwatosin","Community Junior Secondary School, Ipokia",IPOKIA
"BAFUNSO, Olawale basiru","Community Junior Secondary School, Ipokia",IPOKIA
"Mr. FALANA,  Muritala alani","Community Junior Secondary School, Ipokia",IPOKIA
"Mr. GBADEBO,  Ajayi olusegun","Community Junior Secondary School, Ipokia",IPOKIA
"Mr. PETERS,  Ayodele john","Community Junior Secondary School, Ipokia",IPOKIA
"Mr. SALAKO,  Abel  O.","Community Junior Secondary School, Ipokia",IPOKIA
"Mr. SOLIHUDEEN,  Ahmod ayodeji","Community Junior Secondary School, Ipokia",IPOKIA
"OLALEYE, Olusola esther","Community Junior Secondary School, Ipokia",IPOKIA
"POGBE, Oladele ezekiel","Community Junior Secondary School, Ipokia",IPOKIA
"SAO, Juliana toyin","Community Junior Secondary School, Ipokia",IPOKIA
"SORINDE, Olubunmi Adebukola.","Community Junior Secondary School, Ipokia",IPOKIA
"ADERINOKUN, Mercy Mayowa.","Community Secondary School, Ipokia",IPOKIA
"AJIKOBI, Idris","Community Secondary School, Ipokia",IPOKIA
"AWODE, Ramot olayemi","Community Secondary School, Ipokia",IPOKIA
"BANTEFA, Sheu Abayomi.","Community Secondary School, Ipokia",IPOKIA
"GBADAMOSI, Gabriel","Community Secondary School, Ipokia",IPOKIA
"IBRAHIM, Wasiu","Community Secondary School, Ipokia",IPOKIA
"JAYEOLA, Ganiyu akanni","Community Secondary School, Ipokia",IPOKIA
"Mr. AMOSUN,  Moses olawale","Community Secondary School, Ipokia",IPOKIA
"Mr. LATEEF,  Gafar  A.","Community Secondary School, Ipokia",IPOKIA
"Mrs. OJO,  Aisha titilayo","Community Secondary School, Ipokia",IPOKIA
"Mrs. Oniyide,  Kudirat  A.","Community Secondary School, Ipokia",IPOKIA
"ODUNEYE, Aderibigbe ahaad","Community Secondary School, Ipokia",IPOKIA
"ORIOLA, Mathew adebayo","Community Secondary School, Ipokia",IPOKIA
"OROKOTAN, Opeoluwa micheal","Community Secondary School, Ipokia",IPOKIA
"OYAJINMI, Bola Nofiu.","Community Secondary School, Ipokia",IPOKIA
"OYEDOKUN, William tunde","Community Secondary School, Ipokia",IPOKIA
"SODIQ-MUSA, Kayode","Community Secondary School, Ipokia",IPOKIA
"ABIOYE, Sadiat adetutu","District High School, Ipokia",IPOKIA
"AGUNTHO, Sunday segbenu","District High School, Ipokia",IPOKIA
"AJIKOBI, Sofiat Olayemi.","District High School, Ipokia",IPOKIA
"AKINWANDE, Hezekiah Adegoke.","District High School, Ipokia",IPOKIA
"ELEGBEDE, Michael kayode","District High School, Ipokia",IPOKIA
"Mr. AKANLE,  Akinyele ayoola","District High School, Ipokia",IPOKIA
"Mr. ARIBAKE,  Ademola michael","District High School, Ipokia",IPOKIA
"Mr. HUNKOKOE,  Sunday moses","District High School, Ipokia",IPOKIA
"Mr. HUNPE,  Hunsu monday","District High School, Ipokia",IPOKIA
"Mr. OBANLA,  Akinola oluwaseyi","District High School, Ipokia",IPOKIA
"Mr. OKEDIRAN,  Gafari  T.","District High School, Ipokia",IPOKIA
"Mr. ORISADARE,  Ibrahim ishola","District High School, Ipokia",IPOKIA
"Mr. SURU,  Segun","District High School, Ipokia",IPOKIA
"Mrs. IDOWU,  Omowunmi oyetola","District High School, Ipokia",IPOKIA
"OLANIRAN, Salam agbaje","District High School, Ipokia",IPOKIA
"TOMOTELE, Olalekan tajudeen","District High School, Ipokia",IPOKIA
"AWOYEMI, Saidat Abiodun.","Igiri High School (Junior),  Ijofin",IPOKIA
"IDOWU, Olatunji oladapo","Igiri High School (Junior),  Ijofin",IPOKIA
"IGBOWU, Mark Idowu.","Igiri High School (Junior),  Ijofin",IPOKIA
"KUFORIJI, Grace iyabo","Igiri High School (Junior),  Ijofin",IPOKIA
"Mr. KAREEM,  Adewunmi adisa","Igiri High School (Junior),  Ijofin",IPOKIA
"Mr. NUPOZUNKU,  Johnson","Igiri High School (Junior),  Ijofin",IPOKIA
"Mrs. AYORINDE,  Morufat bola","Igiri High School (Junior),  Ijofin",IPOKIA
"Mrs. OLUDELE,  Bukola yemi","Igiri High School (Junior),  Ijofin",IPOKIA
"ODUNLAMI, Olusola janet","Igiri High School (Junior),  Ijofin",IPOKIA
"TASOLO, Elijah Dotu.","Igiri High School (Junior),  Ijofin",IPOKIA
"TODOWEDE, Senami toyin","Igiri High School (Junior),  Ijofin",IPOKIA
"USMAN, Modinat amoke","Igiri High School (Junior),  Ijofin",IPOKIA
"AGBOYINU, Suru Abraham.","Igiri High School (Senior),  Ijofin",IPOKIA
"ASADE, Rianot Morenikeji.","Igiri High School (Senior),  Ijofin",IPOKIA
"BABATUNDE, Samuel Ayodele.","Igiri High School (Senior),  Ijofin",IPOKIA
"GBOSE, Akeem Hennuho.","Igiri High School (Senior),  Ijofin",IPOKIA
"KUKU, Fatimah olanike","Igiri High School (Senior),  Ijofin",IPOKIA
"Mr. KIKISUHU,  Gbemenu samson","Igiri High School (Senior),  Ijofin",IPOKIA
"Mrs. KIKISUHU-SENU,  Ruth tope","Igiri High School (Senior),  Ijofin",IPOKIA
"SOMUYIWA, Abiola Abosede.","Igiri High School (Senior),  Ijofin",IPOKIA
"THEOPHILUS, Abiodun moses","Igiri High School (Senior),  Ijofin",IPOKIA
"ADENLE, Abdulhakeem akanni","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"AMOSUN, Nafiu toyin","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"DUROJAYE, Ibironke Yetunde.","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"FASORANTI, Ebenezer sunday","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"ISOLA, Paulina dola","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"Mr. FEHINTOLA,  Oyeyemi samusideen","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"Mr. OGUNGBAYIKE,  Emmanuel sunday","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"Mrs. ADELEYE,  Yemisi janet","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"Mrs. OJO,  Nimota afolake","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"NDAMAKU, Mopelola olasumbo","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"OLAWORE, Folashade abosede","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"OMOLE, Omolola Bosede.","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"ORISADARE, Mojisola olayinka nosimot","Iko Gateway Grammar School (Junior), Idiroko",IPOKIA
"ALABI, Tawakalitu Olamide.","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"ASHIDI, Iyabo senami","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"AYINDE, Rafiu tunde","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"IROKO, Midoyin joseph","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"ISHAQ, Hafis niyi","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mr. ADESEGUN,  Samson olatunji","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mr. ADEYEMI,  Ganiyu akinola","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mr. ONIFADE,  Saheed adebola","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mr. SODIMU,  Peter tope","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mrs. AKAELU,  Anulika uzoma","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mrs. AMOSUN,  Salimot olaide","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mrs. KASIKA,  Aderonke munirat","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mrs. LAWAL,  Abibat remilekun","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mrs. ODUMUYIWA,  Morufat abosede abike","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mrs. OLALOWO,  Adetutu damilola","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"Mrs. OROKOTAN,  Ajimoh amope","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"OKEOWO, Taiwo oluwatoyin","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"OLAOFE, Gafar adeniyi","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"OPAWUNMI, Ruth oluyemi","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"OSOMO, Ayodeji Gbadebo.","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"TOVISHEDE, Oluwaseyi rebecca","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"YISAU, Rasaki adeyele","Iko Gateway Grammar School (Senior), Idiroko",IPOKIA
"AKINPELU, Titilayo faith","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"EDUN, Aderonke Victoria.","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"ELEGBEDE, Olayiwola janet","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"Mr. EGBELAKIN,  Isaac olumide","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"Mrs. OKUBANJO,  Oluwakemi sade","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"Mrs. TAWOSE,  Janet abiodun","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"OLAJIDE, Taiwo seyi","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"OLUWAGBENRO, Tobi Gideon.","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"OPAWUMI, Alima Adeola.","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"TORIOLA, Modupe Rebecca.","Imotu Community Commercial Academy (Junior), Ifonyintedo",IPOKIA
"ANAEBUO, Ann Uchechukwu.","Imotu Community Commercial Academy (Senior), Ifonyintedo",IPOKIA
"ASHIDI, Gbetoho james","Imotu Community Commercial Academy (Senior), Ifonyintedo",IPOKIA
"Mr. AREMU,  Fatai olushola","Imotu Community Commercial Academy (Senior), Ifonyintedo",IPOKIA
"Mr. FAFIOLU,  Adewole tosin","Imotu Community Commercial Academy (Senior), Ifonyintedo",IPOKIA
"Mrs. AKINBONI,  Sijuola  O.","Imotu Community Commercial Academy (Senior), Ifonyintedo",IPOKIA
"OZANNU, Jimoh Olawale.","Imotu Community Commercial Academy (Senior), Ifonyintedo",IPOKIA
"ABAYOMI, Philip Alade.","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"ADEBOYEJO, Oluwatoyin atoke","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"ADEGBOLA, Gabriel Olufunmi.","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"ADEYEMI, Gabriel Akinwunmi.","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"DANTON, Abraham whenayon","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"Mr. ASIRU,  Saliu ayoade oyeniyi","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"Mrs. ADEMOLA,  Adenike  O.","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"Mrs. ADETONA,  Mariam olawunmi","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"OGUNDELE, Olukayode ezekiel","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"OLADEGA, Maureen Bridget.","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"OLANIYAN, Rasaq Olatunji.","Mayigi Community Comprehensive High School, Ilase",IPOKIA
"ADETOLA, Okunade Adediran.","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"ADEYEMO, Samusideen aremu","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"AKANLE, Fatimah adejoke","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"EGBE, Marann rove-steiner","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"FAYEMI, Rahmot omotunde","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"IDOWU, Mary yenukunme","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"KUTON, Ebenezer gbenayon","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"Mr. ABODUNRIN,  Tajudeen gbenga","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"Mr. AKINDELE,  Stephen adewale","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"Mr. FALOLA,  Adekunle noah adegboyega","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"Mr. OLAJIDE,  Durojaye adisa","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"Mrs. ADEYEMI,  Mariam adenike","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"Mrs. FADEYI,  Omolola  M.","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"OGUNNEYE, Abayomi Owotoomo.","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"OJOMO, Olajumoke yetunde","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"OLAJUWON, Akeem Akanni.","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"UGWU, Christiana ifeoma","Ogbe Community High School, Mede-Ajegunle",IPOKIA
"ADEYANJU, Sunday emmanuel","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"AJAYI, Racheal omolara","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"AREMU, Hannah Whesede.","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"FONTON, Toyin Mauyon.","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"Mr. ADEALU,  Busayo atanda","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"Mr. ADELEYE,  Oluwaseun joseph","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"Mr. ADESANYA,  Olaniyi festus","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"Mr. KOLEOSO,  Olubiyi ezekiel","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"Mrs. AJAGBE,  Elizabeth folaranmi","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"Mrs. NWAFOR,  Dorothy nkeiruka","Ojumo Community Secondary School (Junior), Ihunbo",IPOKIA
"AJIBODE, Johnson adeola","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"AKINGBADE, Oluwatobi Adedapo.","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"AYINDE, Olayode sunday","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"IDOWU, Omoniyi James.","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"Mr. ADEYANJU,  Rasheed akanbi","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"Mr. AYINDE,  Adebayo saliu","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"Mr. FOLORUNSO,  Sunday seun","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"Mrs. ADJOHO,  Salimot adekemi","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"Mrs. OMOLADE,  Morayo abosede","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"OLADEJI, Roseline oluseun","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"ZANNU, Comfort medetenme","Ojumo Community Secondary School (Senior), Ihunbo",IPOKIA
"ABIODUN, Olubunmi Elizabeth.","Tayese Community Secondary School, Ibatefin",IPOKIA
"ADELU, Tajudeen adekunle","Tayese Community Secondary School, Ibatefin",IPOKIA
"BABAYEMI, Yetunde morenikeji","Tayese Community Secondary School, Ibatefin",IPOKIA
"EGBEYEMI, Suliat joke","Tayese Community Secondary School, Ibatefin",IPOKIA
"ELEGBEDE, Isaac Olanrewaju.","Tayese Community Secondary School, Ibatefin",IPOKIA
"ELEGBEDE, Mojeed Olawale.","Tayese Community Secondary School, Ibatefin",IPOKIA
"FADEYI, Alice omolara","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. ADEBOYEJO,  Olumide oyetunde","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. ADEKANMBI,  Oluwaseyi olayiwola","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. AJIBADE,  Lukman adeyemi","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. ATTU,  Sunday pedepo","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. FASINA,  Gabriel olaoluwa","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. IBIRINDE,  Oluwaseun  O.","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. LAWAL,  Adetola jubril","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. OJUOLA,  Ayuba adebayo","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mr. OYEBAMIJI,  Mattew olaoluwa","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mrs. AKINDELE,  Olamide  C.","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mrs. ASIMI,  Joke oluwatoyin","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mrs. BUSARI,  Wuraola elizabeth","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mrs. ELESIN,  Latifat lanre","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mrs. GBOLAHAN,  Adesunbo  M.","Tayese Community Secondary School, Ibatefin",IPOKIA
"Mrs. WHANVO,  Hannah kehinde","Tayese Community Secondary School, Ibatefin",IPOKIA
"ODEDELE, Omolola nofisat","Tayese Community Secondary School, Ibatefin",IPOKIA
"OLAITAN, Rebecca Omotayo.","Tayese Community Secondary School, Ibatefin",IPOKIA
"OLULADE, Adeleke","Tayese Community Secondary School, Ibatefin",IPOKIA
"WHESU, Suuru michael","Tayese Community Secondary School, Ibatefin",IPOKIA
"YEKINNI, Opeyemi Abayomi.","Tayese Community Secondary School, Ibatefin",IPOKIA
"ADEJUMO, Afeez Babatunde.","St. John Community High School, Ijoko-Lemode",Ifo
"ADEYEMI, Oluwagbenga Segun.","St. John Community High School, Ijoko-Lemode",Ifo
"ADEYINA, Adebimpe faosat","St. John Community High School, Ijoko-Lemode",Ifo
"AHMAD, Sulaiman Adeleke.","St. John Community High School, Ijoko-Lemode",Ifo
"AJAYI, Simeon Idowu.","St. John Community High School, Ijoko-Lemode",Ifo
"BADEJO, Oluwatoyin Esther.","St. John Community High School, Ijoko-Lemode",Ifo
"BAMIGBOYE, Adesina Azeez.","St. John Community High School, Ijoko-Lemode",Ifo
"IDOWU, Dorcas Romoke.","St. John Community High School, Ijoko-Lemode",Ifo
"MAJEKODUNMI, Olakunbi Motunrayo.","St. John Community High School, Ijoko-Lemode",Ifo
"OLUBODUN, Eunice Aderonke.","St. John Community High School, Ijoko-Lemode",Ifo
"OYEDELE, Philip  Olatayo.","St. John Community High School, Ijoko-Lemode",Ifo
"RAZAQ, Waliyullah Idowu.","St. John Community High School, Ijoko-Lemode",Ifo
"YUSUF, Rafiu Ojo.","St. John Community High School, Ijoko-Lemode",Ifo
"ODUNUGA, Yetunde olusola","Zonal Secretary Office, Ijebu North",Ijebu North
"OGUNFODUNRIN, Adeyemi Micheal.","Zonal Secretary Office, Ijebu North",Ijebu North
"OSHUNFOWORA, Olufemi Shola.","Zonal Secretary Office, Ijebu North",Ijebu North
"SIKIRU, Aminat Aderinsola.","Zonal Secretary Office, Ijebu North",Ijebu North
"AROWONA, Olawale Taiwo.",A Test New School,Ijebu North East
"ADAM, Oseni taiwo","Ansaru Deen High School, Isiwo",Ijebu Ode
"ADEKOYA, Oluwaremilekun sarah","Ansaru Deen High School, Isiwo",Ijebu Ode
"ADENUSI, Anthony olatayo","Ansaru Deen High School, Isiwo",Ijebu Ode
"ADENUSI, Idayat adetutu","Ansaru Deen High School, Isiwo",Ijebu Ode
"ADEYEMI, Ismail abiodun","Ansaru Deen High School, Isiwo",Ijebu Ode
"ALEGUN, Patience oduwa","Ansaru Deen High School, Isiwo",Ijebu Ode
"ASIMIYU, Qudus adeola","Ansaru Deen High School, Isiwo",Ijebu Ode
"AWESU, Ruth jesumbo","Ansaru Deen High School, Isiwo",Ijebu Ode
"JIMOH, Sikiru tajudeen","Ansaru Deen High School, Isiwo",Ijebu Ode
"Mr. OSINLOYE,  Sunday","Ansaru Deen High School, Isiwo",Ijebu Ode
"Mrs. AJOKUTA,  Oluranti oluseyi","Ansaru Deen High School, Isiwo",Ijebu Ode
"Mrs. EYINFUNJOWO,  Felicia oladunni","Ansaru Deen High School, Isiwo",Ijebu Ode
"NOFIU, Salawat Oluwatoyin.","Ansaru Deen High School, Isiwo",Ijebu Ode
"OBASOHAN, Ibiyemi orebowale","Ansaru Deen High School, Isiwo",Ijebu Ode
"OBIKOYA, Seun olufunmilade","Ansaru Deen High School, Isiwo",Ijebu Ode
"ODUBANJO, Aderonke grace","Ansaru Deen High School, Isiwo",Ijebu Ode
"ODUKOYA, Kolawole sunday","Ansaru Deen High School, Isiwo",Ijebu Ode
"OKANLAWON, Esther omolola","Ansaru Deen High School, Isiwo",Ijebu Ode
"OKUSAJO, Adebisi Temitope.","Ansaru Deen High School, Isiwo",Ijebu Ode
"OLUGBILE, Oluleke alfred","Ansaru Deen High School, Isiwo",Ijebu Ode
"OMOTAYO, Oluyemisi morenikeji","Ansaru Deen High School, Isiwo",Ijebu Ode
"ONABULE, Khadijat Adeayo.","Ansaru Deen High School, Isiwo",Ijebu Ode
"ADENUGA, Abosede yetunde","PG Office, Ijebu",Ijebu Ode
"ABIMBOLA, James Atanda.","Imeko Comprehensive College, Imeko",Imeko Afon
"ABIMBOLA, Olawale  Abel.","Imeko Comprehensive College, Imeko",Imeko Afon
"ADEYANJU, Racheal  Mojisola.","Imeko Comprehensive College, Imeko",Imeko Afon
"AKOJENU, Robert Ilori.","Imeko Comprehensive College, Imeko",Imeko Afon
"AMOS, Ajibola Oluwatobi.","Imeko Comprehensive College, Imeko",Imeko Afon
"BAMGBOSE, Adewale  Patrick.","Imeko Comprehensive College, Imeko",Imeko Afon
"BANKOLE, Adepeju olufunmilola","Imeko Comprehensive College, Imeko",Imeko Afon
"BANKOLE, Bisoye Victoria.","Imeko Comprehensive College, Imeko",Imeko Afon
"FASASI, Monsurat Adebukola.","Imeko Comprehensive College, Imeko",Imeko Afon
"IGE, Michael Olumide.","Imeko Comprehensive College, Imeko",Imeko Afon
"ODUOLA, Sinmiloluwa Tolulope.","Imeko Comprehensive College, Imeko",Imeko Afon
"OGBONNIKAN, Olalekan Joseph.","Imeko Comprehensive College, Imeko",Imeko Afon
"OGUNSILE, Olugbolade Abel.","Imeko Comprehensive College, Imeko",Imeko Afon
"OJO, James Kayode.","Imeko Comprehensive College, Imeko",Imeko Afon
"OKEBULE, Alice Abosede.","Imeko Comprehensive College, Imeko",Imeko Afon
"OLAOYE, Adedayo Peace.","Imeko Comprehensive College, Imeko",Imeko Afon
"OLUSEGUN, Omolara Victoria.","Imeko Comprehensive College, Imeko",Imeko Afon
"OMOTOSHO, Fatimo Bisola.","Imeko Comprehensive College, Imeko",Imeko Afon
"ONSILE, Mathew Alabi.","Imeko Comprehensive College, Imeko",Imeko Afon
"SANUSI, Mujeeb Alamu.","Imeko Comprehensive College, Imeko",Imeko Afon
"ADEBO, Esther kehinde","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"AJAYI, Abosede leah","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"AKINNIYI, Micheal Adetayo.","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"AKINYOMI, Adebisinuola Yetunde.","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"COKER, Akinlolu olumuyiwa","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"FAKEYE, Olaoluwa abiodun","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"FAMOBUWA, Nafisat Adedoyin.","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"LAMBE, Omowunmi Kafayat.","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"Mr. BAMMEKE,  Oluwole  olukayode","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"Mr. KARONWI,  Kazeem adewale","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"Mr. OGUNBONA,  Emmanuel oluwalogbon","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"Mr. TAIWO,  Olusola akande","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"Mrs. ADEWALE,  Oluyemi titilope","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"OGUNLEYE, Tolulope Abolanle.","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"OKE, Jonathan olajide","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"OKELOLA, Kayode olutayo","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"OLALERE, Ganiyat folasade","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"OLAWALE, Adenike Abidemi.","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"ONAYIGA, Temitayo modupe","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"OTUTU, Blessing Oluwaseyi.","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"RAFIU, Akeem ,kolawole","Adesanolu Community High School (Combined), Mowe",OBAFEMI OWODE
"ABAYOMI, Racheal Adefunke.","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"ABIOYE, Ganiyat idowu","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"ADESINA, Funmilayo tosin","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"AWEDA, Esther abisoye","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"DAODU, Ibukunoluwa aderiike","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"Mr. OJO,  James olutunji","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"Mr. PIDAN,  Adebayo abayomi","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"Mrs. DAWODU,  Omowonuola isbat","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"Mrs. OMOIKHUDU,  Lydia edamwen aikhionbar","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"ODEDAIRO, Azeez Olabode.","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"OGUNFUNWA, Oluyomi olubunmi","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"OGUNSOLA, Olufemi ajani","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"OLUOKUN, Olaide amudalat","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"UTHMAN, Monsurat Aina.","Ajebo Community High School (Junior), Ajebo",OBAFEMI OWODE
"ABATI-SOBULO, Clementinah modupe","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"ADEBAYO, Oluwakemi olutoyin","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"ADENIJI, Abayomi sunday","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"AJEIGBE, Theresa afolake","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"ALAKE, Bello rafiu adebusuyi","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"ALAO, Adewale akeem","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"ALONGE, Muinat olaide","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"AYODELE, Oluwatoyin sofia","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"ISHOLA, Kabirat Taiwo.","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"LAWAL, Olusola ebunoluwa","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"Mr. OKUSI,  Muideen olusegun","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"OLALEYE, Abayomi oludare","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"OSHUNSANYA, Basirat akanke","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"OTEGBADE, Asisat Oluwaseun.","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"TIMOTHY, Rasidat abisola","Ajebo Community High School (Senior), Ajebo",OBAFEMI OWODE
"ABDULGANIYY, Musa Bayonle.","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"ABORISADE, Oluwatoyin bose","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"ADEBOWALE, Omoniyi oluyomi","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"ADELEKE, Bosede oluwalopeye","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"ADENIYI, Mary mojisola","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"AKINTOLA, Fatai adigun","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"ANJORIN, Sheriff Olanrewaju.","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"ATOYEBI, Oyeleke","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"BADA, Rasheed akanni","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"GBADAMOSI, Adebiyi semiu","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"Mr. OLAWUMI,  Moses idowu","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"Mrs. LADIPO,  Oludaisi motunrayo","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"OGUNLADE, Tosin tobiloba","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"OLATUNJI, Omolara abidemi","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"OMODAYO, Folasade Omolayo.","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"OYEWUNMI, Funmilayo oluwayemisi","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"QUADRI, Adedayo adesola","Alapako-Oni Community High School (Combined), Alapako-Oni",OBAFEMI OWODE
"ADENIYI, Akan-an kehinde","Community High School (Combined), Iro",OBAFEMI OWODE
"ADIGUN, Olaniyi zacheus","Community High School (Combined), Iro",OBAFEMI OWODE
"AKINTOLA, Emmanuel akinjide","Community High School (Combined), Iro",OBAFEMI OWODE
"LAWAL, Muniru omotayo","Community High School (Combined), Iro",OBAFEMI OWODE
"Mr. OKUNLOLA,  Abolaji  E.","Community High School (Combined), Iro",OBAFEMI OWODE
"OLANREWAJU, Bolarinwa emmanuel","Community High School (Combined), Iro",OBAFEMI OWODE
"OLASENI, Sunday philip","Community High School (Combined), Iro",OBAFEMI OWODE
"SOYOBI, Folasade Omolara.","Community High School (Combined), Iro",OBAFEMI OWODE
"ADEGBOYEGA, Oluseyi Olufisan.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"ADEKOYA, Morenike omoyeni","Community High School (Junior), Ibafo",OBAFEMI OWODE
"ADEYEMI, Dorcas oluronke","Community High School (Junior), Ibafo",OBAFEMI OWODE
"AFOLABI, Adekorede Temitayo.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"AL-AMIN, Yusuf bayode","Community High School (Junior), Ibafo",OBAFEMI OWODE
"ATALOR, Oluwafunmito oluwabunmi","Community High School (Junior), Ibafo",OBAFEMI OWODE
"AYODELE, Mary abosede","Community High School (Junior), Ibafo",OBAFEMI OWODE
"COKER, Olawunmi Yetunde.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"JOLAOSO, Emmanuel Adekunle.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"KOLAWOLE, Foluke","Community High School (Junior), Ibafo",OBAFEMI OWODE
"LAWAL, Sherifat iyabo","Community High School (Junior), Ibafo",OBAFEMI OWODE
"Mr. ADEGBOYEGA,  Semiu  A.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"Mr. AMUSAN,  Isaac adewale","Community High School (Junior), Ibafo",OBAFEMI OWODE
"Mr. OLANIYI,  Emmanuel  O.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"Mr. OLOJEDE,  Julius akin","Community High School (Junior), Ibafo",OBAFEMI OWODE
"ODUFUWA, Modupe bisola","Community High School (Junior), Ibafo",OBAFEMI OWODE
"ODUSANYA, Oluwabunmi folashade","Community High School (Junior), Ibafo",OBAFEMI OWODE
"OLAOPA, Adesola adesimbo o.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"OLOWOOKERE, Olufunke ajoke","Community High School (Junior), Ibafo",OBAFEMI OWODE
"OLUDAISI, Beatrice idowu","Community High School (Junior), Ibafo",OBAFEMI OWODE
"OSO, Omolade Elizabeth.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"SANUSI, Sherifat Elizabeth.","Community High School (Junior), Ibafo",OBAFEMI OWODE
"ABAH, Oliver nnamani","Community High School (Senior), Ibafo",OBAFEMI OWODE
"ADEGBOYEGA, Aminat Adeola.","Community High School (Senior), Ibafo",OBAFEMI OWODE
"ADELANI, Florence Adenike.","Community High School (Senior), Ibafo",OBAFEMI OWODE
"ADENAIKE, Tosin tajudeen","Community High School (Senior), Ibafo",OBAFEMI OWODE
"ADEYEMI, Oluwaseun ifeoluwa","Community High School (Senior), Ibafo",OBAFEMI OWODE
"ADIGUN, Esther olusola","Community High School (Senior), Ibafo",OBAFEMI OWODE
"AJIBOLA, Mojirayo miriam","Community High School (Senior), Ibafo",OBAFEMI OWODE
"AKINYERA, Monsurat bimpe","Community High School (Senior), Ibafo",OBAFEMI OWODE
"AREWA, Abiola mary","Community High School (Senior), Ibafo",OBAFEMI OWODE
"AROGUNDADE, Dorcas pedetin","Community High School (Senior), Ibafo",OBAFEMI OWODE
"EHIEN, Helen imade","Community High School (Senior), Ibafo",OBAFEMI OWODE
"FAKEYE, Temitope olubukunmi","Community High School (Senior), Ibafo",OBAFEMI OWODE
"MOIBI, Mujirat wale","Community High School (Senior), Ibafo",OBAFEMI OWODE
"Mr. OKUTUBO,  David oluwole","Community High School (Senior), Ibafo",OBAFEMI OWODE
"Mrs. BABALOLA,  Atinuke oluwayemi","Community High School (Senior), Ibafo",OBAFEMI OWODE
"Mrs. YINUSA AGBOJO,  Fausat bolajoko","Community High School (Senior), Ibafo",OBAFEMI OWODE
"ODESEYE, Oluwabunmi aina","Community High School (Senior), Ibafo",OBAFEMI OWODE
"OGUNJUWON, Olufunmilayo comfort","Community High School (Senior), Ibafo",OBAFEMI OWODE
"OJELABI, Oluwakemi Alice.","Community High School (Senior), Ibafo",OBAFEMI OWODE
"OLABINJO, Temitope Wuraola.","Community High School (Senior), Ibafo",OBAFEMI OWODE
"OLADAPO, Chrstianah yemisi","Community High School (Senior), Ibafo",OBAFEMI OWODE
"OLAWALE, Omolola oluwaseun","Community High School (Senior), Ibafo",OBAFEMI OWODE
"OLUFOWOTE, Racheal adesola","Community High School (Senior), Ibafo",OBAFEMI OWODE
"OREFUWA, Afolasade grace","Community High School (Senior), Ibafo",OBAFEMI OWODE
"SEMONIWON, Oluwabunmi Damilola.","Community High School (Senior), Ibafo",OBAFEMI OWODE
"SONEKAN, Olukunle taiwo","Community High School (Senior), Ibafo",OBAFEMI OWODE
"TAIRU, Ganiyu mabadeje","Community High School (Senior), Ibafo",OBAFEMI OWODE
"TAIWO, Mary Adeola.","Community High School (Senior), Ibafo",OBAFEMI OWODE
"ABIOJA, Motunrayo Esther.","Community High School, Abaren",OBAFEMI OWODE
"ADEBAYO, Olajumoke elizabeth","Community High School, Abaren",OBAFEMI OWODE
"AKINYEMI, Oluremi Bamidele.","Community High School, Abaren",OBAFEMI OWODE
"AMIRE, Modupe Abiodun.","Community High School, Abaren",OBAFEMI OWODE
"ARABIYI, Salimot Sunkanmi.","Community High School, Abaren",OBAFEMI OWODE
"AYANGBEMI, Job Ayantayo.","Community High School, Abaren",OBAFEMI OWODE
"BABALOLA, Ambali Abiodun.","Community High School, Abaren",OBAFEMI OWODE
"DANIEL, Blessing Uzoamaka.","Community High School, Abaren",OBAFEMI OWODE
"DAUDA, Matilda omowunmi","Community High School, Abaren",OBAFEMI OWODE
"KUYE, Olalekan oluwatosin","Community High School, Abaren",OBAFEMI OWODE
"Mrs. ADEPOJU,  Omonike orowole","Community High School, Abaren",OBAFEMI OWODE
"ODEYEMI, Jemilat asake","Community High School, Abaren",OBAFEMI OWODE
"OGUNSONA, Felicia oluwakemi","Community High School, Abaren",OBAFEMI OWODE
"OKUWA, Oluwaseyi Ezekiel.","Community High School, Abaren",OBAFEMI OWODE
"OLAMILEHIN, Samson Oyeniyi.","Community High School, Abaren",OBAFEMI OWODE
"OLAOGE, Ajoke Oyeyemi.","Community High School, Abaren",OBAFEMI OWODE
"OMOMOWO, Oluwafunke amoke","Community High School, Abaren",OBAFEMI OWODE
"UDUGWU, Phillip Emenike.","Community High School, Abaren",OBAFEMI OWODE
"ADELAKUN, Kehinde","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"ADENIJI, Adenike ajoke","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"IBIKUNLE, Rosemary abokhia","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"IJIYOKUN, Olawole moses","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"Mr. MUTAIRU,  Mufutau olugbenga","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"Mr. SODIMU,  Ismaila  A.","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"Mrs. BUSARI,  Oluyomi titilope","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"OJO, Oluseye oluwakemi","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"OLAJIDE, Abosede idowu","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"OLUWADE, Olubukola damilola Omowunmi.","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"OMIDIJI, Bamidele abimbola","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"OMITOGUN, Olaniyi ghaffar","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"RAJI, Vincent ayorinde","Egba Obafemi Community High School (Junior), Obafemi",OBAFEMI OWODE
"Mrs. AKINDELE,  Aminat abiodun","Egba Obafemi Community High School (Senior), Obafemi",OBAFEMI OWODE
"Mrs. ODULAJA,  Temitope oluwatoyin","Egba Obafemi Community High School (Senior), Obafemi",OBAFEMI OWODE
"OLABODE, Olubisi Abidemi.","Egba Obafemi Community High School (Senior), Obafemi",OBAFEMI OWODE
"ADEWUYI, Peter adeyemi","Egba Owode Grammar School (Junior), Owode",OBAFEMI OWODE
"KAZEEM, Abiola oluwakemi","Egba Owode Grammar School (Junior), Owode",OBAFEMI OWODE
"Mrs. ODUKOYA,  Oluwakemi mobolanle","Egba Owode Grammar School (Junior), Owode",OBAFEMI OWODE
"OLUYOMI, Emmanuel Ayobami.","Egba Owode Grammar School (Junior), Owode",OBAFEMI OWODE
"SALAKO, Abiodun ibrahim","Egba Owode Grammar School (Junior), Owode",OBAFEMI OWODE
"ARASI, Rasaki oluwafemi","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"DAUDA-FOLARIN, Musibau Oladimeji.","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"ENAKA, Eyitayo victoria","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"ENAKA, Ujerekre john","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"Mr. OPANUGA,  Tunde","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"OGUNWALE, Adebukola oyindamola","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"OLALEYE, Suliat Arinola.","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"OLATUNJI, Olasunkanmi oladapo samue","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"OLUSEYE, Racheal temilade","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"OLUWOLE, Victor kehinde","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"SOFELA, Abayomi oluwaseun","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"SORINOLA, Abiodun ezekiel","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"SOTANWA, Taibat esther","Egba Owode Grammar School (Senior), Owode",OBAFEMI OWODE
"ADEBESIN, Ganniy agbolahan atanda","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"AGBOADE, Adeboye solomon","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"ALATISHE, Adetutu Opeyemi.","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"AYANNUGA, Olufemi yinka","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"AYODELE, Joel","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"BALOGUN, Rasaq akanni","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"IDRIS, Shakirat Opeyemi.","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"KUSIMO, Olamilekan Akorede.","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"LAWAL, Adijat opeyemi","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"LAWAL, Ajibola saburi","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"Mr. ODUNLAMI,  Olugbenga  D.","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"Mr. OLABODE,  Ademola suleiman","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"Mrs. AKINWALE,  Abike olatutu","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"OLADIPO, Abiola Mayowa.","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"OLANIYONU, Mutiat Olaitan.","Kobape Community High School (Combined), Kobape",OBAFEMI OWODE
"ABDUSSALAM, Bisola kafayat","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"ADEBANJO, Ademolu oladipupo","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"ADEDIJI, Abdullahi Akinkunmi.","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"ADETAYO, Oseyemi","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"AJANI, Mukaila kolawole","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"AKINDELE, Abdulazeez Oladimeji.","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"AKINTADE, Abimbola mary","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"AKINTUNDE, Olayinka remilekun","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"AMUDAH, Oluwatosin Shakirat.","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"ARILESERE, Oyefela olatinuke","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"HASSAN, Comfort adelarin","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"KAKA, Tawakalitu adebimpe","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"KESHIRO, Khadijah kuburat","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"MAKINDE, Samuel ayodele","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"Mr. BISIRIYU,  Semiu","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"ODERINDE, Oluwatosin khadijat","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"ODUNTAN, Eunice olubusola","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OGUNREMI, Oluwatoyin abosede","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OKEDINA, Olufisayo ayoola","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OLA-MOSURO, Omolola folasayo","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OLADEJI, Oluwayomi modupe","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OLORUNFEMI, Samuel ifetayo","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OLOTU, Oluyinka alice","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OLUSANYA, Oyeyemi abosede","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"OMOTAYO, Taiwo oluwafunmilayo","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"SABEREDOWO, Rasheedat abeni olajumoke","Magboro Community High School (Combined), Magboro",OBAFEMI OWODE
"ABIMBOLA, Adeyinka  Titilope.","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"AJAYI, Esther olusola","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"AKINYEMI, Bukola funmilayo","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"BELLO, Saheed Olukayode.","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"EBODE, Omolabake olayemi","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"FARIYIBI, Rachel adedayo","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"KOLAPO, Fadeke oluropo","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"KOMOLAFE, Opeyemi Patience.","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"LAWAL, Cecilia titilayo","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"LAWAL-OKUNUGA, Adeoti abidemi","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"Mr. AJAYI,  Olabanji moshood","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"Mr. MUSA,  Abiodun lukmon","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"Mrs. AFOLABI,  Oluwatoyin  B.","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"ODEDINA, Aderonke abidemi","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"OLASILE, Mariam Olubukonla.","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"OLAWUYI, Oluwatosin Caroline.","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"SALAMI, Balau omotayo","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"SOKOYA, Olasimbo Omolara.","Ofada Community High School (Junior), Ofada",OBAFEMI OWODE
"ADELAJA, Olubunmi abolanle","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"ADETILOYE, Temidire rasidat","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"ADEYEMI, Kayode adegboyega","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"AGBENIYI, Marian kehinde","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"AJAYI, Alaba esther","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"ALI, Olubunmi veronica","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"ALLI-ADELE, B. olufunmilola","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"FAKANLU, Kehinde mary","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"IBRAHEEM, Abdul rasheed","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"Mr. DAUDA,  Omokhede bello","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"Mrs. ALAKIU,  Bukonla  A.","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"Mrs. DASAOLU,  Olufunke bukola","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"ODUBIYI, Olutoke","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"OGUNDIMU, Olusoji Adewale.","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"OKUNEYE, Bilikis oladunni","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"OLAWUYI, Adewale Victor.","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"OLUFUWAPE, Bukola tunrayo","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"ONASOTE, Olawale oluwaseun","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"ORUKOTAN, Olubukunola olugbeminiyi","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"RAPHAEL-TALABI, Olayemi funmilayo","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"SADO, Janet funmilola","Ofada Community High School (Senior), Ofada",OBAFEMI OWODE
"AKANBI, Mojisola olawunmi","Ogunmakin High School (Junior), Sowunmi",OBAFEMI OWODE
"AKINDELE, Oluwaseun Olatunji.","Ogunmakin High School (Junior), Sowunmi",OBAFEMI OWODE
"Mr. BAYEWU,  Temitope stephen","Ogunmakin High School (Junior), Sowunmi",OBAFEMI OWODE
"Mrs. BABALOLA,  Olufunmilayo abosede","Ogunmakin High School (Junior), Sowunmi",OBAFEMI OWODE
"Mrs. OKESINA,  Kofoworola omotunde","Ogunmakin High School (Junior), Sowunmi",OBAFEMI OWODE
"SONIRAN, Kehinde Kemi.","Ogunmakin High School (Junior), Sowunmi",OBAFEMI OWODE
"ADEFALA, Animot abimbola","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"ADEMOLA, Oluwatoyin oluwafunmilayo","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"ADISA, Adeniyi Nureni.","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"AJALA, Muniru akinloye","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"AKINBIYI, Olaniyan","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"AYELABOLA, Abosede Doyin.","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"BELLO, Aishat Amope.","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"DADA, Kehinde adepeju","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"Mrs. DARAMOLA,  Olubunmi olayinka","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"ODUSOGA, Adekunle sunday","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"OLAJOBI, Bolanle tawakalit","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"OLAOPIN, Olabisi basirat","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"OWOLABI, Clement oluyinka","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"OYATOMI, Modupe funke","Ogunmakin High School (Senior), Sowunmi",OBAFEMI OWODE
"ADEYINKA, Ayodele","Olorunkole Grammar School (Combined), Kajola KAJOLA-IBOORO",OBAFEMI OWODE
"MUSTAPHA, Adesola afusat","Olorunkole Grammar School (Combined), Kajola KAJOLA-IBOORO",OBAFEMI OWODE
"Mr. BAKARE,  Yusuf oladipupo","Olorunkole Grammar School (Combined), Kajola KAJOLA-IBOORO",OBAFEMI OWODE
"SOYEBO, Bilikis omobowale","Olorunkole Grammar School (Combined), Kajola KAJOLA-IBOORO",OBAFEMI OWODE
"TAIWO, Gbemisola Yemisi.","Olorunkole Grammar School (Combined), Kajola KAJOLA-IBOORO",OBAFEMI OWODE
"ADENEKAN, Funmilola olaoluwa","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"ADEOYE, Olukemi sadiat","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"ADU, Esther agbezieymi","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"ALFRED-OGUNBANJO, Folakemi Deborah.","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"Mrs. OLOGUN,  Olamide theresa","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"OGUNGBAYIBI, Abiola Adekemi.","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"OGUNJIMI, Oluwaseun mojirola","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"PEARCE, Ahmed Rotimi.","Orile Igbore Grammar School (Combined), Ajura",OBAFEMI OWODE
"ABDUL, Babatunde sikiru","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ADEBAMBO, Adunola titilayo","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ADEKUNLE, Oluwaseyi oyeniran","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ADENIJI, Abdul akeem","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ADEPOJU, Adetoro Olukemi.","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ARASI, Victoria bola","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"EWULO, Ayorinde oyeyinka","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"Mr. SONUBI,  Abdul wahab  A.","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"Mrs. ADEKUNLE,  Idayat adedayo","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"Mrs. FALOLA,  Olufunmilola olasunbo","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"Mrs. OPANUGA,  Oluwakemi adeola","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ODEBIYI-OLOYEDE, Ganiyat F..","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ODURONBI, Oluyemi olaniyi","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"OLADIPO, Oladimeji olatunde","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"ONIFADE, Olusegun oladimeji","Owode High School (Junior), Owode Egba",OBAFEMI OWODE
"AJAYI, Victoria olufunke","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"AKINREMI, Gbolahn abel oladimeji","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"KUYOORO, Oluwaseyi Titus.","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"Mr. ADEBANJO,  Dare kehinde","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"Mr. SOBUKOLA,  Soji samuel","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"Mrs. OTEGBADE,  Racheal adebowale","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"Mrs. SOBO,  Adiat  A.","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"ODEKUNLE, Fadilulahi Olalekan.","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"ODELOLA, Olaide Olasunkanmi.","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"ODUNUGA, Sunday oluwagbenga","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"SHOKUNBI, Janet Olamide.","Owode High School (Senior), Owode Egba",OBAFEMI OWODE
"ADENEKAN, Matthew dayo","Alabata Community High School, Alabata",ODEDA
"AKINSANYA, Adebayo ajasa","Alabata Community High School, Alabata",ODEDA
"AKINTUNDE, Sunday oluyemi","Alabata Community High School, Alabata",ODEDA
"ALABI, Saheed adekunle","Alabata Community High School, Alabata",ODEDA
"AWE, Ajibola","Alabata Community High School, Alabata",ODEDA
"Mr. KEHINDE,  Babatunde ebenezer","Alabata Community High School, Alabata",ODEDA
"Mr. ODUNOLA,  Olufemi julius","Alabata Community High School, Alabata",ODEDA
"OGUNSINA, Michael adewale","Alabata Community High School, Alabata",ODEDA
"OLAOLO, Reuben sunday","Alabata Community High School, Alabata",ODEDA
"OLORODE, Sunday adesina","Alabata Community High School, Alabata",ODEDA
"YEKU, Samuel olawale","Alabata Community High School, Alabata",ODEDA
"ABEGUNRIN, Peter morufu","Alagbagba Community High School, Alagbagba",ODEDA
"ADELOYE, Yemisi adunni","Alagbagba Community High School, Alagbagba",ODEDA
"AGBANIGO, Clement kolawole","Alagbagba Community High School, Alagbagba",ODEDA
"AKINOLA, Kafayat tinu","Alagbagba Community High School, Alagbagba",ODEDA
"AMINU, Aminat omolara","Alagbagba Community High School, Alagbagba",ODEDA
"AWOTUNDE, Iyabode funmilayo","Alagbagba Community High School, Alagbagba",ODEDA
"AZANDJO, Elidja Emmanuel.","Alagbagba Community High School, Alagbagba",ODEDA
"FADEYI, Eunice adebambo","Alagbagba Community High School, Alagbagba",ODEDA
"FERGUSON, Mary ekaete","Alagbagba Community High School, Alagbagba",ODEDA
"KUPONIYI, M. adeola","Alagbagba Community High School, Alagbagba",ODEDA
"Mr. AMUSAN,  Olalekan abiola abdulaih","Alagbagba Community High School, Alagbagba",ODEDA
"Mr. BABATUNDE,  Olusegun ajani","Alagbagba Community High School, Alagbagba",ODEDA
"Mrs. AJAYI,  Mary taiwo","Alagbagba Community High School, Alagbagba",ODEDA
"Mrs. AKINBINUADE,  Olubunmi fehintola","Alagbagba Community High School, Alagbagba",ODEDA
"Mrs. FADIPE,  Toyin sarah","Alagbagba Community High School, Alagbagba",ODEDA
"Mrs. SODUNKE,  Yetunde motunrayo","Alagbagba Community High School, Alagbagba",ODEDA
"OLALEKAN, Janet aderonke","Alagbagba Community High School, Alagbagba",ODEDA
"OLANPELEKE, Anuoluwapo olanrewaju","Alagbagba Community High School, Alagbagba",ODEDA
"OLUJIMI, Oluremilekun mary","Alagbagba Community High School, Alagbagba",ODEDA
"OMOLE, Mary olubunmi","Alagbagba Community High School, Alagbagba",ODEDA
"OMOYIWOLA, Bukola christianah","Alagbagba Community High School, Alagbagba",ODEDA
"ABUBAKAR, Fateemah","Egba Odeda High School (Jnr), Odeda",ODEDA
"ADEBESIN, Adebayo Adewunmi.","Egba Odeda High School (Jnr), Odeda",ODEDA
"ADEKUNLE, Bolanle toyin","Egba Odeda High School (Jnr), Odeda",ODEDA
"ADENUGA, Samuel adewole","Egba Odeda High School (Jnr), Odeda",ODEDA
"ADEOSUN, Ruth Olajumoke.","Egba Odeda High School (Jnr), Odeda",ODEDA
"ADEOSUN, Sulaiman adeniyi","Egba Odeda High School (Jnr), Odeda",ODEDA
"AMUSAN, Abolade olufemi","Egba Odeda High School (Jnr), Odeda",ODEDA
"ATOBATELE, Mohiyat Adeniun.","Egba Odeda High School (Jnr), Odeda",ODEDA
"BAMMEKE, Mary blessing","Egba Odeda High School (Jnr), Odeda",ODEDA
"BELLO, Folake adetayo","Egba Odeda High School (Jnr), Odeda",ODEDA
"HAMZA, Abdulazeez","Egba Odeda High School (Jnr), Odeda",ODEDA
"IRHIEMI, Folakemi agnes","Egba Odeda High School (Jnr), Odeda",ODEDA
"Mrs. DADA,  Grace temitope","Egba Odeda High School (Jnr), Odeda",ODEDA
"Mrs. Ojuko,  Doyinsola omowunmi","Egba Odeda High School (Jnr), Odeda",ODEDA
"Mrs. SALAMI,  Olubukunola aderonke","Egba Odeda High School (Jnr), Odeda",ODEDA
"ODERONKE, Rebecca iyabode","Egba Odeda High School (Jnr), Odeda",ODEDA
"ODULAJA, Olakunle adeniyi","Egba Odeda High School (Jnr), Odeda",ODEDA
"OKE, Ruth olufunke","Egba Odeda High School (Jnr), Odeda",ODEDA
"OLONADE, Kafayat Amope.","Egba Odeda High School (Jnr), Odeda",ODEDA
"OMONIYI, Bolanle olajumoke","Egba Odeda High School (Jnr), Odeda",ODEDA
"ONASANYA, Ekundayo odutola","Egba Odeda High School (Jnr), Odeda",ODEDA
"OYEBADE, Mojirade oyejoke","Egba Odeda High School (Jnr), Odeda",ODEDA
"SALISU, Monsuru akanni","Egba Odeda High School (Jnr), Odeda",ODEDA
"TIJANI, Hikmat Adebisi.","Egba Odeda High School (Jnr), Odeda",ODEDA
"ADEDOKUN, Ismot","Egba Odeda High School (Snr), Odeda",ODEDA
"ADEDOYIN, Olufunmilayo Deborah.","Egba Odeda High School (Snr), Odeda",ODEDA
"ADEOSUN, Motunrayo idowu","Egba Odeda High School (Snr), Odeda",ODEDA
"ADEOYE, Boluwatife Adeyemi.","Egba Odeda High School (Snr), Odeda",ODEDA
"ADIGUN, Olusolamipe esther","Egba Odeda High School (Snr), Odeda",ODEDA
"AJAYI, Opeyemi Timothy.","Egba Odeda High School (Snr), Odeda",ODEDA
"AKINREMI, Christiana Olajumoke.","Egba Odeda High School (Snr), Odeda",ODEDA
"APO, Oluwayemisi olabisi","Egba Odeda High School (Snr), Odeda",ODEDA
"ARANSIOLA, Thomas mayowa","Egba Odeda High School (Snr), Odeda",ODEDA
"FOWOSOLA, Abolanle Tope.","Egba Odeda High School (Snr), Odeda",ODEDA
"HAMZAT, Jelilat adeola","Egba Odeda High School (Snr), Odeda",ODEDA
"KOROLE, John oluwasina","Egba Odeda High School (Snr), Odeda",ODEDA
"Mr. LIYIDE,  Jaiyeola  P.","Egba Odeda High School (Snr), Odeda",ODEDA
"Mr. ODEY,  Peter sunday","Egba Odeda High School (Snr), Odeda",ODEDA
"Mrs. ADENIJI,  Folasade serifat","Egba Odeda High School (Snr), Odeda",ODEDA
"Mrs. ADETOYINBO,  Janet","Egba Odeda High School (Snr), Odeda",ODEDA
"Mrs. OLAGUNDOYE,  Adebimpe oluwatoyin","Egba Odeda High School (Snr), Odeda",ODEDA
"ODUNOLA, Aina mojisola","Egba Odeda High School (Snr), Odeda",ODEDA
"OKE, Oluwafunmilayo Olanike omolara.","Egba Odeda High School (Snr), Odeda",ODEDA
"OLAFIMIHAN, Julianah folashade","Egba Odeda High School (Snr), Odeda",ODEDA
"OLAGUNJU, Amos babatunde","Egba Odeda High School (Snr), Odeda",ODEDA
"OWOLABI, Aminat omolabake","Egba Odeda High School (Snr), Odeda",ODEDA
"OYEBANJI, Oyetunde","Egba Odeda High School (Snr), Odeda",ODEDA
"SADIQ, Kamorudeen olatunbosun","Egba Odeda High School (Snr), Odeda",ODEDA
"WAHAB, Muraina olawale","Egba Odeda High School (Snr), Odeda",ODEDA
"ADEDIRAN-ADEKUNLE, Susanah olabisi","Emulu Comprehensive High School, Orile Itesi",ODEDA
"JIMOH, Hammed Niyi.","Emulu Comprehensive High School, Orile Itesi",ODEDA
"MAKINDE-TAYLOR, Rita Oluwakemi.","Emulu Comprehensive High School, Orile Itesi",ODEDA
"Mr. OGUNDELE,  Samson  B.","Emulu Comprehensive High School, Orile Itesi",ODEDA
"ABDRAHMAN, Salmat aduke","Muslim High School, Isolu",ODEDA
"ADEKOYENI, Adeola Omolade.","Muslim High School, Isolu",ODEDA
"ADENEYE, Hannah olubunmi","Muslim High School, Isolu",ODEDA
"ADENIYI, Oluwafemi joel","Muslim High School, Isolu",ODEDA
"ADERINOKUN, Olayiwola femi","Muslim High School, Isolu",ODEDA
"ADEYEMI, Olamide Omolara.","Muslim High School, Isolu",ODEDA
"ADEYEMI, Oluwayemisi oluwakemi","Muslim High School, Isolu",ODEDA
"AKERELE, Titilope mojisola","Muslim High School, Isolu",ODEDA
"AKEUSOLA, Rahman opeyemi","Muslim High School, Isolu",ODEDA
"AKINOLA, Sola kolawole","Muslim High School, Isolu",ODEDA
"AKINSANYA, Deborah olufunmilayo","Muslim High School, Isolu",ODEDA
"ALALAFIA, Monsurat bolanle","Muslim High School, Isolu",ODEDA
"AMODU, Raimot Adebukola.","Muslim High School, Isolu",ODEDA
"AWOFISAYO, Adetoun olubunmi","Muslim High School, Isolu",ODEDA
"AYANKOLA, Saidat anike","Muslim High School, Isolu",ODEDA
"AYENI, Theresa mautin","Muslim High School, Isolu",ODEDA
"BALOGUN, Bilikis tunrayo","Muslim High School, Isolu",ODEDA
"COKER, Fausat abeni","Muslim High School, Isolu",ODEDA
"FASOLA, Atinuke omotunde","Muslim High School, Isolu",ODEDA
"GILBERT, Christianah oluwakemi o.","Muslim High School, Isolu",ODEDA
"HAMMED, Kuburat Oyinade.","Muslim High School, Isolu",ODEDA
"IDOWU, Beatrice folasade","Muslim High School, Isolu",ODEDA
"KILASHO, Abosede a.","Muslim High School, Isolu",ODEDA
"KUSAMOTU, Oladele tijani","Muslim High School, Isolu",ODEDA
"KUTI, Temilola oluwaseyi","Muslim High School, Isolu",ODEDA
"Mr. OGUNRINU,  Semiu alabi","Muslim High School, Isolu",ODEDA
"Mr. OLADEPO,  Adbul-fatai adegoke","Muslim High School, Isolu",ODEDA
"Mr. OMOTOSHO,  Olufemi olatunji","Muslim High School, Isolu",ODEDA
"Mrs. ADEDIGBA,  Funke florish","Muslim High School, Isolu",ODEDA
"Mrs. YINKA-SHOYEMI,  Omowunmi olapeju","Muslim High School, Isolu",ODEDA
"OGBONNA, Roseline chinwenwa","Muslim High School, Isolu",ODEDA
"OGUNKUNLE, Olupero moradeun","Muslim High School, Isolu",ODEDA
"OKUSANYA, Oluwakemi busayo","Muslim High School, Isolu",ODEDA
"OLADEPO, Fisayo oluwagbotemi","Muslim High School, Isolu",ODEDA
"OLAWALE, Adeola Alao.","Muslim High School, Isolu",ODEDA
"OLUDOTUN, Racheal kemi","Muslim High School, Isolu",ODEDA
"OMOLOLA, Toyin","Muslim High School, Isolu",ODEDA
"OYENEKAN, Oluwatoin","Muslim High School, Isolu",ODEDA
"SHOOLA, Omowunmi bukola","Muslim High School, Isolu",ODEDA
"SOBOWALE, Roseline olusayo","Muslim High School, Isolu",ODEDA
"THOMAS, Omoniyi musirafat","Muslim High School, Isolu",ODEDA
"ADEBESO, Azeez olasunkanmi","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADEBOYE, Temitope Abiodun.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADEKANBI, Aliu babatunde","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADELEKE, Mopelola apinke","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADELEYE, Julius olugbenga","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADELEYE, Yetunde Abimbola.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADENIYI, Rebecca Adebanke.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADENUGBA, Olubukola bola","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADESINA, Eshter Folasade.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ADESIYAN, Olubukola roseline","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"AGBOOLA, Adebukola adeseun","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"AJASA, Florence oluwakemi","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"AKINOSI, Abosede serah","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"AKINYEMI, Folahan saudat","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ALAMU, Titilayo adeola","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"AYENI, Abolanle mufuliat","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"AYODEJI-OYALOWO, Hafsat Abolore.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"AYOOLA, Elizabeth oluwatoyin","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"BAMISAYE, Oluwakemi oyeronke","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"BOLAJI, Kafayat omolola","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ERINOSHO, Esther motunrayo","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"FADARE, Abidemi ronke","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"FALEMORA, Kayode David.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"IDOWU, Francisca","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"IDOWU, Omowunmi oluwatosin","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"JAYEOLA, Olubunkola Omotayo.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"KAREEM, Fatai Adeboye.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"KAYODE, Omolara caroline","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"KAZEEM, Muritala ayinla","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"KEHINDE, Esther omoremi","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"MAFE, Risikat olanike","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"Mrs. AKANNI,  Gbemisola  H.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"Mrs. BELLO,  Taiwo oyinmola","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"Mrs. OJIKUTU,  Rukayat abimbola","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"Mrs. SONDE-ADEBOWALE,  Khadijat  M.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OBAYOMI, Gideon Olumide.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OGUNDARE, Hannah Ololade.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OJELEYE, Folake kemi","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OKEKUNLE, Olawunmi afusat","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OLAGUNJU, Faith Olamide.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OLANIYAN, Funmilayo Adebola.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OLIYIDE, Taibat arike","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OMOLE, Janet bosede","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OYEBANJO, Kikelomo bolajoko","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"OYEBOLA, Opeoluwa christianah","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"POPOOLA, Rahman Abiodun.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"SAKA, Adenike oluwakemi","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"SOWOLE, Kehinde abdulwasiu","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"SOWUNMI, Tejumola modupe","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"SULAIMON, Abidemi oluyemi","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"TAIWO, Aderoju Rukayat.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"WASIU, Sunday adetunji","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ZANNU, Leonis Mausi.","Nawair-Ud-Deen Grammar School (Jnr), Obantoko",ODEDA
"ABDULSALAM, Mulikat foluke","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ADEBAYO, Mary oluwaseun omolola","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ADEBOYE, Olabisi olufunmilayo","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ADENUGA, Gabriel adedayo","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ADEOGUN, Ajoke Ekundayo.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ADEYEYE, Christianah Eniola.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AGBETUNDE, Irene itunu","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AJANI, Ayobami funmilayo","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKANDE, John Oluwaseun.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKANNI, Victoria olabisi","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKIGBOGUN, Iyabosola Adesola.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKINLADE, Adebimpe abosede","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKINROLE, Olabisi mary","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKINSANYA, Aishat omolade","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKINSOLA, Akanbi hakeem","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKINWUNMI, Jimoh Sulaimon.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AKINYEMI, Silifat adetola","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ALABI, Isikilu adisa","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AREMU, Solomon bolarinwa","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"AYOOLA, Abdulsemiu ayosesan","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"BADEJO, Oluwatomilayo olubukola","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"BAKARE, Olabode Taiwo.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"BELLO-ASADE, Sekinat Oluwadamilola.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ELEGBEDE, Kafayat Ajibola.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ELEMIDE, Abioye motunrayo","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ELEMIDE, Mojisola Labake.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"JOLASUN, Oluwakemi  anike","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"KODAOLU, Bayo paschal","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"LAWAL, Adedayo lateefat","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"MAKINDE, Toyin ajoke","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"Mr. ADESALU,  Segun emmanuel","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"Mr. AJANI,  Adeniyi patrick","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"Mr. SOKUNBI,  Isiaka olanrewaju","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"Mrs. SADIQ,  Idowu fatimat","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"Mrs. SHOTUYO,  Hafsat ajoke","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"Mrs. SODIMU,  Basirat oluremi","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ODEWOLE, Olubukola Beatrice.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OGUN, Olutolani foluke","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OGUNDELE, Busirat Bolanle.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OGUNSEYE, Khadijat onikepo","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OGUNTUSI, Omotola olabisi","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OKUBULE, Oluwayemisi Eunice.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OKUNLOLA, Kazeem","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OLADEINBO, Funmilayo kemi","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OLAKANMI, Bolaji Atanda.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OLAOSEBIKAN, Ayobami oluwatoyin","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OLOYEDE, Shakirat Omobolanle.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OLUKOLA, Maria oluwakemi","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OPEOLA, Kikelomo abosede","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OYEBO, Adijat titilayo","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"OYEBOLA, Gbenga martins","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"SALAMI, Samiat Omolara.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"SANNI, Nafisat abosede","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"SHOLANKE, Oluwakemi Dorcas.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"SOFELA, Omotayo olutoyin","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"SORUNKE, Lateefat omowunmi","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"TIAMIYU, Fatai Ayinla.","Nawair-Ud-Deen Grammar School (Snr), Obantoko",ODEDA
"ADEYILOLA, Abdul-salam","Olokemeji High School, Olokemeji",ODEDA
"AFOLABI, Kudiratu Cynthia.","Olokemeji High School, Olokemeji",ODEDA
"ALABA, Michael Oluwatosin.","Olokemeji High School, Olokemeji",ODEDA
"FALOLA, Ibrahim Babatunde.","Olokemeji High School, Olokemeji",ODEDA
"IREDELE, Olumide Matthew.","Olokemeji High School, Olokemeji",ODEDA
"OLADEJI, Iyabo omolara","Olokemeji High School, Olokemeji",ODEDA
"OLASOJU, Olalekan oladimeji","Olokemeji High School, Olokemeji",ODEDA
"OLAYIWOLA, Gbenga oyeleke","Olokemeji High School, Olokemeji",ODEDA
"ADEBAYO, Adesesan Taiwo.","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"ADEGOKE, Olufisayo comfort","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"ADEYEMI, Grace omolola","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AFUAPE, Victoria oluwakemi","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AKANBI, Dorcas Funmilayo.","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AKINTAYO, Blessing oghenero","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AKINTOLA, Iyabo adebimpe","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AKINWUNMI, Safiat alake","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AMUSA, Taiwo Basirat.","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AREOGUN, Omolara olanike","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"AWOLOLA, Victoria mosunmola","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"BABATUNDE, Oluwakemi oluwafumilayo","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"BAJEGBO-SALAM, Barakat Mosunmola.","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"EGBUNU, Oluwatosin Adenike.","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"IFEKOYA, Omolola abosede","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"LAWAL, Margret ronke","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"Mr. ADEYEMI,  Moses kayode","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"Mr. PITAN,  Adetola ayankemi","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"Mrs. AKINDE,  Oluyemisi olufunke","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"Mrs. AKINYEMI,  Abigail olubunmi","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"NURENI, Saheed akinola","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"ODERINWALE, Emmanuel olusakin","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OGHONOMARE, Wuraola comfort","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OGUNMOLA, Oluyemi esther","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OLADIMEJI, Kehinde adesola","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OLATUNJI, Florence Abolade.","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OLATUNJI, Folasade temitayo","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OLAWUMI, Gbemileke Emmanuel.","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OLUJONWO, Oluremilekun oyebola","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OSENI, Ganiyu akanni","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"OYOH, Gbonjubola oriyomi","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"SADIQ, Olalekan oluwaleke","Orile Ilugun Comprehensive High School(Jnr), Orile Ilugun",ODEDA
"ADE-ABATI, Adeleke alao","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"ADEJO, Adedoyin Olubunmi.","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"ADEOSUN, Oluranti oluwatoyin","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"AGBOOLA, Gbadebo oyewumi","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"AKINADE, Olaoluwa idowu","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"AKINSANYA, Omotayo Mercy.","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"ALLI, Yetunde atinuke","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"AYELAAGBE, Maryam Keji.","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"AYENI, Omotayo omolayo","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"Dr. Mrs. SOWUNMI,  Rhoda oluyemisi","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"JIBRIL, Ahmad Gasali.","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"MAYUNGBO, Folasade Oluwatoyin.","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"MOBOLAJI, Oluwabunmi racheal","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"Mr. ADEGBENJO,  Adelowo adeseun","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"Mr. ODEYEMI,  Babatunde olusegun","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"Mr. OMOTOSHO,  Samson  S.","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"Mrs. NDUBUISI-EDEH,  Adetoro adekusibe","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"OJENEYE, Sunday amos","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"OLADUNMOYE, Funke olubusayo","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"OLALEYE, Michael olusesan","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"OLU-DANIEL, Oluwakemi racheal","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"OMOLE, Esther omotayo","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"OYEWOLE, Nathaniel oluseyi","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"SHOWUNMI, Abduljelil temitope","Orile Ilugun Comprehensive High School(Snr), Orile Ilugun",ODEDA
"ADEBESIN, Olayide rotimi","Orile Iporo Community High School, Orile Iporo",ODEDA
"ADEBISI, Olusegun","Orile Iporo Community High School, Orile Iporo",ODEDA
"OLADIPO, Johnson olusola","Orile Iporo Community High School, Orile Iporo",ODEDA
"AKINSOLA, Sarah olufunke","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"ENIOLORUNDA, Taiwo Oluwakemi.","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"GBADEGESIN, Motunrayo funmilayo","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"JEGEDE, Olubukola omolara","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"JOB, Kolawole peter","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"MAKINDE, Ademola","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"Mrs. FASHINA,  Yetunde eunice","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"Mrs. KAYODE,  Adewumi mulikat","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"Mrs. OLURINDE,  Adetola  A.","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"NASIRU, Teleola mutiat","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"NOLA, Sinmisola oluwatosin","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"OJEDIRAN, Elizabeth mojisola","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"OLUKANNI, Olufunke olasunkanmi","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"OYESOLA, Omowumi rachael","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"RAHEEM, Motunrayo taiwo","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"TAYLOR, Dorcas ololade","Orile Keesi Grammar School(Jnr), Olodo",ODEDA
"ABAYOMI, Oluseyi adedayo","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"ABIODUN-ADU, Oluwaseyi ele","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"ADEBOWALE, Oluwatoyin abolanle","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"ADEOSHUN, Taofeeq ayinla","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"AJAYI, James Sunday.","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"AKINWANDE, Alabi olalekan","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"AREWA, Emmanuel temitope","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"BABAJIDE, Akeem oluwasina","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"ELEGBEDE, Jamiu olanrewaju","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"HAMEED, Aminat aderonke","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"IDOWU, Cecilia oluwafunmilayo","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"IDOWU, Monsuru babtunde","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"Mr. BIOBAKU,  Babatunde basit","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"Mr. SALAMI,  Olawaiye oluwaseun","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"OLASORE, Adenike khadijat","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"OLAYEMI, Mary oluwaseun","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"OPANUBI, Abisola omolara","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"OSUNYOMI, Olufunke kehinde","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"SAKA, Aminat dayo","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"SALAMI, Sulaimon adeshina","Orile Keesi Grammar School(Snr), Olodo",ODEDA
"ADEYILOLA, O. iyabode","Orile Kemta Comprehensive High School (Jnr), Olugbo",ODEDA
"AYANSOLA, Victoria bolape","Orile Kemta Comprehensive High School (Jnr), Olugbo",ODEDA
"Mr. SOWUNMI,  Kayode sunday adeniyi","Orile Kemta Comprehensive High School (Jnr), Olugbo",ODEDA
"Mrs. ADEYINKA,  Esther olufunmilola","Orile Kemta Comprehensive High School (Jnr), Olugbo",ODEDA
"OBABIYI, Muhyideen Olaniyi.","Orile Kemta Comprehensive High School (Jnr), Olugbo",ODEDA
"OLUSOLA, Samuel Temidayo.","Orile Kemta Comprehensive High School (Jnr), Olugbo",ODEDA
"SHITTU, Patience abosede","Orile Kemta Comprehensive High School (Jnr), Olugbo",ODEDA
"ADESEGUN, Oluwabusayo adenike","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"ATANDA, Adebayo tirimisiyu","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"BAMIDELE, Florence modupe","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"LAMIDI, Tajudeen oyeniyi","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"Mrs. ODUNLAMI,  Ranti temitope","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"OLANIYAN, Olaniyi Francis.","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"OLAYIWOLA, Olugbemileke isaac","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"YUSUFF, Akinsola saheed","Orile Kemta Comprehensive High School (Snr), Olugbo",ODEDA
"ADEBIYI, Olubunmi taiwo","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ADEKUNLE, Olawunmi abosede","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ADEKUNLE, Toirat bolanle","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ADELEKE, Mojirayo adenike","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ADENIJI, Adefisayo Adebukola.","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ADENIREGUN, Ganiyat adetoun","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AJAYI, Azeezat Titilayo.","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AJIBOLA, Modinat Iyabo.","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AKINLABI, Olanrewaju aina","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AKINTOBI, Grace alaba","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AKOMOLAFE, Oluwayemisi mary","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ALAYODE, Olubusayo bukunolami","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AMUSAN, Titilayo bolanle","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"APENILEOLA, Adenike linda","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AYANSOLA, Mistura Funmi.","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"AYORINDE, David oluwasegun","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"BALOGUN, Muinat omolara","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"BANKOLE, Abimbola lydia","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"EGBEYALE, Grace oluwatoyin","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"FABUSORO, Adeola","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"FADIPE, Olusola abiodun","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"HUNGBO, Kehinde olamide","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"HUSSEIN, Taiwo abolanle","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"MUSTAPHA, Lukuman adeniran","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"Mr. FOLARIN,  David oladapo","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"Mr. LAMBE,  Akeem adebanni","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"Mr. ONIFADE,  Moses olukunle","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"Mr. RAHEEM,  Ambali olalekan","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"Mrs. FALEYE,  Dorathy ivhafore","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"Mrs. OLOYEDE,  Olufisayo toyin","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OBADINA, Khadijat ashake","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ODURINDE, Fausat iyabode","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OGUNBANWO, Janet toyosi","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OGUNYOMI, Hidayat bolanle","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OJEKUNLE, Suraju kayode","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OLALEYE, Ramon adegbenro","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OLALEYE, Titlayo kemi","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OLASUPO, Kabiru  Olaide.","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OLAYEMI, Bola comfort","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OLORODE, Abimbola gbenga","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OLUDOTUN, Abidemi olukunle","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ONASANYA, Olusola omotayo","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OREDUGBA, Saidat olayinka","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ORIYEMI, Oluwatimilehin Babajide.","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"OSUNTAYO, Olubisi olatoro","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"POPOOLA, Ajoke cecilia","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"RAHEEM, Saheedat morenikeji","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"SALAMI, Abimbola esther","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"SOBOWALE, Abosede olufunke","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"SONDE, Zulikhah Arike.","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"TEMOWO, Oluseye adefunke","Salawu Abiola Comprehensive High School (Jnr), Osiele",ODEDA
"ADEBAMBO, Oluwaseun precious","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADEDOKUN, Opeyemi arinola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADEKUNLE, Abidemi","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADELEGUN, Feyisetan jumoke","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADEMOLU, Ireti eunice","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADENEKAN, Olubuikola rebecca","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADENIJI, Grace moradeke","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADETUYOLE, Adebisi Fausat.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADEWUNMI, Oluwaseyi Mathew.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADEYANJU, Olugbenga samson","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"AINA, Abosede abike","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"AJAYI, Edith wosilatu","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"AJAYI, Omolara folasade","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"AJOSE, Taiwo deborah","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"AKINLEYE, Olayinka abosede","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"AKINYELE, Omolola odunola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ATOBA, Kafayat temitope","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"AWOKOYA, Olatunji samuel","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"BABATUNDE, Olubunmi olukemi","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"BADMUS, Musifat abiola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"BAFUNSO, Abiodun babatunde","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"BALOGUN, Bolatito Asiata.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"BALOGUN, Motunrayo olayinka","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ERINLE, Olurotimi sunday","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"FABUNMI, Oluwabunmi Margaret.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"FADIPE, Francis femi","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"FALETI, Abosede oluwafunmilola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"FALODUN, Comfort Folake.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"HAMMED, Olabisi basiru","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ISMAIL, Rahmot Amodu.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"JUBRIL, Mohammed","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"Mr. AGEMO,  Akindele","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"Mr. AKINSANYA,  Abayomi olubamibo","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"Mr. OBATUYI,  Suraj isola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"Mrs. OGUAMA,  Rita gozie","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"Mrs. PELUOLA,  Kafayat tomi","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"Mrs. SHITTU,  Aminat  M.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"Mrs. UGBERAESE,  Racheal bunmi","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ODULATE, Olufenwa innocent","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ODUYOYE, Sade elizabeth","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OGUNDELE, Muyiwa adegboyega","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OGUNMOKUN, Owolabi omolaja","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OGUNRINU, Rashidat kehinde","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OGUNSILE, Folashade esther","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OKE, Oluwakemi sola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OLADIPO, Opeyemi adeola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OLAGBILE, Ibrahim Babatunde.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OLAGESIN, Muhammed Akorede.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OLAYIWOLA, Margaret ejiehiokhin","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ONIFADE, Esther olubusola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ONITANDE, Oluwasegun Onaara.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OSIBOWALE, Veronica Morefunke.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OTU, Oluwabukola Rejoice.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OYATAYO, Fatimo omoniyi","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OYEDOKUN, Olatundun abisoye","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"OYELUSI, Folasade oyindamola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"SAGBO, Segun","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"SALAKO, Monsurat Mojisola.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"SALIHU, Fasilat Bint-abdulghaffar.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"SOBUKOLA, Abiodun banwo","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"SOWEMIMO, Lanre olusegun","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"TANIMOLA, Olasunbo mopelola","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"TINUOSO, Abolade Adebimpe.","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"YISA, Abibat omotayo","Salawu Abiola Comprehensive High School (Snr), Osiele",ODEDA
"ADELAJA, Damilola janet","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"AJAYI, Temitope olamide","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"CALEB, Olorunfunmi grace","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"DANIEL, Omotola Joy.","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"ENUMAH, Bukola asake","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"Mr. OLAYIWOLA,  David jedayo","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"Mrs. OGUN,  Idayat oluwakemi","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"NOSRUDEEN, Dhikrullahi Olusegun.","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"OLAYENI, Michael","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"OMOLADE, Adedayo olufemi","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"OSONUGA, Tiwalade titilayo","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"TIJANI, Taofiq oladeji","Aiyepe Comprehensive High School, Aiyepe",ODOGBOLU
"ADEBANJO, Olubukola  aderinsola","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"ADEKOYA, Fehintola Adeyinka.","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"ADEKUNLE, Oluwakemi toyin","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"ADELAJA, Adesola elizabeth","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"ADESOYE, Oluwatoyin elizabeth","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"AJETUMOBI, Muslimah kehinde","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"ALAMU, Adefunke rukayat","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"AWOKOYA, Oluwakemi ebenezer","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"DUROJAYE, Olatunde lekan","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"Mrs. ARIBAKE,  Mary olubukunola","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"Mrs. OBAFUNMILAYO,  Oluseyi mary","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"ODUSINA, Tolulope christianah","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"OGUNGBESAN, Olanike nimota","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"OGUNMAKINDE, Adekemi ige","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"OGUNSANYA, Olusesan clement","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"RUFAI, Kamarudeen adekunle","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"SAKA, Fatai olaniyi","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"SOKOYA, Ezekiel olamorin","Anglican Comprehensive High School, Ikoto",ODOGBOLU
"ADEBOTE, Oni adewunmi","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"ADENEYE, Alaba sakiru","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"ANIBI, Adebimpe serifat","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"BANJOKO, Olujoke    temitope","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"IDRIS, Hakeem olaniran","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"ILESANMI, Yetunde afoluwaso","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"KING, Omotola Adedotun.","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"Mr. ADEKOGBE,  Adewale julius","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"Mrs. ONANUGA,  Iyabo funmilayo","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"OBAYOMI, Olabisi olubukola","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"ODUNTAN, Kehinde busola","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"ODUWOLE, Olaolu stephen","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"OGUNBANWO, Modupe Oluwabunmi.","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"OGUNNOWO, Ibukun oluwatoyin","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"OKORONKWO, Uchechi victoria","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"OKUBADEJO, Joseph gbenga","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"OWORU, Lawrencia uloma","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"QUADRI, Habeebat titilayo","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"SOLOMON, Rachael afolasade","Anglican Comprehensive High School, Ikoto Snr",ODOGBOLU
"ADELEYE, Sikirat oluremi","Community Grammar School, Aiyepe",ODOGBOLU
"ADUBI, Olufunke agnes","Community Grammar School, Aiyepe",ODOGBOLU
"AKINWANDE, Gbemisola Bukola.","Community Grammar School, Aiyepe",ODOGBOLU
"BANKOLE, Aminat bolanle","Community Grammar School, Aiyepe",ODOGBOLU
"ODUWAIYE, Miniru tunde","Community Grammar School, Aiyepe",ODOGBOLU
"OGUNTOYE, Ramoni","Community Grammar School, Aiyepe",ODOGBOLU
"OPATIMEHIN, Emmanuel oladele","Community Grammar School, Aiyepe",ODOGBOLU
"ADEBAYO, Morufat Adesola.","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"BAKARE, Olaide temitope","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"FAJANA, Adetoun omowunmi","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"FANIYI, Linda  sayuki","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"IWAOLA, Omosule Sunday.","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"MOSUDI, Omolabake iyabo","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"Mr. BALOGUN,  Kazeem oluwafemi","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"Mrs. ONASANYA,  Roseline  kehinde","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"Mrs. OSINULU,  Tiwalade feyisara","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"OLORUNLOMERU, Khadijat bukola","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"OLUKOYA, Adeola adenike","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"OWOGBO, Odunayo","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"SALAUDEEN, Bilikis adedayo","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"SOKALE, Esther ajoke","Ibefun/Ilado Comprehensive High School (Junior), Ibefun",ODOGBOLU
"AMBALI, Samuel","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"EKWURUKE, Chinedu innocent","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"IDRIS, Asisat Bolanle.","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"IDRIS, Saheed oluwasegun","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"LAWAL, Ibrahim","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"ODEJAYI, Omosola susan","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"ODUBOTE, Michael sola","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"OLUKOYA, Abosede bernice","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"ONADUJA, Ayobami kolapo","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"OTUFOWORA, Adesina Solomon.","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"SHITTU, Adesola aminat","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"TIJANI, Oluwatoyin omoyeni","Ibefun/Ilado Comprehensive High School (Senior), Ibefun",ODOGBOLU
"ABDULLAH, Olabimpe hamdat","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADEBAYO, Adekola awoniyi john","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADEDEJI, Owolabi olusegun","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADEDIRE, Sakirat Olaoye.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADEJINRIN, Adebimpe opeoluwa","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADEKOYA, Adewumi faith","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADEKOYA, Saheed  adeleke","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADENIYI, Adebayo Oluwasesan.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADETOYE, Adebusola Olubunmi.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"AJEYI, Jonah Eriba ebira.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"AZEEZ, Muftau akanbi","Idowa Comprehensive High School, Idowa",ODOGBOLU
"BADEJO, Dawud olufemi","Idowa Comprehensive High School, Idowa",ODOGBOLU
"BENEDICT, Helen enyanwu","Idowa Comprehensive High School, Idowa",ODOGBOLU
"EGBELE, Funmilayo Florence.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"FALOKUN, Olubunmi olabisi","Idowa Comprehensive High School, Idowa",ODOGBOLU
"KOLAWOLE, Florence adenike","Idowa Comprehensive High School, Idowa",ODOGBOLU
"LAWAL, Idowu sakirudeen","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ONABANJO, Onadele Abiodun.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"OSHINOWO, Fausat adebunmi","Idowa Comprehensive High School, Idowa",ODOGBOLU
"OTESILE, Moriyike aderonke","Idowa Comprehensive High School, Idowa",ODOGBOLU
"RASHEED, Saheed Adeyemi.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"SAIB, Rebecca omolewa","Idowa Comprehensive High School, Idowa",ODOGBOLU
"TAIWO, Oluwaseun Peter.","Idowa Comprehensive High School, Idowa",ODOGBOLU
"THANNI, Hafsah adeyinka","Idowa Comprehensive High School, Idowa",ODOGBOLU
"ADENUGA, Oluwabunmi Kikelomo.",Ifesowapo Comprehensive High School,ODOGBOLU
"ARABA, Olubukola wakilat",Ifesowapo Comprehensive High School,ODOGBOLU
"AWOKOYA, Risikat yemi",Ifesowapo Comprehensive High School,ODOGBOLU
"BAKRE, Muhummed olatunbosun",Ifesowapo Comprehensive High School,ODOGBOLU
"BELLO, Jamiu tosin",Ifesowapo Comprehensive High School,ODOGBOLU
"FAGBULE, Eunice olufunmilayo",Ifesowapo Comprehensive High School,ODOGBOLU
"ISMAIL, Moriamo abolanle",Ifesowapo Comprehensive High School,ODOGBOLU
"Mr. AGORO,  Adesile azeez",Ifesowapo Comprehensive High School,ODOGBOLU
"Mr. OWODUNNI,  Raheem  A.",Ifesowapo Comprehensive High School,ODOGBOLU
"Mr. YUSUF,  Olatunde  R.",Ifesowapo Comprehensive High School,ODOGBOLU
"Mrs. ADEGBITE,  Adenike olusola",Ifesowapo Comprehensive High School,ODOGBOLU
"Mrs. ADETAYO,  Oluwatoyin abiodun",Ifesowapo Comprehensive High School,ODOGBOLU
"Mrs. DARAMOLA,  Esther oluwatoyin",Ifesowapo Comprehensive High School,ODOGBOLU
"Mrs. OGUNNIRAN,  Esther  A.",Ifesowapo Comprehensive High School,ODOGBOLU
"Mrs. SOLOLA,  Oluwaseun morenike",Ifesowapo Comprehensive High School,ODOGBOLU
"OBASEKI, Monday isaac",Ifesowapo Comprehensive High School,ODOGBOLU
"OGUNDIRAN, Ogunmuyiwa akintayo",Ifesowapo Comprehensive High School,ODOGBOLU
"OGUNSOBO, Adebisi elizabeth",Ifesowapo Comprehensive High School,ODOGBOLU
"QUADRI, Anthonia abimbola",Ifesowapo Comprehensive High School,ODOGBOLU
"SIKIRU, Mufutau ademola",Ifesowapo Comprehensive High School,ODOGBOLU
"ADEGBESAN, Benedict adeniyi","Igbile Community High School, Igbile",ODOGBOLU
"ADEWALE, Abosede susanah","Igbile Community High School, Igbile",ODOGBOLU
"AFOLABI, Sekinat temitope","Igbile Community High School, Igbile",ODOGBOLU
"AKINBANJO, Olanrewaju Agnes.","Igbile Community High School, Igbile",ODOGBOLU
"AKINMUSAYO, Ebietan","Igbile Community High School, Igbile",ODOGBOLU
"ARUNA, Olalekan Temitayo.","Igbile Community High School, Igbile",ODOGBOLU
"ASEBIOMO, Agnes taiwo","Igbile Community High School, Igbile",ODOGBOLU
"EFUNTADE, Opeyemi Joseph.","Igbile Community High School, Igbile",ODOGBOLU
"JEMISEYE, Regina olubukonla","Igbile Community High School, Igbile",ODOGBOLU
"KASORO, Michael sunday","Igbile Community High School, Igbile",ODOGBOLU
"Mrs. SONEYE,  Esther olubukola","Igbile Community High School, Igbile",ODOGBOLU
"ODUFUWA, Salamot abosede","Igbile Community High School, Igbile",ODOGBOLU
"OGUNFUWA, Abimbola adebukola","Igbile Community High School, Igbile",ODOGBOLU
"OREOLUWA, Bukonla Aduragbemi.","Igbile Community High School, Igbile",ODOGBOLU
"OSINULU-ADEJOBI, Oluwatoyin adetutu","Igbile Community High School, Igbile",ODOGBOLU
"OTUYEMI, Oludotun Sunday.","Igbile Community High School, Igbile",ODOGBOLU
"QUADRI, Abiodun Rasaki.","Igbile Community High School, Igbile",ODOGBOLU
"QUADRI, Olusegun","Igbile Community High School, Igbile",ODOGBOLU
"ABIODUN, Afolake olufunke","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ADEKOYA, Nelly kelechi","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ADELAJA, Adewale francis","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ADELEYE, Omotayo Abosede.","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ADEYEMO, Adedayo blessing","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"AKINBORO, Gloria omolara","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"KAJERO, Babatunde olubunmi","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"KALEJAYE, Ititlope alaba","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"KAREEM, Rahmotallah opeyemi","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"Miss KAZEEM,  Opeoluwa  A.","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"Mr. ADUBI,  Michael abiodun","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ODEDERE, Oluseun toyin","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ODEDIRAN, Olubunmi esther","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"OGUNBADEWA, Felix olalekan","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"OGUNBAYO, Abebowale koya","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"OGUNLEYE, Abigeal bukunmi","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"OLADUNJOYE, Margaret adenike","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"OLOGBON-ORIS, Risikat dupe","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ONABANJO, Olaolu olakunle","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ORESANYA, Olusola Olufunmilayo.","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"OSINAIKE, Olubunmi florence","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"OWOAKE, Sukurat Opeyemi.","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"SALAMI, Olubukonla yewande","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"TAIWO, Bukola wemimo","Ijebu Sounthern District Grammar School, Ala",ODOGBOLU
"ADEKOYA, Adenike bolajoko","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"ADELAJA, Oluwatosin jumoke","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"ADENOWO, Oluseyi peter","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"ADEWALE, Mary Olamide.","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"ALOYSIUS, Emmanuel Chukwuemeka.","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"BANJOKO, Bolarinde titus","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"DADA, Adebisi serifat","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"DAVIES, Yemisi victoria","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"IKHANE, Busola kayode","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"Mrs. OPADEJI,  Bolanle bamidele","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"Mrs. OWOYADE,  Abosede ayobami","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"NDUKWE, Henry Onyedika.","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"OGUNBOTU, Yetunde adesola","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"OKUNADE, Funmilola Juilet.","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"ONADUJA, Folake florence","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"SANYA, Olusegun Olasunkanmi.","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"STEPHEN, Titilope Grace.","Ikangba Comprehensive High School, Ikangba",ODOGBOLU
"ABIODUN, Mosunmola roseline","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"ADEDEJI, Olufemi titus","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"ADEDOYIN, Adeyemi ayodeji","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"ADEGBUYI, Adewole samuel","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"ADETIMIRIN, Olusola adeola","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"AYODELE, Folashade olubukola","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"BUSARI, Modupe grace","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"IDOWU, Funke temitope","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"IDRIS, Abayomi  oluwabunmi","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"Mrs. LAWAL,  Adefolakunmi oluyomi","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"ODUNAIKE, Mosun","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"SALAMI, Akorede sunday","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"TAIWO, Gbenga","Imagbon/Imaka Comprehensive High School, Imagbon",ODOGBOLU
"ADEWALE, Bamidele anthony","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"AJAYI, Tosin Damilola.","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"ALLAH, Benjamin Ogbonyohe.","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"ALLAH, Betty Olochemuan.","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"ENOCK, Omowunmi","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"FAGBENRO, Adewale Musiliu.","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"IWEBEMA, Ifeoma edith","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"Mrs. YUSUF,  Zainab titilayo","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"ODEH, Josiah Ogbu.","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"OGUNNAIKE, Hassan Yusuff.","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"OKE, Feyisetan oludayo","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"OLOWU, Hannah bukonla","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"ONAOLAPO, Abayomi d","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"OSO, Olusola oluwakeji","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"OTENUGA, Azeez abiodun","Imodi-Ijasi Comprehensive High School, Imodi",ODOGBOLU
"ABEEB, Akeem babatunde","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ADEBAYO, Richard adedoyin","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ADEKOYA, Olufunmilayo Amudat.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ADEKOYA, Rasheed oluwakemi","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ADEWUYI, Adenike oluwaseun","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ALLI, Ojonla adekunle","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ASAFA, Taofeek babatunde titus","Moraika Comprehensive High School, Atiba",ODOGBOLU
"BALOGUN, Abayomi tajudeen","Moraika Comprehensive High School, Atiba",ODOGBOLU
"BALOGUN, Waliat Olubusola.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"IGHEDOSA, Abiodun idayat","Moraika Comprehensive High School, Atiba",ODOGBOLU
"KASALI, Sherifat Adedayo.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"KOYEJO-ALLI, Omowunmi aderonke","Moraika Comprehensive High School, Atiba",ODOGBOLU
"Mr. ABDUL,  Akeem olasunkanmi","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ODUSOLE, Oluwafemi Oyewale.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"OJALATAN, Ilemobayo","Moraika Comprehensive High School, Atiba",ODOGBOLU
"OLUJIMI, Abdul-azeez adeniyi","Moraika Comprehensive High School, Atiba",ODOGBOLU
"OLUKOGA, Bisola Aolat.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"OSAYAME, Scholastica Ifeyinwa.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"OWOLABI, Funke Yemisi.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"SULAIMAN, Nofisat Abolore.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"SULE, Tawakalitu Olawunmi.","Moraika Comprehensive High School, Atiba",ODOGBOLU
"ADESANYA, Oluwaloni titilayo","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"ADETU, Mohammed jamiu adeniyi","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"KUYE, Olufemi adeleke","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"Mr. OTUNUBI,  Sulaimon  B.","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"Mrs. BADMUS,  Latifat iyabosola","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"ODUTOLA, Olayinka Abimbola.","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"OLATUNJI, Sukanmi rasheed","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"SIYANBOLA, Abiodun taofeek","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"SOKUNBI, Rosaline abidemi","Multilateral Grammar School (Junior), Okun-Owa",ODOGBOLU
"ADENUGA, Ganiyu adesesan","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"DADA, Isiaq Olusoga.","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"FASASI, Kazeem adebanjo","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"KOLAWOLE, Musiliu adeniyi","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"LAWAL, Samsudeen akorede","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"Mrs. AJAYI,  Efunkemi omobolaji","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"Mrs. ANIBABA,  Mojisola janet","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"OSOYEMI, Omowunmi Yemisi.","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"OSUNKOYA, Olufemi augustine","Multilateral Grammar School (Senior), Okun-Owa",ODOGBOLU
"ADETORO, Abosede oluwakemi","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADEYEMI, Grace omowunmi","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"AMUSA, Rukayat titilayo","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"GANIYU, Saheed martins","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"KUFORIJI, Semiu olusegun","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"Mrs. OGUNNIYI,  Abolanle temitope","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"OGUNDELE, Ademorin abolanle","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"OLUKOYA, Oyindamola adeola","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"TAIWO, Olubunmi  bolanle","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"TITUS, Valentine dele","Odogbolu Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADEBAMIRO, Oyebisi grace","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"ADESANYA, Oluwakemi","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"AKOREDE, Titilola adebimpe","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"ESUDI, Azeez adedayo","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"MABEKOJE, Olalekan olawale","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"Mr. ADEBAYO,  Adesegun adeleke","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"ODUWOLE, Olajide kehinde","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"OLADELE, Olatunde Johsnon.","Odogbolu Comprehensive High School (Senior),Odogbolu",ODOGBOLU
"ADEGBITE, Yesirat Adedoyin.","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"ADEMOLA, Jamiu kayode","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"AMUSAT, Oladele kuburat","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"LAWAL, Busurat bunmi","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"Mrs. OSUNDARA,  Olubukonla oluwakemi","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"OBASANYA, Olusola safuri","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"OGBADA, David","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"OMEFE, Monday chukwudi","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"OMOYENI, Solomon olugbenga","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"OPATIMEHIN, Adetola omolara","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"OSIYEMI, Ramota adenike","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"YINUSA, Ramota Toyin.","Odogbolu Grammar School (Junior), Odogbolu",ODOGBOLU
"ADEBAMBO, Olanrewaju gideon","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"ADETUNJI, Azeez Adetayo.","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"AKINBOWALE, Titilayo oludayo","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"AKINOLA, Mofoluwake adedoyin","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"AWOYEMI, Olabisi abigel","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"Mr. FOLARIN,  Olumide","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"Mrs. DADA,  Rasheedat olusola","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"OGUNFUYI, Roseline Ololade.","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"OLANIYI, Babafeyisan Lawrence.","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"ONANUBI, Modupe atinuke","Odogbolu Grammar School (Senior), Odogbolu",ODOGBOLU
"ABIODUN, Jayesimi timothy","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"ADEBOYE, Oluwatosin olubukanla","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"ADESANYA, Motunrayo oluwatoyin","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"ADUBI, Adetutu kehinde","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"BUSARI, Taiwo Muinat.","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"HASSAN, Al-mansur Muyiwa.","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"IDOWU, Motunrayo oluwakemi","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"OBAGBEMIRO, Yetunde olamide","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"OGUNDIYAN, Saidat olajumoke","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"OGUNYE, Funmilayo fatimat","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"OKUSANYA, Olubukonla ramatalahi","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"OLUFOWOBI, Zynab abolore","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"OYEDELE, Olufunke abidemi","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"SHITTU, Oluwabukola oluwatoyin","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"TAIWO, Selimot olayinka","Odua Comprehensive High School (Junior), Imoru",ODOGBOLU
"ABIODUN, Tolulope Oluyomi.","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"ADEFALA, Kolawole bowale","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"ADESANYA, Olusola","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"ADESOYE, Joseph adekanmbi","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"AHAMEFULE, Winifred chinyere","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"AJAYI, Adekunle peter","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"AWOJOBI, Oyekanmi festus","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"BAMGBOSE, Abimbola adetutu","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"DINA, Peter adeleke","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"IGBINAKE, Maria egole","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"ISIAQ, Sakirat adeola","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"KELANI, Aminat titilayo","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"KHALIL-MUSTAPHA, Mordiyah Adepeju.","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"Mr. KASSIM,  Olalekan moshood","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"Mrs. KOLAWOLE-LOY,  Mosunmola risikat","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"OGUNMOYE, Hairat olukemi","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"OGUTUGA, Olatunde babalola","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"OKEDOKUN, Adebola Ibukunoluwa.","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"OLANREWAJU, Cecilia oluwatola","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"OLUKOYA, Elizabeth olubisi","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"OMIMAKINDE, Oluwademilade yetunde","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"QUADRI, Azeezah oluwatoyin","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"SANUSI, Hakeem folorunso tola","Odua Comprehensive High School (Senior), Imoru",ODOGBOLU
"ADEBAMOWO, Abigail chioma","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"ADESOJI, Abimbola nurat","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"ADIO, Olugbenga musikilu","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"AJOKUTA, Anthony omotayo","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"ERURIERE, Gbekeloluwa Abosede.","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"IDOWU, Olabisi olufunke","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"KADIRI, Mosuru kunle","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"LAWAL, Falilat oluyemi","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"Mr. OGUNEDINA,  Lateef olusegun","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"OGUNJINRIN, Oluyomi","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"OLUKOYA, Bisola adijat","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"OSUNKOYA, Adenike olanike","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"OYETAYO, Oluwafemi Olatunji.","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"SALAUDEEN, Oluwafunmilola Bukola.","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"TAIWO, Tolulope oluwaranti","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"TUGBOBO, Taiwo olutayo","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"YUSUFF, Taiwo olalekan","Ogbo Community Comprehensive High School, Ogbo",ODOGBOLU
"ADEDEJI, Dupe adewumi","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADEJONWO, Adedeji tajudeen","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADELAJA, Nimotalai Abolore.","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADESANYA, Olabisi Omowunmi.","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADESANYA, Olusola olubunola","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADEYANJU, Grace bukola","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADEYIGA, Olusola abiodun","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ESSANG, Adedamola Victor.","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"MEBUDE-ADEKOYA, Oluyemisi Adedayo.","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"MUKAILA, Anifat oluwakemi","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"Mr. OSINULU,  Adetayo badejo","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ONAYEMI, Opeyemi Oluwadamilare.","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"YUSUF, Sulaiman folorunsho","Omu-Ajose Comprehensive High School (Junior), Odogbolu",ODOGBOLU
"ADENIYI, Titilayo segun","Omu-Ajose Comprehensive High School (Senior), Odogbolu",ODOGBOLU
"ADESANYA, Moruf Ola.","Omu-Ajose Comprehensive High School (Senior), Odogbolu",ODOGBOLU
"OGUNFUWA, Olumuyiwa sesan","Omu-Ajose Comprehensive High School (Senior), Odogbolu",ODOGBOLU
"OGUNNAIKE, Oluwatosin David.","Omu-Ajose Comprehensive High School (Senior), Odogbolu",ODOGBOLU
"ADEKOYA, Taiwo ronke","Ososa Comprehensive High School, Ososa",ODOGBOLU
"AJISEBUTU, Olubunmi olawunmi","Ososa Comprehensive High School, Ososa",ODOGBOLU
"AYODELE, Bolanle olayemi","Ososa Comprehensive High School, Ososa",ODOGBOLU
"EPANNOBERO, Iganya dorcas","Ososa Comprehensive High School, Ososa",ODOGBOLU
"IDOWU, Daniel oluseyi","Ososa Comprehensive High School, Ososa",ODOGBOLU
"KOIKI, Adesewa tawakalitu","Ososa Comprehensive High School, Ososa",ODOGBOLU
"LAWAL, Omolayo anifat","Ososa Comprehensive High School, Ososa",ODOGBOLU
"Mr. OGUNDIPE,  Ebenezer olayemi","Ososa Comprehensive High School, Ososa",ODOGBOLU
"Mrs. ADESIJI,  Fausat  A.","Ososa Comprehensive High School, Ososa",ODOGBOLU
"Mrs. OSISANWO,  Titilope adefolarin","Ososa Comprehensive High School, Ososa",ODOGBOLU
"ODUBELA, Omotolani Omowunmi.","Ososa Comprehensive High School, Ososa",ODOGBOLU
"OGUNBADEJO, Jamiu adekunle","Ososa Comprehensive High School, Ososa",ODOGBOLU
"OLADOYE, Adetutu omobola","Ososa Comprehensive High School, Ososa",ODOGBOLU
"OLADUNJOYE, Moriam oluyemisi","Ososa Comprehensive High School, Ososa",ODOGBOLU
"OLALEYE, Olayinka bimbola","Ososa Comprehensive High School, Ososa",ODOGBOLU
"OYESANWEN, Opeloyemi oluyemisi","Ososa Comprehensive High School, Ososa",ODOGBOLU
"SALAU, Afolasade adepeju","Ososa Comprehensive High School, Ososa",ODOGBOLU
"SOREMI, Oluwole bartholomew","Ososa Comprehensive High School, Ososa",ODOGBOLU
"TANIMOWO, Lukman abayomi","Ososa Comprehensive High School, Ososa",ODOGBOLU
"ABDUL-AZEEZ, Hanifah ayokuleyin","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ADEBANJO, Agnes Abosede.","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ADEBIYI, Adebayo Kayode.","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ADESANYA, Simbiat adebukunola","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ADEYEMI, Stephen adekunle","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"AWE, Tolulope okudola","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"FOWORA, Olufunmilola modupe","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"IBRAHIM, Shakiru olatunde","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"JESUKOLADE, Dorcas olabisi","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"KUKU, Olusile raimi","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"MUTIU, Jamiu adekunle","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"Mr. KAREEM,  Sunday tosin","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"Mr. ONASANYA,  Adedeji adebodunrin","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"Mrs. ABDUL,  Adetutu oluwakemi","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"Mrs. ADESANYA,  Adefunke motunrayo","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"Mrs. SULAIMAN,  Abolore alaba","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ODEWOLE, Alice omowumi","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ODUNUGA, Anota adetutu","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"OGUNJIMI, Adewunmi Kafilat.","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"OGUNSILE, Jumoke olayinka","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"OLADELE, Olabisi morounkeji","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"OLATUNJI, Victoria Gbemisola.","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ONABANJO, Oluwayemisi felicia","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"OSINULU, Oluwatomisin Tinuade.","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"OSIYEMI, Oluseun temitope","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"SALISU, Jamiu olayinka","Titilayo Agbaje Memorial Comprehensive High School, Imosan",ODOGBOLU
"ADEKOYE, Modupe abiodun","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"AKINBOBOLA, Elizabeth Olajonpo.","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"AYANNUGA, Okubola daniel","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"BELLO, Wahab ademola","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"IBRAHIM, Basirat Ayoka.","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"KAZEEM, Sulaiman olasanmi","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"MAKANJUOLA, Nurudeen alade","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"Mr. DADA,  Adewale","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"OGUNYEMI, Janet Oluwemimo.","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"ONALAJA, Ayodimeji Babafunmilade.","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"OSHOLOWU, Seun bamidele","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"OSINUBI, Samuel omotayo","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"OYEBODE, Oyebisi Modupe.","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"OYEGUNLE, Moriliat Afolake.","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"SAKA, Sulaimon oriyomi","Abigi  Community  Grammar  School, Abigi",OGUN WATERSIDE
"ADEYEMI, Blessing Yosola.","Ahmadiyya Comprehensive High School (Junior), Oni",OGUN WATERSIDE
"AJIGBOTOLUWA, Samuel oluwabusayo","Ahmadiyya Comprehensive High School (Junior), Oni",OGUN WATERSIDE
"ASIRU, Fatai olaide","Ahmadiyya Comprehensive High School (Junior), Oni",OGUN WATERSIDE
"Mr. TEMIRO,  Adetola  oluwakemi","Ahmadiyya Comprehensive High School (Junior), Oni",OGUN WATERSIDE
"OGUNPERO, Remilekun rebecca","Ahmadiyya Comprehensive High School (Junior), Oni",OGUN WATERSIDE
"OYELANA, Esther obiageri","Ahmadiyya Comprehensive High School (Junior), Oni",OGUN WATERSIDE
"ADEBISI, Sefiu","Ahmadiyya Comprehensive High School (Senior), Oni",OGUN WATERSIDE
"AJOSE, Musiliu aderibigbe","Ahmadiyya Comprehensive High School (Senior), Oni",OGUN WATERSIDE
"FABULE, Opeyemi henry","Ahmadiyya Comprehensive High School (Senior), Oni",OGUN WATERSIDE
"Mr. OYELANA,  Musediku olalekan","Ahmadiyya Comprehensive High School (Senior), Oni",OGUN WATERSIDE
"Mrs. ADEMUYIWA,  Adetutu omoyeni","Ahmadiyya Comprehensive High School (Senior), Oni",OGUN WATERSIDE
"RASHEED, Saheed Owolabi.","Ahmadiyya Comprehensive High School (Senior), Oni",OGUN WATERSIDE
"ADEYELU, Sunday boluwaji","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"AKINMMUSAYO, Emmanuel","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"Mr. AKINTAN,  Martins omosehin","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"Mr. ORUKOTAN,  Olabode emmanuel","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"OGUNDIRAN, Omololu simeon","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"OGUNLEYE, Kayode Peter.","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"OGUNTULA, Matilder abike","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"OLALUDE, Ifedayo henry","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"OLIBAMOYO, Patience kehinde","Ayede Comp. High  School, Ayede",OGUN WATERSIDE
"AKINBOLAJI, Iwayemi Oke.","Ayila High School (Junior), Ayila",OGUN WATERSIDE
"AKINSEYE, Folusho veronica","Ayila High School (Junior), Ayila",OGUN WATERSIDE
"BALOGUN, Ismail adebayo","Ayila High School (Junior), Ayila",OGUN WATERSIDE
"EDEMA, Felix dayo","Ayila High School (Junior), Ayila",OGUN WATERSIDE
"MEROTOHUN, Okeowo Bolanle.","Ayila High School (Junior), Ayila",OGUN WATERSIDE
"Mrs. LAWAL,  Eyitope olaoluwa","Ayila High School (Junior), Ayila",OGUN WATERSIDE
"ORUKOTAN, Adeyemi Daniel.","Ayila High School (Junior), Ayila",OGUN WATERSIDE
"ADEREOLU, Arinola Agnes.","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"ADUBIARO, Abiodun Motunrayo.","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"AGAGU, Oluwole Peter.","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"AKINDELE, Rebecca Ayobode.","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"AKINMORIN, Festus ayodele","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"DAVID, Omotola matthew","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"IGBALEMI, Adeyemi festus","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"MCIVER, Mary Iretioluwa.","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"Mr. OLATUNDE,  Augustine adefioye","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"OBAGBEMI, Pius omoboriowo","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"OGAYEMI, Esther Oluwatosin.","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"OMOSEKEJI, Mojisola agnes","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"TEMIYE, Osenat Olaomo.","Ayila High School (Senior), Ayila",OGUN WATERSIDE
"ADENAYA, Jimoh Adesanya.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"AGBATOGUN, Sakiru Opeyemi.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"AJOSE, Rasidat Racheal.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"AKINDURO, Damilola","Community High School (Junior), Ibiade",OGUN WATERSIDE
"ALIMI, Lukuman oyebayo","Community High School (Junior), Ibiade",OGUN WATERSIDE
"BANJOKO, Benjamin babatunde","Community High School (Junior), Ibiade",OGUN WATERSIDE
"JOHNSON, Calista Okwuchi.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"KUYE, Ayomipo Eniafe.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"MAFE, Yusuf Owolabi.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"ODE, Mary Olabowale.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"OFOSU, Doris Oluwatosin.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"OGUNMONIWO, Monday Solomon.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"OGUNPITAN, Folasade osunyemi","Community High School (Junior), Ibiade",OGUN WATERSIDE
"TALABI, Temitope Florence.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"TELUFUSI, Mosunmola Esther.","Community High School (Junior), Ibiade",OGUN WATERSIDE
"TIJANI, Tajidat omolara","Community High School (Junior), Ibiade",OGUN WATERSIDE
"AKINLOSE, Samuel adekunle","Community High School (Senior), Ibiade",OGUN WATERSIDE
"AKINMUSIRE, Olaseke omoleye","Community High School (Senior), Ibiade",OGUN WATERSIDE
"ITEYERE, Sunday eyowhanran","Community High School (Senior), Ibiade",OGUN WATERSIDE
"MOHAMMED, Bilqees Adedoyin.","Community High School (Senior), Ibiade",OGUN WATERSIDE
"Mr. RAIMI,  Fatai keji","Community High School (Senior), Ibiade",OGUN WATERSIDE
"Mrs. SOGBEIN,  Adejoke yetunde","Community High School (Senior), Ibiade",OGUN WATERSIDE
"OGUNBANJO, Dayo rasaki","Community High School (Senior), Ibiade",OGUN WATERSIDE
"OKUNLOLA, Mojeed titilope","Community High School (Senior), Ibiade",OGUN WATERSIDE
"OSENI, Morenike eunice","Community High School (Senior), Ibiade",OGUN WATERSIDE
"OTUSEGUN, Bola Titus.","Community High School (Senior), Ibiade",OGUN WATERSIDE
"SOSANYA, Abayomi Benjamin.","Community High School (Senior), Ibiade",OGUN WATERSIDE
"SUARAU, Ganiu Adeola.","Community High School (Senior), Ibiade",OGUN WATERSIDE
"BANKOLE, David adedigba","Efire Community High School, Efire",OGUN WATERSIDE
"EMEHINOLA, Omonuwa","Efire Community High School, Efire",OGUN WATERSIDE
"FANIYI, Monsurat yemisi","Efire Community High School, Efire",OGUN WATERSIDE
"MUSTAFA, Ahmed Olatubosun.","Efire Community High School, Efire",OGUN WATERSIDE
"Mr. FAMUDITI,  Micaiah olusoji","Efire Community High School, Efire",OGUN WATERSIDE
"OGIDAN, Adedayo Rasaq.","Efire Community High School, Efire",OGUN WATERSIDE
"OLANREWAJU, Musiliu Olorunwa.","Efire Community High School, Efire",OGUN WATERSIDE
"OLUKOGA, Akeem Olugbenga.","Efire Community High School, Efire",OGUN WATERSIDE
"ONOSAKPONOME, Caro Samuel.","Efire Community High School, Efire",OGUN WATERSIDE
"ADELAJA, Azeez Jakande.","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"ADESANYA, Jimoh adetokunbo","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"ADESOYE, Anthony Suji.","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"AKINDELE, Daniel yomi","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"AMINU, Muazu Monsuru.","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"ANBALI, Muhammad adekoya","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"AWOKOYA, Agbolabo","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"AWONAIKE, Omotolani Oladunni.","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"BALOGUN, Olatayo abidemi","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"BARUWA, Fatimah oyinade","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"FATOYINBO, Christianah seyi","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"IFEYEMI, Yinka idowu","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"KAREEM, Safiu olorunjuwon","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"MOMODU, Taiwo Yetunde.","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"MUIDEEN, Sefiu ariyo","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"Mr. SANGOTUNJI,  Idowu awodoye","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"Mrs. AKINLOSE,  Cecilia oluyemisi","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"OBIPEHIN, Kazeem Adewale.","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"OBITUYI, Monsurat abiodun","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"OGUNDERO, Fasasi","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"OLOMU, Sunday adewale","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"OLUFEYISAN, Olubiyi olumuyiwa","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"OSUPALA, Cecilia ibijoke","Ibiade Comprehensive High School, Ibiade",OGUN WATERSIDE
"EDWARD, Oghenovo","Ibu Community Grammar School, Ibu",OGUN WATERSIDE
"Mr. ODULAJA,  Adeyemi olufemi","Ibu Community Grammar School, Ibu",OGUN WATERSIDE
"OLUWOLE, Odunyemi Mary.","Ibu Community Grammar School, Ibu",OGUN WATERSIDE
"OMOBUWA, Olorunwa Segun.","Ibu Community Grammar School, Ibu",OGUN WATERSIDE
"SATURDAY, Ubong Kingsley.","Ibu Community Grammar School, Ibu",OGUN WATERSIDE
"UMUKORO, Blessing","Ibu Community Grammar School, Ibu",OGUN WATERSIDE
"DARANIJO, Yusuff bola","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"HASSAN, Ganiyat temitayo","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"IWAYEMI, Grace olufunke","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"JIMOH, Abayomi Samson.","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"LAGBADEFUN, Oluwasesan  oladele","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"Mr. GANIYU,  Jamiu olusola","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"OGUNBANWO, Olusola Olufunke.","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"RAIMI, Fatimat Tope.","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"SANUSI, Hazeez olaitanm","Ilusin Grammar School (Junior), Ilusin",OGUN WATERSIDE
"ADELAKUN, Nathaniel adeyeye","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"ADENAIKE, Shadia Temitope.","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"KETIKU, Rebecca Oluwatosin.","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"KUKU, Nurudeen Olatunbosun.","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"Mr. KOLADE,  Victor oluwole","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"Mr. OYEBANJO,  Abiodun akinola","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"OKEDINA, Kayode Olaolu.","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"OSENI, Oluwemimo emmanuel","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"SOKALE, Olayinka abel","Ilusin Grammar School (Senior), Ilusin",OGUN WATERSIDE
"AKINYEHUN, Abimbola","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"AKINYEMI, Victor akinbowale","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"ALAUSA, Gbenga mufutau","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"EHINMOWO, Frank Gbenga.","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"Mr. DARE,  David olusegun","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"OGUNMOLA, Idowu","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"OGUNYANKINNU, Gbenga  Peter.","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"OJAJUNI, Victoria omolere","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"SHEYIN, Ade Adeniji.","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"TAKUNBE, Olorunwa","Itebu Manuwa Comprehensive High School, Itebu Manuwa",OGUN WATERSIDE
"AKINULI, Bose Stella.","Lomiro High School, Lomiro",OGUN WATERSIDE
"AKINULI, Olusola Lawrence.","Lomiro High School, Lomiro",OGUN WATERSIDE
"AYEBUSIWA, Mayokun oluwafemi","Lomiro High School, Lomiro",OGUN WATERSIDE
"IGBOSANU, Olumuyiwa Adewale.","Lomiro High School, Lomiro",OGUN WATERSIDE
"IYAROMI, Oluwarotimi moses","Lomiro High School, Lomiro",OGUN WATERSIDE
"Mr. ADELURE,  Oluwadaisi dennis","Lomiro High School, Lomiro",OGUN WATERSIDE
"Mr. ODUNAIKE,  Olugbenga afolabi","Lomiro High School, Lomiro",OGUN WATERSIDE
"ADENIYI, Adeyemi","Makun Omi Comprehensive High School, Makun Omi",OGUN WATERSIDE
"AKINWUNMI, Akintoye adeniyi","Makun Omi Comprehensive High School, Makun Omi",OGUN WATERSIDE
"IDOWU, Adekunle adedoyin","Makun Omi Comprehensive High School, Makun Omi",OGUN WATERSIDE
"Mr. ADEGBOYEGA,  Semiu ayoade","Makun Omi Comprehensive High School, Makun Omi",OGUN WATERSIDE
"ODE, Olalekan Olugbemiro.","Makun Omi Comprehensive High School, Makun Omi",OGUN WATERSIDE
"OKUFOYE, Michael adeniyi","Makun Omi Comprehensive High School, Makun Omi",OGUN WATERSIDE
"UDOH, Anietie Promise.","Makun Omi Comprehensive High School, Makun Omi",OGUN WATERSIDE
"ABOLAJI, Elizabeth Oluyinka.","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"AJAYI, Michaiah","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"AYODELE, Gboyega manaseh","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"DOSUMU, Fatai Adekunle.","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"HASSAN, Fatai Adeniyi.","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"JIMOH, Kamaldeen Olalekan.","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"Mr. IGONO,  Yakubu","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"OKULENU, Isaac gbadebo","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"OTARIGHOWERA, Glory Aghogho.","Ode Omi Community Grammar Sch, Ode Omi. Ogun Waterside",OGUN WATERSIDE
"ADESANYA, Oluwaseun Michael.","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"ALABA, Damilola","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"DALAMU, Muyiwa Amos.","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"FOLAJI, John Oluwakayode.","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"LAWAL, Adelaja nurein","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"OGUNPITAN, Temitope Khadijat.","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"OLADAPO, Sunday","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"SANNI, Kamorudeen adeleke","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"SONIRAN, Oladipupo samuel","St. Kizito's High School (Junior), Iwopin.",OGUN WATERSIDE
"AKINSANYA, Omoyemi Cecilia.","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"BELLO, Muideen Femi.","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"EDIGBUE, Sunday Pius.","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"LAMIDI, Muslim olayinka","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"MUTIFILU, Sarat Kehinde.","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"Mr. ADEBAJO,  Afolabi anthony","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"Mr. AKINSANYA,  Sayidina aliyu oluwasegu","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"ODUROYE, Oladipo","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"OGUNDIYAN, Olusegun samson","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"ONABANJO, Oluwasesan aderemilekun","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"SOGUNLE, Samuel Taiwo.","St. Kizito's High School (Senior), Iwopin.",OGUN WATERSIDE
"AKINDIPE, Elizabeth olayinka","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"JIBOWO, Olusesi olugbenga paul","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"JOLAOSO, Abiodun adebayo","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"Mr. BELLO,  Waheed olushesan","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"Mr. SOFOLUWE,  Olusegun","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"OWOLABI, Omolade elizabeth","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"SALAU, Aminat Ayonike.","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"SORINOLA, Abayomi olusegun","Oba Community High School (Combined), Oba OBAFEMI",OWODE
"AKPAN, Mfonido Ekpenyong.","Iro Community High School, Iro",Obafemi Owode
"ATANDA, Sunday abiola","Iro Community High School, Iro",Obafemi Owode
"Mr. ADEOSUN,  Owolabi isola","Iro Community High School, Iro",Obafemi Owode
"Mrs. AKPUNNE,  Olubusola olufunke","Iro Community High School, Iro",Obafemi Owode
"ADEEYO, Oluwaseun Abiola.",Olorunkole Grammar School,Obafemi Owode
"AYANTUBO-APATA, Deborah Oluwabunmi.",Olorunkole Grammar School,Obafemi Owode
"FAYOMI, Phillip Olaoluwa.",Olorunkole Grammar School,Obafemi Owode
"IBRAHIM, Razaq",Olorunkole Grammar School,Obafemi Owode
"Mr. ADEMUYIWA,  Raimi isola",Olorunkole Grammar School,Obafemi Owode
"Mrs. ADEMAKINWA,  Taiwo asunke",Olorunkole Grammar School,Obafemi Owode
"AFOLABI, Charles ademola","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"AKINTIBUBO, Damilola adenike","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"AWOLESI, Benson olufemi","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"BABATUNDE, Sunday folorunso","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"BANKOLE, Monsuru Olatunji.","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"Mrs. ADEYEMI,  Moyosore abidemi","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"OBADINA, Adenike olayinka","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"OGUNWA, Adetokunbo Yomi.","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"OJEADE, Michael olujoba","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"THAOBAN, Abdulwasiu Akanji.","Orile Imo Grammar School, Orile Imo",Obafemi Owode
"KOLEOSO, Olubunmi iyabode","Siun High School, Siun",Obafemi Owode
"KUDEHINBU, Abimbola","Siun High School, Siun",Obafemi Owode
"OJO, Omonike zeynab","Siun High School, Siun",Obafemi Owode
"AKINLABI, Adepeju Damilola.","Zonal Secretary Office, Obafemi Owode",Obafemi Owode
"ONAYINGBO, Temitope adetutu","Zonal Secretary Office, Odogbolu",Odogbolu
"AWOBAJO, Babatunde segun",Ilara/Akaka Community Grammar School,REMO NORTH
"AWOBAJO, Oluwaseun victoria",Ilara/Akaka Community Grammar School,REMO NORTH
"KOLEOSO, Motunrayo Mary.",Ilara/Akaka Community Grammar School,REMO NORTH
"Mrs. DAVIES,  Oluronke  A.",Ilara/Akaka Community Grammar School,REMO NORTH
"Mrs. FAMOROTI,  Elizabeth bosede",Ilara/Akaka Community Grammar School,REMO NORTH
"OBADARA, Oladejo alabi",Ilara/Akaka Community Grammar School,REMO NORTH
"OLUWAGBAMI, Victoria Omotoyosi.",Ilara/Akaka Community Grammar School,REMO NORTH
"OMOPO, Cecilia olusade",Ilara/Akaka Community Grammar School,REMO NORTH
"SOLARIN, Hassan Adefowope.",Ilara/Akaka Community Grammar School,REMO NORTH
"SOPITAN, Ayodele abiodun",Ilara/Akaka Community Grammar School,REMO NORTH
"TAIWO, Mariam Atinuke.",Ilara/Akaka Community Grammar School,REMO NORTH
"Mr. ORENUGA,  Omotayo obasola","Isara Community High School, Isara",REMO NORTH
"Mrs. OYEBAMIJI,  Felicia atinuke","Isara Community High School, Isara",REMO NORTH
"OYESANYA, Shaki kikelomo","Isara Community High School, Isara",REMO NORTH
"AWOJOBI, Christianah olusola","Isara Secondary School, Isara",REMO NORTH
"GBADEBO, Adesina Muraina.","Isara Secondary School, Isara",REMO NORTH
"Mr. DADA,  Adesola olukunle","Isara Secondary School, Isara",REMO NORTH
"Mr. SOLARU,  Babatunde oyedipe","Isara Secondary School, Isara",REMO NORTH
"Mrs. OYELAMI,  Olufunke  O.","Isara Secondary School, Isara",REMO NORTH
"OMOYENI, Folusho Gbemi.","Isara Secondary School, Isara",REMO NORTH
"OYELEDUN, Sanya Emmanuel.","Isara Secondary School, Isara",REMO NORTH
"RUNSEWE, Comfort afolake","Isara Secondary School, Isara",REMO NORTH
"SOLAJA, Abiodun mercy","Isara Secondary School, Isara",REMO NORTH
"Mr. SOTUBO,  Ayoola olusegun","Iyankan High School, Isara",REMO NORTH
"Mrs. KUMAPAYI,  Felicia omowunmi","Iyankan High School, Isara",REMO NORTH
"ADEYEYE, Babatunde Isaiah.",Ode Remo High School (Junior),REMO NORTH
"Mr. LAWAL,  Rafiu adewale",Ode Remo High School (Junior),REMO NORTH
"ONASANYA, Oriyomi modupe",Ode Remo High School (Junior),REMO NORTH
"OPAYINKA, Ronke olasimbo",Ode Remo High School (Junior),REMO NORTH
"SALAMI, Adeniyi olugbenga",Ode Remo High School (Junior),REMO NORTH
"ADESIPE, Felicia temidayo",Ode Remo High School (Senior),REMO NORTH
"DADA, Valerie Chinonso.",Ode Remo High School (Senior),REMO NORTH
"Mrs. OYENUGA,  Olufunke oluyemisi",Ode Remo High School (Senior),REMO NORTH
"ADEKUNLE, Kehinde peter",Orile Oko Community High School,REMO NORTH
"IGE, John olusola",Orile Oko Community High School,REMO NORTH
"MABADEJE, Oyindamola Afusat.",Orile Oko Community High School,REMO NORTH
"Mr. OGUNDELE,  Kunle isaac",Orile Oko Community High School,REMO NORTH
"Mrs. AKINNIYI,  Funmilayo  K.",Orile Oko Community High School,REMO NORTH
"OSO, Morenikeji Bilikisu.",Orile Oko Community High School,REMO NORTH
"OWOLABI, Rebecca abosede",Orile Oko Community High School,REMO NORTH
"QUADRI, Saliu adekunle",Orile Oko Community High School,REMO NORTH
"SANUSI, Taiwo Musiliu.",Orile Oko Community High School,REMO NORTH
"TAIWO, Basirat Jumoke.",Orile Oko Community High School,REMO NORTH
"ADEYANJU, Bukonla busayo","Saapade Grammar School, Saapade",REMO NORTH
"AIGBOLOGA, Paul Monday.","Saapade Grammar School, Saapade",REMO NORTH
"ALAWODE, Suraj odedele","Saapade Grammar School, Saapade",REMO NORTH
"CHIMEZIE, Yemisi Temitayo.","Saapade Grammar School, Saapade",REMO NORTH
"Mrs. ADEBANJO,  Funmilola modupe","Saapade Grammar School, Saapade",REMO NORTH
"Mrs. EKO,  Joy odion","Saapade Grammar School, Saapade",REMO NORTH
"Mrs. OKUNOLA,  Olubukola grace","Saapade Grammar School, Saapade",REMO NORTH
"ODUFESO, Tajudeen","Saapade Grammar School, Saapade",REMO NORTH
"OGUNSI, Saheed Oluwaseyi.","Saapade Grammar School, Saapade",REMO NORTH
"OGUNWOLE, Victor oluwaseun","Saapade Grammar School, Saapade",REMO NORTH
"SOLAJA, Sofolahan olufiropo","Saapade Grammar School, Saapade",REMO NORTH
"SOMEFUN, Esther adenike","Saapade Grammar School, Saapade",REMO NORTH
"ABIODUN, Modupeola oluyemisi","Ipara community High School, Ipara",Remo North
"GBOLADE, Sesan Sonre.","Ipara community High School, Ipara",Remo North
"Mr. OWOBAMIRIN,  Adeyinka oluseyi","Ipara community High School, Ipara",Remo North
"Mr. TAIWO,  Abiodun  A.","Ipara community High School, Ipara",Remo North
"Mrs. AKANNI,  Oludayo kehinde","Ipara community High School, Ipara",Remo North
"Mrs. DADA,  Olufunke olubusayo","Ipara community High School, Ipara",Remo North
"OLASEHINDE, Foluke esther","Ipara community High School, Ipara",Remo North
"ONYEBUEKE, Judith Oluebube.","Ipara community High School, Ipara",Remo North
"ABIONA, Rashidat oluwatoyin","Agbele Community High School, Sagamu",SAGAMU
"ADEBAYO, Afolake olaide","Agbele Community High School, Sagamu",SAGAMU
"ADESINA, Adewunmi rashidat","Agbele Community High School, Sagamu",SAGAMU
"ADETAYO, Modinat adenike","Agbele Community High School, Sagamu",SAGAMU
"AGBELERE, Dorcas Modupe.","Agbele Community High School, Sagamu",SAGAMU
"AKINFISOYE, Bosede Mary.","Agbele Community High School, Sagamu",SAGAMU
"ALIMI, Sakirat Adebukola.","Agbele Community High School, Sagamu",SAGAMU
"AYODELE, Taiwo olasunbo","Agbele Community High School, Sagamu",SAGAMU
"EKWURUKE, Oluwakemi phebian","Agbele Community High School, Sagamu",SAGAMU
"FEHINTOPE, Muinat Florence.","Agbele Community High School, Sagamu",SAGAMU
"JEKAMI, Oluwaseun lizzy","Agbele Community High School, Sagamu",SAGAMU
"JIBODU, Oluwaseun adeola","Agbele Community High School, Sagamu",SAGAMU
"MAKINDE, Funmilola temitope","Agbele Community High School, Sagamu",SAGAMU
"MUDASIRU, Ronke oluwatoyin","Agbele Community High School, Sagamu",SAGAMU
"Mr. ADENEKAN,  Emmanuel kayode","Agbele Community High School, Sagamu",SAGAMU
"Mr. AFOLABI,  Joel bayonle","Agbele Community High School, Sagamu",SAGAMU
"Mrs. AYODELE,  Aminat oluwagbeminiyi","Agbele Community High School, Sagamu",SAGAMU
"Mrs. DAIRO,  Taiwo tolulope","Agbele Community High School, Sagamu",SAGAMU
"Mrs. OLUTAYO,  Rachael adebola","Agbele Community High School, Sagamu",SAGAMU
"ODUMOSU, Bukonla ejimoh","Agbele Community High School, Sagamu",SAGAMU
"OGUNTIMEHIN, Theresa mojisola","Agbele Community High School, Sagamu",SAGAMU
"OKEKE, Oluwakemi muibat","Agbele Community High School, Sagamu",SAGAMU
"OLUWOLE, Bamidele olaitan","Agbele Community High School, Sagamu",SAGAMU
"ONI, Temidayo sunday","Agbele Community High School, Sagamu",SAGAMU
"RAPHAEL-EKE, Florence favour","Agbele Community High School, Sagamu",SAGAMU
"SHOYEMI, Williams remi","Agbele Community High School, Sagamu",SAGAMU
"WAHAB, Fatimah Titilope.","Agbele Community High School, Sagamu",SAGAMU
"ADEBAYO, Alice Morayo.",Batoro Community High School,SAGAMU
"ADEBISI, Adewale david",Batoro Community High School,SAGAMU
"ADEFALA, Oluwakemi Moninuola.",Batoro Community High School,SAGAMU
"ADEYEMI, Christopher adetayo",Batoro Community High School,SAGAMU
"AGBEJULE, Elizabeth olusola",Batoro Community High School,SAGAMU
"AILERU, Olalekan fatai",Batoro Community High School,SAGAMU
"AINA, Ganiyat adeyemi",Batoro Community High School,SAGAMU
"AIYEOLA, Adeniyi amos",Batoro Community High School,SAGAMU
"AJIBOYE, Adebusola foluso",Batoro Community High School,SAGAMU
"AKINSANYA, Ilesanmi olabisi",Batoro Community High School,SAGAMU
"AKINWUNMI, Bosede folake",Batoro Community High School,SAGAMU
"ALABI, Joshua olusina",Batoro Community High School,SAGAMU
"ATANLOGUN, Favour Adeola.",Batoro Community High School,SAGAMU
"BALOGUN, Femi gbenga",Batoro Community High School,SAGAMU
"BAMIGBOYE, Janet kehinde",Batoro Community High School,SAGAMU
"DIPEOLU, Oluwafunmilola oyeyemi",Batoro Community High School,SAGAMU
"EMOSU, Olufunke oluwakemi",Batoro Community High School,SAGAMU
"FAGBEMI, Francis olabisi",Batoro Community High School,SAGAMU
"FASUNON, Modupe nkechi adaku",Batoro Community High School,SAGAMU
"FEYISETAN, Oluwatosin afolake",Batoro Community High School,SAGAMU
"FOLORUNSHO, Adebisi olufunlayo",Batoro Community High School,SAGAMU
"HARUNA, Abimbola Modinat.",Batoro Community High School,SAGAMU
"HASSAN, Olusola ganiu",Batoro Community High School,SAGAMU
"IBITOYE, Mary Mojisola.",Batoro Community High School,SAGAMU
"IDOWU, Olumuyiwa  olufemi",Batoro Community High School,SAGAMU
"IFEMOSU, Abiodun esther",Batoro Community High School,SAGAMU
"Mr. AYANNUSI,  Sunday akinola",Batoro Community High School,SAGAMU
"Mrs. ALLINSON,  Oluwakemi bolaji",Batoro Community High School,SAGAMU
"Mrs. OGUNLESI,  Oriyomi oluyemisi",Batoro Community High School,SAGAMU
"ODESANYA, Olusegun sunday",Batoro Community High School,SAGAMU
"ODUJINRIN, Oluwatosin Olukayode.",Batoro Community High School,SAGAMU
"ODUNUGA, Muhydeen oluyemi",Batoro Community High School,SAGAMU
"OGUNADE, Anthony adewole",Batoro Community High School,SAGAMU
"OGUNADE, Florence olukemi",Batoro Community High School,SAGAMU
"OGUNBAYO, Modupe Folashade.",Batoro Community High School,SAGAMU
"OGUNFOWOKAN, Kehinde oluwafunmito",Batoro Community High School,SAGAMU
"OGUNJIMI-ADEBAYO, Elizabeth yetunde",Batoro Community High School,SAGAMU
"OGUNLANA, Emmanuel oluwakayode",Batoro Community High School,SAGAMU
"OLABISI, Idowu johnson",Batoro Community High School,SAGAMU
"OLADIPUPO, Rasidat temitope",Batoro Community High School,SAGAMU
"OLAORE, Victoria olukemi",Batoro Community High School,SAGAMU
"OMOJU, Mojirade wuraola",Batoro Community High School,SAGAMU
"ONAFALUJO, Oluwakemi Opeoluwa.",Batoro Community High School,SAGAMU
"OSHO, Okeowo olaseni",Batoro Community High School,SAGAMU
"SALAMI, Comfort oluwaseun",Batoro Community High School,SAGAMU
"SAMUEL, Adedamola Mary.",Batoro Community High School,SAGAMU
"SHITTU, Memunat Yetunde.",Batoro Community High School,SAGAMU
"SONUBI, Abisola arinola",Batoro Community High School,SAGAMU
"SONUGA, Olubunmi oluwakemi",Batoro Community High School,SAGAMU
"SONUGA, Samson bbatunde",Batoro Community High School,SAGAMU
"WILLIAMS-AJAYI, Olayinka",Batoro Community High School,SAGAMU
"YUSUF, Fausat tanwa",Batoro Community High School,SAGAMU
"ANIBABA, Adekunle solomon","Community Grammar School, Ode-Lemo",SAGAMU
"IGBASAN, Remilekun Hannah.","Community Grammar School, Ode-Lemo",SAGAMU
"LASISI, Abu Sunday.","Community Grammar School, Ode-Lemo",SAGAMU
"Mrs. ADEBAJO,  Francisca yemi","Community Grammar School, Ode-Lemo",SAGAMU
"SOYEMI, Olanrewaju segun","Community Grammar School, Ode-Lemo",SAGAMU
"EFUWAPE, Olalekan victr","Daniel Comprehensive High School, Sagamu",SAGAMU
"FOLARIN, Lucia ajibike","Daniel Comprehensive High School, Sagamu",SAGAMU
"GAZALI, Azeezat Atinuke.","Daniel Comprehensive High School, Sagamu",SAGAMU
"KUYE, Iyabo muibat","Daniel Comprehensive High School, Sagamu",SAGAMU
"Mrs. AKANNI,  Toyin misturat","Daniel Comprehensive High School, Sagamu",SAGAMU
"Mrs. OGUNYANWO,  Maria temitope","Daniel Comprehensive High School, Sagamu",SAGAMU
"OSHISAMI, Olabisi jokotade","Daniel Comprehensive High School, Sagamu",SAGAMU
"OYEWOGA, Hassan ayodele","Daniel Comprehensive High School, Sagamu",SAGAMU
"SALIMON, Sukurat Olabisi.","Daniel Comprehensive High School, Sagamu",SAGAMU
"SOGBESAN, Olatunji olawale","Daniel Comprehensive High School, Sagamu",SAGAMU
"SONUGA, Olanshile nimota","Daniel Comprehensive High School, Sagamu",SAGAMU
"UKANDU, Henry Chigozie.","Daniel Comprehensive High School, Sagamu",SAGAMU
"ABIOLA-OLUDAINI, Tolulope aina","Ijagba Community High School, Sotubo",SAGAMU
"ADEMUYIWA, Moses adedayo","Ijagba Community High School, Sotubo",SAGAMU
"ADENAIKE, Bolanle christianah","Ijagba Community High School, Sotubo",SAGAMU
"ADEYEMI, Modupe felicia","Ijagba Community High School, Sotubo",SAGAMU
"AKINLAJA, Adijat kuburat","Ijagba Community High School, Sotubo",SAGAMU
"BANKOLE, Ranti olusola","Ijagba Community High School, Sotubo",SAGAMU
"BELLO, Adekunle omolaja","Ijagba Community High School, Sotubo",SAGAMU
"ENEKWA, Ihekerema perpetual","Ijagba Community High School, Sotubo",SAGAMU
"LADIPO, Taiwo ogunsakin","Ijagba Community High School, Sotubo",SAGAMU
"Mr. ALABI,  Saliu ishola","Ijagba Community High School, Sotubo",SAGAMU
"Mrs. AKARIGBO,  Ruth olukemi","Ijagba Community High School, Sotubo",SAGAMU
"Mrs. AMOO,  Rasidat olusola","Ijagba Community High School, Sotubo",SAGAMU
"Mrs. KOLAWOLE,  Elizabeth anjara","Ijagba Community High School, Sotubo",SAGAMU
"ODEYEMI, Adetoun abigeal","Ijagba Community High School, Sotubo",SAGAMU
"ODUMBO, Oriyomi Moninuola.","Ijagba Community High School, Sotubo",SAGAMU
"ODUSOLU, Peter adedayo","Ijagba Community High School, Sotubo",SAGAMU
"OGUNDANA, Oludayo abosede","Ijagba Community High School, Sotubo",SAGAMU
"OGUNJIMI, John adebayo","Ijagba Community High School, Sotubo",SAGAMU
"OLADIPUPO, Olakitan abolanle","Ijagba Community High School, Sotubo",SAGAMU
"OMOBO, Olufunbi mercy","Ijagba Community High School, Sotubo",SAGAMU
"ONANUGA, Ayodele samuel","Ijagba Community High School, Sotubo",SAGAMU
"OYARINU, Titilayo ayobami","Ijagba Community High School, Sotubo",SAGAMU
"SHONIBARE, Kehinde olufunlola","Ijagba Community High School, Sotubo",SAGAMU
"SOKOYA, Omotoyosi Abiola.","Ijagba Community High School, Sotubo",SAGAMU
"ADELEYE, Mary omowunmi","Makun High School, (Junior), Sagamu",SAGAMU
"ADENIYI, Adejoke mercy","Makun High School, (Junior), Sagamu",SAGAMU
"ADEYEMI, Christiana Funto.","Makun High School, (Junior), Sagamu",SAGAMU
"AGBABIAKA, Kehinde busrat","Makun High School, (Junior), Sagamu",SAGAMU
"AJAYI, Oluwayemisi abeni","Makun High School, (Junior), Sagamu",SAGAMU
"AKINSANYA, Oluwatosin Oluwatoyin.","Makun High School, (Junior), Sagamu",SAGAMU
"AKINYEMI, Saheed Olanipekun.","Makun High School, (Junior), Sagamu",SAGAMU
"ALABI, Abiodun","Makun High School, (Junior), Sagamu",SAGAMU
"AMBALI, Sakiru olajide","Makun High School, (Junior), Sagamu",SAGAMU
"AMUSA, Maryam Dupe.","Makun High School, (Junior), Sagamu",SAGAMU
"BADEJO, Elizabeth","Makun High School, (Junior), Sagamu",SAGAMU
"BUSARI, Mojisola memunot","Makun High School, (Junior), Sagamu",SAGAMU
"DARAMOLA, Bolanle","Makun High School, (Junior), Sagamu",SAGAMU
"FASUNON, Adedayo adewale","Makun High School, (Junior), Sagamu",SAGAMU
"FASUNON, Victoria adeyinka","Makun High School, (Junior), Sagamu",SAGAMU
"HOWELLS, Aiyetoro Adelarin.","Makun High School, (Junior), Sagamu",SAGAMU
"IWANEFUN, Adedare abidemi","Makun High School, (Junior), Sagamu",SAGAMU
"JAMES, Freeman","Makun High School, (Junior), Sagamu",SAGAMU
"JAYEOLA, Adeola dorcas","Makun High School, (Junior), Sagamu",SAGAMU
"KAYODE-AKINYEMI, Temidayo oluwakemi","Makun High School, (Junior), Sagamu",SAGAMU
"LADIPO, Oluwatosin oluyemi","Makun High School, (Junior), Sagamu",SAGAMU
"Mr. ATOBAJAYE,  Adepoju samson","Makun High School, (Junior), Sagamu",SAGAMU
"Mr. OYEWUSI,  Titus olusegun","Makun High School, (Junior), Sagamu",SAGAMU
"OBIALOR, Esther chinyere","Makun High School, (Junior), Sagamu",SAGAMU
"OGUNDELE, Omolara Elizabeth.","Makun High School, (Junior), Sagamu",SAGAMU
"OGUNSOLA, Rasheedat olabisi","Makun High School, (Junior), Sagamu",SAGAMU
"OLADEINDE, Adebukunola abidemi","Makun High School, (Junior), Sagamu",SAGAMU
"OLAWUYI, Johnson olusegun","Makun High School, (Junior), Sagamu",SAGAMU
"OLOPADE, Olujoke elizabeth","Makun High School, (Junior), Sagamu",SAGAMU
"SALAU, Deborah motunrayo","Makun High School, (Junior), Sagamu",SAGAMU
"SANGOWANWA, Ebunoluwa oluwadamilare","Makun High School, (Junior), Sagamu",SAGAMU
"SODADE, Femi oluwaseyi","Makun High School, (Junior), Sagamu",SAGAMU
"TAIWO-DELUPE, Mujidat ajoke","Makun High School, (Junior), Sagamu",SAGAMU
"ADEFISAN, Yetunde Ajewole.","Makun High School, (Senior), Sagamu",SAGAMU
"ADELEKE, Timothy ademola","Makun High School, (Senior), Sagamu",SAGAMU
"ADENIPEBI, Idowu mary","Makun High School, (Senior), Sagamu",SAGAMU
"AFOLABI, Olusegun babatunde","Makun High School, (Senior), Sagamu",SAGAMU
"BISIRIYU, Rasidat Bolanle.","Makun High School, (Senior), Sagamu",SAGAMU
"ERINOSO, Oluwabunmi arike","Makun High School, (Senior), Sagamu",SAGAMU
"FASHINA, Elizabeth temidayo","Makun High School, (Senior), Sagamu",SAGAMU
"FOLARIN, Oluwaseyi adewale","Makun High School, (Senior), Sagamu",SAGAMU
"IDOWU, Victoria adebukanyo","Makun High School, (Senior), Sagamu",SAGAMU
"MUIBI, Idowu rashidat","Makun High School, (Senior), Sagamu",SAGAMU
"Mr. ADEGBIYI,  Idowu  O.","Makun High School, (Senior), Sagamu",SAGAMU
"Mr. DAIRO,  Zaccheaus abimbola","Makun High School, (Senior), Sagamu",SAGAMU
"Mr. JAYEOBA,  Babafemi kester","Makun High School, (Senior), Sagamu",SAGAMU
"Mrs. ADEYEYE,  Folasade bolaji","Makun High School, (Senior), Sagamu",SAGAMU
"Mrs. AKINBOWALE,  Temidayo","Makun High School, (Senior), Sagamu",SAGAMU
"Mrs. AKIODE,  Damola elizabeth","Makun High School, (Senior), Sagamu",SAGAMU
"Mrs. ALABI,  Fatimat oluwafunke","Makun High School, (Senior), Sagamu",SAGAMU
"Mrs. AWOKOYA,  Abosede adesola","Makun High School, (Senior), Sagamu",SAGAMU
"Mrs. OYEMADE,  Comfort folasade","Makun High School, (Senior), Sagamu",SAGAMU
"OKE, Olatunde isaac","Makun High School, (Senior), Sagamu",SAGAMU
"OKEKE, Okafor","Makun High School, (Senior), Sagamu",SAGAMU
"OYEGUNLE, Kudirat bose","Makun High School, (Senior), Sagamu",SAGAMU
"ADEGBOYEGA, Zainab bolanle","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"ADENIRAN, Florence Olubunmi.","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"AGBABIAKA, Lateef olalekan","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"AJIBOYE, Moses oluwadare","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"ALUKO, Oluwaseun kafilat","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"AYEYUN, James adebayo","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"BADA, Ayodeji","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"BAKINDE, Adedayo oluwakemi","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"EFUWAPE, Abosede Omowunmi.","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"IMRAN, Kabirat Olatundun.","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"JOSHUA, Pauline amokeye","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"LERAMO, Bunmi anuoluwapo","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"MEROYI, Loveth oyekozuru","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"Mr. OLUBI,  Adekunle","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"Mrs. AFOLABI,  Abosede abigeal","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"Mrs. IFEBAJO,  Bolanle omolara","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"Mrs. OSINAIKE,  Omotola sherifat","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"ODERINDE, Afolake felicia","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"ODUMESI, Selimot florence","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"OJEYINKA, Yetunde olabimpe","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"OLADELE, Olufunke olukemi","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"OLATUNJI-OSHO, Aderonke idowu","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"OLUWADARE, Temitope oloruntobi","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"ONANUGA, Adejoke felicua","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"SOLARU, Omowunmi abiodun","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"SOPEJU, Adeola Olufunmilayo.","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"SURAKAT, Taiwo omobolanle","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"YEWANDE, Ojuolape silifat","Methodist Comprehensive College (Junior), Sagamu",SAGAMU
"ADEBAJO, Ademola kehinde","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"ADEBOYE, Deborah Tosin.","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"ADEFOLURIN, Adesesan daisi","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"ADERIBIGBE, Obamowa Matthew.","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"AKINMADE, Adedayo  Bamidele.","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"ANIMASHAUN, Nojeem ayinde","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"ATOBAJAYE, Olusola ibukunoluwa","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"DESALU, Mcduncan oladipupo","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"FOWE, Temitope Rebecca.","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"KAZEEM, Taiwo olufunmibi","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mr. BANJO,  Joseph adegbenga","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mr. OTUKOYA,  Adekunle oluwaseun","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mr. OYEDAPO,  Tubosun adetoye","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mr. OYESANYA,  Oluwasegun seyi","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mrs. AGBOOLA,  Esther oyebola","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mrs. DELE-OJO,  Oluremi enitan","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mrs. SADIKU,  Victoria kehinde","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"Mrs. TAIWO,  Ibikunle esther","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OGUNBIYI, Adesanya johnson","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OGUNLEYE, Taiwo adesola","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OGUNNOWO, Olabisi funmilayo","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OHA, Franca","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OKUNEYE, Olusola Olorunkemi.","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OLANREWAJU, Titilope omowunmi","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OREKOYA, Kolawole oludada","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OYELADE, Olukemi folake","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"OYEWOLE, Stephen bosun","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"SHONAIKE, Janet funmilayo","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"TAIWO, Adedayo Rashidat.","Methodist Comprehensive College (Senior), Sagamu",SAGAMU
"ABASS, Veronica olusewa","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ABBAS, Bilqis fadekemi","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ADEDEJI, Abosede omolade","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ADETAYO, Seun Yetunde.","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ADETOLA, Bolanle Ajoke.","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ADETORO, Foluke adefunke","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ADETUNJI, Adeniyi paul","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"AKINSOJI, Florence folashade","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"AKINTOLA, Saidi akinjobi","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ALIDU, Ganiyat tolulope","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ALLISON, Sheriff adeniyi","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ASEKUN, Adeyinka Muinat.","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"BADMUS, Azeez olawale","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"BALOGUN, Ifeoluwa saheed","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"BALOGUN, Olusola olabisi","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"BASHIRU, Dauda adegbenro","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"FALAJIKI, Folakemi mosebolatn","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"HANDU SARATUH, Abimbola adebambo","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"IDOWU, Moses Olutunde.","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"IDOWU, Olaide adewale","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ITODO, Felicia Enayi.","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"JIMOH, Temilade oluwayemisi conf","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"JUNAID, Serifat funmi","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"KOLADE, Ayodele ebenezer","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"LAWAL, Oluwaseun olusola","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"MOSADOLUWA, Gbekeloluwa Adetoun.","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"Mr. OGUNLAJA,  Akorede akanbi","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"Mrs. KAJEWOLE,  Bola cecilia","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"Mrs. KOLADE,  Olabisi temitope","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"Mrs. MUSIBAU,  Laifat adedoyin","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ODUSANYA, Kehinde toluke","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"OGUNDIPE, Abayomi saheed","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"OMOFOYE, Iyabode prisca","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ONI, Olumide akinjide","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ONIFADE, Oluwaseyi Idayat.","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"OWOYEMI, Simiat olubunmi","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"SOYINKA, Adesola oluwaseun","Muleruwa Community High School, Gbaga Ogijo",SAGAMU
"ABDUL, Beatrice adetoun","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ABDULGANIYYI, Muhammad Bashir.","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADEBAYO, Funmilayo adewumi","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADEBIMPE, Fasilat Adejoke.","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADEFI, Abiodun titilayo","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADEJUMO, Oyewunmi motunryo","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADEKOMAYA, Selimot oluwatoyin","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADENIRAN, Oluwayemisi oluwatoyin","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADENIYI, Adetoun esther","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADERINLUWO, Elizabeth oluyemisi","Muslim High Sch. (Junior), Sagamu",SAGAMU
"AYEYUN, Ganiyat adedayo","Muslim High Sch. (Junior), Sagamu",SAGAMU
"BAKARE, Fatimah tolani","Muslim High Sch. (Junior), Sagamu",SAGAMU
"EGBETOKUN, Christianah oluwayemisi","Muslim High Sch. (Junior), Sagamu",SAGAMU
"EWEBIYI, Taiwo bolanle","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ISHOLA, Mutiat adunni","Muslim High Sch. (Junior), Sagamu",SAGAMU
"JAIYESIMI, Oluwafunmilayo abosede","Muslim High Sch. (Junior), Sagamu",SAGAMU
"JIMOH, Rashidat omolola","Muslim High Sch. (Junior), Sagamu",SAGAMU
"JOSEPH, Atinuke elizabeth","Muslim High Sch. (Junior), Sagamu",SAGAMU
"KAZEEM, Babatunde kabir","Muslim High Sch. (Junior), Sagamu",SAGAMU
"LATEEF, Kazeem a.","Muslim High Sch. (Junior), Sagamu",SAGAMU
"LAWAL, Olushola adijat","Muslim High Sch. (Junior), Sagamu",SAGAMU
"Mr. JIMOH,  Yesiru adedeji","Muslim High Sch. (Junior), Sagamu",SAGAMU
"Mrs. ABIB - ATANDA,  Olukemi ajoke","Muslim High Sch. (Junior), Sagamu",SAGAMU
"Mrs. AKINYEMI,  Grace solakunmi","Muslim High Sch. (Junior), Sagamu",SAGAMU
"Mrs. JIMOH-TAIWO,  Taibat adenike","Muslim High Sch. (Junior), Sagamu",SAGAMU
"Mrs. ODUNLAMI,  Modupe mary","Muslim High Sch. (Junior), Sagamu",SAGAMU
"OBATOSIN, Oluwatoyin Dorcas.","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ODEGBESAN, Samson oludayo","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ODULATE, Adijat olayinka","Muslim High Sch. (Junior), Sagamu",SAGAMU
"OGUNSANYA, Taiwo olubunmi","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ORESAJO, Adenike bolaji","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ORESAJO, Tosin adejoke","Muslim High Sch. (Junior), Sagamu",SAGAMU
"OSAREMEN, Florence funmilayo","Muslim High Sch. (Junior), Sagamu",SAGAMU
"OSOKO, Olukunle olufemi","Muslim High Sch. (Junior), Sagamu",SAGAMU
"SANSALIU, Mujeedat adedoja","Muslim High Sch. (Junior), Sagamu",SAGAMU
"SURAKAT, Buraimo oluwasegun","Muslim High Sch. (Junior), Sagamu",SAGAMU
"ADELAJA, Jumoke Anuoluwapo.","Muslim High Sch. (Senior), Sagamu",SAGAMU
"AINA, Adetoun folake","Muslim High Sch. (Senior), Sagamu",SAGAMU
"AKINDELE, Sola Omolola.","Muslim High Sch. (Senior), Sagamu",SAGAMU
"BOLUJO, Adefunke julianah","Muslim High Sch. (Senior), Sagamu",SAGAMU
"IDOWU, Olayemi nosirat","Muslim High Sch. (Senior), Sagamu",SAGAMU
"JUBRIL, Bashiru olufemi","Muslim High Sch. (Senior), Sagamu",SAGAMU
"Mrs. AMUSA,  Zainab olusola","Muslim High Sch. (Senior), Sagamu",SAGAMU
"Mrs. AWOKUNLE,  Oluwaseun","Muslim High Sch. (Senior), Sagamu",SAGAMU
"Mrs. HASSAN,  Ejimot oluwakemi","Muslim High Sch. (Senior), Sagamu",SAGAMU
"Mrs. OKE,  Memunat wuraola","Muslim High Sch. (Senior), Sagamu",SAGAMU
"Mrs. OLURO,  Abimbola temitope","Muslim High Sch. (Senior), Sagamu",SAGAMU
"Mrs. SOWEMIMO,  Iyabode olupemi","Muslim High Sch. (Senior), Sagamu",SAGAMU
"ODUYERU, Eunice aanuoluwa","Muslim High Sch. (Senior), Sagamu",SAGAMU
"OYEDIRAN, Oluremi olusesan","Muslim High Sch. (Senior), Sagamu",SAGAMU
"OYENEYE, Cecilia taiwo","Muslim High Sch. (Senior), Sagamu",SAGAMU
"OYESANYA, Modinat omomunmi","Muslim High Sch. (Senior), Sagamu",SAGAMU
"SOMOTUN, Bisola rukayat","Muslim High Sch. (Senior), Sagamu",SAGAMU
"SULAIMON, Ismail Adebanjo.","Muslim High Sch. (Senior), Sagamu",SAGAMU
"Mr. ADEYEMI,  Oyewale fatai","Ofin High School, Sagamu",SAGAMU
"Mr. OYEBODE,  Taye olaitan","Ofin High School, Sagamu",SAGAMU
"SOLAJA, Olusola adedeji","Ofin High School, Sagamu",SAGAMU
"SOTONWA, Rachel Abolanle.","Ofin High School, Sagamu",SAGAMU
"ADEBOYE, Ebunoluwa motilade","Ogijo Community High School (Junior), Ogijo",SAGAMU
"ADESANYA, Olawande modupe","Ogijo Community High School (Junior), Ogijo",SAGAMU
"ADESANYA, Racheal olaide","Ogijo Community High School (Junior), Ogijo",SAGAMU
"ADESINA, Olabode adebayo","Ogijo Community High School (Junior), Ogijo",SAGAMU
"ADEYIGA, Basirat adeola","Ogijo Community High School (Junior), Ogijo",SAGAMU
"AKINLADE, Deborah adebanke","Ogijo Community High School (Junior), Ogijo",SAGAMU
"AKOSILE, Oluwaseun agnes","Ogijo Community High School (Junior), Ogijo",SAGAMU
"ALIMI, Monsurat olawunmi","Ogijo Community High School (Junior), Ogijo",SAGAMU
"AYODEJI, Alice iyabo","Ogijo Community High School (Junior), Ogijo",SAGAMU
"AYOOLA, Ruth bolanle lawon","Ogijo Community High School (Junior), Ogijo",SAGAMU
"MAKUSOTA, Kehinde Mary.","Ogijo Community High School (Junior), Ogijo",SAGAMU
"MORAFA, Oluseye sunday","Ogijo Community High School (Junior), Ogijo",SAGAMU
"Mr. OGUNLAJA,  Olujimi bamidele","Ogijo Community High School (Junior), Ogijo",SAGAMU
"Mrs. AKANNI,  Oluwatoyin ibilola","Ogijo Community High School (Junior), Ogijo",SAGAMU
"Mrs. ODUMERU,  Ramota adebisi","Ogijo Community High School (Junior), Ogijo",SAGAMU
"Mrs. ODUMUYIWA,  Tolulope h.","Ogijo Community High School (Junior), Ogijo",SAGAMU
"Mrs. THOMAS,  Omotayo olubukola","Ogijo Community High School (Junior), Ogijo",SAGAMU
"OBADIGIE, Adenike grace","Ogijo Community High School (Junior), Ogijo",SAGAMU
"OBITUSIN, Olayinka adebimpe","Ogijo Community High School (Junior), Ogijo",SAGAMU
"ODUGUWA, Lucia rotimi","Ogijo Community High School (Junior), Ogijo",SAGAMU
"OGUNFODUNRIN, Ayokunmi Grace.","Ogijo Community High School (Junior), Ogijo",SAGAMU
"OLADIPUPO, Fatimat aderonke","Ogijo Community High School (Junior), Ogijo",SAGAMU
"OLUREMI, Abimbola ademola","Ogijo Community High School (Junior), Ogijo",SAGAMU
"OLUWO, Adepeju omobowale","Ogijo Community High School (Junior), Ogijo",SAGAMU
"OYEGUNLE, Oluwabunmi jumai","Ogijo Community High School (Junior), Ogijo",SAGAMU
"SOSANYA, Oluwayemisi Comfort.","Ogijo Community High School (Junior), Ogijo",SAGAMU
"ADELEYE, Aderonke Oluyemisi.","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ADEMBAWA, Abosede aderonke","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ADESANYA, Olufunmilayo foluke","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ADETUNJI, Oluseye  oyeyemi","Ogijo Community High School (Senior), Ogijo",SAGAMU
"AJAYI, Deborah jumoke","Ogijo Community High School (Senior), Ogijo",SAGAMU
"AKINBAMI, Ayodele samson","Ogijo Community High School (Senior), Ogijo",SAGAMU
"AKOMOLAFE, Temitope beatrice","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ALADE, Adejuwon Damilare.","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ALLI-KOLAWOLE, Victoria Omolade.","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ALONGE, Omobolanle christianah","Ogijo Community High School (Senior), Ogijo",SAGAMU
"AROWOLO, Wumi abiola","Ogijo Community High School (Senior), Ogijo",SAGAMU
"AWOSANYA, Foluke Ifeoluwa.","Ogijo Community High School (Senior), Ogijo",SAGAMU
"BADEWA, Mariam Opeyemi.","Ogijo Community High School (Senior), Ogijo",SAGAMU
"DOSUMU, Oreofe","Ogijo Community High School (Senior), Ogijo",SAGAMU
"HAMZAT, Abosede mary","Ogijo Community High School (Senior), Ogijo",SAGAMU
"JOSEPH, Ibironke oluwakemui","Ogijo Community High School (Senior), Ogijo",SAGAMU
"LYNTAZ OSAGIE, Oluwakemi oluwayinka","Ogijo Community High School (Senior), Ogijo",SAGAMU
"Mr. AYOOLUWA,  Adewale fred","Ogijo Community High School (Senior), Ogijo",SAGAMU
"Mrs. AJAYI,  Mariam olubukonla","Ogijo Community High School (Senior), Ogijo",SAGAMU
"Mrs. AYODELE,  Wuraola omodunmi","Ogijo Community High School (Senior), Ogijo",SAGAMU
"Mrs. BADEJO,  Olanike adesola","Ogijo Community High School (Senior), Ogijo",SAGAMU
"Mrs. ENIDUNNI,  Adefunke gbemisola","Ogijo Community High School (Senior), Ogijo",SAGAMU
"Mrs. KEKERE-EKU,  Dupe elizabeth","Ogijo Community High School (Senior), Ogijo",SAGAMU
"OBEBE, Oluwaseun Sarah.","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ODUMOSU, Ezekiel olusesan","Ogijo Community High School (Senior), Ogijo",SAGAMU
"SHONUBI, Esther olubunmi","Ogijo Community High School (Senior), Ogijo",SAGAMU
"SOFEKUN, Morolaoluwa Ayobami.","Ogijo Community High School (Senior), Ogijo",SAGAMU
"TAIWO, Toyin abiodun","Ogijo Community High School (Senior), Ogijo",SAGAMU
"TORU, Kolawole samuel","Ogijo Community High School (Senior), Ogijo",SAGAMU
"ADEKOYA, Nathaniel oluyomi","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ADESHINA, Mujidat Adenike.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ADETAYO, Titilope Omobowale.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"AKINWANDE, Oluremi abiola","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ATITEBI, Philips Wasiu.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"AWOPETU, Eunice Fayoke.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"AYEDUN, Victoria idowu oriyomi","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"EZUWORE, Martha Idowu.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"HAMMED, Gasali Abiodun.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"LAWAL, Serifat Olusola.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"MUHAMMED JAMIU, Abdulkabir","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"Mr. AFOLABI,  Musibau ojo","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"Mr. AKARIGBO,  Oriyomi","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"Mrs. ADEFOLURIN,  Justina  jumbo","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"Mrs. AGUDA,  Taiwo ajoke","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"Mrs. ALAO,  Afusat bolanle","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"Mrs. ASHAYE-ADESANYA,  Adedayo oluseun","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"Mrs. OLUWAFEMI,  Adesewa ibiyemi ayodeji","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ODEBIYI, Seigha Abigael.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ODESANYA, Oluwaseun odubiyi","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ODUSOGA, Modupe Falilat.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ODUYOMI, Oluwayemisi fausat","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OGUNBOWALE, Bolade olusola","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OGUNSANYA, Adewasola Elizabeth.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OGUNTUSIN, Elizabeth Ibitola.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OJOMO, Bisola","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OLUSOJI, James sunday","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OSANYINGBEMI, Kehinde Ebenezer.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OSENI, Rasheedat oluremi","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OTHE, Adetutu modupe","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OWOLABI, Taiwo Yetunde.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OYENIYI, Victoria olajire","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"OYENUGA, Oluwatoyin R.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"SALIU, Oluwatoyin bolajoko","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"SIMEON, Kikelomo Oluwakemi.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"TIJANI, Olubukanla Omowunmi.","Ogo-Oluwa C Ommunity Model Secondary School, Ajegunle, Ogijo",SAGAMU
"ADAMS, Oluwaseyi keji","Olomimeji Community High School, Emuren",SAGAMU
"ADEFALA, Adebayo oluwakorede","Olomimeji Community High School, Emuren",SAGAMU
"ASIMI, Jamiu adeniran","Olomimeji Community High School, Emuren",SAGAMU
"ASIMI, Kikelomo abolore","Olomimeji Community High School, Emuren",SAGAMU
"BABATUNDE, Vincent Adewole.","Olomimeji Community High School, Emuren",SAGAMU
"EBODA, Oluremi phebean","Olomimeji Community High School, Emuren",SAGAMU
"KASALI, Taiwo idayat","Olomimeji Community High School, Emuren",SAGAMU
"Mrs. OMOTUBORA,  Grace funmilola","Olomimeji Community High School, Emuren",SAGAMU
"SULAIMAN, Abdul Rafiu.","Olomimeji Community High School, Emuren",SAGAMU
"ADEBANJO, Adebola sunday","Remo Divisional High School (Junior), Sagamu",SAGAMU
"ADENIYI, Victoria olajire blessing","Remo Divisional High School (Junior), Sagamu",SAGAMU
"ADESANYA, Adebusola Folashade.","Remo Divisional High School (Junior), Sagamu",SAGAMU
"AINA, Kamaldeeen tubosun","Remo Divisional High School (Junior), Sagamu",SAGAMU
"AKANDE, Racheal oluwakemi","Remo Divisional High School (Junior), Sagamu",SAGAMU
"AKINTOYE, Adedayo abiola","Remo Divisional High School (Junior), Sagamu",SAGAMU
"AKINTOYE, Busayo christianah","Remo Divisional High School (Junior), Sagamu",SAGAMU
"BELLO, Funmilayo oluwatoyin","Remo Divisional High School (Junior), Sagamu",SAGAMU
"BEMINI, Comfort solape","Remo Divisional High School (Junior), Sagamu",SAGAMU
"FREEMAN, Olaoluwa A.","Remo Divisional High School (Junior), Sagamu",SAGAMU
"LAWAL, Jimoh owolabi abiola","Remo Divisional High School (Junior), Sagamu",SAGAMU
"Mrs. IDOWU,  Kikelomo abosede","Remo Divisional High School (Junior), Sagamu",SAGAMU
"Mrs. OGUNYANWO,  Okenike omobolanle","Remo Divisional High School (Junior), Sagamu",SAGAMU
"ODUNSI, Abayomi funso","Remo Divisional High School (Junior), Sagamu",SAGAMU
"ODUSANYA, Titilayo olufunmilayo","Remo Divisional High School (Junior), Sagamu",SAGAMU
"OGUNLANA, Olusade bosede","Remo Divisional High School (Junior), Sagamu",SAGAMU
"OLANIYI, Adetutu olorunifesimi","Remo Divisional High School (Junior), Sagamu",SAGAMU
"OLATUNJI, Mabel oluremi","Remo Divisional High School (Junior), Sagamu",SAGAMU
"OLOKO, Abiodun olalekan","Remo Divisional High School (Junior), Sagamu",SAGAMU
"OYEDARE, Deborah oluwatoyin","Remo Divisional High School (Junior), Sagamu",SAGAMU
"SHOLADOYE, Biliki elizbeth","Remo Divisional High School (Junior), Sagamu",SAGAMU
"SONEYE, Busola opeyemi","Remo Divisional High School (Junior), Sagamu",SAGAMU
"SOYOMBO, Abimbola Damilola.","Remo Divisional High School (Junior), Sagamu",SAGAMU
"ADEYEMI, Rhoda Omolola.","Remo Divisional High School (Senior), Sagamu",SAGAMU
"ALATISE, Oyinloye Olayiwola.","Remo Divisional High School (Senior), Sagamu",SAGAMU
"FATADE, Jeremiah olumuyiwa","Remo Divisional High School (Senior), Sagamu",SAGAMU
"FOLARIN, Oyepero dorcas","Remo Divisional High School (Senior), Sagamu",SAGAMU
"HASSAN, Afolashade olubusola","Remo Divisional High School (Senior), Sagamu",SAGAMU
"IFETAYO, Adekunle michael","Remo Divisional High School (Senior), Sagamu",SAGAMU
"IPAYE, Ayotola omotola","Remo Divisional High School (Senior), Sagamu",SAGAMU
"KOLA-JOHNSON, Fadekemi","Remo Divisional High School (Senior), Sagamu",SAGAMU
"MAKANJUOLA, Adebayo olurotimi","Remo Divisional High School (Senior), Sagamu",SAGAMU
"Miss Sotubo,  Folasade kofoworola","Remo Divisional High School (Senior), Sagamu",SAGAMU
"Mr. ADESANYA,  Adeniyi olanrewaju","Remo Divisional High School (Senior), Sagamu",SAGAMU
"Mr. OPEOLUWA,  Olufemi kasumu","Remo Divisional High School (Senior), Sagamu",SAGAMU
"Mr. ROSANWO,  Adeyemi olamide jedidah","Remo Divisional High School (Senior), Sagamu",SAGAMU
"Mrs. KADIRI,  Mistura moyosade","Remo Divisional High School (Senior), Sagamu",SAGAMU
"Mrs. KAJOPELAYE,  Adetutu alice","Remo Divisional High School (Senior), Sagamu",SAGAMU
"Mrs. ONAKOYA,  Busurat oluwakemi","Remo Divisional High School (Senior), Sagamu",SAGAMU
"ODUWAIYE, Grace adebukola","Remo Divisional High School (Senior), Sagamu",SAGAMU
"OGUNGBEMI, Folakemi tokunbo","Remo Divisional High School (Senior), Sagamu",SAGAMU
"OGUNKOYA, Oluwakemi fatimah","Remo Divisional High School (Senior), Sagamu",SAGAMU
"POSU, Mautin bolanle","Remo Divisional High School (Senior), Sagamu",SAGAMU
"SOKOYA, Binta Mosunmola.","Remo Divisional High School (Senior), Sagamu",SAGAMU
"ADEBOYE, Kehinde olawunmi","Remo Secondary School (Junior), Sagamu",SAGAMU
"ADEDEJI, Odunola olubusayo","Remo Secondary School (Junior), Sagamu",SAGAMU
"ADEDEJI, Tirimisiyu adekunle kola","Remo Secondary School (Junior), Sagamu",SAGAMU
"ADEDOYIN, Taiwo toyin","Remo Secondary School (Junior), Sagamu",SAGAMU
"ADEGBOYEGA, Adebowale john","Remo Secondary School (Junior), Sagamu",SAGAMU
"ADELASE-LAWAL, Kudirat olayinka","Remo Secondary School (Junior), Sagamu",SAGAMU
"ADESANWO, Babatunde akinsola","Remo Secondary School (Junior), Sagamu",SAGAMU
"AKIODE, Oluyemisi ruth","Remo Secondary School (Junior), Sagamu",SAGAMU
"AROGUN, Sarah oluwabusayo","Remo Secondary School (Junior), Sagamu",SAGAMU
"AYANNUGA, Owodunni john","Remo Secondary School (Junior), Sagamu",SAGAMU
"BAKARE, Kehinde lateefat","Remo Secondary School (Junior), Sagamu",SAGAMU
"BELLO, Abeeb babatunde","Remo Secondary School (Junior), Sagamu",SAGAMU
"JIMOH, Oluronke olayinka","Remo Secondary School (Junior), Sagamu",SAGAMU
"JIMOH, Rukayat folasade","Remo Secondary School (Junior), Sagamu",SAGAMU
"MAKINDE, Waheed ajikanle","Remo Secondary School (Junior), Sagamu",SAGAMU
"Mr. ONAJOBI,  Temitope onaolapo","Remo Secondary School (Junior), Sagamu",SAGAMU
"Mrs. EJIBUNU,  Bolanle oluyemisi","Remo Secondary School (Junior), Sagamu",SAGAMU
"Mrs. LASISI,  Iyabo funmilola","Remo Secondary School (Junior), Sagamu",SAGAMU
"OGUNBUNMI, Alice adebunmi","Remo Secondary School (Junior), Sagamu",SAGAMU
"OGUNDIJO, Taiwo caroline","Remo Secondary School (Junior), Sagamu",SAGAMU
"OGUNFOWODU, Olalekan sunday","Remo Secondary School (Junior), Sagamu",SAGAMU
"OGUNLEYE, Michael adelaja","Remo Secondary School (Junior), Sagamu",SAGAMU
"OGUNLOLA, Sunday adekunle peter","Remo Secondary School (Junior), Sagamu",SAGAMU
"OGUNSAN, Felicia afolasade","Remo Secondary School (Junior), Sagamu",SAGAMU
"OGUNSEMI, Nwakaego kehinde","Remo Secondary School (Junior), Sagamu",SAGAMU
"OLAOYE, Blessing oluwakemi","Remo Secondary School (Junior), Sagamu",SAGAMU
"OLUKOYA, Sakirat adebolaji","Remo Secondary School (Junior), Sagamu",SAGAMU
"ONAYIGA, Tawa oluwakemi","Remo Secondary School (Junior), Sagamu",SAGAMU
"ONI, Taiwo francis","Remo Secondary School (Junior), Sagamu",SAGAMU
"OSINEYE, Peter oladele","Remo Secondary School (Junior), Sagamu",SAGAMU
"SONEYE, Abibu","Remo Secondary School (Junior), Sagamu",SAGAMU
"TALABI, Salmot omopelola","Remo Secondary School (Junior), Sagamu",SAGAMU
"TAYO-LAWAL, Fibisola adeyinka","Remo Secondary School (Junior), Sagamu",SAGAMU
"ADEBOYE, Modupe","Remo Secondary School (Senior), Sagamu",SAGAMU
"ADEGBOLA, Taiwo omotoke","Remo Secondary School (Senior), Sagamu",SAGAMU
"ADEKOLA, Modupe oriyomi","Remo Secondary School (Senior), Sagamu",SAGAMU
"ADETONA, Adedayo abosede","Remo Secondary School (Senior), Sagamu",SAGAMU
"AJANAKU, Toyin omolara","Remo Secondary School (Senior), Sagamu",SAGAMU
"AKINTADE, Abiodun oluwabukayo","Remo Secondary School (Senior), Sagamu",SAGAMU
"AREGBESOLA, Atinuke mary","Remo Secondary School (Senior), Sagamu",SAGAMU
"AWOYODE, Omolara aduke","Remo Secondary School (Senior), Sagamu",SAGAMU
"BALOGUN, Olubukola aderiyike","Remo Secondary School (Senior), Sagamu",SAGAMU
"BANJO, Suraju oluremi","Remo Secondary School (Senior), Sagamu",SAGAMU
"BURAIMO, Nihinlola olutoyin","Remo Secondary School (Senior), Sagamu",SAGAMU
"GBADEBO, Fakayat romoke","Remo Secondary School (Senior), Sagamu",SAGAMU
"HAMEEN, Bolanle atinuke","Remo Secondary School (Senior), Sagamu",SAGAMU
"JOSEPH, Motunrayo abiodun","Remo Secondary School (Senior), Sagamu",SAGAMU
"LERAMO, Tosin  james","Remo Secondary School (Senior), Sagamu",SAGAMU
"MULERO, Oluwakemi ronke","Remo Secondary School (Senior), Sagamu",SAGAMU
"Mr. ADELABU,  Adekunle qazeem","Remo Secondary School (Senior), Sagamu",SAGAMU
"Mr. OGUNSAN,  Oluwole oladapo","Remo Secondary School (Senior), Sagamu",SAGAMU
"Mr. OLUWAGBAMIGBE,  Biodun jolayemi","Remo Secondary School (Senior), Sagamu",SAGAMU
"Mr. SONAIKE,  Aderemi adedapo","Remo Secondary School (Senior), Sagamu",SAGAMU
"Mrs. ABIODUN,  Olaitan  E.","Remo Secondary School (Senior), Sagamu",SAGAMU
"ODUMOSU, Olumide adekunle","Remo Secondary School (Senior), Sagamu",SAGAMU
"OGUNDEKO, Falilat Funmilayo.","Remo Secondary School (Senior), Sagamu",SAGAMU
"OVIH, Omolara Victoria.","Remo Secondary School (Senior), Sagamu",SAGAMU
"OYENIRAN, Stephen abiodun","Remo Secondary School (Senior), Sagamu",SAGAMU
"OYENIYI, Bosede bolanle","Remo Secondary School (Senior), Sagamu",SAGAMU
"RASAKI, Taiwo Mujidat.","Remo Secondary School (Senior), Sagamu",SAGAMU
"SHOFOYEKE, Kehinde omotayo","Remo Secondary School (Senior), Sagamu",SAGAMU
"SOKOYA, Idiat eniola","Remo Secondary School (Senior), Sagamu",SAGAMU
"SOLANKE, Dorcas modupeola","Remo Secondary School (Senior), Sagamu",SAGAMU
"SOYEMI, Elizabeth olufunke","Remo Secondary School (Senior), Sagamu",SAGAMU
"YUSUF, Alimat olawunmi","Remo Secondary School (Senior), Sagamu",SAGAMU
"ADEOYE, Olubunmi abosede","Sagamu High School (Junior), Sagamu",SAGAMU
"ADESANYA, Comfort lola f.","Sagamu High School (Junior), Sagamu",SAGAMU
"ADETU, Adesola","Sagamu High School (Junior), Sagamu",SAGAMU
"ADEYINKA, Taiwo oluwatoyin","Sagamu High School (Junior), Sagamu",SAGAMU
"AJETUNMOBI, Oluwafunmilayo shakirat","Sagamu High School (Junior), Sagamu",SAGAMU
"AKINFENDE, Aanuoluwapo titilayo","Sagamu High School (Junior), Sagamu",SAGAMU
"AKINTOMIDE, Temitope victoria","Sagamu High School (Junior), Sagamu",SAGAMU
"AYODELE, Jumma","Sagamu High School (Junior), Sagamu",SAGAMU
"BAKARE, Taiwo olufunmilayo","Sagamu High School (Junior), Sagamu",SAGAMU
"DARAMOLA, Olufunke Aderonke.","Sagamu High School (Junior), Sagamu",SAGAMU
"HAMMED, Oluwaseyi Adebola.","Sagamu High School (Junior), Sagamu",SAGAMU
"IDRIS, Ibraheem Temitope.","Sagamu High School (Junior), Sagamu",SAGAMU
"KAZEEM, Deborah Oluwafunsho.","Sagamu High School (Junior), Sagamu",SAGAMU
"MAJEKODUNMI, Yomi abigeal adebimpe","Sagamu High School (Junior), Sagamu",SAGAMU
"Mr. ADEKOYA,  Olalekan adegbuyi","Sagamu High School (Junior), Sagamu",SAGAMU
"Mrs. AKINDELE,  Opeoluwa oluwaseun","Sagamu High School (Junior), Sagamu",SAGAMU
"Mrs. OLOKPA,  Ighoteguono kate","Sagamu High School (Junior), Sagamu",SAGAMU
"Mrs. OSINOWO,  Temitope sikirat","Sagamu High School (Junior), Sagamu",SAGAMU
"OLALEKAN, Badirat adekemi","Sagamu High School (Junior), Sagamu",SAGAMU
"OSIBA, Joseph yinka","Sagamu High School (Junior), Sagamu",SAGAMU
"OYEBISI, Oluwaremilekun Serifat.","Sagamu High School (Junior), Sagamu",SAGAMU
"OYEDEJI, Oluwaseyi Mercy.","Sagamu High School (Junior), Sagamu",SAGAMU
"SEGUN-OKEOWO, Abidemi Falilat.","Sagamu High School (Junior), Sagamu",SAGAMU
"SOBAMBO, Olufemi adeyinka","Sagamu High School (Junior), Sagamu",SAGAMU
"SOJIMI, Oluwakemi blessing","Sagamu High School (Junior), Sagamu",SAGAMU
"ABANG, Mary kahsu","Sagamu High School (Senior), Sagamu",SAGAMU
"ADEAGBO, Esther olufunmilayo","Sagamu High School (Senior), Sagamu",SAGAMU
"ADEBESO, Elizabeth motunrayo","Sagamu High School (Senior), Sagamu",SAGAMU
"ADEGBOLA, Muslimat morenike","Sagamu High School (Senior), Sagamu",SAGAMU
"ADEOYE, Olufunmilayo adeola","Sagamu High School (Senior), Sagamu",SAGAMU
"ADISA, Yetunde sikirat","Sagamu High School (Senior), Sagamu",SAGAMU
"AYENI, Falilat bolanle","Sagamu High School (Senior), Sagamu",SAGAMU
"EZE, Ikechukwu cyril","Sagamu High School (Senior), Sagamu",SAGAMU
"LAWAL, Temitope omoniyi","Sagamu High School (Senior), Sagamu",SAGAMU
"Mr. OGUNWOLE,  Adeolu olaleye","Sagamu High School (Senior), Sagamu",SAGAMU
"Mr. SOPOIKI,  Adekunle olatunji","Sagamu High School (Senior), Sagamu",SAGAMU
"Mrs. ADEYANJU,  Olufunke olatundun","Sagamu High School (Senior), Sagamu",SAGAMU
"Mrs. AGORO,  Gbemisola omotayo","Sagamu High School (Senior), Sagamu",SAGAMU
"Mrs. AKINOLA,  Adeseyi  A.","Sagamu High School (Senior), Sagamu",SAGAMU
"Mrs. DAVIES,  Oluwafunmiso olubunmi","Sagamu High School (Senior), Sagamu",SAGAMU
"Mrs. OGUNSOLA,  Eunice Foluke","Sagamu High School (Senior), Sagamu",SAGAMU
"Mrs. OLADUNKE,  Remilekun olusola","Sagamu High School (Senior), Sagamu",SAGAMU
"ODUGUWA, Yakub Babatunde.","Sagamu High School (Senior), Sagamu",SAGAMU
"OGUNSOLA, Femi adebayo","Sagamu High School (Senior), Sagamu",SAGAMU
"OGUNYANWO, Temitope omolade","Sagamu High School (Senior), Sagamu",SAGAMU
"OLADIPUPO, Olaitan bola","Sagamu High School (Senior), Sagamu",SAGAMU
"OLAKOJO, Adenike arinpe","Sagamu High School (Senior), Sagamu",SAGAMU
"OLANIYI, Mary ikeola","Sagamu High School (Senior), Sagamu",SAGAMU
"SOLARIN, Femi olugbenro","Sagamu High School (Senior), Sagamu",SAGAMU
"SOMORIN, Kayode muyiwa","Sagamu High School (Senior), Sagamu",SAGAMU
"TALABI, Oluwadamilare Akinyemi.","Sagamu High School (Senior), Sagamu",SAGAMU
"ABIOLA, Olanrewaju olupemi","Simawa Community High School, Simawa",SAGAMU
"ADEBANJO, Olubukunola oluyemisi","Simawa Community High School, Simawa",SAGAMU
"ADEKOMI, Funke mulikat","Simawa Community High School, Simawa",SAGAMU
"ADESINA, Adesegun adebayo","Simawa Community High School, Simawa",SAGAMU
"ALLINSON, Bilikisu funmilayo","Simawa Community High School, Simawa",SAGAMU
"ANIMASHAUN, Adebomilehin temitope .b.","Simawa Community High School, Simawa",SAGAMU
"LAWAL, Adedapo gafar","Simawa Community High School, Simawa",SAGAMU
"Mr. ABANIRE,  Olalekan olasehunde","Simawa Community High School, Simawa",SAGAMU
"Mr. ODEKOMAIYA,  Akinola owolabi","Simawa Community High School, Simawa",SAGAMU
"Mrs. ADESANYA,  Bolanle felicia","Simawa Community High School, Simawa",SAGAMU
"ODUNSI, Adenike olawunmi","Simawa Community High School, Simawa",SAGAMU
"ODUNUGA, Oladoyin Ramat.","Simawa Community High School, Simawa",SAGAMU
"OGUN, Kikelomo fatimo","Simawa Community High School, Simawa",SAGAMU
"OGUNKOYA, Yemi Sola.","Simawa Community High School, Simawa",SAGAMU
"OJO, Oluwakemi S..","Simawa Community High School, Simawa",SAGAMU
"OLA-PHILIPS, Temitope alaba","Simawa Community High School, Simawa",SAGAMU
"OLADIRAN, Olubimpe mojisola","Simawa Community High School, Simawa",SAGAMU
"OLADOTUN, Oluwakemi serifat","Simawa Community High School, Simawa",SAGAMU
"ONASEGUN, Adedoyin Abosede.","Simawa Community High School, Simawa",SAGAMU
"POPOOLA, Thomas olufemi","Simawa Community High School, Simawa",SAGAMU
"ROJAYE, Muideen adewale","Simawa Community High School, Simawa",SAGAMU
"SHORUNMU, Oluwabisi oluwaseun","Simawa Community High School, Simawa",SAGAMU
"SHOYOMBO, Hannah Pelumi.","Simawa Community High School, Simawa",SAGAMU
"SOYEBO, Bilikisu ayinke","Simawa Community High School, Simawa",SAGAMU
"WAHAB, Risikat ajibike","Simawa Community High School, Simawa",SAGAMU
"ADEKO, Adejoke rasheedat","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"ADELAKUN, Taiwo","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"ADETAYO, Comfort iyabode","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"AJAYI, Mosunmola temitayo","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"AKINBOWALE, Latifat bolaji","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"AKINFOLARIN, Esther Adenike.","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"AROGUNDADE, Sulemam abdullateef","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"AWOSILE, Oluniyi","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"BADEJO, Olatunji Samuel.","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"Mr. AKINDELE,  Abiodun alao","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"Mr. LAWAL,  Babafemi oluwole","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"Mr. OGUNYANWO,  Busola idowu","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"Mr. OYENUGA,  Adedotun oyetunde","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"Mrs. BISUGA,  Titilola esther","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"ODULATE, Ganiyat ronke","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"OGUNLEYE, Timothy oluseyi","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"OGUNMOTUN, Funke christianah","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"ORUKOTAN, Beatrice aina","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"OYEDARE, Olalekan festus","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"PONMILE, Ebenezer oluwaseun","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"SALAMI, Akeem gbolagade","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"TIJANI, Idayat afolasade","Sonyindo Community High School (Junior), Sagamu",SAGAMU
"ADELEKE, Orimisan mosunmola eshter","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"ADESANYA, Olubunmi adetola","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"ADEYINKA, Oluwaseun","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"AFUWAPE, Ayodeji abidemi","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"AHMED, Taibat olukorede","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"AJAKAYE, Fausat ikepo","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"AJIBOYE, Olufunmilayo omolara","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"DAVIES, Catherin lovelyne","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"DUROSINMI, Adetutu modupe","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"FATUNGASE, Ayoyinka funmi","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"FAWOLE, Sakirat Olamide.","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"JEMINUSI, Abiodun","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"KUYE, Mobolaji adewale","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"MUMUREKE, Agustina elohor","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"Mr. ADEGBITE,  Waheed ade","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"Mr. AKEREDOLU,  Hakeem abiodun","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"Mr. ODUNUKAN,  Adeoye  O.","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"Mrs. ADEBAYO,  Oluyemisi olorunwa","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"OGUNBANWO, Omotola sunday","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"OGUNDELE, Rebecca olajumoke","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"OJOBO, Eunice  Yetunde.","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"OKE, Babatunde adewale","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"OLALERE, Ajimo iyabode","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"ONABANJO, Tosin nurudeen","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"OYEDELE, Wasiu olanrewaju","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"SOBANJO, Olubanke tolulope","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"TAIWO, Dorcas oluwafunke","Sonyindo Community High School (Senior), Sagamu",SAGAMU
"FALODUN, Aimbola Yetunde.","St. John'S Anglican Grammar School, Ode-Lemo",SAGAMU
"Mr. ADERINOYE,  Latee omoniyi","St. John'S Anglican Grammar School, Ode-Lemo",SAGAMU
"OBIPEHIN, Nimota Adewunmi.","St. John'S Anglican Grammar School, Ode-Lemo",SAGAMU
"ABIODUN, Olamide Oluwaseyi.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADEBAYO, Jumoke riliwat",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADEBAYO, Omotayo Adeyemi.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADEKUNLE, Folasade Beatrice.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADELAGUN, Fausat olabisi",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADELAJA, Solomon olusesan",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADEMUWAGUN, Olubukola Olubunmi.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADEPOJU, Faosat omotunde",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ADERANTI, Babatunde",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"EFFIONG, Jennifer Utibe.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"EMOSU, Temitope olaoluwa",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ESSIEN, Nneopia patience",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"FAMOJURO, Olubusola idowu",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"IDOWU, Julianah adesola",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"IDOWU, Vivian Ebunoluwa.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"Mr. OGUNPOLA,  Zacchaeus olasiji",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"Mrs. OGUNFOLU,  Oluwatoyin sekinat",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ODEDIYA, Paul Olatunji.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ODEWALE, Samson oyebade",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ODUWOLE, Similoluwa Grace.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OGUNKOYA, Kehinde adeniyi",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OGUNYEMI, Toyin kikelomo",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OJUOLAPE, Afusat adebukola",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OLABISI, Medinat Olorunkemi.",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OLADEINDE, Oluwakemi mariam",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OLADEJO, Sarah modupe",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OLAJIDE, Ayisat aderonke",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OLUBAMOWO, Samuel seun",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OLUSANYA, Abimbola yetunde",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OLUWANUSIN, Yetunde aderinola",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"OSILESI, Matthew adeyinka",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"RASAKI, Christiana olubunmi",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"RASHEED, Basirat oluwagbemisola",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"SONEYE, Adekemi ruth",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"TIJANI, Halimot adenike",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"UMARU, Folake omobolanle",Emeritus Prof. T.O Ogunlasi Model Secondary School,Sagamu
"ABDULHAMID, Shakirat Olubusola.","Iraye Community High School, Iraye",Sagamu
"ADESANYA, Elizabeth Oluwakemi.","Iraye Community High School, Iraye",Sagamu
"AGBAYEWA, Abiodun Rachael.","Iraye Community High School, Iraye",Sagamu
"AJIKANLE, Nimota Omotoke.","Iraye Community High School, Iraye",Sagamu
"AMOYE, Yetunde Olukemi.","Iraye Community High School, Iraye",Sagamu
"ASIYANBOLA, Akeem Isola.","Iraye Community High School, Iraye",Sagamu
"AWOSANYA, Segun Samuel.","Iraye Community High School, Iraye",Sagamu
"FAFURE, Adeyemi Bidemi.","Iraye Community High School, Iraye",Sagamu
"KAREEM, Fuad Olamilekan.","Iraye Community High School, Iraye",Sagamu
"ODOFIN, Adenike Oluwalanu.","Iraye Community High School, Iraye",Sagamu
"OGUNBOYOWA, Esther Bose.","Iraye Community High School, Iraye",Sagamu
"OKOLI, Onyinye Martina.","Iraye Community High School, Iraye",Sagamu
"OYELEYE, Oyeronke Yewande.","Iraye Community High School, Iraye",Sagamu
"AJAYI, Lukumon olawale",Adokun High School,YEWA NORTH
"ARIJE, Tolulope Oyindamola.",Adokun High School,YEWA NORTH
"ATOBA, Lukman olatunde",Adokun High School,YEWA NORTH
"DADA, Faith Adaamaka.",Adokun High School,YEWA NORTH
"DADA, Omolara Ireti.",Adokun High School,YEWA NORTH
"Mrs. OGUNYEMI,  Bosede rinsola",Adokun High School,YEWA NORTH
"SHOMOYE, Oluwaseun Funmilola.",Adokun High School,YEWA NORTH
"YUSUF, Kazeem Oluwadamilare.",Adokun High School,YEWA NORTH
"ABASS, Bilikis aina","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"ADEKOYA, Kolawole","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"AJAYI, Oluwabunmi Esther.","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"AKANNI, Bukky Fatimat.","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"AKINYEMI, Abdul wasiu","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"AKINYEMI, Dele","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"BALOGUN, Monsurat adefunke","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"BANKOLE, Tajudeen","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"FAGBIRE, Taiwo olusoji","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"FAYOMI, Jacob olusegun","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"Mr. ABDULLAHI,  Yusuf akanji","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"Mrs. OGUNYEMI,  Ronke tosin","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"OLADOKUN, Comfort temitolpe","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"OLUGBEMI, Akimot temitope","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"TAIWO, Suliat adunola","Ajoda High School (Junior), Ayetoro",YEWA NORTH
"ABDULKAREEM, Jelilat Atoke.","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"AKINDE, Mayowa oladunni","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"AKINNIYI, Oluwakemi Serah.","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"ANIFOWOSE, Victoria  ajile","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"AYODELE, Christianah Oyebola.","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"BASHIR, Obasanjo Abdullah.","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"EGBEBI, John","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"FASAWE, Jaye-ola","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"HAMMOND, Ojuotimi olufunke","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"IDOWU, Opeoluwa Akinyemi.","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"Mr. OMOTOSO,  Saliu-deem olarenwaju","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"OLALEYE, Wasiu abiodun","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"OPEBIYI, Oludare alani","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"RAHEEM, Morufat gbemisola","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"SANNI, Risikat ayinle","Ajoda High School (Senior), Ayetoro",YEWA NORTH
"AJAYI, Babatunde anthony","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"AKINLEYE, Opeoluwa Alice.","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"BASHIR, Fausat adenike","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"Mrs. ADEBOWALE,  Funmilola alice","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"Mrs. AJAO,  Omolara olufunmi","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"Mrs. OLATOYE,  Morayo olufunmilola","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"OGUNLEKE, Janet taiwo","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"OJUGBELE, Ezekiel","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"SOREMEKUN, Omolola Temidayo.","Alaye High School, (Junior), Ayetoro",YEWA NORTH
"ADARAMOLA, Femi  patrick","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"AIHONSU, Adeola omotola","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"AKINNIRE, Kehinde kemi","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"EZEBUNE, Ikechukwu henry","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"LAWAL, Ajani kolawole","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"LAWAL, Oluremi aigboje","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"MUSTAPHA, Folashade ganiyat","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"Mr. AJAYI,  Oluwaseun sunday","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"Mr. BABALOLA,  Gafar  O.","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"Mr. FAWOLE,  Simeon olusoji","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"Mrs. OKE,  Hafsat mosebolatan","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"Mrs. OLALEYE,  Rafiat olusoji","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"Mrs. OSHONIYI,  Damilola oluyemisi","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"OGUNBODE, Lukumon ajani","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"OLADOKUN, Oludotun adewale","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"OLAWOLU, Agness","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"SANGOSEKAN, Idowu Alani.","Alaye High School, (Senior), Ayetoro",YEWA NORTH
"ADEKANMBI, Deborah olanrewaju",Area Community High School,YEWA NORTH
"AZEEZ, Akeem Tobiloba.",Area Community High School,YEWA NORTH
"BALOGUN, Mariam Abiola.",Area Community High School,YEWA NORTH
"BUSARI, Sulaimon Olanrewaju.",Area Community High School,YEWA NORTH
"ELEGBEDE, Johnson Olayemi.",Area Community High School,YEWA NORTH
"IDOWU, Monday Samson.",Area Community High School,YEWA NORTH
"Mr. OGUNLEYE,  Rotimi olabanji",Area Community High School,YEWA NORTH
"OGUNDIMU, Gabriel olubiyi",Area Community High School,YEWA NORTH
"OLOYEDE, Abiodun Oluwafemi.",Area Community High School,YEWA NORTH
"THOVOEDE, Kehinde Gabriel.",Area Community High School,YEWA NORTH
"ADEYEMI, Felicia Oluseyi.",Asakanran Grammar School,YEWA NORTH
"AWOSANMI, Kolawole John.",Asakanran Grammar School,YEWA NORTH
"ENABUDOSO, Henry Oriatie.",Asakanran Grammar School,YEWA NORTH
"IJIDELE, Oluseun Isreal.",Asakanran Grammar School,YEWA NORTH
"Mr. OKEDIJI,  Ife emmanuel",Asakanran Grammar School,YEWA NORTH
"Mrs. OMOYAYI,  Abosede aduke",Asakanran Grammar School,YEWA NORTH
"OLADIRAN, Funmilayo Omotoke.",Asakanran Grammar School,YEWA NORTH
"SHITTU, Muibat Adenike.",Asakanran Grammar School,YEWA NORTH
"AKANDE, Ganiyu",Ayetoro Community Grammar School (Junior),YEWA NORTH
"AMOS, Tolani Juliet.",Ayetoro Community Grammar School (Junior),YEWA NORTH
"ARETOLA, Temitope Cecilia.",Ayetoro Community Grammar School (Junior),YEWA NORTH
"DEHINOLA, Bosede olufunke",Ayetoro Community Grammar School (Junior),YEWA NORTH
"MORONFOLU, Oluwadamilola Victoria.",Ayetoro Community Grammar School (Junior),YEWA NORTH
"Mr. ADETUNJI,  Samuel kayode",Ayetoro Community Grammar School (Junior),YEWA NORTH
"Mrs. ADEGBITE,  Olubunmi kehinde",Ayetoro Community Grammar School (Junior),YEWA NORTH
"OGUNBIYI, Idowu",Ayetoro Community Grammar School (Junior),YEWA NORTH
"OGUNDEJI, Saheed adeniyi",Ayetoro Community Grammar School (Junior),YEWA NORTH
"OKE, Emmanuel kolade",Ayetoro Community Grammar School (Junior),YEWA NORTH
"TAJUDEEN, Rahmotallah Oluwaseyi.",Ayetoro Community Grammar School (Junior),YEWA NORTH
"YINUSA, Alao rasaki",Ayetoro Community Grammar School (Junior),YEWA NORTH
"YINUSA, Latifat Aduke.",Ayetoro Community Grammar School (Junior),YEWA NORTH
"YUSUF, Aisha olufunke",Ayetoro Community Grammar School (Junior),YEWA NORTH
"ADELANI, Azeez Adekunle.","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"ADERIBIGBE, Mathew eniola","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"ADEWALE, Temilola elizabeth","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"AJAYI, Kudirat ajike","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"AKINDELE, Oladoyin Esther.","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"AKINLOLU, Sherif adisa","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"ALALADE, Benjamin adeyemi","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"ALLI, Modupe yejide","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"AMOSU, Afolabi abraham","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"AWOLUDE, Olaide Abimbola.","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"AYANYEMI, Bosede bunmi","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"BANKOLE, Akeem oluseyi","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"GARB, Aderemi olosede","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"OBANLA, Sunday Asamu.","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"OLOLADE, Selina omolaso","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"OMOPARIOLA, Shadrach oluwole","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"ONASANYA, Odunayo alaba","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"OYEBANJO, Abimbola Abikeade.","Ayetoro Community Grammar School (Senior), Ayetoro",YEWA NORTH
"ABOLADE, Lateef Olayide.","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"ADELEKE, Olusoji atanda","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"DAIRO, Elizabeth Oluwakemi.","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"JOHN, Samson ayorinde","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"Mrs. IBITOKUN,  Grace folasade","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"OBALOYIN, Taiwo Asamu.","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"OGUNDAPO, Fatima Temitope.","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"OWOLABI, Adegoke ayinla","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"TANKO, Atiku Adisa.","Community Commercial High School (Senior), Ijoun",YEWA NORTH
"ANIMASAUN, Semiu Olasunkanmi.",Community Comprehensive High School,YEWA NORTH
"BAMIDELE, Simeon olugbenga",Community Comprehensive High School,YEWA NORTH
"FABIYI, Anuoluwapo Boluwarin.",Community Comprehensive High School,YEWA NORTH
"FALADE, Abraham adetunji",Community Comprehensive High School,YEWA NORTH
"FASAE, Anike oluwayemisi",Community Comprehensive High School,YEWA NORTH
"Mrs. FADODUN,  Oluseun margaret",Community Comprehensive High School,YEWA NORTH
"Mrs. OLAYEMI,  Olabisi mabel",Community Comprehensive High School,YEWA NORTH
"OGUNSAKIN, Dorcas Oluwabukunmi.",Community Comprehensive High School,YEWA NORTH
"OKUNADE, Philips oluwasegun",Community Comprehensive High School,YEWA NORTH
"SANGOSEKAN, Oluwaseyi Alake.",Community Comprehensive High School,YEWA NORTH
"ADEBAYO, Taiwo olukemi","Community High School (Junior), Ijoun",YEWA NORTH
"AKINDE, Abigael Aina.","Community High School (Junior), Ijoun",YEWA NORTH
"ARO, Esther Oluwatosin.","Community High School (Junior), Ijoun",YEWA NORTH
"FAGBOHUN, Israel ishola","Community High School (Junior), Ijoun",YEWA NORTH
"ILUSORO, Olabisi Akanbi.","Community High School (Junior), Ijoun",YEWA NORTH
"Mr. ADEJUMO,  Kolawole olusegun","Community High School (Junior), Ijoun",YEWA NORTH
"Mrs. IDOWU,  Tosin kehinde","Community High School (Junior), Ijoun",YEWA NORTH
"Mrs. OTEBIYI,  Folake oyenike","Community High School (Junior), Ijoun",YEWA NORTH
"OGUNROMBI, Abraham olusola","Community High School (Junior), Ijoun",YEWA NORTH
"ONABANJO, Temitope Oluwatosin.","Community High School (Junior), Ijoun",YEWA NORTH
"OYEDELE, Dorcas Oluwatoyin.","Community High School (Junior), Ijoun",YEWA NORTH
"SALAMI, Afeez Adeboye.","Community High School (Junior), Ijoun",YEWA NORTH
"ADEKUNLE, Segun olatunde",Community High School Ohunbe,YEWA NORTH
"ADELEKE, Abosede victoria",Community High School Ohunbe,YEWA NORTH
"ADENIJI, Abolanle saulat",Community High School Ohunbe,YEWA NORTH
"AKANDE, Olusegun samson",Community High School Ohunbe,YEWA NORTH
"FALEMARA, Temitope Anuoluwapo.",Community High School Ohunbe,YEWA NORTH
"Mr. AYOPO,  Olumide olanrewaju",Community High School Ohunbe,YEWA NORTH
"Mrs. FOLALU,  Toyin mosebolatan",Community High School Ohunbe,YEWA NORTH
"OGUNGBILE, Yemisi ade",Community High School Ohunbe,YEWA NORTH
"OJELADE, Oluwaponmile Abiola.",Community High School Ohunbe,YEWA NORTH
"OLAYODE, Folasade mary",Community High School Ohunbe,YEWA NORTH
"ABAYOMI, Emmanuel Olufemi.","Community High School, Agbon Ojodu",YEWA NORTH
"ADEONU, Ajani Monday.","Community High School, Agbon Ojodu",YEWA NORTH
"AHOSU, Kehinde Joshua.","Community High School, Agbon Ojodu",YEWA NORTH
"AHOSU, Taiwo Joseph.","Community High School, Agbon Ojodu",YEWA NORTH
"AKINDELE, Isiah Eda.","Community High School, Agbon Ojodu",YEWA NORTH
"FASOLA, Simeon Olajide.","Community High School, Agbon Ojodu",YEWA NORTH
"Mr. GIWA,  Lateef  A.","Community High School, Agbon Ojodu",YEWA NORTH
"Mr. OJO,  Lateef oyeniyi","Community High School, Agbon Ojodu",YEWA NORTH
"Mrs. FASOLA,  Alice oluwagbemisola","Community High School, Agbon Ojodu",YEWA NORTH
"ODU, Monday Isaac.","Community High School, Agbon Ojodu",YEWA NORTH
"OGUNSEGBE, Joel Adebolwale.","Community High School, Agbon Ojodu",YEWA NORTH
"OKEDARA, Basirat Adenike.","Community High School, Agbon Ojodu",YEWA NORTH
"OLAYODE, Olusoji Victor.","Community High School, Agbon Ojodu",YEWA NORTH
"ABIMBOLA, Eunice Titilayo.","Community High School, Ebute Igbooro",YEWA NORTH
"ADEJUMOBI, Fatimoh tola","Community High School, Ebute Igbooro",YEWA NORTH
"ADEMOLA, Racheal Taiwo.","Community High School, Ebute Igbooro",YEWA NORTH
"AKINLOLU, Olusegun","Community High School, Ebute Igbooro",YEWA NORTH
"ALASE, Olaleye olufemi","Community High School, Ebute Igbooro",YEWA NORTH
"AZEEZ, Taiwo Afeez.","Community High School, Ebute Igbooro",YEWA NORTH
"FAGBEMISI, Moses oluwasegun","Community High School, Ebute Igbooro",YEWA NORTH
"GBANTEHU, Peter jimoh","Community High School, Ebute Igbooro",YEWA NORTH
"IFEYOMI, Christianah Yemisi.","Community High School, Ebute Igbooro",YEWA NORTH
"ISMAIL, Abduganiu Adisa.","Community High School, Ebute Igbooro",YEWA NORTH
"JIMOH, Ebenezer","Community High School, Ebute Igbooro",YEWA NORTH
"JIMOH, Tajudeen adisa","Community High School, Ebute Igbooro",YEWA NORTH
"KOSOLUWARE, Dorcas Oluwatosin.","Community High School, Ebute Igbooro",YEWA NORTH
"Mr. ORISABIYI,  Jacob abiodun alani","Community High School, Ebute Igbooro",YEWA NORTH
"Mrs. ADEBIYI,  Folasade ayisat","Community High School, Ebute Igbooro",YEWA NORTH
"ODUNFA, Mathew oluyemi","Community High School, Ebute Igbooro",YEWA NORTH
"OLADIPO, Salome temitayo","Community High School, Ebute Igbooro",YEWA NORTH
"OLATUNJI, Titilayo Honey.","Community High School, Ebute Igbooro",YEWA NORTH
"ORIKOKU, Jonathan olukunle","Community High School, Ebute Igbooro",YEWA NORTH
"SALAMI, Useni agbajelola","Community High School, Ebute Igbooro",YEWA NORTH
"SOLUADE, Olasunkanmi sunday","Community High School, Ebute Igbooro",YEWA NORTH
"ADEBIYI, Mudashir owolabi",Comprehensive High School,YEWA NORTH
"ADEDEJI, Rebecca kehinde",Comprehensive High School,YEWA NORTH
"ADEGBOLA, Deborah Amoke.",Comprehensive High School,YEWA NORTH
"ADEOGUN, Olulayo adeola",Comprehensive High School,YEWA NORTH
"AKINLOLU, Peter abayomi",Comprehensive High School,YEWA NORTH
"BAMIDELE, Titilayo adufe",Comprehensive High School,YEWA NORTH
"FAGBOHUN, Abiodun",Comprehensive High School,YEWA NORTH
"FATUKASI, Abigael olufunke",Comprehensive High School,YEWA NORTH
"IDOWU, Emmanuel ayoola",Comprehensive High School,YEWA NORTH
"IDRIS, Isau adetunji",Comprehensive High School,YEWA NORTH
"Mr. DEHINOLA,  Olufemi  S.",Comprehensive High School,YEWA NORTH
"Mr. DUROWOJU,  Kazeem adewole",Comprehensive High School,YEWA NORTH
"Mr. SODOLAMU,  Kayode ebenezer",Comprehensive High School,YEWA NORTH
"Mrs. ADELEKE,  Dorcas funmilayo",Comprehensive High School,YEWA NORTH
"Mrs. AFOLABI-KUFO,  Atinuke omotoyosi",Comprehensive High School,YEWA NORTH
"Mrs. OGUNJIMI,  Omowunmi funmilola",Comprehensive High School,YEWA NORTH
"OGUNROMBI, Abel ayinla",Comprehensive High School,YEWA NORTH
"OJO, Arike rashidat",Comprehensive High School,YEWA NORTH
"OKUNADE, David adejare",Comprehensive High School,YEWA NORTH
"OLADIPUPO, Rukayat omobolanle",Comprehensive High School,YEWA NORTH
"OLANIGAN, Safiat iyabode",Comprehensive High School,YEWA NORTH
"OYETUNJI, Folake nike",Comprehensive High School,YEWA NORTH
"YUSUF, Adebosipo azeez",Comprehensive High School,YEWA NORTH
"ADEBAYO, Olatubosun Stephen.",Comprehensive High School (Junior),YEWA NORTH
"ADEBIYI, Kafayat odunyemi",Comprehensive High School (Junior),YEWA NORTH
"ADEBIYI, Rasheed kehinde",Comprehensive High School (Junior),YEWA NORTH
"ADEITAN, Ibrahim adebiyi",Comprehensive High School (Junior),YEWA NORTH
"ADEWUSI, Folasade oluseyi",Comprehensive High School (Junior),YEWA NORTH
"AMOSUN, Margaret olajumoke",Comprehensive High School (Junior),YEWA NORTH
"FAKANMBI, Busayo Lydia.",Comprehensive High School (Junior),YEWA NORTH
"HAMMOND, Jokotola abisola",Comprehensive High School (Junior),YEWA NORTH
"ILO, Oluwole adegoke",Comprehensive High School (Junior),YEWA NORTH
"LAWAL, Azeez adebayo",Comprehensive High School (Junior),YEWA NORTH
"MATIMILOJU, Iseoluwa ephraim",Comprehensive High School (Junior),YEWA NORTH
"Mrs. ALUKO,  Adejumoke abiodun",Comprehensive High School (Junior),YEWA NORTH
"OGUNTOSIN, Egunjobi Jimoh.",Comprehensive High School (Junior),YEWA NORTH
"OGUNYOMI, Ebunoluwa Grace.",Comprehensive High School (Junior),YEWA NORTH
"OJO, Misirat Abeni.",Comprehensive High School (Junior),YEWA NORTH
"OLABISI, Olayinka susanah",Comprehensive High School (Junior),YEWA NORTH
"OLABIYI, Olukemi roseline",Comprehensive High School (Junior),YEWA NORTH
"OLALEYE, Rafiu akanbi",Comprehensive High School (Junior),YEWA NORTH
"OLAORE, Rasidat adenike",Comprehensive High School (Junior),YEWA NORTH
"OPARINDE, Oluremi motunrayo",Comprehensive High School (Junior),YEWA NORTH
"YUSUF, Muhammed",Comprehensive High School (Junior),YEWA NORTH
"ADEBAYO, Adetoro abisoye",Eyinni Comp. High School,YEWA NORTH
"ADEKUNLE, Adesola samuel",Eyinni Comp. High School,YEWA NORTH
"AKINLOSILURE, Sunday",Eyinni Comp. High School,YEWA NORTH
"APETU, Olukunle Vincent.",Eyinni Comp. High School,YEWA NORTH
"DUROSANYA, Taiwo Anike.",Eyinni Comp. High School,YEWA NORTH
"MAKINDE, Adewunmi funmi",Eyinni Comp. High School,YEWA NORTH
"Mr. ADEISA,  Joseph abiodun",Eyinni Comp. High School,YEWA NORTH
"Mr. ADEYEMO,  Raji adewale",Eyinni Comp. High School,YEWA NORTH
"Mr. BAMKOLE,  Oluseye olumuyiwa",Eyinni Comp. High School,YEWA NORTH
"OGUNDARE, Nofiu adigun",Eyinni Comp. High School,YEWA NORTH
"OLOYEDE, Taiwo abosede",Eyinni Comp. High School,YEWA NORTH
"OWODEYI, Rasheed olayiwola",Eyinni Comp. High School,YEWA NORTH
"SHOLOLA, Olugbenga seun",Eyinni Comp. High School,YEWA NORTH
"ADEKUNLE, Gbenga Sunday.",F.A.C.M(Una) High School,YEWA NORTH
"ADEOTAN, Aliyu Adewale.",F.A.C.M(Una) High School,YEWA NORTH
"ADERIBIGBE, Olugbenga elijah",F.A.C.M(Una) High School,YEWA NORTH
"AKINYEMI, Lukmon Abidemi.",F.A.C.M(Una) High School,YEWA NORTH
"EWEBIYI, Olawale Ekundayo.",F.A.C.M(Una) High School,YEWA NORTH
"JEREMIAH, Abel olusoji",F.A.C.M(Una) High School,YEWA NORTH
"KOSOKO, Samuel Oluwatayo.",F.A.C.M(Una) High School,YEWA NORTH
"LAWAL, Paul Rotimi.",F.A.C.M(Una) High School,YEWA NORTH
"Mr. OGUNMIYIWA,  Olusesi olalekan",F.A.C.M(Una) High School,YEWA NORTH
"Mr. OLAJIDE,  Jeremiah olufemi",F.A.C.M(Una) High School,YEWA NORTH
"Mrs. KADIRI ADETUMERUN,  Oyindamola abigail",F.A.C.M(Una) High School,YEWA NORTH
"OGUNDIRAN, Sulaimon ayokunle",F.A.C.M(Una) High School,YEWA NORTH
"OGUNSANLU, Bolanle Oluwaseun.",F.A.C.M(Una) High School,YEWA NORTH
"OLASODE, Samuel Ashamu.",F.A.C.M(Una) High School,YEWA NORTH
"OLUBIYI, Moses Oluwasegun.",F.A.C.M(Una) High School,YEWA NORTH
"SANUSI, Olukemi adebola",F.A.C.M(Una) High School,YEWA NORTH
"TOYOBO, Iretiolu olasimbo",F.A.C.M(Una) High School,YEWA NORTH
"ADIGUN, Rotimi adesina",Ketu College (Junior),YEWA NORTH
"AJIBADE, Adams akande",Ketu College (Junior),YEWA NORTH
"ESAN, Kolapo oyewunmi",Ketu College (Junior),YEWA NORTH
"ESUN, Zaccheaus adesina",Ketu College (Junior),YEWA NORTH
"MAKINDE, Mosunmola olubunmi",Ketu College (Junior),YEWA NORTH
"Mr. ADEDIRAN,  Isaac kolawole",Ketu College (Junior),YEWA NORTH
"OYEWOLE, Taiwo Oyefunmi.",Ketu College (Junior),YEWA NORTH
"ABIODUN, Kemi Oladunni.",Ketu College (Senior),YEWA NORTH
"ADEGBOLA, Olufunke Elizabeth.",Ketu College (Senior),YEWA NORTH
"KOLADE, Victoria olufunmilayo",Ketu College (Senior),YEWA NORTH
"KUDAJU, Odunlami toheebat",Ketu College (Senior),YEWA NORTH
"LAWANI, John kizito",Ketu College (Senior),YEWA NORTH
"Mr. ADELEKE,  Sulaiman adesope",Ketu College (Senior),YEWA NORTH
"Mr. ADENIYI,  Saka  A.",Ketu College (Senior),YEWA NORTH
"Mr. IROKO,  Joseph kehinde",Ketu College (Senior),YEWA NORTH
"Mr. OLAKANMI,  Olusayo mathew",Ketu College (Senior),YEWA NORTH
"Mrs. ADEKOJO,  Olufunmilayo aderike",Ketu College (Senior),YEWA NORTH
"OLATUNJI, Kolawole olusola",Ketu College (Senior),YEWA NORTH
"OLAYIWOLA, Hezekiah olusola",Ketu College (Senior),YEWA NORTH
"SOYINKA, Ayoola Abraham.",Ketu College (Senior),YEWA NORTH
"TAIWO, Clement Oyebanjo.",Ketu College (Senior),YEWA NORTH
"TAIWO, Itunuoluwa Remilekun.",Ketu College (Senior),YEWA NORTH
"ADEROHUNMU, Joyce Ajirioghene.",Ketu Community High School,YEWA NORTH
"ARO, Janet Olubukola.",Ketu Community High School,YEWA NORTH
"OBASOLA, Ganiyat Adejoke.",Ketu Community High School,YEWA NORTH
"OGUNDELE, Gabriel Gbemileke.",Ketu Community High School,YEWA NORTH
"SANGOLEYE, Kehinde Esther.",Ketu Community High School,YEWA NORTH
"SOBOWALE, Esther Oluwakemi.",Ketu Community High School,YEWA NORTH
"ABDULSALAM, Aminat",Muslim Community High School,YEWA NORTH
"ABIODUN, Lawrence Sunday.",Muslim Community High School,YEWA NORTH
"BABATUNDE, David Abiola.",Muslim Community High School,YEWA NORTH
"BASHIRU, Lasisi Oriyomi.",Muslim Community High School,YEWA NORTH
"BELLO, Olatoye babajide",Muslim Community High School,YEWA NORTH
"ILO, Idowu Olajide.",Muslim Community High School,YEWA NORTH
"JIMOH, Ganiyu Adio.",Muslim Community High School,YEWA NORTH
"Mr. ADEWUMI,  Johnson adeleke",Muslim Community High School,YEWA NORTH
"Mrs. OLURONKE,  A. adejoke",Muslim Community High School,YEWA NORTH
"Mrs. QUADRI,  Biliqees  T.",Muslim Community High School,YEWA NORTH
"OGUNSEGBE, Solomon Taiwo.",Muslim Community High School,YEWA NORTH
"OGUNWALE, Benjamen Bamidele.",Muslim Community High School,YEWA NORTH
"OLALEYE, Fatai Atanda.",Muslim Community High School,YEWA NORTH
"OLALEYE, Raimot adebunmi",Muslim Community High School,YEWA NORTH
"ORISASAMI, Sukurat Ope.",Muslim Community High School,YEWA NORTH
"OYEKUNLE, Clara olufunmilayo",Muslim Community High School,YEWA NORTH
"SANUSI, Musibaudeen Adekunle.",Muslim Community High School,YEWA NORTH
"ADESANYA, Adesumbo Adeyinka.","Obalaju High School, Joga Orile",YEWA NORTH
"AJAYI, Janet opeyemi","Obalaju High School, Joga Orile",YEWA NORTH
"BAMIGBOLA, Olatubosun Adekunle.","Obalaju High School, Joga Orile",YEWA NORTH
"FABIYI, Oluwatomilayo Victoria.","Obalaju High School, Joga Orile",YEWA NORTH
"JIMOH, Afeez Oluwasegun.","Obalaju High School, Joga Orile",YEWA NORTH
"LATINWO, Adijat abisola","Obalaju High School, Joga Orile",YEWA NORTH
"Mr. SANGOYOMI,  Segun adebayo","Obalaju High School, Joga Orile",YEWA NORTH
"Mrs. ADEMOLA YUSUF,  Eunice adenike","Obalaju High School, Joga Orile",YEWA NORTH
"Mrs. SOTOLA,  Temitope yetunde","Obalaju High School, Joga Orile",YEWA NORTH
"OBADINA, Afeez Alamu.","Obalaju High School, Joga Orile",YEWA NORTH
"OLADOJA, Bosede Elizabeth.","Obalaju High School, Joga Orile",YEWA NORTH
"RAJI, Serifat Ibukunoluwa.","Obalaju High School, Joga Orile",YEWA NORTH
"YUSUF, Sirajudeen alani","Obalaju High School, Joga Orile",YEWA NORTH
"ABAYOMI, Bukola Bernice.",Oluaso High School (Junior),YEWA NORTH
"ADEKOYA, Philip Adeola.",Oluaso High School (Junior),YEWA NORTH
"ADEOSUN, Olamide Racheal.",Oluaso High School (Junior),YEWA NORTH
"AYODELE, Akeem olawale",Oluaso High School (Junior),YEWA NORTH
"Mr. AYANWALE,  Wasiu kunle",Oluaso High School (Junior),YEWA NORTH
"Mr. FALANA,  Olabode adeboye",Oluaso High School (Junior),YEWA NORTH
"ADEKUNLE, Adedoyin Nofisat.",Oluaso High School (Senior),YEWA NORTH
"AFOLABI, Damilola Christianah.",Oluaso High School (Senior),YEWA NORTH
"AKINYEMI, Taiwo Kofoworola.",Oluaso High School (Senior),YEWA NORTH
"BALOGUN, Mutiyat Odunola.",Oluaso High School (Senior),YEWA NORTH
"DADA, Bamidele Abidemi.",Oluaso High School (Senior),YEWA NORTH
"Mr. ADETONA,  Akano  J.",Oluaso High School (Senior),YEWA NORTH
"Mr. AJAYI,  Olubiyi  O.",Oluaso High School (Senior),YEWA NORTH
"Mr. KAMILU,  Mutiu lamuye",Oluaso High School (Senior),YEWA NORTH
"OGUNTOLU, Joseph Adebola.",Oluaso High School (Senior),YEWA NORTH
"OLADIPUPO, Idowu adewale emmanuel",Oluaso High School (Senior),YEWA NORTH
"OLOJEDE, Olusayo abiodun",Oluaso High School (Senior),YEWA NORTH
"OSAYE [JAYEOLA], Modinat Jumoke.",Oluaso High School (Senior),YEWA NORTH
"YUSUF, Sekinat ajoke abolore",Oluaso High School (Senior),YEWA NORTH
"ADEBIYI, Abiodun samson",Orita Community High School (Junior),YEWA NORTH
"ADEKANMBI, Isaiah akande",Orita Community High School (Junior),YEWA NORTH
"ASOGBA, Babajide sola",Orita Community High School (Junior),YEWA NORTH
"BANKOLE, Rasidat modupeola",Orita Community High School (Junior),YEWA NORTH
"Mr. AKINDELE,  Akintoye omosebi",Orita Community High School (Junior),YEWA NORTH
"Mrs. ONIFADE,  Aderemi felicia",Orita Community High School (Junior),YEWA NORTH
"NNOROM, Justina chinwe",Orita Community High School (Junior),YEWA NORTH
"OGUNDELE, Karounwi isaiah",Orita Community High School (Junior),YEWA NORTH
"OLAYODE, Olabamiji elijah",Orita Community High School (Junior),YEWA NORTH
"ADEBAYO, Akinwunmi oluwole",Orita Community High School (Senior),YEWA NORTH
"ADEBOWALE, Abiodun akande",Orita Community High School (Senior),YEWA NORTH
"ADESI, Ebenezer adeniyi",Orita Community High School (Senior),YEWA NORTH
"KUGBAKIN, Peter alabi",Orita Community High School (Senior),YEWA NORTH
"MOSES, Ronke tunrayo",Orita Community High School (Senior),YEWA NORTH
"Mr. QUADRI,  Fatai abiodun",Orita Community High School (Senior),YEWA NORTH
"OGUNDELE, Samuel Sunday.",Orita Community High School (Senior),YEWA NORTH
"OGUNDIPE, Sunday abiodun",Orita Community High School (Senior),YEWA NORTH
"OGUNJOBI, Daniel oluwatobi",Orita Community High School (Senior),YEWA NORTH
"OLALEYE, Jamiu akanji",Orita Community High School (Senior),YEWA NORTH
"OLALEYE, Joseph babatunde",Orita Community High School (Senior),YEWA NORTH
"OMOTAYO, Isimot Omowunmi.",Orita Community High School (Senior),YEWA NORTH
"OYETORO, Omobolanle abidemi",Orita Community High School (Senior),YEWA NORTH
"AFOLABI, Sunday adetunji",Owode Ketu Commercial High School (Junior),YEWA NORTH
"AGBOOLA, David Ayinla.",Owode Ketu Commercial High School (Junior),YEWA NORTH
"BADERO, Hammed Akinlabi.",Owode Ketu Commercial High School (Junior),YEWA NORTH
"JEIFA, Kafilat Aderonke.",Owode Ketu Commercial High School (Junior),YEWA NORTH
"OTUNUGA, Oriyomi Yejide.",Owode Ketu Commercial High School (Junior),YEWA NORTH
"SALAWU, Kolawole jumoke",Owode Ketu Commercial High School (Junior),YEWA NORTH
"SOGAOLU, Oladipupo Oluwaseun.",Owode Ketu Commercial High School (Junior),YEWA NORTH
"SULAIMAN, Ahmed Tosin.",Owode Ketu Commercial High School (Junior),YEWA NORTH
"ADEBIYI, Solomon Folorunso.",Owode Ketu Commercial High School (Senior),YEWA NORTH
"AKINLOLU, Hakeem ayinde",Owode Ketu Commercial High School (Senior),YEWA NORTH
"ALADESUYI, Adeola oriyomi",Owode Ketu Commercial High School (Senior),YEWA NORTH
"ARO, Araka adeboye",Owode Ketu Commercial High School (Senior),YEWA NORTH
"ESUN, Reuben kayode",Owode Ketu Commercial High School (Senior),YEWA NORTH
"FIJABI, Sikirat debola",Owode Ketu Commercial High School (Senior),YEWA NORTH
"Mr. AKINBODE,  Morufu isola",Owode Ketu Commercial High School (Senior),YEWA NORTH
"ODUGBEMI, Kayode sebili",Owode Ketu Commercial High School (Senior),YEWA NORTH
"OLAOLO, Elizabeth adebunmi",Owode Ketu Commercial High School (Senior),YEWA NORTH
"ONIYIDE, Peter deleola",Owode Ketu Commercial High School (Senior),YEWA NORTH
"TELLA, Ibrahim aremu",Owode Ketu Commercial High School (Senior),YEWA NORTH
"ADEOGUN, Adebayo idowu",Sawonjo High School,YEWA NORTH
"AKINLOLU, Saheed Alani.",Sawonjo High School,YEWA NORTH
"AYANBODE, Oluwakemi oluwafunmilayo",Sawonjo High School,YEWA NORTH
"BABATUNDE, Titilayo Ajumat.",Sawonjo High School,YEWA NORTH
"MULERO, Tajudeen Olufemi.",Sawonjo High School,YEWA NORTH
"Mr. ADEYEMI,  Kolawole  A.",Sawonjo High School,YEWA NORTH
"Mr. DURODOLA,  Thomas abiodun",Sawonjo High School,YEWA NORTH
"Mr. OLADEJI,  Timothy kehinde",Sawonjo High School,YEWA NORTH
"OGUNKUNLE, Olawunmi temitope",Sawonjo High School,YEWA NORTH
"OLANIYAN, Akinlawon Oluwatosin.",Sawonjo High School,YEWA NORTH
"RABIU, Fatai Olanrewaju.",Sawonjo High School,YEWA NORTH
"BAMGBOYE, Mutiu Oladipupo.",Yewa Secondary School (Junior),YEWA NORTH
"OLADUNNI, Olufunke ajoke",Yewa Secondary School (Junior),YEWA NORTH
"OLAGUNDOYE, Olamibo Ayobamidele.",Yewa Secondary School (Junior),YEWA NORTH
"OLATUNDE, Emmanuel Oluwafemi.",Yewa Secondary School (Junior),YEWA NORTH
"OYERINDE, Adeoye Ola.",Yewa Secondary School (Junior),YEWA NORTH
"SANGOYOMI, Olasunkanmi olawale",Yewa Secondary School (Junior),YEWA NORTH
"AJAYI, Kolapo",Yewa Secondary School (Senior),YEWA NORTH
"AJAYI, Opeyemi Dorcas.",Yewa Secondary School (Senior),YEWA NORTH
"BAMMEKE, Kehinde adewale",Yewa Secondary School (Senior),YEWA NORTH
"JIMOH, Fatimoh abidemi",Yewa Secondary School (Senior),YEWA NORTH
"MUSTAPHA, Azeez adegboye",Yewa Secondary School (Senior),YEWA NORTH
"Mr. AINA,  Taofik ajani",Yewa Secondary School (Senior),YEWA NORTH
"OGUNYANWO, Ifetayo ijaola",Yewa Secondary School (Senior),YEWA NORTH
"OLANLOYE, Adetunji yusuf",Yewa Secondary School (Senior),YEWA NORTH
"OLAOGUN, Adeniyi Asamu.",Yewa Secondary School (Senior),YEWA NORTH
"OLAYINKA, Oluwayomi Johnson.",Yewa Secondary School (Senior),YEWA NORTH
"OLORUNTOLA, Adebowale theophilus",Yewa Secondary School (Senior),YEWA NORTH
"OSANYINBI, Adetoro Ajibike.",Yewa Secondary School (Senior),YEWA NORTH
"OYEMPEMI, Elisha ayobami",Yewa Secondary School (Senior),YEWA NORTH
"TANIMOWO, Damilola Deborah.",Yewa Secondary School (Senior),YEWA NORTH
"ADELEYE, Abiodun arike","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"AKINLEYE, Elizabeth bolanle","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"AKINWUSI, Ololade olayemi","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"ALABI, Kabirat folasade","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"ARETOLA, Abel adeyemi","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"BAKARE, Ismail Ayoola.","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"Mr. ADEWOLE,  Sikiru adio","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"Mr. FABUNMI,  Oluwasegun michael","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"Mr. MUSA,  Lawrence eshiema","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"Mrs. OLURIN,  Adeola iyabode","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"OGUNGBE, Racheal Funmilola.","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"OGUNLABI, Esther bunmi","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"OGUNWUSI, Folasade agbeke","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"ORELAJA, Motunrayo folake","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"SOBAYO, Dorcas mojisola","Anglican Gramm, Sch. (Junior), Ilaro",YEWA SOUTH
"ABATAN, Titlayo abidemi","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ADELAJA, Adeola elizabeth","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ADERINWALE, Mary alaba","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ADEYEMI, Busirat Adefunke.","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ADEYEMI, Taiwo oladunni","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"AINA, Ebenezer adebayo","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"AKINDELE, Osibogun ayodeji olabomi","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"AKPAN, Abimbola Opeoluwa.","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"AMIOLEMEN, Caroline nkechi","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ARIYO, Saheed Olayemi.","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"BANKOLE, Taiwo ibironke","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"BELLO, Folasade olubunmi","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"DIPEOLU, Adefunke sarah","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"EGUNJOBI, Martha folasade","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"FAGBOHUN, Janet mosunmola","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"IDOWU, Veronica fefame","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ILO, Omotayo tawakalitu","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"KOREDE, Edward bamidele","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"KUKU, Adebayo babajide","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"MOSAKU, Omotolani Abimbola.","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"Mr. GBEHOKEATHAN,  John godonu","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"Mr. LAWAL,  Abdulazeez musbau","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ODUWOLE, Festus Kayode.","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"OKE, Elizabeth iyabode","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"OLANIYAN, Olabamide mary","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"SEYI-GBAGBAYAU, Bisola sarah","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"WHENU, Temitope Funmilayo.","Anglican Gramm, Sch. (Senior), Ilaro",YEWA SOUTH
"ABAULO, Chidozie joy","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"ADENIYI, Mary Kikelomo.","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"ADEOSUN, Dupe elizabeth","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"AGBEYANGI, Ololade abosede","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"ALIMI, Fatimo abake","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"AMAOBI, Omamuzo orevaoghene p","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"AMORAN, Funke Juliana.","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"BAKARE, Titilope theresa","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"BALOGUN, Fatimah modupe","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"ELEGBEDE, Abosede grace","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"IDOWU, Lukmon abiodun .f.","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"KEKU, Temitayo nofisat","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"Mr. ALAYE,  Lukmon adisa","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"Mr. IBIKUNLE,  Adeyeye olusola","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"Mrs. OGUNLEYE,  Elizabeth olufunmilayo","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"Mrs. OJUOYE,  Modupe oluwakemi","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"Mrs. ONI,  Omolola  A.","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"OJEDIRAN, Grace oluwatobi","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"OJELADE, Deborah kemi","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"OYELEYE, Ebenezer olawale","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"OYENIYI, Sunbo florence","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"TAIWO, Kayode lawson","Area Comm. High Sch., Jnr, Owode",YEWA SOUTH
"ADARANIJO, Olugbenga david","Area Comm. High Sch., Olokuta",YEWA SOUTH
"ADEOSUN, Kafayat Omolara.","Area Comm. High Sch., Olokuta",YEWA SOUTH
"AKINYANJU, Kayode","Area Comm. High Sch., Olokuta",YEWA SOUTH
"ARUAGBON, Adesode Abosede.","Area Comm. High Sch., Olokuta",YEWA SOUTH
"ELENWO IWEDI, Stella idegbua","Area Comm. High Sch., Olokuta",YEWA SOUTH
"ESAN, Funmilayo juliana toyosi","Area Comm. High Sch., Olokuta",YEWA SOUTH
"FADIPE, Adiat olabisi","Area Comm. High Sch., Olokuta",YEWA SOUTH
"GANDONU, Nofisat Omobukola.","Area Comm. High Sch., Olokuta",YEWA SOUTH
"IPADEOLA, Mawutin modupe","Area Comm. High Sch., Olokuta",YEWA SOUTH
"Mrs. HUNSU,  Mary  A.","Area Comm. High Sch., Olokuta",YEWA SOUTH
"OLAIYA, Akinola Folaranmi.","Area Comm. High Sch., Olokuta",YEWA SOUTH
"OLASENI, Omotola Mary.","Area Comm. High Sch., Olokuta",YEWA SOUTH
"OLUSESAN, Adio olajide","Area Comm. High Sch., Olokuta",YEWA SOUTH
"ORENIYI, Mary Abosede.","Area Comm. High Sch., Olokuta",YEWA SOUTH
"ADEGBOLA, Bukola Esther.","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"ADEGBUJI, Olufunmilayo iyabode","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"ADEOYE, Nimota abiodun","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"AFOLABI, Olusegun kayode","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"AGU, Margret chinaeye","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"AJIBADE, Anuoluwapo arike","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"AKANBI, Basirat solakunmi","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"AKINDELE, James olusoji","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"AKOGUN-ODU, Olayinka oluwatoyin","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"AYODEJI, Ebunoluwa Temitope.","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"EGUNJOBI, Taiwo olubodun","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"FALADE, Nimota bolaji","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"JIMOH, Dayo abiodun","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"KEHINDE, Tolulope Oludayo.","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"MOSHOOD-GBADAMOSI, Tawakalitu tunrayo","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"Mr. ADAM,  Morufu adio","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"Mr. ADEKOYA,  Adebayo owolabi","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"Mr. KAREEM,  Sikiru","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"Mr. OLAOTI,  John sesan","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"Mr. ONI,  Olatunji emmanuel","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"ODUNAYO, Mobolape grace","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"OGEDENGBE, Kehinde oloruntoowo","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"OGUNKANMI, Olusegun josiah","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"OLALOWO, Esther Olufunmilayo.","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"OLAYODE, Muhydeen Olaoluwa.","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"PINPONSU, Alowutade","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"SALAUDEEN, Fatimoh Abiodun.","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"UTHMAN, Adijat olohungbebe","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"YUSUF, Shakirat Adejoke.","Area Comm. High Sch., Snr, Owode",YEWA SOUTH
"ADAM, Fadekemi Omowunmi.","Army Day Junior Sec. Sch.,",YEWA SOUTH
"AKINBO, Adeolu akanbi","Army Day Junior Sec. Sch.,",YEWA SOUTH
"ASIPA, Titilope Oluwakemi.","Army Day Junior Sec. Sch.,",YEWA SOUTH
"ASOKO, Mutiu adewale","Army Day Junior Sec. Sch.,",YEWA SOUTH
"FADARE, Olayinka kazeem","Army Day Junior Sec. Sch.,",YEWA SOUTH
"KAREEM, Raufu Adeniji.","Army Day Junior Sec. Sch.,",YEWA SOUTH
"MOGAJI, Idayat olawunmi","Army Day Junior Sec. Sch.,",YEWA SOUTH
"MUSTAPHA, Omolola tawakalit","Army Day Junior Sec. Sch.,",YEWA SOUTH
"Mrs. IDOWU,  Victoria  aina","Army Day Junior Sec. Sch.,",YEWA SOUTH
"Mrs. OLUSEGUN,  Serah  I.","Army Day Junior Sec. Sch.,",YEWA SOUTH
"Mrs. SALAU,  Bolanle oluwaseun","Army Day Junior Sec. Sch.,",YEWA SOUTH
"OGUNKUNLE, Azeezat olabisi","Army Day Junior Sec. Sch.,",YEWA SOUTH
"OJEKUNLE, Sarah temidayo","Army Day Junior Sec. Sch.,",YEWA SOUTH
"OLATUNJI, Sarah iyabode","Army Day Junior Sec. Sch.,",YEWA SOUTH
"OREBIYI, Daniel olatunji","Army Day Junior Sec. Sch.,",YEWA SOUTH
"OSINULU, Olufemi oladele","Army Day Junior Sec. Sch.,",YEWA SOUTH
"SAFRAIN, Bolanle ganiyat","Army Day Junior Sec. Sch.,",YEWA SOUTH
"SHONDE, Sade temileyi","Army Day Junior Sec. Sch.,",YEWA SOUTH
"ABU, Yemisi folasade","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"ADEOSUN, Olukunle","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"ADEOTAN, Olufunke sarah","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"ADEOTAN, Temitope ayotunde","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"ADETUNJI, Awawu omolade","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"AJIBODE, Adeola clara","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"AJIBODE, Omolabake Kareemat.","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"AKINOLA, Taiwo","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"AREDOKUN, Obafemi adebola","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"BANJO, Veronica olayinka","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"BANKOLE, Olatunji festus","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"BANKOLE, Samuel oladipupo","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"FAKEYE, Lukman","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"Mr. AYETERU,  Mohammed mukaila","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"Mr. BABAYEMI,  Mayokun adewunmi","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"Mr. OLAJUMOKE,  Olayinka lukman","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"Mrs. ADEBIYI,  Hannah  A.","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"Mrs. ADEPOJU,  Amina adebukola","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"Mrs. AFENISUMEN,  Taiwo rachael","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"Mrs. ALUKO,  Christiana olaitan","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"OGUNGBAYIKE, Christianah mofoluwake","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"OGUNWO, Olaoluwa Oluwagbenga.","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"OLAHANLOYE, Rasaq Oladimeji.","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"OLAIBI, Ademola Solomon.","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"SOGBOLA, Eunice asabi","Army Day Senior Sec. Sch., Owode",YEWA SOUTH
"ABATAN, Moses adesegun","Baptist High School, Ilaro",YEWA SOUTH
"ADEBOWALE, Kolawole","Baptist High School, Ilaro",YEWA SOUTH
"AJAYI, Abidemi olukemi","Baptist High School, Ilaro",YEWA SOUTH
"AJAYI, Temitope","Baptist High School, Ilaro",YEWA SOUTH
"AJIBOLA, Risikat moronkeji","Baptist High School, Ilaro",YEWA SOUTH
"EGUNLETI, James alani","Baptist High School, Ilaro",YEWA SOUTH
"FANIYI, Olawole Akanji.","Baptist High School, Ilaro",YEWA SOUTH
"GODWIN, Kemi Abosede.","Baptist High School, Ilaro",YEWA SOUTH
"KARUNWI, Temitope serifat","Baptist High School, Ilaro",YEWA SOUTH
"KOSOLU, Olusesan akanbi","Baptist High School, Ilaro",YEWA SOUTH
"LAWAL, Aminat Tolulope.","Baptist High School, Ilaro",YEWA SOUTH
"MUFUTAU, Lateef","Baptist High School, Ilaro",YEWA SOUTH
"MULERO, Iyabode adeola","Baptist High School, Ilaro",YEWA SOUTH
"Mr. GIWA,  Oluwale najeem","Baptist High School, Ilaro",YEWA SOUTH
"Mr. SONDE,  Abiodun adediran","Baptist High School, Ilaro",YEWA SOUTH
"OBADITAN, Rofiat olajumoke","Baptist High School, Ilaro",YEWA SOUTH
"ODUNARO, John adelani","Baptist High School, Ilaro",YEWA SOUTH
"OGUNDEMUREN, Kehinde gbemisola","Baptist High School, Ilaro",YEWA SOUTH
"OGUNSANWO, Oluwabusayomi Olajumoke.","Baptist High School, Ilaro",YEWA SOUTH
"OLALEYE, Iyabo modupe","Baptist High School, Ilaro",YEWA SOUTH
"OPAYEMI, Kehinde naimot","Baptist High School, Ilaro",YEWA SOUTH
"SOLARU, Monisola oluwayemisi","Baptist High School, Ilaro",YEWA SOUTH
"WOMILOJU, Gbemisola Aina.","Baptist High School, Ilaro",YEWA SOUTH
"ABDULSALAM, Ibrahim fazazi","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"ADENIJI, Omotunde motunrayo","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"ADEWUMI, Eunice funlola","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"ADEYINKA, Bamike Beatrice.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"ALLI, Toirat adeyinka","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"BALOGUN, Omotayo Maria.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"BAMMEKE, Muibat adunni","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"DADA, Damilare Olalekan.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"DANIEL, Adesola adunni","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"EDUNJOBI, Olubunmi Marian.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"EGUNJOBI, Olanrewaju oluyemi","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"ILO, Kehinde  taofeek","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"JATTU, Taiwo titilayo","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"JUNAID, Wasiu Olamilekan.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"MUSTAPHA, Shukurat Anike.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"Mr. OKPANACHI,  Manfred  D.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"Mr. OLABODE,  Ojo matthew","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"Mrs. ADEKUNLE,  Dorcas omowunmi","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"Mrs. BAMIDELE,  Ester oluwayemisi","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"Mrs. ODUNARO,  Oluwadunni fausat","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"Mrs. OLANLOYE,  Olukemi oluseyi","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"Mrs. OMONIYI,  Bolanle christian","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"OGBE, Babatunde ekharebafe","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"OJUGBELE-OYETOLA, Abisoye  Deborah.","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"OLUBIYI, Julius olukayode","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"OWODOLU, Hannah modupe","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"SHITTU, Rashidat abolore","Emmanuel Comm. High Sch., Ilaro",YEWA SOUTH
"ADENUGA, Adewale Adegbenga.",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"AKINTOLA, Olusola Titilope.",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"BAMGBOYE, Omotola abiola",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"CAMPBELL, Dotun Oladele.",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"Mr. AJAYI,  Tunde olalekan",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"Mr. EGUNJOBI,  Emmanuel olubode",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"Mr. OGUNYELE,  Aanu sunday",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"Mrs. ADEKANMBI,  Olusola olukemi",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"ODEDINA, Oluwasegun Olakunle.",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"OLADAPO, Ibukun Adetunji.",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"ONI, Jacob gbenupo",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"OPADEJI, Deborah abake",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"OWOYELE, Moruf adeshina",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"OYAWUSI, Dorcas bola",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"WAREKUROMO, Ngozi Claribel.",Idogo/Ipaja Comm.High Sch,YEWA SOUTH
"ADELEYE, Oluwatobiloba Abike.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"ADEYEMI, Tunrayo Titilayo.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"AINA, Kazeem Olamide.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"AJIBADE, Adejoke Kasirat.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"AJIBADE, Kehinde olayinka",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"AKINDE, Babatunde Adio.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"AKINLADE, Temitope abigaeal Aanu.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"ALO, Clement bamidele",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"DAUDA, Kafayat Biodun.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"IKUMAPAYI, Yusuf Alani.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"KOROLE, Hannah Titlayo.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"MONEBI, Samuel Adebayo.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"Mrs. AKINTUNDE,  Taiwo risikat",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"Mrs. OLAKANMI,  Victoria oluwakemisola",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"ODERINDE, Folasade Aina.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"OLUBIYI, Samson Oyewole.",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"SAMUEL, Oluyemisi abike",Ilobi/Erinja Comm.High Sch,YEWA SOUTH
"ABDULLAHI, Nasirat omowunmi","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ABIOLA, Ibukun olutomisin","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ABIOYE, Olufunmilayo abidemi","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ADEBIYI, Felicia Afolake.","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ADEGBITE, Muinat toyin","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ADEWOLE, Eniola racheal","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"AJAYI, Adeoluwa emmanuel","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ALEGE, Idayat folasade","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"BAMIGBAYE, Owolabi james","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"BAMIGBOYE, Oluwaseun Grace.","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"BAMKOLE, Oludotun alani","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"FAGBOHUN, Wunmi abiola","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"Mrs. ADEPEGBA,  Mobolaji oluwakemi","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"Mrs. KOLADE,  Yetunde olanike","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ODUSINA, Temitope oluwabukola","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"OGUNDIPE, Christianah modupe","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"OLARINDE, Taiwo desola","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"OMONIYI, Motunrayo Florence.","Itolu Comm. H/S Junior, Ilaro",YEWA SOUTH
"ADELANI, Yemisi adenike","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"AJASA, Samson olumide","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"AKINBODE, Olufemi tejumade","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"AKINFENWA, Segun Ife.","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"ARIYO, Saidat adeboyin","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"Mrs. ADE AJAYI,  Funke dorcas","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"Mrs. ADEDOYIN,  Rebecca odunola","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"Mrs. OPATOLA,  Comfort oluwasola","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"OLANIYAN, Elizabeth olufunke","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"OPEOLUWA, Joshua asamu","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"SANGOLADE, Tosin tope","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"SOYINKA, Oluwakemi racheal","Itolu Comm. H/S Senior, Ilaro",YEWA SOUTH
"Mr. FADIPE,  Abayomi olawale","Iwoye Area Comm. H/S, Iwoye.",YEWA SOUTH
"AMOSU, Afolabi john",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"FASEESIN, Lydia Funmilola.",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"Mr. YEKINI,  Tope waheed",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"Mrs. ADERINTO,  Esther bosede",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"OGUNMONEWO, Stephen Olajide.",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"OLATEJU, Margaret Fisayo.",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"OLUTADE, Funmilola Adeola.",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"OYELEYE, Eunice oluwakemi",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"SOBAYO, Christianah Bukola.",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"TAIWO, Abiodun Asiru.",Iyewa High School Jnr. Ajilete,YEWA SOUTH
"ABU, Rafiu adebayo",Iyewa High School Snr. Ajilete,YEWA SOUTH
"ADETUTU, Modupeola ayoola",Iyewa High School Snr. Ajilete,YEWA SOUTH
"AKINLADE, Olabisi mutiat",Iyewa High School Snr. Ajilete,YEWA SOUTH
"Mrs. NWAEDEH,  Edna ijeoma",Iyewa High School Snr. Ajilete,YEWA SOUTH
"OKE, Festus akinlolu",Iyewa High School Snr. Ajilete,YEWA SOUTH
"OKUNOYE, Michael Olugbenga.",Iyewa High School Snr. Ajilete,YEWA SOUTH
"SOGBOLA, Oladimeji asiwajuola taok",Iyewa High School Snr. Ajilete,YEWA SOUTH
"AJIBODE, Isaiah oluwafemi","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"AKINPELU, Rachael oluwatoyin","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"DADA, Taofeek Okikiola.","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"Mr. AKINLADE,  Isau isola","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"Mr. OBEY,  Sulaiman alao","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"Mrs. AWODE,  Adebisi olayemi","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"Mrs. OMOTAYO,  Ronke omolola","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"SIYANBOLA, Sarah senami","Muslim Prog. High Sch. (Junior), Oke-Odan",YEWA SOUTH
"ADESIYAN, Daud adewale","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"AFOLABI, Folashade racheal","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"FOWOTADE, Ayorinde","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"JAGUN, Samson Nunayon.","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"KOLORUKO, Shakiru olaniyi","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"Mr. IMIENWANRIN,  Martin ross","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"Mr. OLOWO,  Ayodele","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"OLUYOMI, Rebecca abike","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"TIJANI IBITOYE, Mohammed shafiee olugbeng","Muslim Prog. High Sch. (Senior), Oke-Odan",YEWA SOUTH
"ADEYANJU, Nofisat abake",Oke - Odan Gram. Sch,YEWA SOUTH
"AJIBODE, Comfort olukeye",Oke - Odan Gram. Sch,YEWA SOUTH
"AKINOSO, Olubunmi abosede",Oke - Odan Gram. Sch,YEWA SOUTH
"ALAGBE, Williams Semako.",Oke - Odan Gram. Sch,YEWA SOUTH
"AROGUNYO, Simon olufemi",Oke - Odan Gram. Sch,YEWA SOUTH
"AWOTUNDE, Adebola alabi",Oke - Odan Gram. Sch,YEWA SOUTH
"BADMOS, Kudirat ayoka",Oke - Odan Gram. Sch,YEWA SOUTH
"FOWOTADE, Adejinmi moromoke",Oke - Odan Gram. Sch,YEWA SOUTH
"KOLAWOLE, Motunrayo Omolara.",Oke - Odan Gram. Sch,YEWA SOUTH
"KOMAIYA, Babatunde Peter.",Oke - Odan Gram. Sch,YEWA SOUTH
"Mr. FALOLU,  Oludare alao",Oke - Odan Gram. Sch,YEWA SOUTH
"Mr. OSENI,  Abdullateef adeyemi",Oke - Odan Gram. Sch,YEWA SOUTH
"OLAGBADEGUN, Funmilayo Blessing.",Oke - Odan Gram. Sch,YEWA SOUTH
"OLANIYAN, Babatunde Dare.",Oke - Odan Gram. Sch,YEWA SOUTH
"RAJI, Moriamo kemi",Oke - Odan Gram. Sch,YEWA SOUTH
"TELLA, Bolanle folasade",Oke - Odan Gram. Sch,YEWA SOUTH
"UKWUSIKE, Eunice olubukola",Oke - Odan Gram. Sch,YEWA SOUTH
"ADENIYE, Olayide folake","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"AJAGBE, Motunrayo adebola","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"AKINDELE, Samson Sola.","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"ALOYINLAPA, Shakirat Omolara.","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"BABALOLA, Samuel gbenga","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"DADA, Mary  bukola","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"HARUNA, Muhammad abideen","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"KOMOLAFE, Omolara tope","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"LIASU, Abiodun isa","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"MUSA, Hajarat omowunmi","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"Mrs. ADEKUNLE,  Ruth  A.","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"Mrs. BAKARE,  Maryam  A.","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"Mrs. TAIWO,  Bolanle abigael","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"ODUGBESAN, Monsurat Omokorede.","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"OGUNTOLU, Thomas abiola","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"OKUNEYE, Adeleke Ismail.","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"OLATUNBOSUN, Christiana Mosunmola.","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"OLAYEMI, Oluwasegun godwin","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"OPEIFA, Oluwakemi esther","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"TAIWO, Afolake oyekemi","Oronna High School, Jnr, Ilaro",YEWA SOUTH
"ABDULLAH, Hafiz olayemi","Oronna High School, Snr, Ilaro",YEWA SOUTH
"ADEDOKUN, Itunu Adenike.","Oronna High School, Snr, Ilaro",YEWA SOUTH
"ADEWOLE, Adenike eveyn","Oronna High School, Snr, Ilaro",YEWA SOUTH
"AJAYI, Oluseun emmanuel","Oronna High School, Snr, Ilaro",YEWA SOUTH
"AKINDELE, Esther abisoye","Oronna High School, Snr, Ilaro",YEWA SOUTH
"AKINLOLU, Sadiat Adenike.","Oronna High School, Snr, Ilaro",YEWA SOUTH
"AKINOLA, Bosede adenike","Oronna High School, Snr, Ilaro",YEWA SOUTH
"ALABI, Ayodeji okunola","Oronna High School, Snr, Ilaro",YEWA SOUTH
"ALALADE, Mojisola Olu.","Oronna High School, Snr, Ilaro",YEWA SOUTH
"ANYADIOHA, Eucharia uchenna","Oronna High School, Snr, Ilaro",YEWA SOUTH
"BAKARE, Olanrewaju ganiu","Oronna High School, Snr, Ilaro",YEWA SOUTH
"DOSSU, Gabriel olusegun","Oronna High School, Snr, Ilaro",YEWA SOUTH
"EGUNJOBI, Aderonke abosede","Oronna High School, Snr, Ilaro",YEWA SOUTH
"Mrs. OGUNREMI,  Olusola adijat","Oronna High School, Snr, Ilaro",YEWA SOUTH
"OGUNFOLAJI, Ponmile racheal","Oronna High School, Snr, Ilaro",YEWA SOUTH
"OJO, Sofiat omolara","Oronna High School, Snr, Ilaro",YEWA SOUTH
"OLUBIYI, Titilayo abosede","Oronna High School, Snr, Ilaro",YEWA SOUTH
"OYELAKIN, Paul olaniyi","Oronna High School, Snr, Ilaro",YEWA SOUTH
"SALAMI, Nasiru omuya","Oronna High School, Snr, Ilaro",YEWA SOUTH
"SOBOLA, Tolulope Ifeoluwa.","Oronna High School, Snr, Ilaro",YEWA SOUTH
"WAHAB, Semiu olalekan","Oronna High School, Snr, Ilaro",YEWA SOUTH
"AMOLE, Theophilus olufolarin",Owo Community High Sch,YEWA SOUTH
"BABAYOMI, Zainab Adetutu.",Owo Community High Sch,YEWA SOUTH
"Mr. ADEBESIN,  Olusola mathew",Owo Community High Sch,YEWA SOUTH
"Mrs. SOETAN,  Iyabode olaide",Owo Community High Sch,YEWA SOUTH
"OGUNDIPE, Sunday ebenezer",Owo Community High Sch,YEWA SOUTH
"OLADEJO, Ramota",Owo Community High Sch,YEWA SOUTH
"RABIU, Bolanle busola",Owo Community High Sch,YEWA SOUTH
"ADEGUN, Oluwakemi motolani","Owode Sec. School Jnr., Owode",YEWA SOUTH
"ADENUSI, Bolaji glory","Owode Sec. School Jnr., Owode",YEWA SOUTH
"ADEOYE, Funmilayo Toyosi.","Owode Sec. School Jnr., Owode",YEWA SOUTH
"AFENISUMEN, Adebayo joel","Owode Sec. School Jnr., Owode",YEWA SOUTH
"AKANNI, Grace oyefunke","Owode Sec. School Jnr., Owode",YEWA SOUTH
"AKINDE, Bukola Ajike.","Owode Sec. School Jnr., Owode",YEWA SOUTH
"AKINWANDE, Olufunke Janet.","Owode Sec. School Jnr., Owode",YEWA SOUTH
"FAGBIRE, Stephen olugbenga","Owode Sec. School Jnr., Owode",YEWA SOUTH
"FATOLU, Paul oluwafemi","Owode Sec. School Jnr., Owode",YEWA SOUTH
"IDOWU, Kabirat agbeke","Owode Sec. School Jnr., Owode",YEWA SOUTH
"Mr. AKINBO,  Olugbenga kolawole","Owode Sec. School Jnr., Owode",YEWA SOUTH
"ODUGBEMI, Idowu busayo","Owode Sec. School Jnr., Owode",YEWA SOUTH
"OGUNTOLA, Adeola Adenike.","Owode Sec. School Jnr., Owode",YEWA SOUTH
"OLASUNKANMI, Lukman jiire","Owode Sec. School Jnr., Owode",YEWA SOUTH
"OLAWOLE, Sarah akanke","Owode Sec. School Jnr., Owode",YEWA SOUTH
"OMOLEGBE, Oluranti taiwo","Owode Sec. School Jnr., Owode",YEWA SOUTH
"ONIFADE, Janet taiwo","Owode Sec. School Jnr., Owode",YEWA SOUTH
"OPADEJI, Moses oluyomi","Owode Sec. School Jnr., Owode",YEWA SOUTH
"SANNI, Bilikisu temitayo","Owode Sec. School Jnr., Owode",YEWA SOUTH
"SANU, Titlope Folashade.","Owode Sec. School Jnr., Owode",YEWA SOUTH
"ADEOYE, Feyisara bunmi","Owode Sec. School Snr., Owode",YEWA SOUTH
"ADESOKAN, Taiwo sikiru","Owode Sec. School Snr., Owode",YEWA SOUTH
"ADEYEMI, Oluwatobi elizabeth","Owode Sec. School Snr., Owode",YEWA SOUTH
"AKINYEMI, Omotoke yetunde","Owode Sec. School Snr., Owode",YEWA SOUTH
"ALAGBE, Folasade motunrayo","Owode Sec. School Snr., Owode",YEWA SOUTH
"AMORE, Kehinde abike veronica","Owode Sec. School Snr., Owode",YEWA SOUTH
"ANINKU, Blessing ololade","Owode Sec. School Snr., Owode",YEWA SOUTH
"ANOSIKE, Blessing nkemdilim","Owode Sec. School Snr., Owode",YEWA SOUTH
"BOROKINI, Bosede racheal","Owode Sec. School Snr., Owode",YEWA SOUTH
"EGBEYEMI, Idiat Iyabo.","Owode Sec. School Snr., Owode",YEWA SOUTH
"HASSAN, Alimat Olabisi.","Owode Sec. School Snr., Owode",YEWA SOUTH
"IDOWU, Olufemi Oluwaseun.","Owode Sec. School Snr., Owode",YEWA SOUTH
"JIMOH, Sikiru alaba","Owode Sec. School Snr., Owode",YEWA SOUTH
"MOBOLAJI, Funmilayo","Owode Sec. School Snr., Owode",YEWA SOUTH
"Mrs. ADEYEMI,  Selimot bukola","Owode Sec. School Snr., Owode",YEWA SOUTH
"OBA, Oluseyi ajani","Owode Sec. School Snr., Owode",YEWA SOUTH
"OGUNBODE, Taoreed akanni","Owode Sec. School Snr., Owode",YEWA SOUTH
"OGUNKANMI, Esther tosin","Owode Sec. School Snr., Owode",YEWA SOUTH
"OJUGBELE, Olusegun amos","Owode Sec. School Snr., Owode",YEWA SOUTH
"OKUNOYE, Olubukola olabisi","Owode Sec. School Snr., Owode",YEWA SOUTH
"OLAWOLE, Dimeji tajudeen","Owode Sec. School Snr., Owode",YEWA SOUTH
"OLAYODE, Iyabode ajarat","Owode Sec. School Snr., Owode",YEWA SOUTH
"OLUBUKOLA, Ayodele oluwafunmibi","Owode Sec. School Snr., Owode",YEWA SOUTH
"OPEOLUWA, Oluyemisi Oyinlola.","Owode Sec. School Snr., Owode",YEWA SOUTH
"OYEDEJO, Oluwatosin ruth","Owode Sec. School Snr., Owode",YEWA SOUTH
"OYEDELE, Oluwabusayo iyabode","Owode Sec. School Snr., Owode",YEWA SOUTH
"OYEYEMI, Omobolanle olawunmi","Owode Sec. School Snr., Owode",YEWA SOUTH
"ZANNU, Esther arike","Owode Sec. School Snr., Owode",YEWA SOUTH
"ADEDIGBA, Kehinde modupe","Yewa College Junior, Ilaro",YEWA SOUTH
"ADEJUMO, Roqeeb Adewole.","Yewa College Junior, Ilaro",YEWA SOUTH
"AIWE, Dorcas oluwatosin","Yewa College Junior, Ilaro",YEWA SOUTH
"AKINBODE, Rachael temitayo","Yewa College Junior, Ilaro",YEWA SOUTH
"AKINDELE, Kayode emmanuel","Yewa College Junior, Ilaro",YEWA SOUTH
"AKISANMI, Akinfenwa Abraham.","Yewa College Junior, Ilaro",YEWA SOUTH
"ALADE, Mary odunola","Yewa College Junior, Ilaro",YEWA SOUTH
"FABUNMI, Blessing atinuke","Yewa College Junior, Ilaro",YEWA SOUTH
"FALANA, Dorcas adebunmi","Yewa College Junior, Ilaro",YEWA SOUTH
"LAWSON-JOHN, Esther funmilayo","Yewa College Junior, Ilaro",YEWA SOUTH
"Mr. ADENLE,  Moses taiwo","Yewa College Junior, Ilaro",YEWA SOUTH
"Mr. SALAWU,  Saheed adewole","Yewa College Junior, Ilaro",YEWA SOUTH
"Mrs. ABDULWAHAB,  Hauwa osa","Yewa College Junior, Ilaro",YEWA SOUTH
"Mrs. IGE,  Oluwatobi folorunke","Yewa College Junior, Ilaro",YEWA SOUTH
"Mrs. OLA,  Temitope folashade","Yewa College Junior, Ilaro",YEWA SOUTH
"OJO, Olusola ayinde","Yewa College Junior, Ilaro",YEWA SOUTH
"OLUDA, Taiwo oluwumi","Yewa College Junior, Ilaro",YEWA SOUTH
"OLUJIMI, Temidayo rebecca","Yewa College Junior, Ilaro",YEWA SOUTH
"OSIJIRIN, Adefunke grace","Yewa College Junior, Ilaro",YEWA SOUTH
"SANYAOLU, Abiodun maria","Yewa College Junior, Ilaro",YEWA SOUTH
"SANYAOLU, Tawakalitu olusola","Yewa College Junior, Ilaro",YEWA SOUTH
"SEGUN, Adedayo olorunfunmi","Yewa College Junior, Ilaro",YEWA SOUTH
"TELLA, Abimbola adegbemisola","Yewa College Junior, Ilaro",YEWA SOUTH
"ADESINA, Adeyemi Emmanuel.","Yewa College Senior, Ilaro",YEWA SOUTH
"ADEWUSI, Olufunke Busayo.","Yewa College Senior, Ilaro",YEWA SOUTH
"ADEYANJU, Azeezat Adunni.","Yewa College Senior, Ilaro",YEWA SOUTH
"AFOLABI, Sunday Paul.","Yewa College Senior, Ilaro",YEWA SOUTH
"AKINBOLA, Julius Olusanya.","Yewa College Senior, Ilaro",YEWA SOUTH
"AKINWANDE, Idayat omolola","Yewa College Senior, Ilaro",YEWA SOUTH
"BAMIGBOYE, Aina foluso","Yewa College Senior, Ilaro",YEWA SOUTH
"DAWODU, Ahmed olayinka","Yewa College Senior, Ilaro",YEWA SOUTH
"FAGBOHUN, Olusegun stpehen","Yewa College Senior, Ilaro",YEWA SOUTH
"Mr. OPEIFA,  Akolawole ololade mercy","Yewa College Senior, Ilaro",YEWA SOUTH
"Mrs. AJAYI,  Bolanle adeoti","Yewa College Senior, Ilaro",YEWA SOUTH
"Mrs. TAIWO,  Ajoke oluwafemi","Yewa College Senior, Ilaro",YEWA SOUTH
"OLADOTUN, Ramota ibidun","Yewa College Senior, Ilaro",YEWA SOUTH
"OSIMIKPEMHE, Esther Fisayo.","Yewa College Senior, Ilaro",YEWA SOUTH
"SALISU, Kabirat Oyebisi.","Yewa College Senior, Ilaro",YEWA SOUTH
"WHENU, Clement oluwasegun","Yewa College Senior, Ilaro",YEWA SOUTH
"ADEGBITE, Oluwajana","Community High School, Igbokofi",Yewa North
"ASOGWA, Odinaka Calister.","Community High School, Igbokofi",Yewa North
"EKANLU, Kehinde John.","Community High School, Igbokofi",Yewa North
"FALEYE, Mary Funmilayo.","Community High School, Igbokofi",Yewa North
"IGUECHOU, Adebayo Elie.","Community High School, Igbokofi",Yewa North
"IROKO, Bernice Bamidele.","Community High School, Igbokofi",Yewa North
"KAFAR, Morenikeji olusola","Community High School, Igbokofi",Yewa North
"KUSIKA, Lydia Motunrayo.","Community High School, Igbokofi",Yewa North
"Mr. DUROJAYE,  Tujuka adenrele","Community High School, Igbokofi",Yewa North
"OLOYEDE, Omorin eunice","Community High School, Igbokofi",Yewa North
"AGBAJE, Babatunde Sesan.","Community High School, Ijaka-Isale",Yewa North
"FAYOSE, Deborah Bosede.","Community High School, Ijaka-Isale",Yewa North
"ADEBIYI, Joshua olumide",Iwoye Area Community High School,Yewa South
"ADEKOYA, Rachael Folashade.",Iwoye Area Community High School,Yewa South
"AJIBOSO, Oluwayemi Grace.",Iwoye Area Community High School,Yewa South
"AKINDE, Bolarinwa Isreal.",Iwoye Area Community High School,Yewa South
"ANWO, Noah Odunayo.",Iwoye Area Community High School,Yewa South
"BABATUNDE, Dorcas titlayo",Iwoye Area Community High School,Yewa South
"CHARLIE, Charles Sunday.",Iwoye Area Community High School,Yewa South
"ERINLE, Yetunde Iyabo.",Iwoye Area Community High School,Yewa South
"IBIYEMI, Maria bimpe",Iwoye Area Community High School,Yewa South
"ITULOLA, Ruth Oluwaseyi.",Iwoye Area Community High School,Yewa South
"Mr. ADENIYI,  Rapheal adeoluwa",Iwoye Area Community High School,Yewa South
"Mr. LAWAL,  Gbolahan alabi",Iwoye Area Community High School,Yewa South
"Mr. OGUNGBEMI,  Babatunde  A.",Iwoye Area Community High School,Yewa South
"Mr. OLURIN,  Emmanuel akindele",Iwoye Area Community High School,Yewa South
"Mr. OMOTAYO,  Akinlolu olufemi",Iwoye Area Community High School,Yewa South
"Mr. ONIFADE,  Samuel oluyemi",Iwoye Area Community High School,Yewa South
"Mrs. JOSEPH,  Adeola agnes",Iwoye Area Community High School,Yewa South
"Mrs. OYENEYE,  Wuraola ajibola",Iwoye Area Community High School,Yewa South
"OLUJIMI, Abiodun abayomi",Iwoye Area Community High School,Yewa South
"OROOTAN, Risikat olubola","Iwoye Area Community High School,",Yewa South
"
`


csvToJson(csvData)