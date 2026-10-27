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
        download_pdf: 'Portfolio als PDF herunterladen',
        tab_cv: 'Lebenslauf',
        tab_info: 'Kontaktinfo',
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
                <li><strong>E-Mail:</strong> vuongcuong144@gmail.com</li>
                <li><strong>Homepage:</strong>
                    <a href="https://vuongcuong1404.github.io/Portfolio/" target="_blank">
                        https://vuongcuong1404.github.io/Portfolio/
                    </a>
                </li>
                <li><strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/vuong-cuong-d-477a891b9/" target="_blank">
                        linkedin.com/in/vuong-cuong-d-477a891b9/
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
        download_pdf: 'Download portfolio as PDF',
        tab_cv: 'Resume',
        tab_info: 'Contact information',
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
                <li><strong>Homepage:</strong>
                    <a href="https://vuongcuong1404.github.io/Portfolio/" target="_blank">
                        https://vuongcuong1404.github.io/Portfolio/
                    </a>
                </li>
                <li><strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/vuong-cuong-d-477a891b9/" target="_blank">
                        linkedin.com/in/vuong-cuong-d-477a891b9/
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
        <h3>GISA Solutions Vietnam - NOC Monitoring <span>since 01.2025</span></h3>
        <ul>
            <li>Monitoring IT systems and alerts using Zabbix.</li>
            <li>Observing system notifications and unusual activity during operations.</li>
            <li>Quickly identifying and resolving network or system incidents.</li>
            <li>Forwarding or escalating relevant alerts to the responsible teams in accordance with established
                processes.</li>
            <li>Preparing network documentation and status reports.</li>
            <li>Participating in on-call duty in accordance with operational requirements.</li>
        </ul>
        <h3>GISA Solutions Vietnam - Security and Network Operation Center (SOC)
            <span>01.2025 - 03.2026</span></h3>
        <ul>
            <li>Monitoring security dashboards and displayed events.</li>
            <li>Observing unusual alerts as part of established monitoring processes.</li>
            <li>Documenting relevant events and supporting ticket handling within the scope of assigned
                responsibilities.</li>
        </ul>
        <h3>GISA Solutions Vietnam - IT Service Management (ITSM)
            <span>04.2022 - 12.2024</span></h3>
        <ul>
            <li>Creating and modifying views in Microsoft SQL Server.</li>
            <li>Managing user accounts and groups within assigned administrative permissions.</li>
            <li>Creating, modifying, and maintaining users and groups, and assigning access permissions.</li>
            <li>Handling IT service requests and supporting ticket processing within the scope of assigned
                responsibilities.</li>
            <li>Working with ITSM tools, particularly CA Service Desk and USU Service Management.</li>
            <li>Collaborating with global IT support teams to ensure service quality.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>EXELLIENT GmbH</strong> (Darmstadt, Germany)
            <br> <a href="https://www.exellient.de/" target="_blank">https://www.exellient.de/</a>
        </p>
        <h3>Junior Developer Support <span>08.2021 – 02.2022</span></h3>
        <ul>
            <li>Contributed to a developer team building a tool for managing hospital processes.</li>
            <li>Assisted with developing and adapting frontend components using HTML and CSS.</li>
            <li>Gained initial hands-on experience with the Angular framework.</li>
            <li>Assisted with building and setting up Microsoft SQL databases.</li>
            <li>Supported the development team with technical project tasks.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>HQ TECH GmbH</strong> (Berlin, DE)
            <br> <a href="http://www.hqtech.de/" target="_blank">http://www.hqtech.de/</a>
        </p>
        <h3>IT Support Specialist <span>01.2018 – 01.2019</span></h3>
        <ul>
            <li>Providing technical support for point-of-sale (POS) systems.</li>
            <li>Installing and configuring network connections for POS system operations.</li>
            <li>Assisting with the setup and commissioning of connected systems.</li>
            <li>Supporting users with technical incidents within the scope of assigned responsibilities.</li>
        </ul>
    </div>

    <h2>Education</h2>
    <div class="edu">
        <h3>University of Potsdam <span>10.2020 - 03.2021</span></h3>
        <p>Studies in Computer Science / Computational Science (no degree completed).</p>
    </div>
    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>08.2015 - 08.2020</span></h3>
        <p>Vocational qualification as a Technical Assistant with a university of applied sciences entrance
            qualification<br>
            Specialization in Electronics and Data Technology</p>
    </div>

    <h2>Skills</h2>
    <h4>Languages</h4>
    <ul>
        <li>German (good proficiency)</li>
        <li>English (basic proficiency)</li>
        <li>Vietnamese (good proficiency)</li>
    </ul>
    <h4>IT Skills</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>IT Service Management</h3>
            <ul>
                <li>CA Service Desk</li>
                <li>Jira Service Desk</li>
                <li>USU Service Management</li>
                <li>Ticket handling</li>
            </ul>
            <h3>User and Access Management</h3>
            <ul>
                <li>User accounts</li>
                <li>User groups</li>
                <li>Access permissions</li>
            </ul>
            <h3>Monitoring</h3>
            <ul>
                <li>Zabbix</li>
                <li>Alert monitoring</li>
                <li>Ticket logging</li>
            </ul>
            <h3>Programming Languages</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Angular (basic knowledge)</li>
            </ul>
        </div>
        <div class="skills-col">
            <h3>Databases</h3>
            <ul>
                <li>Microsoft SQL Server</li>
                <li>SQL views</li>
                <li>SQL Server Management Studio</li>
            </ul>
            <h3>Additional Tools</h3>
            <ul>
                <li>VS Code</li>
                <li>Android Studio</li>
            </ul>
        </div>
    </div>

    <h2>Certificates</h2>
    <div class="cert">
        <h3>Software Development Fundamentals, provided by Microsoft and LinkedIn <span>March 2025</span></h3>
        <h3>Jira Service Desk/Management Fundamentals, LinkedIn <span>March 2025</span></h3>
        <h3>Learning SQL, LinkedIn <span>November 2024</span></h3>
        <h3>Programming Foundations: Databases, LinkedIn <span>August 2024</span></h3>
        <h3>Programming Foundations: Fundamentals, LinkedIn <span>June 2024</span></h3>
        <h3>ECDL (European Computer Driving Licence) / MS Office, Windows 7, Outlook 2013, Campus
            Berufsausbildung e.V. Berlin <span>April 2017</span></h3>
    </div>
        `
    },
    vi: {
        download_pdf: 'Tải hồ sơ dưới dạng PDF',
        tab_cv: 'Sơ yếu lý lịch',
        tab_info: 'Thông tin liên hệ',
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
        <li><strong>Trang web:</strong>
            <a href="https://vuongcuong1404.github.io/Portfolio/" target="_blank">
                https://vuongcuong1404.github.io/Portfolio/
            </a>
        </li>
        <li><strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/vuong-cuong-d-477a891b9/" target="_blank">
                linkedin.com/in/vuong-cuong-d-477a891b9/
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
        <h3>GISA Solutions Vietnam - Giám sát NOC <span>Từ 01.2025</span></h3>
        <ul>
            <li>Giám sát hệ thống CNTT và cảnh báo bằng Zabbix.</li>
            <li>Theo dõi thông báo hệ thống và các dấu hiệu bất thường trong quá trình vận hành.</li>
            <li>Phát hiện và xử lý nhanh sự cố mạng hoặc hệ thống.</li>
            <li>Chuyển tiếp hoặc báo cáo sự cố liên quan đến các nhóm phụ trách theo đúng quy trình.</li>
            <li>Lập tài liệu mạng và báo cáo trạng thái.</li>
            <li>Tham gia trực theo yêu cầu vận hành.</li>
        </ul>
        <h3>GISA Solutions Vietnam - Trung tâm vận hành an ninh và mạng (SOC)
            <span>01.2025 - 03.2026</span></h3>
        <ul>
            <li>Giám sát bảng điều khiển an ninh và các sự kiện được hiển thị.</li>
            <li>Theo dõi các cảnh báo bất thường theo quy trình giám sát đã được quy định.</li>
            <li>Ghi nhận sự kiện liên quan và hỗ trợ xử lý ticket trong phạm vi trách nhiệm được giao.</li>
        </ul>
        <h3>GISA Solutions Vietnam - Quản lý dịch vụ CNTT (ITSM)
            <span>04.2022 - 12.2024</span></h3>
        <ul>
            <li>Tạo và điều chỉnh các view trong Microsoft SQL Server.</li>
            <li>Quản lý tài khoản và nhóm người dùng trong phạm vi quyền quản trị được giao.</li>
            <li>Tạo, chỉnh sửa và duy trì tài khoản, nhóm người dùng; phân quyền truy cập.</li>
            <li>Tiếp nhận yêu cầu dịch vụ CNTT và hỗ trợ xử lý ticket trong phạm vi trách nhiệm được giao.</li>
            <li>Sử dụng các công cụ ITSM, đặc biệt là CA Service Desk và USU Service Management.</li>
            <li>Phối hợp với các nhóm hỗ trợ CNTT toàn cầu để đảm bảo chất lượng dịch vụ.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>EXELLIENT GmbH</strong> (Darmstadt, Đức)
            <br> <a href="https://www.exellient.de/" target="_blank">https://www.exellient.de/</a>
        </p>
        <h3>Hỗ trợ phát triển phần mềm (Junior Developer Support) <span>08.2021 – 02.2022</span></h3>
        <ul>
            <li>Tham gia nhóm phát triển công cụ quản lý quy trình trong bệnh viện.</li>
            <li>Hỗ trợ phát triển và điều chỉnh các thành phần giao diện bằng HTML và CSS.</li>
            <li>Có kinh nghiệm thực tế ban đầu với framework Angular.</li>
            <li>Hỗ trợ xây dựng và thiết lập cơ sở dữ liệu Microsoft SQL.</li>
            <li>Hỗ trợ nhóm phát triển các công việc kỹ thuật trong dự án.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>HQ TECH GmbH</strong> (Berlin, Đức)
            <br> <a href="http://www.hqtech.de/" target="_blank">http://www.hqtech.de/</a>
        </p>
        <h3>Chuyên viên hỗ trợ CNTT <span>01.2018 – 01.2019</span></h3>
        <ul>
            <li>Hỗ trợ kỹ thuật cho hệ thống thanh toán tại quầy (POS).</li>
            <li>Cài đặt và cấu hình kết nối mạng phục vụ hoạt động của hệ thống POS.</li>
            <li>Hỗ trợ thiết lập và đưa các hệ thống kết nối vào vận hành.</li>
            <li>Hỗ trợ xử lý sự cố kỹ thuật trong phạm vi trách nhiệm được giao.</li>
        </ul>
    </div>

    <h2>Học vấn</h2>
    <div class="edu">
        <h3>Đại học Potsdam <span>10.2020 - 03.2021</span></h3>
        <p>Theo học ngành Tin học / Khoa học tính toán (chưa tốt nghiệp).</p>
    </div>
    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>08.2015 - 08.2020</span></h3>
        <p>Tốt nghiệp Trợ lý kỹ thuật, có bằng dự bị vào đại học khoa học ứng dụng<br>
            Chuyên ngành Điện tử và Công nghệ dữ liệu</p>
    </div>

    <h2>Kỹ năng</h2>
    <h4>Ngoại ngữ</h4>
    <ul>
        <li>Tiếng Đức (khá)</li>
        <li>Tiếng Anh (cơ bản)</li>
        <li>Tiếng Việt (khá)</li>
    </ul>
    <h4>Kỹ năng CNTT</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>Quản lý dịch vụ CNTT</h3>
            <ul>
                <li>CA Service Desk</li>
                <li>Jira Service Desk</li>
                <li>USU Service Management</li>
                <li>Xử lý ticket</li>
            </ul>
            <h3>Quản lý người dùng và quyền truy cập</h3>
            <ul>
                <li>Tài khoản người dùng</li>
                <li>Nhóm người dùng</li>
                <li>Quyền truy cập</li>
            </ul>
            <h3>Giám sát hệ thống</h3>
            <ul>
                <li>Zabbix</li>
                <li>Giám sát cảnh báo</li>
                <li>Ghi nhận ticket</li>
            </ul>
            <h3>Ngôn ngữ lập trình</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Angular (kiến thức cơ bản)</li>
            </ul>
        </div>
        <div class="skills-col">
            <h3>Cơ sở dữ liệu</h3>
            <ul>
                <li>Microsoft SQL Server</li>
                <li>SQL View</li>
                <li>SQL Server Management Studio</li>
            </ul>
            <h3>Công cụ khác</h3>
            <ul>
                <li>VS Code</li>
                <li>Android Studio</li>
            </ul>
        </div>
    </div>

    <h2>Chứng chỉ</h2>
    <div class="cert">
        <h3>Kiến thức nền tảng về phát triển phần mềm, do Microsoft và LinkedIn cung cấp
            <span>Tháng 3/2025</span></h3>
        <h3>Khóa học nền tảng Jira Service Desk/Management tại LinkedIn <span>Tháng 3/2025</span></h3>
        <h3>Học SQL tại LinkedIn <span>Tháng 11/2024</span></h3>
        <h3>Nền tảng lập trình: Cơ sở dữ liệu tại LinkedIn <span>Tháng 8/2024</span></h3>
        <h3>Nền tảng lập trình: Kiến thức cơ bản tại LinkedIn <span>Tháng 6/2024</span></h3>
        <h3>ECDL (Chứng chỉ tin học châu Âu) / MS Office, Windows 7, Outlook 2013 tại Campus Berufsausbildung e.V.
            Berlin <span>Tháng 4/2017</span></h3>
    </div>
        `
    }
};

function setLanguage(lang) {
    const language = translations[lang];
    if (!language) {
        throw new RangeError(`Unsupported language: ${lang}`);
    }

    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && language[key]) {
            el.innerHTML = language[key];
        }
    });
}

// when the document is loaded, set the language to 'en' by default
// document.addEventListener('DOMContentLoaded', function() {
//     setLanguage('de'); // hoặc 'en' hoặc 'vi'
// });