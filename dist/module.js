'use strict';

System.register(['./components/config/config', './components/clusters/clusters', './components/clusters/clusterConfig', './components/clusters/clusterInfo', './components/clusters/clusterWorkloads', './components/clusters/nodeInfo', './components/clusters/podInfo'], function (_export, _context) {
  "use strict";

  var ConfigCtrl, ClustersCtrl, ClusterConfigCtrl, ClusterInfoCtrl, ClusterWorkloadsCtrl, NodeInfoCtrl, PodInfoCtrl;
  return {
    setters: [function (_componentsConfigConfig) {
      ConfigCtrl = _componentsConfigConfig.ConfigCtrl;
    }, function (_componentsClustersClusters) {
      ClustersCtrl = _componentsClustersClusters.ClustersCtrl;
    }, function (_componentsClustersClusterConfig) {
      ClusterConfigCtrl = _componentsClustersClusterConfig.ClusterConfigCtrl;
    }, function (_componentsClustersClusterInfo) {
      ClusterInfoCtrl = _componentsClustersClusterInfo.ClusterInfoCtrl;
    }, function (_componentsClustersClusterWorkloads) {
      ClusterWorkloadsCtrl = _componentsClustersClusterWorkloads.ClusterWorkloadsCtrl;
    }, function (_componentsClustersNodeInfo) {
      NodeInfoCtrl = _componentsClustersNodeInfo.NodeInfoCtrl;
    }, function (_componentsClustersPodInfo) {
      PodInfoCtrl = _componentsClustersPodInfo.PodInfoCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', ConfigCtrl);

      _export('ClustersCtrl', ClustersCtrl);

      _export('ClusterConfigCtrl', ClusterConfigCtrl);

      _export('ClusterInfoCtrl', ClusterInfoCtrl);

      _export('ClusterWorkloadsCtrl', ClusterWorkloadsCtrl);

      _export('NodeInfoCtrl', NodeInfoCtrl);

      _export('PodInfoCtrl', PodInfoCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
