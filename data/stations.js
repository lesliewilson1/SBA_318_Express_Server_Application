const stations = [
    {
        stateId: 1, 
        stateName: "Alabama",
        radioStation: "https://radiostationusa.fm/online/951-the-fox"
    },
    {
        stateId: 2, 
        stateName: "Alaska",
        radioStation: "https://radiostationusa.fm/online/1039-ted-fm"
    },
    {
        stateId: 3, 
        stateName: "Arizona",
        radioStation: "https://radiostationusa.fm/online/kool"
    },
    {
        stateId: 4, 
        stateName: "Arkansas",
        radioStation: "https://radiostationusa.fm/online/cool-1047"
    },
    {
        stateId: 5, 
        stateName: "California",
        radioStation: "https://radiostationusa.fm/online/kool-959"
    },
    {
        stateId: 6, 
        stateName: "Colorado",
        radioStation: "https://radiostationusa.fm/online/the-fox"
    },
    {
        stateId: 7, 
        stateName: "Connecticut",
        radioStation: "https://radiostationusa.fm/online/991-plr"
    },
        
    {
        stateId: 8, 
        stateName: "Delaware",
        radioStation: "https://radiostationusa.fm/online/the-vault-rock"
    },
        
    {
        stateId: 9, 
        stateName: "Florida",
        radioStation: "https://radiostationusa.fm/online/1027-the-beach"
    },

    {
        stateId: 10, 
        stateName: "Georgia",
        radioStation: "https://radiostationusa.fm/online/cruisin-94"
    },    
    {
        stateId: 11, 
        stateName: "Hawaii",
        radioStation: "https://radiostationusa.fm/online/1015-k-rock-hawaii"
    },    
    {
        stateId: 12, 
        stateName: "Idaho",
        radioStation: "https://radiostationusa.fm/online/959-klzx"
    },    
    {
        stateId: 13, 
        stateName: "Illinois",
        radioStation: "https://radiostationusa.fm/online/957-the-rock"
    },
        
    {
        stateId: 14, 
        stateName: "Indiana",
        radioStation: "https://radiostationusa.fm/online/wxke"
    },    
    {
        stateId: 15, 
        stateName: "Iowa",
        radioStation: "https://radiostationusa.fm/online/1057-kokz"
    },    
    {
        stateId: 16, 
        stateName: "Kansas",
        radioStation: "https://radiostationusa.fm/online/kkci-102-5"
    },    
    {
        stateId: 17, 
        stateName: "Kentucky",
        radioStation: "https://radiostationusa.fm/online/weky"
    },    
    {
        stateId: 18, 
        stateName: "Louisiana",
        radioStation: "https://radiostationusa.fm/online/rock-977"
    },    
    {
        stateId: 19, 
        stateName: "Maine",
        radioStation: "https://radiostationusa.fm/online/1029-wblm"
    },    
    {
        stateId: 20, 
        stateName: "Maryland",
        radioStation: "https://radiostationusa.fm/online/1007-the-bay"
    },    
    {
        stateId: 21, 
        stateName: "Massachusetts",
        radioStation: "https://radiostationusa.fm/online/wzlx"
    },    
    {
        stateId: 22, 
        stateName: "Michigan",
        radioStation: "https://radiostationusa.fm/online/wcsx"
    },    
    {
        stateId: 23, 
        stateName: "Minnesota",
        radioStation: "https://radiostationusa.fm/online/93x"
    },    
    {
        stateId: 24, 
        stateName: "Mississippi",
        radioStation: "https://radiostationusa.fm/online/z1067"
    },    
    {
        stateId: 25, 
        stateName: "Missouri",
        radioStation: "https://radiostationusa.fm/online/classic-rock-931"
    },    
    {
        stateId: 26, 
        stateName: "Montana",
        radioStation: "https://radiostationusa.fm/online/1037-the-hawk"
    },    
    {
        stateId: 27, 
        stateName: "Nebraska",
        radioStation: "https://radiostationusa.fm/online/z92"
    },    
    {
        stateId: 28, 
        stateName: "Nevada",
        radioStation: "https://radiostationusa.fm/online/97-1-the-point"
    },    
    {
        stateId: 29, 
        stateName: "New Hampshire",
        radioStation: "https://radiostationusa.fm/online/rock-101"
    },
    {
        stateId: 30, 
        stateName: "New Jersey",
        radioStation: "https://radiostationusa.fm/online/new-jersey-101-5"
    },
    {
        stateId: 31, 
        stateName: "New Mexico",
        radioStation: "https://radiostationusa.fm/online/the-eighties-channel"
    },
    {
        stateId: 32, 
        stateName: "New York",
        radioStation: "https://radiostationusa.fm/online/wcbs-fm"
    },   
    {
        stateId: 33, 
        stateName: "North Carolina",
        radioStation: "https://radiostationusa.fm/online/magic-1033-fm"
    },
    {
        stateId: 34, 
        stateName: "North Dakota",
        radioStation: "https://radiostationusa.fm/online/wave-1041"
    },
    {
        stateId: 35, 
        stateName: "Ohio",
        radioStation: "https://radiostationusa.fm/online/921-the-wolf"
    },
    {
        stateId: 36, 
        stateName: "Oklahoma",
        radioStation: "https://radiostationusa.fm/online/929-the-river"
    },
    {
        stateId: 37, 
        stateName: "Oregon",
        radioStation: "https://radiostationusa.fm/online/92-3-kgon"
    },
    {
        stateId: 38, 
        stateName: "Pennsylvania",
        radioStation: "https://radiostationusa.fm/online/wmgk"
    },
    {
        stateId: 39, 
        stateName: "Rhode Island",
        radioStation: "https://radiostationusa.fm/online/1063-the-wolf"
    },   
    {
        stateId: 40, 
        stateName: "South Carolina",
        radioStation: "https://radiostationusa.fm/online/classic-rock-1011"
    },
    {
        stateId: 41, 
        stateName: "South Dakota",
        radioStation: "https://radiostationusa.fm/online/1003-the-fox"
    },
    {
        stateId: 42, 
        stateName: "Tennessee",
        radioStation: "https://radiostationusa.fm/online/wqmv-radio"
    },
    {
        stateId: 43, 
        stateName: "Texas",
        radioStation: "https://radiostationusa.fm/online/lone-star-92-5"
    },
    {
        stateId: 44, 
        stateName: "Utah",
        radioStation: "https://radiostationusa.fm/online/1035-the-arrow"
    },
    {
        stateId: 45, 
        stateName: "Vermont",
        radioStation: "https://radiostationusa.fm/online/995-the-beast"
    },
    {
        stateId: 46, 
        stateName: "Virginia",
        radioStation: "https://radiostationusa.fm/online/1069-the-fox"
    },   
    {
        stateId: 47, 
        stateName: "Washington",
        radioStation: "https://radiostationusa.fm/online/925-classic-hits"
    },
    {
        stateId: 48, 
        stateName: "West Virginia",
        radioStation: "https://radiostationusa.fm/online/wklc"
    },
    {
        stateId: 49, 
        stateName: "Wisconsin",
        radioStation: "https://radiostationusa.fm/online/947-the-beast"
    },
    {
        stateId: 50, 
        stateName: "Wyoming",
        radioStation: "https://radiostationusa.fm/online/rock967online"
    },

]