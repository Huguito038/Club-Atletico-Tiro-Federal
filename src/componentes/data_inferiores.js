const rival = {
    equipo: "Estudiantes",
    img :"https://estudiantesdelaplata.com/wp-content/themes/edelp_v2/imgs/logo_edelp.svg",
}


const URL_quinta = [
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366040222_793393275908265_4919386938803165492_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_ohc=u-r6LqCxD40AX8TDWk6&_nc_ht=scontent.fcor2-1.fna&oh=00_AfAzqhNMowR9T2lQMO3-NQWvfs7632lHqEc2oW0KLA5w2A&oe=64DE3D3E",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366376988_793393355908257_3111673824364800085_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=D9uHflwiA-gAX-wknHG&_nc_ht=scontent.fcor2-2.fna&oh=00_AfCM7MuSPpMMzRq3X1jAY2s6iDtA1QAe1ellFhIPS0HMDw&oe=64DD6ECF",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366743020_793393952574864_5849914264019360464_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_ohc=LOKWJ_pbMc0AX-0_5kw&_nc_ht=scontent.fcor2-1.fna&oh=00_AfC99N33H-nVY_N0uFEhBHt3aiA6h5kI2UY88Emb30JYtQ&oe=64DF0F4A",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/362266934_793396792574580_1096595806570908701_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=x9OZlbmlnGEAX-TOoJO&_nc_ht=scontent.fcor2-2.fna&oh=00_AfC2VZx7uB6Y8IpS1n9sYONd3nUEsu0U82skl1TetFWgEw&oe=64DD54F3",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/367397028_793397809241145_107129975896171180_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0bb214&_nc_ohc=w7jFvIWdz14AX-48RHW&_nc_ht=scontent.fcor2-2.fna&oh=00_AfDG7YiFXDFx0uwlfFcBNMSqq9Kc7kdF6UnUxBXmbYiW4w&oe=64DDC070",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366744028_793396512574608_5546550258577002358_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=zqqBlABTq_4AX9mIql4&_nc_ht=scontent.fcor2-2.fna&oh=00_AfAiJHHgpZunVHGW4fEWJS4AIMSScrp5SyRvHGQJV3ODbQ&oe=64DED54D",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366334058_793395795908013_8135370170500253906_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_ohc=EH9Pz0XyJ9cAX_1fI6P&_nc_ht=scontent.fcor2-1.fna&oh=00_AfCvmydM0Boc3BpOCdOeKiVF7S_VcJjqglELLBu1rzqvUg&oe=64DEFCC6",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366353298_793395479241378_6962375284108249710_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_ohc=TkAtJ4U_QSsAX9lHO9C&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBD5dIz1GTbmJKgIlwVjRdM2VmDxki5VvjlcqP0xaRBFg&oe=64DD86F6",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366357254_793398522574407_7305937184680383011_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0bb214&_nc_ohc=Hzn_ZokTgw0AX9MTA4-&_nc_ht=scontent.fcor2-2.fna&oh=00_AfBoNyI87AzdyW1jn9oBXGQpFurtxhdsw0jDIXjpOGOvGA&oe=64DDC5A5",}
]

