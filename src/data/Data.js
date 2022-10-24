export const Data = [
    {
        id: 0,
        topic: ['array'],
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
        topic: ['array'],
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
        topic: ['Bit manipulation'],
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
        topic: ['Bit manipulation'],
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
    {
        id: 4,
        topic: ['Two pointer'],
        question: 'Valid Palindrome II',
        link: 'https://leetcode.com/problems/valid-palindrome-ii/',
        sol: `class Solution {
        public:
            bool ispalindrome(string st,int s,int e){
                while(s<e){
                    if(st[s]!=st[e])
                        return false;
                    s++;
                    e--;
                }
                return true;
            }
            bool validPalindrome(string st) {
                int s=0;
                int e=st.size()-1;
                while(s<=e){
                    
                    if(st[s]!=st[e]){
                       return ispalindrome(st,s,e-1) || ispalindrome(st,s+1,e);
                    }
                 else{
                     s++;
                     e--;
                 }   
                }
                return true;
            }
        };`,
    },
    {
        id: 5,
        topic: ['Backtracking'],
        question: 'Subsets',
        link: 'https://leetcode.com/problems/subsets/',
        sol: `class Solution {
        public:
            void subs(int start,vector<int> nums,vector<vector<int>> &res,vector<int> &temp){
                res.push_back(temp);
                for(int i=start;i<nums.size();i++){
                    temp.push_back(nums[i]);
                    subs(i+1,nums,res,temp);
                    temp.pop_back();
                }
            }
            vector<vector<int>> subsets(vector<int>& nums) {
                vector<int> temp={};
                vector<vector<int>> res;
                subs(0,nums,res,temp);
                return res; 
            }
        };`,
    },
    {
        id: 6,
        topic: ['Switch and Case'],
        question: 'Roman to Integer',
        link: 'https://leetcode.com/problems/roman-to-integer/',
        sol: `class Solution {
        public:
            int romanToInt(string S) {
              int ans = 0, num = 0;
              for (int i = S.size()-1; ~i; i--) {
                switch(S[i]) {
                     case 'I': num = 1; break;
                     case 'V': num = 5; break;
                     case 'X': num = 10; break;
                     case 'L': num = 50; break;
                     case 'C': num = 100; break;
                     case 'D': num = 500; break;
                     case 'M': num = 1000; break;
                }
                if (4 * num < ans) ans -= num;
                else ans += num;
            }
            return ans;        
         }
    };`,
    },

    {
        id: 7,
        topic: ['Array', 'Greedy', 'Two pointer'],
        question: 'Container With Most Water',
        link: 'https://leetcode.com/problems/container-with-most-water/',
        sol: `class Solution {
        public:
            int maxArea(vector<int>& height) {

                int maxArea = 0;

                int n = height.size();
                int p1 = 0;
                int p2 = n-1;

                while(p1<p2){

                    int temp_area = min(height[p1],height[p2]) * abs(p1-p2);
                    maxArea = max(maxArea, temp_area);


                    if(height[p1]<=height[p2]){
                        p1++;
                    }
                    else if(height[p1]>height[p2]){
                        p2--;
                    }

                }

                return maxArea;
            }
        };`,
    },



];
