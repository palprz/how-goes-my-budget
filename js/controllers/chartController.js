app.controller( 'chartController', function ChartCtrl( $scope ) {
    
    /**
    * Show all charts.
    * @param sizeY - height of chart
    */
    function showAllChart( sizeY ) {
        $( '#chart-expenses-person-total' ).css( 'height', sizeY, 'important' );
        $( '#chart-expenses-person-details' ).css( 'height', sizeY, 'important' );
        $( '#chart-expenses-common' ).css( 'height', sizeY, 'important' );        
    }
    
    /**
    * Generate 3 charts.
    * @param dataExpensesPersonTotal - array with details for 'expenses per person (total)'.
    * @param dataExpensesPersonDetails - array with details for 'expenses per person (details)'.
    * @param dataExpensesCommon - array with details for 'expenses common' chart.
    * @param sizeX - width of chart
    * @param sizeY - height of chart
    */
    $scope.generateCharts = function generateCharts( 
                                        dataExpensesPersonTotal, 
                                        dataExpensesPersonDetails, 
                                        dataExpensesCommon, sizeX, sizeY ) {
        generateChartExpensesPersonTotal( dataExpensesPersonTotal, sizeX, sizeY );
        generateChartExpensesPersonDetails( dataExpensesPersonDetails, sizeX, sizeY );
        generateChartExpensesCommon( dataExpensesCommon, sizeX, sizeY );
        showAllChart( sizeY );
    }

    /**
    * Generate pie chart for 'expenses per person total'.
    * @param dataExpensesPersonTotal - array with details for 'expenses per person (total)'
    * @param sizeX - width of chart
    * @param sizeY - height of chart
    */
    function generateChartExpensesPersonTotal( dataExpensesPersonTotal, sizeX, sizeY ) {
        $( '#chart-expenses-person-total' ).insertFusionCharts( {
            type: 'doughnut2d',
            width: sizeX,
            height: sizeY,
            dataFormat: 'json',
            dataSource: {
                chart: {
                    caption: 'Expenses per person (total)',
                    enablemultislicing: '0',
                    slicingdistance: '15',
                    showpercentvalues: '1',
                    showpercentintooltip: '0',
                    plottooltext: 'Expenses: $datavalue',
                    theme: 'fint',
                    showBorder: '0', //border around square (not: pie)
                    bgAlpha: '0', //transparent background
                    showPlotBorder: '0', //border between pies
                    slicingDistance: '10' //space between pies after click one of them
                },
                data: dataExpensesPersonTotal
            }
        } );
    }
    
    /**
    * Generate pie chart for 'expenses per person details'.
    * @param dataExpensesPersonDetails - array with details for 'expenses per person (details)'
    * @param sizeX - width of chart
    * @param sizeY - height of chart
    */
    function generateChartExpensesPersonDetails( dataExpensesPersonDetails, sizeX, sizeY ) {
        $( '#chart-expenses-person-details' ).insertFusionCharts( {
            type: 'doughnut2d',
            width: sizeX,
            height: sizeY,
            dataFormat: 'json',
            dataSource: {
                chart: {
                    caption: 'Expenses per person (details)',
                    enablemultislicing: '0',
                    slicingdistance: '15',
                    showpercentvalues: '1',
                    showpercentintooltip: '0',
                    plottooltext: 'Expenses: $datavalue',
                    theme: 'fint',
                    showBorder: '0', //border around square (not: pie)
                    bgAlpha: '0', //transparent background
                    showPlotBorder: '0', //border between pies
                    slicingDistance: '10' //space between pies after click one of them
                },
                data: dataExpensesPersonDetails
            }
        } ); 
    }
    
    /**
    * Generate pie chart for 'expenses common'.
    * @param dataExpensesCommon - array with details for 'expenses common' chart
    * @param sizeX - width of chart
    * @param sizeY - height of chart
    */
    function generateChartExpensesCommon( dataExpensesCommon, sizeX, sizeY ) {
        $( '#chart-expenses-common' ).insertFusionCharts( {
            type: 'doughnut2d',
            width: sizeX,
            height: sizeY,
            dataFormat: 'json',
            dataSource: {
                chart: {
                    caption: 'Common expenses',
                    enablemultislicing: '0',
                    slicingdistance: '15',
                    showpercentvalues: '1',
                    showpercentintooltip: '0',
                    plottooltext: 'Expenses: $datavalue',
                    theme: 'fint',
                    showBorder: '0', //border around square (not: pie)
                    bgAlpha: '0', //transparent background
                    showPlotBorder: '0', //border between pies
                    slicingDistance: '10' //space between pies after click one of them
                },
                data: dataExpensesCommon
            }
        } );   
    }
    
} );