const URL_cuarta = [
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366009305_790991262815133_8530480775155216286_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0bb214&_nc_ohc=QsxkZrVJ6WoAX-wduSR&_nc_oc=AQkKK6rNrZSReYoo7vm4jEB3CR8Bt9dvwAlomtPKycJqhUUyg3cbY73YM6rX-mpIqtQ&_nc_ht=scontent.fcor2-2.fna&oh=00_AfBK0lvuZDSUfpBDiYP3iOjAc3DaAQoQPy87oCxD3FwGpg&oe=64DE6E8E",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366352348_790991176148475_1196643281733514932_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0bb214&_nc_ohc=vRQ0B-CBaasAX_KE061&_nc_ht=scontent.fcor2-2.fna&oh=00_AfDSRRYRnJ1zoxxU6RcwWmlhSM-xsn4oU2qop7xeNuZMBg&oe=64DDE0C5",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366352717_790995506148042_3566673208682701336_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=MXYudwW9LFIAX-iecUk&_nc_ht=scontent.fcor2-2.fna&oh=00_AfDd2PZvhg5Ut9E0T2QJeVEbWSdcdHKIbJHUeIqZX2rbtg&oe=64DD51F8",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366299695_790992809481645_1944541054971539103_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0bb214&_nc_ohc=uuk5LmFOz9cAX_3sVEK&_nc_oc=AQlOWtE42RaKbYQxjtPXf1ANQrLZhDBaA7zq4Re-NI7qG_83JqoAmWALoVkH98SocUo&_nc_ht=scontent.fcor2-1.fna&oh=00_AfCrJ5tlu7RNs9EX3pw_JeQuKcO_WtD6XKk8tx-0X71_MA&oe=64DD950C",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366228179_790995959481330_3826636323484404535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=IVIhY2LcNKQAX84oJnM&_nc_ht=scontent.fcor2-2.fna&oh=00_AfC-HTpjtk_vY5Q7j2owkupa3yVovx702_S-v25q3UdHfw&oe=64DDB5B9",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366368884_790994329481493_5381295962417894279_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=_htXNXaiewIAX_imVA_&_nc_ht=scontent.fcor2-2.fna&oh=00_AfDp7KB4D_8rRst20UfPo5CThuaEWz_koTu4uDCWXrdbNw&oe=64DE7509",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366204705_790994969481429_7755753492843974550_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_ohc=SSW69-9KEdoAX-ohJTM&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBa0wA1SHzX5aHTd9JaPiEp5Qg5SzT_d5M3r6frRKpZkg&oe=64DE9E6E",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366557802_790995462814713_5953921443081246322_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_ohc=E3myUSIUNf4AX-a4bbY&_nc_ht=scontent.fcor2-1.fna&oh=00_AfCES3oWBIBoGgeQ0Bb8zkb1FaZqHc__ipy3iBy0HMt4Jw&oe=64DF04ED",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366271554_790993346148258_807853050835643656_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0bb214&_nc_ohc=30LQbFTtzvwAX9L8UMp&_nc_ht=scontent.fcor2-1.fna&oh=00_AfD_sTBEGz_-az2ZfzOJheSuxxcbggu1K7rEX-cnjgyMLg&oe=64DEB562",},
]

