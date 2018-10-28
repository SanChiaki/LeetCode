/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const length = s.length;
    
    if ( length < 2) return length;
    
    let hash_table = {};
    let max_length = 0;
    let start_at = 0;
    
    for(let i = 0; i < length; i++) {
        if(hash_table[s[i]] === undefined){
            hash_table[s[i]] = i;
        } else {
            
            if (i - start_at > max_length) {
                max_length = i - start_at;
            }
            start_at = hash_table[s[i]]+1;
            i = hash_table[s[i]];
            hash_table = {}
        }
    }
    if (length - start_at > max_length) {
                max_length = length - start_at;
            }
    return max_length;
};
