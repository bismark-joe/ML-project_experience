// Authur: Ademusire Adebisi Joe
// Date: 26-06-2018


	function find(main, tet)
	{
		if (isDefined(main[tet])) {
			console.log(main[tet]);
		}else{
			for (var key in main) {
				if (main.hasOwnProperty(key)) {
					if (typeof main[key] == "object") {
						find(main[key], tet);
					}else if(Array.isArray(main[key])) {
						for (var i = 0; i < main[key].length; i++) {
							if (isDefined(main[key][i][tet])) {
								console.log(main[key][i][tet]);
							}else(find(main[key][i]), tet);
						}					
					}
				}
			}
		}
			
	};

	function isDefined(variable) {
		try {
			if (typeof(variable) !== 'undefined') return true;
		} catch (e) {
			return false;
		}
	}
 var a = { b: 'baby', c: { d: 'dad', e: { f: ['fish', 'fly'] } } };

 // find(a, 'f');	




const test =	{// this is simply a testing data
		"data": 
		{
		    "current_page": 1,
		    "data": 
		    [
				{
			        "amount_appropriated": 10000000,
			        "amount_funded": "80%",
			        "comments_count": 3,
			        "constituency_id": 2233,
			        "constituency_type": "Senatorial District",
			        "contractor": "N/A",
			        "coordinate": "N/A",
			        "created_at": "2018-05-22 16:24:15",
			        "date_approved": "2016-05-06",
			        "dislikes": 0,
			        "fiscal_year": 2016,
			        "follows": 1,
			        "id": 13,
			        "implementing_mda": "Ministry of Water Resources",
			        "lawmaker_id": 1,
			        "likes": 0,
			        "location": null,
			        "media": null,
			        "project_type": "Energy",
			        "state_id": {},
			        "status": "Awarded",
			        "summary": "CONSTRUCTION OF SOLAR POWERED BOREHOLE IN  ORUK ANAM LGA, AKWA IBOM NORTH-WEST SENATORIAL DISTRICT, AKWA IBOM STATE",
			        "title": "Solar-powered borehole",
			        "updated_at": "Jun 12",
			        "user_follows": false,
			        "user_interaction": -1
				},
				{
					"amount_appropriated": 100000000,
					"amount_funded": "80%",
					"comments_count": 0,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-07 13:42:08",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 14,
					"implementing_mda": "Ministry of Trade",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Trade_Promotions",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "FOURTH MADE IN ABA FAIR IN ABUJA, FCT",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 6125000,
					"amount_funded": "80%",
					"comments_count": 0,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 08:09:38",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 15,
					"implementing_mda": "Special Duties",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Infrastructure",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "PURCHASE OF 18 SEATER BUS AT ABUJA MUNICIPAL AREA COUNCIL (AMAC), FCT",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 175000000,
					"amount_funded": "80%",
					"comments_count": 0,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 08:31:51",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 1,
					"id": 16,
					"implementing_mda": "UNRBDA",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Infrastructure",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "CONSTRUCTION OF 2 KM RURAL ROAD AND DRAINAGE IN GBAGALAPE ACCESS ROAD, AMAC AREA COUNCIL OF FCT",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 300000000,
					"amount_funded": "80%",
					"comments_count": 0,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 08:38:43",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 17,
					"implementing_mda": "Water Resources",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Infrastructure",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "CONSTRUCTION OF ROADS AND DRAINS TO PYAKASA AND KAPWA VILLAGES, ABUJA",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 150000000,
					"amount_funded": "80%",
					"comments_count": 2,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 08:52:37",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 18,
					"implementing_mda": "Water Resources",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Infrastructure",
					"project_typa": {"fly": "You got me!"},
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "PROVISION OF INFRASTRUCTURE TO APO/GARKI RESETTLEMENT SCHEME APO DISTRICT ABUJA",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 17500000,
					"amount_funded": "80%",
					"comments_count": 0,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 09:59:02",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 19,
					"implementing_mda": "Water Resources",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Water",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "TWO (2) SOLAR POWERED BOREHOLES AT KARU LGA AND KEFFI LGA, FCT",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 155000000,
					"amount_funded": "80%",
					"comments_count": 0,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 10:04:13",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 20,
					"implementing_mda": "Water Resources",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Water",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "CONSTRUCTION OF 50 SOLAR POWERED BOREHOLES IN RURAL COMMUNITIES OF AMAC AREA COUNCIL OF FCT",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 95000000,
					"amount_funded": "80%",
					"comments_count": 4,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 10:14:12",
					"date_approved": null,
					"dislikes": 1,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 21,
					"implementing_mda": "Water Resources",
					"lawmaker_id": 13,
					"likes": 1,
					"location": "FCT",
					"media": null,
					"project_type": "Water",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "CONSTRUCTION OF 9 SOLAR POWERED BOREHOLES IN RURAL COMMUNITIES OF BWARI AREA COUNCIL OF FCT",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				},
				{
					"amount_appropriated": 85000000,
					"amount_funded": "80%",
					"comments_count": 0,
					"constituency_id": 2904,
					"constituency_type": "Federal Constituency",
					"contractor": null,
					"coordinate": null,
					"created_at": "2018-06-08 10:16:23",
					"date_approved": null,
					"dislikes": 0,
					"fiscal_year": 2016,
					"follows": 0,
					"id": 22,
					"implementing_mda": "Water Resources",
					"lawmaker_id": 13,
					"likes": 0,
					"location": "FCT",
					"media": null,
					"project_type": "Infrastructure",
					"state_id": {},
					"status": "Awarded",
					"summary": null,
					"title": "CONSTRUCTION OF 1KM RURAL ROAD AND DRAINAGE IN DUTSE, GARKI, AMAC AREA COUNCIL OF FCT",
					"updated_at": "Jun 8",
					"user_follows": false,
					"user_interaction": -1
				}

		    ],
		    "first_page_url": "http://www.constrack.ng/constrack/project/paginate?page=1",
		    "from": 1,
		    "last_page": 16,
		    "last_page_url": "http://www.constrack.ng/constrack/project/paginate?page=16",
		    "next_page_url": "http://www.constrack.ng/constrack/project/paginate?page=2",
		    "path": "http://www.constrack.ng/constrack/project/paginate",
		    "per_page": 10,
		    "prev_page_url": null,
		    "to": 10,
		    "total": 153
		},
		"status": "success"
	}
find(test, "project_typa");
// console.log(test['data']['data'][5]['project_typa'])
