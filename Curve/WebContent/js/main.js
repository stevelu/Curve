    	var cash,earn,timeLine,jsonData,bugMoney;

        
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
                
                               
                function loadMain(ec) {
                	
                //	var cash,earn,timeLine,jsonData;
                    var path = $("#Path").val();
                    var para = '{"path":"'+path+'"}';
                    para=eval("(" + para + ")");


                    var url="./GetData";
                    $.ajaxSetup({ 
                        async : false 
                    });
                    $.post(url,para,function(data){
                    	//$("#Path").attr("value",data);
                    	//jsonData=eval("(" + data + ")");
                    	jsonData=JSON.parse(data);
                    	cash=jsonData.cash;
                    	earn=jsonData.earn;
                    	timeLine=jsonData.time;
                    	getBug(cash,earn);
                    });
                    
                    function getBug(cash,earn){
                    	var bugMoney=0;
                    	var all=0;
                    	for(var i=0;i<cash.length;i++){
                    		all=all+earn[i];
                    		if (cash[i]<0)
                    			if(cash[i]-earn[i]>0)
                    				{
                        			bugMoney=bugMoney+parseInt(earn[i]);                       				
                    				}               		
                    		}
                    	$("#show").html(bugMoney);
                    	$("#all").html(all);
                    }
                    

                    
                    // 基于准备好的dom，初始化echarts图表
                    var myChart1 = ec.init(document.getElementById('main')); 
                    
                  var  option ;
                  
                  option = {
                		    title : {
                		        text: 'main',
                		        subtext: 'hehe'
                		    },
                		    tooltip : {
                		        trigger: 'axis'
                		    },
                		    legend: {
                		        data:['cash','earn']
                		    },
                		    toolbox: {
                		        show : true,
                		        feature : {
                		            mark : {show: true},
                		            dataView : {show: true, readOnly: false},
                		            magicType : {show: true, type: ['line', 'bar']},
                		            restore : {show: true},
                		            saveAsImage : {show: true}
                		        }
                		    },
                		    calculable : true,
                		    xAxis : [
                		        {
                		            type : 'category',
                		            boundaryGap : false,
                		            data : timeLine
                		        }
                		    ],
                		    yAxis : [
                		        {
                		            type : 'value',
                		            axisLabel : {
                		                formatter: '{value} '
                		            }
                		        }
                		    ],
                		    series : [
                		        {
                		            name:'cash',
                		            type:'line',
                		            data:cash,
                		            markPoint : {
                		                data : [
                		                    {type : 'max', name: '最大值'},
                		                    {type : 'min', name: '最小值'}
                		                ]
                		            },
                		            markLine : {
                		                data : [
                		                    {type : 'average', name: '平均值'}
                		                ]
                		            }
                		        },
                		        {
                		            name:'earn',
                		            type:'line',
                		            data:earn,
                		            markPoint : {
                		                data : [
                     		                    {type : 'max', name: '最大值'},
                    		                    {type : 'min', name: '最小值'}
                		                ]
                		            },
                		            markLine : {
                		                data : [
                		                    {type : 'average', name : '平均值'}
                		                ]
                		            }
                		        }
                		    ]
                		};
                		      
                		                                    		                              		                         
                    // 为echarts对象加载数据 
                    myChart1.setOption(option); 
                }
                
                
            );
        

 
       