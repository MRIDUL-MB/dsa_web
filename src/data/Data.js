export const Data = [
  {
    id: 0,
    topic: 'array',
    question: 'Two Sum',
    link: 'https://leetcode.com/problems/two-sum/',
    sol: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();
        for(int i=0; i<n-1;i++)
        {
            for(int j=i+1; j<n; j++){
                if(nums[i]+nums[j]==target){
                    return {i,j};
                }
            }
        }
        return {};
        
    }
};`,
  },
  {
    id: 1,
    topic: 'array',
    question: 'Spiral Matrix',
    link: 'https://leetcode.com/problems/spiral-matrix/',
    sol: `class Solution {
        public:
            vector<int> spiralOrder(vector<vector<int>>& matrix) {
                int startrow=0;
                int startcol=0;
                int endrow=matrix.size()-1;
                int endcol=matrix[0].size()-1;
                int d=0;
                vector<int> res;
                while(startcol<=endcol && startrow<=endrow ){
                if(d==0){
                    for(int col=startcol;col<=endcol;col++)
                        res.push_back(matrix[startrow][col]);
                    startrow++; d=1;
                }
                    else if(d==1) {
                    for(int row=startrow;row<=endrow;row++)
                        res.push_back(matrix[row][endcol]);
                    endcol--;
                    d=2;}
                    else if(d==2){
                    for(int col=endcol;col>=startcol;col--)
                        res.push_back(matrix[endrow][col]);
                    endrow--;
                    d=3;}
                    else if(d==3){
                    for(int row=endrow;row>=startrow;row--){
                        res.push_back(matrix[row][startcol]);
                    }
                    startcol++;
                    d=0;}
                }
                return res;
            }
        };`,
  },
  {
    id: 2,
    topic: 'Bit manipulation',
    question: 'Power of Two',
    link: 'https://leetcode.com/problems/power-of-two/',
    sol: `class Solution {
        public:
            bool isPowerOfTwo(int n) {
                if(n<=0) return false;
                if(n&n-1)
                    return false;
                return true;
            }
        };`,
  },
  {
    id: 3,
    topic: 'Bit manipulation, April leetcode challange 1',
    question: 'Reverse String',
    link: 'https://leetcode.com/problems/reverse-string/',
    sol: `class Solution {
        public:
            void reverseString(vector<char>& arr) {
                int s=0;
                int e=arr.size()-1;
                char temp;
                while(s<=e){
                    temp=arr[s];
                    arr[s]=arr[e];
                    arr[e]=temp;
                    temp='\0';
                    s++;
                    e--;
                }
            }
        };`,
  },
];
