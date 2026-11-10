// Table registry. Add a table or column here and the meta endpoints pick it up
// automatically. Column types: string | integer | long | double | boolean | date | datetime

module.exports = {
  github: {
    description: 'GitHub repository records',
    columns: [
      { name: 'id', type: 'string', nullable: false },
      { name: 'name', type: 'string' },
      { name: 'owner', type: 'string', filterable: true, groupable: true },
      { name: 'language', type: 'string', filterable: true, groupable: true },
      { name: 'stars', type: 'integer' },
      { name: 'private', type: 'boolean', filterable: true },
      { name: 'created_at', type: 'date' },
    ],
    rows: [
      { id: 'r1', name: 'web-app', owner: 'acme', language: 'TypeScript', stars: 120, private: false, created_at: '2024-03-14' },
      { id: 'r2', name: 'infra', owner: 'acme', language: 'HCL', stars: 8, private: true, created_at: '2025-01-22' },
      { id: 'r3', name: 'data-pipeline', owner: 'acme', language: 'Python', stars: 54, private: false, created_at: '2025-07-09' },
    ],
  },

  okta: {
    description: 'Okta user records',
    columns: [
      { name: 'id', type: 'string', nullable: false },
      { name: 'status', type: 'string', filterable: true, groupable: true },
      { name: 'login', type: 'string' },
      { name: 'first_name', type: 'string' },
      { name: 'last_name', type: 'string' },
      { name: 'last_login', type: 'datetime' },
      { name: 'department', type: 'string', filterable: true, groupable: true },
    ],
    rows: [
      { id: '00u1a', status: 'ACTIVE', login: 'alice@acme.example', first_name: 'Alice', last_name: 'Johnson', last_login: '2026-11-05T09:12:00Z', department: 'Engineering' },
      { id: '00u1b', status: 'ACTIVE', login: 'bob@acme.example', first_name: 'Bob', last_name: 'Smith', last_login: '2026-11-08T17:40:00Z', department: 'Finance' },
      { id: '00u1c', status: 'SUSPENDED', login: 'carol@acme.example', first_name: 'Carol', last_name: 'Lee', last_login: null, department: 'Engineering' },
    ],
  },

  aws: {
    description: 'AWS EC2 instance records',
    columns: [
      { name: 'id', type: 'string', nullable: false },
      { name: 'instance_type', type: 'string', filterable: true, groupable: true },
      { name: 'state', type: 'string', filterable: true, groupable: true },
      { name: 'region', type: 'string', filterable: true, groupable: true },
      { name: 'vcpus', type: 'integer' },
      { name: 'cost_per_hour', type: 'double' },
      { name: 'launched_at', type: 'datetime' },
    ],
    rows: [
      { id: 'i-0a1', instance_type: 't3.medium', state: 'running', region: 'us-east-1', vcpus: 2, cost_per_hour: 0.0416, launched_at: '2026-09-01T08:00:00Z' },
      { id: 'i-0b2', instance_type: 'm5.large', state: 'stopped', region: 'eu-west-1', vcpus: 2, cost_per_hour: 0.096, launched_at: '2026-06-18T12:30:00Z' },
      { id: 'i-0c3', instance_type: 'c5.xlarge', state: 'running', region: 'us-west-2', vcpus: 4, cost_per_hour: 0.17, launched_at: '2026-10-27T21:15:00Z' },
    ],
  },
};
