<?php

$data = file("data.txt");
$receipes = Array();
$receipeIndex = 0;
$currentReceipe = "";
foreach ($data as $line) {
    $line = trim($line);
    //echo $line."\n\r";
    //Kommentare überspringen
    if(substr($line, 0, 1) == "#"){
        //echo "Kommentar\n\r";
        continue;
    }
    //Keine Zahl drin -> neuer Item
    $lineparts = explode(" ", $line);
    $foundNumber = false;
    foreach($lineparts as $linepart) {
        $linepart = trim($linepart);
        //echo "linepart: $linepart\n\r";
        if($linepart == "") continue;
        if(filter_var($linepart, FILTER_VALIDATE_FLOAT)) {
            //echo "number found: $linepart\n\r";
            $foundNumber = true;
            $number = $linepart;
        }
    }

    if(!$foundNumber && trim($line) != "") {
        $receipeIndex = 0;
        $currentReceipe = trim($line);
        $receipes[$currentReceipe] = Array();
        continue;
    }

    //Zahl drin, Subitem hinzufügen
    if($foundNumber) {
        $component = str_replace($number, "", $line);
        $component = trim($component);
        $receipes[$currentReceipe][$receipeIndex][$component] = $number;
    }

    //Leerzeile, neues Rezept
    if(trim($line) == "") {
        $receipeIndex++;
        continue;
    }
}

echo "import { Item } from '../types/Item';
export const Items : Item[] = [";

foreach($receipes as $item => $receipe) {
    echo "
	{
		name: '$item',";
    if(count($receipe) > 0){
        echo "
		recipes: [";
    }
    foreach($receipe as $components) {
        echo "
			{
				components: [";
        foreach($components as $componentName => $amount) {
            echo "
					{ 
						amount: $amount,
						itemName: '$componentName'
					},";

        }
        echo "
				]
			},";
    }
    if(count($receipe) > 0){
        echo "
		]";
    }
    echo "
	},";
}

echo "
];";
