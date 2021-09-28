// I made two functions both taking an array, one returns it in ascending order and the other returns it as a descending

const numbers = Object.freeze([5, 8, 0, 1, 9, 11, 15, 16]); // Making "numbers" array immutable 


// Sort a given list in ascending order 
function asc_sort(arr) {
    let copy_arr = arr.slice(); // Making a copy of the given list since it is immutable
    for(let i = 0; i < copy_arr.length; i++)
    {
        for(let j = 0; j < copy_arr.length - 1; j++)
        {
            if(copy_arr[j] > copy_arr[j + 1]) // "copy_arr[i]"  =>  "copy_arr[j]"
            {
                let temp = copy_arr[j];
                copy_arr[j] = copy_arr[j + 1];
                copy_arr[j + 1] = temp;
            }
        }
    }
    return copy_arr
}



// Sort a given list in descending order 
function desc_sort(arr) {
    let copy_arr = arr.slice(); // Making a copy of the given list since it is immutable
    for(let i = 0 ; i < copy_arr.length ; i++)
    {
        for(let j = 0 ; j < copy_arr.length - 1 ; j++)
        {
            if(copy_arr[j] < copy_arr[j + 1])  // "copy_arr[i]"  =>  "copy_arr[j]"
            {
                let temp = copy_arr[j];
                copy_arr[j] = copy_arr[j + 1];
                copy_arr[j + 1] = temp;
            }
        }
    }
    return copy_arr;
}


// Read a txt file and make a new text file after sorting the numbers
//The first parameter is the path of a file you want to read from, and the second is the path of the output file
function txt_file(input, output) {
    // Reading the text file
    var fs = require('fs');
    var content = fs.readFileSync(input, 'utf-8');
    
    // Saving the numbers in a list, converting them to integer, and sorting them in descending order
    content.replace(' ');
    var arr_nums = content.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    arr_nums = desc_sort(arr_nums);

    // converting the array numbers into string separated by comma ()
    var desc_num_str = arr_nums.join(',');
    fs.writeFileSync(output, desc_num_str);
}


console.log("Original numbers list: ", numbers)
console.log("Numbers list After sorting: ", asc_sort(numbers))
console.log("Numbers list After Desc sorting: ", desc_sort(numbers))


// Read the numbers list from data.txt file, sort it in ASC order, then store it in a new file called output.txt
txt_file('data.txt', 'output.txt');
