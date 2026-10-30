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
        about_description: `IT-Operations-Spezialist mit über 4 Jahren Erfahrung in 24/7-Monitoring, IT Service
            Management und Incident-Handling bei einem deutschen IT-Dienstleister. Erfahrung in der Überwachung von
            IT-Systemen mit Zabbix, der Ticketbearbeitung in CA Service Desk und USU, der SQL-Server-Administration
            sowie der Teilnahme an der Rufbereitschaft. Sicher im Umgang mit Eskalationsprozessen und in der
            Kundenkommunikation bei Systemausfällen.`,
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

                <h3>GISA Solutions Vietnam - NOC Monitoring <span>seit 01.2025</span></h3>
                <ul>
                    <li>Rund-um-die-Uhr-Überwachung der Kundeninfrastruktur mit Zabbix; Bewertung von Alarmen und
                        Erstellung von Tickets in CA Service Desk / USU (durchschnittlich 1 Ticket alle 30–40 Minuten
                        im Betrieb).</li>
                    <li>Eskalation von Störungen an die zuständigen Teams gemäß SLA sowie telefonische und
                        schriftliche Kundeninformation bei Systemausfällen.</li>
                    <li>Teilnahme an der Rufbereitschaft zur Sicherstellung der Verfügbarkeit.</li>
                    <li>Erstellung von Netzwerk-Dokumentationen und Statusberichten.</li>
                </ul>

                <!-- <br> https://gisasolutions.vn/ -->

                <h3>GISA Solutions Vietnam - SOC Monitoring
                    <span>01.2025 – 03.2026</span>
                </h3>
                <ul>
                    <li>Überwachung sicherheitsrelevanter Dashboards (VPN, Firewall, Citrix, Clients,
                        Domain Controller) für 5 Kunden mit jeweils ca. 10 Dashboards.</li>
                    <li>Erkennung von Auffälligkeiten, z. B. Brute-Force-Versuchen, und Weitergabe an Kollegen bzw.
                        Information der Kunden.</li>
                </ul>

                <h3>GISA Solutions Vietnam - IT Service Management (ITSM) <span>04.2022 – 01.2025</span></h3>
                <ul>
                    <li>Bearbeitung von Berechtigungs- und Benutzeranfragen sowie Anlage, Änderung und Löschung von
                        Benutzern und Gruppen in CA Service Desk.</li>
                    <li>Erstellung und Anpassung von SQL-Views in MS SQL Server sowie Reporting für Fachbereiche.</li>
                    <li>Umsetzung von Aufträgen wie Service-Pflege, Erweiterung von Serverfunktionen und
                        Massenimporten.</li>
                    <li>Sicherstellung der Verfügbarkeit (Tomcat-Neustarts, Scoreboard) im Rahmen der Bereitschaft.</li>
                    <li>Seit 01.2025 weiterhin Mitglied der ITSM-Gruppe und mit administrativen Berechtigungen;
                        operative ITSM-Aufgaben nur noch bei Bedarf.</li>
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
        <h3>Universität Potsdam <span>10.2020 – 03.2021</span></h3>
        <p>Studium im Bereich Informatik / Computational Science (ohne Abschluss).</p>
    </div>

    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>08.2015 – 08.2020</span></h3>
                <p>Berufsabschluss als Technischer Assistent mit Fachhochschulreife
                    <br>Fachrichtung Elektronik und Datentechnik
                </p>
    </div>
    <!-- </section> -->

    <!-- <section class="section tab-content" id="cv"  style="display: none;"> -->
    <h2>Kenntnisse</h2>
                <h4>Sprachkenntnisse</h4>
            <ul>
                <li>Deutsch (B2+)</li>
                <li>Englisch (A2)</li>
                <li>Vietnamesisch (Muttersprache)</li>
            </ul>

            <h4>IT-Kenntnisse</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>IT Service Management</h3>
                    <ul>
                        <li>CA Service Desk, USU (gut)</li>
                    </ul>

                    <h3>Monitoring</h3>
                    <ul>
                        <li>Zabbix (gut)</li>
                    </ul>

                    <h3>Web</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript, Node.js, React (Grundlagen)</li>
                    </ul>
                </div>
                <div class="skills-col">
                    <h3>Datenbanken</h3>
                    <ul>
                        <li>MS SQL Server, T-SQL, Views (gut)</li>
                    </ul>
                </div>
    </div>

    <h2>Zertifikate</h2>

    <div class="cert">
        <h3>
                    <a href="https://www.linkedin.com/learning/certificates/52fdd3a8e70f188abc63803acb325a633b948cb998d791c5a7ec4b95e0b8bef2?contentTrackingId=LBHoxyPuT5qEGp2UZzWHkg%3D%3D&viewName=premium-nav-upsell-text&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_text%3ANav%3AIn-Product"
                        target="_blank" rel="noopener noreferrer">
                        Grundwissen Softwareentwicklung – bereitgestellt von Microsoft und LinkedIn
                    </a>
                    <span>März 2025</span>
                </h3>
                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/b731e7da1299ba6e49979199095067c5c7e96a60143b0ceb029668126218df37?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        Jira Service Desk/Management-Grundkurs bei LinkedIn
                    </a>
                    <span>März 2025</span>
                </h3>

                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/673f844f6174be71e2bdbadc208b5510eb55ad9c06e096f8b4dc7bdbb4b9115e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        SQL lernen bei LinkedIn
                    </a>
                    <span>November 2024</span>
                </h3>

                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/85da0b47300453e5cfece379a07e03627fd8c4c30b9bd06179c278d23eb35230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        Grundlagen der Programmierung: Datenbanken bei LinkedIn
                    </a>
                    <span>August 2024</span>
                </h3>

                <h3>
                    <a href="https://www.linkedin.com/learning/certificates/2025849230e066601bee127b5eab24c6f6cb7f836e2c7ab947765ef962689378?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAEiON694TNWDjUAE9pRD9Q%3D%3D"
                        target="_blank" rel="noopener noreferrer">
                        Grundlagen der Programmierung: Basiswissen bei LinkedIn
                    </a>
                    <span>Juni 2024</span>
                </h3>

                <h3>

                    ECDL (Europäischer Computerführerschein) / MS Office, Windows 7, Outlook 2013 bei Campus
                    Berufsausbildung e.V. Berlin

                    <span>April 2017</span>
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
        about_description: `IT Operations Specialist with over 4 years of experience in 24/7 monitoring, IT service
            management, and incident handling at a German IT service provider. Experienced in monitoring IT systems
            with Zabbix, handling tickets in CA Service Desk and USU, administering SQL Server, and participating
            in on-call duty. Confident in following escalation processes and communicating with customers during
            system outages.`,
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
        <h3>GISA Solutions Vietnam - NOC Monitoring <span>Jan 2025 – Present</span></h3>
        <ul>
            <li>Monitoring customer infrastructure around the clock with Zabbix; assessing alerts and creating
                tickets in CA Service Desk / USU (averaging one ticket every 30–40 minutes during operations).</li>
            <li>Escalating incidents to the responsible teams in accordance with SLAs and informing customers by
                phone and in writing during system outages.</li>
            <li>Participating in on-call duty to ensure service availability.</li>
            <li>Preparing network documentation and status reports.</li>
        </ul>
        <h3>GISA Solutions Vietnam - SOC Monitoring
            <span>Jan 2025 – Mar 2026</span></h3>
        <ul>
            <li>Monitoring security-related dashboards (VPN, firewall, Citrix, clients, domain controllers) for
                5 customers, with approximately 10 dashboards each.</li>
            <li>Identifying unusual activity, such as brute-force attempts, and escalating it to colleagues or
                informing customers.</li>
        </ul>
        <h3>GISA Solutions Vietnam - IT Service Management (ITSM)
            <span>Apr 2022 – Jan 2025</span></h3>
        <ul>
            <li>Handling access and user requests, including creating, changing, and deleting users and groups in
                CA Service Desk.</li>
            <li>Creating and modifying SQL views in MS SQL Server and preparing reports for business departments.</li>
            <li>Completing service maintenance, server-function enhancements, and bulk imports.</li>
            <li>Ensuring availability through Tomcat restarts and Scoreboard monitoring while on call.</li>
            <li>Since Jan 2025, continued membership in the ITSM group and retention of assigned administrative
                permissions; operational ITSM tasks performed only as needed.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>EXELLIENT GmbH</strong> (Darmstadt, Germany)
            <br> <a href="https://www.exellient.de/" target="_blank">https://www.exellient.de/</a>
        </p>
        <h3>Junior Developer Support <span>Aug 2021 – Feb 2022</span></h3>
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
        <h3>IT Support Specialist <span>Jan 2018 – Jan 2019</span></h3>
        <ul>
            <li>Providing technical support for point-of-sale (POS) systems.</li>
            <li>Installing and configuring network connections for POS system operations.</li>
            <li>Assisting with the setup and commissioning of connected systems.</li>
            <li>Supporting users with technical incidents within the scope of assigned responsibilities.</li>
        </ul>
    </div>

    <h2>Education</h2>
    <div class="edu">
        <h3>University of Potsdam <span>Oct 2020 – Mar 2021</span></h3>
        <p>Studies in Computer Science / Computational Science (no degree completed).</p>
    </div>
    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>Aug 2015 – Aug 2020</span></h3>
        <p>Vocational qualification as a Technical Assistant with a university of applied sciences entrance
            qualification<br>
            Specialization in Electronics and Data Technology</p>
    </div>

    <h2>Skills</h2>
    <h4>Languages</h4>
    <ul>
        <li>German (B2+)</li>
        <li>English (A2)</li>
        <li>Vietnamese (native)</li>
    </ul>
    <h4>IT Skills</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>IT Service Management</h3>
            <ul>
                <li>CA Service Desk, USU (good proficiency)</li>
            </ul>
            <h3>Monitoring</h3>
            <ul>
                <li>Zabbix (good proficiency)</li>
            </ul>
            <h3>Web</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript, Node.js, React (basics)</li>
            </ul>
        </div>
        <div class="skills-col">
            <h3>Databases</h3>
            <ul>
                <li>MS SQL Server, T-SQL, views (good proficiency)</li>
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
        about_description: `Chuyên viên vận hành CNTT với hơn 4 năm kinh nghiệm giám sát 24/7, quản lý dịch vụ CNTT
            và xử lý sự cố tại một công ty dịch vụ CNTT của Đức. Có kinh nghiệm giám sát hệ thống bằng Zabbix,
            xử lý ticket trên CA Service Desk và USU, quản trị SQL Server và tham gia trực hỗ trợ. Thành thạo quy
            trình chuyển cấp sự cố và giao tiếp với khách hàng khi hệ thống gặp sự cố.`,
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
        <h3>GISA Solutions Vietnam - Giám sát NOC <span>Từ 01/2025 – hiện nay</span></h3>
        <ul>
            <li>Giám sát hạ tầng khách hàng 24/7 bằng Zabbix; đánh giá cảnh báo và tạo ticket trên CA Service Desk /
                USU (trung bình 1 ticket mỗi 30–40 phút trong ca vận hành).</li>
            <li>Chuyển cấp sự cố đến các nhóm phụ trách theo SLA; thông báo cho khách hàng qua điện thoại và văn bản
                khi hệ thống gặp sự cố.</li>
            <li>Tham gia trực hỗ trợ để đảm bảo tính sẵn sàng của dịch vụ.</li>
            <li>Lập tài liệu mạng và báo cáo trạng thái.</li>
        </ul>
        <h3>GISA Solutions Vietnam - Giám sát SOC
            <span>01/2025 – 03/2026</span></h3>
        <ul>
            <li>Giám sát các dashboard an ninh (VPN, firewall, Citrix, máy trạm, domain controller) cho 5 khách hàng,
                mỗi khách hàng có khoảng 10 dashboard.</li>
            <li>Phát hiện dấu hiệu bất thường, ví dụ các cuộc tấn công brute-force, và chuyển thông tin cho đồng
                nghiệp hoặc thông báo cho khách hàng.</li>
        </ul>
        <h3>GISA Solutions Vietnam - Quản lý dịch vụ CNTT (ITSM)
            <span>04/2022 – 01/2025</span></h3>
        <ul>
            <li>Xử lý yêu cầu về quyền và tài khoản; tạo, chỉnh sửa, xóa người dùng và nhóm trong CA Service Desk.</li>
            <li>Tạo và điều chỉnh SQL view trên MS SQL Server; lập báo cáo cho các bộ phận chuyên môn.</li>
            <li>Thực hiện các yêu cầu như bảo trì dịch vụ, mở rộng chức năng máy chủ và nhập dữ liệu hàng loạt.</li>
            <li>Đảm bảo tính sẵn sàng của dịch vụ (khởi động lại Tomcat, theo dõi Scoreboard) trong ca trực.</li>
            <li>Từ 01/2025, tiếp tục là thành viên nhóm ITSM và giữ các quyền quản trị được giao; chỉ thực hiện
                các nhiệm vụ ITSM khi cần.</li>
        </ul>
    </div>

    <div class="job">
        <p><strong>EXELLIENT GmbH</strong> (Darmstadt, Đức)
            <br> <a href="https://www.exellient.de/" target="_blank">https://www.exellient.de/</a>
        </p>
        <h3>Hỗ trợ phát triển phần mềm (Junior Developer Support) <span>08/2021 – 02/2022</span></h3>
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
        <h3>Chuyên viên hỗ trợ CNTT <span>01/2018 – 01/2019</span></h3>
        <ul>
            <li>Hỗ trợ kỹ thuật cho hệ thống thanh toán tại quầy (POS).</li>
            <li>Cài đặt và cấu hình kết nối mạng phục vụ hoạt động của hệ thống POS.</li>
            <li>Hỗ trợ thiết lập và đưa các hệ thống kết nối vào vận hành.</li>
            <li>Hỗ trợ xử lý sự cố kỹ thuật trong phạm vi trách nhiệm được giao.</li>
        </ul>
    </div>

    <h2>Học vấn</h2>
    <div class="edu">
        <h3>Đại học Potsdam <span>10/2020 – 03/2021</span></h3>
        <p>Theo học ngành Tin học / Khoa học tính toán (chưa tốt nghiệp).</p>
    </div>
    <div class="edu">
        <h3>Campus Berufsausbildung e.V. Berlin <span>08/2015 – 08/2020</span></h3>
        <p>Tốt nghiệp Trợ lý kỹ thuật, có bằng dự bị vào đại học khoa học ứng dụng<br>
            Chuyên ngành Điện tử và Công nghệ dữ liệu</p>
    </div>

    <h2>Kỹ năng</h2>
    <h4>Ngoại ngữ</h4>
    <ul>
        <li>Tiếng Đức (B2+)</li>
        <li>Tiếng Anh (A2)</li>
        <li>Tiếng Việt (bản ngữ)</li>
    </ul>
    <h4>Kỹ năng CNTT</h4>
    <div class="skills-row">
        <div class="skills-col">
            <h3>Quản lý dịch vụ CNTT</h3>
            <ul>
                <li>CA Service Desk, USU (khá)</li>
            </ul>
            <h3>Giám sát hệ thống</h3>
            <ul>
                <li>Zabbix (khá)</li>
            </ul>
            <h3>Web</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript, Node.js, React (cơ bản)</li>
            </ul>
        </div>
        <div class="skills-col">
            <h3>Cơ sở dữ liệu</h3>
            <ul>
                <li>MS SQL Server, T-SQL, View (khá)</li>
            </ul>
        </div>
    </div>

    <h2>Chứng chỉ</h2>
    <div class="cert">
        <h3>Kiến thức nền tảng về phát triển phần mềm, do Microsoft và LinkedIn cung cấp
            <span>03/2025</span></h3>
        <h3>Khóa học nền tảng Jira Service Desk/Management tại LinkedIn <span>03/2025</span></h3>
        <h3>Học SQL tại LinkedIn <span>11/2024</span></h3>
        <h3>Nền tảng lập trình: Cơ sở dữ liệu tại LinkedIn <span>08/2024</span></h3>
        <h3>Nền tảng lập trình: Kiến thức cơ bản tại LinkedIn <span>06/2024</span></h3>
        <h3>ECDL (Chứng chỉ tin học châu Âu) / MS Office, Windows 7, Outlook 2013 tại Campus Berufsausbildung e.V.
            Berlin <span>04/2017</span></h3>
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