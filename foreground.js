var sortDropdown = function(options) {
    var optionsArray = [];
    for (var i = 0; i < options.length; i++) {
        var optionsText = options[i].innerText;
        if (optionsText.includes('$')) {
            options[i].price = optionsText.split('$')[1];
            options[i].price = parseInt(options[i].price.replace(/,/g, ''));
            
            options[i].serial = optionsText.split('#')[1];
            options[i].serial = parseInt(options[i].serial);

            options[i].counter = 1;
            options[i].pfp = 0;

            optionsArray.push(options[i]);
        }
        else {
            options[i].price = '$0';
            options[i].serial = '#0';
            options[i].counter = 0;
            options[i].pfp = 0;
            optionsArray.push(options[i]);
        }
    }
    optionsArray = optionsArray.sort(function(a, b) {
        if (a.price === b.price) {
            return 0;
        } else {
            return (a.price < b.price) ? -1 : 1;
        }
    });
    
    for (var i = optionsArray.length - 1; i > 0; i--)
        if(optionsArray[i].price === optionsArray[i-1].price) {
            optionsArray[i-1].counter = optionsArray[i].counter + 1;
            optionsArray.splice(i, 1);
        
    }

    options.length = optionsArray.length;

    for (var i = 1; i < options.length; i++) {
        options[i] = optionsArray[i];
        var pfp = options[i].price / 0.95;
        options[i].pfp = Math.ceil(pfp);
        options[i].innerText += " - [" + options[i].counter + "] - PFP: $" + options[i].pfp;
    }
};

    sortbtn = document.createElement('button');
    sortbtn.innertext = "SORT";
    sortbtn.classname = 'tsbsortbutton';
    sortbtn.id = 'sortbuttons'

    var dropdown = document.getElementById('moment-detailed-serialNumber');
    if (dropdown !== null) {
            sortDropdown(dropdown.options);
    }