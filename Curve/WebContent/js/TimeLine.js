  require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });
        require(
                [
                    'echarts',
                    'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
                    'echarts/chart/line'
                ],
                function loadTimeLine(ec) {
                	var cash=parent.cash;
                	var earn=parent.earn;
                	var timeLine=parent.timeLine;
              
                    // 基于准备好的dom，初始化echarts图表
                    var myChart = ec.init(document.getElementById('timeline')); 
                    
                  var  option = {
                		    title : {
                		        text : 'detail',
                		        subtext : 'duang'
                		    },
                		    tooltip : {
                		        trigger: 'item',
                		        formatter : function (params) {
                		            var date = new Date(params.value[0]);
                		            data = date.getFullYear() + '-'
                		                   + (date.getMonth() + 1) + '-'
                		                   + date.getDate() + ' '
                		                   + date.getHours() + ':'
                		                   + date.getMinutes();
                		            return data + '<br/>'
                		                   + params.value[1] + ', ' 
                		                   + params.value[2];
                		        }
                		    },
                		    toolbox: {
                		        show : true,
                		        feature : {
                		            mark : {show: true},
                		            dataView : {show: true, readOnly: false},
                		            restore : {show: true},
                		            saveAsImage : {show: true}
                		        }
                		    },
                		    dataZoom: {
                		        show: true,
                		        start : 70
                		    },
                		    legend : {
                		        data : ['cash','earn']
                		               
                		    },
                		    grid: {
                		        y2: 80
                		    },
                		    xAxis : [
                		        {
                		            type : 'time',
                		            splitNumber:10
                		        }
                		    ],
                		    yAxis : [
                		        {
                		            type : 'value'
                		        }
                		    ],
                		    series : [
                		        {
                		            name: 'cash',
                		            type: 'line',
                		            showAllSymbol: true,
                		            symbolSize: function (value){
                		                return Math.round(value[2]/10) + 2;
                		            },
                		            data: (function () {
                		                var d = [];
                		                var len = 0;
                		                var now = new Date();
                		                var start=new Date("January 01,2015 "+timeLine[0]);
/*                		                while (len++ < timeLine.length) {
                		                    d.push([
                		                        new Date("January 01,2015 "+timeLine[len-1]),
                		                        cash[len-1],
                		                        earn[len-1]
                		                    ]);
                		                }*/
                		                while (len++ < timeLine.length) {
                		                	now=new Date("January 01,2015 "+timeLine[len-1]);
                		                	if(now<start)
                		                		now=new Date((now/1000+86400*1)*1000);
                		                    d.push([
                		                        now,
                		                        cash[len-1],
                		                        earn[len-1]
                		                    ]);
                		                }
                		                return d;
                		            })()
                		        },
                		        {
                  		            name: 'earn',
                  		            type: 'line',
                  		            showAllSymbol: true,
                  		            symbolSize: function (value){
                  		                return Math.round(value[2]/10) + 2;
                  		            },
                  		            data: (function () {
                  		                var d = [];
                  		                var len = 0;
                  		                var now = new Date();
                  		                var start=new Date("January 01,2015 "+timeLine[0]);
  /*                		                while (len++ < timeLine.length) {
                  		                    d.push([
                  		                        new Date("January 01,2015 "+timeLine[len-1]),
                  		                        cash[len-1],
                  		                        earn[len-1]
                  		                    ]);
                  		                }*/
                  		                while (len++ < timeLine.length) {
                  		                	now=new Date("January 01,2015 "+timeLine[len-1]);
                  		                	if(now<start)
                  		                		now=new Date((now/1000+86400*1)*1000);
                  		                    d.push([
                  		                        now,
                 		                        earn[len-1],                      		                        
                  		                        cash[len-1]
                  		                        
                  		                    ]);
                  		                }
                  		                return d;
                  		            })()
                  		        }
                		    ]

                		    

                		};
                		               
                		                    
                		              
                		              
            
                    // 为echarts对象加载数据 
                    myChart.setOption(option); 
                }
            );