<?php

return [
    'District_List' =>  QB::table('District_List')->get(),
    'Province_List'=>  QB::table('Province_List')->get(),
    'Division_List'=> QB::table('Division_List')->get(),
    'Divisional_Offices' => QB::table('Divisional_Offices')->get(),
    'Institute' => QB::table('Institute')->get(),
    'Zonal_Offices' => QB::table('Zonal_Offices')->get(),
    'Sleas_Subject'=> QB::table('Sleas_Subject')->get(),
];
