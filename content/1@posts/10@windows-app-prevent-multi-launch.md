---
date: 2018-05-26
title: Windows防止应用双开
tags:
  - windows
---

## 先说结论

在main函数靠前的位置添加如下代码

```cpp
//need #include<windows.h>
HANDLE hMutex = CreateMutex(NULL, false, (LPCTSTR)"YourAppName");
if (GetLastError() == ERROR_ALREADY_EXISTS){
	return 0;
}
```

效果:

启动应用A得到实例A1，再次启动应用A试图得到实例A2会失败

## 原理

每次启动应用时，上面的代码调用CreateMutex在系统中产生一个**互斥体**

互斥体的名称在上述代码中为"YourAppName"

再次启动应用时又会试图产生同名互斥体，显然这是不允许的

这样就会产生**ERROR_ALREADY_EXISTS**错误，通过[GetLastError](https://msdn.microsoft.com/en-us/library/windows/desktop/ms679360)()函数获取即可

### 关于互斥体的名称

不要和已有其他互斥体重名就好，比如像本例一样使用应用名作为互斥体名

## 风险和其他

释放互斥体函数[**ReleaseMutex**](https://msdn.microsoft.com/en-us/library/windows/desktop/ms685066)和关闭线程/句柄函数[**CloseHandle**](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724211)在此例中没有被调用，因为main函数return时系统会自动做如上工作。如果要实现其他更复杂的判断功能可以考虑调用这两个函数

参考：
- [CloseHandle function](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724211)
- [CreateMutex function](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682411)
- [如何禁止程序启动多个实例](https://blog.csdn.net/ciaos/article/details/7488362)
- [C# 禁止应用程序多次启动](http://www.cnblogs.com/singlex/archive/2011/12/07/2279913.html)