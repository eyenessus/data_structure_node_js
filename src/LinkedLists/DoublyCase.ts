import DoublyLinkedList from "./DoublyLinkedList"

const subway = new DoublyLinkedList()
subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

const brazilSubway = new DoublyLinkedList()
brazilSubway.addToHead('Santo amaro')
brazilSubway.addToHead('Capão redondo')
brazilSubway.addToTail('Vila das belezas')
brazilSubway.addToTail('Santa cruz')

// subway.swapNodes(brazilSubway,'google','pop')