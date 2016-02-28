app.controller( 'chartController', function ChartCtrl( $scope ) {
    
    /**
    * Hide all charts and show one of them.
    * @param chartId - ID of HTML tag to show.
    */
    $scope.showChart = function showChart( chartId ) {
        $scope.hideCharts();
        $('#chart-expenses-' + chartId).css('height', '700', 'important');
    }
    
    /**
    * Hide all charts.
    */
    $scope.hideCharts = function hideCharts() {
        $('#chart-expenses-person-total').css('height', '0', 'important');
        $('#chart-expenses-person-details').css('height', '0', 'important');
        $('#chart-expenses-common').css('height', '0', 'important');
    }
    
    /**
    * Change background color of one of chart list and set default background color for every else.
    * @param chartId - ID of HTML tag to show
    */
    $scope.changeColorChart - function changeColorChart( chartId ) {
        $('#chart-expenses-person-total').css('background-color', '#EEE');
        $('#chart-expenses-person-details').css('background-color', '#EEE');
        $('#chart-expenses-common').css('background-color', '#EEE');
        
        $('#chart-expenses-' + chartId).css('background-color','#DDD');
    }
    
    /**
    * Generate 3 charts.
    * @param dataExpensesPersonTotal - array with details for 'expenses per person (total)'.
    * @param dataExpensesPersonDetails - array with details for 'expenses per person (details)'.
    * @param dataExpensesCommon - array with details for 'expenses common' chart.
    */
    $scope.generateCharts = function generateCharts( 
                                        dataExpensesPersonTotal, 
                                        dataExpensesPersonDetails, 
                                        dataExpensesCommon ) {
        generateChartExpensesPersonTotal( dataExpensesPersonTotal );
        generateChartExpensesPersonDetails( dataExpensesPersonDetails );
        generateChartExpensesCommon( dataExpensesCommon );
        $scope.showChart( 'person-total' );
    }

    /**
    * Generate pie chart for 'expenses per person total'.
    * @param dataExpensesPersonTotal - array with details for 'expenses per person (total)'.
    */
    function generateChartExpensesPersonTotal( dataExpensesPersonTotal ) {
        $('#chart-expenses-person-total').insertFusionCharts( {
            type: 'doughnut2d',
            width: '700',
            height: '700',
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
    * @param dataExpensesPersonDetails - array with details for 'expenses per person (details)'.
    */
    function generateChartExpensesPersonDetails( dataExpensesPersonDetails ) {
        $('#chart-expenses-person-details').insertFusionCharts( {
            type: 'doughnut2d',
            width: '700',
            height: '700',
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
    * @param dataExpensesCommon - array with details for 'expenses common' chart.
    */
    function generateChartExpensesCommon( dataExpensesCommon ) {
        $('#chart-expenses-common').insertFusionCharts( {
            type: 'doughnut2d',
            width: '700',
            height: '700',
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