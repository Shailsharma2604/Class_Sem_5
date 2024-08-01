public class Day_6 {
    public static void main(String[] args) {
        
        int[] nums={23,45,1,2,8,19,-3,6};
        int tareget=19;
        int ans=linearSearch(nums, tareget);
        System.out.println(ans);

    }

    static int linearSearch(int[] arr, int target){

        // Linear Search Algorithm

        if(arr.length == 0){
            return -1;
        }

        for(int index=0;index<arr.length;index++){
            int ele=arr[index];
            if(ele==target){
                return index;
            }
        }
        return -1;
    }
}
