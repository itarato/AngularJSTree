function MindMap($scope) {
  $scope.tree = {'title': 'Root'};

  $scope.add_child = function(parent_node, title) {
    var child_node = {'title': title};

    if (parent_node.children) {
      parent_node.children.push(child_node);
    }
    else {
      parent_node.children = [child_node];
    }
  };

  /*
  $scope.delete_child = function() {
    // @todo Find out how to do deletion.
  };
  */
}
