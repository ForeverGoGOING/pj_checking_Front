export interface PeriodicElement {
  no: number;
  pattern: string[];
  include: string[];
}

export const describe = [
  ['创建型模式', '这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。'],
  ['结构型模式', '这些设计模式关注类和对象的组合。继承的概念被用来组合接口和定义组合对象获得新功能的方式。'],
  ['行为型模式', '这些设计模式特别关注对象之间的通信。']
];

export const patterns = ['设计模式', '工厂模式', '抽象工厂模式', '单例模式', '建造者模式', '原型模式', '适配器模式', '桥接模式', '过滤器模式', '组合模式',
  '装饰器模式', '外观模式', '享元模式', '代理模式', '责任链模式', '命令模式', '解释器模式', '迭代器模式', '中介者模式', '备忘录模式',
  '观察者模式', '状态模式', '空对象模式', '策略模式', '模板模式', '访问者模式'];

export const ELEMENT_DATA: PeriodicElement[] = [
  {no: 1, pattern: describe[0], include: [patterns[0], patterns[1], patterns[2], patterns[3], patterns[4]]}, {
    no: 2,
    pattern: describe[1],
    include: [patterns[5], patterns[6], patterns[7], patterns[8], patterns[9], patterns[10], patterns[11], patterns[12]]
  }, {
    no: 3,
    pattern: describe[2],
    include: [patterns[13], patterns[14], patterns[15], patterns[16], patterns[17], patterns[18], patterns[19], patterns[20], patterns[21], patterns[22]]
  },
];
