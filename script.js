function downloadPDF() {
    // Ẩn tabs trước khi xuất PDF
    var tabs = document.querySelector('.tabs');
    if (tabs) tabs.style.display = 'none';

    // Hiện tất cả các tab-content trước khi xuất PDF
    var tabContents = document.querySelectorAll('.tab-content');
    var prevDisplay = [];
    tabContents.forEach(function (tab) {
        prevDisplay.push(tab.style.display);
        tab.style.display = 'block';
    });

    const element = document.getElementById('portfolio-content');
    html2pdf().set({
        margin: 0.5,
        filename: 'portfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(element).save().then(() => {
        // Hiển thị lại tabs sau khi xuất PDF
        if (tabs) tabs.style.display = '';
        // Khôi phục trạng thái hiển thị ban đầu của các tab-content
        tabContents.forEach(function (tab, i) {
            tab.style.display = prevDisplay[i];
        });
    });
}

function showTab(tabId, event) {

    // Ẩn tất cả các tab và bỏ chọn các nút
    document.querySelectorAll('.tab-content').forEach(function (tab) {
        tab.style.display = 'none';
    });
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
        btn.classList.remove('active');
    });

    // const event = window.event;
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

const translations = {
    de: {
        about_title: 'Über mich',
        about_tagline: 'IT Operations | IT Service Management | Monitoring',
        about_description: `IT-Mitarbeiter mit Berufserfahrung im IT Service Management, in der Benutzer- und
            Berechtigungsverwaltung sowie im IT-Monitoring. Praktische Kenntnisse in Microsoft SQL Server, der
            Erstellung und Anpassung von SQL-Views sowie im Umgang mit CA Service Desk und USU Service Management.
            Erfahrung im NOC-Monitoring mit Zabbix und in der systematischen Ticketerfassung. Ziel ist die fachliche
            Weiterentwicklung im IT-Support, IT-Betrieb und in der Junior-Systemadministration.`,
        info_section: `
            <h2>Kontaktinformation</h2>
            <ul>
                <li><strong>Email:</strong> vuongcuong144@gmail.com</li>
                <li><strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/vuong-cuong-dam-477a891b9" target="_blank">
                        linkedin.com/in/dam-vuong-cuong-8b0b4a1b6/
                    </a>
                </li>
                <li><strong>Xing:</strong>
                    <a href="https://www.xing.com/profile/VuongCuong_Dam3/web_profiles" target="_blank">
                        https://www.xing.com/profile/VuongCuong_Dam3/web_profiles
                    </a>
                </li>
            </ul>
        `,
        cv_section: `
            <h2>Berufserfahrung</h2>
    <div class="job">
        <p><strong>GISA GmbH </strong> (Hanoi, Vietnam)
                    <!-- <br> https://gisasolutions.vn/ -->
                    <br> <a href="https://www.gisa.de/" target="_blank">https://www.gisa.de/
                    </a>

                </p>

                <h3>GISA Solutions Vietnam - NOC Monitoring <span>seit 01.2025</span> </h3>
                <ul>
                    <li>Überwachung von IT-Systemen und Alarmmeldungen mithilfe von Zabbix.</li>
                    <li>Beobachtung von Systemmeldungen und Auffälligkeiten im laufenden Betrieb.</li>
                    <li>Schnelle Identifikation und Lösung von Netzwerk- oder Systemstörungen</li>
                    <li>Weiterleitung bzw. Eskalation relevanter Meldungen an die zuständigen Teams gemäß den
                        vorgegebenen Prozessen.</li>
                    <li>Erstellung von Netzwerk-Dokumentationen und Statusberichten.</li>
                    <li>Teilnahme an der Bereitschaft gemäß den betrieblichen Vorgaben.</li>
                </ul>

                <!-- <br> https://gisasolutions.vn/ -->

                <h3>GISA Solutions Vietnam - Security and Network Operation Center (SOC)<span>01.2025 - 03.2026</span>
                </h3>

                <!-- <h5>Security Operation Center (SOC)</h5> -->
                <ul>
                    <li>Überwachung von Sicherheits-Dashboards und angezeigten Ereignissen.</li>
                    <li>Beobachtung auffälliger Meldungen im Rahmen der vorgegebenen Monitoring-Prozesse.</li>
                    <li>Dokumentation relevanter Ereignisse und Unterstützung der Ticketbearbeitung, soweit im eigenen
                        Aufgabenbereich.</li>
                </ul>

                <h3>GISA Solutions Vietnam - IT Service Management (ITSM) <span>04.2022 -12.2024</span> </h3>
                <ul>
                    <li>Erstellung und Anpassung von Views in Microsoft SQL Server.</li>
                    <li>Verwaltung von Benutzerkonten und Benutzergruppen im Rahmen der zugewiesenen administrativen
                        Berechtigungen.</li>
                    <li>Erstellung, Änderung und Pflege von Benutzern und Gruppen sowie Zuweisung von
                        Zugriffsberechtigungen.</li>
                    <li>Bearbeitung von IT-Service-Anfragen und Unterstützung bei der Ticketbearbeitung im Rahmen des
                        eigenen Aufgabenbereichs.</li>
                    <li>Arbeit mit ITSM-Tools, insbesondere CA Service Desk und USU Service Management.</li>
                    <li>Zusammenarbeit mit globalen IT-Support-Teams zur Sicherstellung der Servicequalität.</li>

                </ul>
    </div>

    <div class="job">
        <p><strong>EXELLIENT GmbH</strong> (Darmstadt, DE)
                    <br> <a href="https://www.exellient.de/" target="_blank">https://www.exellient.de/</a>
                </p>
                <h3>Junior Developer Support <span>08.2021 – 02.2022</span></h3>
                <!-- 
                <p>
                    Unterstützung des Entwicklerteams bei der Erstellung von Webanwendungen.
                    Arbeit mit Frontend-Technologien (HTML, CSS) und Einarbeitung in Angular-Frameworks.
                    Konfiguration und Einsatz von Microsoft SQL-Datenbanken.
                </p>
                -->
                <ul>
                    <li>Mitarbeit im Entwicklerteam an einem Tool zur Verwaltung von Krankenhausprozessen.</li>
                    <li>Unterstützung bei der Entwicklung und Anpassung von Frontend-Komponenten mit HTML und CSS.</li>
                    <li>Erste praktische Erfahrungen mit dem Angular-Framework gesammelt.</li>
                    <li>Unterstützung beim Aufbau und bei der Einrichtung von Microsoft-SQL-Datenbanken.</li>
                    <li>Unterstützung des Entwicklerteams bei technischen Aufgaben im Rahmen des Projekts.</li>
                </ul>
    </div>


    <div class="job">
        <p><strong>HQ TECH GmbH</strong> (Berlin, DE)
                    <!-- <br>http://www.hqtech.de/ -->
                    <br> <a href="http://www.hqtech.de/" target="_blank">http://www.hqtech.de/
                    </a>
                </p>

                <h3>IT Support Specialist <span>01.2018 – 01.2019</span></h3>
                <ul>
                    <li>Technischer Support für Kassensysteme (POS-Systeme).</li>
                    <li>Installation und Konfiguration von Netzwerkverbindungen für den Betrieb der Kassensysteme.</li>
                    <li>Unterstützung bei der Einrichtung und Inbetriebnahme der angeschlossenen Systeme.</li>
                    <li>Unterstützung bei technischen Störungen im Rahmen des eigenen Aufgabenbereichs.</li>
                </ul>
    </div>

    <!-- </section> -->

    <!-- <secton class="section tab-content" id="cv" style="display: none;"> -->
    <h2>Ausbildung</h2>

    <div class="edu">
        <h3>Universität Potsdam <span>10.2020 - 03.2021</span> </h3>
        <p>Studium im Bereich Informatik / Computational Science (ohne Abschluss).</p>
    </div>

    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>08.2015 - 08.2020</span></h3>
                <p>Berufsabschluss als Technische Assistenten mit Fachhochschulreife
                    <br>Fachrichtung Elektronik und Datentechnik
                </p>
    </div>
    <!-- </section> -->

    <!-- <section class="section tab-content" id="cv"  style="display: none;"> -->
    <h2>Kenntnisse</h2>
                <h4>Sprachkenntnisse</h4>
            <ul>
                <li>Deutsch (gute Kenntnisse)</li>
                <li>Englisch (Grundkenntnisse)</li>
                <li>Vietnamesisch (gute Kenntnisse)</li>
            </ul>

            <h4>IT-Kenntnisse</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>IT Service Management</h3>
                    <ul>
                        <li>CA Service Desk</li>
                        <li>Jira Service Desk</li>
                        <li>USU Service Management</li>
                        <li>Ticketbearbeitung</li>
                    </ul>

                    <h3>Benutzer- und Berechtigungsverwaltung</h3>
                    <ul>
                        <li>Benutzerkonten</li>
                        <li>Benutzergruppen</li>
                        <li>Zugriffsberechtigungen</li>

                    </ul>

                    <h3>Monitoring</h3>
                    <ul>
                        <li>Zabbix</li>
                        <li>Alarmüberwachung</li>
                        <li>Ticketerfassung</li>

                    </ul>

                    <h3>Programmiersprachen</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Angular (Grundkenntnisse)</li>
                    </ul>
                </div>
                <div class="skills-col">
                    <h3>Datenbanken</h3>
                    <ul>
                        <li>Microsoft SQL Server</li>
                        <li>SQL-Views</li>
                        <li>SQL Server Management Studio</li>

                    </ul>
                    <h3>Weitere Tools</h3>
                    <ul>
                        <li>VS Code</li>
                        <li>Android Studio</li>
                    </ul>
                </div>
    </div>

    <h2>Zertifikate</h2>

    <div class="cert">
        <h3>
                    <a href="https://www.linkedin.com/learning/certificates/52fdd3a8e70f188abc63803acb325a633b948cb998d791c5a7ec4b95e0b8bef2?contentTrackingId=LBHoxyPuT5qEGp2UZzWHkg%3D%3D&viewName=premium-nav-upsell-text&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_text%3ANav%3AIn-Product"
                        target="_blank" rel="noopener noreferrer">
                        Grundwissen Softwareentwicklung,bereitgestellt von Microsoft und LinkedIn bei LinkedIn
                    </a>
                    <span>März 2025</span>
                </h3>
                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/b731e7da1299ba6e49979199095067c5c7e96a60143b0ceb029668126218df37?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        Jira Service Desk/Management Grundkurs bei LinkedIn
                    </a>
                    <span>März 2025</span>
                </h3>

                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/673f844f6174be71e2bdbadc208b5510eb55ad9c06e096f8b4dc7bdbb4b9115e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        SQL lernen bei LinkedIn
                    </a>
                    <span>Nov. 2024</span>
                </h3>

                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/85da0b47300453e5cfece379a07e03627fd8c4c30b9bd06179c278d23eb35230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        Grundlagen der Programmierung:Datenbanken bei LinkedIn
                    </a>
                    <span>Aug 2024</span>
                </h3>

                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/2025849230e066601bee127b5eab24c6f6cb7f836e2c7ab947765ef962689378?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        Grundlagen der Programmierung:Basiswissen bei LinkedIn
                    </a>
                    <span>Juni 2024</span>
                </h3>

                <h3>

                    ECDL (Europäischer Computerführerschein) / MS Office, Windows 7, Outlook 2013 bei Campus
                    Berufsausbildung e.V. Berlin

                    <span>Apr 2017</span>
                </h3>
    </div>
        `
    },
    en: {
        about_title: 'About me',
        about_tagline: 'IT Operations | IT Service Management | Monitoring',
        about_description: `IT professional with experience in IT service management, user and access management,
            and IT monitoring. Practical knowledge of Microsoft SQL Server, creating and adapting SQL views, and
            working with CA Service Desk and USU Service Management. Experienced in NOC monitoring with Zabbix and
            systematic ticket logging. Seeking to further develop professionally in IT support, IT operations, and
            junior systems administration.`,
        info_section: `
            <h2>Contact Information</h2>
            <ul>
                <li><strong>Email:</strong> vuongcuong144@gmail.com</li>
                <li><strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/vuong-cuong-dam-477a891b9" target="_blank">
                        linkedin.com/in/dam-vuong-cuong-8b0b4a1b6/
                    </a>
                </li>
                <li><strong>Xing:</strong>
                    <a href="https://www.xing.com/profile/VuongCuong_Dam3/web_profiles" target="_blank">
                        https://www.xing.com/profile/VuongCuong_Dam3/web_profiles
                    </a>
                </li>
            </ul>
        `,
        cv_section: `
            <h2>Work Experience</h2>
    <div class="job">
        <p><strong>GISA GmbH</strong> (Hanoi, Vietnam)
            <br> <a href="https://www.gisa.de/" target="_blank">https://www.gisa.de/</a>
        </p>
        <h3>Security and Network Operation Center (SOC & NOC)<span>since 01.2025</span></h3>
        <h5>Security Operation Center (SOC)</h5>
        <ul>
            <li>Real-time monitoring of security events and incidents.</li>
            <li>Collaboration with the German NOC team to resolve security vulnerabilities.</li>
        </ul>
        <h5>Network Operation Center (NOC)</h5>
        <ul>
            <li>Monitoring of network and server infrastructure.</li>
            <li>Using tools such as Zabbix.</li>
            <li>Quick identification and resolution of network or system failures.</li>
            <li>Escalation in case of serious problems.</li>
            <li>Logging of incidents and actions taken.</li>
            <li>Creating network documentation and status reports.</li>
        </ul>
        <h3>IT Service Management (ITSM) <span>since 04.2022</span></h3>
        <ul>
            <li>Quickly resolving incidents and restoring normal operations.</li>
            <li>Monitoring and managing IT service requests via the ticket system.</li>
            <li>Collaborating with global IT support teams to ensure service quality.</li>
            <li>Implementing, managing, and maintaining ITSM tools.</li>
            <li>Managing IT assets and configuration management.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>EXELLIENT GmbH</strong> (Darmstadt, Germany)
            <br> <a href="https://www.exellient.de/" target="_blank">https://www.exellient.de/</a>
        </p>
        <h3>Junior Developer Support <span>08.2021 – 02.2022</span></h3>
        <p>
            Supported the developer team in building web applications.
            Worked with frontend technologies (HTML, CSS) and learned Angular frameworks.
            Configured and deployed Microsoft SQL databases.
        </p>
        <ul>
            <li>Assisted with frontend components using HTML and CSS.</li>
            <li>Gained initial experience with Angular frameworks.</li>
            <li>Set up and configured Microsoft SQL databases.</li>
            <li>Provided technical support for the development team.</li>
        </ul>
    </div>

    </div>

    <div class="job">
        <p><strong>HQ TECH GmbH</strong> (Berlin, DE)
            <br> <a href="http://www.hqtech.de/" target="_blank">http://www.hqtech.de/</a>
        </p>
        <h3>IT Support Specialist <span>01.2018 – 01.2019</span></h3>
        <ul>
            <li>Monitoring and maintenance of IT systems.</li>
            <li>Troubleshooting and system problem solving.</li>
            <li>Developing and implementing optimal solutions.</li>
        </ul>
    </div>

    <h2>Education</h2>
    <div class="edu">
        <h3>University of Potsdam <span>10.2020 - 03.2021</span></h3>
        <p>Bachelor of Science - BS, Computer Science/Computational Science</p>
    </div>
    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>08.2015 - 08.2020</span></h3>
        <p>Vocational qualification as Technical Assistant with university entrance qualification<br>
            Specialization in Electronics and Data Technology</p>
    </div>

    <h2>Skills</h2>
                <h4>Languageskill</h4>
            <ul>
                German (Good knowledge), Englisch (Basic knowledge), Vietnamese (Good knowledge)
            </ul>

            <h4>IT-skill</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>IT Support</h3>
            <ul>
                <li>ITSM</li>
                <li>Jira Service Desk</li>
            </ul>
            <h3>Programming Languages</h3>
            <ul>
                <li>Java</li>
                <li>HTML/CSS/JavaScript</li>
            </ul>
        </div>
        <div class="skills-col">
            <h3>Databases</h3>
            <ul>
                <li>SQL Server</li>
                <li>SQLite</li>
            </ul>
            <h3>Tools</h3>
            <ul>
                <li>VS Code</li>
                <li>Android Studio</li>
                <li>Microsoft SQL Server Management Studio</li>
            </ul>
        </div>
    </div>

    <h2>Certificates</h2>
    <div class="cert">
        <h3>Basic Knowledge of Software Development, provided by Microsoft and LinkedIn at LinkedIn <span>March
                2025</span></h3>
        <h3>Jira Service Desk/Management Basic Course at LinkedIn <span>March 2025</span></h3>
        <h3>Learning SQL at LinkedIn <span>Nov. 2024</span></h3>
        <h3>Programming Basics: Databases at LinkedIn <span>Aug 2024</span></h3>
        <h3>Programming Basics: Fundamentals at LinkedIn <span>June 2024</span></h3>
        <h3>ECDL (European Computer Driving Licence) / MS Office, Windows 7, Outlook 2013 at Campus Berufsausbildung
            e.V. Berlin <span>Apr 2017</span></h3>
    </div>
        `
    },
    vi: {
        about_title: 'Giới thiệu',
        about_tagline: 'Vận hành CNTT | Quản lý dịch vụ CNTT | Giám sát hệ thống',
        about_description: `Nhân viên CNTT có kinh nghiệm trong quản lý dịch vụ CNTT, quản lý người dùng và quyền
            truy cập, cũng như giám sát CNTT. Có kiến thức thực tế về Microsoft SQL Server, tạo và chỉnh sửa SQL
            View, cùng với CA Service Desk và USU Service Management. Có kinh nghiệm giám sát NOC bằng Zabbix và ghi
            nhận yêu cầu qua hệ thống ticket một cách có hệ thống. Mong muốn tiếp tục phát triển chuyên môn trong
            lĩnh vực hỗ trợ CNTT, vận hành CNTT và quản trị hệ thống cấp độ junior.`,
        info_section: `
        <h2>Thông tin liên hệ</h2>
        <ul>
        <li><strong>Email:</strong> vuongcuong144@gmail.com</li>
        <li><strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/vuong-cuong-dam-477a891b9" target="_blank">
                linkedin.com/in/dam-vuong-cuong-8b0b4a1b6/
            </a>
        </li>
        <li><strong>Xing:</strong>
            <a href="https://www.xing.com/profile/VuongCuong_Dam3/web_profiles" target="_blank">
                https://www.xing.com/profile/VuongCuong_Dam3/web_profiles
            </a>
        </li>
    </ul>
    `,
        cv_section: `
    <h2>Kinh nghiệm làm việc</h2>
    <div class="job">
        <p><strong>GISA GmbH</strong> (Hà Nội, Việt Nam)
            <br> <a href="https://www.gisa.de/" target="_blank">https://www.gisa.de/</a>
        </p>
        <h3>Trung tâm vận hành an ninh & mạng (SOC & NOC)<span>Từ 01.2025</span></h3>
        <h5>Trung tâm vận hành an ninh (SOC)</h5>
        <ul>
            <li>Giám sát sự kiện và sự cố an ninh theo thời gian thực.</li>
            <li>Phối hợp với đội NOC Đức để xử lý các lỗ hổng bảo mật.</li>
        </ul>
        <h5>Trung tâm vận hành mạng (NOC)</h5>
        <ul>
            <li>Giám sát hạ tầng mạng và máy chủ.</li>
            <li>Sử dụng các công cụ như Zabbix.</li>
            <li>Phát hiện và xử lý nhanh các sự cố mạng hoặc hệ thống.</li>
            <li>Chuyển cấp khi có sự cố nghiêm trọng.</li>
            <li>Ghi nhận sự cố và các biện pháp đã thực hiện.</li>
            <li>Lập tài liệu mạng và báo cáo trạng thái.</li>
        </ul>
        <h3>Quản lý dịch vụ CNTT (ITSM) <span>Từ 04.2022</span></h3>
        <ul>
            <li>Xử lý nhanh sự cố để khôi phục hoạt động bình thường.</li>
            <li>Giám sát và quản lý yêu cầu dịch vụ CNTT qua hệ thống ticket.</li>
            <li>Phối hợp với các nhóm hỗ trợ toàn cầu để đảm bảo chất lượng dịch vụ.</li>
            <li>Triển khai, quản lý và bảo trì các công cụ ITSM.</li>
            <li>Quản lý tài sản CNTT và cấu hình hệ thống.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>EXELLIENT GmbH</strong> (Darmstadt, Đức)
            <br> <a href="https://www.exellient.de/" target="_blank">https://www.exellient.de/</a>
        </p>
        <h3>Hỗ trợ phát triển phần mềm (Junior Developer Support) <span>08.2021 – 02.2022</span></h3>
        <p>
            Hỗ trợ nhóm phát triển trong việc xây dựng các ứng dụng web.
            Làm việc với HTML, CSS và tìm hiểu thêm về Angular.
            Tham gia cài đặt và triển khai cơ sở dữ liệu Microsoft SQL.
        </p>
        <ul>
            <li>Hỗ trợ phát triển giao diện bằng HTML và CSS.</li>
            <li>Học hỏi và thực hành cơ bản với Angular.</li>
            <li>Cấu hình và triển khai Microsoft SQL Database.</li>
            <li>Hỗ trợ kỹ thuật cho nhóm phát triển.</li>
        </ul>
    </div>

    </div>

    <div class="job">
        <p><strong>HQ TECH GmbH</strong> (Berlin, Đức)
            <br> <a href="http://www.hqtech.de/" target="_blank">http://www.hqtech.de/</a>
        </p>
        <h3>Chuyên viên hỗ trợ CNTT <span>01.2018 – 01.2019</span></h3>
        <ul>
            <li>Giám sát và bảo trì hệ thống CNTT.</li>
            <li>Khắc phục sự cố và giải quyết vấn đề hệ thống.</li>
            <li>Phát triển và triển khai các giải pháp tối ưu.</li>
        </ul>
    </div>

    <h2>Học vấn</h2>
    <div class="edu">
        <h3>Đại học Potsdam <span>10.2020 - 03.2021</span></h3>
        <p>Cử nhân Khoa học - Tin học/Khoa học tính toán</p>
    </div>
    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>08.2015 - 08.2020</span></h3>
        <p>Tốt nghiệp nghề Trợ lý kỹ thuật với bằng dự bị đại học<br>
            Chuyên ngành Điện tử và Công nghệ dữ liệu</p>
    </div>

    <h2>Kỹ năng</h2>
                <h4>Ngôn ngữngữ</h4>
            <ul>
                Tiếng Đức (Tốt), Tiếng Anh (Cơ bản), Tiếng Việt (Tốt)
            </ul>

            <h4>Ký năng ITIT</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>Hỗ trợ CNTT</h3>
            <ul>
                <li>ITSM</li>
                <li>Jira Service Desk</li>
            </ul>
            <h3>Ngôn ngữ lập trình</h3>
            <ul>
                <li>Java</li>
                <li>HTML/CSS/JavaScript</li>
            </ul>
        </div>
        <div class="skills-col">
            <h3>Cơ sở dữ liệu</h3>
            <ul>
                <li>SQL Server</li>
                <li>SQLite</li>
            </ul>
            <h3>Công cụ</h3>
            <ul>
                <li>VS Code</li>
                <li>Android Studio</li>
                <li>Microsoft SQL Server Management Studio</li>
            </ul>
        </div>
    </div>

    <h2>Chứng chỉ</h2>
    <div class="cert">
        <h3>Kiến thức cơ bản về phát triển phần mềm, do Microsoft và LinkedIn cung cấp tại LinkedIn <span>Tháng
                3/2025</span></h3>
        <h3>Khóa học cơ bản Jira Service Desk/Management tại LinkedIn <span>Tháng 3/2025</span></h3>
        <h3>Học SQL tại LinkedIn <span>Tháng 11/2024</span></h3>
        <h3>Cơ sở lập trình: Cơ sở dữ liệu tại LinkedIn <span>Tháng 8/2024</span></h3>
        <h3>Cơ sở lập trình: Kiến thức cơ bản tại LinkedIn <span>Tháng 6/2024</span></h3>
        <h3>ECDL (Chứng chỉ tin học Châu Âu) / MS Office, Windows 7, Outlook 2013 tại Campus Berufsausbildung e.V.
            Berlin <span>Tháng 4/2017</span></h3>
    </div>
        `
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// when the document is loaded, set the language to 'en' by default
// document.addEventListener('DOMContentLoaded', function() {
//     setLanguage('de'); // hoặc 'en' hoặc 'vi'
// });