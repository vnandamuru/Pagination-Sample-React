export const DOTS = "...";

function usePagination(current) {
  let final = parseInt(current.totalCount/current.pageSize);
  if(current.currentPage < final - 3){
    return [current.currentPage,current.currentPage+1,current.currentPage+2,DOTS,final]
  }
  else if(current.currentPage != final){
    return [1,DOTS,current.currentPage-1,current.currentPage,final]
  }else{
    return [1,2,DOTS,final-1,final]
  }
}

export default usePagination;
