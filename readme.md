# Problem
স্কোপে beta দিলে beta তে যদি alpha থাকে, তাহলে alpha এর কোন কিছুই সে ইন্সটল করে না। আমার beta তে yoctodelay আছে আর alpha তে waait আছে। সে yoctodelay ইন্সটল করেছে waait ইন্সটল করেনি।
![](http://i.imgur.com/AOJL9He.png)

যদি yarn workspaces ব্যবহার করি, তাহলে --scope কাজ করে না। শুধু alpha এর bootstrap করতে চাইলে beta এর গুলাও ইন্সটল হয়ে যায়।
![](http://i.imgur.com/gAdf6Vg.png)