/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '@angular/router/src/router_module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/animation/animation_queue';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/common/src/location/location';
import * as import28 from '@angular/router/src/url_tree';
import * as import29 from '@angular/router/src/router_outlet_map';
import * as import30 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import31 from '@angular/router/src/router_preloader';
import * as import32 from 'ng2-facebook-sdk/dist/ng2-facebook-sdk';
import * as import33 from '../../app/services/user.service';
import * as import34 from '@angular/core/src/di/injector';
import * as import35 from './pages/home/home.page.ngfactory';
import * as import36 from './pages/login/login.page.ngfactory';
import * as import37 from './app.component.ngfactory';
import * as import38 from '@angular/core/src/i18n/tokens';
import * as import39 from '@angular/core/src/application_tokens';
import * as import40 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import41 from '@angular/platform-browser/src/dom/events/key_events';
import * as import42 from '@angular/core/src/zone/ng_zone';
import * as import43 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import44 from '@angular/common/src/location/platform_location';
import * as import45 from '@angular/common/src/location/location_strategy';
import * as import46 from '../../app/pages/home/home.page';
import * as import47 from '../../app/pages/login/login.page';
import * as import48 from '@angular/router/src/url_handling_strategy';
import * as import49 from '@angular/router/src/route_reuse_strategy';
import * as import50 from '@angular/router/src/router';
import * as import51 from '@angular/core/src/console';
import * as import52 from '@angular/core/src/error_handler';
import * as import53 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import54 from '@angular/platform-browser/src/dom/animation_driver';
import * as import55 from '@angular/core/src/render/api';
import * as import56 from '@angular/core/src/security';
import * as import57 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import58 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import59 from '@angular/http/src/interfaces';
import * as import60 from '@angular/http/src/http';
import * as import61 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import62 from '@angular/router/src/router_config_loader';
import * as import63 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _HttpModule_5:import7.HttpModule;
  _ROUTER_FORROOT_GUARD_6:any;
  _RouterModule_7:import8.RouterModule;
  _AppModule_8:import1.AppModule;
  __LOCALE_ID_9:any;
  __NgLocalization_10:import9.NgLocaleLocalization;
  _ErrorHandler_11:any;
  _ApplicationInitStatus_12:import10.ApplicationInitStatus;
  _Testability_13:import11.Testability;
  _ApplicationRef__14:import12.ApplicationRef_;
  __ApplicationRef_15:any;
  __Compiler_16:import13.Compiler;
  __APP_ID_17:any;
  __DOCUMENT_18:any;
  __HAMMER_GESTURE_CONFIG_19:import14.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_20:any[];
  __EventManager_21:import15.EventManager;
  __DomSharedStylesHost_22:import16.DomSharedStylesHost;
  __AnimationDriver_23:any;
  __DomRootRenderer_24:import17.DomRootRenderer_;
  __NgProbeToken_25:any[];
  __RootRenderer_26:any;
  __DomSanitizer_27:import18.DomSanitizerImpl;
  __Sanitizer_28:any;
  __AnimationQueue_29:import19.AnimationQueue;
  __ViewUtils_30:import20.ViewUtils;
  __IterableDiffers_31:any;
  __KeyValueDiffers_32:any;
  __SharedStylesHost_33:any;
  __Title_34:import21.Title;
  __RadioControlRegistry_35:import22.RadioControlRegistry;
  __BrowserXhr_36:import23.BrowserXhr;
  __ResponseOptions_37:import24.BaseResponseOptions;
  __XSRFStrategy_38:any;
  __XHRBackend_39:import25.XHRBackend;
  __RequestOptions_40:import26.BaseRequestOptions;
  __Http_41:any;
  __ROUTER_CONFIGURATION_42:any;
  __LocationStrategy_43:any;
  __Location_44:import27.Location;
  __UrlSerializer_45:import28.DefaultUrlSerializer;
  __RouterOutletMap_46:import29.RouterOutletMap;
  __NgModuleFactoryLoader_47:import30.SystemJsNgModuleLoader;
  __ROUTES_48:any[];
  __Router_49:any;
  __ActivatedRoute_50:any;
  _NoPreloading_51:import31.NoPreloading;
  _PreloadingStrategy_52:any;
  _RouterPreloader_53:import31.RouterPreloader;
  __PreloadAllModules_54:import31.PreloadAllModules;
  __ROUTER_INITIALIZER_55:any;
  __APP_BOOTSTRAP_LISTENER_56:any[];
  __FacebookService_57:import32.FacebookService;
  __UserService_58:import33.UserService;
  constructor(parent:import34.Injector) {
    super(parent,[
      import35.HomePageNgFactory,
      import36.LoginPageNgFactory,
      import37.AppComponentNgFactory
    ]
    ,[import37.AppComponentNgFactory]);
  }
  get _LOCALE_ID_9():any {
    if ((this.__LOCALE_ID_9 == null)) { (this.__LOCALE_ID_9 = import3._localeFactory(this.parent.get(import38.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_9;
  }
  get _NgLocalization_10():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == null)) { (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9)); }
    return this.__NgLocalization_10;
  }
  get _ApplicationRef_15():any {
    if ((this.__ApplicationRef_15 == null)) { (this.__ApplicationRef_15 = this._ApplicationRef__14); }
    return this.__ApplicationRef_15;
  }
  get _Compiler_16():import13.Compiler {
    if ((this.__Compiler_16 == null)) { (this.__Compiler_16 = new import13.Compiler()); }
    return this.__Compiler_16;
  }
  get _APP_ID_17():any {
    if ((this.__APP_ID_17 == null)) { (this.__APP_ID_17 = import39._appIdRandomProviderFactory()); }
    return this.__APP_ID_17;
  }
  get _DOCUMENT_18():any {
    if ((this.__DOCUMENT_18 == null)) { (this.__DOCUMENT_18 = import4._document()); }
    return this.__DOCUMENT_18;
  }
  get _HAMMER_GESTURE_CONFIG_19():import14.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_19 == null)) { (this.__HAMMER_GESTURE_CONFIG_19 = new import14.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_19;
  }
  get _EVENT_MANAGER_PLUGINS_20():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_20 == null)) { (this.__EVENT_MANAGER_PLUGINS_20 = [
      new import40.DomEventsPlugin(),
      new import41.KeyEventsPlugin(),
      new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_19)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_20;
  }
  get _EventManager_21():import15.EventManager {
    if ((this.__EventManager_21 == null)) { (this.__EventManager_21 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_20,this.parent.get(import42.NgZone))); }
    return this.__EventManager_21;
  }
  get _DomSharedStylesHost_22():import16.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_22 == null)) { (this.__DomSharedStylesHost_22 = new import16.DomSharedStylesHost(this._DOCUMENT_18)); }
    return this.__DomSharedStylesHost_22;
  }
  get _AnimationDriver_23():any {
    if ((this.__AnimationDriver_23 == null)) { (this.__AnimationDriver_23 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_23;
  }
  get _DomRootRenderer_24():import17.DomRootRenderer_ {
    if ((this.__DomRootRenderer_24 == null)) { (this.__DomRootRenderer_24 = new import17.DomRootRenderer_(this._DOCUMENT_18,this._EventManager_21,this._DomSharedStylesHost_22,this._AnimationDriver_23,this._APP_ID_17)); }
    return this.__DomRootRenderer_24;
  }
  get _NgProbeToken_25():any[] {
    if ((this.__NgProbeToken_25 == null)) { (this.__NgProbeToken_25 = [import8.routerNgProbeToken()]); }
    return this.__NgProbeToken_25;
  }
  get _RootRenderer_26():any {
    if ((this.__RootRenderer_26 == null)) { (this.__RootRenderer_26 = import43._createConditionalRootRenderer(this._DomRootRenderer_24,this.parent.get(import43.NgProbeToken,(null as any)),this._NgProbeToken_25)); }
    return this.__RootRenderer_26;
  }
  get _DomSanitizer_27():import18.DomSanitizerImpl {
    if ((this.__DomSanitizer_27 == null)) { (this.__DomSanitizer_27 = new import18.DomSanitizerImpl()); }
    return this.__DomSanitizer_27;
  }
  get _Sanitizer_28():any {
    if ((this.__Sanitizer_28 == null)) { (this.__Sanitizer_28 = this._DomSanitizer_27); }
    return this.__Sanitizer_28;
  }
  get _AnimationQueue_29():import19.AnimationQueue {
    if ((this.__AnimationQueue_29 == null)) { (this.__AnimationQueue_29 = new import19.AnimationQueue(this.parent.get(import42.NgZone))); }
    return this.__AnimationQueue_29;
  }
  get _ViewUtils_30():import20.ViewUtils {
    if ((this.__ViewUtils_30 == null)) { (this.__ViewUtils_30 = new import20.ViewUtils(this._RootRenderer_26,this._Sanitizer_28,this._AnimationQueue_29)); }
    return this.__ViewUtils_30;
  }
  get _IterableDiffers_31():any {
    if ((this.__IterableDiffers_31 == null)) { (this.__IterableDiffers_31 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_31;
  }
  get _KeyValueDiffers_32():any {
    if ((this.__KeyValueDiffers_32 == null)) { (this.__KeyValueDiffers_32 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_32;
  }
  get _SharedStylesHost_33():any {
    if ((this.__SharedStylesHost_33 == null)) { (this.__SharedStylesHost_33 = this._DomSharedStylesHost_22); }
    return this.__SharedStylesHost_33;
  }
  get _Title_34():import21.Title {
    if ((this.__Title_34 == null)) { (this.__Title_34 = new import21.Title()); }
    return this.__Title_34;
  }
  get _RadioControlRegistry_35():import22.RadioControlRegistry {
    if ((this.__RadioControlRegistry_35 == null)) { (this.__RadioControlRegistry_35 = new import22.RadioControlRegistry()); }
    return this.__RadioControlRegistry_35;
  }
  get _BrowserXhr_36():import23.BrowserXhr {
    if ((this.__BrowserXhr_36 == null)) { (this.__BrowserXhr_36 = new import23.BrowserXhr()); }
    return this.__BrowserXhr_36;
  }
  get _ResponseOptions_37():import24.BaseResponseOptions {
    if ((this.__ResponseOptions_37 == null)) { (this.__ResponseOptions_37 = new import24.BaseResponseOptions()); }
    return this.__ResponseOptions_37;
  }
  get _XSRFStrategy_38():any {
    if ((this.__XSRFStrategy_38 == null)) { (this.__XSRFStrategy_38 = import7._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_38;
  }
  get _XHRBackend_39():import25.XHRBackend {
    if ((this.__XHRBackend_39 == null)) { (this.__XHRBackend_39 = new import25.XHRBackend(this._BrowserXhr_36,this._ResponseOptions_37,this._XSRFStrategy_38)); }
    return this.__XHRBackend_39;
  }
  get _RequestOptions_40():import26.BaseRequestOptions {
    if ((this.__RequestOptions_40 == null)) { (this.__RequestOptions_40 = new import26.BaseRequestOptions()); }
    return this.__RequestOptions_40;
  }
  get _Http_41():any {
    if ((this.__Http_41 == null)) { (this.__Http_41 = import7.httpFactory(this._XHRBackend_39,this._RequestOptions_40)); }
    return this.__Http_41;
  }
  get _ROUTER_CONFIGURATION_42():any {
    if ((this.__ROUTER_CONFIGURATION_42 == null)) { (this.__ROUTER_CONFIGURATION_42 = {}); }
    return this.__ROUTER_CONFIGURATION_42;
  }
  get _LocationStrategy_43():any {
    if ((this.__LocationStrategy_43 == null)) { (this.__LocationStrategy_43 = import8.provideLocationStrategy(this.parent.get(import44.PlatformLocation),this.parent.get(import45.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_42)); }
    return this.__LocationStrategy_43;
  }
  get _Location_44():import27.Location {
    if ((this.__Location_44 == null)) { (this.__Location_44 = new import27.Location(this._LocationStrategy_43)); }
    return this.__Location_44;
  }
  get _UrlSerializer_45():import28.DefaultUrlSerializer {
    if ((this.__UrlSerializer_45 == null)) { (this.__UrlSerializer_45 = new import28.DefaultUrlSerializer()); }
    return this.__UrlSerializer_45;
  }
  get _RouterOutletMap_46():import29.RouterOutletMap {
    if ((this.__RouterOutletMap_46 == null)) { (this.__RouterOutletMap_46 = new import29.RouterOutletMap()); }
    return this.__RouterOutletMap_46;
  }
  get _NgModuleFactoryLoader_47():import30.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_47 == null)) { (this.__NgModuleFactoryLoader_47 = new import30.SystemJsNgModuleLoader(this._Compiler_16,this.parent.get(import30.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_47;
  }
  get _ROUTES_48():any[] {
      if ((this.__ROUTES_48 == null)) { (this.__ROUTES_48 = [[
        {
          path: '',
          component: import46.HomePage
        }
        ,
        {
          path: 'login',
          component: import47.LoginPage
        }

      ]
    ]); }
    return this.__ROUTES_48;
  }
  get _Router_49():any {
    if ((this.__Router_49 == null)) { (this.__Router_49 = import8.setupRouter(this._ApplicationRef_15,this._UrlSerializer_45,this._RouterOutletMap_46,this._Location_44,this,this._NgModuleFactoryLoader_47,this._Compiler_16,this._ROUTES_48,this._ROUTER_CONFIGURATION_42,this.parent.get(import48.UrlHandlingStrategy,(null as any)),this.parent.get(import49.RouteReuseStrategy,(null as any)))); }
    return this.__Router_49;
  }
  get _ActivatedRoute_50():any {
    if ((this.__ActivatedRoute_50 == null)) { (this.__ActivatedRoute_50 = import8.rootRoute(this._Router_49)); }
    return this.__ActivatedRoute_50;
  }
  get _PreloadAllModules_54():import31.PreloadAllModules {
    if ((this.__PreloadAllModules_54 == null)) { (this.__PreloadAllModules_54 = new import31.PreloadAllModules()); }
    return this.__PreloadAllModules_54;
  }
  get _ROUTER_INITIALIZER_55():any {
    if ((this.__ROUTER_INITIALIZER_55 == null)) { (this.__ROUTER_INITIALIZER_55 = import8.initialRouterNavigation(this._Router_49,this._ApplicationRef_15,this._RouterPreloader_53,this._ROUTER_CONFIGURATION_42)); }
    return this.__ROUTER_INITIALIZER_55;
  }
  get _APP_BOOTSTRAP_LISTENER_56():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_56 == null)) { (this.__APP_BOOTSTRAP_LISTENER_56 = [this._ROUTER_INITIALIZER_55]); }
    return this.__APP_BOOTSTRAP_LISTENER_56;
  }
  get _FacebookService_57():import32.FacebookService {
    if ((this.__FacebookService_57 == null)) { (this.__FacebookService_57 = new import32.FacebookService()); }
    return this.__FacebookService_57;
  }
  get _UserService_58():import33.UserService {
    if ((this.__UserService_58 == null)) { (this.__UserService_58 = new import33.UserService(this._Http_41)); }
    return this.__UserService_58;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._HttpModule_5 = new import7.HttpModule();
    this._ROUTER_FORROOT_GUARD_6 = import8.provideForRootGuard(this.parent.get(import50.Router,(null as any)));
    this._RouterModule_7 = new import8.RouterModule(this._ROUTER_FORROOT_GUARD_6);
    this._AppModule_8 = new import1.AppModule();
    this._ErrorHandler_11 = import4.errorHandler();
    this._ApplicationInitStatus_12 = new import10.ApplicationInitStatus(this.parent.get(import10.APP_INITIALIZER,(null as any)));
    this._Testability_13 = new import11.Testability(this.parent.get(import42.NgZone));
    this._ApplicationRef__14 = new import12.ApplicationRef_(this.parent.get(import42.NgZone),this.parent.get(import51.Console),this,this._ErrorHandler_11,this,this._ApplicationInitStatus_12,this.parent.get(import11.TestabilityRegistry,(null as any)),this._Testability_13);
    this._NoPreloading_51 = new import31.NoPreloading();
    this._PreloadingStrategy_52 = this._NoPreloading_51;
    this._RouterPreloader_53 = new import31.RouterPreloader(this._Router_49,this._NgModuleFactoryLoader_47,this._Compiler_16,this,this._PreloadingStrategy_52);
    return this._AppModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import7.HttpModule)) { return this._HttpModule_5; }
    if ((token === import8.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_6; }
    if ((token === import8.RouterModule)) { return this._RouterModule_7; }
    if ((token === import1.AppModule)) { return this._AppModule_8; }
    if ((token === import38.LOCALE_ID)) { return this._LOCALE_ID_9; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import52.ErrorHandler)) { return this._ErrorHandler_11; }
    if ((token === import10.ApplicationInitStatus)) { return this._ApplicationInitStatus_12; }
    if ((token === import11.Testability)) { return this._Testability_13; }
    if ((token === import12.ApplicationRef_)) { return this._ApplicationRef__14; }
    if ((token === import12.ApplicationRef)) { return this._ApplicationRef_15; }
    if ((token === import13.Compiler)) { return this._Compiler_16; }
    if ((token === import39.APP_ID)) { return this._APP_ID_17; }
    if ((token === import53.DOCUMENT)) { return this._DOCUMENT_18; }
    if ((token === import14.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_19; }
    if ((token === import15.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_20; }
    if ((token === import15.EventManager)) { return this._EventManager_21; }
    if ((token === import16.DomSharedStylesHost)) { return this._DomSharedStylesHost_22; }
    if ((token === import54.AnimationDriver)) { return this._AnimationDriver_23; }
    if ((token === import17.DomRootRenderer)) { return this._DomRootRenderer_24; }
    if ((token === import12.NgProbeToken)) { return this._NgProbeToken_25; }
    if ((token === import55.RootRenderer)) { return this._RootRenderer_26; }
    if ((token === import18.DomSanitizer)) { return this._DomSanitizer_27; }
    if ((token === import56.Sanitizer)) { return this._Sanitizer_28; }
    if ((token === import19.AnimationQueue)) { return this._AnimationQueue_29; }
    if ((token === import20.ViewUtils)) { return this._ViewUtils_30; }
    if ((token === import57.IterableDiffers)) { return this._IterableDiffers_31; }
    if ((token === import58.KeyValueDiffers)) { return this._KeyValueDiffers_32; }
    if ((token === import16.SharedStylesHost)) { return this._SharedStylesHost_33; }
    if ((token === import21.Title)) { return this._Title_34; }
    if ((token === import22.RadioControlRegistry)) { return this._RadioControlRegistry_35; }
    if ((token === import23.BrowserXhr)) { return this._BrowserXhr_36; }
    if ((token === import24.ResponseOptions)) { return this._ResponseOptions_37; }
    if ((token === import59.XSRFStrategy)) { return this._XSRFStrategy_38; }
    if ((token === import25.XHRBackend)) { return this._XHRBackend_39; }
    if ((token === import26.RequestOptions)) { return this._RequestOptions_40; }
    if ((token === import60.Http)) { return this._Http_41; }
    if ((token === import8.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_42; }
    if ((token === import45.LocationStrategy)) { return this._LocationStrategy_43; }
    if ((token === import27.Location)) { return this._Location_44; }
    if ((token === import28.UrlSerializer)) { return this._UrlSerializer_45; }
    if ((token === import29.RouterOutletMap)) { return this._RouterOutletMap_46; }
    if ((token === import61.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_47; }
    if ((token === import62.ROUTES)) { return this._ROUTES_48; }
    if ((token === import50.Router)) { return this._Router_49; }
    if ((token === import63.ActivatedRoute)) { return this._ActivatedRoute_50; }
    if ((token === import31.NoPreloading)) { return this._NoPreloading_51; }
    if ((token === import31.PreloadingStrategy)) { return this._PreloadingStrategy_52; }
    if ((token === import31.RouterPreloader)) { return this._RouterPreloader_53; }
    if ((token === import31.PreloadAllModules)) { return this._PreloadAllModules_54; }
    if ((token === import8.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_55; }
    if ((token === import39.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_56; }
    if ((token === import32.FacebookService)) { return this._FacebookService_57; }
    if ((token === import33.UserService)) { return this._UserService_58; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__14.ngOnDestroy();
    this._RouterPreloader_53.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);