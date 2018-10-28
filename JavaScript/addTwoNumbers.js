/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sum = new ListNode(null);
    var point = sum;
    add(l1, l2, sum, 0);
    return point;
};

var add = function (l1, l2, sum, temp) {
    
    if (l1===null && l2===null){
        // 赋值
        sum.val = temp;
        sum.next = null;
        return;
    } else if(l1 === null) {
        sum.val = l2.val + temp;
        // 取余
        if(sum.val > 9){
            temp = 1 ;
            sum.val = sum.val % 10;
        } else {
            temp = 0;
        }
    } else if (l2 === null) {
        sum.val = l1.val + temp;
        // 取余
        if(sum.val > 9){
            temp = 1 ;
            sum.val = sum.val % 10;
        } else {
            temp = 0;
        }
    } else {
        sum.val = l1.val + l2.val + temp;
        if(sum.val > 9){
            temp = 1 ;
            sum.val = sum.val % 10;
        } else {
            temp = 0;
        }
    }
    l1 = (l1 === null ? null : l1.next);
    l2 = (l2 === null ? null : l2.next);
    
    if (l1===null && l2===null && temp===0) {
        sum.next = null;
        return;
    }
    
    sum.next = new ListNode(null);
    sum = sum.next;
    
    add(l1, l2, sum, temp);
    
}
