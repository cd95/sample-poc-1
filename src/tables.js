// Table registry. Add a table or column here and the meta endpoints pick it up
// automatically. Optional column.enum lists the allowed values of a column.
// Column types: string | integer | long | double | boolean | date | datetime

module.exports = {
  github: {
    description: 'GitHub repository records',
    columns: [
      { name: 'id', type: 'string', nullable: false },
      { name: 'name', type: 'string' },
      { name: 'owner', type: 'string', filterable: true, groupable: true },
      { name: 'language', type: 'string', filterable: true, groupable: true, enum: ['TypeScript', 'Java', 'Python', 'Go', 'HCL', 'JavaScript'] },
      { name: 'stars', type: 'integer' },
      { name: 'open_issues', type: 'integer' },
      { name: 'forks', type: 'integer' },
      { name: 'private', type: 'boolean', filterable: true },
      { name: 'created_at', type: 'date' },
    ],
    rows: [
      { id: 'r1', name: 'web-app', owner: 'acme', language: 'TypeScript', stars: 120, private: false, created_at: '2024-03-14', open_issues: 4, forks: 15 },
      { id: 'r2', name: 'infra', owner: 'acme', language: 'HCL', stars: 8, private: true, created_at: '2025-01-22', open_issues: 0, forks: 1 },
      { id: 'r3', name: 'data-pipeline', owner: 'acme', language: 'Python', stars: 54, private: false, created_at: '2025-07-09', open_issues: 11, forks: 6 },
    ],
  },

  okta: {
    description: 'Okta user records',
    columns: [
      { name: 'id', type: 'string', nullable: false },
      { name: 'status', type: 'string', filterable: true, groupable: true, enum: ['STAGED', 'PROVISIONED', 'ACTIVE', 'SUSPENDED', 'DEPROVISIONED'] },
      { name: 'login', type: 'string' },
      { name: 'first_name', type: 'string' },
      { name: 'last_name', type: 'string' },
      { name: 'last_login', type: 'datetime' },
      { name: 'department', type: 'string', filterable: true, groupable: true, enum: ['Engineering', 'Finance', 'Marketing', 'Sales', 'HR'] },
      { name: 'mfa_enrolled', type: 'boolean', filterable: true },
    ],
    rows: [
      { id: '00u1a', status: 'ACTIVE', login: 'alice@acme.example', first_name: 'Alice', last_name: 'Johnson', last_login: '2026-11-05T09:12:00Z', department: 'Engineering', mfa_enrolled: true },
      { id: '00u1b', status: 'ACTIVE', login: 'bob@acme.example', first_name: 'Bob', last_name: 'Smith', last_login: '2026-11-08T17:40:00Z', department: 'Finance', mfa_enrolled: true },
      { id: '00u1c', status: 'SUSPENDED', login: 'carol@acme.example', first_name: 'Carol', last_name: 'Lee', last_login: null, department: 'Engineering', mfa_enrolled: false },
    ],
  },

  qualys: {
    description: 'Qualys vulnerability detection records',
    columns: [
      { name: 'id', type: 'string', nullable: false },
      { name: 'hostname', type: 'string' },
      { name: 'ip_address', type: 'string' },
      { name: 'os', type: 'string', filterable: true, groupable: true, enum: ['Windows Server 2019', 'Ubuntu 22.04', 'RHEL 9', 'macOS 14'] },
      { name: 'qid', type: 'integer' },
      { name: 'title', type: 'string' },
      { name: 'severity', type: 'integer', filterable: true, groupable: true },
      { name: 'status', type: 'string', filterable: true, groupable: true, enum: ['New', 'Active', 'Fixed', 'Re-Opened'] },
      { name: 'cvss_score', type: 'double' },
      { name: 'first_found', type: 'datetime' },
      { name: 'last_scanned', type: 'datetime' },
    ],
    rows: [
      { id: 'q-1001', hostname: 'web-1', ip_address: '10.0.1.15', os: 'Ubuntu 22.04', qid: 38170, title: 'OpenSSL Outdated Version Detected', severity: 4, status: 'Active', cvss_score: 7.5, first_found: '2026-10-02T04:10:00Z', last_scanned: '2026-11-09T04:12:00Z' },
      { id: 'q-1002', hostname: 'db-1', ip_address: '10.0.2.20', os: 'RHEL 9', qid: 91720, title: 'Kernel Privilege Escalation Vulnerability', severity: 5, status: 'New', cvss_score: 8.8, first_found: '2026-11-08T04:15:00Z', last_scanned: '2026-11-09T04:20:00Z' },
      { id: 'q-1003', hostname: 'win-app-1', ip_address: '10.0.3.31', os: 'Windows Server 2019', qid: 91800, title: 'Windows SMB Remote Code Execution', severity: 5, status: 'Fixed', cvss_score: 9.8, first_found: '2026-08-14T05:00:00Z', last_scanned: '2026-11-09T05:05:00Z' },
    ],
  },

  aws: {
    description: 'AWS EC2 instance records',
    columns: [
      { name: 'id', type: 'string', nullable: false },
      { name: 'name', type: 'string' },
      { name: 'instance_type', type: 'string', filterable: true, groupable: true, enum: ['t3.small', 't3.medium', 'm5.large', 'c5.xlarge'] },
      { name: 'state', type: 'string', filterable: true, groupable: true, enum: ['pending', 'running', 'stopping', 'stopped', 'terminated'] },
      { name: 'region', type: 'string', filterable: true, groupable: true, enum: ['us-east-1', 'us-west-2', 'eu-west-1'] },
      { name: 'vcpus', type: 'integer' },
      { name: 'cost_per_hour', type: 'double' },
      { name: 'launched_at', type: 'datetime' },
    ],
    rows: [
      { id: 'i-0a1', name: 'web-1', instance_type: 't3.medium', state: 'running', region: 'us-east-1', vcpus: 2, cost_per_hour: 0.0416, launched_at: '2026-09-01T08:00:00Z' },
      { id: 'i-0b2', name: 'batch-1', instance_type: 'm5.large', state: 'stopped', region: 'eu-west-1', vcpus: 2, cost_per_hour: 0.096, launched_at: '2026-06-18T12:30:00Z' },
      { id: 'i-0c3', name: 'api-1', instance_type: 'c5.xlarge', state: 'running', region: 'us-west-2', vcpus: 4, cost_per_hour: 0.17, launched_at: '2026-10-27T21:15:00Z' },
    ],
  },
};
