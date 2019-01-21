<template>
 <div class="container">

    <ul class="timeline">
      <li>
          <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Crossfuze</h4>
              <h5 class="timeline-title">Technical Consultant</h5>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 2018</small></p>
            </div>
            <div class="timeline-body">
              <p>Several implementations from the ground up with ITSM, Service Portal, PPM, integrations with LDAP, SSO (both through built in plugin and Azure), SOAP, 
                MID Server setup, configuration, file retrieval, etc.
                </p>
            </div>
          </div>
        </li>
        <li class="timeline-inverted">
          <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Euronext</h4>
              <h5 class="timeline-title">ServiceNow Developer</h5>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>2016</small></p>
            </div>
            <div class="timeline-body">
              <p>Administration of a ServiceNow instance in the Fuji version. Whilst doing so, and more importantly
                    development of a new instance from fresh in the Helsinki version, complying with the processes
                    established in ITIL but also with the customer's desires. Consequential development of several modules
                    such as Change, Incident, Problem and Request Management but also widgets in AngularJS for the
                    Service Portal
                    <br/>Implementation and customization of other modules such as GRC
                    <br/>Implementation of Custom modules such as Vulnerability Management and Trade and Order
                    Cancellation registry
                    <br/>Implementation of several integrations with Workday, LDAP, Altiris, Redmine, etc.
                    <br/>Setup of Discovery and SSO</p>
            </div>
          </div>
        </li>
        <li>
          <div class="timeline-badge"><i class="glyphicon glyphicon-check"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">Xhockware (Internship)</h4>
              <h5 class="timeline-title">Web Developer</h5>
              <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>2016</small></p>
            </div>
            <div class="timeline-body">
              <p>Developed a fully functional and responsive Web Administration Application with AngularJS and
NodeJS. Built both client and server side applications.
</p>
            </div>
          </div>
        </li>
        
    </ul>
</div>
</template>


<script>
export default {
  name: "Experience",
  props: [],
  components: {},
  data() {
    return {
      experiences: [
        {
          company: "Euronext 2016-2018",
          role: "ServiceNow Developer",
          description: `-Administration of a ServiceNow instance in the Fuji version. Whilst doing so, and more importantly
                    development of a new instance from fresh in the Helsinki version, complying with the processes
                    established in ITIL but also with the customer's desires. Consequential development of several modules
                    such as Change, Incident, Problem and Request Management but also widgets in AngularJS for the
                    Service Portal
                    -Implementation and customization of other modules such as GRC
                    -Implementation of Custom modules such as Vulnerability Management and Trade and Order
                    Cancellation registry
                    -Implementation of several integrations with Workday, LDAP, Altiris, Redmine, etc.
                    -Setup of Discovery and SSO`
          
        }
      ]
    };
  }
};
</script>

