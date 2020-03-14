(function() {var implementors = {};
implementors["calloop"] = [{"text":"impl&lt;Data&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/struct.EventLoop.html\" title=\"struct calloop::EventLoop\">EventLoop</a>&lt;Data&gt;","synthetic":true,"types":["calloop::loop_logic::EventLoop"]},{"text":"impl&lt;E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/struct.InsertError.html\" title=\"struct calloop::InsertError\">InsertError</a>&lt;E&gt;","synthetic":true,"types":["calloop::loop_logic::InsertError"]},{"text":"impl&lt;Data&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/struct.LoopHandle.html\" title=\"struct calloop::LoopHandle\">LoopHandle</a>&lt;Data&gt;","synthetic":true,"types":["calloop::loop_logic::LoopHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/struct.LoopSignal.html\" title=\"struct calloop::LoopSignal\">LoopSignal</a>","synthetic":true,"types":["calloop::loop_logic::LoopSignal"]},{"text":"impl&lt;E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/struct.Source.html\" title=\"struct calloop::Source\">Source</a>&lt;E&gt;","synthetic":true,"types":["calloop::sources::Source"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/struct.Idle.html\" title=\"struct calloop::Idle\">Idle</a>","synthetic":true,"types":["calloop::sources::Idle"]},{"text":"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/channel/struct.Sender.html\" title=\"struct calloop::channel::Sender\">Sender</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::Sender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/channel/struct.SyncSender.html\" title=\"struct calloop::channel::SyncSender\">SyncSender</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::SyncSender"]},{"text":"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/channel/struct.Channel.html\" title=\"struct calloop::channel::Channel\">Channel</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::channel::Channel"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"calloop/channel/enum.Event.html\" title=\"enum calloop::channel::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["calloop::sources::channel::Event"]},{"text":"impl&lt;E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/generic/struct.Generic.html\" title=\"struct calloop::generic::Generic\">Generic</a>&lt;E&gt;","synthetic":true,"types":["calloop::sources::generic::Generic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/generic/struct.Readiness.html\" title=\"struct calloop::generic::Readiness\">Readiness</a>","synthetic":true,"types":["calloop::sources::generic::Readiness"]},{"text":"impl&lt;E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/generic/struct.Event.html\" title=\"struct calloop::generic::Event\">Event</a>&lt;E&gt;","synthetic":true,"types":["calloop::sources::generic::Event"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/generic/struct.SourceFd.html\" title=\"struct calloop::generic::SourceFd\">SourceFd</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["calloop::sources::generic::SourceFd"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/generic/struct.SourceRawFd.html\" title=\"struct calloop::generic::SourceRawFd\">SourceRawFd</a>","synthetic":true,"types":["calloop::sources::generic::SourceRawFd"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/signals/struct.Event.html\" title=\"struct calloop::signals::Event\">Event</a>","synthetic":true,"types":["calloop::sources::signals::Event"]},{"text":"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/signals/struct.Signals.html\" title=\"struct calloop::signals::Signals\">Signals</a>","synthetic":true,"types":["calloop::sources::signals::Signals"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timer.html\" title=\"struct calloop::timer::Timer\">Timer</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::timer::Timer"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/timer/struct.TimerHandle.html\" title=\"struct calloop::timer::TimerHandle\">TimerHandle</a>&lt;T&gt;","synthetic":true,"types":["calloop::sources::timer::TimerHandle"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.UnwindSafe.html\" title=\"trait std::panic::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timeout.html\" title=\"struct calloop::timer::Timeout\">Timeout</a>","synthetic":true,"types":["calloop::sources::timer::Timeout"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()