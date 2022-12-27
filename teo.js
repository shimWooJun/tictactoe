const cp_table = document.createElement('table');
            const cp_result = document.createElement('div');
            let mark = 'O'
            //무승부를 위한 카운트 수
            let cnt = 0;

            const checkWin = (_td)=> {
                let rowIndex = _td.parentNode.rowIndex;
                let colIndex = _td.cellIndex;
                //가로줄의 같은 마크가 같은지 
                   if(board[rowIndex][0].textContent === mark &&
                      board[rowIndex][1].textContent === mark &&
                      board[rowIndex][2].textContent === mark ){
                      return true;
                      }
                   //세로줄의 ~~~
                   if(board[0][colIndex].textContent === mark &&
                      board[1][colIndex].textContent === mark &&
                      board[2][colIndex].textContent === mark ){
                      return true;
                      }
                   //대각선줄의 ~~~
                   if(board[0][0].textContent === mark &&
                      board[1][1].textContent === mark &&
                      board[2][2].textContent === mark ){
                        return true;
                      }
                   if(board[0][2].textContent === mark &&
                      board[1][1].textContent === mark &&
                      board[2][0].textContent === mark ){
                        return true;
                      }  
                    
                    return false;
            };

            const table_event_listener = (event)=> {
                const which_td = event.target.closest('td');
                
                //채워진 공간이면 또 눌리지 않게
                if(which_td.textContent !== ''){
                    return;
                }

                
                which_td.textContent = mark;
                cnt = cnt+1;
                
                if(checkWin(which_td) === true){
                    cp_result.textContent = mark+'가 이겼습니다.';
                    cp_table.removeEventListener('click', table_event_listener);
                    return;
                }

                if(cnt === 9){
                    cp_result.textContent = '무승부 입니다.';
                    cp_table.removeEventListener('click', table_event_listener);
                    return;
                };
                
                //마크가 번가라가면서 나오게 한다.
                if(mark === 'O'){
                    mark = 'X';
                }
                else{
                    mark = 'O';
                }   
            };

            const board = []
            //이중for문 테이블 3x3
            for (let i=0; i<3; i++){
                const cp_tr = document.createElement('tr');
                const t_row=[]


                for (let j=0; j<3; j++){
                    const cp_td = document.createElement('td');
                    cp_tr.append(cp_td);
                    t_row.push(cp_td);
                }
                board.push(t_row)
                cp_table.append(cp_tr);
            }


            document.body.append(cp_table);
            document.body.append(cp_result);

            cp_table.addEventListener('click', table_event_listener);
