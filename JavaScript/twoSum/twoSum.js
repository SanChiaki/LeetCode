var twoSum = function(nums, target) {
  const m = new Map();
  for(let i = 0; i < nums.length; i++) {
      
      let temp = target - nums[i];
      let s = m.get(temp);
      if(s !== undefined) {
          return [s, i];
      }
      m.set(nums[i],i);
  }
};