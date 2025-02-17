import { Column, Entity, Index } from "typeorm";
import { AssertionResult } from "../../../services/test-flow/test-flow-executor/node-response-validator";
import { TestFlowAssertion } from "../../../dto/in/test-flow.dto";

@Entity("test_flow_node_run", { schema: "public" })
export class TestFlowNodeRun {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "gen_random_uuid()",
  })
  id: string;

  @Column("uuid", { name: "node_id" })
  nodeId: string;

  @Column("uuid", { name: "owner_id" })
  ownerId: string;

  @Column("uuid", { name: "flow_id" })
  flowId: string;

  @Column("uuid", { name: "flow_run_id" })
  flowRunId: string;

  @Column("uuid", { name: "proxy_id", nullable: true })
  proxyId: string | null;

  @Column("text", { name: "name" })
  name: string;

  @Column("text", { name: "url" })
  url: string;

  @Column("text", { name: "body" })
  body: string;

  @Column("text", { name: "subdomain", nullable: true })
  subdomain: string | null;

  @Column("json", { name: "headers" })
  headers: Record<string, string>;

  @Column("text", { name: "method" })
  method: string;

  @Column("text", { name: "type" })
  type: string;

  @Column("uuid", { name: "subflow_id", nullable: true })
  subFlowId: string | null;

  @Column("json", { name: "assertions" })
  assertions: Array<TestFlowAssertion>;

  @Column("json", { name: "assertions_result" })
  assertionsResult: AssertionResult;

  @Column("json", { name: "response" })
  response: string;

  @Column("text")
  status: string;

  @Column("timestamp with time zone", {
    name: "finished_at",
    default: () => "now()",
  })
  finishedAt: Date;

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "now()",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "now()",
  })
  updatedAt: Date;
}
