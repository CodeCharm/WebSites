//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Resources {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option or rebuild the Visual Studio project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.Web.Application.StronglyTypedResourceProxyBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class BindTuning {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal BindTuning() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Resources.BindTuning", global::System.Reflection.Assembly.Load("App_GlobalResources"));
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to var nVer=navigator.appVersion,nAgt=navigator.userAgent,bN=navigator.appName,fullV=&quot;&quot;+parseFloat(navigator.appVersion),majorV=parseInt(navigator.appVersion,10),nameOffset,verOffset,ix;(verOffset=nAgt.indexOf(&quot;Opera&quot;))!==-1?(bN=&quot;Opera&quot;,fullV=nAgt.substring(verOffset+6),(verOffset=nAgt.indexOf(&quot;Version&quot;))!==-1&amp;&amp;(fullV=nAgt.substring(verOffset+8))):(verOffset=nAgt.indexOf(&quot;MSIE&quot;))!==-1?(bN=&quot;IE&quot;,fullV=nAgt.substring(verOffset+5)):(verOffset=nAgt.indexOf(&quot;Chrome&quot;))!==-1?(bN=&quot;Chrome&quot;,fullV=nAgt.substring(verOffset [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string ApplyClassToBodyWithBrowserVersion_min {
            get {
                return ResourceManager.GetString("ApplyClassToBodyWithBrowserVersion_min", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to (function(n){n(document).ready(function(){typeof g_disableCheckoutInEditMode==&quot;undefined&quot;||g_disableCheckoutInEditMode||n(&quot;.MoveToSliderZone&quot;).appendTo(&quot;#bt-slider&gt;.container&quot;)})})(jQuery);.
        /// </summary>
        internal static string CodeCharmDocumentReady_min {
            get {
                return ResourceManager.GetString("CodeCharmDocumentReady_min", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to $(document).ready(function(){if(typeof g_disableCheckoutInEditMode==&quot;undefined&quot;||g_disableCheckoutInEditMode||$(&quot;.MoveToTitleZone&quot;).appendTo(&quot;#bt-pagetitle&gt;.container&quot;),$(&quot;body&quot;).hasClass(&quot;cmsSP&quot;)){var n=&quot;&lt;h1&gt;&quot;+$(&quot;#Logo &gt; .ms-core-pageTitle &gt; span&quot;).text()+&quot;&lt;\/h1&gt;&quot;;$(&quot;#PageTitleZone&quot;).html(n)}});.
        /// </summary>
        internal static string TwilightSoulDocumentReady_min {
            get {
                return ResourceManager.GetString("TwilightSoulDocumentReady_min", resourceCulture);
            }
        }
    }
}