const URL_sexta = [
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366371042_793382212576038_3814345426588514018_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0bb214&_nc_ohc=0vXVaRubrtsAX_uzhKf&_nc_ht=scontent.fcor2-2.fna&oh=00_AfCFFMa33NpwlNM4IVbRDmqVqxQxWP5F4A9g-qObwxR6TA&oe=64DE9763",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366377233_793382315909361_1249850848202810945_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0bb214&_nc_ohc=hFq880WTDt4AX85pp5N&_nc_ht=scontent.fcor2-2.fna&oh=00_AfBJF9_bgY_LwKvnASqDThb39eI6JBJdXKBirM4gIKxWsA&oe=64DDA521",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366717126_793382182576041_5418543914184861622_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0bb214&_nc_ohc=HW-Zgeevkm8AX9zjed5&_nc_ht=scontent.fcor2-2.fna&oh=00_AfA9VBSezfosh07klkP5wOTNSXsH6udFnlvFpB_ls-N6nA&oe=64DEDD86",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366366066_793386599242266_3826666711103526273_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0bb214&_nc_ohc=d6EFc10GZEMAX-OlR6g&_nc_ht=scontent.fcor2-2.fna&oh=00_AfAYA_M8T4y3M6JviulB4mtYhTqbxly0P82Y65jeAiWSEQ&oe=64DEF3B3",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366613774_793387529242173_8832258574407894464_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_ohc=5qivg_RdvLgAX8c4mmH&_nc_ht=scontent.fcor2-1.fna&oh=00_AfCI9plSa2M9HPYGGmP5t5qAhPi2ny21AJZ_eJqfzaCQlw&oe=64DDB81A",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366719293_793383779242548_8876207441969003676_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0bb214&_nc_ohc=-lIlafblqNUAX8dxe1b&_nc_oc=AQlPTXo24t9Gj2ko22Q62Yet-qtolRAGBp76WGJw9n64RIT-8iZB_I73jTAOctDdPz0&_nc_ht=scontent.fcor2-1.fna&oh=00_AfC97QOEFO1vPjEx93zhmvurlnl8XB9_vEIGyHuOfnD1SA&oe=64DD9C25",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366279600_793384342575825_2561425540398358240_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0bb214&_nc_ohc=EYqILbSt2foAX_KgMSB&_nc_ht=scontent.fcor2-1.fna&oh=00_AfD7CkdOg1HPOX2oWbcEcmBoGnpoJGDWHAza18_kRcONnQ&oe=64DDC909",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366744372_793385279242398_3261030040873182255_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0bb214&_nc_ohc=HAVIDqIsFaUAX9JgKbn&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBjVVCLTkD0kV8_Dw83rFDL1z4U6_iSpsZmQX7JDE_aYA&oe=64DDD31F",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366074617_793386025908990_1156980704961446785_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=IRcirV_YnqcAX_LLF0B&_nc_ht=scontent.fcor2-2.fna&oh=00_AfCQqT5SHv4owPrKjry2NQKTeavdZSjE9r9NGxeB_kxVLw&oe=64DECE19",},
]
const URL_septima = [
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366005951_791104226137170_735680665373724315_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0bb214&_nc_ohc=c-Z0vHrhcfwAX9I48rp&_nc_ht=scontent.fcor2-2.fna&oh=00_AfCN6eXLL95KztKxs_6w0WSFVxW_8f4CsYLdPRVU0-Us4Q&oe=64DD5E81",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366232920_791104002803859_4676209618270902916_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0bb214&_nc_ohc=XjWyJODDuMQAX_0srKv&_nc_ht=scontent.fcor2-2.fna&oh=00_AfCLfkyBoSEkLLrdS66dkhaJh6bAVSI88Xz41Bhmtd_A4A&oe=64DF06EB",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366215380_791105162803743_2942044913427019117_n.jpg?stp=dst-jpg_s417x417&_nc_cat=101&ccb=1-7&_nc_sid=0bb214&_nc_ohc=T1Tw5D2MfGsAX-d0VRT&_nc_ht=scontent.fcor2-1.fna&oh=00_AfA1OUtDKPNoLa7h4h7CUhat2635x1zPBTVvss4UM099CQ&oe=64DDB582",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366324436_791106902803569_7192739486396873949_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0bb214&_nc_ohc=xNnxMwm-adAAX85UAli&_nc_ht=scontent.fcor2-1.fna&oh=00_AfCmShXF1gn6JuamMhKCJbN-mOnS64Xn-fbpoXp4aabXhA&oe=64DE5C48",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366315716_791102249470701_2624928130092457438_n.jpg?stp=dst-jpg_s417x417&_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_ohc=xjcAO-_91VwAX-R-Qsa&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBDsuP9NvHll8skuYBOZdfQFJOHMJaDb58qbW8XPI5Hfg&oe=64DEA12A",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/365225174_791106562803603_3780904892546911328_n.jpg?stp=dst-jpg_s417x417&_nc_cat=104&ccb=1-7&_nc_sid=0bb214&_nc_ohc=CAf3ficzi_UAX9a2Ojv&_nc_ht=scontent.fcor2-2.fna&oh=00_AfAfo5xYPeE0OOBPiFYq-lVsFPoTABP8UsIrU78cV7md0A&oe=64DE3166",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366008245_791108839470042_5369633522539797804_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0bb214&_nc_ohc=iM-rd3hpK3sAX_6yty3&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBCJN1qWdHB7ujz2Fa3jDKDc_VSM3OM2z7kpCsg6Ohkcg&oe=64DEE14C",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/365170884_791108972803362_3846330753987207596_n.jpg?stp=dst-jpg_s417x417&_nc_cat=111&ccb=1-7&_nc_sid=0bb214&_nc_ohc=GSGfKPpE9DkAX9w-c0F&_nc_ht=scontent.fcor2-1.fna&oh=00_AfDduViCio3gu19tpHYq3T9lFmPe3mC_IYQR_eW5XAimuQ&oe=64DE8072",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366230594_791109819469944_4958707990869594969_n.jpg?stp=dst-jpg_s417x417&_nc_cat=104&ccb=1-7&_nc_sid=0bb214&_nc_ohc=mRQa9PK4HpgAX9NcYkV&_nc_ht=scontent.fcor2-2.fna&oh=00_AfAGorKj3aHK8LoY81vnJD2Erig9iyDvXmPTRW56wNVkPQ&oe=64DF157F",},
]
const URL_octava = [
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366009318_792215626026030_1705292819913223882_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0bb214&_nc_ohc=VYFFpOMftv0AX_lELTp&_nc_ht=scontent.fcor2-2.fna&oh=00_AfA4AOn21Bc9PzeHHedpqvl8csDegYWY0WAnd5Ax2wx1OA&oe=64DF35DE",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366376410_792214976026095_5712391203855014042_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0bb214&_nc_ohc=DfM-3j9CziwAX80s3cc&_nc_ht=scontent.fcor2-1.fna&oh=00_AfA7ylqWpA5PlPkTrHFUR8YDwSh59WqWdMxbJV2ShZcjQQ&oe=64DD9AEA",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366375780_792215192692740_5851542956936825900_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=LYaQNtQnLxIAX9bxRIK&_nc_ht=scontent.fcor2-2.fna&oh=00_AfAtkpJVUup5SpvkUtFy4-2A55jfGdGazENa8QBMwldkTA&oe=64DEE08B",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366264828_792216532692606_8133336453781396061_n.jpg?stp=dst-jpg_s417x417&_nc_cat=104&ccb=1-7&_nc_sid=0bb214&_nc_ohc=_tUpopVU7PoAX_YxdGn&_nc_ht=scontent.fcor2-2.fna&oh=00_AfDQdiqFTmJczMjjd3Zf2T9cdWzYz6BIlmM7GhTYciPW7g&oe=64DEFA34",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/365984794_792218376025755_4586430419351339345_n.jpg?stp=dst-jpg_s417x417&_nc_cat=110&ccb=1-7&_nc_sid=0bb214&_nc_ohc=15rCabdsNjsAX_RXg9h&_nc_ht=scontent.fcor2-2.fna&oh=00_AfAM8aPd0yZTUYa7ED0kqAg9WcOyHrTgCNyingv6cfTqQg&oe=64DE424B",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366677732_792213959359530_5513240834055048867_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0bb214&_nc_ohc=_TudOjRcYwoAX9o0LC-&_nc_ht=scontent.fcor2-1.fna&oh=00_AfB2huzO7gs9F2sZUrr4dePefnM1sY_dP0hcsM1AtH_OtQ&oe=64DEA7F6",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366254729_792218952692364_9090739820815107779_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=MWT4tC3BpeoAX8te7bd&_nc_ht=scontent.fcor2-2.fna&oh=00_AfD62hvO7LincqpKqcIePjWBj3-7jTYXrYYmTDU4ca8JMg&oe=64DDC6E2",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366309398_792219586025634_7749242106361018938_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0bb214&_nc_ohc=-FjQmHrxH1UAX-haYP6&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBWYHab2dDUdoMYY1zG0_XbYHYo_TeEJJdbCPfedbphrA&oe=64DEAC73",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/365229220_792218136025779_1505168073221006403_n.jpg?stp=dst-jpg_s417x417&_nc_cat=100&ccb=1-7&_nc_sid=0bb214&_nc_ohc=f1QJsxarVYgAX8ovLWU&_nc_ht=scontent.fcor2-2.fna&oh=00_AfCWTnsOsKehUCRUUpbxxOFrthamOGL06z9NmHu2Z4gADw&oe=64DD9B62",},
]
const URL_novena = [
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366739294_792857499295176_1812550397824999138_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0bb214&_nc_ohc=sRXzWdLbl5IAX8hZ2DC&_nc_ht=scontent.fcor2-2.fna&oh=00_AfC9odtBIPoUTnXVCX3w0uoKX7706sjRflSUkMJV6LUmPQ&oe=64DDBEFF",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366321848_792857542628505_2974104255245716415_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_ohc=1Mf_nUEafsIAX_ioMrM&_nc_ht=scontent.fcor2-2.fna&oh=00_AfBRNJU6SgcL_9IkwC7752l1VuwZK-nhisXn12lWQVr4fQ&oe=64DDCDFB",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/365238101_792857765961816_8679117667152581769_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_ohc=_MSeAA6aOGQAX-WwuIr&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBpKhgtFvUUv6Nk4Ylabs3gLk-qlIY2TmIJb5aPjcU0Jg&oe=64DDA16E",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/365223981_792859715961621_6121120508332274305_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0bb214&_nc_ohc=RL9KHL3tIsEAX8PZmLG&_nc_ht=scontent.fcor2-2.fna&oh=00_AfDaBftG9Aif5D8_I-N1RL8r5zJwIWlbQUQdLq6yj16d6g&oe=64DF3DBF",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366691384_792860872628172_132469793219577429_n.jpg?stp=dst-jpg_s417x417&_nc_cat=103&ccb=1-7&_nc_sid=0bb214&_nc_ohc=8uVEhZdp0mgAX--sH5n&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBP1At1oItMwd4PuBInklaEhnf1gfOQBNxsopGZiNyJdA&oe=64DF0189",},
    {url:"https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/366330015_792861215961471_2307601989291029957_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0bb214&_nc_ohc=UfzaDbW5NasAX8_rhzD&_nc_ht=scontent.fcor2-2.fna&oh=00_AfDT5fxV9kfCLcCCYeynBxGOkQebGUiaQqe4pPsREthyvQ&oe=64DDC8E2",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366364101_792859382628321_6507312884160711387_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_ohc=3XAR8KWSk04AX9qhRUK&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBtVXrPdUmrMaHIgpluSBVTOJpGCdumIxrClAu1pAiLMg&oe=64DDA9BA",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/365252848_792860032628256_6346421358875008430_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0bb214&_nc_ohc=3z-ZWcCq0c8AX_Q3DVD&_nc_ht=scontent.fcor2-1.fna&oh=00_AfAPRQl5qcF3U-MKlUer-s3LZN_xTC_O1oZdIhexr6XBzQ&oe=64DE475D",},
    {url:"https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/366319842_792862085961384_2426511198615283717_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0bb214&_nc_ohc=0Hx5dPNQ1ikAX90KPAe&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBSC6fNd6OWetdPXGG079lgzH0k9ifwuL7p6wYaHymWog&oe=64DDCD3A",},
]


const quinta = {
    titulo: "QUINTA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
  
}

const cuarta = {
    titulo: "CUARTA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
    
}

const sexta = {
    titulo: "SEXTA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
}
const septima = {
    titulo: "SEPTIMA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
  
}

const octava = {
    titulo: "OCTAVA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
   
}

const novena = {
    titulo: "NOVENA DIVISION",
    goles_favor : 6,
    goles_contra : 0,
  
}

export {URL_cuarta,URL_quinta,URL_sexta,URL_septima,URL_octava,URL_novena,cuarta,quinta,septima,sexta,octava,novena,rival}