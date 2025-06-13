---
title: 《这是一篇很好吃的文》
parent: sample-某角色
nav_order: 1
permalink: /test1/subtest1.html
layout: default
---

# 📄 《这是一篇很好吃的文》

作者：tatakaefanfic

角色：某角色

cp：某角色/某角色

左右是否有意义：或许吧

年龄向：全年龄向

发布平台：不存在

---

好吃，总之就是好吃

好吃多吃

---

{% assign pages_list = site.pages | where: "layout", "default" | sort: "nav_order" %}
{% assign index = pages_list | index_of: page %}

{% if index > 0 %}
➡️ 上一篇：[{{ pages_list[index-1].title }}]({{ pages_list[index-1].url }})
{% endif %}

{% if index < pages_list.size - 1 %}
⬅️ 下一篇：[{{ pages_list[index+1].title }}]({{ pages_list[index+1].url }})
{% endif %}


---

评论测试
{% include comments.html %}
