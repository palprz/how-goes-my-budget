app.controller( 'chartController', function ChartCtrl( $scope ) {
    
        $scope.loadDataPie3D = function( persons, expenses ) {
            var myDataSource = {
                chart: {
                    caption: "Expenses",
                    startingangle: "120",
                    showlabels: "0",
                    showlegend: "1",
                    enablemultislicing: "0",
                    slicingdistance: "15",
                    showpercentvalues: "1",
                    showpercentintooltip: "0",
                    plottooltext: "Person: $label Expenses: $datavalue",
                    theme: "fint"
                },
                data: [
                    {
                        label: "Przemek",
                        value: "1500"
                    },
                    {
                        label: "Dominika",
                        value: "1200"
                    }
                ]
            }
            
            return myDataSource;
        }
        
//    $scope.myDataSource = {
//        chart: {
//            caption: "Age profile of website visitors",
//            subcaption: "Last Year",
//            startingangle: "120",
//            showlabels: "0",
//            showlegend: "1",
//            enablemultislicing: "0",
//            slicingdistance: "15",
//            showpercentvalues: "1",
//            showpercentintooltip: "0",
//            plottooltext: "Age group : $label Total visit : $datavalue",
//            theme: "fint"
//        },
//        data: [
//            {
//                label: "Teenage",
//                value: "1250400"
//            },
//            {
//                label: "Adult",
//                value: "1463300"
//            },
//            {
//                label: "Mid-age",
//                value: "1050700"
//            },
//            {
//                label: "Senior",
//                value: "491000"
//            }
//        ]
//    }
} );