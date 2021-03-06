angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/strap/datepicker.html","<div>\n    <div class=\"visible-print form-group\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n\n        <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n\n        <p ng-show=\"form.key\" class=\"visible-print {{form.fieldHtmlClass}}\" sf-field-model=\"replaceAll\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\" ng-bind-html=\"$$value$$\"></p>\n    </div>\n\n    <div\n        class=\"hidden-print form-group\"\n        ng-controller=\"DatePickerController\"\n        ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n        <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n\n        <p ng-show=\"form.key\" class=\"visible-print {{form.fieldHtmlClass}}\" sf-field-model=\"replaceAll\" aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\" ng-bind-html=\"$$value$$\"></p>\n\n        <div ng-class=\"{\'input-group\' : isDirty()}\">\n            <input\n                type=\"text\"\n                class=\"form-control\"\n                ng-show=\"form.key\"\n                ng-model=\"$$value$$\"\n                schema-validate=\"form\"\n                data-model-date-format=\"{{form.dateOptions.modelDateFormat || \'yyyy-MM-dd\'}}\"\n                data-date-type=\"{{form.dateOptions.dateType || \'string\'}}\"\n                data-date-format=\"{{form.dateOptions.dateFormat || \'yyyy-MM-dd\'}}\"\n                data-autoclose=\"{{form.dateOptions.autoclose || true}}\"\n                data-min-date=\"{{form.dateOptions.minDateIsRef ? (model[form.dateOptions.minDate] | sfDatePickerDefaultFormat : form.dateOptions.dateFormat) : form.dateOptions.minDate}}\"\n                data-max-date=\"{{form.dateOptions.maxDateIsRef ? (model[form.dateOptions.maxDate] | sfDatePickerDefaultFormat : form.dateOptions.dateFormat) : form.dateOptions.maxDate}}\"\n                data-use-navitve=\"{{form.dateOptions.useNative || false}}\"\n                bs-datepicker/>\n            <span class=\"input-group-btn\" ng-show=\"isDirty()\">\n                <button id=\"clear-btn-{{form.key.slice(-1)[0]}}\" type=\"button\" class=\"btn btn-sm btn-default\" ng-click=\"clear()\">&times;</button>\n            </span>\n        </div>\n\n        <span\n            ng-if=\"form.feedback !== false\"\n            ng-style=\"isDirty() ? {\'right\': \'35px\'} : {}\"\n            class=\"form-control-feedback datepicker-form-feedback\"\n            ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\n        <div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n    </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/datetimepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n    <div class=\"row\">\n        <div class=\"form-control-date\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                    <i class=\"fa fa-calendar\"></i>\n                </span>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    ng-show=\"form.key\"\n                    ng-model=\"$$value$$\"\n                    data-date-type=\"{{form.options.dateType || \'string\'}}\"\n                    data-model-date-format=\"{{form.options.modelDateFormat || \'yyyy-MM-dd\'}}\"\n                    data-date-format=\"{{form.options.dateFormat || \'yyyy-MM-dd\'}}\"\n                    data-autoclose=\"{{form.options.autoclose || true}}\"\n                    data-min-date=\"{{form.options.minDate}}\"\n                    data-max-date=\"{{form.options.maxDate}}\"\n                    data-use-navitve=\"{{form.options.useNative || false}}\"\n                    bs-datepicker/>\n            </div>\n        </div>\n        <div class=\"form-control-time\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">\n                    <i class=\"fa fa-clock-o\"></i>\n                </span>\n                <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    size=\"8\"\n                    ng-show=\"form.key\"\n                    ng-model=\"$$value$$\"\n                    data-time-type=\"object\"\n                    data-time-format=\"{{form.options.timeFormat || \'shortTime\'}}\"\n                    data-minute-step=\"{{form.options.minuteStep || \'15\'}}\"\n                    data-use-native=\"{{form.options.useNative || false}}\"\n                    bs-timepicker/>\n            </div>\n        </div>\n    </div>\n    <input type=\"hidden\" sf-changed=\"form\" ng-model=\"$$value$$\" schema-validate=\"form\"/>\n    <div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/strap/timepicker.html","<div class=\"form-group\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n\n    <!--<span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>-->\n    <input\n        type=\"text\"\n        class=\"form-control\"\n        size=\"8\"\n        ng-show=\"form.key\"\n        ng-model=\"$$value$$\"\n        schema-validate=\"form\"\n        data-use-native=\"{{form.timeOptions.useNative || false}}\"\n        data-min-time=\"10:00\"\n        data-max-time=\"16:30\"\n        data-time-format=\"HH:mm\"\n        data-time-type=\"string\"\n        data-minute-step=\"15\"\n        data-round-display=\"true\"\n        bs-timepicker/>\n\n    <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\n\n    <div class=\"help-block\" ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\" ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");}]);
angular.module('schemaForm-datepicker', ['schemaForm', 'mgcrea.ngStrap.datepicker']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
    if ((schema.type === 'string' || schema.type === 'number') && schema.format == 'datepicker') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'datepicker';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'datepicker',
    'directives/decorators/bootstrap/strap/datepicker.html');
    schemaFormDecoratorsProvider.createDirective('datepicker',
    'directives/decorators/bootstrap/strap/datepicker.html');
  }])
  .filter('sfDatePickerDefaultFormat', ['moment', function (moment) {
    return function (dateStr, format) {
      format = format || '';
      return dateStr ? moment(dateStr, format.toUpperCase()).format('YYYY-MM-DD') : '';
    };
  }])
  .controller('DatePickerController', ['$scope', function ($scope) {
    $scope.isDirty = function () {
      return $scope.ngModel.$dirty;
    };
    
    $scope.clear = function () {
      $scope.model[$scope.form.key.slice(-1)[0]] = '';
      $scope.ngModel.$setPristine(true);
    }
  }]);

angular.module('schemaForm-datetimepicker', ['schemaForm', 'mgcrea.ngStrap.datepicker', 'mgcrea.ngStrap.timepicker']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
    if (schema.type === 'object' && schema.format == 'datetimepicker') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'datetimepicker';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.object.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'datetimepicker',
    'directives/decorators/bootstrap/strap/datetimepicker.html');
    schemaFormDecoratorsProvider.createDirective('datetimepicker',
    'directives/decorators/bootstrap/strap/datetimepicker.html');
  }]);

angular.module('schemaForm-timepicker', ['schemaForm', 'mgcrea.ngStrap.timepicker']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var picker = function(name, schema, options) {
    if ((schema.type === 'string' || schema.type === 'number') && schema.format == 'timepicker') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'timepicker';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(picker);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'timepicker',
    'directives/decorators/bootstrap/strap/timepicker.html');
    schemaFormDecoratorsProvider.createDirective('timepicker',
    'directives/decorators/bootstrap/strap/timepicker.html');
  }]);
