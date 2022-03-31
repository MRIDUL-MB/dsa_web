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
    id: 2,
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
];
